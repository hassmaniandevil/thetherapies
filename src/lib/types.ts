export type AudienceMode = 'how_it_works' | 'the_science';

export type AgeBand = 'child' | 'teen' | 'adult';
export type DeliveryFormat = 'individual' | 'group' | 'couples' | 'family' | 'digital' | 'community';
export type Intensity = 'low' | 'moderate' | 'high';
export type EvidenceTier = 'guideline_supported' | 'strong' | 'moderate' | 'emerging' | 'mixed';
export type SettingFit = 'primary_care' | 'schools' | 'specialist' | 'inpatient' | 'community';
export type ResourceAudience = 'adult' | 'child' | 'teen' | 'parent' | 'professional' | 'couples';

export interface SessionProfile {
  duration: string;
  frequency: string;
  typicalCourse: string;
  timeLimited: boolean;
  betweenSessionWork: string;
}

export interface EvidenceClaim {
  id: string;
  conditionName: string;
  population: string;
  claimType: string;
  effectSummaryLay: string;
  effectSummaryPro: string;
  evidenceTier: EvidenceTier;
  limitations: string;
  sourceIds: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  audience: ResourceAudience;
  therapyIds: string[];
  conditionIds?: string[];
  format: string;
  readingLevel?: string;
  riskLevel: 'low' | 'medium' | 'clinician_gated';
  externalUrl?: string;
  hasContent?: boolean;
}

export interface Technique {
  id: string;
  name: string;
  briefLay: string;
  briefPro: string;
  safetyNotes?: string;
}

export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  contentType: string;
  jurisdiction: string;
  licenseNotes: string;
  datePublished?: string;
  dateLastChecked?: string;
}

export interface PractitionerNotes {
  background: string;
  trainingRoutes: string;
  registration: string;
}

export interface TherapyContent {
  // How it works (lay)
  focus: string;
  sessionsLike: string[];
  commonUses: string[];
  suitedFor: string[];
  adaptingNeeded: string[];

  // The science (professional)
  theoreticalModel: string;
  mechanismsOfChange: string[];
  coreTechniques: Technique[];
  evidenceGuidelineSupport: string;
  evidenceStrength: string;
  evidenceLimitations: string;
}

export interface Therapy {
  id: string;
  slug: string;
  name: string;
  abbreviation?: string;
  synonyms: string[];
  categories: string[];
  overview: string;
  overviewExtra?: string;
  content: TherapyContent;
  sessionProfile: SessionProfile;
  evidenceClaims: EvidenceClaim[];
  resources: Resource[];
  practitionerNotes: PractitionerNotes;
  sourceIds: string[];
  lastReviewed: string;
  indicationCategories: string[];
  ageBands: AgeBand[];
  deliveryFormats: DeliveryFormat[];
  intensity: Intensity;
  settingFits: SettingFit[];
  evidenceTier: EvidenceTier;
  whereNotEnough?: string;
}

export interface Condition {
  id: string;
  slug: string;
  name: string;
  ageBands: AgeBand[];
  overviewLay: string;
  overviewPro: string;
  recommendedTherapies: {
    therapyId: string;
    evidenceTier: EvidenceTier;
    notes: string;
  }[];
}
