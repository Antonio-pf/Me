"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <motion.section 
      id="about" 
      className="py-20 lg:py-32"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre mim</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </motion.div>

          <motion.div 
            className="space-y-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Sou <strong className="text-foreground">Analista de Sistemas Jr.</strong> na{" "}
              <strong className="text-foreground">CI&T</strong>, focado na intersecção entre{" "}
              <strong className="text-foreground">Inteligência Artificial Generativa</strong> e desenvolvimento de 
              software escalável.
            </p>
            <p>
              Atualmente, estou focado na construção de <strong className="text-foreground">sistemas inteligentes e agentes 
              autônomos</strong>, utilizando <strong className="text-foreground">Python (FastAPI)</strong> e frameworks de 
              orquestração como <strong className="text-foreground">LangChain</strong> e{" "}
              <strong className="text-foreground">LangGraph</strong>. Minha atuação envolve desde a criação de fluxos 
              complexos de RAG (com Langflow e MongoDB) até o desenvolvimento de interfaces modernas em Angular.
            </p>
            <p>
              Possuo uma base sólida vinda do ecossistema <strong className="text-foreground">.NET</strong> e{" "}
              <strong className="text-foreground">PHP (Laravel)</strong>, onde apliquei boas práticas de Clean Code e 
              arquitetura em sistemas ERP. Essa bagagem de engenharia me permite hoje construir soluções de IA que não 
              são apenas "inteligentes", mas também robustas.
            </p>
            <p>
              Cursando <strong className="text-foreground">Análise e Desenvolvimento de Sistemas</strong> na FATEC 
              (5º semestre). Acredito que a tecnologia deve facilitar a vida do usuário final, e hoje encontro esse 
              propósito criando assistentes e automações que transformam dados em valor real.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-1 gap-6 mt-12 max-w-md mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
