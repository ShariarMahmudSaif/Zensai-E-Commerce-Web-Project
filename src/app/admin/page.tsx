export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">Admin Dashboard</h1>
      <p className="mt-2 text-ash">Role-based access control applies. This area is protected.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Sales</h2>
          <div className="mt-4 h-24 rounded-lg bg-charcoal" />
        </div>
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Inventory</h2>
          <div className="mt-4 h-24 rounded-lg bg-charcoal" />
        </div>
        <div className="rounded-xl border border-charcoal p-6">
          <h2 className="font-heading text-2xl text-offwhite">Customers</h2>
          <div className="mt-4 h-24 rounded-lg bg-charcoal" />
        </div>
      </div>
    </main>
  );
}
