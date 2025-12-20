"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { 
  SiDotnet, 
  SiGithubactions, 
  SiLaravel, 
  SiPhp, 
  SiJquery, 
  SiPostgresql, 
  SiBootstrap 
} from "react-icons/si"
import { TbTestPipe, TbBrandCSharp } from "react-icons/tb"
import { FaLeaf } from "react-icons/fa"

interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  current?: boolean
  description: string[]
  technologies: {
    name: string
    icon: React.ComponentType<{ className?: string }>
    color: string
  }[]
}

const experiences: Experience[] = [
  {
    id: "cit",
    title: "Desenvolvedor",
    company: "CI&T",
    location: "Remote",
    period: "Mar 2025 - Presente",
    current: true,
    description: [
      "Desenvolvimento com foco em qualidade e confiabilidade do produto",
      "Implementação de testes automatizados em .NET utilizando BDD (Reqnroll)",
      "Garantia de que mudanças no código não impactem funcionalidades existentes",
      "Integração dos testes em pipelines de CI no GitHub Actions para validação contínua",
    ],
    technologies: [
      { name: ".NET", icon: SiDotnet, color: "bg-purple-500/20 text-purple-400 dark:bg-purple-500/30 dark:text-purple-300" },
      { name: "C#", icon: TbBrandCSharp, color: "bg-purple-600/20 text-purple-500 dark:bg-purple-600/30 dark:text-purple-400" },
      { name: "BDD", icon: TbTestPipe, color: "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
      { name: "Reqnroll", icon: FaLeaf, color: "bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/30 dark:text-emerald-400" },
    ],
  },
  {
    id: "nicnet",
    title: "Desenvolvedor Júnior",
    company: "NicNet",
    location: "Cravinhos, SP",
    period: "Mai 2023 - Mar 2025",
    description: [
      "Implementação de módulos no sistema ERP utilizando Laravel",
      "Desenvolvimento de controle de estacionamento e lançamentos contábeis",
      "Geração de relatórios dinâmicos com gráficos",
      "Correção de bugs com foco em práticas de Clean Code",
      "Ajustes no front-end para melhor experiência do usuário",
    ],
    technologies: [
      { name: "Laravel", icon: SiLaravel, color: "bg-red-500/20 text-red-600 dark:bg-red-500/30 dark:text-red-400" },
      { name: "PHP", icon: SiPhp, color: "bg-indigo-500/20 text-indigo-600 dark:bg-indigo-500/30 dark:text-indigo-400" },
      { name: "jQuery", icon: SiJquery, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "bg-blue-600/20 text-blue-700 dark:bg-blue-600/30 dark:text-blue-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "bg-purple-500/20 text-purple-600 dark:bg-purple-500/30 dark:text-purple-400" },
    ],
  },
]

export function Experience() {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id)
  const selectedExperience = experiences.find((exp) => exp.id === selectedId)!

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Experiência Profissional</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-muted-foreground text-base sm:text-lg">Minha jornada profissional até agora</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 sm:gap-6">
            <div className="space-y-2 px-2">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    selectedId === exp.id
                      ? "bg-primary/10 border-primary shadow-sm"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm sm:text-base">{exp.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{exp.period}</p>
                    {exp.current && (
                      <Badge variant="secondary" className="text-xs sm:text-sm mt-1">
                        Atual
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <Card className="p-4 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{selectedExperience.title}</h3>
                      <p className="text-lg sm:text-xl text-muted-foreground mt-1">{selectedExperience.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base">
                      <div className="flex items-center gap-2 bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium text-xs sm:text-sm">{selectedExperience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="text-xs sm:text-sm">{selectedExperience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg sm:text-xl">Detalhes:</h4>
                    <ul className="space-y-3">
                      {selectedExperience.description.map((item, index) => (
                        <li key={index} className="flex gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 sm:pt-6 border-t">
                    <h4 className="font-semibold text-lg sm:text-xl">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => {
                        const Icon = tech.icon
                        return (
                          <Badge key={index} variant="secondary" className={`${tech.color} text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 border-current/20`}>
                            <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            {tech.name}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
