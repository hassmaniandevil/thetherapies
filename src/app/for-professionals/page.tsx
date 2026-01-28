import { Metadata } from 'next';
import Link from 'next/link';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'For Professionals',
  description: 'How TheTherapies is governed \u2014 evidence grading, editorial policy, and source verification for clinicians.',
};

export default function ForProfessionalsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <header className="mb-12">
        <h1 className="mb-4">For Professionals</h1>
        <p className="text-lg leading-relaxed text-foreground-muted">
          TheTherapies is designed to be a resource you can trust and share. Here&apos;s how we ensure accuracy,
          how we grade evidence, and how you can use this site in your practice.
        </p>
      </header>

      <div className="space-y-10">
        <section className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">Evidence grading</h2>
          <p className="mb-6 leading-relaxed text-foreground-muted">
            Every therapy on TheTherapies includes an evidence panel with graded claims. We use five tiers:
          </p>
          <div className="space-y-3">
            {[
              { badge: 'guideline', label: 'Guideline Supported', desc: 'Recommended by at least one major clinical guideline (e.g., NICE, APA, WHO).' },
              { badge: 'strong', label: 'Strong Evidence', desc: 'Multiple high-quality RCTs and/or meta-analyses support efficacy.' },
              { badge: 'moderate', label: 'Moderate Evidence', desc: 'Supported by RCTs but with limitations in number, quality, or population breadth.' },
              { badge: 'emerging', label: 'Emerging Evidence', desc: 'Preliminary evidence from early-stage trials, case series, or practice-based research.' },
              { badge: 'mixed', label: 'Mixed Evidence', desc: 'Evidence is inconsistent across studies or methodologically limited.' },
            ].map((tier) => (
              <div key={tier.badge} className="flex items-start gap-4 rounded-lg bg-surface-raised p-4">
                <span className={`evidence-badge ${tier.badge} mt-0.5 shrink-0`}>{tier.label}</span>
                <p className="text-sm text-foreground-muted">{tier.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">Editorial governance</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>All content on TheTherapies follows a structured editorial workflow:</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-surface-raised p-4">
                <h4 className="mb-2 font-semibold text-foreground">Content lifecycle</h4>
                <ol className="space-y-1 text-xs">
                  <li>1. Draft &rarr; Clinical Review &rarr; Evidence Review &rarr; Published</li>
                  <li>2. Scheduled review at defined cadence</li>
                  <li>3. Hotfix lane for safety corrections</li>
                </ol>
              </div>
              <div className="rounded-lg bg-surface-raised p-4">
                <h4 className="mb-2 font-semibold text-foreground">Review cadence</h4>
                <ul className="space-y-1 text-xs">
                  <li>High-volatility (medication, safety, crisis): 3\u20136 months</li>
                  <li>Therapy evidence summaries: 12 months</li>
                  <li>Training/register links: 6\u201312 months</li>
                </ul>
              </div>
            </div>
            <p>
              Evidence claims must reference at least one source registry entry. We avoid unanchored
              superlatives (&ldquo;proven&rdquo;, &ldquo;works best&rdquo;, &ldquo;gold standard&rdquo;)
              unless directly quoting guideline wording.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">Source registry</h2>
          <p className="mb-6 text-sm leading-relaxed text-foreground-muted">
            All sources are verified on a scheduled basis. Link health is monitored weekly. The registry currently
            contains {sources.length} verified sources including guidelines, registers, and professional bodies.
          </p>
          <div className="space-y-2">
            {sources.slice(0, 10).map((source) => (
              <div key={source.id} className="flex items-center gap-3 rounded-lg bg-surface-raised p-3">
                <span className="shrink-0 rounded bg-surface-sunken px-2 py-0.5 text-xs text-foreground-subtle">{source.contentType}</span>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-accent-dark">
                  {source.title}
                </a>
                <span className="ml-auto text-xs text-foreground-subtle">{source.publisher} \u2022 {source.jurisdiction}</span>
              </div>
            ))}
            {sources.length > 10 && (
              <p className="text-center text-xs text-foreground-subtle">
                + {sources.length - 10} more sources in the full registry
              </p>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">How to use this site in practice</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>TheTherapies is designed to support clinicians in several ways:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <strong>Share the &ldquo;How it works&rdquo; layer</strong> with clients as pre-therapy reading or psychoeducation.
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <strong>Print resources</strong> directly from the Resources page for use in sessions, homework, or psychoeducation.
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <strong>Use the evidence panel</strong> to quickly check guideline support and evidence tiers when discussing options.
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <strong>Use &ldquo;The science&rdquo; layer</strong> for CPD, supervision preparation, or refreshing your knowledge of specific modalities.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/therapies" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
          Browse all therapies
        </Link>
        <Link href="/resources" className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-border-strong">
          Printable resources
        </Link>
      </div>
    </div>
  );
}
