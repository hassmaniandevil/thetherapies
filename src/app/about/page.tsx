import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About TheTherapies \u2014 editorial policy, evidence grading, licensing, accessibility, and privacy.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="mb-8">About TheTherapies</h1>

      <div className="space-y-10">
        <section>
          <p className="text-lg leading-relaxed text-foreground-muted">
            TheTherapies is a free, comprehensive resource providing evidence-based information about
            psychological therapies. It is designed for everyone \u2014 from people considering therapy for
            the first time to experienced clinicians seeking a quick reference or printable resources.
          </p>
        </section>

        <section id="editorial">
          <h2 className="mb-4 border-b border-border pb-3">Editorial Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>
              All content on TheTherapies is developed following a structured editorial process. Content
              progresses through draft, clinical review, evidence review, and publication stages before
              being made public.
            </p>
            <p>
              Clinical editors verify the accuracy of clinical descriptions, contraindications, and safety
              information. Evidence editors verify source citations, grade evidence claims, and set review dates.
            </p>
            <p>
              We avoid unanchored superlatives such as &ldquo;proven&rdquo;, &ldquo;works best&rdquo;, or
              &ldquo;gold standard&rdquo; unless directly quoting guideline wording with attribution.
              Every therapy page includes a &ldquo;Where this therapy may not be enough&rdquo; section
              to ensure honest, balanced representation.
            </p>
          </div>
        </section>

        <section id="evidence">
          <h2 className="mb-4 border-b border-border pb-3">Evidence Grading</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>We use five evidence tiers:</p>
            <ul className="space-y-2">
              <li><strong>Guideline Supported:</strong> Recommended by a major clinical guideline (NICE, APA, WHO).</li>
              <li><strong>Strong Evidence:</strong> Multiple high-quality RCTs and/or meta-analyses.</li>
              <li><strong>Moderate Evidence:</strong> Supported by RCTs with some limitations.</li>
              <li><strong>Emerging Evidence:</strong> Preliminary evidence from early-stage research.</li>
              <li><strong>Mixed Evidence:</strong> Inconsistent findings across studies.</li>
            </ul>
            <p>
              All evidence claims are linked to entries in our Source Registry, which includes guidelines,
              systematic reviews, professional body standards, and other verifiable documents. Sources are
              checked on a scheduled cadence and flagged if they become unavailable.
            </p>
          </div>
        </section>

        <section id="safety">
          <h2 className="mb-4 border-b border-border pb-3">Safety & Crisis Statement</h2>
          <div className="rounded-xl border border-stone-300 bg-stone-50 p-6">
            <p className="mb-4 leading-relaxed text-stone-800">
              <strong>TheTherapies is not a substitute for professional medical or psychological advice.</strong>
            </p>
            <p className="mb-4 text-sm leading-relaxed text-stone-700">
              This site provides educational information about evidence-based therapies. It cannot diagnose
              conditions, recommend specific treatments, or replace the judgement of a qualified practitioner.
              If you are experiencing mental health difficulties, please consult your GP, a qualified therapist,
              or another healthcare professional.
            </p>
            <div className="rounded-lg bg-warning-light p-4 text-sm text-stone-800">
              <p className="mb-2"><strong>If you are in crisis or at immediate risk of harm:</strong></p>
              <ul className="space-y-1 text-stone-700">
                <li><strong>UK:</strong> Call 116 123 (Samaritans) or text SHOUT to 85258</li>
                <li><strong>US:</strong> Call or text 988 (Suicide & Crisis Lifeline)</li>
                <li><strong>International:</strong> Visit findahelpline.com</li>
                <li><strong>Emergency:</strong> Call 999 (UK), 911 (US), or your local emergency number</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="licensing">
          <h2 className="mb-4 border-b border-border pb-3">Licensing Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>
              Original resources created by TheTherapies are freely available for educational and clinical
              use. We do not host commercial or proprietary worksheets without explicit permission.
            </p>
            <p>
              Where resources are owned by external publishers, we provide links and citations rather than
              hosting the content. Each resource in our library is tagged with its licensing status.
            </p>
            <p>
              We prioritise: original resources, public-domain materials, and resources from publicly
              funded health services.
            </p>
          </div>
        </section>

        <section id="accessibility">
          <h2 className="mb-4 border-b border-border pb-3">Accessibility Statement</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>
              TheTherapies is committed to meeting WCAG 2.2 Level AA accessibility standards. The site is
              designed with semantic HTML, keyboard navigation support, screen reader compatibility, and
              sufficient colour contrast ratios.
            </p>
            <p>
              If you encounter any accessibility barriers, please contact us so we can address them.
            </p>
          </div>
        </section>

        <section id="privacy">
          <h2 className="mb-4 border-b border-border pb-3">Privacy Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-foreground-muted">
            <p>
              TheTherapies respects your privacy. We use privacy-respecting analytics (no personal data
              collection) and do not use advertising trackers. Your audience mode preference is stored
              locally in your browser and is not transmitted to any server.
            </p>
            <p>
              We comply with UK GDPR and the Data Protection Act 2018. We do not sell, share, or transfer
              personal data to third parties.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
