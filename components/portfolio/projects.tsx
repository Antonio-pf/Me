"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  gifUrl: string
}

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "HEY - Sistema de Votação de Perguntas",
      description:
        "Sistema de votação e enquetes onde usuários podem criar perguntas, salvar como rascunho, publicar e receber likes/dislikes. Inclui login via GitHub e modo dark.",
      technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS", "SQLite"],
      githubUrl: "https://github.com/Antonio-pf/hey",
      gifUrl: "/voting-system-with-questions-and-polls-interface.jpg",
    },
    {
      id: 2,
      title: "OrçaMente - App de Educação Financeira",
      description:
        "Aplicativo mobile para controle de gastos com cofrinho virtual, definição de metas, quiz de perfil financeiro e cursos. Integrado com Firebase para autenticação e armazenamento.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
      githubUrl: "https://github.com/Antonio-pf/OrcaMente",
      demoUrl: "https://app-orcamente.web.app/",
      gifUrl: "/mobile-financial-education-app-with-savings-tracke.jpg",
    },
    {
      id: 3,
      title: "SaldoZen - Gerenciador de Despesas",
      description:
        "Plataforma web para gerenciamento financeiro pessoal com cadastro de despesas, dashboard intuitivo e visualização clara da situação financeira.",
      technologies: ["Python", "Flask", "SQLAlchemy", "Bootstrap", "Jinja2"],
      githubUrl: "https://github.com/Antonio-pf/crud-ihc",
      demoUrl: "https://antoniopf.pythonanywhere.com/sobre",
      gifUrl: "/expense-tracker-dashboard-with-financial-charts.jpg",
    },
    {
      id: 4,
      title: "Bloco de Detetive - Clue Helper",
      description:
        "Aplicativo web para jogadores do jogo Detetive (Clue) registrarem suas deduções. Inclui modo 'No Cheating', temas personalizados e armazenamento local.",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      githubUrl: "https://github.com/Antonio-pf/bloco-anotacao-clue",
      demoUrl: "https://antonio-pf.github.io/bloco-anotacao-clue/",
      gifUrl: "/detective-clue-board-game-note-taking-app.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Projetos</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Alguns dos principais projetos que desenvolvi ao longo da minha carreira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.gifUrl || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-90" : "opacity-0"
                    }`}
                  ></div>
                </div>

                <CardContent className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground text-xs sm:text-sm rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
