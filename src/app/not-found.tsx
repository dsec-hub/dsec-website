import Link from "next/link";
import { PixelDuck } from "@/components/pixel-duck";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <PixelDuck name="duck-rocket" alt="" size={140} bob />
      <p className="eyebrow mt-6">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-paper/75">
        That link does not go anywhere any more.
      </p>
      <Link href="/" className="btn btn-pink mt-6">
        Back home
      </Link>
    </section>
  );
}
