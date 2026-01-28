'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { allTherapies } from '@/data/therapies';
import { resourceContents } from '@/data/resource-content';
import { Resource } from '@/lib/types';

export default function ResourcePage() {
  const params = useParams();
  const resourceId = params.id as string;

  // Find the resource metadata
  let resource: (Resource & { therapyName: string; therapySlug: string }) | undefined;
  for (const therapy of allTherapies) {
    const found = therapy.resources.find(r => r.id === resourceId);
    if (found) {
      resource = { ...found, therapyName: therapy.name, therapySlug: therapy.slug };
      break;
    }
  }

  // Get the content
  const content = resourceContents[resourceId];

  if (!resource) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="mb-4">Resource not found</h1>
        <Link href="/resources" className="text-accent hover:text-accent-dark">
          Back to Resources
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print-only header */}
      <div className="hidden print:block print:mb-6">
        <div className="flex items-center justify-between border-b border-stone-300 pb-4">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6 text-sage-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-lg font-semibold text-sage-700">TheTherapies</span>
          </div>
          <span className="text-sm text-stone-500">thetherapies.vercel.app</span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 print:px-0 print:py-0">
        {/* Screen-only navigation */}
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Link href="/resources" className="flex items-center gap-2 text-sm text-accent hover:text-accent-dark">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / Save as PDF
          </button>
        </div>

        {/* Resource header */}
        <header className="mb-8 print:mb-6">
          <div className="mb-2 flex flex-wrap items-center gap-2 print:hidden">
            <Link
              href={`/therapies/${resource.therapySlug}`}
              className="text-sm text-accent hover:text-accent-dark"
            >
              {resource.therapyName}
            </Link>
            <span className="text-stone-300">•</span>
            <span className="rounded bg-surface-sunken px-2 py-0.5 text-xs text-foreground-subtle">
              {resource.audience === 'adult' && 'For Adults'}
              {resource.audience === 'child' && 'For Children'}
              {resource.audience === 'teen' && 'For Teenagers'}
              {resource.audience === 'parent' && 'For Parents'}
              {resource.audience === 'professional' && 'For Professionals'}
              {resource.audience === 'couples' && 'For Couples'}
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-bold print:text-xl">{resource.title}</h1>
          <p className="text-foreground-muted print:text-sm">{resource.description}</p>
        </header>

        {/* Content sections */}
        {content ? (
          <div className="space-y-6 print:space-y-4">
            {content.sections.map((section, idx) => {
              if (section.type === 'intro') {
                return (
                  <div key={idx} className="rounded-lg border border-sage-200 bg-sage-50 p-6 print:p-4 print:border-sage-300">
                    <p className="leading-relaxed text-sage-800 print:text-sm">{section.content}</p>
                  </div>
                );
              }

              if (section.type === 'text') {
                return (
                  <section key={idx}>
                    {section.title && (
                      <h2 className="mb-2 text-lg font-semibold print:text-base">{section.title}</h2>
                    )}
                    <p className="whitespace-pre-line leading-relaxed text-foreground-muted print:text-sm">
                      {section.content}
                    </p>
                  </section>
                );
              }

              if (section.type === 'checklist') {
                return (
                  <section key={idx}>
                    {section.title && (
                      <h2 className="mb-3 text-lg font-semibold print:text-base">{section.title}</h2>
                    )}
                    <ul className="space-y-2">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-stone-300 print:border-stone-400">
                            {/* Empty checkbox for printing */}
                          </span>
                          <span className="leading-relaxed text-foreground-muted print:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              }

              if (section.type === 'tips') {
                return (
                  <section key={idx} className="rounded-lg border border-sky-200 bg-sky-50 p-6 print:p-4">
                    {section.title && (
                      <h2 className="mb-3 text-lg font-semibold text-sky-800 print:text-base">{section.title}</h2>
                    )}
                    <ul className="space-y-2">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="leading-relaxed text-sky-900 print:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              }

              if (section.type === 'worksheet') {
                return (
                  <section key={idx} className="rounded-lg border-2 border-stone-300 p-6 print:p-4">
                    {section.title && (
                      <h2 className="mb-4 text-lg font-semibold print:text-base">{section.title}</h2>
                    )}
                    <div className="space-y-4">
                      {section.rows?.map((row, i) => (
                        <div key={i} className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                          <label className="mb-1 block text-sm font-medium text-foreground">{row.label}</label>
                          {row.value && (
                            <p className="mb-2 text-xs text-foreground-subtle">{row.value}</p>
                          )}
                          <div className="min-h-[60px] rounded border border-stone-200 bg-stone-50 p-2 print:min-h-[80px] print:bg-white">
                            {/* Empty space for writing */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              if (section.type === 'table') {
                return (
                  <section key={idx}>
                    {section.title && (
                      <h2 className="mb-3 text-lg font-semibold print:text-base">{section.title}</h2>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr>
                            {section.columns?.map((col, i) => (
                              <th key={i} className="border border-stone-300 bg-stone-100 p-2 text-left font-medium print:p-1 print:text-xs">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.tableRows?.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className={`border border-stone-300 p-2 print:p-1 print:text-xs ${j === 0 ? 'font-medium bg-stone-50' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                );
              }

              if (section.type === 'example') {
                return (
                  <section key={idx} className="rounded-lg border border-lavender-200 bg-lavender-50 p-6 print:p-4">
                    {section.title && (
                      <h2 className="mb-2 text-lg font-semibold text-lavender-800 print:text-base">{section.title}</h2>
                    )}
                    <p className="whitespace-pre-line font-mono text-sm leading-relaxed text-lavender-900 print:text-xs">
                      {section.content}
                    </p>
                  </section>
                );
              }

              if (section.type === 'footer') {
                return (
                  <footer key={idx} className="mt-8 border-t border-stone-200 pt-4 print:mt-6 print:pt-3">
                    <p className="text-xs text-foreground-subtle print:text-[10px]">{section.content}</p>
                    <p className="mt-2 text-xs text-foreground-subtle print:text-[10px]">
                      Source: TheTherapies (thetherapies.vercel.app) — Part of {resource.therapyName} resources.
                    </p>
                  </footer>
                );
              }

              return null;
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-8 text-center">
            <svg className="mx-auto mb-4 h-12 w-12 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h2 className="mb-2 text-lg font-semibold">Content coming soon</h2>
            <p className="text-sm text-foreground-muted">
              This resource is being developed. Check back soon for the full printable version.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
