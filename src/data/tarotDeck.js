// ==========================================================================
// DIVYA TAROT DECK DATA (78 Tarot Cards with Indian Life Interpretations)
// ==========================================================================

export const TAROT_DECK = [
  // ----------------------- MAJOR ARCANA (22 Cards) -----------------------
  {
    id: 'fool',
    number: '0',
    name: 'The Fool (Arambh / New Beginning)',
    arcana: 'Major',
    element: 'Air',
    astrology: 'Uranus',
    icon: 'sparkles',
    uprightKeywords: ['New Journey', 'Faith in Universe', 'Innocence', 'Spontaneous Step', 'New Career Path'],
    reversedKeywords: ['Recklessness', 'Risk of Impulse', 'Hesitation', 'Naivety'],
    uprightMeaning: 'A fresh new cycle is beginning in your life. The universe encourages you to take an auspicious step forward with optimism and trust.',
    reversedMeaning: 'Avoid careless risks or hasty decisions. Take advice from elders before taking big financial or career leaps.',
    indianInsight: {
      karma: 'Fresh karmic seeds are being sown. Trust your pure intentions.',
      career: 'Great time for a new business, new job role, or higher studies competitive exams.',
      rishta: 'A new chapter in love or marriage prospects. Approach with an open, trusting heart.',
      dhan: 'Financial opportunities will arrive through unexpected fresh ventures.',
      mantra: 'Om Namah Shivaya - Embrace new beginnings with divine confidence.'
    }
  },
  {
    id: 'magician',
    number: 'I',
    name: 'The Magician (Karmayogi / Mastery)',
    arcana: 'Major',
    element: 'Air',
    astrology: 'Mercury',
    icon: 'wand-2',
    uprightKeywords: ['Manifestation', 'Skill & Talent', 'Resourcefulness', 'Willpower', 'Action'],
    reversedKeywords: ['Unused Potential', 'Deception', 'Lack of Focus', 'Trickery'],
    uprightMeaning: 'You possess all the tools, skills, and energy needed to manifest your dreams into reality. Put your karma into motion.',
    reversedMeaning: 'Beware of misleading promises from others or underestimating your own capabilities.',
    indianInsight: {
      karma: 'Your actions (Karma) create your destiny (Bhagya). Act with discipline.',
      career: 'High chance of success in job interviews, exams, and leadership presentations.',
      rishta: 'Clear communication will resolve misunderstanding and bring deep connection.',
      dhan: 'Your talent will generate direct financial rewards and prosperity.',
      mantra: 'Yogah Karmasu Kausalam - Excellence in action is true Yoga.'
    }
  },
  {
    id: 'high_priestess',
    number: 'II',
    name: 'The High Priestess (Antaratma / Inner Intuition)',
    arcana: 'Major',
    element: 'Water',
    astrology: 'Moon',
    icon: 'moon',
    uprightKeywords: ['Inner Voice', 'Divine Wisdom', 'Subconscious Mind', 'Sacred Knowledge', 'Patience'],
    reversedKeywords: ['Ignored Intuition', 'Secrets', 'Superficiality', 'Confusion'],
    uprightMeaning: 'Listen closely to your gut feeling (Antaratma). Silent contemplation and meditation will reveal the answers you seek.',
    reversedMeaning: 'Do not ignore red flags in personal or financial matters due to external noise.',
    indianInsight: {
      karma: 'Meditate and seek divine inner clarity before making life-altering decisions.',
      career: 'Research thoroughly behind the scenes before making public announcements.',
      rishta: 'Trust your feelings regarding match proposals (Kundali/Rishta match).',
      dhan: 'Keep financial plans private until they mature.',
      mantra: 'Om Shanti Shanti Shanti - Quiet mind brings divine light.'
    }
  },
  {
    id: 'empress',
    number: 'III',
    name: 'The Empress (Annapurna / Abundance)',
    arcana: 'Major',
    element: 'Earth',
    astrology: 'Venus',
    icon: 'crown',
    uprightKeywords: ['Abundance', 'Fertility', 'Nurturing', 'Family Harmony', 'Creativity'],
    reversedKeywords: ['Creative Block', 'Over-dependence', 'Neglect', 'Domestic Tension'],
    uprightMeaning: 'The blessings of Mother Nature and Annapurna surround you. Wealth, creation, and family joy are flourishing.',
    reversedMeaning: 'Take care of your personal health and nourish family relationships with gentle care.',
    indianInsight: {
      karma: 'Generosity and nurturing others will attract endless blessings.',
      career: 'Creative projects and agricultural/property investments yield lush results.',
      rishta: 'Deep family harmony, celebration, and joy in household.',
      dhan: 'Steady growth of wealth, luxury, and home comfort (Griha Lakshmi).',
      mantra: 'Om Shreem Mahalakshmiyei Namah - Flow of abundance.'
    }
  },
  {
    id: 'emperor',
    number: 'IV',
    name: 'The Emperor (Raja / Discipline & Structure)',
    arcana: 'Major',
    element: 'Fire',
    astrology: 'Aries',
    icon: 'shield',
    uprightKeywords: ['Authority', 'Structure', 'Paternal Guidance', 'Stability', 'Discipline'],
    reversedKeywords: ['Rigidity', 'Tyranny', 'Lack of Control', 'Authority Conflict'],
    uprightMeaning: 'Establish strong boundaries, order, and discipline. Paternal wisdom or elder advice will guide your path.',
    reversedMeaning: 'Avoid ego clashes with elders or seniors at work.',
    indianInsight: {
      karma: 'Discipline and duty (Dharma) bring honor and long-term peace.',
      career: 'Government jobs, administrative authority, or management promotions favor you.',
      rishta: 'Strong commitment, security, and guidance from respected family elders.',
      dhan: 'Solid, secure long-term investments like real estate or gold.',
      mantra: 'Dharmo Rakshati Rakshitah - Dharma protects those who protect it.'
    }
  },
  {
    id: 'hierophant',
    number: 'V',
    name: 'The Hierophant (Guru / Tradition & Dharma)',
    arcana: 'Major',
    element: 'Earth',
    astrology: 'Taurus',
    icon: 'book-open',
    uprightKeywords: ['Spiritual Teacher', 'Tradition', 'Social Values', 'Customs', 'Mentorship'],
    reversedKeywords: ['Unconventional Path', 'Rebellion', 'Dogma', 'Broken Rules'],
    uprightMeaning: 'Honor timeless traditions, seek wisdom from a respected mentor or Guru, and uphold ethical values.',
    reversedMeaning: 'Question outdated rules if they hinder your authentic spiritual and personal progress.',
    indianInsight: {
      karma: 'Guru Kripa (grace of teacher) opens doors that effort alone cannot.',
      career: 'Success in traditional institutions, education, law, or established corporations.',
      rishta: 'Traditional marriage rituals, family blessings, and sacred union.',
      dhan: 'Follow proven, ethical paths for financial stability rather than shortcuts.',
      mantra: 'Gurur Brahma Gurur Vishnu Gurur Devo Maheshwarah.'
    }
  },
  {
    id: 'lovers',
    number: 'VI',
    name: 'The Lovers (Radha-Krishna / Sacred Union)',
    arcana: 'Major',
    element: 'Air',
    astrology: 'Gemini',
    icon: 'heart',
    uprightKeywords: ['Deep Connection', 'Harmony', 'Soul Alignment', 'Important Choice', 'Values'],
    reversedKeywords: ['Disharmony', 'Alignment Mismatch', 'Indecision', 'Conflict'],
    uprightMeaning: 'Sacred union of hearts and minds. Pure love, shared values, and aligned soul purpose.',
    reversedMeaning: 'Realign your personal values before making binding relationship choices.',
    indianInsight: {
      karma: 'Soulful partnerships built on mutual respect fulfill your karmic destiny.',
      career: 'Fruitful business partnerships and joint ventures with trusted colleagues.',
      rishta: 'Deep unconditional love, mutual respect, and ideal life partnership.',
      dhan: 'Balanced decision-making brings prosperous financial synergy.',
      mantra: 'Radhe Radhe - Divine harmony and unconditional love.'
    }
  },
  {
    id: 'chariot',
    number: 'VII',
    name: 'The Chariot (Rath / Willpower & Victory)',
    arcana: 'Major',
    element: 'Water',
    astrology: 'Cancer',
    icon: 'compass',
    uprightKeywords: ['Determination', 'Victory over Obstacles', 'Focus', 'Travel', 'Self-Control'],
    reversedKeywords: ['Loss of Direction', 'Impatience', 'Roadblocks', 'Aggression'],
    uprightMeaning: 'Channel your inner energy like Arjuna guiding his chariot. Overcome challenges through unwavering focus.',
    reversedMeaning: 'Regain control over wild emotions; slow down before charging forward.',
    indianInsight: {
      karma: 'Mastery over your senses (Indriyas) guarantees ultimate victory.',
      career: 'Cracking competitive exams, achieving ambitious targets, travel for work.',
      rishta: 'Steering through family opposition to achieve relationship stability.',
      dhan: 'Financial momentum building through focused hard work.',
      mantra: 'Vijayi Bhava - May victory be yours through steadfast effort.'
    }
  },
  {
    id: 'strength',
    number: 'VIII',
    name: 'Strength (Narsimha / Courage & Compassion)',
    arcana: 'Major',
    element: 'Fire',
    astrology: 'Leo',
    icon: 'flame',
    uprightKeywords: ['Inner Courage', 'Patience', 'Compassion', 'Gentle Power', 'Endurance'],
    reversedKeywords: ['Self-Doubt', 'Raw Anger', 'Weakness', 'Impatience'],
    uprightMeaning: 'True strength comes from gentle compassion and patient endurance, not brute force.',
    reversedMeaning: 'Do not let temporary self-doubt undermine your resilient spirit.',
    indianInsight: {
      karma: 'Patience (Dhairya) and kindness tame even the fiercest opposition.',
      career: 'Navigating difficult office politics gracefully without losing your temper.',
      rishta: 'Gentle understanding heals long-standing domestic friction.',
      dhan: 'Steady perseverance builds durable prosperity.',
      mantra: 'Om Sri Ramaya Namah - Courage born of righteousness.'
    }
  },
  {
    id: 'hermit',
    number: 'IX',
    name: 'The Hermit (Rishi / Self-Reflection)',
    arcana: 'Major',
    element: 'Earth',
    astrology: 'Virgo',
    icon: 'sun',
    uprightKeywords: ['Solitude', 'Inner Light', 'Introspection', 'Seeking Truth', 'Self-Reliance'],
    reversedKeywords: ['Isolation', 'Loneliness', 'Withdrawal', 'Ignoring Guidance'],
    uprightMeaning: 'Step back from worldly chatter. Your internal lamp (Diya) carries all the light you need.',
    reversedMeaning: 'Do not isolate yourself completely from well-meaning family and loved ones.',
    indianInsight: {
      karma: 'Self-inquiry (Atma Chintan) clears confusion and elevates your soul.',
      career: 'Great phase for deep study, skill upgrade, and philosophical focus.',
      rishta: 'Take time to understand your own needs before committing to external demands.',
      dhan: 'Prudent spending and introspection regarding material desires.',
      mantra: 'Tamaso Ma Jyotir Gamaya - Lead me from darkness to light.'
    }
  },
  {
    id: 'wheel_of_fortune',
    number: 'X',
    name: 'Wheel of Fortune (Kachakra / Cycles of Fate)',
    arcana: 'Major',
    element: 'Fire',
    astrology: 'Jupiter',
    icon: 'repeat',
    uprightKeywords: ['Good Luck', 'Karma Cycle', 'Turning Point', 'Destiny', 'Positive Change'],
    reversedKeywords: ['Temporary Setback', 'Resistance to Change', 'Bad Timing'],
    uprightMeaning: 'The wheel of Karma turns in your favor! Auspicious luck and breakthrough opportunities arrive.',
    reversedMeaning: 'Remember that low phases are temporary. The wheel will inevitably rise again.',
    indianInsight: {
      karma: 'Past good deeds (Punya) are bearing sweet fruit now.',
      career: 'Unexpected job offer, promotion, or sudden positive breakthrough.',
      rishta: 'A serendipitous meeting or sudden blessing in marital life.',
      dhan: 'Sudden financial gain or resolution of old debts.',
      mantra: 'Om Namo Bhagavate Vasudevaya - Alignment with cosmic cycle.'
    }
  },
  {
    id: 'justice',
    number: 'XI',
    name: 'Justice (Nyaya / Truth & Karma)',
    arcana: 'Major',
    element: 'Air',
    astrology: 'Libra',
    icon: 'scale',
    uprightKeywords: ['Fairness', 'Truth', 'Legal Resolution', 'Karmic Balance', 'Accountability'],
    reversedKeywords: ['Unfairness', 'Bias', 'Avoiding Responsibility', 'Legal Delay'],
    uprightMeaning: 'Truth and justice prevail. Act with integrity and the outcome will be perfectly balanced.',
    reversedMeaning: 'Ensure complete honesty in paperwork, contracts, and personal agreements.',
    indianInsight: {
      karma: 'Satyam Eva Jayate - Truth alone triumphs.',
      career: 'Favorable resolution of contract negotiations, performance reviews, or exams.',
      rishta: 'Honest conversation creates mutual respect and fair distribution of domestic effort.',
      dhan: 'Legal property or tax matters resolve fairly.',
      mantra: 'Satyam Eva Jayate - Truth brings victory.'
    }
  },
  {
    id: 'sun_card',
    number: 'XIX',
    name: 'The Sun (Surya Dev / Radiance & Success)',
    arcana: 'Major',
    element: 'Fire',
    astrology: 'Sun',
    icon: 'sun-medium',
    uprightKeywords: ['Joy & Success', 'Vitality', 'Glory', 'Warmth', 'Confidence'],
    reversedKeywords: ['Temporary Clouding', 'Over-confidence', 'Delayed Celebration'],
    uprightMeaning: 'Surya Dev shines brightly upon you! Universal warmth, success, health, and pure joy illuminate your life.',
    reversedMeaning: 'Stay optimistic; clouds are temporary and cannot dim your inner radiance.',
    indianInsight: {
      karma: 'Radiance of pure spirit dispels all negativity.',
      career: 'Top-tier recognition, rewards, leadership acclaim, and career glory.',
      rishta: 'Warm, joyful family life, celebrations, and radiant love.',
      dhan: 'Flourishing wealth and abundant physical vitality.',
      mantra: 'Om Suryaya Namah - Radiant energy and supreme success.'
    }
  },
  {
    id: 'world_card',
    number: 'XXI',
    name: 'The World (Vishwa / Fulfillment & Completion)',
    arcana: 'Major',
    element: 'Earth',
    astrology: 'Saturn',
    icon: 'globe',
    uprightKeywords: ['Completion', 'Wholeness', 'Global Travel', 'Fulfillment', 'Success'],
    reversedKeywords: ['Incomplete Task', 'Lack of Closure', 'Shortcuts'],
    uprightMeaning: 'You have reached a magnificent milestone. A major goal is completed with honor and cosmic blessing.',
    reversedMeaning: 'Finish the last few remaining steps with diligence to claim your complete victory.',
    indianInsight: {
      karma: 'Karmic cycle completed successfully. Celebration of fulfillment.',
      career: 'Successful project delivery, overseas study/job opportunities, global success.',
      rishta: 'Complete sense of peace and harmony in life partnership.',
      dhan: 'Total financial security and achievement of major life goals.',
      mantra: 'Vasudhaiva Kutumbakam - The world is one loving family.'
    }
  },

  // ----------------------- MINOR ARCANA HIGHLIGHTS -----------------------
  {
    id: 'ace_of_wands',
    number: 'Ace',
    name: 'Ace of Wands (Agni Prerana / Creative Spark)',
    arcana: 'Minor - Wands',
    element: 'Fire',
    astrology: 'Fire Signs',
    icon: 'flame',
    uprightKeywords: ['Inspiration', 'New Business Spark', 'Energy', 'Passion'],
    reversedKeywords: ['Delayed Start', 'Lack of Passion', 'Creative Block'],
    uprightMeaning: 'A powerful surge of creative energy and enterprise. Ideal time to launch new business ventures.',
    reversedMeaning: 'Ground your ideas into concrete action before starting.',
    indianInsight: {
      karma: 'Agni (fire of enthusiasm) ignites your destiny.',
      career: 'Startup idea launch, new job role, fresh assignment.',
      rishta: 'Passionate new romantic connection or renewed excitement in marriage.',
      dhan: 'Lucrative new business venture beginnings.',
      mantra: 'Om Agnaye Namah.'
    }
  },
  {
    id: 'ten_of_pentacles',
    number: '10',
    name: 'Ten of Pentacles (Sampatti / Family Wealth)',
    arcana: 'Minor - Pentacles',
    element: 'Earth',
    astrology: 'Virgo',
    icon: 'coins',
    uprightKeywords: ['Generational Wealth', 'Family Legacy', 'Long-term Security', 'Property'],
    reversedKeywords: ['Financial Dispute', 'Family Inheritance Tension'],
    uprightMeaning: 'Enduring family prosperity, ancestral blessings, property security, and financial peace.',
    reversedMeaning: 'Handle family inheritance or joint business discussions with diplomacy.',
    indianInsight: {
      karma: 'Blessings of ancestors (Pitr Kripa) bring physical prosperity.',
      career: 'Stable career in family business or long-standing respected corporate firm.',
      rishta: 'Generational family support, lavish celebration, and harmonious joint family.',
      dhan: 'Buying property, gold, or securing long-term family estate.',
      mantra: 'Om Kuberaya Namah - Divine wealth and stability.'
    }
  },
  {
    id: 'three_of_cups',
    number: '3',
    name: 'Three of Cups (Utsav / Festive Celebration)',
    arcana: 'Minor - Cups',
    element: 'Water',
    astrology: 'Cancer',
    icon: 'glass-water',
    uprightKeywords: ['Celebration', 'Friendship', 'Gathering', 'Festive Joy', 'Community'],
    reversedKeywords: ['Over-indulgence', 'Gossip', 'Social Exhaustion'],
    uprightMeaning: 'Time for auspicious celebrations, weddings, festival gatherings, and joyful reunions with friends.',
    reversedMeaning: 'Keep your personal happiness private from envious acquaintances.',
    indianInsight: {
      karma: 'Sharing happiness amplifies divine grace.',
      career: 'Team success, work celebrations, and supportive peer circle.',
      rishta: 'Festive family get-togethers, engagement, wedding ceremonies.',
      dhan: 'Prosperity shared through charity and feast celebrations.',
      mantra: 'Anandoham - Infinite divine joy.'
    }
  },
  {
    id: 'six_of_swords',
    number: '6',
    name: 'Six of Swords (Yatra / Peaceful Transition)',
    arcana: 'Minor - Swords',
    element: 'Air',
    astrology: 'Aquarius',
    icon: 'ship',
    uprightKeywords: ['Moving to Calmer Waters', 'Travel', 'Healing', 'Relocation'],
    reversedKeywords: ['Unresolved Baggage', 'Travel Delay', 'Emotional Resistance'],
    uprightMeaning: 'Leaving rough turbulent times behind and moving toward calmer, peaceful shores and new environments.',
    reversedMeaning: 'Release past emotional grudges so you can travel light into your bright future.',
    indianInsight: {
      karma: 'Smooth transition from difficult karma to serene dharma.',
      career: 'Relocation for work, city change, or peaceful department transfer.',
      rishta: 'Gradual healing after past conflicts; peace restored in relationship.',
      dhan: 'Steady recovery from past financial losses.',
      mantra: 'Om Gam Ganapataye Namah - Removal of travel obstacles.'
    }
  }
];

export const GET_CARD_BY_ID = (id) => TAROT_DECK.find(card => card.id === id) || TAROT_DECK[0];
