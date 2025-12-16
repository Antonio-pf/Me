"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

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
    icon: string
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
      { name: ".NET", icon: "🟣", color: "bg-purple-500/10 text-purple-500" },
      { name: "C#", icon: "🟪", color: "bg-purple-600/10 text-purple-600" },
      { name: "BDD", icon: "🧪", color: "bg-green-500/10 text-green-500" },
      { name: "GitHub Actions", icon: "⚙️", color: "bg-gray-500/10 text-gray-500" },
      { name: "Reqnroll", icon: "🥒", color: "bg-emerald-500/10 text-emerald-500" },
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
      { name: "Laravel", icon: "🔴", color: "bg-red-500/10 text-red-500" },
      { name: "PHP", icon: "🐘", color: "bg-indigo-500/10 text-indigo-500" },
      { name: "jQuery", icon: "💙", color: "bg-blue-500/10 text-blue-500" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-600/10 text-blue-600" },
      { name: "Bootstrap", icon: "🅱️", color: "bg-purple-500/10 text-purple-500" },
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
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experiência Profissional</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-muted-foreground text-lg">Minha jornada profissional até agora</p>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            <div className="space-y-2">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    selectedId === exp.id
                      ? "bg-primary/10 border-primary shadow-sm"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                    {exp.current && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        Atual
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <Card className="p-6 lg:p-8">
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
                      <h3 className="text-2xl font-bold">{selectedExperience.title}</h3>
                      <p className="text-xl text-muted-foreground mt-1">{selectedExperience.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-md">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{selectedExperience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedExperience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Detalhes:</h4>
                    <ul className="space-y-3">
                      {selectedExperience.description.map((item, index) => (
                        <li key={index} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h4 className="font-semibold text-lg">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className={`${tech.color} text-sm px-3 py-1`}>
                          <span className="mr-2">{tech.icon}</span>
                          {tech.name}
                        </Badge>
                      ))}
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