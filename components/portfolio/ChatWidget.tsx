"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, Download, Trash2 } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { QUICK_REPLIES } from "@/lib/chat-data"
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics"

const CHAT_HISTORY_KEY = "chat-history-antonio"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CHAT_HISTORY_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
          setHasGreeted(true)
        }
      }
    } catch {
      localStorage.removeItem(CHAT_HISTORY_KEY)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Persist messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length === 0) return
    try {
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(messages))
    } catch {
      // storage quota exceeded — silently ignore
    }
  }, [messages])

  const clearHistory = () => {
    setMessages([])
    setHasGreeted(false)
    localStorage.removeItem(CHAT_HISTORY_KEY)
    trackEvent(ANALYTICS_EVENTS.CHAT_HISTORY_CLEARED)
  }

  const FALLBACK_MESSAGE =
    "Puxa, estou conversando com vários recrutadores ao mesmo tempo e meu sistema ficou sobrecarregado! 😅\n\nPara não te deixar esperando, entre em contato diretamente:\n* **E-mail**: [clique aqui](mailto:antoniopf.contact@gmail.com)\n* **LinkedIn**: [clique aqui](https://linkedin.com/in/antônio-pires-felipe-9844ab160)"

  useEffect(() => {
    if (status === "error") {
      setMessages((prev) => [
        ...prev,
        {
          id: `fallback-${Date.now()}`,
          role: "assistant" as const,
          parts: [{ type: "text" as const, text: FALLBACK_MESSAGE }],
          createdAt: new Date(),
        },
      ])
    }
  }, [status]) // eslint-disable-line react-hooks/exhaustive-deps

  const addGreeting = useCallback(() => {
    setMessages([
      {
        id: "greeting",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Olá! 👋 Sou o assistente do Antônio Pires Felipe. Posso te ajudar com informações sobre habilidades, projetos, disponibilidade e muito mais. Como posso ajudar?",
          },
        ],
      },
    ])
  }, [setMessages])

  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      setHasGreeted(true)
      addGreeting()
    }
  }, [isOpen, hasGreeted, messages.length, addGreeting])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = (text: string) => {
    if (!text.trim() || isLoading) return
    sendMessage({ text })
    setInputValue("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend(inputValue)
  }

  const getMessageText = (message: (typeof messages)[0]) => {
    return message.parts
      .filter((p) => p.type === "text")
      .map((p) => (p as { type: "text"; text: string }).text)
      .join("")
  }

  const showQuickReplies = messages.length <= 1 && !isLoading

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] rounded-2xl border border-border/60 bg-background shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary/10 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot className="h-6 w-6 text-primary" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-500 ring-1 ring-background" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">Assistente do Antônio</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Sempre online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearHistory}
                  className="rounded-full p-1 hover:bg-muted transition-colors"
                  aria-label="Limpar conversa"
                  title="Limpar conversa"
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 hover:bg-muted transition-colors"
                  aria-label="Fechar chat"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" style={{ maxHeight: "300px" }}>
              {messages.map((message) => {
                const text = getMessageText(message)
                if (!text) return null
                return (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {message.role === "user" ? (
                        text
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                            ul: ({ children }) => <ul className="list-none pl-0 mb-1 space-y-1">{children}</ul>,
                            li: ({ children }) => <li className="flex items-start gap-1"><span className="mt-0.5 shrink-0">•</span><span>{children}</span></li>,
                            a: ({ href }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline underline-offset-2 font-medium hover:opacity-75 transition-opacity"
                              >
                                clique aqui
                              </a>
                            ),
                          }}
                        >
                          {text}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>
                )
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-3 py-2">
                    <span className="flex gap-1 items-center h-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:300ms]" />
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => {
                      trackEvent(ANALYTICS_EVENTS.CHAT_QUICK_REPLY_CLICKED, { label: qr.label })
                      handleSend(qr.message)
                    }}
                    className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 text-muted-foreground"
                  >
                    {qr.label === "Baixar CV" && <Download className="h-3 w-3" />}
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-border/40"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="flex-shrink-0 h-9 w-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Enviar mensagem"
              >
                <Send className="h-4 w-4 text-primary-foreground" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
        const next = !isOpen
        setIsOpen(next)
        trackEvent(next ? ANALYTICS_EVENTS.CHAT_OPENED : ANALYTICS_EVENTS.CHAT_CLOSED)
      }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-primary shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-primary/50 transition-shadow"
        aria-label={isOpen ? "Fechar assistente" : "Abrir assistente"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
