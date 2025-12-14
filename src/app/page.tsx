import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <Hero />

      <section className="mt-12">
        <h2 className="mb-6 font-heading text-3xl text-offwhite">Preview Catalogue</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="group rounded-xl border border-charcoal p-4 transition hover:border-accent-neon">
              <a href={`/product/void-${i + 1}`} className="block">
                <div className="aspect-square overflow-hidden rounded-lg bg-charcoal">
                  <div className="h-full w-full scale-100 transition group-hover:scale-105" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-offwhite">VOID Drop #{i + 1}</span>
                  <span className="font-heading text-accent-neon">৳ {2999 + i * 100}</span>
                </div>
              </a>
              <button
                className="mt-3 w-full cursor-not-allowed rounded-full border border-ash px-5 py-2 text-ash"
                title="Login to purchase"
                disabled
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-charcoal p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-accent text-3xl text-accent-red">Winter Drop 2025</h2>
            <p className="mt-2 text-ash">Seasonal wear with neon details and oversized fits.</p>
          </div>
          <Countdown date="2025-12-31T23:59:59+06:00" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Oversized Parka", "Thermal Hoodie", "Void Beanie"].map((t, idx) => (
            <a key={idx} href="/catalog" className="group rounded-xl border border-charcoal p-4">
              <div className="aspect-[3/2] rounded-lg bg-charcoal" />
              <h3 className="mt-3 font-heading text-offwhite group-hover:text-accent-neon">{t}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-heading text-3xl text-offwhite">New Arrivals</h2>
        <Carousel
          items={Array.from({ length: 6 }).map((_, i) => ({
            title: `VOID New ${i + 1}`,
            price: 3499 + i * 150,
          }))}
        />
      </section>
    </main>
  );
}
