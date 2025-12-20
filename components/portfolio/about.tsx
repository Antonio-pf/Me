"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre mim</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            <p>
              Sou <strong className="text-foreground">Desenvolvedor Full Stack</strong>, com foco atual em{" "}
              <strong className="text-foreground">.NET</strong> e experiência com{" "}
              <strong className="text-foreground">PHP (Laravel)</strong>,{" "}
              <strong className="text-foreground">jQuery</strong> e{" "}
              <strong className="text-foreground">PostgreSQL</strong>.
            </p>
            <p>
              Estou cursando <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong> na FATEC
              (5º semestre). Atuei no desenvolvimento de sistemas ERP, aplicando boas práticas como Clean Code.
            </p>
            <p>
              Gosto de aprender, resolver problemas com tecnologia e contribuir com soluções que gerem valor real para o
              usuário. Estou sempre aberto a novos desafios e valorizo a oportunidade de impulsionar o sucesso da
              equipe.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mt-12 max-w-md mx-auto px-2">
            <Card>
              <CardContent className="p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold">Formação</h3>
                </div>
                <div>
                  <h4 className="font-medium text-base sm:text-lg">Análise e Desenvolvimento de Sistemas</h4>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">FATEC - Cursando (5º semestre)</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm sm:text-base font-medium">Certificações:</p>
                    <ul className="text-sm sm:text-base text-muted-foreground space-y-1">
                      <li>• AWS Partner: Technical Accredited</li>
                      <li>• Programming with SQL - Oracle</li>
                      <li>• Formação Laravel - Alura</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
