import { Metadata } from 'next';
import Link from 'next/link';
import { allTherapies } from '@/data/therapies';
import { resourceContents } from '@/data/resource-content';
import { Resource, ResourceAudience } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Resources & Printables',
  description: 'Free printable resources, worksheets, and guides for adults, children, teenagers, parents, and professionals.',
};

export default function ResourcesPage() {
  const allResources: (Resource & { therapyName: string; therapySlug: string; hasContent: boolean })[] = [];
  for (const therapy of allTherapies) {
    for (const resource of therapy.resources) {
      allResources.push({
        ...resource,
        therapyName: therapy.name,
        therapySlug: therapy.slug,
        hasContent: !!resourceContents[resource.id],
      });
    }
  }

  const audiences: { key: ResourceAudience; label: string; description: string }[] = [
    { key: 'adult', label: 'For Adults', description: 'Worksheets, guides, and self-help tools for adults engaging in or learning about therapy.' },
    { key: 'child', label: 'For Children (6–11)', description: 'Age-appropriate, visual resources for younger children.' },
    { key: 'teen', label: 'For Teenagers (12–17)', description: 'Teen-friendly resources using accessible language and examples.' },
    { key: 'parent', label: 'For Parents & Caregivers', description: 'Resources helping parents understand and support their child\u2019s therapy.' },
    { key: 'professional', label: 'For Professionals', description: 'Clinical templates, formulation guides, session structures, and competency tools.' },
    { key: 'couples', label: 'For Couples', description: 'Resources for couples working on their relationship.' },
  ];

  const resourcesWithContent = allResources.filter(r => r.hasContent).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="mb-3">Resources & Printables</h1>
        <p className="max-w-2xl text-foreground-muted">
          {allResources.length} free, printable resources organised by audience. {resourcesWithContent} resources
          are ready to view and print. Each resource is designed to be used alongside professional support.
        </p>
        <div className="mt-4 rounded-lg border border-stone-300 bg-stone-50 p-4 text-sm text-stone-700">
          <strong>Note:</strong> These resources are for educational and therapeutic support purposes. They are
          not a substitute for professional guidance.
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
                <Link
                  key={resource.id}
                  href={`/resources/${resource.id}`}
                  className="resource-card group block transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="mb-2 flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-sm font-medium group-hover:text-primary">{resource.title}</h3>
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-foreground-muted">{resource.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-accent">{resource.therapyName}</span>
                    <span className="rounded bg-surface-sunken px-2 py-0.5 text-xs text-foreground-subtle">{resource.format}</span>
                    {resource.hasContent ? (
                      <span className="rounded bg-sage-100 px-2 py-0.5 text-xs font-medium text-sage-700">Ready</span>
                    ) : (
                      <span className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-500">Coming soon</span>
                    )}
                    {resource.riskLevel === 'clinician_gated' && (
                      <span className="rounded bg-warning-light px-2 py-0.5 text-xs text-stone-600">Clinician-gated</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
