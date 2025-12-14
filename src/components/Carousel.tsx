"use client";
import { useEffect, useRef } from "react";

export default function Carousel({ items }: { items: { title: string; price: number }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % items.length;
      el.scrollTo({ left: i * 240, behavior: "smooth" });
    }, 2500);
    return () => clearInterval(id);
  }, [items.length]);
  return (
    <div ref={ref} className="flex gap-4 overflow-x-auto scroll-smooth">
      {items.map((it, idx) => (
        <div key={idx} className="min-w-[220px] rounded-xl border border-charcoal p-4 transition hover:border-accent-neon hover:scale-[1.02]">
          <div className="aspect-square rounded-lg bg-charcoal" />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-offwhite">{it.title}</span>
            <span className="font-heading text-accent-neon">৳ {it.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
