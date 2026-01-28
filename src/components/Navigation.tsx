'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="no-print sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-foreground hover:text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 12V2" />
                <path d="M12 12l7-7" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">TheTherapies</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/therapies">Therapies</NavLink>
            <NavLink href="/conditions">Conditions</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/for-everyone">For Everyone</NavLink>
            <NavLink href="/for-professionals">For Professionals</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground-muted hover:bg-surface-sunken md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border pb-4 pt-2 md:hidden">
            <MobileNavLink href="/therapies" onClick={() => setMobileOpen(false)}>Therapies</MobileNavLink>
            <MobileNavLink href="/conditions" onClick={() => setMobileOpen(false)}>Conditions</MobileNavLink>
            <MobileNavLink href="/resources" onClick={() => setMobileOpen(false)}>Resources</MobileNavLink>
            <MobileNavLink href="/for-everyone" onClick={() => setMobileOpen(false)}>For Everyone</MobileNavLink>
            <MobileNavLink href="/for-professionals" onClick={() => setMobileOpen(false)}>For Professionals</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:bg-surface-sunken hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground-muted hover:bg-surface-sunken hover:text-foreground"
    >
      {children}
    </Link>
  );
}
