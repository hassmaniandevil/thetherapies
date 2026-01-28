import Link from 'next/link';
import { Therapy } from '@/lib/types';
import EvidenceBadge from './EvidenceBadge';

export default function TherapyCard({ therapy }: { therapy: Therapy }) {
  return (
    <Link href={`/therapies/${therapy.slug}`} className="group block">
      <article className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-sm">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
              {therapy.name}
              {therapy.abbreviation && (
                <span className="ml-2 text-sm font-normal text-foreground-muted">({therapy.abbreviation})</span>
              )}
            </h3>
          </div>
          <EvidenceBadge tier={therapy.evidenceTier} />
        </div>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
          {therapy.overview}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {therapy.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="rounded-full bg-surface-sunken px-2.5 py-0.5 text-xs text-foreground-muted">
              {cat}
            </span>
          ))}
          {therapy.sessionProfile.timeLimited && (
            <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs text-accent-dark">
              Time-limited
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-xs text-foreground-subtle">
          <span>{therapy.sessionProfile.typicalCourse}</span>
          <span>{therapy.resources.length} resources</span>
          <span>Last reviewed {therapy.lastReviewed}</span>
        </div>
      </article>
    </Link>
  );
}
