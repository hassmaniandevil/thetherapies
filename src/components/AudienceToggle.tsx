'use client';

import { AudienceMode } from '@/lib/types';

interface AudienceToggleProps {
  mode: AudienceMode;
  onChange: (mode: AudienceMode) => void;
}

export default function AudienceToggle({ mode, onChange }: AudienceToggleProps) {
  return (
    <div className="audience-toggle" role="tablist" aria-label="Content depth">
      <button
        role="tab"
        aria-selected={mode === 'how_it_works'}
        className={mode === 'how_it_works' ? 'active' : ''}
        onClick={() => onChange('how_it_works')}
      >
        How it works
      </button>
      <button
        role="tab"
        aria-selected={mode === 'the_science'}
        className={mode === 'the_science' ? 'active' : ''}
        onClick={() => onChange('the_science')}
      >
        The science
      </button>
    </div>
  );
}
