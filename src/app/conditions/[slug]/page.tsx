'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { conditions, getConditionBySlug } from '@/data/conditions';
import { getTherapyById } from '@/data/therapies';
import { AudienceMode } from '@/lib/types';
import AudienceToggle from '@/components/AudienceToggle';
import EvidenceBadge from '@/components/EvidenceBadge';

export default function ConditionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const condition = getConditionBySlug(slug);
  const [mode, setMode] = useState<AudienceMode>('how_it_works');

  useEffect(() => {
    const saved = localStorage.getItem('audience_mode') as AudienceMode | null;
    if (saved) setMode(saved);
  }, []);

  const handleModeChange = (newMode: AudienceMode) => {
    setMode(newMode);
    localStorage.setItem('audience_mode', newMode);
  };

  if (!condition) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1>Condition not found</h1>
        <p className="mt-4 text-foreground-muted">The condition you are looking for does not exist.</p>
        <Link href="/conditions" className="mt-6 inline-block text-accent hover:text-accent-dark">
          &larr; Back to conditions
        </Link>
      </div>
    );
  }

  const isScience = mode === 'the_science';

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground-subtle">
        <Link href="/conditions" className="hover:text-foreground">Conditions</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground-muted">{condition.name}</span>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap gap-2">
          {condition.ageBands.map((ab) => (
            <span key={ab} className="rounded-full bg-surface-sunken px-3 py-1 text-xs capitalize text-foreground-muted">{ab}</span>
          ))}
        </div>
        <h1 className="mb-4">{condition.name}</h1>
        <AudienceToggle mode={mode} onChange={handleModeChange} />
      </header>

      <section className="mb-12">
        <h2 className="mb-4 border-b border-border pb-3">Overview</h2>
        <p className="text-lg leading-relaxed">
          {isScience ? condition.overviewPro : condition.overviewLay}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 border-b border-border pb-3">Recommended Therapies</h2>
        <div className="space-y-4">
          {condition.recommendedTherapies.map((rec) => {
            const therapy = getTherapyById(rec.therapyId);
            if (!therapy) return null;
            return (
              <Link
                key={rec.therapyId}
                href={`/therapies/${therapy.slug}`}
                className="block rounded-xl border border-border bg-surface p-5 transition-all hover:border-border-strong hover:shadow-sm"
              >
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-serif text-lg font-semibold">
                    {therapy.name}
                    {therapy.abbreviation && <span className="ml-2 text-sm font-normal text-foreground-muted">({therapy.abbreviation})</span>}
                  </h3>
                  <EvidenceBadge tier={rec.evidenceTier} />
                </div>
                <p className="mb-2 text-sm leading-relaxed text-foreground-muted">{rec.notes}</p>
                <p className="line-clamp-2 text-sm text-foreground-subtle">{therapy.overview}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-6">
          <h2 className="mb-3 font-serif text-lg font-semibold text-stone-800">Important</h2>
          <p className="text-sm leading-relaxed text-stone-700">
            The therapies listed here are based on current evidence and guidelines. This is not an exhaustive list,
            and the best therapy for any individual depends on their specific circumstances, preferences, and clinical
            assessment. Always consult a qualified practitioner for personalised recommendations.
          </p>
        </div>
      </section>
    </article>
  );
}
