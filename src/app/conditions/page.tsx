import { Metadata } from 'next';
import Link from 'next/link';
import { conditions } from '@/data/conditions';

export const metadata: Metadata = {
  title: 'Conditions',
  description: 'Browse conditions and find recommended evidence-based therapies.',
};

export default function ConditionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="mb-3">Conditions</h1>
        <p className="max-w-2xl text-foreground-muted">
          Browse conditions and discover which therapies are recommended, with evidence grading
          and clinical context for each recommendation.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.map((condition) => (
          <Link
            key={condition.id}
            href={`/conditions/${condition.slug}`}
            className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-sm"
          >
            <h2 className="mb-2 font-serif text-lg font-semibold group-hover:text-primary">
              {condition.name}
            </h2>
            <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
              {condition.overviewLay}
            </p>
            <div className="flex items-center gap-3 text-xs text-foreground-subtle">
              <span>{condition.recommendedTherapies.length} recommended therapies</span>
              <span className="flex gap-1">
                {condition.ageBands.map((ab) => (
                  <span key={ab} className="rounded bg-surface-sunken px-1.5 py-0.5">{ab}</span>
                ))}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
