export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-base text-muted-foreground">
            © {currentYear} Antônio Pires Felipe. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">Desenvolvido com Next.js e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
