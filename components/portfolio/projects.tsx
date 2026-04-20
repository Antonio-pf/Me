"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Code2, BarChart2, Sword, HelpCircle, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { PROJECTS, type ProjectData } from "@/lib/my-data"
import { trackEvent, ANALYTICS_EVENTS } from "@/lib/analytics"

const FALLBACK_ICONS: Record<number, React.ReactNode> = {
  1: <HelpCircle className="w-12 h-12" />,
  2: <BarChart2 className="w-12 h-12" />,
  3: <Code2 className="w-12 h-12" />,
  4: <Sword className="w-12 h-12" />,
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

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
    trackEvent(ANALYTICS_EVENTS.PROJECT_LIGHTBOX_NAVIGATED, { direction: 'prev', project: title })
  }
  const next = () => {
    setCurrent((c) => (c + 1) % images.length)
    trackEvent(ANALYTICS_EVENTS.PROJECT_LIGHTBOX_NAVIGATED, { direction: 'next', project: title })
  }

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
            <div className="relative w-full min-h-[60vh]">
              <Image
                src={images[current]}
                alt={`${title} - screenshot ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>

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
                  className={`relative shrink-0 h-14 w-20 rounded overflow-hidden border-2 transition-all ${
                    i === current ? "border-primary opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="80px" />
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
        onClick={() => {
          setLightboxOpen(true)
          trackEvent(ANALYTICS_EVENTS.PROJECT_LIGHTBOX_OPENED, { project: title })
        }}
        aria-label={`Ver screenshots de ${title}`}
      >
        <Image
          src={images[0]}
          alt={`${title} - screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
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
            {PROJECTS.map((project: ProjectData, index) => (
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
                    fallbackIcon={FALLBACK_ICONS[project.id]}
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
                        onClick={() => {
                          trackEvent(ANALYTICS_EVENTS.PROJECT_GITHUB_CLICKED, { project: project.title })
                          window.open(project.githubUrl, "_blank")
                        }}
                      >
                        <Github className="h-4 w-4" />
                        <span>Código</span>
                      </Button>
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                          onClick={() => {
                            trackEvent(ANALYTICS_EVENTS.PROJECT_DEMO_CLICKED, { project: project.title })
                            window.open(project.demoUrl, "_blank")
                          }}
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
