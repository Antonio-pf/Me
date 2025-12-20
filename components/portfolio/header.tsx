"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, User, Briefcase, Wrench, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import "@/app/globals.css"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [imageError, setImageError] = useState(false)

  const githubUsername = "Antonio-pf"
  const githubAvatarUrl = `https://github.com/${githubUsername}.png`
  const fallbackAvatarUrl = "/avatar-placeholder.png"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = theme === "dark" || (!theme && prefersDark)

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  const navItems = [
    { label: "Sobre", href: "#about", icon: User },
    { label: "Experiência", href: "#experience", icon: Briefcase },
    { label: "Habilidades", href: "#skills", icon: Wrench },
    { label: "Projetos", href: "#projects", icon: Code },
    { label: "Contato", href: "#contact", icon: Mail, highlight: true },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border-2 border-primary shadow-sm transition-transform duration-300 hover:scale-110 flex-shrink-0">
              <Image
                src={imageError ? fallbackAvatarUrl : githubAvatarUrl}
                alt="Antônio Pires Felipe"
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            </div>
            <div className="min-w-0">
              <a href="#" className="text-base sm:text-lg md:text-xl font-bold hover:opacity-80 transition-opacity truncate block">
                Antônio P. Felipe
              </a>
              <div className="flex items-center">
                <Badge variant="outline" className="text-xs sm:text-sm bg-primary/10 text-primary border-primary/20 mt-0.5 sm:mt-1 font-medium">
                  Software Developer
                </Badge>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon
              return item.highlight ? (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  variant="outline"
                  className="text-sm lg:text-base font-medium border-primary text-primary hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-sm lg:text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300 cursor-pointer whitespace-nowrap px-3 py-2 rounded-md"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full cursor-pointer">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return item.highlight ? (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  variant="outline"
                  className="justify-start text-base font-medium border-primary text-primary hover:bg-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer py-3"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-left text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-300 py-3 px-3 rounded-md cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
