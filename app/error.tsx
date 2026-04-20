"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error tracking without exposing to user (SECURITY-09)
    console.error("[Error Boundary]", error.digest ?? "unknown")
  }, [error])

  return (
    <div
      role="alert"
      className="min-h-screen bg-background flex items-center justify-center px-4"
    >
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Algo deu errado</h1>
          <p className="text-muted-foreground">
            Ocorreu um erro inesperado. Tente novamente ou volte para o início.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset} variant="default">
            Tentar novamente
          </Button>
          <Button variant="outline" asChild>
            <a href="/">Voltar ao início</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
