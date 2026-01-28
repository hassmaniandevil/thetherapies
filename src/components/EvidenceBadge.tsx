import { EvidenceTier } from '@/lib/types';

const tierLabels: Record<EvidenceTier, string> = {
  guideline_supported: 'Guideline Supported',
  strong: 'Strong Evidence',
  moderate: 'Moderate Evidence',
  emerging: 'Emerging Evidence',
  mixed: 'Mixed Evidence',
};

const tierClasses: Record<EvidenceTier, string> = {
  guideline_supported: 'guideline',
  strong: 'strong',
  moderate: 'moderate',
  emerging: 'emerging',
  mixed: 'mixed',
};

export default function EvidenceBadge({ tier }: { tier: EvidenceTier }) {
  return (
    <span className={`evidence-badge ${tierClasses[tier]}`}>
      {tierLabels[tier]}
    </span>
  );
}
