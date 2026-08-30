"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // Once OPS-01 lands, report to Sentry here instead.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <p className="eyebrow">Something broke</p>
      <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-3 text-paper/75">
        That is on us, not you. Try again — if it keeps happening, let the
        committee know.
      </p>
      <button type="button" onClick={() => retry()} className="btn btn-pink mt-6">
        Try again
      </button>
      {error.digest && (
        <p className="mt-6 font-mono text-xs text-paper/40">
          Reference: {error.digest}
        </p>
      )}
    </section>
  );
}
