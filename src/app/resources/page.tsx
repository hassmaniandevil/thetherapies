import { Metadata } from 'next';
import Link from 'next/link';
import { allTherapies } from '@/data/therapies';
import { Resource, ResourceAudience } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Resources & Printables',
  description: 'Free printable resources, worksheets, and guides for adults, children, teenagers, parents, and professionals.',
};

export default function ResourcesPage() {
  const allResources: (Resource & { therapyName: string; therapySlug: string })[] = [];
  for (const therapy of allTherapies) {
    for (const resource of therapy.resources) {
      allResources.push({ ...resource, therapyName: therapy.name, therapySlug: therapy.slug });
    }
  }

  const audiences: { key: ResourceAudience; label: string; description: string }[] = [
    { key: 'adult', label: 'For Adults', description: 'Worksheets, guides, and self-help tools for adults engaging in or learning about therapy.' },
    { key: 'child', label: 'For Children (6\u201311)', description: 'Age-appropriate, visual resources for younger children.' },
    { key: 'teen', label: 'For Teenagers (12\u201317)', description: 'Teen-friendly resources using accessible language and examples.' },
    { key: 'parent', label: 'For Parents & Caregivers', description: 'Resources helping parents understand and support their child\u2019s therapy.' },
    { key: 'professional', label: 'For Professionals', description: 'Clinical templates, formulation guides, session structures, and competency tools.' },
    { key: 'couples', label: 'For Couples', description: 'Resources for couples working on their relationship.' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="mb-3">Resources & Printables</h1>
        <p className="max-w-2xl text-foreground-muted">
          {allResources.length} free, printable resources organised by audience. Each resource is linked to
          a specific therapy and designed to be used alongside professional support.
        </p>
        <div className="mt-4 rounded-lg border border-stone-300 bg-stone-50 p-4 text-sm text-stone-700">
          <strong>Note:</strong> These resources are for educational and therapeutic support purposes. They are
          not a substitute for professional guidance. High-risk resources are clinician-gated.
        </div>
      </header>

      {audiences.map(({ key, label, description }) => {
        const resources = allResources.filter(r => r.audience === key);
        if (resources.length === 0) return null;
        return (
          <section key={key} className="mb-12">
            <h2 className="mb-2">{label}</h2>
            <p className="mb-6 text-sm text-foreground-muted">{description}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="mb-2 flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" /></svg>
                    <h3 className="text-sm font-medium">{resource.title}</h3>
                  </div>
                  <p className="mb-2 text-xs leading-relaxed text-foreground-muted">{resource.description}</p>
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/therapies/${resource.therapySlug}`}
                      className="text-xs text-accent hover:text-accent-dark"
                    >
                      {resource.therapyName}
                    </Link>
                    <span className="rounded bg-surface-sunken px-2 py-0.5 text-xs text-foreground-subtle">{resource.format}</span>
                    {resource.riskLevel === 'clinician_gated' && (
                      <span className="rounded bg-warning-light px-2 py-0.5 text-xs text-stone-600">Clinician-gated</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
