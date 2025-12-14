"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] overflow-hidden rounded-2xl border border-charcoal">
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center bg-cover bg-fixed opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-start justify-center gap-6 p-10">
        <h1 className="font-heading text-6xl uppercase tracking-wider text-offwhite [animation:neon-glow_1.8s_ease-in-out_infinite]">
          Redefining Streetwear in Bangladesh
        </h1>
        <p className="max-w-2xl text-ash">
          Bold, edgy, urban. Neon accents and oversized fits for the next generation.
        </p>
        <Link
          href="/login"
          className="rounded-full bg-accent-neon px-8 py-3 font-heading text-black transition hover:opacity-90 [animation:ripple_1.6s_ease-out_infinite]"
        >
          Login to Shop
        </Link>
      </div>
    </section>
  );
}
