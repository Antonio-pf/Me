"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  SiPhp, 
  SiLaravel, 
  SiDotnet, 
  SiSpring, 
  SiMysql,
  SiJavascript, 
  SiJquery, 
  SiBootstrap, 
  SiHtml5, 
  SiCss3,
  SiGit, 
  SiDocker, 
  SiGithubactions, 
  SiAmazon
} from "react-icons/si"
import { TbBrandCSharp, TbTestPipe } from "react-icons/tb"
import { FaCode } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export function Skills() {
  const skillCategories: { title: string; skills: Skill[] }[] = [
    {
      title: "Backend",
      skills: [
        { name: "PHP", icon: SiPhp, color: "bg-indigo-500/20 text-indigo-600 dark:bg-indigo-500/30 dark:text-indigo-400" },
        { name: "Laravel", icon: SiLaravel, color: "bg-red-500/20 text-red-600 dark:bg-red-500/30 dark:text-red-400" },
        { name: "C#", icon: TbBrandCSharp, color: "bg-purple-600/20 text-purple-500 dark:bg-purple-600/30 dark:text-purple-400" },
        { name: ".NET", icon: SiDotnet, color: "bg-purple-500/20 text-purple-400 dark:bg-purple-500/30 dark:text-purple-300" },
        { name: "Spring Boot", icon: SiSpring, color: "bg-green-600/20 text-green-700 dark:bg-green-600/30 dark:text-green-400" },
        { name: "SQL", icon: SiMysql, color: "bg-blue-600/20 text-blue-700 dark:bg-blue-600/30 dark:text-blue-400" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-500/20 text-yellow-600 dark:bg-yellow-500/30 dark:text-yellow-400" },
        { name: "jQuery", icon: SiJquery, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
        { name: "Bootstrap", icon: SiBootstrap, color: "bg-purple-500/20 text-purple-600 dark:bg-purple-500/30 dark:text-purple-400" },
        { name: "HTML", icon: SiHtml5, color: "bg-orange-500/20 text-orange-600 dark:bg-orange-500/30 dark:text-orange-400" },
        { name: "CSS", icon: SiCss3, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "bg-orange-600/20 text-orange-700 dark:bg-orange-600/30 dark:text-orange-400" },
        { name: "Docker", icon: SiDocker, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
        { name: "AWS", icon: SiAmazon, color: "bg-orange-500/20 text-orange-600 dark:bg-orange-500/30 dark:text-orange-400" },
      ],
    },
    {
      title: "Práticas",
      skills: [
        { name: "TDD", icon: TbTestPipe, color: "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400" },
        { name: "BDD", icon: TbTestPipe, color: "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400" },
        { name: "Clean Code", icon: MdCleaningServices, color: "bg-teal-500/20 text-teal-600 dark:bg-teal-500/30 dark:text-teal-400" },
        { name: "CI/CD", icon: SiGithubactions, color: "bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400" },
        { name: "Agile", icon: FaCode, color: "bg-gray-500/20 text-gray-600 dark:bg-gray-500/30 dark:text-gray-400" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Habilidades</h2>
            <div className="w-20 h-1 bg-primary"></div>
            <p className="text-base sm:text-lg text-muted-foreground">Tecnologias e ferramentas com as quais trabalho</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title} className="border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon
                      return (
                        <Badge 
                          key={skill.name} 
                          variant="secondary" 
                          className={`${skill.color} text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 border-current/20`}
                        >
                          <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          {skill.name}
                        </Badge>
                      )
                    })}
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
