export default function Footer() {
  return (
    <footer className="mt-16 border-t border-charcoal bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ash">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-offwhite">© {new Date().getFullYear()} Zensai Clothing</p>
            <p className="mt-2">Dhaka, Bangladesh</p>
            <p className="mt-1">support@zensai.bd</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="/" className="hover:text-offwhite">Home</a>
            <a href="/catalog" className="hover:text-offwhite">Shop</a>
            <a href="/about" className="hover:text-offwhite">About</a>
            <a href="/contact" className="hover:text-offwhite">Contact</a>
            <div className="mt-2 flex gap-4">
              <a href="/policies/cookies" className="hover:text-offwhite">Cookies</a>
              <a href="/policies/returns" className="hover:text-offwhite">Returns</a>
              <a href="/policies/privacy" className="hover:text-offwhite">Privacy</a>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4 md:justify-end">
            <a aria-label="Instagram" href="https://instagram.com" className="text-offwhite transition hover:text-accent-neon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
            </a>
            <a aria-label="TikTok" href="https://tiktok.com" className="text-offwhite transition hover:text-accent-neon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3h2c.3 1.7 1.5 3.2 3 3.9v2.1c-1.2-.1-2.3-.5-3.3-1.1v6.1a5.7 5.7 0 1 1-4.6-5.6v2.3a3.5 3.5 0 1 0 2.6 3.4V3z"/></svg>
            </a>
            <a aria-label="Facebook" href="https://facebook.com" className="text-offwhite transition hover:text-accent-neon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 9h3l-1 4h-2v7h-4v-7H7V9h3V7a4 4 0 0 1 4-4h2v3h-2a1 1 0 0 0-1 1z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
