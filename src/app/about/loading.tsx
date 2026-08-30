// Suspense fallback while the About page loads its team/partners feeds.
// Uses only existing classes.
export default function Loading() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-hidden="true">
      <div className="h-4 w-24 animate-pulse bg-panel-2" />
      <div className="mt-4 h-10 w-3/4 animate-pulse bg-panel-2" />
      <div className="mt-3 h-4 w-1/2 animate-pulse bg-panel-2" />
      <div className="stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="pixel-card flex flex-col gap-3 p-5">
            <div className="aspect-square w-full animate-pulse bg-panel-2" />
            <div className="h-5 w-2/3 animate-pulse bg-panel-2" />
            <div className="h-4 w-1/2 animate-pulse bg-panel-2" />
          </div>
        ))}
      </div>
    </section>
  );
}
