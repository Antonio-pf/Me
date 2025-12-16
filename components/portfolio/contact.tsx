"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "antoniopf.contact@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=antoniopf.contact@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(16) 99196-7415",
      href: "tel:+5516991967415",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Cravinhos - SP, Brasil",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/antônio-pires-felipe-9844ab160",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Antonio-pf",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vamos conversar?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <Card key={item.label} className="border-border/50">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent"
                onClick={() => window.open(link.href, "_blank")}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
