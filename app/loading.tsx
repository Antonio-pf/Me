export default function Loading() {
  return (
    <div
      className="min-h-screen bg-background"
      aria-busy="true"
      aria-label="Carregando..."
    >
      {/* Header skeleton */}
      <div className="h-16 border-b border-border/40 px-4 flex items-center justify-between">
        <div className="h-6 w-32 rounded bg-muted animate-pulse" />
        <div className="flex gap-4">
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="container mx-auto px-4 py-20 lg:py-32 space-y-6">
        <div className="h-4 w-40 rounded bg-muted animate-pulse" />
        <div className="h-12 w-3/4 rounded bg-muted animate-pulse" />
        <div className="h-8 w-1/2 rounded bg-muted animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
        <div className="flex gap-3 pt-4">
          <div className="h-10 w-32 rounded-md bg-muted animate-pulse" />
          <div className="h-10 w-32 rounded-md bg-muted animate-pulse" />
        </div>
      </div>

      {/* Section skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="container mx-auto px-4 py-16 space-y-6">
          <div className="h-8 w-48 rounded bg-muted animate-pulse" />
          <div className="h-1 w-20 rounded bg-muted animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 rounded-lg bg-muted animate-pulse" />
            <div className="h-48 rounded-lg bg-muted animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}
