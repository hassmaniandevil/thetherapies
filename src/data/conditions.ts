import { Condition } from '@/lib/types';

export const conditions: Condition[] = [
  {
    id: 'depression', slug: 'depression', name: 'Depression',
    ageBands: ['teen', 'adult'],
    overviewLay: 'Depression is more than feeling sad. It is a persistent low mood that affects how you think, feel, and function in daily life. It can make everything feel harder and reduce your interest in things you used to enjoy.',
    overviewPro: 'Major depressive disorder is characterised by persistent low mood and/or anhedonia, accompanied by cognitive, behavioural, and somatic symptoms. Diagnostic criteria (DSM-5/ICD-11) require at least two weeks of symptoms causing functional impairment. Severity ranges from mild to severe, with or without psychotic features.',
    recommendedTherapies: [
      { therapyId: 'cbt', evidenceTier: 'guideline_supported', notes: 'NICE NG222 first-line recommendation for depression across severities.' },
      { therapyId: 'ba', evidenceTier: 'guideline_supported', notes: 'NICE NG222 recommendation; non-inferior to CBT in COBRA trial.' },
      { therapyId: 'ipt', evidenceTier: 'guideline_supported', notes: 'NICE NG222 recommendation, particularly for interpersonally-driven depression.' },
      { therapyId: 'act', evidenceTier: 'moderate', notes: 'Growing evidence; comparable to CBT in several trials.' },
      { therapyId: 'cat', evidenceTier: 'moderate', notes: 'Particularly for recurrent depression with relational patterns.' },
      { therapyId: 'cft', evidenceTier: 'moderate', notes: 'Particularly for shame-based depression.' },
    ],
  },
  {
    id: 'anxiety', slug: 'anxiety-disorders', name: 'Anxiety Disorders',
    ageBands: ['child', 'teen', 'adult'],
    overviewLay: 'Anxiety disorders involve persistent worry, fear, or dread that is out of proportion to the actual situation. They can affect your thoughts, body, and behaviour, making everyday situations feel threatening.',
    overviewPro: 'Anxiety disorders encompass generalised anxiety disorder (GAD), panic disorder, social anxiety disorder, specific phobias, and agoraphobia. They involve excessive fear/anxiety with avoidance behaviours, physiological arousal, and cognitive biases toward threat.',
    recommendedTherapies: [
      { therapyId: 'cbt', evidenceTier: 'guideline_supported', notes: 'NICE-recommended for all anxiety disorders.' },
      { therapyId: 'act', evidenceTier: 'moderate', notes: 'Growing evidence for anxiety; particularly useful when experiential avoidance is central.' },
    ],
  },
  {
    id: 'ptsd', slug: 'ptsd', name: 'Post-Traumatic Stress Disorder (PTSD)',
    ageBands: ['child', 'teen', 'adult'],
    overviewLay: 'PTSD can develop after experiencing or witnessing a traumatic event. It involves re-experiencing the trauma through flashbacks or nightmares, avoiding reminders, feeling on edge, and changes in mood and thinking.',
    overviewPro: 'PTSD is characterised by intrusion symptoms (re-experiencing), avoidance of trauma-related stimuli, negative alterations in cognitions and mood, and marked alterations in arousal and reactivity, persisting beyond one month post-trauma. Complex PTSD (ICD-11) adds disturbances in self-organisation.',
    recommendedTherapies: [
      { therapyId: 'cbt', evidenceTier: 'guideline_supported', notes: 'Trauma-focused CBT (including CT-PTSD, CPT) is NICE NG116 first-line.' },
      { therapyId: 'net', evidenceTier: 'moderate', notes: 'Particularly for multiple traumas and refugee populations.' },
    ],
  },
  {
    id: 'ocd', slug: 'ocd', name: 'Obsessive-Compulsive Disorder (OCD)',
    ageBands: ['child', 'teen', 'adult'],
    overviewLay: 'OCD involves unwanted, distressing thoughts (obsessions) and repetitive behaviours or mental acts (compulsions) performed to reduce the anxiety caused by obsessions.',
    overviewPro: 'OCD is characterised by recurrent, persistent intrusive thoughts/images/urges (obsessions) and/or repetitive behaviours/mental acts (compulsions) that are time-consuming, distressing, or impairing. The cognitive model emphasises appraisal of intrusions, inflated responsibility, and thought-action fusion.',
    recommendedTherapies: [
      { therapyId: 'cbt', evidenceTier: 'guideline_supported', notes: 'CBT with ERP is NICE CG31 first-line. ERP is the core active ingredient.' },
    ],
  },
  {
    id: 'personality_disorders', slug: 'personality-difficulties', name: 'Personality Difficulties',
    ageBands: ['adult'],
    overviewLay: 'Personality difficulties involve longstanding patterns in how you relate to yourself and others that cause persistent distress or problems in daily life. They often develop from early relational experiences and affect identity, relationships, and emotional regulation.',
    overviewPro: 'Personality disorders involve enduring patterns of inner experience and behaviour that deviate from cultural expectations, are pervasive and inflexible, have onset in adolescence/early adulthood, are stable over time, and lead to distress or impairment. The ICD-11 reconceptualises personality disorder as a dimensional construct.',
    recommendedTherapies: [
      { therapyId: 'dbt', evidenceTier: 'guideline_supported', notes: 'NICE CG78 recommendation for BPD. Comprehensive programme required.' },
      { therapyId: 'mbt', evidenceTier: 'guideline_supported', notes: 'NICE CG78 recommendation for BPD.' },
      { therapyId: 'schema_therapy', evidenceTier: 'moderate', notes: 'RCT evidence for BPD (Giesen-Bloo et al.).' },
      { therapyId: 'cat', evidenceTier: 'moderate', notes: 'Widely used in UK NHS personality disorder services.' },
      { therapyId: 'tfp', evidenceTier: 'moderate', notes: 'RCT evidence for severe personality pathology.' },
    ],
  },
  {
    id: 'eating_disorders', slug: 'eating-disorders', name: 'Eating Disorders',
    ageBands: ['child', 'teen', 'adult'],
    overviewLay: 'Eating disorders involve serious disturbances in eating behaviour, body image, and weight/shape concerns. They are not a lifestyle choice \u2014 they are complex mental health conditions that can have severe physical consequences.',
    overviewPro: 'Eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, ARFID, and OSFED. They involve disturbed eating behaviour, body image distortion, and often significant medical complications. Early intervention improves outcomes.',
    recommendedTherapies: [
      { therapyId: 'fbt', evidenceTier: 'guideline_supported', notes: 'NICE NG69 first-line for adolescent anorexia.' },
      { therapyId: 'cbte', evidenceTier: 'guideline_supported', notes: 'NICE NG69 recommendation for bulimia and binge eating disorder.' },
    ],
  },
  {
    id: 'psychosis', slug: 'psychosis', name: 'Psychosis and Schizophrenia',
    ageBands: ['teen', 'adult'],
    overviewLay: 'Psychosis involves experiences like hearing voices, holding unusual beliefs, or feeling confused about what is real. Schizophrenia is a specific condition involving psychotic symptoms alongside other difficulties. These are treatable conditions.',
    overviewPro: 'Schizophrenia spectrum disorders involve positive symptoms (hallucinations, delusions), negative symptoms (avolition, alogia, anhedonia), and cognitive impairment. Treatment combines pharmacological and psychosocial interventions.',
    recommendedTherapies: [
      { therapyId: 'cbtp', evidenceTier: 'guideline_supported', notes: 'NICE CG178 recommends CBTp for all people with psychosis.' },
      { therapyId: 'fip', evidenceTier: 'guideline_supported', notes: 'NICE CG178 recommends family intervention for relapse prevention.' },
    ],
  },
  {
    id: 'self_harm', slug: 'self-harm', name: 'Self-Harm',
    ageBands: ['teen', 'adult'],
    overviewLay: 'Self-harm means intentionally hurting yourself as a way of dealing with overwhelming emotions, distress, or difficult experiences. It is a sign that someone is struggling and needs support, not a bid for attention.',
    overviewPro: 'Non-suicidal self-injury (NSSI) and self-harm with suicidal intent are distinct but overlapping presentations. Self-harm is commonly associated with emotional dysregulation, personality difficulties, trauma, and depression. It functions as affect regulation, self-punishment, or communication.',
    recommendedTherapies: [
      { therapyId: 'dbt', evidenceTier: 'guideline_supported', notes: 'Strongest evidence for chronic self-harm, especially in BPD context.' },
      { therapyId: 'mbt', evidenceTier: 'moderate', notes: 'Evidence for self-harm reduction in BPD.' },
      { therapyId: 'cbt', evidenceTier: 'moderate', notes: 'Evidence varies; adapted approaches needed.' },
    ],
  },
  {
    id: 'behaviour_problems', slug: 'behaviour-problems-children', name: 'Behaviour Problems in Children and Young People',
    ageBands: ['child', 'teen'],
    overviewLay: 'Behavioural difficulties in children and young people can include persistent defiance, aggression, rule-breaking, and conflict. These are often responses to difficult circumstances and are treatable with the right support.',
    overviewPro: 'Conduct disorder and oppositional defiant disorder are characterised by persistent patterns of antisocial, aggressive, or defiant behaviour. Risk factors include adverse childhood experiences, family dysfunction, and peer influences. Functional analysis identifies maintaining factors.',
    recommendedTherapies: [
      { therapyId: 'pcit', evidenceTier: 'strong', notes: 'Strong evidence for young children (2\u20137).' },
      { therapyId: 'mst', evidenceTier: 'strong', notes: 'For high-risk adolescents.' },
      { therapyId: 'fft', evidenceTier: 'moderate', notes: 'For families with adolescents.' },
    ],
  },
  {
    id: 'substance_use', slug: 'substance-use', name: 'Substance Use Disorders',
    ageBands: ['teen', 'adult'],
    overviewLay: 'Substance use disorders involve patterns of alcohol or drug use that cause significant problems in your life, health, and relationships. Recovery is possible with the right support.',
    overviewPro: 'Substance use disorders are characterised by impaired control over substance use, social impairment, risky use, and pharmacological indicators (tolerance, withdrawal). Biopsychosocial models inform treatment.',
    recommendedTherapies: [
      { therapyId: 'mi', evidenceTier: 'moderate', notes: 'Evidence for engagement and brief intervention.' },
      { therapyId: 'cbt', evidenceTier: 'moderate', notes: 'Adapted CBT for substance use.' },
      { therapyId: 'cm', evidenceTier: 'strong', notes: 'Strong evidence for stimulant use disorders.' },
    ],
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find(c => c.slug === slug);
}
