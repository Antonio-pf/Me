"use client"

import { ArrowDown } from "lucide-react"
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
            <p className="text-xl md:text-2xl text-muted-foreground">Desenvolvedor Full Stack</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Construindo experiências web robustas e escaláveis com foco em qualidade, confiabilidade e boas práticas de
            desenvolvimento.
          </p>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-bounce mt-8 cursor-pointer"
          >
            <span>Explorar</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

