"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"
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
      icon: Download,
      label: "Baixar Currículo",
      href: "/curriculo.pdf",
    },
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
    <motion.section 
      id="contact" 
      className="py-20 lg:py-32 bg-muted/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vamos conversar?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
              <Card className="border-border/50">
                <CardContent className="p-4 md:p-6 text-center space-y-3">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-medium text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base font-medium hover:text-primary transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm md:text-base font-medium break-words">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  )
}
