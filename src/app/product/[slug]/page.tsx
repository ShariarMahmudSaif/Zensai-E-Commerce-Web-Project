import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const metadata: Metadata = {
  title: "Product",
};

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  if (!slug) return notFound();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square rounded-xl border border-charcoal bg-charcoal" />
        <div>
          <h1 className="font-heading text-4xl text-offwhite">VOID Piece: {slug}</h1>
          <p className="mt-2 text-ash">Streetwear essential with oversized fit and neon accents.</p>
          <p className="mt-4 font-heading text-2xl text-accent-neon">৳ 3499</p>
          <div className="mt-6 flex items-center gap-3">
            <button className="rounded-full bg-accent-red px-6 py-3 text-background">Add to Cart</button>
            <button className="rounded-full border border-offwhite px-6 py-3 text-offwhite hover:bg-offwhite hover:text-background">Wishlist</button>
          </div>
          <div className="mt-8">
            <button className="rounded-full border border-charcoal px-4 py-2 text-ash hover:text-offwhite">Size Chart</button>
          </div>
        </div>
      </div>
    </main>
  );
}
