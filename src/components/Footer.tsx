import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="no-print mt-20 border-t border-border bg-surface-sunken">
      {/* Crisis banner */}
      <div className="border-b border-border bg-warning-light px-4 py-3 text-center text-sm">
        <strong>If you are in crisis:</strong>{' '}
        <span className="text-foreground-muted">
          UK: Call 116 123 (Samaritans) or text SHOUT to 85258 | US: Call or text 988 | International:{' '}
          <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer" className="underline">
            findahelpline.com
          </a>
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">Browse</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/therapies" className="text-foreground-muted hover:text-foreground">All Therapies</Link></li>
              <li><Link href="/conditions" className="text-foreground-muted hover:text-foreground">Conditions</Link></li>
              <li><Link href="/resources" className="text-foreground-muted hover:text-foreground">Resources & Printables</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">Audiences</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/for-everyone" className="text-foreground-muted hover:text-foreground">For Everyone</Link></li>
              <li><Link href="/for-professionals" className="text-foreground-muted hover:text-foreground">For Professionals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-foreground-muted hover:text-foreground">About TheTherapies</Link></li>
              <li><Link href="/about#editorial" className="text-foreground-muted hover:text-foreground">Editorial Policy</Link></li>
              <li><Link href="/about#evidence" className="text-foreground-muted hover:text-foreground">Evidence Grading</Link></li>
              <li><Link href="/about#licensing" className="text-foreground-muted hover:text-foreground">Licensing</Link></li>
              <li><Link href="/about#accessibility" className="text-foreground-muted hover:text-foreground">Accessibility</Link></li>
              <li><Link href="/about#privacy" className="text-foreground-muted hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">Governance</h3>
            <p className="text-sm text-foreground-muted">
              All content is reviewed by clinical and evidence editors. Evidence claims are linked to verifiable sources. Content is reviewed on a scheduled cadence.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-foreground-subtle">
              TheTherapies is an educational resource. It is not a substitute for professional medical or psychological advice. Always consult a qualified practitioner.
            </p>
            <p className="whitespace-nowrap text-sm text-foreground-subtle">
              &copy; {new Date().getFullYear()} TheTherapies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
