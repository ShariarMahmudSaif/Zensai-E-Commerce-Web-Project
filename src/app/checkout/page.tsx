export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">Checkout</h1>
      <p className="mt-2 text-ash">Pay via bKash, Nagad, Rocket, COD, cards.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Shipping</h2>
          <div className="mt-4 h-40 rounded-lg bg-charcoal" />
        </div>
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Payment</h2>
          <div className="mt-4 flex flex-col gap-3">
            <button className="rounded-full bg-accent-neon px-6 py-3 text-black">bKash</button>
            <button className="rounded-full bg-accent-red px-6 py-3 text-background">Nagad</button>
            <button className="rounded-full border border-offwhite px-6 py-3 text-offwhite">Rocket</button>
            <button className="rounded-full border border-offwhite px-6 py-3 text-offwhite">Card</button>
            <button className="rounded-full border border-offwhite px-6 py-3 text-offwhite">Cash on Delivery</button>
          </div>
        </div>
      </div>
    </main>
  );
}
