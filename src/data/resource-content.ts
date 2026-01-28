// Resource content for printable worksheets and guides
// Each resource has rich content that renders as a printable page

export interface ResourceContent {
  id: string;
  sections: {
    title?: string;
    type: 'intro' | 'text' | 'worksheet' | 'table' | 'checklist' | 'example' | 'tips' | 'footer';
    content?: string;
    items?: string[];
    rows?: { label: string; value?: string }[];
    columns?: string[];
    tableRows?: string[][];
  }[];
}

export const resourceContents: Record<string, ResourceContent> = {
  // ============ CBT RESOURCES ============
  cbt_model_adult: {
    id: 'cbt_model_adult',
    sections: [
      { type: 'intro', content: 'Cognitive Behavioural Therapy (CBT) is based on the idea that our thoughts, feelings, physical sensations, and behaviours are all connected. When we change one, we can change the others.' },
      { type: 'text', title: 'The CBT Model', content: 'Imagine you are walking down the street and see someone you know. They walk past without saying hello.' },
      {
        type: 'table',
        title: 'How the same situation can lead to different outcomes',
        columns: ['', 'Interpretation A', 'Interpretation B'],
        tableRows: [
          ['Situation', 'Friend walks past without saying hello', 'Friend walks past without saying hello'],
          ['Thought', '"They ignored me — they must not like me anymore"', '"They looked distracted — maybe they didn\'t see me"'],
          ['Feeling', 'Hurt, anxious, rejected', 'Neutral, slightly curious'],
          ['Physical', 'Tense shoulders, churning stomach', 'Relaxed'],
          ['Behaviour', 'Avoid them, withdraw from others', 'Text them later to check in'],
        ],
      },
      { type: 'text', title: 'Key insight', content: 'It\'s not the situation itself that determines how we feel — it\'s how we interpret it. In CBT, we learn to notice our automatic interpretations and consider whether they are accurate or helpful.' },
      {
        type: 'checklist',
        title: 'The five areas of CBT',
        items: [
          'Situation — What happened? Where were you? Who was there?',
          'Thoughts — What went through your mind? What did you say to yourself?',
          'Feelings — What emotions did you notice? (e.g., sad, anxious, angry)',
          'Physical sensations — What did you notice in your body?',
          'Behaviours — What did you do? What did you avoid doing?',
        ],
      },
      { type: 'tips', title: 'Using this in daily life', items: [
        'When you notice a strong emotion, pause and ask: "What thought just went through my mind?"',
        'Write down your thoughts — this helps you see them more clearly',
        'Remember: thoughts are not facts. We can learn to step back and evaluate them.',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support. If you are struggling, please speak with a qualified therapist or your GP.' },
    ],
  },

  cbt_thought_record: {
    id: 'cbt_thought_record',
    sections: [
      { type: 'intro', content: 'A thought record helps you identify and evaluate unhelpful thinking patterns. Use this worksheet when you notice a strong negative emotion.' },
      {
        type: 'worksheet',
        title: 'Thought Record',
        rows: [
          { label: 'Date & Time' },
          { label: 'Situation', value: 'What happened? Where were you? Who was there?' },
          { label: 'Emotions', value: 'What did you feel? Rate intensity 0-100%' },
          { label: 'Automatic Thought', value: 'What went through your mind? What\'s the hot thought?' },
          { label: 'Evidence FOR this thought', value: 'What facts support this thought?' },
          { label: 'Evidence AGAINST this thought', value: 'What facts contradict this thought?' },
          { label: 'Alternative/Balanced thought', value: 'What\'s a more balanced way to see this?' },
          { label: 'Outcome', value: 'How do you feel now? Rate emotions 0-100%' },
        ],
      },
      {
        type: 'example',
        title: 'Example',
        content: 'Situation: Gave presentation at work, stumbled over words.\nEmotion: Embarrassed (80%), Anxious (70%)\nAutomatic thought: "Everyone thinks I\'m incompetent"\nEvidence for: I did stumble on two slides\nEvidence against: People asked good questions, boss said "well done", nobody laughed\nBalanced thought: "I made some mistakes but delivered the key points. Most people probably noticed less than I did."\nOutcome: Embarrassed (30%), Anxious (20%)',
      },
      { type: 'tips', title: 'Tips for effective thought records', items: [
        'Complete it as soon as possible after the triggering event',
        'Be specific — write the exact thought, not a summary',
        'The "hot thought" is the one that carries the most emotional charge',
        'Evidence must be factual, not interpretations',
        'A balanced thought doesn\'t have to be positive — just more accurate',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cbt_behavioural_experiment: {
    id: 'cbt_behavioural_experiment',
    sections: [
      { type: 'intro', content: 'Behavioural experiments help you test whether your anxious predictions are accurate. Instead of just thinking about whether a thought is true, you gather real-world evidence.' },
      {
        type: 'worksheet',
        title: 'Behavioural Experiment Planner',
        rows: [
          { label: 'The thought/prediction I want to test', value: 'Write your anxious prediction as specifically as possible' },
          { label: 'How much do I believe this? (0-100%)' },
          { label: 'What experiment could test this?', value: 'What could I do to find out if this is true?' },
          { label: 'What do I predict will happen?', value: 'Be specific — what exactly do I expect?' },
          { label: 'What problems might come up?', value: 'How could I handle them?' },
          { label: 'What actually happened?', value: 'Describe the outcome factually' },
          { label: 'What did I learn?', value: 'Was my prediction accurate? What does this mean?' },
          { label: 'How much do I believe the original thought now? (0-100%)' },
        ],
      },
      {
        type: 'example',
        title: 'Example',
        content: 'Prediction: "If I ask a question in the meeting, everyone will think I\'m stupid" (Belief: 85%)\nExperiment: Ask one question in tomorrow\'s team meeting\nPredicted outcome: People will look at me strangely, the room will go silent\nActual outcome: Manager answered my question, two colleagues nodded, meeting continued normally\nLearning: My prediction was not accurate. Asking questions is normal and expected.\nNew belief rating: 25%',
      },
      { type: 'tips', title: 'Designing good experiments', items: [
        'Start with lower-stakes experiments and work up',
        'Make predictions specific and measurable',
        'Record what actually happens, not how you felt about it',
        'One experiment rarely changes a belief completely — plan a series',
        'If your prediction comes true, what else might explain it?',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cbt_relapse_prevention: {
    id: 'cbt_relapse_prevention',
    sections: [
      { type: 'intro', content: 'A relapse prevention plan helps you maintain the progress you\'ve made in therapy and respond effectively if difficulties return. Complete this with your therapist towards the end of treatment.' },
      {
        type: 'worksheet',
        title: 'My Relapse Prevention Plan',
        rows: [
          { label: 'What I came to therapy for', value: 'Brief summary of original difficulties' },
          { label: 'What I\'ve learned about my patterns', value: 'Key insights about thoughts, feelings, behaviours' },
          { label: 'Skills that have helped me most', value: 'List the CBT techniques that worked for you' },
          { label: 'My early warning signs', value: 'How would I know if things were starting to slip?' },
          { label: 'My triggers', value: 'Situations, times, or events that make me vulnerable' },
          { label: 'What I will do if I notice warning signs', value: 'Specific actions I commit to taking' },
          { label: 'People I can reach out to', value: 'Names and how to contact them' },
          { label: 'Professional support', value: 'GP, therapist, crisis numbers' },
        ],
      },
      {
        type: 'checklist',
        title: 'My maintenance activities',
        items: [
          'Continue practising thought records when needed',
          'Maintain healthy routines (sleep, exercise, social contact)',
          'Review this plan monthly',
          'Notice and challenge unhelpful thinking',
          'Use behavioural experiments for new anxious predictions',
          'Keep doing activities that give me a sense of achievement and pleasure',
        ],
      },
      {
        type: 'text',
        title: 'Remember',
        content: 'Setbacks are a normal part of recovery, not a sign of failure. If you notice old patterns returning, it doesn\'t mean therapy didn\'t work — it means it\'s time to use your skills again. You\'ve done it before and you can do it again.',
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ CAT RESOURCES ============
  cat_understanding_patterns: {
    id: 'cat_understanding_patterns',
    sections: [
      { type: 'intro', content: 'In Cognitive Analytic Therapy (CAT), we understand difficulties as "patterns" — repeating ways of thinking, feeling, and relating that developed early in life. Recognising these patterns is the first step to changing them.' },
      {
        type: 'text',
        title: 'Why patterns develop',
        content: 'As children, we cope with difficult situations by developing strategies to manage them. These strategies — patterns of how we think, feel, and act — help us survive emotionally. However, if we continue using them even when they\'re no longer needed, they can cause problems in adult life.',
      },
      {
        type: 'text',
        title: 'Traps',
        content: 'A trap is a vicious circle where what you do to cope actually makes the problem worse, which then seems to confirm the original belief.\n\nExample: You feel unconfident → You avoid speaking up → You don\'t get practice → You feel more unconfident.\n\nThe trap keeps you stuck because the coping strategy (avoiding) prevents you from learning that you could cope.',
      },
      {
        type: 'text',
        title: 'Dilemmas',
        content: 'A dilemma is when you feel stuck between two options, both of which seem bad. It\'s an "either/or" pattern where you can\'t see any middle ground.\n\nExample: "Either I put others first and lose myself, or I put myself first and end up alone."\n\nDilemmas keep you stuck because you swing between the two poles without finding a balanced position.',
      },
      {
        type: 'text',
        title: 'Snags',
        content: 'A snag is when you make progress but then something seems to block you or pull you back. Sometimes this is because success feels dangerous or disloyal.\n\nExample: You start doing well → You feel guilty about surpassing a parent who struggled → You sabotage your success.\n\nSnags keep you stuck because part of you believes that getting better will have negative consequences.',
      },
      {
        type: 'worksheet',
        title: 'Identifying my patterns',
        rows: [
          { label: 'A trap I recognise in myself', value: 'What\'s the vicious circle?' },
          { label: 'A dilemma I face', value: 'What\'s the either/or?' },
          { label: 'A snag I\'ve noticed', value: 'What pulls me back when I make progress?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_reciprocal_roles_explainer: {
    id: 'cat_reciprocal_roles_explainer',
    sections: [
      { type: 'intro', content: 'Reciprocal roles are the relationship patterns we learn early in life and carry into our current relationships. They\'re like templates for how we relate to others — and to ourselves.' },
      {
        type: 'text',
        title: 'What are reciprocal roles?',
        content: 'Every relationship involves two positions that go together. If someone is critical, someone else is being criticised. If someone is caring, someone else is being cared for.\n\nAs children, we learn both sides of these relationships. The way others treated us becomes the way we treat ourselves and expect others to treat us.',
      },
      {
        type: 'example',
        title: 'Example',
        content: 'A child whose parents were often critical may develop a "Criticising → Criticised" reciprocal role.\n\nAs an adult, they might:\n• Criticise themselves harshly (being in the "criticising" position towards themselves)\n• Expect others to criticise them (being in the "criticised" position)\n• Become critical of others (putting others in the "criticised" position)\n• Seek out relationships with critical people (because it feels familiar)',
      },
      {
        type: 'text',
        title: 'How reciprocal roles play out',
        content: 'We can be in either position of a reciprocal role:\n\n• With ourselves: The way you talk to yourself in your head often reflects old reciprocal roles.\n\n• With others: You might take one position and unconsciously "invite" others into the opposite position.\n\n• In therapy: The patterns often show up in the relationship with your therapist, which helps make them visible.',
      },
      {
        type: 'worksheet',
        title: 'Exploring my reciprocal roles',
        rows: [
          { label: 'How did important people treat me growing up?', value: 'What was their position?' },
          { label: 'How do I treat myself now?', value: 'Am I using a similar position?' },
          { label: 'What patterns do I notice in my relationships?', value: 'What positions do I take? What positions do others take?' },
        ],
      },
      { type: 'tips', title: 'Working with reciprocal roles', items: [
        'Recognition comes first — just noticing the pattern is progress',
        'Neither position is "better" — both sides of the role are learned together',
        'New, healthier reciprocal roles can be developed (e.g., "Respecting ↔ Respected")',
        'The therapeutic relationship can model new ways of relating',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_what_to_expect: {
    id: 'cat_what_to_expect',
    sections: [
      { type: 'intro', content: 'Cognitive Analytic Therapy (CAT) is a collaborative, time-limited therapy typically lasting 16-24 sessions. Here\'s what to expect in each phase.' },
      {
        type: 'text',
        title: 'Phase 1: Reformulation (Sessions 1-4)',
        content: 'In the first few sessions, you and your therapist work together to understand your difficulties.\n\n• You\'ll complete the "Psychotherapy File" — a questionnaire about common patterns\n• Your therapist will ask about your early experiences and current difficulties\n• Together, you\'ll identify your key patterns (traps, dilemmas, snags) and reciprocal roles\n• Your therapist will write you a "reformulation letter" summarising what they\'ve understood\n• You\'ll create a diagram (SDR) mapping your patterns',
      },
      {
        type: 'text',
        title: 'Phase 2: Recognition (Sessions 5-12)',
        content: 'The middle phase focuses on building awareness of your patterns as they happen.\n\n• You\'ll practise "pattern-spotting" — noticing when you\'re in an old pattern\n• Between sessions, you may keep a diary to track patterns\n• Patterns often show up in the therapy relationship itself\n• You\'ll develop an "observing eye" — the ability to notice patterns while they\'re happening',
      },
      {
        type: 'text',
        title: 'Phase 3: Revision (Sessions 13-16/24)',
        content: 'The final phase focuses on changing patterns and preparing for ending.\n\n• You\'ll identify and practise "exits" — new ways of responding\n• There\'s an explicit focus on ending and what it brings up\n• You and your therapist will write "goodbye letters" to each other\n• Follow-up sessions (usually 1-4) help maintain progress',
      },
      {
        type: 'checklist',
        title: 'What sessions are like',
        items: [
          'Weekly sessions of about 50 minutes',
          'Your therapist works collaboratively with you — this isn\'t something done "to" you',
          'You may be asked to complete tasks between sessions (diaries, reading your letter)',
          'Ending is kept in mind from the start — the time limit is part of the therapy',
          'Feelings that come up in the therapy relationship are important to discuss',
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_tds_worksheet: {
    id: 'cat_tds_worksheet',
    sections: [
      { type: 'intro', content: 'This worksheet helps you identify which traps, dilemmas, and snags might apply to your patterns. Read each description and mark any that feel familiar.' },
      {
        type: 'text',
        title: 'Common Traps',
        content: 'Mark any that apply to you:',
      },
      {
        type: 'checklist',
        title: '',
        items: [
          'The Fear Trap: I avoid things I\'m anxious about → I don\'t learn I could cope → I stay anxious',
          'The Depressing Thinking Trap: I think negatively → I feel low → I don\'t do things → I think more negatively',
          'The Social Isolation Trap: I feel different/unwanted → I avoid people → I get more isolated → I feel more different',
          'The Trying Too Hard Trap: I try to be perfect → I exhaust myself → I fail → I try even harder',
          'The Low Self-Esteem Trap: I feel bad about myself → I don\'t assert myself → Others treat me badly → I feel worse about myself',
        ],
      },
      {
        type: 'text',
        title: 'Common Dilemmas',
        content: 'Mark any that apply to you:',
      },
      {
        type: 'checklist',
        title: '',
        items: [
          'Either I keep feelings bottled up OR I let go and get out of control',
          'Either I put others first and lose myself OR I put myself first and end up alone',
          'Either I\'m close to someone and feel suffocated OR I\'m distant and feel lonely',
          'Either I\'m in control of everything OR everything is chaotic',
          'Either I\'m perfect OR I\'m worthless',
        ],
      },
      {
        type: 'text',
        title: 'Common Snags',
        content: 'Mark any that apply to you:',
      },
      {
        type: 'checklist',
        title: '',
        items: [
          'When things start to go well, I find ways to sabotage them',
          'I feel guilty about being happier or more successful than others in my family',
          'Achieving goals makes me anxious, as if something bad will happen',
          'I can\'t accept good things because I don\'t feel I deserve them',
          'Getting better would mean admitting the past wasn\'t "that bad"',
        ],
      },
      {
        type: 'worksheet',
        title: 'Reflection',
        rows: [
          { label: 'Which patterns feel most familiar?', value: 'List your top 2-3' },
          { label: 'What situations trigger these patterns?', value: '' },
          { label: 'How do these patterns affect your life?', value: '' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ DBT RESOURCES ============
  dbt_skills_summary: {
    id: 'dbt_skills_summary',
    sections: [
      { type: 'intro', content: 'DBT teaches four sets of skills for managing emotions and relationships. Here\'s a quick summary of each module.' },
      {
        type: 'text',
        title: 'Core Mindfulness',
        content: 'Foundation for all other skills. Being present without judgement.\n\n• Observe: Notice without getting caught up\n• Describe: Put words to experiences\n• Participate: Throw yourself fully into the moment\n\nHow: One-mindfully, Non-judgementally, Effectively',
      },
      {
        type: 'text',
        title: 'Distress Tolerance',
        content: 'Getting through crisis moments without making things worse.\n\n• TIPP: Temperature, Intense exercise, Paced breathing, Paired muscle relaxation\n• ACCEPTS: Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations\n• Radical Acceptance: Accepting reality as it is (not approving, just not fighting)',
      },
      {
        type: 'text',
        title: 'Emotion Regulation',
        content: 'Understanding and managing emotions.\n\n• ABC PLEASE: Accumulate positives, Build mastery, Cope ahead, treat PhysicaL illness, balance Eating, avoid mood-Altering substances, balance Sleep, Exercise\n• Check the Facts: Does my emotion fit the situation?\n• Opposite Action: When the emotion doesn\'t fit, act opposite to its urge',
      },
      {
        type: 'text',
        title: 'Interpersonal Effectiveness',
        content: 'Getting what you need while keeping relationships and self-respect.\n\n• DEAR MAN: Describe, Express, Assert, Reinforce, stay Mindful, Appear confident, Negotiate\n• GIVE: be Gentle, act Interested, Validate, use an Easy manner\n• FAST: be Fair, no Apologies, Stick to values, be Truthful',
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  dbt_crisis_plan: {
    id: 'dbt_crisis_plan',
    sections: [
      { type: 'intro', content: 'This plan helps you get through crisis moments safely using DBT skills. Complete this when you\'re calm and keep it somewhere accessible.' },
      {
        type: 'worksheet',
        title: 'My Crisis Survival Plan',
        rows: [
          { label: 'Early warning signs', value: 'How do I know a crisis is building?' },
          { label: 'My triggers', value: 'What situations or events make me vulnerable?' },
          { label: 'TIPP skills I\'ll use', value: 'Temperature: / Intense exercise: / Paced breathing: / Paired muscle relaxation:' },
          { label: 'Distractions that work for me (ACCEPTS)', value: 'List activities, people to help, things to do' },
          { label: 'Self-soothing that helps', value: 'What can I see/hear/smell/taste/touch?' },
          { label: 'My reasons for living', value: 'People, goals, values that matter to me' },
          { label: 'People I can contact', value: 'Name and number' },
          { label: 'Professional support', value: 'Therapist / Crisis line / A&E' },
        ],
      },
      {
        type: 'text',
        title: 'Remember',
        content: 'Urges are temporary. You don\'t have to act on them. The goal is to get through this moment without making things worse. Use your skills. The crisis will pass.',
      },
      { type: 'footer', content: 'This resource is for crisis support. If you are at immediate risk, contact emergency services (999/112) or go to A&E.' },
    ],
  },

  dbt_parent_validation: {
    id: 'dbt_parent_validation',
    sections: [
      { type: 'intro', content: 'Validation means communicating that someone\'s feelings, thoughts, or behaviours make sense given their situation. It\'s one of the most powerful things parents can do.' },
      {
        type: 'text',
        title: 'Why validation matters',
        content: 'When someone is distressed and we jump to problem-solving, minimising, or criticising, they often feel unheard and escalate. Validation calms the emotional brain so the person can think more clearly.\n\nValidation doesn\'t mean agreeing or approving. It means acknowledging the person\'s experience.',
      },
      {
        type: 'checklist',
        title: 'Six levels of validation',
        items: [
          'Pay attention — Put down your phone. Make eye contact. Be present.',
          'Reflect back — "It sounds like you\'re feeling really frustrated."',
          'Read minds (carefully) — "I imagine that must have been scary for you."',
          'Validate based on history — "Given what happened before, it makes sense you\'d feel this way."',
          'Validate based on the present — "Anyone would feel overwhelmed in that situation."',
          'Radical genuineness — Treat them as capable. "I believe you can handle this."',
        ],
      },
      {
        type: 'table',
        title: 'Invalidating vs Validating responses',
        columns: ['Situation', 'Invalidating', 'Validating'],
        tableRows: [
          ['Teen upset about friend conflict', '"You\'re overreacting"', '"That sounds really hurtful"'],
          ['Child anxious about school', '"There\'s nothing to worry about"', '"Starting something new can feel scary"'],
          ['Teen angry about rule', '"Don\'t be dramatic"', '"I can see you\'re really frustrated. And the rule still stands."'],
        ],
      },
      { type: 'tips', title: 'Tips for parents', items: [
        'Validate FIRST, problem-solve SECOND (if at all)',
        'You can validate feelings while setting limits on behaviour',
        'Validation isn\'t about fixing — it\'s about connecting',
        'Practice on small things so it\'s natural for big things',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ ACT RESOURCES ============
  act_values_guide: {
    id: 'act_values_guide',
    sections: [
      { type: 'intro', content: 'In Acceptance and Commitment Therapy (ACT), values are like a compass — they give direction to your life. Unlike goals, values can\'t be "achieved" — they\'re ongoing qualities of action.' },
      {
        type: 'text',
        title: 'Values vs Goals',
        content: 'A goal is something you can tick off: "Get a promotion." A value is a direction you travel: "Be dedicated and excellent in my work."\n\nYou can reach a goal and stop. You can never be done with a value — you can always keep moving in that direction.',
      },
      {
        type: 'worksheet',
        title: 'Values exploration',
        rows: [
          { label: 'Relationships (family, friends, partners)', value: 'What kind of person do I want to be in my relationships?' },
          { label: 'Work/Education', value: 'What do I want to stand for in my working life?' },
          { label: 'Personal growth/Health', value: 'How do I want to take care of myself and develop?' },
          { label: 'Leisure/Recreation', value: 'What brings me alive when I have free time?' },
          { label: 'Community/Spirituality', value: 'What larger purpose or contribution matters to me?' },
        ],
      },
      {
        type: 'text',
        title: 'Choosing values',
        content: 'Values are freely chosen. They\'re not about what others expect or what you "should" want. Ask yourself:\n\n• What would I want my life to be about if nobody was watching?\n• What do I want to stand for when things are difficult?\n• At the end of my life, what will have mattered?',
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  act_defusion: {
    id: 'act_defusion',
    sections: [
      { type: 'intro', content: 'Cognitive defusion means changing your relationship with thoughts — not changing the thoughts themselves. When we\'re "fused" with thoughts, we take them literally. Defusion creates distance.' },
      {
        type: 'text',
        title: 'Why defusion?',
        content: 'You don\'t need to believe every thought you have. Thoughts are just words and images — mental events that come and go. Defusion helps you see thoughts as thoughts, rather than facts or commands.',
      },
      {
        type: 'checklist',
        title: 'Defusion exercises',
        items: [
          '"I\'m having the thought that..." — Put these words before the thought',
          '"My mind is telling me..." — Notice that it\'s your mind talking, not reality',
          'Silly voice — Repeat the thought in a cartoon voice',
          'Sing it — Sing the thought to "Happy Birthday"',
          'Thank your mind — "Thanks, mind, for that thought"',
          'Name the story — "Ah, there\'s the \'I\'m not good enough\' story again"',
          'Leaves on a stream — Visualise placing thoughts on leaves floating by',
        ],
      },
      {
        type: 'text',
        title: 'When to use defusion',
        content: 'Defusion is useful when:\n• A thought is unhelpful and you keep getting stuck on it\n• You notice you\'re taking a thought very literally\n• A thought is leading you away from your values\n• You\'re trying to argue with or suppress a thought (which usually backfires)',
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ BA RESOURCES ============
  ba_activity_diary: {
    id: 'ba_activity_diary',
    sections: [
      { type: 'intro', content: 'Activity monitoring helps you see the connection between what you do and how you feel. This diary tracks your activities and mood throughout the day.' },
      {
        type: 'text',
        title: 'How to use this diary',
        content: 'For each time slot, briefly note what you were doing and rate your mood (0 = worst, 10 = best). After a few days, look for patterns: Which activities lift your mood? Which bring it down?',
      },
      {
        type: 'table',
        title: 'Activity Diary',
        columns: ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        tableRows: [
          ['Morning', '', '', '', '', '', '', ''],
          ['Mood (0-10)', '', '', '', '', '', '', ''],
          ['Afternoon', '', '', '', '', '', '', ''],
          ['Mood (0-10)', '', '', '', '', '', '', ''],
          ['Evening', '', '', '', '', '', '', ''],
          ['Mood (0-10)', '', '', '', '', '', '', ''],
        ],
      },
      {
        type: 'worksheet',
        title: 'Reflection',
        rows: [
          { label: 'Activities that improved my mood' },
          { label: 'Activities that lowered my mood' },
          { label: 'Patterns I noticed' },
          { label: 'One activity I could do more of this week' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  ba_pleasant_activities: {
    id: 'ba_pleasant_activities',
    sections: [
      { type: 'intro', content: 'When we\'re depressed, we often stop doing the things that give us pleasure or a sense of achievement. This list can help you rediscover activities to try.' },
      {
        type: 'text',
        title: 'Two types of activities',
        content: 'Mastery activities give you a sense of accomplishment (even small ones count). Pleasure activities are enjoyable, even if briefly. Both matter for lifting mood.',
      },
      {
        type: 'checklist',
        title: 'Social connection',
        items: [
          'Text or call a friend',
          'Have coffee with someone',
          'Join a class or group',
          'Spend time with family',
          'Help someone with something',
        ],
      },
      {
        type: 'checklist',
        title: 'Physical activity',
        items: [
          'Go for a walk',
          'Stretch or do yoga',
          'Dance to music',
          'Garden or do outdoor work',
          'Play a sport',
        ],
      },
      {
        type: 'checklist',
        title: 'Creative & learning',
        items: [
          'Listen to music',
          'Read something enjoyable',
          'Watch a film or series',
          'Cook or bake something',
          'Learn something new online',
        ],
      },
      {
        type: 'checklist',
        title: 'Self-care & routine',
        items: [
          'Take a shower or bath',
          'Get dressed (even if staying home)',
          'Tidy one small area',
          'Eat a proper meal',
          'Go to bed at a regular time',
        ],
      },
      {
        type: 'worksheet',
        title: 'My activity plan',
        rows: [
          { label: 'Activities I used to enjoy but have stopped' },
          { label: 'Small activities I could try this week' },
          { label: 'One activity I\'ll commit to tomorrow' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ CFT RESOURCES ============
  cft_three_circles: {
    id: 'cft_three_circles',
    sections: [
      { type: 'intro', content: 'Compassion-Focused Therapy (CFT) is based on the idea that we have three main emotional systems. Understanding these systems helps us make sense of our feelings and develop more self-compassion.' },
      {
        type: 'text',
        title: 'The Threat System (Red)',
        content: 'This system evolved to detect and respond to danger. It generates emotions like anxiety, anger, and disgust. It\'s fast, powerful, and designed to keep us safe.\n\nWhen it\'s overactive: We feel constantly on edge, self-critical, and see threats everywhere.\n\nFeels like: Tense, alert, heart racing, on guard.',
      },
      {
        type: 'text',
        title: 'The Drive System (Blue)',
        content: 'This system motivates us to seek resources, achieve goals, and get things done. It generates excitement, anticipation, and the buzz of accomplishment.\n\nWhen it\'s overactive: We feel driven, never satisfied, exhausted from constant striving.\n\nFeels like: Energised, focused, wanting, pursuing.',
      },
      {
        type: 'text',
        title: 'The Soothing System (Green)',
        content: 'This system evolved for rest, connection, and safety. It generates feelings of calm, contentment, and being at peace. It\'s linked to attachment and compassion.\n\nWhen it\'s underactive: We struggle to feel safe, can\'t relax, lack self-compassion.\n\nFeels like: Calm, content, connected, peaceful.',
      },
      {
        type: 'text',
        title: 'The key insight',
        content: 'Many people who struggle with self-criticism have an overactive threat system and an underdeveloped soothing system. They can motivate themselves with fear and criticism, but can\'t comfort themselves when things go wrong.\n\nCFT helps strengthen the soothing system so it can better regulate the threat system.',
      },
      {
        type: 'worksheet',
        title: 'My three systems',
        rows: [
          { label: 'How active is my threat system? (0-10)', value: 'What triggers it?' },
          { label: 'How active is my drive system? (0-10)', value: 'What keeps it going?' },
          { label: 'How active is my soothing system? (0-10)', value: 'What blocks it?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cft_self_compassion: {
    id: 'cft_self_compassion',
    sections: [
      { type: 'intro', content: 'The compassionate self is a way of being that combines wisdom, strength, warmth, and a commitment to help yourself and others with suffering. Practising being your compassionate self helps strengthen the soothing system.' },
      {
        type: 'text',
        title: 'Qualities of the compassionate self',
        content: 'Imagine the ideal compassionate person — someone with:\n\n• Wisdom — understanding that life is difficult and we all struggle\n• Strength — the courage to face pain rather than avoid it\n• Warmth — genuine care and kindness\n• Non-judgement — acceptance without criticism\n• Commitment — a genuine desire to help',
      },
      {
        type: 'text',
        title: 'Compassionate Self Exercise',
        content: '1. Find a comfortable position. Slow your breathing.\n\n2. Allow your body to take on a compassionate posture — perhaps a gentle expression, relaxed shoulders, open chest.\n\n3. Imagine your compassionate self. This is the version of you that embodies wisdom, strength, and warmth.\n\n4. From this compassionate self, look at the part of you that is struggling. What does that part need to hear?\n\n5. Speak to yourself as your compassionate self would.',
      },
      {
        type: 'tips',
        title: 'Using your compassionate self',
        items: [
          'When you notice self-criticism, pause and shift into your compassionate self',
          'Ask: "What would my compassionate self say right now?"',
          'Remember: this isn\'t about being soft or letting yourself off the hook',
          'Compassion includes the strength to face difficult things',
          'Practise regularly — this is like building a muscle',
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ SCHEMA THERAPY RESOURCES ============
  schema_modes_guide: {
    id: 'schema_modes_guide',
    sections: [
      { type: 'intro', content: 'Schema modes are the moment-to-moment emotional states we shift into. Unlike schemas (which are like traits), modes change rapidly. Recognising your modes helps you respond differently.' },
      {
        type: 'text',
        title: 'Child Modes',
        content: 'Vulnerable Child: Feels lonely, scared, sad, unloved — the hurt child inside.\nAngry Child: Feels furious, frustrated, impatient — reacts to unmet needs.\nImpulsive Child: Acts on desires without thinking about consequences.\nHappy Child: Feels loved, content, connected — needs are being met.',
      },
      {
        type: 'text',
        title: 'Parent Modes (internalised critical voices)',
        content: 'Punitive Parent: Harsh, critical, punishing. "You\'re worthless."\nDemanding Parent: Sets impossibly high standards. "You should be perfect."',
      },
      {
        type: 'text',
        title: 'Coping Modes',
        content: 'Compliant Surrenderer: Gives in, people-pleases, doesn\'t assert needs.\nDetached Protector: Shuts down emotions, disconnects, avoids.\nOvercompensator: Fights back, controls others, dominates.',
      },
      {
        type: 'text',
        title: 'Healthy Adult Mode',
        content: 'The goal of therapy: a balanced state that can meet needs, set boundaries, and regulate emotions. The Healthy Adult comforts the Vulnerable Child, stands up to the Punitive Parent, and makes wise choices.',
      },
      {
        type: 'worksheet',
        title: 'Tracking my modes',
        rows: [
          { label: 'What modes do I recognise in myself?' },
          { label: 'What triggers my Vulnerable Child?' },
          { label: 'What does my Punitive Parent say?' },
          { label: 'What coping modes do I use most?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  // ============ MBT RESOURCES ============
  mbt_mentalizing_intro: {
    id: 'mbt_mentalizing_intro',
    sections: [
      { type: 'intro', content: 'Mentalizing is the ability to understand behaviour — your own and others\' — in terms of underlying thoughts, feelings, and intentions. It\'s about seeing yourself from the outside and others from the inside.' },
      {
        type: 'text',
        title: 'What is mentalizing?',
        content: 'Every behaviour has something behind it — thoughts, feelings, wishes, fears. When we mentalize, we try to understand what\'s going on beneath the surface.\n\n"Why did I react like that?"\n"What might she be feeling right now?"\n"What was he thinking when he said that?"',
      },
      {
        type: 'text',
        title: 'When mentalizing breaks down',
        content: 'Under stress, mentalizing can go offline. We might:\n\n• Take things at face value without considering what\'s behind them\n• Assume we know exactly what others are thinking (usually negatively)\n• Lose touch with our own feelings and act impulsively\n• Over-analyse to the point of confusion',
      },
      {
        type: 'checklist',
        title: 'Signs of non-mentalizing',
        items: [
          'Black-and-white thinking ("They obviously hate me")',
          'Certainty about others\' motives without checking',
          'Acting on feelings without pausing to understand them',
          'Intense emotional reactions that feel uncontrollable',
          'Difficulty seeing others\' perspectives',
        ],
      },
      {
        type: 'tips',
        title: 'Practising mentalizing',
        items: [
          'Pause before reacting — ask "What\'s going on for me right now?"',
          'Be curious about others — "I wonder what\'s behind that?"',
          'Hold your interpretations lightly — you might be wrong',
          'Notice when you\'re making assumptions and check them out',
          'Accept that minds are opaque — we can never know for certain',
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },
};
