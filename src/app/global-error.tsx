"use client"; // Error boundaries must be Client Components.

// Catches failures in the root layout itself. Because the root layout has
// crashed, this file must render its own <html> and <body>, and it stays
// deliberately dependency-free (inline styles, no @/components imports) — the
// failure it handles may be *caused* by one of those imports.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en-AU">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          background: "#181425",
          color: "#f5efe2",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.6rem" }}>DSEC is having a moment</h1>
        <p style={{ margin: 0, maxWidth: "28rem", opacity: 0.8 }}>
          Something broke badly enough that we could not render the page.
        </p>
        <button
          type="button"
          onClick={() => retry()}
          style={{
            marginTop: "0.5rem",
            border: "3px solid #f5efe2",
            background: "#e91e63",
            color: "#ffffff",
            fontWeight: 700,
            padding: "0.65rem 1.5rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
        {error.digest && (
          <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.4 }}>
            Reference: {error.digest}
          </p>
        )}
      </body>
    </html>
  );
}
