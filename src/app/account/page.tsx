export default function AccountPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">My Account</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Orders</h2>
          <p className="mt-2 text-ash">Track orders in real time.</p>
        </div>
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Wishlist</h2>
          <p className="mt-2 text-ash">Save your favorites.</p>
        </div>
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Profile</h2>
          <p className="mt-2 text-ash">Manage Zensai ID and preferences.</p>
        </div>
      </div>
    </main>
  );
}
