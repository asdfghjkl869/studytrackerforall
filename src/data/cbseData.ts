import { ClassLevel, SubjectName, SubjectHabit, DailySleepLog, StudySession, UserProfile } from '../types';

export const SUBJECTS: SubjectName[] = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Social Science',
  'English',
  'Hindi'
];

export const SUBJECT_COLORS: Record<SubjectName, { bg: string; text: string; border: string; accent: string; gradient: string }> = {
  'Mathematics': {
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    border: 'border-sky-500/30',
    accent: '#38bdf8',
    gradient: 'from-sky-500 to-blue-600'
  },
  'Physics': {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
    accent: '#818cf8',
    gradient: 'from-indigo-500 to-purple-600'
  },
  'Chemistry': {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    accent: '#34d399',
    gradient: 'from-emerald-500 to-teal-600'
  },
  'Biology': {
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'border-teal-500/30',
    accent: '#2dd4bf',
    gradient: 'from-teal-500 to-emerald-600'
  },
  'Social Science': {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    accent: '#fbbf24',
    gradient: 'from-amber-500 to-orange-600'
  },
  'English': {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    border: 'border-rose-500/30',
    accent: '#fb7185',
    gradient: 'from-rose-500 to-pink-600'
  },
  'Hindi': {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
    accent: '#a78bfa',
    gradient: 'from-violet-500 to-purple-600'
  }
};

export const DEFAULT_STAGES: Record<SubjectName, string[]> = {
  'Mathematics': [
    'Lectures & Formula',
    'NCERT Full',
    'Modules Full',
    'ML Agarwal (HOTS)',
    'PYQ / Practice'
  ],
  'Physics': [
    'ONE SHOT / Lectures',
    'NCERT & Numericals',
    'S. Chand questions',
    'PYQ / Practice'
  ],
  'Chemistry': [
    'ONE SHOT / Lectures',
    'NCERT Line by Line',
    'Exemplar & Numericals',
    'PYQ / Practice'
  ],
  'Biology': [
    'NCERT Reading & Diagrams',
    'Notes & Key Terms',
    'NCERT Back Questions',
    'PYQ / Practice'
  ],
  'Social Science': [
    'Theory Read',
    'NCERT Questions',
    'Map Work & Dates',
    'Previous Year Questions',
    'Sample Papers'
  ],
  'English': [
    'Chapter Reading',
    'Theme & Character Sketch',
    'NCERT Solutions',
    'Extract & Writing Practice'
  ],
  'Hindi': [
    'Reading & Saransh',
    'Shabdarth & Vyakarana',
    'NCERT Prashnottar',
    'Patra/Nibandh & PYQs'
  ]
};

export const SYLLABUS_DATA: Record<ClassLevel, Record<SubjectName, string[]>> = {
  'Class 10': {
    'Mathematics': [
      'Ch 1: Real Numbers',
      'Ch 2: Polynomials',
      'Ch 3: Pair of Linear Equations in Two Variables',
      'Ch 4: Quadratic Equations',
      'Ch 5: Arithmetic Progressions',
      'Ch 6: Triangles',
      'Ch 7: Coordinate Geometry',
      'Ch 8: Introduction to Trigonometry',
      'Ch 9: Some Applications of Trigonometry',
      'Ch 10: Circles',
      'Ch 11: Areas Related to Circles',
      'Ch 12: Surface Areas and Volumes',
      'Ch 13: Statistics',
      'Ch 14: Probability'
    ],
    'Physics': [
      'Ch 1: Light – Reflection & Refraction',
      'Ch 2: Human Eye & Colorful World',
      'Ch 3: Electricity',
      'Ch 4: Magnetic Effects of Electric Current'
    ],
    'Chemistry': [
      'Ch 1: Chemical Reactions & Equations',
      'Ch 2: Acids, Bases & Salts',
      'Ch 3: Metals & Non-metals',
      'Ch 4: Carbon & its Compounds'
    ],
    'Biology': [
      'Ch 1: Life Processes',
      'Ch 2: Control and Coordination',
      'Ch 3: How do Organisms Reproduce?',
      'Ch 4: Heredity',
      'Ch 5: Our Environment'
    ],
    'Social Science': [
      'Ch 1: The Rise of Nationalism in Europe',
      'Ch 2: Nationalism in India',
      'Ch 3: The Making of a Global World',
      'Ch 4: Print Culture & The Modern World',
      'Ch 5: Resources & Development',
      'Ch 6: Forest and Wildlife Resources',
      'Ch 7: Water Resources',
      'Ch 8: Agriculture',
      'Ch 9: Minerals & Energy Resources',
      'Ch 10: Manufacturing Industries',
      'Ch 11: Lifelines of National Economy',
      'Ch 12: Power Sharing',
      'Ch 13: Federalism',
      'Ch 14: Gender, Religion and Caste',
      'Ch 15: Political Parties',
      'Ch 16: Outcomes of Democracy',
      'Ch 17: Development',
      'Ch 18: Sectors of the Indian Economy',
      'Ch 19: Money and Credit',
      'Ch 20: Globalization & The Indian Economy'
    ],
    'English': [
      'Ch 1: A Letter to God & Dust of Snow / Fire and Ice',
      'Ch 2: Nelson Mandela: Long Walk to Freedom & A Tiger in the Zoo',
      'Ch 3: Two Stories About Flying & Ball Poem',
      'Ch 4: From the Diary of Anne Frank & Amanda!',
      'Ch 5: Glimpses of India & The Trees',
      'Ch 6: Mijbil the Otter & Fog',
      'Ch 7: Madam Rides the Bus & Custard the Dragon',
      'Ch 8: The Sermon at Benares & For Anne Gregory',
      'Ch 9: The Proposal',
      'Ch 10: A Triumph of Surgery',
      'Ch 11: The Thief\'s Story',
      'Ch 12: The Midnight Visitor',
      'Ch 13: A Question of Trust',
      'Ch 14: Footprints Without Feet',
      'Ch 15: The Making of a Scientist',
      'Ch 16: The Necklace',
      'Ch 17: Bholi',
      'Ch 18: The Book That Saved the Earth',
      'Ch 19: Grammar & Analytical Paragraph'
    ],
    'Hindi': [
      'Ch 1: Surdas ke Pad',
      'Ch 2: Ram-Lakshman-Parshuram Samvad',
      'Ch 3: Aatmakathya',
      'Ch 4: Utsah & At Nahi Rahi Hai',
      'Ch 5: Yah Danturit Muskan & Fasal',
      'Ch 6: Sangatkar',
      'Ch 7: Netaji Ka Chashma',
      'Ch 8: Balgobin Bhagat',
      'Ch 9: Lakhnavi Andaz',
      'Ch 10: Ek Kahani Yeh Bhi',
      'Ch 11: Naubadkhane Mein Ibadat',
      'Ch 12: Sanskriti',
      'Ch 13: Mata Ka Aanchal',
      'Ch 14: Sana-Sana Hath Jodi',
      'Ch 15: Main Kyon Likhta Hoon?',
      'Ch 16: Vyakaran: Vakya, Vachya, Pad Parichay, Alankar',
      'Ch 17: Lekhan: Patra, Nibandh, Vigyapan, Sandesh'
    ]
  },
  'Class 9': {
    'Mathematics': [
      'Ch 1: Number Systems',
      'Ch 2: Polynomials',
      'Ch 3: Coordinate Geometry',
      'Ch 4: Linear Equations in Two Variables',
      'Ch 5: Introduction to Euclid\'s Geometry',
      'Ch 6: Lines and Angles',
      'Ch 7: Triangles',
      'Ch 8: Quadrilaterals',
      'Ch 9: Circles',
      'Ch 10: Heron\'s Formula',
      'Ch 11: Surface Areas and Volumes',
      'Ch 12: Statistics'
    ],
    'Physics': [
      'Ch 1: Motion',
      'Ch 2: Force and Laws of Motion',
      'Ch 3: Gravitation',
      'Ch 4: Work and Energy',
      'Ch 5: Sound'
    ],
    'Chemistry': [
      'Ch 1: Matter in Our Surroundings',
      'Ch 2: Is Matter Around Us Pure',
      'Ch 3: Atoms and Molecules',
      'Ch 4: Structure of the Atom'
    ],
    'Biology': [
      'Ch 1: The Fundamental Unit of Life',
      'Ch 2: Tissues',
      'Ch 3: Improvement in Food Resources'
    ],
    'Social Science': [
      'Ch 1: The French Revolution',
      'Ch 2: Socialism in Europe & Russian Revolution',
      'Ch 3: Nazism and the Rise of Hitler',
      'Ch 4: India – Size and Location',
      'Ch 5: Physical Features of India',
      'Ch 6: Drainage',
      'Ch 7: Climate',
      'Ch 8: Natural Vegetation and Wildlife',
      'Ch 9: Population',
      'Ch 10: What is Democracy? Why Democracy?',
      'Ch 11: Constitutional Design',
      'Ch 12: Electoral Politics',
      'Ch 13: Working of Institutions',
      'Ch 14: Democratic Rights',
      'Ch 15: The Story of Village Palampur',
      'Ch 16: People as Resource',
      'Ch 17: Poverty as a Challenge',
      'Ch 18: Food Security in India'
    ],
    'English': [
      'Ch 1: The Fun They Had & The Road Not Taken',
      'Ch 2: The Sound of Music & Wind',
      'Ch 3: The Little Girl & Rain on the Roof',
      'Ch 4: A Truly Beautiful Mind & Lake Isle of Innisfree',
      'Ch 5: The Snake and the Mirror & Legend of the Northland',
      'Ch 6: My Childhood & No Men Are Foreign',
      'Ch 7: Reach for the Top & On Killing a Tree',
      'Ch 8: Kathmandu & A Slumber Did My Spirit Seal',
      'Ch 9: If I Were You',
      'Ch 10: The Lost Child',
      'Ch 11: The Adventures of Toto',
      'Ch 12: Iswaran the Storyteller',
      'Ch 13: In the Kingdom of Fools',
      'Ch 14: The Happy Prince',
      'Ch 15: The Last Leaf',
      'Ch 16: A House Is Not a Home',
      'Ch 17: The Beggar',
      'Ch 18: Grammar & Descriptive Paragraph'
    ],
    'Hindi': [
      'Ch 1: Do Bailon ki Katha',
      'Ch 2: Lhasa ki Aur',
      'Ch 3: Upbhoktavad ki Sanskriti',
      'Ch 4: Saanwle Sapno ki Yaad',
      'Ch 5: Premchand ke Phate Joote',
      'Ch 6: Mere Bachpan ke Din',
      'Ch 7: Sakhiyan evam Sabad',
      'Ch 8: Vaakh',
      'Ch 9: Savaiye',
      'Ch 10: Kaidi aur Kokila',
      'Ch 11: Gram Shree',
      'Ch 12: Megh Aaye',
      'Ch 13: Yamraj ki Disha',
      'Ch 14: Is Jal Pralay Mein',
      'Ch 15: Mere Sang ki Auratein',
      'Ch 16: Reedh ki Haddi',
      'Ch 17: Vyakaran & Rachnatmak Lekhan'
    ]
  }
};

export const DEFAULT_HABITS: Record<SubjectName, string[]> = {
  'Mathematics': [
    'Morning Formula Flashcards (15 mins)',
    'Solve 5 HOTS / Exemplar Problems',
    'NCERT Exercise Practice'
  ],
  'Physics': [
    'Concept Revision & Ray/Circuit Diagrams',
    'Solve 5 Numerical Problems',
    'Formula derivation check'
  ],
  'Chemistry': [
    'Balanced Chemical Reactions Recall',
    'NCERT Line-by-line reading',
    'Organic/Inorganic equation writeup'
  ],
  'Biology': [
    'Draw and label 2 important diagrams',
    'Learn 10 key biological terms & definitions',
    'NCERT back question review'
  ],
  'Social Science': [
    'Historical timeline / map pointing practice',
    'Write answers to one 3-mark & one 5-mark question',
    'Revise key economic & political terms'
  ],
  'English': [
    'Read 1 prose/poem with theme and metaphors',
    'Write 1 analytical paragraph or formal letter',
    'Learn 5 advanced vocabulary words'
  ],
  'Hindi': [
    'Kavita ka bhavarth aur alankar revision',
    'Vyakaran prashna abhyas (Vachya/Pad-Parichay)',
    'Patra ya nibandh lekhan abhyas'
  ]
};

export function getDefaultDatesheet(): Record<SubjectName, string> {
  const today = new Date();
  const target = new Date(today.getTime() + 40 * 24 * 60 * 60 * 1000);
  const dates = {} as Record<SubjectName, string>;
  SUBJECTS.forEach((sub, idx) => {
    const d = new Date(target.getTime() + idx * 3 * 24 * 60 * 60 * 1000);
    dates[sub] = d.toISOString().split('T')[0];
  });
  return dates;
}

export function generateSampleInitialProfile(): UserProfile {
  const datesheet = getDefaultDatesheet();
  const subjectsData: Record<string, any> = {};
  const customStages = JSON.parse(JSON.stringify(DEFAULT_STAGES));

  SUBJECTS.forEach(sub => {
    const chaptersList = SYLLABUS_DATA['Class 10'][sub];
    const stages = customStages[sub];
    subjectsData[sub] = {
      examDate: datesheet[sub],
      weeklyTargetHours: sub === 'Mathematics' || sub === 'Social Science' ? 6 : 4,
      chapters: chaptersList.map((chName, idx) => {
        // Seed some realistic progress for instant visualization
        let states = stages.map(() => 0);
        if (sub === 'Mathematics') {
          if (idx < 3) states = stages.map(() => 2); // all done
          else if (idx === 3 || idx === 4) states = [2, 2, 2, 0, 0];
          else if (idx === 5) states = [1, 0, 0, 0, 0];
        } else if (sub === 'Physics') {
          if (idx < 2) states = stages.map(() => 2);
          else if (idx === 2) states = [2, 1, 0, 0];
        } else if (sub === 'Chemistry') {
          if (idx < 2) states = stages.map(() => 2);
        } else if (sub === 'Biology') {
          if (idx === 0) states = [2, 2, 2, 0];
          else if (idx === 1) states = [2, 1, 0, 0];
        } else if (sub === 'Social Science') {
          if (idx < 8) states = stages.map(() => 2);
          else if (idx === 8) states = [2, 2, 1, 0, 0];
        } else if (sub === 'English') {
          if (idx === 0) states = [2, 1, 0, 0];
        } else if (sub === 'Hindi') {
          if (idx === 0) states = [2, 0, 0, 0];
        }
        return {
          id: 'ch_' + Math.random().toString(36).substring(2, 9),
          name: chName,
          stageStates: states
        };
      })
    };
  });

  // Default habits
  const habits: SubjectHabit[] = [];
  const todayStr = new Date().toISOString().split('T')[0];
  const yesterdayStr = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const dayBeforeStr = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];

  SUBJECTS.forEach(sub => {
    (DEFAULT_HABITS[sub] || []).forEach(habitTitle => {
      habits.push({
        id: 'hab_' + Math.random().toString(36).substring(2, 8),
        subject: sub,
        title: habitTitle,
        completedDates: Math.random() > 0.4 ? [yesterdayStr, dayBeforeStr] : [dayBeforeStr]
      });
    });
  });

  // Default past 7 days study sessions
  const sessions: StudySession[] = [
    {
      id: 'sess_1',
      subject: 'Mathematics',
      chapterName: 'Ch 4: Quadratic Equations',
      durationMinutes: 65,
      timestamp: new Date(Date.now() - 3600000 * 3).toISOString(),
      notes: 'Solved 15 questions from NCERT and exemplar roots method.'
    },
    {
      id: 'sess_2',
      subject: 'Physics',
      chapterName: 'Ch 3: Electricity',
      durationMinutes: 45,
      timestamp: new Date(Date.now() - 3600000 * 7).toISOString(),
      notes: 'Resistors in series and parallel derivations and numericals.'
    },
    {
      id: 'sess_3',
      subject: 'Social Science',
      chapterName: 'Ch 2: Nationalism in India',
      durationMinutes: 50,
      timestamp: new Date(Date.now() - 86400000 - 3600000 * 4).toISOString(),
      notes: 'Timeline chart and Non-Cooperation Movement key dates.'
    },
    {
      id: 'sess_4',
      subject: 'Chemistry',
      chapterName: 'Ch 1: Chemical Reactions & Equations',
      durationMinutes: 40,
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      notes: 'Oxidation, reduction, and redox reactions practice.'
    },
    {
      id: 'sess_5',
      subject: 'Biology',
      chapterName: 'Ch 1: Life Processes',
      durationMinutes: 55,
      timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
      notes: 'Human alimentary canal & nephron diagram practice.'
    },
    {
      id: 'sess_6',
      subject: 'Mathematics',
      chapterName: 'Ch 8: Introduction to Trigonometry',
      durationMinutes: 60,
      timestamp: new Date(Date.now() - 86400000 * 4).toISOString(),
      notes: 'Trigonometric identities proof exercises.'
    },
    {
      id: 'sess_7',
      subject: 'English',
      chapterName: 'Ch 1: A Letter to God',
      durationMinutes: 35,
      timestamp: new Date(Date.now() - 86400000 * 5).toISOString(),
      notes: 'Irony in Lencho character sketch & theme.'
    }
  ];

  // Default sleep logs for past 7 days
  const sleepLogs: Record<string, DailySleepLog> = {};
  const sleepDays = [
    { offset: 0, hours: 7.5, quality: 'excellent' as const, bed: '23:00', wake: '06:30', notes: 'Sound sleep, ready for full focus!' },
    { offset: 1, hours: 7.0, quality: 'good' as const, bed: '23:30', wake: '06:30', notes: 'Consistent rest.' },
    { offset: 2, hours: 8.0, quality: 'excellent' as const, bed: '22:30', wake: '06:30', notes: 'Great recovery night.' },
    { offset: 3, hours: 6.5, quality: 'fair' as const, bed: '00:00', wake: '06:30', notes: 'Slightly late sleep.' },
    { offset: 4, hours: 7.5, quality: 'excellent' as const, bed: '23:00', wake: '06:30', notes: 'High energy day.' },
    { offset: 5, hours: 7.0, quality: 'good' as const, bed: '23:15', wake: '06:15', notes: 'Woke up fresh.' },
    { offset: 6, hours: 8.0, quality: 'excellent' as const, bed: '22:30', wake: '06:30', notes: 'Solid weekend sleep.' }
  ];

  sleepDays.forEach(item => {
    const dStr = new Date(Date.now() - item.offset * 86400000).toISOString().split('T')[0];
    sleepLogs[dStr] = {
      date: dStr,
      hours: item.hours,
      bedTime: item.bed,
      wakeTime: item.wake,
      quality: item.quality,
      notes: item.notes
    };
  });

  return {
    id: 'prof_' + Date.now(),
    name: 'Umang',
    classLevel: 'Class 10',
    customStages,
    subjects: subjectsData,
    sessions,
    habits,
    sleepLogs,
    streak: 6,
    lastActiveDate: todayStr,
    createdAt: new Date().toISOString(),
    targetExamName: 'CBSE Class 10 Board Exam'
  };
}
