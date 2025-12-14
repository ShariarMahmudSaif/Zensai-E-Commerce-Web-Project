export default function LookbooksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">Lookbooks</h1>
      <p className="mt-2 text-ash">Curated fits, urban stories, and neon-accent visuals.</p>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-xl border border-charcoal bg-charcoal" />
        ))}
      </div>
    </main>
  );
}
