export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <h1 className="font-heading text-4xl text-offwhite">Login / Signup</h1>
      <p className="mt-2 text-ash">Email or phone login with OTP verification.</p>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-lg border border-charcoal bg-background p-3 text-offwhite" placeholder="Email or Phone" />
        <button className="w-full rounded-full bg-accent-neon px-6 py-3 text-black">Send OTP</button>
      </form>
      <p className="mt-6 text-ash">Access to cart, checkout, and dashboards requires login.</p>
    </main>
  );
}
