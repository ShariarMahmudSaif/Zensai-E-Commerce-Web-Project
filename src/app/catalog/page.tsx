export default function CatalogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">Catalog</h1>
      <p className="mt-2 text-ash">Browse products by size, color, price, and category.</p>
      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <a key={i} href={`/product/void-${i + 1}`} className="group rounded-xl border border-charcoal p-4">
            <div className="aspect-square rounded-lg bg-charcoal" />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-offwhite">VOID Drop #{i + 1}</span>
              <span className="font-heading text-accent-neon">৳ {2999 + i * 100}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
