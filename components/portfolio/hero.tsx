"use client"

import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Inter, Newsreader } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader',
})

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Download,
      label: "Baixar Currículo",
      href: "/curriculo.pdf",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/antônio-pires-felipe-9844ab160",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Antonio-pf",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 px-4 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance px-2">
              Antônio Pires Felipe
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">Desenvolvedor Full Stack</p>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Construindo experiências web robustas e escaláveis com foco em qualidade, confiabilidade e boas práticas de
            desenvolvimento.
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(link.href, "_blank")}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors animate-bounce mt-8 cursor-pointer font-medium"
            aria-label="Rolar para a seção sobre"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>Explorar</span>
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
