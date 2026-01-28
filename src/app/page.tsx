import Link from 'next/link';
import { allTherapies } from '@/data/therapies';
import { conditions } from '@/data/conditions';
import TherapyCard from '@/components/TherapyCard';

export default function Home() {
  const featured = allTherapies.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-surface px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            Understand therapy.
            <br />
            <span className="text-primary">Evidence-based. In depth.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-foreground-muted">
            A comprehensive resource for understanding psychological therapies — what they involve,
            who they help, and what the evidence says. For everyone, from those considering therapy
            to practising clinicians.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/therapies" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
              Browse therapies
            </Link>
            <Link href="/conditions" className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong">
              Browse by condition
            </Link>
            <Link href="/resources" className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong">
              Printable resources
            </Link>
          </div>
        </div>
      </section>

      {/* Two depths */}
      <section className="border-b border-border px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center">Two depths. One source of truth.</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              </div>
              <h3 className="mb-3">&ldquo;How it works&rdquo;</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                Plain language. Low jargon. What to expect from therapy, who it helps, and what actually
                happens in sessions. Designed for anyone considering or receiving therapy.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              </div>
              <h3 className="mb-3">&ldquo;The science&rdquo;</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                Models, mechanisms, technique detail, and evidence grading. For therapists, trainees,
                and anyone who wants the full clinical picture — with verifiable sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured therapies */}
      <section className="border-b border-border px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <h2>Featured therapies</h2>
            <Link href="/therapies" className="text-sm font-medium text-accent hover:text-accent-dark">
              View all {allTherapies.length} therapies &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((therapy) => (
              <TherapyCard key={therapy.id} therapy={therapy} />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="border-b border-border px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center">Browse by condition</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => (
              <Link
                key={condition.id}
                href={`/conditions/${condition.slug}`}
                className="rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:shadow-sm"
              >
                <h3 className="mb-2 font-serif text-base font-semibold">{condition.name}</h3>
                <p className="line-clamp-2 text-xs text-foreground-muted">{condition.overviewLay}</p>
                <p className="mt-2 text-xs text-foreground-subtle">{condition.recommendedTherapies.length} recommended therapies</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8">What we promise</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="mb-3 font-serif text-3xl font-bold text-primary">Verified</div>
              <p className="text-sm text-foreground-muted">Every evidence claim links to a verifiable source. Every source is regularly checked.</p>
            </div>
            <div>
              <div className="mb-3 font-serif text-3xl font-bold text-accent">Reviewed</div>
              <p className="text-sm text-foreground-muted">Clinical and evidence editors review all content on a scheduled cadence.</p>
            </div>
            <div>
              <div className="mb-3 font-serif text-3xl font-bold text-lavender-600">Honest</div>
              <p className="text-sm text-foreground-muted">No &ldquo;best therapy&rdquo; claims. Every page includes limitations and where the therapy may not be enough.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
