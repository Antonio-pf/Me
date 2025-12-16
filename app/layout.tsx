// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter, Newsreader } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Configure as fontes
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

export const metadata: Metadata = {
  title: "Antônio Pires Felipe - Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Antônio Pires Felipe, desenvolvedor full stack especializado em Laravel, C#, Spring Boot e desenvolvimento de soluções robustas e escaláveis.",
  generator: "v0.app",
  keywords: ["desenvolvedor", "full stack", "Laravel", "C#", "Spring Boot", "PHP", "portfolio"],
  authors: [{ name: "Antônio Pires Felipe" }],
  openGraph: {
    title: "Antônio Pires Felipe - Desenvolvedor Full Stack",
    description: "Portfólio profissional de desenvolvedor full stack",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}