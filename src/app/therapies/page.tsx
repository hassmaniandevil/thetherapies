import { Metadata } from 'next';
import { allTherapies } from '@/data/therapies';
import TherapyCard from '@/components/TherapyCard';

export const metadata: Metadata = {
  title: 'All Therapies',
  description: 'Browse all evidence-based psychological therapies with detailed information, resources, and evidence grading.',
};

export default function TherapiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10">
        <h1 className="mb-3">All Therapies</h1>
        <p className="max-w-2xl text-foreground-muted">
          {allTherapies.length} evidence-based psychological therapies, each with detailed explanations,
          evidence grading, printable resources, and verifiable sources. Use the toggle on each page to
          switch between plain-language and clinical-depth content.
        </p>
      </header>

      {/* Filter tags */}
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterTag label="All" active />
        <FilterTag label="CBT lineage" />
        <FilterTag label="Psychodynamic" />
        <FilterTag label="Systemic" />
        <FilterTag label="Integrative" />
        <FilterTag label="Third-wave CBT" />
        <FilterTag label="Specialist" />
        <FilterTag label="Trauma-focused" />
        <FilterTag label="Child & Family" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allTherapies.map((therapy) => (
          <TherapyCard key={therapy.id} therapy={therapy} />
        ))}
      </div>
    </div>
  );
}

function FilterTag({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'bg-primary text-white'
          : 'border border-border bg-surface text-foreground-muted hover:border-border-strong'
      }`}
    >
      {label}
    </button>
  );
}
