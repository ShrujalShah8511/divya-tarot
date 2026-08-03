// ==========================================================================
// DIVYA TAROT SPREADS (Indian Cultural Reading Spreads)
// ==========================================================================

export const TAROT_SPREADS = [
  {
    id: 'shubh',
    name: 'Shubh Muhurat (Daily Guidance)',
    cardCount: 1,
    icon: 'sun',
    subtitle: 'Auspicious card of the day',
    description: 'Draw 1 card to receive your daily Vedic reflection, obstacle warning, and Shubh Vichar affirmation.',
    positions: [
      { id: 'daily', label: 'Daily Energy & Guidance', hint: 'The core theme governing your day today.' }
    ]
  },
  {
    id: 'karma',
    name: 'Karma & Dharma Spread',
    cardCount: 3,
    icon: 'scale',
    subtitle: 'Past, Present & Future Journey',
    description: 'Understand how past actions influence present duty and future karmic fruits.',
    positions: [
      { id: 'past_karma', label: '1. Past Karma', hint: 'Actions and lessons from your past shaping current events.' },
      { id: 'present_dharma', label: '2. Present Dharma', hint: 'Your immediate duty, mindset, and focus required right now.' },
      { id: 'future_phala', label: '3. Future Karmic Fruit', hint: 'The natural outcome and divine blessing unfolding.' }
    ]
  },
  {
    id: 'dhan',
    name: 'Dhan & Career Prosperity',
    cardCount: 3,
    icon: 'coins',
    subtitle: 'Jobs, Business & Financial Growth',
    description: 'Tailored for Indian professionals, students preparing for exams, and business owners seeking growth.',
    positions: [
      { id: 'current_status', label: '1. Current Work Energy', hint: 'Your current job, exam preparation, or business state.' },
      { id: 'opportunity_challenge', label: '2. Opportunity & Challenge', hint: 'Hidden factors, competitive dynamics, or key choices.' },
      { id: 'wealth_outcome', label: '3. Dhan Abundance Outcome', hint: 'Financial growth, promotion, or success direction.' }
    ]
  },
  {
    id: 'rishta',
    name: 'Rishta & Family Harmony',
    cardCount: 4,
    icon: 'heart-handshake',
    subtitle: 'Love, Marriage & Household Peace',
    description: 'Insight into love proposals, marriage compatibility (Rishta), and family harmony.',
    positions: [
      { id: 'your_energy', label: '1. Your Heart & Mind', hint: 'What you feel and desire in this relationship.' },
      { id: 'partner_energy', label: '2. Partner / Family Mind', hint: 'Their perspective, intentions, and emotional alignment.' },
      { id: 'dynamic', label: '3. Relationship Dynamics', hint: 'The bond energy between both sides.' },
      { id: 'guidance', label: '4. Divine Guidance for Harmony', hint: 'Actionable advice to foster long-term love and peace.' }
    ]
  },
  {
    id: 'navagraha',
    name: 'Navagraha Life Destiny',
    cardCount: 5,
    icon: 'sparkles',
    subtitle: 'Deep 5-Aspect Life Reading',
    description: 'A comprehensive 5-card reading exploring Mind, Career, Wealth, Love, and Karma.',
    positions: [
      { id: 'mana', label: '1. Mana (Mind & Peace)', hint: 'Emotional health and inner clarity.' },
      { id: 'karma_work', label: '2. Karma (Work & Duty)', hint: 'Career direction and ambition.' },
      { id: 'dhan_wealth', label: '3. Dhan (Finances)', hint: 'Material prosperity and security.' },
      { id: 'prema_love', label: '4. Prema (Love & Relationships)', hint: 'Family and soul connection.' },
      { id: 'bhagya_destiny', label: '5. Bhagya (Destiny Grace)', hint: 'Higher purpose and divine protection.' }
    ]
  }
];
