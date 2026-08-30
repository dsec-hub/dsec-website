// Suspense fallback while a committee-authored custom page (/[slug]) loads.
// Uses only existing classes.
export default function Loading() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6" aria-hidden="true">
      <div className="h-4 w-24 animate-pulse bg-panel-2" />
      <div className="mt-4 h-10 w-3/4 animate-pulse bg-panel-2" />
      <div className="mt-8 flex flex-col gap-3">
        <div className="h-4 w-full animate-pulse bg-panel-2" />
        <div className="h-4 w-full animate-pulse bg-panel-2" />
        <div className="h-4 w-5/6 animate-pulse bg-panel-2" />
        <div className="h-4 w-2/3 animate-pulse bg-panel-2" />
      </div>
    </section>
  );
}
