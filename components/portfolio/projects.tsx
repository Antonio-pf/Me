"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, BarChart2, Sword, HelpCircle, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  images: string[]
  fallbackIcon: React.ReactNode
}

function ProjectLightbox({
  images,
  title,
  initialIndex,
  open,
  onClose,
}: {
  images: string[]
  title: string
  initialIndex: number
  open: boolean
  onClose: () => void
}) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur border-border/50 overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="relative flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
            <span className="text-sm font-medium text-muted-foreground">
              {title} — {current + 1} / {images.length}
            </span>
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center bg-muted/30 min-h-[60vh]">
            <img
              src={images[current]}
              alt={`${title} - screenshot ${current + 1}`}
              className="max-h-[70vh] max-w-full object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 p-2 rounded-full bg-background/80 hover:bg-background border border-border/50 transition-colors"
                  aria-label="Próxima"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto justify-center border-t border-border/40">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`shrink-0 h-14 w-20 rounded overflow-hidden border-2 transition-all ${
                    i === current ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ProjectThumbnail({
  images,
  title,
  fallbackIcon,
}: {
  images: string[]
  title: string
  fallbackIcon: React.ReactNode
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (images.length === 0) {
    return (
      <div className="aspect-video flex flex-col items-center justify-center gap-3 bg-muted/50 text-muted-foreground">
        <div className="text-primary/60">{fallbackIcon}</div>
        <span className="text-xs text-muted-foreground/70">Screenshots em breve</span>
      </div>
    )
  }

  return (
    <>
      <button
        className="relative group/thumb w-full aspect-video overflow-hidden bg-muted block text-left"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Ver screenshots de ${title}`}
      >
        <img
          src={images[0]}
          alt={`${title} - screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
            <ZoomIn className="h-8 w-8" />
            {images.length > 1 && (
              <span className="text-xs font-medium bg-black/40 px-2 py-0.5 rounded-full">
                +{images.length - 1} imagens
              </span>
            )}
          </div>
        </div>
      </button>

      <ProjectLightbox
        images={images}
        title={title}
        initialIndex={0}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "HEY - Sistema de Votação de Perguntas",
      description:
        "Sistema de votação e enquetes onde usuários podem criar perguntas, salvar como rascunho, publicar e receber likes/dislikes. Inclui login via GitHub e modo dark.",
      technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/Antonio-pf/hey",
      images: [],
      fallbackIcon: <HelpCircle className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "OrçaMente - App de Educação Financeira",
      description:
        "Aplicativo mobile para controle de gastos com cofrinho virtual, definição de metas, quiz de perfil financeiro e cursos. Integrado com Firebase para autenticação e armazenamento.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
      githubUrl: "https://github.com/Antonio-pf/OrcaMente",
      demoUrl: "https://app-orcamente.web.app/",
      images: [
        "/exemples-projects/orcamente/login.png",
        "/exemples-projects/orcamente/controle.png",
        "/exemples-projects/orcamente/extrato.png",
        "/exemples-projects/orcamente/config.png",
        "/exemples-projects/orcamente/dados_user.png",
        "/exemples-projects/orcamente/educacao.png",
      ],
      fallbackIcon: <BarChart2 className="w-12 h-12" />,
    },
    {
      id: 3,
      title: "SaldoZen - Gerenciador de Despesas",
      description:
        "Plataforma web para gerenciamento financeiro pessoal com cadastro de despesas, dashboard intuitivo e visualização clara da situação financeira.",
      technologies: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "Jinja2"],
      githubUrl: "https://github.com/Antonio-pf/crud-ihc",
      demoUrl: "https://antoniopf.pythonanywhere.com/sobre",
      images: [],
      fallbackIcon: <Code2 className="w-12 h-12" />,
    },
    {
      id: 4,
      title: "Bloco de Detetive - Clue Helper",
      description:
        "Aplicativo web para jogadores do jogo Detetive (Clue) registrarem suas deduções. Inclui modo 'No Cheating', temas personalizados e armazenamento local.",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      githubUrl: "https://github.com/Antonio-pf/bloco-anotacao-clue",
      demoUrl: "https://antonio-pf.github.io/bloco-anotacao-clue/",
      images: [
        "/exemples-projects/bloco-detetive-clue/tela-inicial.png",
        "/exemples-projects/bloco-detetive-clue/modo-privado.png",
      ],
      fallbackIcon: <Sword className="w-12 h-12" />,
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 lg:py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            className="space-y-4 px-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Projetos</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Alguns dos principais projetos que desenvolvi ao longo da minha carreira.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                  <ProjectThumbnail
                    images={project.images}
                    title={project.title}
                    fallbackIcon={project.fallbackIcon}
                  />

                  <CardContent className="p-4 sm:p-6 space-y-4 flex flex-col flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground text-xs sm:text-sm rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-transparent cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4" />
                        <span>Código</span>
                      </Button>
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Demo</span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
