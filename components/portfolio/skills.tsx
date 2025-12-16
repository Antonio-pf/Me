"use client"

import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "C#", ".NET", "Spring Boot", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "jQuery", "Bootstrap", "HTML", "CSS"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "GitHub Actions", "AWS"],
    },
    {
      title: "Práticas",
      skills: ["TDD", "BDD", "Clean Code", "CI/CD", "Agile"],
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Habilidades</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
