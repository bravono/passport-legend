export type CountryType = 'citizenship' | 'residence' | 'both';

export interface CountrySection {
  overview: string;
  benefits: string[];
  investmentOptions: Array<{
    title: string;
    amount: string;
    description: string;
  }>;
  requirements: string[];
  timeline: string;
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  type: CountryType;
  shortDescription: string;
  heroImage: string;
  sections: CountrySection;
}

export const countries: Country[] = [
  // CITIZENSHIP COUNTRIES (7)
  {
    id: 'portugal-citizenship',
    slug: 'portugal-citizenship',
    name: 'Portugal',
    type: 'citizenship',
    shortDescription: 'EU citizenship through property investment or capital transfer',
    heroImage: 'https://images.unsplash.com/photo-1555881286-ac550fedcb18?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Portugal offers a straightforward path to EU citizenship through the Golden Visa program and subsequent naturalization. Invest in real estate or transfer capital to qualify for residency, then apply for citizenship after 5 years.',
      benefits: [
        'Access to all EU member states',
        'Visa-free travel to 190+ countries',
        'Golden Visa pathway to citizenship',
        'Favorable tax regime for foreign residents',
        'World-class healthcare and education',
        'Growing tech and startup ecosystem',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€280,000+',
          description: 'Purchase property in approved regions for Golden Visa',
        },
        {
          title: 'Capital Transfer',
          amount: '€1,000,000+',
          description: 'Direct capital investment in Portuguese business or financial institutions',
        },
        {
          title: 'Job Creation',
          amount: '€500,000+',
          description: 'Invest in creating jobs for Portuguese residents',
        },
      ],
      requirements: [
        'Valid passport',
        'Criminal background check',
        'Proof of funds',
        'Health insurance',
        'Residence in Portugal for 5 years to apply for citizenship',
      ],
      timeline: '2-3 months for visa approval, 5 years to citizenship eligibility',
    },
  },
  {
    id: 'malta-citizenship',
    slug: 'malta-citizenship',
    name: 'Malta',
    type: 'citizenship',
    shortDescription: 'EU citizenship through exceptional investment',
    heroImage: 'https://images.unsplash.com/photo-1497573014770-7580244fdf52?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Malta offers one of the fastest citizenship-by-investment programs in Europe. Invest in property, government bonds, and make a charitable donation to gain Maltese (EU) citizenship.',
      benefits: [
        'EU citizenship in 12 months',
        'Complete visa freedom (190+ countries)',
        'No residency requirement',
        'Citizenship for family members',
        'Low corporate tax rates (6%)',
        'Financial services hub of Europe',
      ],
      investmentOptions: [
        {
          title: 'Full Program',
          amount: '€600,000+',
          description: '€250,000 in government bonds + €350,000 property + €10,000 donation',
        },
        {
          title: 'Accelerated Program',
          amount: '€750,000+',
          description: 'Fast-track to citizenship in 12 months',
        },
      ],
      requirements: [
        'Minimum age 18',
        'Valid passport',
        'Proof of funds',
        'Background clearance',
        'Investment commitment for min. 5 years',
      ],
      timeline: '12 months to full citizenship',
    },
  },
  {
    id: 'cyprus-citizenship',
    slug: 'cyprus-citizenship',
    name: 'Cyprus',
    type: 'citizenship',
    shortDescription: 'EU citizenship through real estate and business investment',
    heroImage: 'https://images.unsplash.com/photo-1520237752020-6f89d3d1b0aa?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Cyprus provides EU citizenship through strategic real estate and business investments. Enjoy Mediterranean lifestyle with EU benefits and favorable tax treatment.',
      benefits: [
        'EU/EEA access',
        'Mediterranean lifestyle',
        'Competitive property prices',
        'Attractive tax incentives',
        'Stable political environment',
        'Strong offshore banking sector',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€500,000+',
          description: 'Purchase residential or commercial property',
        },
        {
          title: 'Business Investment',
          amount: '€300,000+',
          description: 'Invest in local business or startup',
        },
      ],
      requirements: [
        'Proof of legal funds',
        'Health and criminal clearance',
        'Valid passport',
        'Residence in Cyprus',
      ],
      timeline: '12-24 months for processing',
    },
  },
  {
    id: 'dominica-citizenship',
    slug: 'dominica-citizenship',
    name: 'Dominica',
    type: 'citizenship',
    shortDescription: 'Caribbean citizenship by investment program',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Dominica offers one of the most affordable citizenship-by-investment programs globally. Gain visa-free travel to 140+ countries, including Schengen and UK access.',
      benefits: [
        'Visa-free to 140+ countries including Schengen',
        'No residency requirement',
        'Fast processing (3-4 months)',
        'Affordable investment amounts',
        'Citizenship for family members',
        'No taxes on worldwide income',
      ],
      investmentOptions: [
        {
          title: 'Economic Diversification Fund',
          amount: '$250,000',
          description: 'Non-refundable contribution to national development',
        },
        {
          title: 'Real Estate Investment',
          amount: '$200,000+',
          description: 'Purchase approved real estate development',
        },
      ],
      requirements: [
        'Age 18+',
        'Valid passport',
        'Proof of legitimate funds',
        'Health and police clearance',
      ],
      timeline: '3-4 months from application to citizenship',
    },
  },
  {
    id: 'grenada-citizenship',
    slug: 'grenada-citizenship',
    name: 'Grenada',
    type: 'citizenship',
    shortDescription: 'Caribbean gateway with E-2 visa treaty access',
    heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Grenada is unique for offering citizenship with E-2 visa treaty access to the USA. Ideal for entrepreneurs seeking US business visa pathway.',
      benefits: [
        'E-2 US investor visa eligibility',
        'Access to 140+ countries visa-free',
        'Caribbean Tax Benefits',
        'Fast processing',
        'Family inclusion',
        'No prior residency needed',
      ],
      investmentOptions: [
        {
          title: 'Economic Diversification Fund',
          amount: '$235,000',
          description: 'Non-refundable contribution',
        },
        {
          title: 'Real Estate Investment',
          amount: '$220,000+',
          description: 'Approved property development investment',
        },
      ],
      requirements: [
        'Age 18+',
        'Clean background',
        'Valid passport',
        'Proof of funds',
        'Health insurance',
      ],
      timeline: '4-6 months',
    },
  },
  {
    id: 'st-lucia-citizenship',
    slug: 'st-lucia-citizenship',
    name: 'Saint Lucia',
    type: 'citizenship',
    shortDescription: 'Caribbean citizenship for savvy investors',
    heroImage: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Saint Lucia offers a premium citizenship-by-investment program with strong due diligence and diverse investment options. Access 140+ countries visa-free.',
      benefits: [
        'Visa-free to 140+ countries',
        'No residency requirement',
        'Premium program with high selectivity',
        'Fast processing (90-120 days)',
        'Citizenship by descent available',
        'Competitive pricing',
      ],
      investmentOptions: [
        {
          title: 'National Economic Fund',
          amount: '$300,000',
          description: 'Government fund contribution',
        },
        {
          title: 'Real Estate Development',
          amount: '$300,000+',
          description: 'Approved development project investment',
        },
      ],
      requirements: [
        'Age 18+',
        'Valid travel document',
        'Source of funds documentation',
        'Police and health clearance',
      ],
      timeline: '90-120 days',
    },
  },
  {
    id: 'mauritius-citizenship',
    slug: 'mauritius-citizenship',
    name: 'Mauritius',
    type: 'citizenship',
    shortDescription: 'African gateway with strong tax treaty network',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Mauritius combines African growth potential with first-world infrastructure. Gain citizenship through business investment and join a stable, prosperous nation.',
      benefits: [
        'Access to 80+ countries visa-free',
        'Extensive tax treaty network',
        'Strategic location for Africa trade',
        'Stable democracy and economy',
        'High quality of life',
        'Growing fintech ecosystem',
      ],
      investmentOptions: [
        {
          title: 'Business Investment',
          amount: '₨5,000,000 (~$120,000)',
          description: 'Start or invest in local business',
        },
        {
          title: 'Property Investment',
          amount: '₨3,000,000+ (~$72,000+)',
          description: 'Real estate development project',
        },
      ],
      requirements: [
        'Business plan or investment proposal',
        'Financial proof',
        'Valid passport',
        'Background clearance',
        'Health clearance',
      ],
      timeline: '6-12 months',
    },
  },

  // RESIDENCE COUNTRIES (13)
  {
    id: 'spain-residence',
    slug: 'spain-residence',
    name: 'Spain',
    type: 'residence',
    shortDescription: 'EU residency through real estate investment',
    heroImage: 'https://images.unsplash.com/photo-1562883676-8c6fb65b76d2?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Spain offers a popular Golden Visa program for non-EU investors. Secure residency, travel freely across the EU, and enjoy Mediterranean lifestyle.',
      benefits: [
        'EU residency and Schengen access',
        'Path to citizenship after 10 years',
        'Free healthcare system',
        'World-class education',
        'Strong real estate market',
        'Rich culture and lifestyle',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€500,000',
          description: 'Purchase property in Spain',
        },
        {
          title: 'Business Investment',
          amount: '€1,000,000',
          description: 'Create jobs or business expansion',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Health insurance',
        'Criminal background check',
        'Residency plan',
      ],
      timeline: '1-2 months',
    },
  },
  {
    id: 'ireland-residence',
    slug: 'ireland-residence',
    name: 'Ireland',
    type: 'residence',
    shortDescription: 'English-speaking EU country with strong economy',
    heroImage: 'https://images.unsplash.com/photo-1542967408-d9d1bb76f74d?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Ireland offers residency through investment in real estate, business, or capital transfers. English-speaking EU nation with thriving tech sector.',
      benefits: [
        'English-speaking country',
        'EU/Schengen membership',
        'Tech hub of Europe',
        'Strong education system',
        'Path to citizenship',
        'Favorable business climate',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€1,000,000+',
          description: 'Property investment across Ireland',
        },
        {
          title: 'Capital Investment',
          amount: '€500,000+',
          description: 'Direct investment in Irish business',
        },
      ],
      requirements: [
        'Proof of funds',
        'Business plan (if applicable)',
        'Health and police clearance',
        'Valid passport',
      ],
      timeline: '2-4 months',
    },
  },
  {
    id: 'italy-residence',
    slug: 'italy-residence',
    name: 'Italy',
    type: 'residence',
    shortDescription: 'Historic culture with EU benefits',
    heroImage: 'https://images.unsplash.com/photo-1552832860-cfb67165eaf0?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Italy offers residency for investors in real estate and business. Experience rich history, art, and cuisine while enjoying EU benefits.',
      benefits: [
        'EU/Schengen access',
        'Rich cultural heritage',
        'Excellent healthcare',
        'Strategic location',
        'Real estate value',
        'Quality of life',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€500,000+',
          description: 'Property in Italy',
        },
        {
          title: 'Business Investment',
          amount: '€500,000+',
          description: 'Italian business investment',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Background check',
        'Health insurance',
        'Housing arrangement',
      ],
      timeline: '2-3 months',
    },
  },
  {
    id: 'greece-residence',
    slug: 'greece-residence',
    name: 'Greece',
    type: 'residence',
    shortDescription: 'Mediterranean paradise with affordable entry',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Greece offers affordable Golden Visa residency through real estate investment. Enjoy Mediterranean lifestyle with EU benefits.',
      benefits: [
        'EU/Schengen residency',
        'Affordable investment threshold',
        'Beautiful Mediterranean climate',
        'Rich history and culture',
        'Real estate appreciation potential',
        'Growing tourism economy',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '€250,000',
          description: 'Property investment in Greece',
        },
        {
          title: 'Premium Property',
          amount: '€500,000+',
          description: 'High-value property investment',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Police clearance',
        'Health insurance',
        'Property ownership',
      ],
      timeline: '30-60 days',
    },
  },
  {
    id: 'turkey-residence',
    slug: 'turkey-residence',
    name: 'Turkey',
    type: 'residence',
    shortDescription: 'Bridge between Europe and Asia',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Turkey offers accessible residency through real estate investment. Strategic location bridging Europe and Asia with rich cultural heritage.',
      benefits: [
        'Affordable real estate prices',
        'Easy residency process',
        'Strategic geopolitical location',
        'Strong tourism potential',
        'Growing economy',
        'Cultural richness',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '$250,000',
          description: 'Property purchase in Turkey',
        },
        {
          title: 'Business Investment',
          amount: '$500,000+',
          description: 'Direct business investment',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Police clearance',
        'Health insurance',
        'Bank account in Turkey',
      ],
      timeline: '30-45 days',
    },
  },
  {
    id: 'usa-residence',
    slug: 'usa-residence',
    name: 'United States',
    type: 'residence',
    shortDescription: 'Global superpower with diverse economy',
    heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'USA offers residency through EB-5 investor visa program. Invest in job creation and secure green card path for you and your family.',
      benefits: [
        'Green card pathway',
        'World\'s largest economy',
        'Diverse career opportunities',
        'World-class education',
        'Strong legal protections',
        'Immigration pathways',
      ],
      investmentOptions: [
        {
          title: 'Regional Center Investment',
          amount: '$1,050,000',
          description: 'Targeted employment area investment',
        },
        {
          title: 'Direct Investment',
          amount: '$1,050,000',
          description: 'Direct business investment',
        },
      ],
      requirements: [
        'Source of funds documentation',
        'Background clearance',
        'Medical examination',
        'Valid passport',
        'Investment commitment',
      ],
      timeline: '2-3 years',
    },
  },
  {
    id: 'canada-residence',
    slug: 'canada-residence',
    name: 'Canada',
    type: 'residence',
    shortDescription: 'High quality of life, stable economy',
    heroImage: 'https://images.unsplash.com/photo-1519238263670-640748ee32e9?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Canada offers multiple pathways to permanent residency through business investment. Known for high quality of life and stable government.',
      benefits: [
        'Permanent residency pathway',
        'High quality of life (ranking)',
        'Excellent healthcare and education',
        'Stable government',
        'Diverse economy',
        'Family-friendly policies',
      ],
      investmentOptions: [
        {
          title: 'Business Investment',
          amount: 'CAD $300,000+',
          description: 'Provincial business investment',
        },
        {
          title: 'Start-up Visa',
          amount: 'USD $100,000+',
          description: 'Technology startup investment',
        },
      ],
      requirements: [
        'Business plan',
        'Proof of funds',
        'Language assessment',
        'Medical examination',
        'Police clearance',
      ],
      timeline: '6-24 months',
    },
  },
  {
    id: 'new-zealand-residence',
    slug: 'new-zealand-residence',
    name: 'New Zealand',
    type: 'residence',
    shortDescription: 'Island paradise with strong economy',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'New Zealand offers residency through business investment and real estate. Experience world-class living standards and natural beauty.',
      benefits: [
        'High quality of life',
        'Stable government',
        'Business-friendly environment',
        'Natural beauty',
        'Strong education system',
        'Easy pathway to citizenship',
      ],
      investmentOptions: [
        {
          title: 'Business Investment',
          amount: 'NZD $3,000,000',
          description: 'New Zealand business investment',
        },
        {
          title: 'Real Estate Investment',
          amount: 'NZD $1,500,000+',
          description: 'Property investment in NZ',
        },
      ],
      requirements: [
        'Business proposal',
        'Proof of funds',
        'Health clearance',
        'Character assessment',
        'Valid passport',
      ],
      timeline: '6-12 months',
    },
  },
  {
    id: 'singapore-residence',
    slug: 'singapore-residence',
    name: 'Singapore',
    type: 'residence',
    shortDescription: 'Asian financial hub with modern infrastructure',
    heroImage: 'https://images.unsplash.com/photo-1503297537993-33cc8e1765f8?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Singapore offers business and residency pathways for entrepreneurs. Gateway to Asia with first-world standards and political stability.',
      benefits: [
        'Financial hub of Asia',
        'World-class infrastructure',
        'Political stability',
        'Favorable tax environment',
        'Strategic Asian location',
        'Business-friendly regulations',
      ],
      investmentOptions: [
        {
          title: 'Business Investment',
          amount: 'SGD $500,000+',
          description: 'Singapore business investment',
        },
        {
          title: 'Headquarter Pass',
          amount: 'Varies',
          description: 'Regional HQ establishment',
        },
      ],
      requirements: [
        'Business plan',
        'Proof of funds',
        'Education background',
        'Employment contract (if applicable)',
        'Health declaration',
      ],
      timeline: '2-4 weeks',
    },
  },
  {
    id: 'uae-residence',
    slug: 'uae-residence',
    name: 'United Arab Emirates',
    type: 'residence',
    shortDescription: 'Middle East business hub with luxury lifestyle',
    heroImage: 'https://images.unsplash.com/photo-1512453391565-e3e16f5ee98b?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'UAE offers accessible residency through business investment and real estate. Global business hub with tax advantages and modern infrastructure.',
      benefits: [
        'Business-friendly environment',
        'No personal income tax',
        'Luxury lifestyle',
        'Strategic Middle East location',
        'Real estate growth potential',
        'Safe and secure',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: 'AED 1,000,000+ (~$270,000+)',
          description: 'Property purchase in UAE',
        },
        {
          title: 'Business Setup',
          amount: 'Varies',
          description: 'Company establishment with capital',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Employment contract or business license',
        'Health insurance',
        'Rental contract',
      ],
      timeline: '2-4 weeks',
    },
  },
  {
    id: 'bahamas-residence',
    slug: 'bahamas-residence',
    name: 'Bahamas',
    type: 'residence',
    shortDescription: 'Caribbean island paradise',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Bahamas offers residency through real estate investment and business. Tropical paradise with no personal income tax.',
      benefits: [
        'No personal income tax',
        'Beautiful tropical climate',
        'English-speaking country',
        'Caribbean lifestyle',
        'Real estate opportunity',
        'Safe community',
      ],
      investmentOptions: [
        {
          title: 'Real Estate Investment',
          amount: '$250,000+',
          description: 'Property purchase in Bahamas',
        },
        {
          title: 'Business Investment',
          amount: '$500,000+',
          description: 'Business establishment',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Background clearance',
        'Health insurance',
        'Housing arrangement',
      ],
      timeline: '4-8 weeks',
    },
  },
  {
    id: 'thailand-residence',
    slug: 'thailand-residence',
    name: 'Thailand',
    type: 'residence',
    shortDescription: 'Southeast Asian destination with low cost of living',
    heroImage: 'https://images.unsplash.com/photo-1568876694728-451bb28ff23a?w=1200&h=600&fit=crop',
    sections: {
      overview:
        'Thailand offers various long-term visa options including elite residency program. Low cost of living with vibrant culture and business opportunities.',
      benefits: [
        'Affordable cost of living',
        'Long-term visa options',
        'Business opportunities',
        'Rich culture and cuisine',
        'Healthcare access',
        'Tax-friendly environment',
      ],
      investmentOptions: [
        {
          title: 'Thailand Elite Visa',
          amount: 'THB 2,000,000+ (~$56,000+)',
          description: 'Long-term membership and residency',
        },
        {
          title: 'Business Investment',
          amount: 'THB 10,000,000+ (~$280,000+)',
          description: 'Thai business investment',
        },
      ],
      requirements: [
        'Valid passport',
        'Proof of funds',
        'Health insurance',
        'Background clearance',
        'Hotel and visa application',
      ],
      timeline: '4-12 weeks',
    },
  },
];

// Utility functions
export function getCountriesByType(type: CountryType): Country[] {
  if (type === 'both') {
    return countries;
  }
  return countries.filter((country) => country.type === type || country.type === 'both');
}

export function getCitizenshipCountries(): Country[] {
  return getCountriesByType('citizenship');
}

export function getResidenceCountries(): Country[] {
  return getCountriesByType('residence');
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}

export function getCountryById(id: string): Country | undefined {
  return countries.find((country) => country.id === id);
}

export function getFeaturedCountries(count: number = 3): Country[] {
  return countries.slice(0, count);
}
