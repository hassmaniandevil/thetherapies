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
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
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
          { label: 'What actually happened?', value: 'Describe the outcome factually' },
          { label: 'What did I learn?', value: 'Was my prediction accurate?' },
          { label: 'How much do I believe the original thought now? (0-100%)' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cbt_relapse_prevention: {
    id: 'cbt_relapse_prevention',
    sections: [
      { type: 'intro', content: 'A relapse prevention plan helps you maintain progress and respond effectively if difficulties return.' },
      {
        type: 'worksheet',
        title: 'My Relapse Prevention Plan',
        rows: [
          { label: 'What I came to therapy for' },
          { label: 'What I\'ve learned about my patterns' },
          { label: 'Skills that have helped me most' },
          { label: 'My early warning signs' },
          { label: 'My triggers' },
          { label: 'What I will do if I notice warning signs' },
          { label: 'People I can reach out to' },
          { label: 'Professional support contacts' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cbt_child_ftb: {
    id: 'cbt_child_ftb',
    sections: [
      { type: 'intro', content: 'This worksheet helps children understand how their feelings, thoughts, and behaviours are all connected — like a chain!' },
      { type: 'text', title: 'The Chain', content: 'When something happens, we have THOUGHTS about it. Those thoughts make us have FEELINGS. And those feelings make us DO things (behaviours). Let\'s trace the chain!' },
      {
        type: 'worksheet',
        title: 'My Feelings-Thoughts-Behaviour Chain',
        rows: [
          { label: 'What happened?', value: 'Draw or write what happened' },
          { label: 'What did I think?', value: 'What went through my head?' },
          { label: 'How did I feel?', value: 'Happy, sad, scared, angry, worried?' },
          { label: 'What did I do?', value: 'What did my body do? What actions did I take?' },
        ],
      },
      { type: 'tips', title: 'Remember', items: [
        'All feelings are okay to have',
        'We can change our thoughts to feel better',
        'Ask a grown-up for help when feelings are too big',
      ]},
      { type: 'footer', content: 'This resource is for children aged 6-11. Use with adult support.' },
    ],
  },

  cbt_coping_cards: {
    id: 'cbt_coping_cards',
    sections: [
      { type: 'intro', content: 'Cut out these cards and keep them handy! Each card has a helpful thought or coping strategy you can use when you\'re feeling worried or upset.' },
      { type: 'text', title: 'Card 1: Take a Breath', content: 'When I feel worried, I can:\n• Breathe in slowly for 4 counts\n• Hold for 2 counts\n• Breathe out slowly for 6 counts\n• Repeat 3 times' },
      { type: 'text', title: 'Card 2: Talk Back to Worry', content: 'When Worry says something scary, I can ask:\n• Is this definitely true?\n• What would I tell a friend?\n• What\'s the most likely thing to happen?' },
      { type: 'text', title: 'Card 3: Be Brave', content: 'Feeling scared doesn\'t mean something bad will happen.\nI can do hard things even when I\'m scared.\nEvery time I try, I get braver!' },
      { type: 'text', title: 'Card 4: Get Help', content: 'It\'s okay to ask for help!\nPeople who can help me:\n(Write names here)' },
      { type: 'footer', content: 'This resource is for children. Print and cut out the cards.' },
    ],
  },

  cbt_teen_workbook: {
    id: 'cbt_teen_workbook',
    sections: [
      { type: 'intro', content: 'This workbook introduces the main ideas of CBT in a teen-friendly way. Work through it at your own pace.' },
      { type: 'text', title: 'The CBT Idea', content: 'CBT is based on one big idea: It\'s not what happens to you that decides how you feel — it\'s how you think about it.\n\nSame situation, different thoughts = different feelings.' },
      {
        type: 'worksheet',
        title: 'Catching Thoughts',
        rows: [
          { label: 'Situation', value: 'What happened?' },
          { label: 'Automatic thought', value: 'What popped into your head?' },
          { label: 'Feeling', value: 'How did that thought make you feel? (0-10)' },
          { label: 'Alternative thought', value: 'Is there another way to see this?' },
          { label: 'New feeling', value: 'How do you feel now? (0-10)' },
        ],
      },
      { type: 'tips', title: 'Common Thinking Traps', items: [
        'Mind-reading: Assuming you know what others think',
        'Fortune-telling: Predicting the worst will happen',
        'All-or-nothing: Seeing things as totally good or totally bad',
        'Should statements: Beating yourself up with "shoulds"',
      ]},
      { type: 'footer', content: 'This resource is for teenagers. Use alongside therapy.' },
    ],
  },

  cbt_parent_how_helps: {
    id: 'cbt_parent_how_helps',
    sections: [
      { type: 'intro', content: 'Your child is learning Cognitive Behavioural Therapy (CBT). This guide explains what CBT is and how you can support your child.' },
      { type: 'text', title: 'What is CBT?', content: 'CBT is a talking therapy that helps children understand the connection between their thoughts, feelings, and behaviours. It teaches practical skills for managing difficult emotions like anxiety, anger, or sadness.' },
      { type: 'text', title: 'What will my child learn?', content: '• To notice their thoughts and feelings\n• To recognise "thinking traps" (unhelpful thought patterns)\n• To test out whether their worries are realistic\n• To face fears gradually and safely\n• Coping strategies for difficult moments' },
      { type: 'tips', title: 'How you can help', items: [
        'Ask about what they\'re learning — show interest without pressure',
        'Help them practise skills at home (the therapist will guide you)',
        'Praise effort, not just outcomes',
        'Model healthy coping yourself — children learn by watching',
        'Avoid reassurance-seeking traps — help them use their skills instead',
      ]},
      { type: 'footer', content: 'This resource is for parents of children in CBT.' },
    ],
  },

  cbt_parent_support: {
    id: 'cbt_parent_support',
    sections: [
      { type: 'intro', content: 'Practical tips for supporting your child\'s CBT skills practice at home.' },
      { type: 'checklist', title: 'Daily support', items: [
        'Create a calm time to talk about feelings',
        'Use "I wonder" statements instead of questions',
        'Validate feelings before problem-solving',
        'Celebrate small steps of progress',
        'Keep homework tasks visible and scheduled',
      ]},
      { type: 'text', title: 'When your child is anxious', content: 'Instead of: "Don\'t worry, it\'ll be fine"\nTry: "I can see you\'re worried. What thought is your worry telling you? Let\'s think about whether that\'s likely."' },
      { type: 'footer', content: 'This resource is for parents of children in CBT.' },
    ],
  },

  cbt_parent_school: {
    id: 'cbt_parent_school',
    sections: [
      { type: 'intro', content: 'A template for communicating with your child\'s school about CBT-related support needs.' },
      { type: 'text', title: 'Sample letter', content: 'Dear [Teacher/SENCO],\n\n[Child\'s name] is currently receiving Cognitive Behavioural Therapy (CBT) for [anxiety/low mood/other]. I wanted to share some information about how this might affect them at school and how we can work together to support them.\n\n[Add specific needs and strategies discussed with therapist]\n\nPlease let me know if you would like to discuss this further or speak with the therapist directly.\n\nKind regards,\n[Your name]' },
      { type: 'footer', content: 'This is a template — adapt it to your child\'s needs.' },
    ],
  },

  cbt_pro_formulation: {
    id: 'cbt_pro_formulation',
    sections: [
      { type: 'intro', content: 'A structured template for developing CBT case formulations using the five areas model.' },
      {
        type: 'worksheet',
        title: 'CBT Formulation',
        rows: [
          { label: 'Presenting problems', value: 'Key difficulties and triggers' },
          { label: 'Predisposing factors', value: 'Early experiences, beliefs, vulnerabilities' },
          { label: 'Precipitating factors', value: 'What triggered the current episode?' },
          { label: 'Perpetuating factors', value: 'What maintains the problem? (Safety behaviours, avoidance, rumination)' },
          { label: 'Protective factors', value: 'Strengths, resources, support' },
          { label: 'Core beliefs', value: 'About self, others, world, future' },
          { label: 'Conditional assumptions', value: '"If... then..." rules' },
          { label: 'Negative automatic thoughts', value: 'Typical NATs in problem situations' },
        ],
      },
      { type: 'footer', content: 'For clinical use by trained CBT practitioners.' },
    ],
  },

  cbt_pro_session: {
    id: 'cbt_pro_session',
    sections: [
      { type: 'intro', content: 'A guide to structuring CBT sessions effectively.' },
      { type: 'checklist', title: 'Session structure', items: [
        'Mood check and brief update (5 mins)',
        'Bridge from last session (2 mins)',
        'Agenda setting — collaborative (3 mins)',
        'Homework review (10 mins)',
        'Main agenda items (25 mins)',
        'New homework setting — collaborative (5 mins)',
        'Session summary and feedback (5 mins)',
      ]},
      { type: 'tips', title: 'Key principles', items: [
        'Maintain collaborative empiricism throughout',
        'Use guided discovery rather than lecturing',
        'Capsule summaries to check understanding',
        'Elicit feedback at the end of each session',
      ]},
      { type: 'footer', content: 'For clinical use by trained CBT practitioners.' },
    ],
  },

  cbt_pro_outcomes: {
    id: 'cbt_pro_outcomes',
    sections: [
      { type: 'intro', content: 'Overview of commonly used outcome measures in CBT practice.' },
      { type: 'text', title: 'Depression', content: 'PHQ-9: 9-item self-report. Scores: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.\n\nBDI-II: 21-item self-report. Scores: 0-13 minimal, 14-19 mild, 20-28 moderate, 29-63 severe.' },
      { type: 'text', title: 'Anxiety', content: 'GAD-7: 7-item self-report for generalised anxiety. Scores: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe.' },
      { type: 'text', title: 'General', content: 'WSAS: Work and Social Adjustment Scale — functional impairment.\n\nCORE-OM: 34-item general measure of psychological distress.' },
      { type: 'footer', content: 'For clinical use by trained practitioners.' },
    ],
  },

  // ============ CAT RESOURCES (COMPLETE) ============
  cat_understanding_patterns: {
    id: 'cat_understanding_patterns',
    sections: [
      { type: 'intro', content: 'In Cognitive Analytic Therapy (CAT), we understand difficulties as "patterns" — repeating ways of thinking, feeling, and relating that developed early in life. Recognising these patterns is the first step to changing them.' },
      { type: 'text', title: 'Why patterns develop', content: 'As children, we cope with difficult situations by developing strategies to manage them. These strategies help us survive emotionally. However, if we continue using them even when they\'re no longer needed, they can cause problems in adult life.' },
      { type: 'text', title: 'Traps', content: 'A trap is a vicious circle where what you do to cope actually makes the problem worse.\n\nExample: You feel unconfident → You avoid speaking up → You don\'t get practice → You feel more unconfident.' },
      { type: 'text', title: 'Dilemmas', content: 'A dilemma is when you feel stuck between two options, both of which seem bad.\n\nExample: "Either I put others first and lose myself, or I put myself first and end up alone."' },
      { type: 'text', title: 'Snags', content: 'A snag is when you make progress but then something blocks you or pulls you back.\n\nExample: You start doing well → You feel guilty about surpassing a parent who struggled → You sabotage your success.' },
      {
        type: 'worksheet',
        title: 'Identifying my patterns',
        rows: [
          { label: 'A trap I recognise in myself' },
          { label: 'A dilemma I face' },
          { label: 'A snag I\'ve noticed' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_reciprocal_roles_explainer: {
    id: 'cat_reciprocal_roles_explainer',
    sections: [
      { type: 'intro', content: 'Reciprocal roles are the relationship patterns we learn early in life and carry into our current relationships. They\'re like templates for how we relate to others — and to ourselves.' },
      { type: 'text', title: 'What are reciprocal roles?', content: 'Every relationship involves two positions that go together. If someone is critical, someone else is being criticised. If someone is caring, someone else is being cared for.\n\nAs children, we learn both sides of these relationships.' },
      {
        type: 'example',
        title: 'Example',
        content: 'A child whose parents were often critical may develop a "Criticising → Criticised" reciprocal role.\n\nAs an adult, they might:\n• Criticise themselves harshly\n• Expect others to criticise them\n• Become critical of others\n• Seek out relationships with critical people',
      },
      {
        type: 'worksheet',
        title: 'Exploring my reciprocal roles',
        rows: [
          { label: 'How did important people treat me growing up?' },
          { label: 'How do I treat myself now?' },
          { label: 'What patterns do I notice in my relationships?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_what_to_expect: {
    id: 'cat_what_to_expect',
    sections: [
      { type: 'intro', content: 'Cognitive Analytic Therapy (CAT) is a collaborative, time-limited therapy typically lasting 16-24 sessions. Here\'s what to expect in each phase.' },
      { type: 'text', title: 'Phase 1: Reformulation (Sessions 1-4)', content: 'You and your therapist work together to understand your difficulties.\n\n• Complete the "Psychotherapy File"\n• Explore early experiences\n• Identify key patterns (traps, dilemmas, snags)\n• Receive a reformulation letter\n• Create a diagram (SDR) mapping your patterns' },
      { type: 'text', title: 'Phase 2: Recognition (Sessions 5-12)', content: 'Build awareness of your patterns as they happen.\n\n• Practise "pattern-spotting"\n• Keep a diary to track patterns\n• Notice patterns in the therapy relationship\n• Develop an "observing eye"' },
      { type: 'text', title: 'Phase 3: Revision (Sessions 13-16/24)', content: 'Change patterns and prepare for ending.\n\n• Identify and practise "exits" — new ways of responding\n• Focus on ending and what it brings up\n• Write "goodbye letters" to each other\n• Follow-up sessions to maintain progress' },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_ending_transition: {
    id: 'cat_ending_transition',
    sections: [
      { type: 'intro', content: 'Endings are an important part of CAT. This reflective tool helps you prepare for ending therapy and consolidate what you\'ve learned.' },
      {
        type: 'worksheet',
        title: 'Ending and Transition Plan',
        rows: [
          { label: 'What I came to therapy with' },
          { label: 'What I\'ve learned about my patterns' },
          { label: 'Changes I\'ve noticed' },
          { label: 'Exits I\'ve been practising' },
          { label: 'What\'s still difficult' },
          { label: 'How I\'ll keep working on my patterns' },
          { label: 'What the ending brings up for me' },
          { label: 'What I want to remember from therapy' },
        ],
      },
      { type: 'text', title: 'After therapy ends', content: 'Keep your diagram and letters somewhere you can return to them. Use them when you notice old patterns. Remember: the skills you\'ve learned are yours to keep.' },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_self_monitoring: {
    id: 'cat_self_monitoring',
    sections: [
      { type: 'intro', content: 'This diary helps you track when patterns are triggered, how you recognised them, and what alternative responses (exits) you tried.' },
      {
        type: 'table',
        title: 'Pattern Recognition Diary',
        columns: ['Date', 'Situation', 'Pattern I noticed', 'Position on diagram', 'Exit I tried', 'What happened'],
        tableRows: [
          ['', '', '', '', '', ''],
          ['', '', '', '', '', ''],
          ['', '', '', '', '', ''],
          ['', '', '', '', '', ''],
          ['', '', '', '', '', ''],
        ],
      },
      { type: 'tips', title: 'Using the diary', items: [
        'Fill it in as soon as possible after noticing a pattern',
        'Reference your diagram to identify where you were',
        'Even small exits count — note them',
        'Bring the diary to sessions to discuss',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_tds_worksheet: {
    id: 'cat_tds_worksheet',
    sections: [
      { type: 'intro', content: 'This worksheet helps you identify which traps, dilemmas, and snags might apply to your patterns.' },
      { type: 'checklist', title: 'Common Traps', items: [
        'The Fear Trap: I avoid things I\'m anxious about → I don\'t learn I could cope → I stay anxious',
        'The Depressing Thinking Trap: I think negatively → I feel low → I don\'t do things → I think more negatively',
        'The Social Isolation Trap: I feel different → I avoid people → I get more isolated',
        'The Trying Too Hard Trap: I try to be perfect → I exhaust myself → I fail → I try even harder',
        'The Low Self-Esteem Trap: I feel bad about myself → I don\'t assert myself → Others treat me badly',
      ]},
      { type: 'checklist', title: 'Common Dilemmas', items: [
        'Either I keep feelings bottled up OR I let go and get out of control',
        'Either I put others first OR I put myself first and end up alone',
        'Either I\'m close to someone and feel suffocated OR I\'m distant and feel lonely',
        'Either I\'m in control of everything OR everything is chaotic',
      ]},
      { type: 'checklist', title: 'Common Snags', items: [
        'When things start to go well, I find ways to sabotage them',
        'I feel guilty about being happier than others in my family',
        'I can\'t accept good things because I don\'t feel I deserve them',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  cat_child_pattern_spotting: {
    id: 'cat_child_pattern_spotting',
    sections: [
      { type: 'intro', content: 'This worksheet helps you notice patterns in your feelings and how you act. It\'s like being a detective looking for clues!' },
      { type: 'text', title: 'What is a pattern?', content: 'A pattern is something that happens again and again. Like when you always feel sad when something doesn\'t go the way you wanted, or when you always go quiet when you\'re angry.' },
      {
        type: 'worksheet',
        title: 'My Pattern Detective Sheet',
        rows: [
          { label: 'What happened?', value: 'Draw or write it' },
          { label: 'How did I feel?', value: 'Circle: Happy / Sad / Angry / Scared / Worried' },
          { label: 'What did I do?', value: '' },
          { label: 'Has this happened before?', value: 'Yes / No' },
          { label: 'What pattern might this be?', value: '' },
        ],
      },
      { type: 'footer', content: 'This resource is for children. Use with adult support.' },
    ],
  },

  cat_child_relationship_map: {
    id: 'cat_child_relationship_map',
    sections: [
      { type: 'intro', content: 'Draw a map of the important people in your life and think about how you feel with each of them.' },
      { type: 'text', title: 'Instructions', content: '1. Put yourself in the middle of the page\n2. Draw the important people around you\n3. Draw lines to connect you to them\n4. For each person, write:\n   - How they make you feel\n   - How you act when you\'re with them' },
      {
        type: 'worksheet',
        title: 'Thinking about my relationships',
        rows: [
          { label: 'Who makes me feel safe?' },
          { label: 'Who do I sometimes find tricky?' },
          { label: 'Are there patterns in how I am with different people?' },
        ],
      },
      { type: 'footer', content: 'This resource is for children. Use with adult support.' },
    ],
  },

  cat_teen_my_patterns: {
    id: 'cat_teen_my_patterns',
    sections: [
      { type: 'intro', content: 'CAT is about understanding the patterns in how we think, feel, and relate to others. These patterns often started when we were young but can cause problems now.' },
      { type: 'text', title: 'Why do patterns develop?', content: 'When we\'re growing up, we develop ways of coping with difficult stuff. These coping strategies make total sense at the time. But sometimes we keep using them even when they don\'t help anymore — like they\'re stuck on repeat.' },
      { type: 'text', title: 'Reciprocal Roles', content: 'These are the relationship patterns we learned early on. Like, if you had a parent who was super critical, you might:\n• Be hard on yourself\n• Expect others to criticise you\n• Become critical of others\n• Or all of the above' },
      {
        type: 'worksheet',
        title: 'Exploring my patterns',
        rows: [
          { label: 'What patterns do I notice in my relationships?' },
          { label: 'What patterns do I notice in how I treat myself?' },
          { label: 'Where might these have come from?' },
          { label: 'What would I like to be different?' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers. Use alongside therapy.' },
    ],
  },

  cat_parent_relational_cycles: {
    id: 'cat_parent_relational_cycles',
    sections: [
      { type: 'intro', content: 'CAT understands difficulties as patterns that develop in relationships. This guide helps parents understand these relational cycles.' },
      { type: 'text', title: 'Reciprocal roles', content: 'In CAT, we think about relationships as having two positions that go together. For example:\n• Controlling → Controlled\n• Neglecting → Neglected\n• Critical → Criticised\n\nYour child has learned certain patterns from their experiences. Understanding these can help you respond differently.' },
      { type: 'text', title: 'Breaking cycles', content: 'Sometimes family dynamics can accidentally reinforce unhelpful patterns. For example, if your child expects rejection, they might behave in ways that provoke it, which then confirms their belief. Understanding this can help you respond in ways that offer a different experience.' },
      { type: 'tips', title: 'How to help', items: [
        'Notice when patterns are playing out',
        'Try to respond differently than the pattern "expects"',
        'Talk about patterns rather than acting them out',
        'Ask your child\'s therapist for guidance',
      ]},
      { type: 'footer', content: 'This resource is for parents of young people in CAT.' },
    ],
  },

  cat_parent_supporting_change: {
    id: 'cat_parent_supporting_change',
    sections: [
      { type: 'intro', content: 'Practical guidance for supporting your child\'s CAT therapy without accidentally reinforcing unhelpful patterns.' },
      { type: 'text', title: 'Understanding patterns at home', content: 'Your child is learning to recognise their patterns. You can help by:\n• Noticing when patterns seem to be happening\n• Naming them gently: "I wonder if this is that pattern we talked about?"\n• Not taking it personally when patterns get triggered\n• Celebrating when they try something different' },
      { type: 'text', title: 'The therapy relationship', content: 'CAT therapists pay attention to patterns that show up in the therapy relationship itself. This is a feature, not a bug — it helps your child see their patterns in action.' },
      { type: 'tips', title: 'Avoiding common pitfalls', items: [
        'Don\'t try to be the therapist — you\'re the parent',
        'Don\'t use therapy language to criticise: "That\'s your pattern again"',
        'Do ask the therapist how you can help',
        'Do be patient — patterns don\'t change overnight',
      ]},
      { type: 'footer', content: 'This resource is for parents of young people in CAT.' },
    ],
  },

  cat_pro_sdr_template: {
    id: 'cat_pro_sdr_template',
    sections: [
      { type: 'intro', content: 'A template for creating Sequential Diagrammatic Reformulations (SDRs) with guidance notes.' },
      { type: 'text', title: 'Core components', content: 'Reciprocal Roles: Place at the centre. Show both poles (e.g., Criticising → Criticised). Use arrows to show direction.\n\nProcedures: Draw as loops coming out from and returning to the core. Label each trap, dilemma, or snag.\n\nExits: Mark potential exits with a different colour or symbol. These are the alternatives to the procedural loops.\n\nObserving Eye: Draw this position to represent the reflective stance being developed.' },
      { type: 'tips', title: 'Diagram construction tips', items: [
        'Build collaboratively with the client',
        'Use the client\'s own words wherever possible',
        'Start simple — complexity can be added over time',
        'Ensure the client can describe it back to you',
        'Make copies so the client can annotate their own',
      ]},
      { type: 'footer', content: 'For clinical use by CAT practitioners.' },
    ],
  },

  cat_pro_reformulation_guide: {
    id: 'cat_pro_reformulation_guide',
    sections: [
      { type: 'intro', content: 'Guidance on writing reformulation letters, including structure, pacing, and collaborative language.' },
      { type: 'text', title: 'Letter structure', content: '1. Opening: Acknowledge the work done together so far\n2. Presenting problems: What brought them to therapy\n3. Life story: Key events and relationships that shaped patterns\n4. Patterns identified: Traps, dilemmas, snags, reciprocal roles\n5. How patterns play out now: Current manifestations\n6. The therapy relationship: How patterns might show up in the work\n7. Looking ahead: Hope for change, the work to come' },
      { type: 'tips', title: 'Writing principles', items: [
        'Write in the first person plural where appropriate ("we have understood...")',
        'Use the client\'s own words and phrases',
        'Balance honesty with compassion',
        'Avoid jargon — keep language accessible',
        'Read it aloud before the session to check tone',
        'Allow time for the client to respond and revise',
      ]},
      { type: 'footer', content: 'For clinical use by CAT practitioners.' },
    ],
  },

  cat_pro_recognition_revision: {
    id: 'cat_pro_recognition_revision',
    sections: [
      { type: 'intro', content: 'A checklist for tracking recognition and revision work across sessions.' },
      { type: 'checklist', title: 'Recognition work', items: [
        'Client can identify core reciprocal roles',
        'Client can describe traps, dilemmas, and snags',
        'Client spots patterns between sessions',
        'Client notices patterns in therapy relationship',
        'Client uses diagram as reference point',
        'Client develops "observing eye" position',
      ]},
      { type: 'checklist', title: 'Revision work', items: [
        'Exits identified on diagram',
        'Client experiments with exits outside sessions',
        'Client practises exits in therapy relationship',
        'Alternative reciprocal roles developing',
        'Compassionate self-to-self relating emerging',
        'Ending addressed explicitly',
      ]},
      { type: 'footer', content: 'For clinical use by CAT practitioners.' },
    ],
  },

  cat_pro_goodbye_letter_guide: {
    id: 'cat_pro_goodbye_letter_guide',
    sections: [
      { type: 'intro', content: 'Guidance on writing and exchanging goodbye letters, managing endings, and addressing attachment themes.' },
      { type: 'text', title: 'Purpose of goodbye letters', content: 'Goodbye letters mark the ending of therapy explicitly. They:\n• Summarise what has been achieved\n• Name what remains difficult\n• Address the ending itself and what it evokes\n• Provide something concrete to take away' },
      { type: 'text', title: 'Therapist letter elements', content: '• Acknowledge the work done together\n• Note changes you have observed\n• Be honest about what remains to be done\n• Address how the ending might connect to patterns\n• Express genuine goodbye' },
      { type: 'tips', title: 'Managing the exchange', items: [
        'Read letters aloud in the final session',
        'Client reads theirs first, then therapist',
        'Allow time for emotional response',
        'Connect any reactions to patterns on the diagram',
        'Ensure copies are available to take away',
      ]},
      { type: 'footer', content: 'For clinical use by CAT practitioners.' },
    ],
  },

  cat_pro_contextual_cat: {
    id: 'cat_pro_contextual_cat',
    sections: [
      { type: 'intro', content: 'An introduction to using CAT ideas in teams and organisational contexts.' },
      { type: 'text', title: 'Contextual CAT', content: 'CAT ideas can be applied beyond individual therapy to understand relational dynamics in teams and services. Key applications:\n\n• Understanding staff-patient dynamics\n• Mapping team reciprocal roles\n• Recognising organisational patterns\n• Improving reflective practice' },
      { type: 'text', title: 'Team dynamics', content: 'Just as individuals have reciprocal roles, teams can develop patterns in how they relate to each other and to clients. For example:\n\n• Rescuing → Rescued\n• Blaming → Blamed\n• Idealising → Idealised' },
      { type: 'tips', title: 'Using CAT in teams', items: [
        'Create team formulations for complex patients',
        'Use SDRs in case discussions',
        'Notice when team dynamics mirror patient patterns',
        'Facilitate reflective practice using CAT language',
      ]},
      { type: 'footer', content: 'For clinical use by CAT practitioners.' },
    ],
  },

  // ============ DBT RESOURCES ============
  dbt_skills_summary: {
    id: 'dbt_skills_summary',
    sections: [
      { type: 'intro', content: 'DBT teaches four sets of skills for managing emotions and relationships.' },
      { type: 'text', title: 'Core Mindfulness', content: 'Being present without judgement.\n• Observe: Notice without getting caught up\n• Describe: Put words to experiences\n• Participate: Throw yourself fully into the moment' },
      { type: 'text', title: 'Distress Tolerance', content: 'Getting through crisis moments without making things worse.\n• TIPP: Temperature, Intense exercise, Paced breathing, Paired muscle relaxation\n• ACCEPTS: Distraction skills\n• Radical Acceptance: Accepting reality as it is' },
      { type: 'text', title: 'Emotion Regulation', content: 'Understanding and managing emotions.\n• ABC PLEASE: Reduce vulnerability\n• Check the Facts\n• Opposite Action' },
      { type: 'text', title: 'Interpersonal Effectiveness', content: 'Getting what you need while keeping relationships.\n• DEAR MAN: Getting what you want\n• GIVE: Maintaining relationships\n• FAST: Maintaining self-respect' },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  dbt_crisis_plan: {
    id: 'dbt_crisis_plan',
    sections: [
      { type: 'intro', content: 'This plan helps you get through crisis moments safely using DBT skills.' },
      {
        type: 'worksheet',
        title: 'My Crisis Survival Plan',
        rows: [
          { label: 'Early warning signs' },
          { label: 'My triggers' },
          { label: 'TIPP skills I\'ll use' },
          { label: 'Distractions that work for me' },
          { label: 'Self-soothing that helps' },
          { label: 'My reasons for living' },
          { label: 'People I can contact' },
          { label: 'Professional support' },
        ],
      },
      { type: 'text', title: 'Remember', content: 'Urges are temporary. You don\'t have to act on them. The crisis will pass.' },
      { type: 'footer', content: 'If you are at immediate risk, contact emergency services.' },
    ],
  },

  dbt_teen_skills: {
    id: 'dbt_teen_skills',
    sections: [
      { type: 'intro', content: 'DBT skills for teens — practical tools for managing intense emotions.' },
      { type: 'text', title: 'When emotions feel overwhelming', content: 'TIPP works fast:\n• Temperature — Hold ice, cold water on face\n• Intense exercise — Even 10 minutes helps\n• Paced breathing — Breathe out longer than in\n• Paired muscle relaxation — Tense then release' },
      { type: 'text', title: 'STOP skill', content: 'When you\'re about to react:\n• Stop — Don\'t act immediately\n• Take a step back — Give yourself space\n• Observe — What\'s happening? What are you feeling?\n• Proceed mindfully — Choose what to do next' },
      { type: 'footer', content: 'This resource is for teenagers. Use alongside therapy.' },
    ],
  },

  dbt_parent_validation: {
    id: 'dbt_parent_validation',
    sections: [
      { type: 'intro', content: 'Validation means communicating that someone\'s feelings make sense. It\'s one of the most powerful things parents can do.' },
      { type: 'text', title: 'Why validation matters', content: 'When someone is distressed and we jump to problem-solving or minimising, they often escalate. Validation calms the emotional brain. It doesn\'t mean agreeing — it means acknowledging their experience.' },
      { type: 'checklist', title: 'Six levels of validation', items: [
        'Pay attention — Be present',
        'Reflect back — "It sounds like you\'re frustrated"',
        'Read minds (carefully) — "I imagine that was scary"',
        'Validate based on history — "Given what happened before, that makes sense"',
        'Validate based on the present — "Anyone would feel that way"',
        'Radical genuineness — Treat them as capable',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  dbt_pro_diary: {
    id: 'dbt_pro_diary',
    sections: [
      { type: 'intro', content: 'A template diary card for tracking target behaviours, urges, emotions, and skills use.' },
      { type: 'text', title: 'Diary card components', content: 'Daily tracking of:\n• Target behaviours (e.g., self-harm, substance use)\n• Urges (0-5 scale)\n• Emotions (0-5 scale)\n• Skills used\n• Notes for therapist' },
      { type: 'tips', title: 'Clinical use', items: [
        'Review at the start of each individual session',
        'Target hierarchy guides focus',
        'Use for chain and solution analysis',
        'Adapt format to client needs',
      ]},
      { type: 'footer', content: 'For clinical use by DBT practitioners.' },
    ],
  },

  dbt_pro_coaching: {
    id: 'dbt_pro_coaching',
    sections: [
      { type: 'intro', content: 'A guide for delivering between-session telephone coaching in DBT.' },
      { type: 'text', title: 'Purpose of phone coaching', content: 'Phone coaching helps clients:\n• Generalise skills to daily life\n• Get support in the moment of difficulty\n• Repair therapeutic relationship if needed' },
      { type: 'checklist', title: 'Coaching structure', items: [
        'Assess immediate safety',
        'Identify the problem briefly',
        'Identify skills that might help',
        'Coach application of skills',
        'Reinforce skills use',
        'End the call',
      ]},
      { type: 'tips', title: 'Boundaries', items: [
        'Keep calls brief (5-10 minutes)',
        '24-hour rule after self-harm',
        'Not for therapy — focus on skills',
        'Set clear expectations about availability',
      ]},
      { type: 'footer', content: 'For clinical use by DBT practitioners.' },
    ],
  },

  // ============ ACT RESOURCES ============
  act_values: {
    id: 'act_values',
    sections: [
      { type: 'intro', content: 'Values are like a compass — they give direction to your life. Unlike goals, values can\'t be achieved — they\'re ongoing qualities of action.' },
      {
        type: 'worksheet',
        title: 'Values exploration',
        rows: [
          { label: 'Relationships', value: 'What kind of person do I want to be in my relationships?' },
          { label: 'Work/Education', value: 'What do I want to stand for in my working life?' },
          { label: 'Personal growth', value: 'How do I want to develop and grow?' },
          { label: 'Leisure', value: 'What matters to me in how I spend my time?' },
          { label: 'Community', value: 'What contribution matters to me?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  act_defusion: {
    id: 'act_defusion',
    sections: [
      { type: 'intro', content: 'Defusion means changing your relationship with thoughts — not changing the thoughts themselves.' },
      { type: 'checklist', title: 'Defusion exercises', items: [
        '"I\'m having the thought that..."',
        '"My mind is telling me..."',
        'Say it in a silly voice',
        'Sing it to "Happy Birthday"',
        'Thank your mind for that thought',
        'Name the story: "Ah, the not good enough story"',
      ]},
      { type: 'text', title: 'When to use defusion', content: 'Use defusion when a thought is unhelpful and you keep getting stuck on it, or when a thought is leading you away from your values.' },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  act_acceptance: {
    id: 'act_acceptance',
    sections: [
      { type: 'intro', content: 'Acceptance means making room for difficult feelings rather than fighting them.' },
      { type: 'text', title: 'What acceptance is NOT', content: '• It\'s not giving up\n• It\'s not liking or wanting the feeling\n• It\'s not resignation\n• It\'s not approving of a situation' },
      { type: 'text', title: 'What acceptance IS', content: '• Making space for feelings\n• Allowing them to be there without struggling\n• Dropping the rope in the tug-of-war\n• Freeing up energy for what matters' },
      { type: 'footer', content: 'This resource is for educational purposes and is not a substitute for professional support.' },
    ],
  },

  act_child_mindfulness: {
    id: 'act_child_mindfulness',
    sections: [
      { type: 'intro', content: 'Mindfulness means paying attention to right now, on purpose, without judging. Here are some fun ways to practice!' },
      { type: 'text', title: 'The 5 Senses Game', content: 'Notice:\n• 5 things you can SEE\n• 4 things you can TOUCH\n• 3 things you can HEAR\n• 2 things you can SMELL\n• 1 thing you can TASTE' },
      { type: 'text', title: 'Balloon Breathing', content: 'Imagine your tummy is a balloon.\nBreathe in and make it big.\nBreathe out and let it go flat.\nDo this 5 times!' },
      { type: 'footer', content: 'This resource is for children. Use with adult support.' },
    ],
  },

  act_teen_values: {
    id: 'act_teen_values',
    sections: [
      { type: 'intro', content: 'Values are what matter to you — the kind of person you want to be.' },
      {
        type: 'worksheet',
        title: 'What matters to me?',
        rows: [
          { label: 'Friends', value: 'What kind of friend do I want to be?' },
          { label: 'Family', value: 'What matters to me about family?' },
          { label: 'School/Work', value: 'What do I want to stand for?' },
          { label: 'Fun/Creativity', value: 'What brings me alive?' },
          { label: 'Health', value: 'How do I want to treat myself?' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  act_parent_values: {
    id: 'act_parent_values',
    sections: [
      { type: 'intro', content: 'ACT helps young people connect with their values and take action based on what matters. Here\'s how you can support this.' },
      { type: 'tips', title: 'Supporting values-based action', items: [
        'Ask about their values with curiosity, not judgement',
        'Share your own values (without imposing them)',
        'Notice when they act on their values and name it',
        'Help them see that difficult feelings don\'t have to stop them',
      ]},
      { type: 'footer', content: 'This resource is for parents of young people in ACT.' },
    ],
  },

  act_pro_hexaflex: {
    id: 'act_pro_hexaflex',
    sections: [
      { type: 'intro', content: 'The Hexaflex represents six interrelated processes that together constitute psychological flexibility.' },
      { type: 'text', title: 'The six processes', content: 'Mindfulness & Acceptance:\n• Acceptance — embracing private events\n• Defusion — changing relationship with thoughts\n• Present moment — flexible attention to now\n• Self-as-context — stable sense of self\n\nCommitment & Behaviour Change:\n• Values — chosen life directions\n• Committed action — values-consistent behaviour' },
      { type: 'tips', title: 'Clinical application', items: [
        'Use the hexaflex for case conceptualisation',
        'Identify which processes are most stuck',
        'Any technique that serves these processes is ACT-consistent',
        'Process > technique',
      ]},
      { type: 'footer', content: 'For clinical use by ACT practitioners.' },
    ],
  },

  // ============ BA RESOURCES ============
  ba_tracker: {
    id: 'ba_tracker',
    sections: [
      { type: 'intro', content: 'Track your activities and mood to see the connection between what you do and how you feel.' },
      {
        type: 'table',
        title: 'Activity Diary',
        columns: ['Time', 'Activity', 'Mood (0-10)'],
        tableRows: [
          ['Morning', '', ''],
          ['Afternoon', '', ''],
          ['Evening', '', ''],
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ba_planner: {
    id: 'ba_planner',
    sections: [
      { type: 'intro', content: 'Plan activities that give you a sense of pleasure or achievement.' },
      {
        type: 'worksheet',
        title: 'Weekly Activity Plan',
        rows: [
          { label: 'Mastery activities', value: 'Things that give a sense of achievement' },
          { label: 'Pleasure activities', value: 'Things that are enjoyable' },
          { label: 'One thing I\'ll do tomorrow' },
          { label: 'Barriers I might face' },
          { label: 'How I\'ll overcome them' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ba_values: {
    id: 'ba_values',
    sections: [
      { type: 'intro', content: 'Understanding your values helps you choose activities that are meaningful to you.' },
      {
        type: 'worksheet',
        title: 'Values and Activities',
        rows: [
          { label: 'What matters to me most?' },
          { label: 'Activities that connect with my values' },
          { label: 'Activities I\'ve stopped doing' },
          { label: 'One values-based activity to try this week' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ba_energy_ladder: {
    id: 'ba_energy_ladder',
    sections: [
      { type: 'intro', content: 'When motivation is low, start with the smallest possible step and build up.' },
      { type: 'text', title: 'The Energy Ladder', content: 'When you\'re depressed, everything takes more energy. Break activities into tiny steps.\n\nExample for "go for a walk":\n1. Put on shoes\n2. Stand at the door\n3. Walk to the end of the path\n4. Walk around the block\n5. Walk for 15 minutes' },
      {
        type: 'worksheet',
        title: 'My Energy Ladder',
        rows: [
          { label: 'Activity I want to do' },
          { label: 'Step 1 (tiniest step)' },
          { label: 'Step 2' },
          { label: 'Step 3' },
          { label: 'Step 4' },
          { label: 'Step 5 (full activity)' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ba_teen_workbook: {
    id: 'ba_teen_workbook',
    sections: [
      { type: 'intro', content: 'When you\'re feeling low, it\'s hard to do stuff. But doing stuff actually helps you feel better. This workbook helps you break the cycle.' },
      { type: 'text', title: 'The depression trap', content: 'Feel low → Do less → Feel worse → Do even less\n\nBA helps you break this cycle by gradually increasing activity, even when you don\'t feel like it.' },
      {
        type: 'worksheet',
        title: 'Activity planning',
        rows: [
          { label: 'Things I used to enjoy but have stopped doing' },
          { label: 'Small activities I could try' },
          { label: 'What gets in the way?' },
          { label: 'One thing I\'ll try this week' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  ba_parent_encourage: {
    id: 'ba_parent_encourage',
    sections: [
      { type: 'intro', content: 'Supporting your child to be more active when they\'re depressed.' },
      { type: 'tips', title: 'How to help', items: [
        'Encourage gently, don\'t push too hard',
        'Do activities together',
        'Break things into small, achievable steps',
        'Praise effort, not outcome',
        'Model being active yourself',
      ]},
      { type: 'text', title: 'What to avoid', content: '• "Just get out of bed"\n• "You\'d feel better if you just..."\n• Taking over and doing everything for them\n• Expecting too much too soon' },
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  ba_pro_formulation: {
    id: 'ba_pro_formulation',
    sections: [
      { type: 'intro', content: 'A template for BA case formulation.' },
      {
        type: 'worksheet',
        title: 'BA Formulation',
        rows: [
          { label: 'Presenting difficulties' },
          { label: 'Behavioural patterns maintaining depression' },
          { label: 'Avoidance patterns' },
          { label: 'Activities dropped or reduced' },
          { label: 'Values and meaningful activities' },
          { label: 'Target behaviours for activation' },
        ],
      },
      { type: 'footer', content: 'For clinical use by trained practitioners.' },
    ],
  },

  ba_pro_session: {
    id: 'ba_pro_session',
    sections: [
      { type: 'intro', content: 'Session structure for Behavioural Activation.' },
      { type: 'checklist', title: 'Session components', items: [
        'Review activity monitoring',
        'Analyse patterns (activity-mood relationship)',
        'Problem-solve barriers',
        'Plan activities for next week',
        'Graded task assignment as needed',
        'Assign monitoring homework',
      ]},
      { type: 'footer', content: 'For clinical use by trained practitioners.' },
    ],
  },

  // ============ CFT RESOURCES ============
  cft_systems: {
    id: 'cft_systems',
    sections: [
      { type: 'intro', content: 'CFT is based on the idea that we have three main emotional systems.' },
      { type: 'text', title: 'Threat System (Red)', content: 'Detects and responds to danger. Emotions: anxiety, anger, disgust.\nWhen overactive: constantly on edge, self-critical.' },
      { type: 'text', title: 'Drive System (Blue)', content: 'Motivates seeking and achieving. Emotions: excitement, anticipation.\nWhen overactive: driven, never satisfied.' },
      { type: 'text', title: 'Soothing System (Green)', content: 'Rest, connection, safety. Emotions: calm, contentment.\nWhen underactive: can\'t relax, lack self-compassion.' },
      {
        type: 'worksheet',
        title: 'My three systems',
        rows: [
          { label: 'Threat system (0-10)' },
          { label: 'Drive system (0-10)' },
          { label: 'Soothing system (0-10)' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  cft_criticism: {
    id: 'cft_criticism',
    sections: [
      { type: 'intro', content: 'Self-criticism keeps the threat system activated. Learning to be compassionate with yourself can help.' },
      { type: 'text', title: 'Recognising self-criticism', content: 'Notice the tone of your inner voice. Is it harsh, judgmental, attacking? What would you say to a friend in the same situation?' },
      {
        type: 'worksheet',
        title: 'From criticism to compassion',
        rows: [
          { label: 'What my self-critical voice says' },
          { label: 'What I would say to a friend' },
          { label: 'What my compassionate self might say to me' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  cft_practice: {
    id: 'cft_practice',
    sections: [
      { type: 'intro', content: 'Practices for developing your compassionate self.' },
      { type: 'text', title: 'Soothing Rhythm Breathing', content: '1. Find a comfortable position\n2. Breathe in for about 3 seconds\n3. Pause briefly\n4. Breathe out for about 3 seconds\n5. Find a rhythm that feels soothing\n6. Soften your facial expression' },
      { type: 'text', title: 'Compassionate Self Exercise', content: '1. Use soothing rhythm breathing\n2. Imagine your compassionate self — wise, strong, warm\n3. From this position, look at the part of you that is struggling\n4. What does that part need to hear?' },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  cft_child_compassion: {
    id: 'cft_child_compassion',
    sections: [
      { type: 'intro', content: 'Being kind to yourself helps you feel better. Here\'s how to practice!' },
      { type: 'text', title: 'What is self-compassion?', content: 'It\'s treating yourself the way you would treat a good friend — being kind, not mean, to yourself when things go wrong.' },
      { type: 'text', title: 'Practice: Kind hands', content: 'Put your hands on your heart. Take a deep breath. Say to yourself: "It\'s okay. Everyone makes mistakes. I\'m learning."' },
      { type: 'footer', content: 'This resource is for children. Use with adult support.' },
    ],
  },

  cft_parent: {
    id: 'cft_parent',
    sections: [
      { type: 'intro', content: 'CFT helps people who are highly self-critical develop self-compassion.' },
      { type: 'text', title: 'Why compassion matters', content: 'Self-criticism activates the threat system, making anxiety and depression worse. Compassion activates the soothing system, which helps regulate difficult emotions.' },
      { type: 'tips', title: 'How to help', items: [
        'Model self-compassion yourself',
        'Avoid critical responses to your child\'s struggles',
        'Encourage "compassionate self-talk"',
        'Practice compassionate breathing together',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  cft_pro_formulation: {
    id: 'cft_pro_formulation',
    sections: [
      { type: 'intro', content: 'CFT formulation template.' },
      {
        type: 'worksheet',
        title: 'CFT Formulation',
        rows: [
          { label: 'Key threats/fears' },
          { label: 'Safety strategies' },
          { label: 'Unintended consequences' },
          { label: 'Emotional memories' },
          { label: 'Self-critical style' },
          { label: 'Blocks to compassion' },
          { label: 'Therapeutic goals' },
        ],
      },
      { type: 'footer', content: 'For clinical use by CFT practitioners.' },
    ],
  },

  // ============ SCHEMA THERAPY RESOURCES ============
  st_overview: {
    id: 'st_overview',
    sections: [
      { type: 'intro', content: 'Schema Therapy helps you understand and change deep patterns that developed in childhood.' },
      { type: 'text', title: 'What are schemas?', content: 'Schemas are like lenses through which we see the world. They developed when our emotional needs weren\'t fully met in childhood. They feel like "just the way things are" — but they\'re patterns we learned.' },
      { type: 'text', title: 'The 18 schemas', content: 'Disconnection: Abandonment, Mistrust, Emotional Deprivation, Defectiveness, Social Isolation\n\nImpaired Autonomy: Dependence, Vulnerability, Enmeshment, Failure\n\nImpaired Limits: Entitlement, Insufficient Self-Control\n\nOther-Directedness: Subjugation, Self-Sacrifice, Approval-Seeking\n\nOvervigilance: Negativity, Emotional Inhibition, Unrelenting Standards, Punitiveness' },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  st_mode_worksheet: {
    id: 'st_mode_worksheet',
    sections: [
      { type: 'intro', content: 'Schema modes are the moment-to-moment emotional states we shift into.' },
      { type: 'text', title: 'Child Modes', content: 'Vulnerable Child: scared, sad, unloved\nAngry Child: furious, frustrated\nImpulsive Child: acts without thinking\nHappy Child: loved, content' },
      { type: 'text', title: 'Parent Modes', content: 'Punitive Parent: harsh, critical\nDemanding Parent: sets impossible standards' },
      { type: 'text', title: 'Coping Modes', content: 'Compliant Surrenderer: gives in\nDetached Protector: shuts down\nOvercompensator: fights back' },
      {
        type: 'worksheet',
        title: 'My modes',
        rows: [
          { label: 'Modes I recognise in myself' },
          { label: 'What triggers my Vulnerable Child?' },
          { label: 'What does my Punitive Parent say?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  st_coping_map: {
    id: 'st_coping_map',
    sections: [
      { type: 'intro', content: 'Understanding how you cope with schema activation.' },
      { type: 'text', title: 'Three coping styles', content: 'Surrender: Give in to the schema, act as if it\'s true\nAvoidance: Escape or numb to avoid feeling it\nOvercompensation: Act as if the opposite is true' },
      {
        type: 'worksheet',
        title: 'My coping patterns',
        rows: [
          { label: 'When this schema is triggered:' },
          { label: 'How I surrender to it' },
          { label: 'How I avoid it' },
          { label: 'How I overcompensate' },
          { label: 'What would a healthier response look like?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  st_teen_modes: {
    id: 'st_teen_modes',
    sections: [
      { type: 'intro', content: 'Schema modes are like different "parts" of yourself that show up in different situations.' },
      { type: 'text', title: 'Your different parts', content: 'The Vulnerable Part: feels hurt, scared, sad\nThe Angry Part: feels furious when treated unfairly\nThe Protective Part: shuts down feelings or walls off\nThe Critical Part: beats you up, says harsh things\nThe Healthy Part: balanced, can handle stuff' },
      {
        type: 'worksheet',
        title: 'Getting to know my parts',
        rows: [
          { label: 'What triggers my vulnerable part?' },
          { label: 'What does my critical part say?' },
          { label: 'How does my protective part try to help?' },
          { label: 'What would my healthy part say?' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  st_parent: {
    id: 'st_parent',
    sections: [
      { type: 'intro', content: 'Schema Therapy helps people understand deep patterns from childhood.' },
      { type: 'text', title: 'What parents can do', content: 'Schema Therapy includes "limited reparenting" — the therapist provides some of the emotional support that was missing. You can complement this by:\n\n• Providing consistent, warm support\n• Validating feelings\n• Not reinforcing critical "parent modes"' },
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  st_pro_formulation: {
    id: 'st_pro_formulation',
    sections: [
      { type: 'intro', content: 'Schema Therapy case conceptualisation template.' },
      {
        type: 'worksheet',
        title: 'Schema Therapy Formulation',
        rows: [
          { label: 'Core unmet needs' },
          { label: 'Primary schemas' },
          { label: 'Schema origins' },
          { label: 'Current triggers' },
          { label: 'Coping styles' },
          { label: 'Predominant modes' },
          { label: 'Therapeutic relationship implications' },
        ],
      },
      { type: 'footer', content: 'For clinical use by Schema Therapy practitioners.' },
    ],
  },

  // ============ MBT RESOURCES ============
  mbt_understanding: {
    id: 'mbt_understanding',
    sections: [
      { type: 'intro', content: 'Mentalizing is the ability to understand behaviour in terms of underlying thoughts, feelings, and intentions.' },
      { type: 'text', title: 'What is mentalizing?', content: 'Every behaviour has something behind it — thoughts, feelings, wishes, fears. When we mentalize, we try to understand what\'s going on beneath the surface.' },
      { type: 'checklist', title: 'Signs of non-mentalizing', items: [
        'Black-and-white thinking',
        'Certainty about others\' motives',
        'Acting on feelings without pausing',
        'Intense emotional reactions',
      ]},
      { type: 'tips', title: 'Practising mentalizing', items: [
        'Pause before reacting',
        'Be curious about others',
        'Hold interpretations lightly',
        'Check assumptions',
      ]},
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  mbt_stance: {
    id: 'mbt_stance',
    sections: [
      { type: 'intro', content: 'The mentalizing stance involves curiosity, openness, and not-knowing.' },
      { type: 'text', title: 'Key features', content: '• Genuine curiosity about mental states\n• Not assuming you know what others think\n• Asking questions rather than telling\n• Accepting uncertainty\n• Interest in different perspectives' },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  mbt_diary: {
    id: 'mbt_diary',
    sections: [
      { type: 'intro', content: 'Track situations where mentalizing helped or broke down.' },
      {
        type: 'worksheet',
        title: 'Mentalizing Diary',
        rows: [
          { label: 'Situation' },
          { label: 'What I thought about myself' },
          { label: 'What I thought about the other person' },
          { label: 'Did I check these assumptions?' },
          { label: 'What might have been going on for them?' },
          { label: 'What might have been going on for me?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  mbt_teen_map: {
    id: 'mbt_teen_map',
    sections: [
      { type: 'intro', content: 'Understanding yourself and others — what\'s really going on?' },
      { type: 'text', title: 'Mind-reading vs mentalizing', content: 'Mind-reading: "They obviously hate me" (assuming you know for certain)\nMentalizing: "I wonder what was going on for them" (staying curious)' },
      {
        type: 'worksheet',
        title: 'Working it out',
        rows: [
          { label: 'What happened?' },
          { label: 'What did I assume about them?' },
          { label: 'What might really be going on for them?' },
          { label: 'What was going on for me?' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  mbt_parent: {
    id: 'mbt_parent',
    sections: [
      { type: 'intro', content: 'MBT helps people understand behaviour in terms of underlying mental states.' },
      { type: 'tips', title: 'Supporting mentalizing at home', items: [
        'Model curiosity about mental states',
        'Ask "I wonder what was going on for you?"',
        'Share your own mental states: "I felt worried because..."',
        'Don\'t assume you know what they\'re thinking',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  mbt_pro_stance: {
    id: 'mbt_pro_stance',
    sections: [
      { type: 'intro', content: 'The therapeutic stance in MBT.' },
      { type: 'text', title: 'Key principles', content: '• Authentic curiosity\n• Not-knowing position\n• Slowing down\n• Identifying affect focus\n• Mentalizing the transference\n• Challenge and stop-and-stand when needed' },
      { type: 'footer', content: 'For clinical use by MBT practitioners.' },
    ],
  },

  // ============ IPT RESOURCES ============
  ipt_problem_areas: {
    id: 'ipt_problem_areas',
    sections: [
      { type: 'intro', content: 'IPT focuses on four interpersonal problem areas linked to depression.' },
      { type: 'text', title: 'The four problem areas', content: 'Grief: Complicated bereavement, loss\nRole Disputes: Conflicts with important others\nRole Transitions: Major life changes\nInterpersonal Deficits: Loneliness, difficulty forming relationships' },
      {
        type: 'worksheet',
        title: 'Identifying my problem area',
        rows: [
          { label: 'What interpersonal issues are linked to my depression?' },
          { label: 'Which problem area fits best?' },
          { label: 'Key relationships involved' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ipt_communication: {
    id: 'ipt_communication',
    sections: [
      { type: 'intro', content: 'Communication analysis helps identify patterns that maintain interpersonal difficulties.' },
      {
        type: 'worksheet',
        title: 'Communication Analysis',
        rows: [
          { label: 'Describe a recent difficult interaction' },
          { label: 'What did you want to communicate?' },
          { label: 'What did you actually say?' },
          { label: 'How did the other person respond?' },
          { label: 'What might you do differently?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  ipt_teen_relationships: {
    id: 'ipt_teen_relationships',
    sections: [
      { type: 'intro', content: 'IPT helps you understand how relationships affect your mood.' },
      { type: 'text', title: 'Relationships and mood', content: 'When relationships are going well, we usually feel better. When there\'s conflict, loss, or change, we can feel low. IPT helps you work on these relationship issues.' },
      {
        type: 'worksheet',
        title: 'My relationships',
        rows: [
          { label: 'Important relationships in my life' },
          { label: 'Which ones are going well?' },
          { label: 'Which ones are difficult?' },
          { label: 'How do relationship problems affect my mood?' },
        ],
      },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  ipt_parent: {
    id: 'ipt_parent',
    sections: [
      { type: 'intro', content: 'IPT helps young people by improving their relationships.' },
      { type: 'text', title: 'How IPT works', content: 'IPT focuses on the connection between relationships and mood. It helps young people:\n• Communicate their needs more effectively\n• Navigate conflicts\n• Adjust to changes\n• Build closer relationships' },
      { type: 'tips', title: 'How you can help', items: [
        'Be available for conversation',
        'Listen without immediately problem-solving',
        'Model healthy communication',
        'Support their therapy practice',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  ipt_pro_formulation: {
    id: 'ipt_pro_formulation',
    sections: [
      { type: 'intro', content: 'IPT case formulation template.' },
      {
        type: 'worksheet',
        title: 'IPT Formulation',
        rows: [
          { label: 'Presenting depression symptoms' },
          { label: 'Interpersonal inventory summary' },
          { label: 'Primary problem area' },
          { label: 'Key relationships' },
          { label: 'Communication patterns' },
          { label: 'Treatment goals' },
        ],
      },
      { type: 'footer', content: 'For clinical use by IPT practitioners.' },
    ],
  },

  // ============ SFBT RESOURCES ============
  sfbt_miracle: {
    id: 'sfbt_miracle',
    sections: [
      { type: 'intro', content: 'The Miracle Question helps you imagine life without the problem.' },
      { type: 'text', title: 'The Miracle Question', content: '"Suppose tonight, while you\'re asleep, a miracle happens. The problem that brought you here is solved. But because you were asleep, you don\'t know the miracle has happened. When you wake up tomorrow, what will be the first small sign that tells you the miracle has happened?"' },
      {
        type: 'worksheet',
        title: 'Exploring the miracle',
        rows: [
          { label: 'What would be different?' },
          { label: 'What would you be doing?' },
          { label: 'What would others notice?' },
          { label: 'What small part of this is already happening?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  sfbt_scaling: {
    id: 'sfbt_scaling',
    sections: [
      { type: 'intro', content: 'Scaling questions help track progress and identify small steps forward.' },
      { type: 'text', title: 'How scaling works', content: 'On a scale of 1-10, where 10 is the best things could be and 1 is the worst:\n• Where are you now?\n• What would one point higher look like?\n• What have you done to get this far?' },
      {
        type: 'worksheet',
        title: 'My scaling',
        rows: [
          { label: 'Where am I now? (1-10)' },
          { label: 'What tells me I\'m at this number (not lower)?' },
          { label: 'What would one point higher look like?' },
          { label: 'What small step could move me up?' },
        ],
      },
      { type: 'footer', content: 'This resource is for educational purposes.' },
    ],
  },

  sfbt_child_goals: {
    id: 'sfbt_child_goals',
    sections: [
      { type: 'intro', content: 'What do you want to be different? Let\'s think about your best hopes!' },
      { type: 'text', title: 'The Magic Wand Question', content: 'If you had a magic wand and could make one thing different, what would you change?' },
      {
        type: 'worksheet',
        title: 'My best hopes',
        rows: [
          { label: 'What do I want to be different?' },
          { label: 'How will I know things are better?' },
          { label: 'What\'s already a bit better?' },
        ],
      },
      { type: 'footer', content: 'This resource is for children.' },
    ],
  },

  sfbt_parent: {
    id: 'sfbt_parent',
    sections: [
      { type: 'intro', content: 'SFBT focuses on solutions rather than problems.' },
      { type: 'tips', title: 'Supporting SFBT at home', items: [
        'Notice and name exceptions — times when the problem is less',
        'Ask about preferred futures: "What would you like to be different?"',
        'Celebrate small steps',
        'Focus on what\'s working',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  sfbt_pro_session: {
    id: 'sfbt_pro_session',
    sections: [
      { type: 'intro', content: 'SFBT session structure and key interventions.' },
      { type: 'checklist', title: 'Key interventions', items: [
        'Best hopes / preferred future',
        'Miracle question',
        'Exception finding',
        'Scaling questions',
        'Coping questions',
        'Relationship questions',
        'Compliments and tasks',
      ]},
      { type: 'footer', content: 'For clinical use by SFBT practitioners.' },
    ],
  },

  // ============ EFT RESOURCES ============
  eft_cycles: {
    id: 'eft_cycles',
    sections: [
      { type: 'intro', content: 'EFT helps couples understand the negative cycles that keep them stuck.' },
      { type: 'text', title: 'The negative cycle', content: 'When we feel disconnected, we react in ways that push our partner further away. This creates a cycle: the more one pursues, the more the other withdraws, which increases pursuit, and so on.' },
      {
        type: 'worksheet',
        title: 'Understanding our cycle',
        rows: [
          { label: 'What happens when we get stuck?' },
          { label: 'What do I do? (my move in the cycle)' },
          { label: 'What does my partner do?' },
          { label: 'How does this affect our connection?' },
        ],
      },
      { type: 'footer', content: 'This resource is for couples.' },
    ],
  },

  eft_attachment: {
    id: 'eft_attachment',
    sections: [
      { type: 'intro', content: 'EFT is based on attachment theory — our deep need for connection.' },
      { type: 'text', title: 'Attachment needs', content: 'We all need to feel:\n• Safe and secure with our partner\n• That we matter and are valued\n• That our partner is accessible and responsive\n\nWhen these needs aren\'t met, we protest — often in ways that make things worse.' },
      { type: 'footer', content: 'This resource is for couples.' },
    ],
  },

  eft_pro_formulation: {
    id: 'eft_pro_formulation',
    sections: [
      { type: 'intro', content: 'EFT case formulation template.' },
      {
        type: 'worksheet',
        title: 'EFT Formulation',
        rows: [
          { label: 'Presenting cycle' },
          { label: 'Partner 1 position and attachment fears' },
          { label: 'Partner 2 position and attachment fears' },
          { label: 'Negative interaction cycle' },
          { label: 'Primary emotions underlying the cycle' },
          { label: 'Attachment injuries' },
        ],
      },
      { type: 'footer', content: 'For clinical use by EFT practitioners.' },
    ],
  },

  // ============ FBT (Family-Based Treatment for Eating Disorders) ============
  fbt_parent_teamwork: {
    id: 'fbt_parent_teamwork',
    sections: [
      { type: 'intro', content: 'In FBT, parents work as a team to help their child recover from an eating disorder.' },
      { type: 'text', title: 'Why parental teamwork matters', content: 'The eating disorder will try to divide parents. Presenting a united front is essential. You don\'t have to agree on everything — but you need to support each other in front of your child.' },
      { type: 'tips', title: 'Working together', items: [
        'Have regular check-ins (without your child present)',
        'Agree on a plan before meals',
        'Back each other up, even if you disagree',
        'Debrief after difficult moments',
        'Remember: the enemy is the eating disorder, not each other',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  fbt_parent_meal: {
    id: 'fbt_parent_meal',
    sections: [
      { type: 'intro', content: 'Family meals are a core part of FBT. Here\'s how to approach them.' },
      { type: 'text', title: 'Your role at meals', content: 'In FBT, you take charge of your child\'s eating — temporarily. You decide what, when, and how much they eat. This takes the impossible burden off your child.' },
      { type: 'tips', title: 'Meal support strategies', items: [
        'Plate the food yourself',
        'Stay calm and compassionate but firm',
        'Use distraction (conversation, games)',
        'Separate your child from the eating disorder',
        'Praise every bite',
        'Expect it to be hard — and do it anyway',
      ]},
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  fbt_externalisation: {
    id: 'fbt_externalisation',
    sections: [
      { type: 'intro', content: 'Externalisation means separating your child from the eating disorder.' },
      { type: 'text', title: 'Why externalise?', content: 'Your child is not the eating disorder. The eating disorder is like an illness that has taken over. When you externalise, you can fight the illness together, rather than fighting your child.' },
      { type: 'example', title: 'How it sounds', content: 'Instead of: "Why won\'t you just eat?"\nTry: "I know this is hard. The eating disorder is making this feel impossible. But we\'re going to beat it together."' },
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  fbt_family_meal: {
    id: 'fbt_family_meal',
    sections: [
      { type: 'intro', content: 'The family meal session is a key part of FBT. Here\'s what to expect.' },
      { type: 'text', title: 'What happens', content: 'Your therapist will ask you to bring a meal to the session. They will observe how your family eats together and coach you on how to help your child eat more effectively.' },
      { type: 'text', title: 'What to bring', content: 'Bring a typical family meal — enough for everyone. Include what your child needs to eat for recovery, even if it\'s challenging.' },
      { type: 'footer', content: 'This resource is for families in FBT.' },
    ],
  },

  fbt_teen_body: {
    id: 'fbt_teen_body',
    sections: [
      { type: 'intro', content: 'Understanding what the eating disorder does to your body.' },
      { type: 'text', title: 'What happens when you don\'t eat enough', content: 'Your body goes into starvation mode:\n• Your brain slows down (hard to think clearly)\n• Your mood gets worse\n• Your body temperature drops\n• Your heart can be affected\n• Your bones get weaker' },
      { type: 'text', title: 'Recovery changes this', content: 'As you eat more and your body heals:\n• Thinking gets clearer\n• Mood improves\n• Energy returns\n• You can be yourself again' },
      { type: 'footer', content: 'This resource is for teenagers.' },
    ],
  },

  fbt_recovery_tracker: {
    id: 'fbt_recovery_tracker',
    sections: [
      { type: 'intro', content: 'Track your progress in recovery.' },
      {
        type: 'worksheet',
        title: 'Weekly Recovery Check',
        rows: [
          { label: 'Meals completed this week' },
          { label: 'What went well?' },
          { label: 'What was hard?' },
          { label: 'What helped?' },
          { label: 'Goals for next week' },
        ],
      },
      { type: 'footer', content: 'This resource is for families in FBT.' },
    ],
  },

  fbt_relapse_signs: {
    id: 'fbt_relapse_signs',
    sections: [
      { type: 'intro', content: 'Knowing the warning signs helps you catch a relapse early.' },
      { type: 'checklist', title: 'Warning signs to watch for', items: [
        'Increasing food rules or restrictions',
        'More exercise or activity',
        'Avoiding eating with others',
        'Mood changes (irritability, withdrawal)',
        'Body checking or weighing',
        'Comments about feeling "fat"',
        'Clothes getting looser',
      ]},
      {
        type: 'worksheet',
        title: 'Our family plan',
        rows: [
          { label: 'Early warning signs for us' },
          { label: 'What we\'ll do if we see them' },
          { label: 'Who we\'ll contact for help' },
        ],
      },
      { type: 'footer', content: 'This resource is for families.' },
    ],
  },

  fbt_pro_phase: {
    id: 'fbt_pro_phase',
    sections: [
      { type: 'intro', content: 'Overview of the three phases of FBT.' },
      { type: 'text', title: 'Phase 1: Weight restoration', content: 'Parents take charge of feeding. Focus on weight gain and interrupting eating disorder behaviours.' },
      { type: 'text', title: 'Phase 2: Return control to adolescent', content: 'Gradual return of eating independence as weight stabilises.' },
      { type: 'text', title: 'Phase 3: Adolescent issues', content: 'Address developmental tasks disrupted by the illness.' },
      { type: 'footer', content: 'For clinical use by FBT practitioners.' },
    ],
  },

  fbt_parent_scripts: {
    id: 'fbt_parent_scripts',
    sections: [
      { type: 'intro', content: 'What to say (and what not to say) during meals.' },
      { type: 'text', title: 'Helpful phrases', content: '"I know this is hard."\n"The eating disorder is lying to you."\n"You can do this."\n"We\'re going to get through this together."\n"One more bite."' },
      { type: 'text', title: 'Phrases to avoid', content: '"Just eat it."\n"Think of the starving children."\n"You\'re being difficult."\n"Fine, don\'t eat then."\n"What\'s wrong with you?"' },
      { type: 'footer', content: 'This resource is for parents.' },
    ],
  },

  fbt_phase_structure: {
    id: 'fbt_phase_structure',
    sections: [
      { type: 'intro', content: 'Understanding the structure of FBT treatment.' },
      { type: 'text', title: 'Typical structure', content: 'Phase 1: Weekly sessions, 3-5 months, until weight restored\nPhase 2: Fortnightly sessions, 2-3 months\nPhase 3: Monthly sessions, 2-3 months\n\nTotal: approximately 20 sessions over 9-12 months' },
      { type: 'footer', content: 'This resource is for families.' },
    ],
  },

  fbt_pro_medical: {
    id: 'fbt_pro_medical',
    sections: [
      { type: 'intro', content: 'Medical monitoring guidelines for FBT.' },
      { type: 'checklist', title: 'Medical checks', items: [
        'Regular weight monitoring',
        'Vital signs (HR, BP, temperature)',
        'Blood tests as indicated',
        'Bone density if prolonged amenorrhea',
        'ECG if indicated',
      ]},
      { type: 'footer', content: 'For clinical use.' },
    ],
  },

  fbt_pro_school: {
    id: 'fbt_pro_school',
    sections: [
      { type: 'intro', content: 'Coordinating with schools during FBT.' },
      { type: 'checklist', title: 'School considerations', items: [
        'Lunchtime supervision and support',
        'PE participation (may need modification)',
        'Exam accommodations if needed',
        'Communication with pastoral staff',
        'Managing peer questions',
      ]},
      { type: 'footer', content: 'For clinical use.' },
    ],
  },

  // Add more resources as needed...
};
