// Suspense fallback while the projects feed loads. Mirrors the page's card grid
// so the layout doesn't jump when content arrives. Uses only existing classes.
export default function Loading() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-hidden="true">
      <div className="h-4 w-24 animate-pulse bg-panel-2" />
      <div className="mt-4 h-10 w-2/3 animate-pulse bg-panel-2" />
      <div className="stagger mt-8 grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="pixel-card overflow-hidden">
            <div className="aspect-video w-full animate-pulse bg-panel-2" />
            <div className="flex flex-col gap-3 p-5">
              <div className="h-6 w-3/4 animate-pulse bg-panel-2" />
              <div className="h-4 w-full animate-pulse bg-panel-2" />
              <div className="h-4 w-1/2 animate-pulse bg-panel-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
