"use client"

import { ArrowDown, Download } from "lucide-react"
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

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Antônio Pires Felipe
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">Desenvolvedor Full Stack</p>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Construindo experiências web robustas e escaláveis com foco em qualidade, confiabilidade e boas práticas de
            desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => window.open('/curriculo.pdf', '_blank')}
              className="gap-2 text-base font-medium"
            >
              <Download className="h-5 w-5" />
              <span>Baixar Currículo</span>
            </Button>

            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer font-medium"
            >
              <span>Explorar</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
