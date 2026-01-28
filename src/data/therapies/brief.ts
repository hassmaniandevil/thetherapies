import { Therapy } from '@/lib/types';

export const mst: Therapy = {
  id: 'mst', slug: 'multisystemic-therapy', name: 'Multisystemic Therapy', abbreviation: 'MST', synonyms: ['MST'], categories: ['Systemic', 'Youth', 'Specialist'],
  overview: 'Multisystemic Therapy is an intensive, home- and community-based intervention for adolescents with serious behavioural problems. It targets the multiple systems that maintain difficulties: family, peers, school, and community.',
  content: {
    focus: 'Reducing antisocial behaviour and improving functioning by changing drivers across environments, with a strong emphasis on caregiver empowerment and practical, measurable goals.',
    sessionsLike: ['Delivered in home and community settings', 'Multiple contacts per week', 'Time-limited: 3\u20135 months typically', 'Ongoing caregiver-led implementation plans', '24/7 therapist availability during treatment'],
    commonUses: ['Conduct problems with high risk', 'Youth offending and antisocial behaviour', 'Serious school refusal linked to behavioural risk', 'Substance misuse with externalising behaviour'],
    suitedFor: ['High-risk adolescents where multiple systems maintain difficulties', 'Families needing high-intensity support in real-world contexts'],
    adaptingNeeded: ['Primary internalising disorders without externalising risk', 'Unsafe home environments without safeguarding resolution'],
    theoreticalModel: 'Based on Bronfenbrenner\u2019s social-ecological model: behaviour is maintained by interacting systems (individual, family, peers, school, community). MST intervenes across these systems to change the factors maintaining antisocial behaviour.',
    mechanismsOfChange: ['Improved parenting practices', 'Reduced deviant peer affiliation', 'Increased school engagement', 'Increased pro-social routines', 'Improved family communication'],
    coreTechniques: [
      { id: 'mst_functional', name: 'Functional Assessment Across Systems', briefLay: 'Understanding what drives the young person\u2019s behaviour by looking at all the different parts of their life.', briefPro: 'Multi-systemic functional analysis identifying drivers and maintainers of target behaviours across ecological levels.' },
      { id: 'mst_parent', name: 'Parent Management Strategies', briefLay: 'Coaching parents in practical strategies for managing behaviour, boundaries, and supervision.', briefPro: 'Evidence-based parent management techniques including monitoring, consistent consequences, positive reinforcement, and reducing punitive and inconsistent parenting.' },
    ],
    evidenceGuidelineSupport: 'Often included in high-risk youth pathways.',
    evidenceStrength: 'Moderate to strong for specific high-risk populations. Multiple RCTs demonstrate reductions in offending and out-of-home placements.',
    evidenceLimitations: 'Fidelity and service infrastructure are decisive. Not a standalone private therapy model.',
  },
  sessionProfile: { duration: 'Variable (home/community-based)', frequency: 'Multiple contacts per week', typicalCourse: '3\u20135 months', timeLimited: true, betweenSessionWork: 'Continuous caregiver-led plans' },
  evidenceClaims: [{ id: 'mst_conduct', conditionName: 'Conduct Problems', population: 'Adolescents', claimType: 'RCTs', effectSummaryLay: 'MST helps young people with serious behaviour problems by working with their families and communities.', effectSummaryPro: 'Multiple RCTs show reductions in offending, out-of-home placements, and substance use. Effects sustained at follow-up in fidelity-adherent services.', evidenceTier: 'strong', limitations: 'Fidelity-dependent. Service model required.', sourceIds: [] }],
  resources: [
    { id: 'mst_goals', title: 'Goals and Routines Plan', description: 'A structured goal-setting and routine plan for young people.', audience: 'teen', therapyIds: ['mst'], format: 'PDF', riskLevel: 'low' },
    { id: 'mst_parent_safety', title: 'Safety and Supervision Plan', description: 'A plan for parental monitoring and safety strategies.', audience: 'parent', therapyIds: ['mst'], format: 'PDF', riskLevel: 'low' },
    { id: 'mst_parent_boundaries', title: 'Boundaries and Consequences Guide', description: 'A guide to setting consistent boundaries.', audience: 'parent', therapyIds: ['mst'], format: 'PDF', riskLevel: 'low' },
    { id: 'mst_pro_mapping', title: 'MST Case Mapping Template', description: 'A multi-systemic formulation template.', audience: 'professional', therapyIds: ['mst'], format: 'PDF', riskLevel: 'low' },
  ],
  practitionerNotes: { background: 'Trained MST therapists within MST teams.', trainingRoutes: 'MST training provided through licensed MST service organisations. Requires team-based delivery with ongoing supervision and fidelity monitoring.', registration: 'Delivered by licensed MST services, not individual practitioners.' },
  sourceIds: [], lastReviewed: 'January 2026', indicationCategories: ['conduct_problems', 'youth_offending'], ageBands: ['teen'], deliveryFormats: ['family', 'community'], intensity: 'high', settingFits: ['community'], evidenceTier: 'strong',
  whereNotEnough: 'MST is for high-risk externalising behaviour. Not designed for primary internalising disorders.',
};

export const fft: Therapy = {
  id: 'fft', slug: 'functional-family-therapy', name: 'Functional Family Therapy', abbreviation: 'FFT', synonyms: ['FFT'], categories: ['Family therapy', 'Youth'],
  overview: 'Functional Family Therapy is a structured family intervention for adolescents with behavioural problems. It aims to reduce conflict and improve family functioning through engagement, relational change, and behaviour change phases.',
  content: {
    focus: 'Improving family communication, reducing blame cycles, strengthening protective factors, and changing behaviour patterns through a phase-based approach.',
    sessionsLike: ['Session length: 60\u201390 minutes', 'Frequency: Weekly', 'Time-limited: 12\u201320 sessions', 'Family sessions with all key members'],
    commonUses: ['Conduct problems', 'Youth offending risk', 'Family conflict maintaining adolescent difficulties'],
    suitedFor: ['Families with adolescents showing behavioural difficulties', 'Where family dynamics are central to the problem'],
    adaptingNeeded: ['Where the young person is not living at home', 'Active domestic violence requiring safety planning first'],
    theoreticalModel: 'Phase-based systemic-behavioural model. FFT proposes that problematic behaviour serves a function within the family system, and change requires addressing the relational context, not just the individual behaviour.',
    mechanismsOfChange: ['Reduced family conflict and blame', 'Improved communication patterns', 'Strengthened protective factors', 'Changed behavioural contingencies'],
    coreTechniques: [
      { id: 'fft_engagement', name: 'Engagement and Motivation', briefLay: 'Building trust with the whole family and helping everyone feel heard.', briefPro: 'Structured engagement phase reducing blame, building alliance with all family members, and reframing problems relationally.' },
      { id: 'fft_behaviour', name: 'Behaviour Change', briefLay: 'Learning new communication and problem-solving skills as a family.', briefPro: 'Structured behavioural intervention phase targeting communication, problem-solving, and contingency management within the family system.' },
    ],
    evidenceGuidelineSupport: 'Included in some youth justice and behaviour pathways.',
    evidenceStrength: 'Moderate; best with fidelity delivery.',
    evidenceLimitations: 'Fidelity-dependent. Fewer trials than MST.',
  },
  sessionProfile: { duration: '60\u201390 minutes', frequency: 'Weekly', typicalCourse: '12\u201320 sessions', timeLimited: true, betweenSessionWork: 'Family communication practice' },
  evidenceClaims: [{ id: 'fft_conduct', conditionName: 'Conduct Problems', population: 'Adolescents and families', claimType: 'RCTs', effectSummaryLay: 'FFT helps families reduce conflict and improve the young person\u2019s behaviour by changing how the family communicates.', effectSummaryPro: 'RCTs demonstrate reductions in recidivism and family conflict. Effects moderated by fidelity.', evidenceTier: 'moderate', limitations: 'Fidelity-dependent.', sourceIds: [] }],
  resources: [
    { id: 'fft_communication', title: 'Communication Scripts', description: 'Scripts for practising constructive family communication.', audience: 'parent', therapyIds: ['fft'], format: 'PDF', riskLevel: 'low' },
    { id: 'fft_agreement', title: 'Behaviour Agreement Template', description: 'A template for family behaviour agreements.', audience: 'parent', therapyIds: ['fft'], format: 'PDF', riskLevel: 'low' },
    { id: 'fft_pro_phase', title: 'Phase Checklist', description: 'A clinical checklist for each FFT phase.', audience: 'professional', therapyIds: ['fft'], format: 'PDF', riskLevel: 'low' },
  ],
  practitionerNotes: { background: 'Family therapists and trained FFT practitioners.', trainingRoutes: 'FFT training through licensed FFT organisations.', registration: 'Licensed FFT service delivery.' },
  sourceIds: [], lastReviewed: 'January 2026', indicationCategories: ['conduct_problems', 'family_conflict'], ageBands: ['teen'], deliveryFormats: ['family'], intensity: 'moderate', settingFits: ['community', 'specialist'], evidenceTier: 'moderate',
  whereNotEnough: 'FFT is for family-systemic conduct problems. Not designed for individual psychopathology without family component.',
};

export const cm: Therapy = {
  id: 'cm', slug: 'contingency-management', name: 'Contingency Management', abbreviation: 'CM', synonyms: ['CM', 'Contingency Management'], categories: ['Behavioural', 'Addictions'],
  overview: 'Contingency Management is a behavioural intervention that reinforces recovery behaviours (e.g., abstinence, attendance) with tangible rewards. It is primarily used in addiction services with clear protocols.',
  content: {
    focus: 'Behaviour change through reliable, immediate reinforcement linked to objectively verified targets (e.g., drug test results, attendance records).',
    sessionsLike: ['Integrated into treatment programmes', 'Incentives delivered immediately upon verified target behaviour', 'Structured protocol with escalating and reset schedules'],
    commonUses: ['Substance use disorders (stimulants, opioids, cannabis)', 'Treatment attendance reinforcement', 'Medication adherence'],
    suitedFor: ['People with substance use disorders where other approaches have not sustained engagement', 'Where objectively verifiable targets are possible'],
    adaptingNeeded: ['Requires governance and ethical frameworks', 'Not suitable without clear behavioural targets', 'Financial sustainability must be planned'],
    theoreticalModel: 'Based on operant conditioning: positive reinforcement of desired behaviours increases their frequency. CM applies this principle systematically using tangible incentives (vouchers, prizes, privileges) contingent on objectively verified recovery behaviours.',
    mechanismsOfChange: ['Positive reinforcement of abstinence', 'Immediate reinforcement competing with delayed drug reinforcement', 'Increased treatment engagement'],
    coreTechniques: [
      { id: 'cm_incentive', name: 'Incentive Delivery', briefLay: 'Receiving a reward (voucher, prize draw entry, or privilege) each time you meet your agreed target.', briefPro: 'Systematic delivery of tangible reinforcers contingent on objectively verified target behaviours, with escalating schedules and reset protocols.' },
    ],
    evidenceGuidelineSupport: 'Strong in specific substance use contexts. Included in some NICE guidance for substance misuse.',
    evidenceStrength: 'Strong for stimulant use disorders. Large effect sizes in well-implemented programmes.',
    evidenceLimitations: 'Implementation and governance challenges. Financial sustainability. Effects may not sustain post-programme without broader recovery support.',
  },
  sessionProfile: { duration: 'Integrated into treatment', frequency: 'Per target behaviour', typicalCourse: '12\u201324 weeks typically', timeLimited: true, betweenSessionWork: 'Meeting agreed targets (abstinence, attendance)' },
  evidenceClaims: [{ id: 'cm_substance', conditionName: 'Substance Use', population: 'Adults', claimType: 'RCTs', effectSummaryLay: 'CM helps people stay in treatment and reduce drug use by providing rewards for meeting recovery goals.', effectSummaryPro: 'Strong RCT evidence for stimulant use reduction and treatment retention. Large effect sizes. Implementation fidelity and governance are critical.', evidenceTier: 'strong', limitations: 'Governance and sustainability challenges.', sourceIds: [] }],
  resources: [
    { id: 'cm_rules', title: 'Programme Rules Sheet', description: 'Clear explanation of how the CM programme works.', audience: 'adult', therapyIds: ['cm'], format: 'PDF', riskLevel: 'low' },
    { id: 'cm_goals', title: 'Goals Tracker', description: 'A tracker for monitoring recovery goals.', audience: 'adult', therapyIds: ['cm'], format: 'PDF', riskLevel: 'low' },
    { id: 'cm_pro_protocol', title: 'CM Protocol Template', description: 'A governance-compliant protocol template.', audience: 'professional', therapyIds: ['cm'], format: 'PDF', riskLevel: 'low' },
  ],
  practitionerNotes: { background: 'Addiction service staff with CM training.', trainingRoutes: 'CM training through addiction service organisations and specialist training providers.', registration: 'Delivered within supervised addiction services.' },
  sourceIds: [], lastReviewed: 'January 2026', indicationCategories: ['substance_use'], ageBands: ['adult'], deliveryFormats: ['individual', 'group'], intensity: 'moderate', settingFits: ['specialist', 'community'], evidenceTier: 'strong',
  whereNotEnough: 'CM is for substance use targets. Not a comprehensive mental health treatment.',
};

export const fip: Therapy = {
  id: 'fip', slug: 'family-intervention-psychosis', name: 'Family Intervention for Psychosis', abbreviation: 'FIp', synonyms: ['FIp', 'Family Intervention for Psychosis', 'Family Work for Psychosis'], categories: ['Family therapy', 'Psychosis'],
  overview: 'Family Intervention for psychosis is a structured therapy that supports families to reduce relapse risk and improve outcomes through psychoeducation, communication skills, and problem-solving.',
  content: {
    focus: 'Reducing high-stress interaction patterns (expressed emotion), improving family understanding of psychosis, creating relapse prevention plans, and strengthening supportive communication.',
    sessionsLike: ['Session length: 60\u201390 minutes', 'Time-limited programmes: 10\u201320 sessions', 'May include single-family or multi-family group formats', 'Includes the person with psychosis and key family members'],
    commonUses: ['Psychosis and schizophrenia (relapse prevention)', 'Family support for first episode psychosis', 'Reducing family stress and improving coping'],
    suitedFor: ['Families of people with psychosis who want to understand and support recovery', 'Where family relationships affect relapse risk'],
    adaptingNeeded: ['Acute psychosis without stabilisation', 'Domestic violence within the family'],
    theoreticalModel: 'Based on the expressed emotion model: high levels of criticism, hostility, or emotional over-involvement in families are associated with increased relapse rates. FIp aims to reduce expressed emotion through psychoeducation, communication skills, and structured problem-solving.',
    mechanismsOfChange: ['Reduced expressed emotion', 'Improved family understanding of psychosis', 'Enhanced communication skills', 'Structured problem-solving', 'Early relapse detection'],
    coreTechniques: [
      { id: 'fip_psychoed', name: 'Psychoeducation', briefLay: 'Learning about psychosis together as a family \u2014 what it is, how it affects people, and what helps recovery.', briefPro: 'Structured psychoeducation about psychosis, medication, recovery, and relapse. Tailored to the family\u2019s level of understanding and cultural context.' },
      { id: 'fip_communication', name: 'Communication Skills Training', briefLay: 'Practising ways of communicating that support recovery rather than adding stress.', briefPro: 'Structured communication skills training targeting expressed emotion, including active listening, expressing positive feelings, making constructive requests, and reducing criticism.' },
    ],
    evidenceGuidelineSupport: 'Strong. NICE CG178 recommends family intervention for all people with psychosis.',
    evidenceStrength: 'Moderate to strong for relapse reduction. Multiple meta-analyses demonstrate significant reductions in relapse rates.',
    evidenceLimitations: 'Fidelity matters. Engagement can be challenging. Service capacity is often limited.',
  },
  sessionProfile: { duration: '60\u201390 minutes', frequency: 'Weekly or fortnightly', typicalCourse: '10\u201320 sessions', timeLimited: true, betweenSessionWork: 'Communication practice, relapse prevention planning' },
  evidenceClaims: [{ id: 'fip_relapse', conditionName: 'Psychosis Relapse Prevention', population: 'Families', claimType: 'Guideline recommendation', effectSummaryLay: 'Family intervention helps reduce the risk of psychosis relapse by improving family understanding and communication.', effectSummaryPro: 'NICE CG178 recommends FIp for all people with psychosis. Meta-analyses show significant relapse reduction (NNT approximately 7). Effects strongest with programme fidelity.', evidenceTier: 'guideline_supported', limitations: 'Service capacity and engagement challenges.', sourceIds: ['nice_cg178'] }],
  resources: [
    { id: 'fip_psychoed_pack', title: 'Psychoeducation Pack', description: 'A family-friendly guide to understanding psychosis.', audience: 'parent', therapyIds: ['fip'], format: 'PDF', riskLevel: 'low' },
    { id: 'fip_communication_scripts', title: 'Communication Scripts', description: 'Scripts for constructive family communication.', audience: 'parent', therapyIds: ['fip'], format: 'PDF', riskLevel: 'low' },
    { id: 'fip_problem_solving', title: 'Problem-Solving Steps', description: 'A structured problem-solving guide for families.', audience: 'parent', therapyIds: ['fip'], format: 'PDF', riskLevel: 'low' },
    { id: 'fip_relapse_plan', title: 'Relapse Prevention Plan', description: 'A family relapse prevention plan template.', audience: 'parent', therapyIds: ['fip'], format: 'PDF', riskLevel: 'low' },
    { id: 'fip_pro_session', title: 'Session Plan Structure', description: 'A session-by-session guide for FIp delivery.', audience: 'professional', therapyIds: ['fip'], format: 'PDF', riskLevel: 'low' },
  ],
  practitionerNotes: { background: 'Mental health professionals (psychologists, nurses, social workers) with family intervention training.', trainingRoutes: 'Family intervention training through NHS trusts and specialist training providers. Often part of early intervention in psychosis service training.', registration: 'Core professional registration plus FIp-specific training.' },
  sourceIds: ['nice_cg178'], lastReviewed: 'January 2026', indicationCategories: ['psychosis'], ageBands: ['teen', 'adult'], deliveryFormats: ['family', 'group'], intensity: 'moderate', settingFits: ['specialist', 'community'], evidenceTier: 'guideline_supported',
  whereNotEnough: 'FIp is designed as an adjunct to other psychosis treatments. Not a standalone intervention.',
};
