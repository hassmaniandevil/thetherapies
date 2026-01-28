'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Therapy, AudienceMode } from '@/lib/types';
import AudienceToggle from './AudienceToggle';
import EvidenceBadge from './EvidenceBadge';
import { getSourcesByIds } from '@/data/sources';
import { resourceContents } from '@/data/resource-content';

export default function TherapyPage({ therapy }: { therapy: Therapy }) {
  const [mode, setMode] = useState<AudienceMode>('how_it_works');

  useEffect(() => {
    const saved = localStorage.getItem('audience_mode') as AudienceMode | null;
    if (saved) setMode(saved);
  }, []);

  const handleModeChange = (newMode: AudienceMode) => {
    setMode(newMode);
    localStorage.setItem('audience_mode', newMode);
  };

  const sources = getSourcesByIds(therapy.sourceIds);
  const isScience = mode === 'the_science';

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-foreground-subtle">
        <Link href="/therapies" className="hover:text-foreground">Therapies</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground-muted">{therapy.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <EvidenceBadge tier={therapy.evidenceTier} />
          {therapy.categories.map(c => (
            <span key={c} className="rounded-full bg-surface-sunken px-3 py-1 text-xs text-foreground-muted">{c}</span>
          ))}
        </div>
        <h1 className="mb-2">
          {therapy.name}
          {therapy.abbreviation && <span className="ml-3 text-2xl font-normal text-foreground-muted">({therapy.abbreviation})</span>}
        </h1>
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-foreground-subtle">
          <span>Last evidence review: {therapy.lastReviewed}</span>
          <span>{therapy.resources.length} printable resources</span>
        </div>

        {/* Audience toggle */}
        <div className="mb-6">
          <AudienceToggle mode={mode} onChange={handleModeChange} />
          <p className="mt-2 text-xs text-foreground-subtle">
            {isScience
              ? 'Showing models, mechanisms, technique detail, and evidence grading.'
              : 'Showing plain-language explanations suitable for anyone.'}
          </p>
        </div>
      </header>

      {/* Table of contents */}
      <nav className="mb-10 rounded-xl border border-border bg-surface p-5" aria-label="Page contents">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground-muted">On this page</h2>
        <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
          <li><a href="#overview" className="text-foreground-muted hover:text-foreground">Overview</a></li>
          <li><a href="#focus" className="text-foreground-muted hover:text-foreground">{isScience ? 'Theoretical Model' : 'What this therapy focuses on'}</a></li>
          <li><a href="#sessions" className="text-foreground-muted hover:text-foreground">What sessions are like</a></li>
          <li><a href="#uses" className="text-foreground-muted hover:text-foreground">Common uses</a></li>
          {isScience && <li><a href="#mechanisms" className="text-foreground-muted hover:text-foreground">Mechanisms of change</a></li>}
          <li><a href="#techniques" className="text-foreground-muted hover:text-foreground">{isScience ? 'Core techniques' : 'What happens in therapy'}</a></li>
          <li><a href="#evidence" className="text-foreground-muted hover:text-foreground">Evidence base</a></li>
          <li><a href="#resources" className="text-foreground-muted hover:text-foreground">Resources & printables</a></li>
          <li><a href="#practitioner" className="text-foreground-muted hover:text-foreground">Practitioner notes</a></li>
          <li><a href="#sources" className="text-foreground-muted hover:text-foreground">Source registry</a></li>
        </ul>
      </nav>

      {/* Overview */}
      <Section id="overview" title="Overview">
        <p className="text-lg leading-relaxed">{therapy.overview}</p>
        {therapy.overviewExtra && <p className="mt-4 leading-relaxed text-foreground-muted">{therapy.overviewExtra}</p>}
      </Section>

      {/* Focus / Theoretical Model */}
      <Section id="focus" title={isScience ? 'The Theoretical Model' : 'What this therapy focuses on'}>
        {isScience ? (
          <div className="prose-content">
            {therapy.content.theoreticalModel.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatMarkdown(p) }} />
            ))}
          </div>
        ) : (
          <div>
            {therapy.content.focus.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed">{p}</p>
            ))}
          </div>
        )}
      </Section>

      {/* What sessions are like */}
      <Section id="sessions" title="What sessions are usually like">
        <div className="grid gap-3 sm:grid-cols-2">
          {therapy.content.sessionsLike.map((item, i) => (
            <div key={i} className="rounded-lg border border-border bg-surface p-4">
              <p className="text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-accent-light p-4">
          <p className="text-sm font-medium text-accent-dark">Session profile</p>
          <div className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
            <div><span className="text-foreground-muted">Duration:</span> {therapy.sessionProfile.duration}</div>
            <div><span className="text-foreground-muted">Frequency:</span> {therapy.sessionProfile.frequency}</div>
            <div><span className="text-foreground-muted">Typical course:</span> {therapy.sessionProfile.typicalCourse}</div>
            <div><span className="text-foreground-muted">Between sessions:</span> {therapy.sessionProfile.betweenSessionWork}</div>
          </div>
        </div>
      </Section>

      {/* Common uses, suited for, adapting needed */}
      <Section id="uses" title="Common uses and suitability">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 font-semibold">What problems it is commonly used for</h4>
            <div className="flex flex-wrap gap-2">
              {therapy.content.commonUses.map((use, i) => (
                <span key={i} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm">{use}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Who this therapy may suit best</h4>
            <ul className="space-y-2">
              {therapy.content.suitedFor.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-stone-300 bg-stone-50 p-4">
            <h4 className="mb-3 font-semibold text-stone-800">When it may need adapting or may not be suitable</h4>
            <ul className="space-y-2">
              {therapy.content.adaptingNeeded.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-stone-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Where this is not enough */}
      {therapy.whereNotEnough && (
        <Section id="not-enough" title="Where this therapy may not be enough">
          <div className="rounded-lg border border-stone-300 bg-stone-50 p-5">
            <p className="text-sm leading-relaxed text-stone-700">{therapy.whereNotEnough}</p>
          </div>
        </Section>
      )}

      {/* Mechanisms of change (science mode) */}
      {isScience && (
        <Section id="mechanisms" title="Mechanisms of Change">
          <ul className="space-y-3">
            {therapy.content.mechanismsOfChange.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-semibold text-accent-dark">{i + 1}</span>
                {m}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Core techniques */}
      <Section id="techniques" title={isScience ? 'Core Techniques' : 'What happens in therapy'}>
        <div className="space-y-4">
          {therapy.content.coreTechniques.map((tech) => (
            <div key={tech.id} className="rounded-xl border border-border bg-surface p-5">
              <h4 className="mb-2 font-semibold">{tech.name}</h4>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {isScience ? tech.briefPro : tech.briefLay}
              </p>
              {tech.safetyNotes && (
                <div className="mt-3 rounded-lg bg-warning-light px-3 py-2 text-xs text-stone-700">
                  <strong>Safety note:</strong> {tech.safetyNotes}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Evidence base */}
      <Section id="evidence" title="Evidence Base">
        <div className="mb-6 space-y-4">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Guideline support</p>
                <p className="text-sm leading-relaxed">{therapy.content.evidenceGuidelineSupport}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Strength of evidence</p>
                <p className="text-sm leading-relaxed">{therapy.content.evidenceStrength}</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Limitations</p>
                <p className="text-sm leading-relaxed">{therapy.content.evidenceLimitations}</p>
              </div>
            </div>
          </div>
        </div>

        {therapy.evidenceClaims.length > 0 && (
          <div>
            <h4 className="mb-3 font-semibold">Evidence claims by condition</h4>
            <div className="space-y-3">
              {therapy.evidenceClaims.map((claim) => (
                <div key={claim.id} className="rounded-lg border border-border bg-surface p-4">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-medium">{claim.conditionName}</span>
                    <EvidenceBadge tier={claim.evidenceTier} />
                    <span className="text-xs text-foreground-subtle">{claim.population}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {isScience ? claim.effectSummaryPro : claim.effectSummaryLay}
                  </p>
                  {isScience && claim.limitations && (
                    <p className="mt-2 text-xs text-foreground-subtle"><strong>Limitations:</strong> {claim.limitations}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* Resources & Printables */}
      <Section id="resources" title="Resources & Printables">
        {(['adult', 'child', 'teen', 'parent', 'professional', 'couples'] as const).map((audience) => {
          const audienceResources = therapy.resources.filter(r => r.audience === audience);
          if (audienceResources.length === 0) return null;
          const labels: Record<string, string> = {
            adult: 'For Adults',
            child: 'For Children (6\u201311)',
            teen: 'For Teenagers (12\u201317)',
            parent: 'For Parents & Caregivers',
            professional: 'For Professionals',
            couples: 'For Couples',
          };
          return (
            <div key={audience} className="mb-6">
              <h4 className="mb-3 font-semibold">{labels[audience]}</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {audienceResources.map((resource) => {
                  const hasContent = !!resourceContents[resource.id];
                  return (
                    <Link
                      key={resource.id}
                      href={`/resources/${resource.id}`}
                      className="resource-card group block transition-all hover:border-primary hover:shadow-md"
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <svg className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg>
                        <h5 className="text-sm font-medium group-hover:text-primary">{resource.title}</h5>
                      </div>
                      <p className="text-xs leading-relaxed text-foreground-muted">{resource.description}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        {hasContent ? (
                          <span className="rounded bg-sage-100 px-2 py-0.5 text-xs font-medium text-sage-700">PDF</span>
                        ) : (
                          <span className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-500">Coming soon</span>
                        )}
                        {resource.riskLevel === 'clinician_gated' && (
                          <span className="rounded bg-warning-light px-2 py-0.5 text-xs text-stone-600">Clinician-gated</span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Section>

      {/* Practitioner & training notes */}
      <Section id="practitioner" title="Practitioner & Training Notes">
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="space-y-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Typical professional background</p>
              <p className="text-sm leading-relaxed">{therapy.practitionerNotes.background}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Recognised training routes</p>
              <p className="text-sm leading-relaxed">{therapy.practitionerNotes.trainingRoutes}</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-foreground-subtle">Registration considerations</p>
              <p className="text-sm leading-relaxed">{therapy.practitionerNotes.registration}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Source Registry */}
      <Section id="sources" title="Source Registry">
        <div className="space-y-3">
          {sources.map((source) => (
            <div key={source.id} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>
              <div>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:text-accent-dark">
                  {source.title}
                </a>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-foreground-subtle">
                  <span>{source.publisher}</span>
                  <span>{source.contentType}</span>
                  <span>{source.jurisdiction}</span>
                  {source.dateLastChecked && <span>Checked: {source.dateLastChecked}</span>}
                </div>
                <p className="mt-1 text-xs text-foreground-subtle">{source.licenseNotes}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-foreground-subtle">
          Last evidence review: {therapy.lastReviewed}. All sources are verified and checked on a scheduled cadence.
        </p>
      </Section>
    </article>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h2 className="mb-5 border-b border-border pb-3">{title}</h2>
      {children}
    </section>
  );
}

function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}
