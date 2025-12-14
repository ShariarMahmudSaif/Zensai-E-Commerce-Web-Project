import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-heading text-3xl tracking-widest">
          <span className="text-accent-neon">ZEN</span>
          <span className="text-accent-red">SAI</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-ash hover:text-offwhite">Home</Link>
          <Link href="/catalog" className="text-ash hover:text-offwhite">Shop</Link>
          <Link href="/lookbooks" className="text-ash hover:text-offwhite">Collections</Link>
          <Link href="/about" className="text-ash hover:text-offwhite">About</Link>
          <Link href="/contact" className="text-ash hover:text-offwhite">Contact</Link>
          <Link href="/login" className="rounded-full bg-accent-neon px-3 py-1 text-black transition-all hover:opacity-90">
            Login / Signup
          </Link>
          <div className="flex items-center gap-2">
            <Link href="?lang=en" className="text-ash hover:text-offwhite">EN</Link>
            <span className="text-ash">/</span>
            <Link href="?lang=bn" className="text-ash hover:text-offwhite">BN</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
