import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Everyone',
  description: 'Understanding psychological therapy \u2014 plain language explanations for anyone curious about or engaging in therapy.',
};

export default function ForEveryonePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <header className="mb-12">
        <h1 className="mb-4">For Everyone</h1>
        <p className="text-lg leading-relaxed text-foreground-muted">
          Whether you&apos;re curious about therapy, have been offered a referral, or are already in treatment,
          TheTherapies is here to help you understand what&apos;s available, what to expect, and what the
          evidence says \u2014 in language that makes sense.
        </p>
      </header>

      <section className="mb-12 space-y-8">
        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">How this site works</h2>
          <p className="mb-4 leading-relaxed text-foreground-muted">
            Every therapy on this site has two layers of information. You can switch between them at any time
            using the toggle at the top of each therapy page:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">1</span>
              <div>
                <strong>&ldquo;How it works&rdquo;</strong>
                <span className="text-foreground-muted"> \u2014 plain language, explaining what happens in therapy, what it helps with, and what to expect.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-bold text-accent">2</span>
              <div>
                <strong>&ldquo;The science&rdquo;</strong>
                <span className="text-foreground-muted"> \u2014 models, techniques, and evidence grading. For those who want the full clinical picture.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface p-8">
          <h2 className="mb-4">What you&apos;ll find for every therapy</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Clear overview', desc: 'What the therapy is and what it is not.' },
              { title: 'What sessions are like', desc: 'Length, frequency, and what actually happens.' },
              { title: 'Who it may suit', desc: 'The kinds of difficulties and preferences it matches.' },
              { title: 'Honest limitations', desc: 'When the therapy may need adapting or may not be enough.' },
              { title: 'Evidence base', desc: 'What guidelines and research say, graded clearly.' },
              { title: 'Printable resources', desc: 'Worksheets, guides, and tools you can take away.' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-surface-raised p-4">
                <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-foreground-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-stone-300 bg-stone-50 p-8">
          <h2 className="mb-4 text-stone-800">This site is not a substitute for professional advice</h2>
          <p className="mb-4 leading-relaxed text-stone-700">
            TheTherapies provides educational information about evidence-based therapies. It cannot tell you which
            therapy is right for you. If you are experiencing mental health difficulties, please speak with your
            GP, a qualified therapist, or another healthcare professional.
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            If you are in crisis, please contact a crisis service immediately. UK: Samaritans 116 123 | Text SHOUT to 85258 | US: 988 Suicide & Crisis Lifeline.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link href="/therapies" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark">
          Browse all therapies
        </Link>
        <Link href="/conditions" className="rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-border-strong">
          Browse by condition
        </Link>
      </div>
    </div>
  );
}
