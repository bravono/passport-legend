export type CountryType = "citizenship" | "residence" | "both";
interface InvestmentOption {
  title: string;
  amount: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface QuickFact {
  label: string;
  value: string;
  description?: string;
}

export interface CountrySection {
  overview: string;
  benefits: string[];
  investmentOptions: InvestmentOption[];
  requirements: string[];
  timeline: string;
  process?: ProcessStep[];
  eligibility?: string[];
  faqs?: FAQ[];
  quickFacts?: QuickFact[];
  about?: string;
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  type: CountryType;
  shortDescription: string;
  heroImage: string;
  brochureUrl?: string;
  sections: CountrySection;
}

export const countries: Country[] = [
  {
    id: "st kitts and nevis-citizenship",
    slug: "st kitts and nevis-citizenship",
    name: "St Kitts & Nevis",
    type: "citizenship",
    shortDescription:
      "Premium citizenship by investment program in St Kitts & Nevis",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1nThJ1h58EtFl9kQrDA2X7fe-IqqQjHfG",
    sections: {
      overview:
        "St Kitts & Nevis offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "St Kitts & Nevis is a dual-island Caribbean nation known for its stunning beaches and lush volcanic landscapes. As one of the oldest and most respected citizenship programs, it offers a high standard of living, political stability, and a tropical climate perfect for those seeking a peaceful island lifestyle.",
    },
  },
  {
    id: "granada-citizenship",
    slug: "granada-citizenship",
    name: "Granada",
    type: "citizenship",
    shortDescription: "Premium citizenship by investment program in Granada",
    heroImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1ZZsSI6QxLLAiLurYgTT1zRcOAxGMJ5BI",
    sections: {
      overview:
        "Granada offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Known as the 'Spice Isle,' Granada is a picturesque Caribbean state with a growing economy and a high level of safety. It offers unique access to the USA through the E-2 Investor Visa treaty, making it a strategic choice for global entrepreneurs. The islands boast friendly locals, English as the official language, and a vibrant culture.",
    },
  },
  {
    id: "saudi arabia-citizenship",
    slug: "saudi arabia-citizenship",
    name: "Saudi Arabia",
    type: "citizenship",
    shortDescription:
      "Premium citizenship by investment program in Saudi Arabia",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Saudi Arabia offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Saudi Arabia is a rapidly modernizing nation at the heart of the Middle East. With its 'Vision 2030' initiative, the Kingdom is diversifying its economy and opening up to global investment and tourism. It offers a unique blend of ancient heritage, ultra-modern infrastructure, and a high quality of life for professionals and investors.",
    },
  },
  {
    id: "antigua and barbuda-citizenship",
    slug: "antigua and barbuda-citizenship",
    name: "Antigua & Barbuda",
    type: "citizenship",
    shortDescription:
      "Caribbean citizenship with fast processing and global mobility",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1VS4EWV7c3zdBAj_cChK3n60Rp5RxEaE4",
    sections: {
      overview:
        "The Antigua and Barbuda Citizenship by Investment Program (CIP) was established following the Citizenship by Investment Act of 2013. It offers a straightforward and efficient path to a second citizenship in a beautiful Caribbean twin-island nation, providing investors with enhanced global mobility and financial freedom.",
      benefits: [
        "Visa-free access to 160+ countries, including the Schengen Area, UK, Hong Kong, and Singapore.",
        "Lifelong citizenship that is transferable to future generations.",
        "Dual citizenship is allowed, with no requirement to renounce your current nationality.",
        "No taxes on worldwide income, inheritance, or capital gains for non-residents.",
        "Minimal residency requirement of only 5 days within the first 5 years.",
        "Fast processing time, with citizenship often granted within 3 to 6 months.",
      ],
      investmentOptions: [
        {
          title: "National Development Fund (NDF)",
          amount: "$230,000",
          description:
            "A one-time non-refundable contribution to the government fund for a family of up to four.",
        },
        {
          title: "Real Estate Investment",
          amount: "$300,000",
          description:
            "Investment in a government-approved real estate project, which must be held for at least five years.",
        },
        {
          title: "University of the West Indies (UWI) Fund",
          amount: "$260,000",
          description:
            "A contribution option specifically for large families of six or more people.",
        },
      ],
      requirements: [
        "Main applicant must be at least 18 years old.",
        "Provide evidence of the source of investment funds.",
        "Possess a clean criminal record and pass due diligence checks.",
        "Submit a medical certificate confirming good health.",
        "Include eligible family members (spouse, children, and parents).",
      ],
      timeline: "3 - 6 Months",
      process: [
        {
          title: "Initial Consultation",
          description:
            "Meet with our experts to assess your eligibility and choose the best investment option for your needs.",
        },
        {
          title: "Document Preparation",
          description:
            "Collect and prepare all necessary documents, including background checks and medical reports.",
        },
        {
          title: "Submission & Due Diligence",
          description:
            "Submit your application to the CIU. The government conducts thorough due diligence and background checks.",
        },
        {
          title: "Approval in Principle",
          description:
            "Receive your letter of approval. Once approved, you proceed to make the chosen investment.",
        },
        {
          title: "Final Payment & Oath",
          description:
            "Make the final investment payment and take the oath of allegiance.",
        },
        {
          title: "Passport Handover",
          description:
            "Receive your Antigua and Barbuda citizenship certificate and passport.",
        },
      ],
      eligibility: [
        "Be over 18 years of age.",
        "Have a clean criminal record.",
        "Be in good health.",
        "Provide proof of investment funds from a legal source.",
        "Meet the 5-day residency requirement over 5 years.",
      ],
      faqs: [
        {
          question: "Can I include my family in the application?",
          answer:
            "Yes, you can include your spouse, dependent children under 30, and dependent parents or grandparents over 55.",
        },
        {
          question: "How long is the passport valid for?",
          answer:
            "The initial passport is valid for 5 years and can be renewed if the residency requirement of 5 days is met.",
        },
        {
          question: "Is there an interview requirement?",
          answer:
            "While generally not required, the Citizenship by Investment Unit (CIU) reserves the right to request an interview if necessary.",
        },
      ],
      about:
        "Antigua & Barbuda is a twin-island Caribbean paradise famous for its 365 beaches—one for every day of the year. It is a stable, English-speaking democracy with a tourism-driven economy. For immigrants, it offers a welcoming community, excellent air connectivity to the US and Europe, and a tax-friendly environment.",
    },
  },
  {
    id: "nauru-citizenship",
    slug: "nauru-citizenship",
    name: "Nauru",
    type: "citizenship",
    shortDescription: "Premium citizenship by investment program in Nauru",
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1HRvMnBII8t3z4K4drLrGorV4yTfYehf_",
    sections: {
      overview:
        "Nauru offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Nauru is the world's smallest island nation, located in the Central Pacific. It offers a quiet, remote lifestyle and is currently developing its economic sectors. Immigrants will find a close-knit community and a unique opportunity to contribute to the development of a small, sovereign state in a beautiful marine environment.",
    },
  },
  {
    id: "sao tome and principe-citizenship",
    slug: "sao tome and principe-citizenship",
    name: "São Tomé & Príncipe",
    type: "citizenship",
    shortDescription:
      "Premium citizenship by investment program in São Tomé & Príncipe",
    heroImage:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1OStQXPzup_1hUI0hgxSd7j7U30hAAYgG",
    sections: {
      overview:
        "São Tomé & Príncipe offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Located in the Gulf of Guinea, this Portuguese-speaking island nation is a hidden gem of biodiversity and natural beauty. It is one of Africa's most stable and democratic countries, offering a serene environment, a growing ecotourism sector, and a warm, hospitable culture.",
    },
  },
  {
    id: "st lucia-citizenship",
    slug: "st lucia-citizenship",
    name: "St Lucia",
    type: "citizenship",
    shortDescription: "Premium citizenship by investment program in St Lucia",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1V_9XkfkeiWWtu69zpvYlp4S63bAO_d5I",
    sections: {
      overview:
        "St Lucia offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "St Lucia is a sovereign island country in the eastern Caribbean Sea, famous for the iconic Pitons mountains. It offers a diverse economy, a high standard of education and healthcare, and a vibrant social scene. It is an ideal destination for those seeking both adventure and tranquility in a stable democratic environment.",
    },
  },
  {
    id: "turkiye-citizenship",
    slug: "turkiye-citizenship",
    name: "Türkiye",
    type: "citizenship",
    shortDescription: "Bridge between Europe and Asia",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1MjY1I0j6SlNCwF0lhI7sddUQLSoViAW8",
    sections: {
      overview:
        "Turkey offers accessible residency through real estate investment. Strategic location bridging Europe and Asia with rich cultural heritage.",
      benefits: [
        "Affordable real estate prices",
        "Easy residency process",
        "Strategic geopolitical location",
        "Strong tourism potential",
        "Growing economy",
        "Cultural richness",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "$250,000",
          description: "Property purchase in Turkey",
        },
        {
          title: "Business Investment",
          amount: "$500,000+",
          description: "Direct business investment",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Police clearance",
        "Health insurance",
        "Bank account in Turkey",
      ],
      timeline: "30-45 days",
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "$250,000",
          description: "Real estate purchase in Turkey",
        },
        {
          label: "Processing Time",
          value: "30-45 Days",
          description: "Fast-track residency",
        },
        {
          label: "Location",
          value: "EU/Asia Bridge",
          description: "Strategic crossroads of Europe and Asia",
        },
        {
          label: "Income Tax",
          value: "15-40%",
          description: "Competitive tax rates",
        },
        {
          label: "Path to Citizenship",
          value: "5 Years",
          description: "After qualifying residency",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse and dependent children",
        },
      ],
      about:
        "Türkiye is a transcontinental nation bridging Europe and Asia, offering a rich tapestry of history, culture, and economic opportunity. With world-class infrastructure, a strategic location for trade, and a relatively low cost of living, it is a top destination for those seeking a cosmopolitan lifestyle in a dynamic emerging market.",
    },
  },
  {
    id: "vanuatu-citizenship",
    slug: "vanuatu-citizenship",
    name: "Vanuatu",
    type: "citizenship",
    shortDescription: "Premium citizenship by investment program in Vanuatu",
    heroImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop",
    brochureUrl: "https://drive.google.com/uc?export=download&id=1FjRYi288AiIkPqQ8naQWp6y07gAod28k",
    sections: {
      overview:
        "Vanuatu offers an attractive citizenship program for investors worldwide.",
      benefits: [
        "Global mobility",
        "Favorable tax regime",
        "High quality of life",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Vanuatu is an archipelago of 83 islands in the South Pacific, known for its pristine natural beauty and unique Melanesian culture. It is one of the happiest countries in the world, offering a peaceful, tax-free lifestyle (no personal income tax) and a welcoming environment for those looking to escape the hustle of modern cities.",
    },
  },
  {
    id: "canada-residence",
    slug: "canada-residence",
    name: "Canada",
    type: "residence",
    shortDescription: "High quality of life, stable economy",
    heroImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Canada offers multiple pathways to permanent residency through business investment. Known for high quality of life and stable government.",
      benefits: [
        "Permanent residency pathway",
        "High quality of life (ranking)",
        "Excellent healthcare and education",
        "Stable government",
        "Diverse economy",
        "Family-friendly policies",
      ],
      investmentOptions: [
        {
          title: "Business Investment",
          amount: "CAD $300,000+",
          description: "Provincial business investment",
        },
        {
          title: "Start-up Visa",
          amount: "USD $100,000+",
          description: "Technology startup investment",
        },
      ],
      requirements: [
        "Business plan",
        "Proof of funds",
        "Language assessment",
        "Medical examination",
        "Police clearance",
      ],
      timeline: "6-24 months",
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "CAD $300K",
          description: "Provincial business investment",
        },
        {
          label: "Processing Time",
          value: "6-24 Months",
          description: "Varies by province and program",
        },
        {
          label: "Program Type",
          value: "Permanent Residency",
          description: "PR card for you and family",
        },
        {
          label: "Healthcare",
          value: "Universal",
          description: "Access to Canada's public health system",
        },
        {
          label: "Path to Citizenship",
          value: "3 Years",
          description: "After permanent residency",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse and dependent children",
        },
      ],
      about:
        "Canada is globally recognized for its high quality of life, excellent public services, and multicultural society. It is a vast country with a stable economy and strong protections for civil liberties. For immigrants, Canada offers a safe, inclusive environment and world-class education and healthcare systems.",
    },
  },
  {
    id: "cyprus-residence",
    slug: "cyprus-residence",
    name: "Cyprus",
    type: "residence",
    shortDescription:
      "EU citizenship through real estate and business investment",
    heroImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Cyprus provides EU citizenship through strategic real estate and business investments. Enjoy Mediterranean lifestyle with EU benefits and favorable tax treatment.",
      benefits: [
        "EU/EEA access",
        "Mediterranean lifestyle",
        "Competitive property prices",
        "Attractive tax incentives",
        "Stable political environment",
        "Strong offshore banking sector",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€500,000+",
          description: "Purchase residential or commercial property",
        },
        {
          title: "Business Investment",
          amount: "€300,000+",
          description: "Invest in local business or startup",
        },
      ],
      requirements: [
        "Proof of legal funds",
        "Health and criminal clearance",
        "Valid passport",
        "Residence in Cyprus",
      ],
      timeline: "12-24 months for processing",
      process: [
        {
          title: "Consultation",
          description:
            "Understand your goals and choose between the real estate or business investment route.",
        },
        {
          title: "Due Diligence",
          description:
            "Preliminary checks on your background and source of funds.",
        },
        {
          title: "Investment",
          description:
            "Complete the qualifying investment in approved property or business.",
        },
        {
          title: "Application Submission",
          description:
            "File your residency application with the Civil Registry and Migration Department.",
        },
        {
          title: "Biometrics",
          description:
            "Attend a biometrics appointment at a Cyprus immigration office.",
        },
        {
          title: "Permit Issuance",
          description:
            "Receive your Cyprus residency permit, valid for life and renewable.",
        },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Hold a valid passport.",
        "Provide proof of a clean criminal record.",
        "Demonstrate legal source of investment funds.",
        "Hold comprehensive health insurance.",
      ],
      faqs: [
        {
          question: "Is Cyprus residence permanent?",
          answer:
            "Yes. The Cyprus Permanent Residency Permit is issued for life and can be passed on to family members.",
        },
        {
          question: "Can I work in Cyprus?",
          answer:
            "The standard investment permit does not grant the right to work in Cyprus, but you may be a director of a Cyprus company.",
        },
        {
          question: "How often must I visit Cyprus?",
          answer:
            "You must visit Cyprus at least once every 2 years to maintain your residency permit.",
        },
      ],
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "€300,000",
          description: "Business or real estate investment",
        },
        {
          label: "Processing Time",
          value: "12-24 Months",
          description: "From application to permit issuance",
        },
        {
          label: "Program Type",
          value: "Permanent Residency",
          description: "Lifetime permit, never expires",
        },
        {
          label: "EU/Schengen Access",
          value: "Yes",
          description: "Travel freely across the EU and Schengen zone",
        },
        {
          label: "Minimum Visit",
          value: "Once / 2 Years",
          description: "To maintain residency status",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse and minor children included",
        },
      ],
      about:
        "Cyprus is a Mediterranean island nation and EU member state known for its high level of safety, sunny climate, and strategic location. It offers a sophisticated legal and financial system, English is widely spoken, and it serves as a gateway between Europe, Africa, and the Middle East.",
    },
  },
  {
    id: "greece-residence",
    slug: "greece-residence",
    name: "Greece",
    type: "residence",
    shortDescription: "Mediterranean paradise with affordable entry",
    heroImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Greece offers affordable Golden Visa residency through real estate investment. Enjoy Mediterranean lifestyle with EU benefits.",
      benefits: [
        "EU/Schengen residency",
        "Affordable investment threshold",
        "Beautiful Mediterranean climate",
        "Rich history and culture",
        "Real estate appreciation potential",
        "Growing tourism economy",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€250,000",
          description: "Property investment in Greece",
        },
        {
          title: "Premium Property",
          amount: "€500,000+",
          description: "High-value property investment",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Police clearance",
        "Health insurance",
        "Property ownership",
      ],
      timeline: "30-60 days",
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "€250,000",
          description: "Lowest entry in the EU Golden Visa market",
        },
        {
          label: "Processing Time",
          value: "30-60 Days",
          description: "Among the fastest in the EU",
        },
        {
          label: "EU/Schengen Access",
          value: "Yes",
          description: "Travel freely across all Schengen states",
        },
        {
          label: "Path to Citizenship",
          value: "7 Years",
          description: "After legal residency",
        },
        {
          label: "Residency Required",
          value: "None",
          description: "No minimum stay requirement",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse, children, and parents",
        },
      ],
      about:
        "Greece, the birthplace of democracy, offers an unparalleled lifestyle combining ancient history with modern Mediterranean living. As an EU member, it provides access to the Schengen Area. Immigrants enjoy a relaxed pace of life, world-renowned cuisine, and a relatively low cost of living compared to Northern Europe.",
    },
  },
  {
    id: "hungary-residence",
    slug: "hungary-residence",
    name: "Hungary",
    type: "residence",
    shortDescription: "Premium residence by investment program in Hungary",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Hungary offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Hungary is a Central European nation with a rich cultural heritage and a central location within the EU. Its capital, Budapest, is one of Europe's most beautiful and vibrant cities. Hungary offers a competitive cost of living, a safe environment, and a growing tech sector, making it an attractive destination for European residency.",
    },
  },
  {
    id: "latvia-residence",
    slug: "latvia-residence",
    name: "Latvia",
    type: "residence",
    shortDescription: "Premium residence by investment program in Latvia",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Latvia offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Latvia is a Baltic nation and EU member state that offers a blend of historic charm and modern efficiency. With extensive forests, a beautiful coastline, and a highly digitalized society, it provides a high quality of life. It is an ideal choice for those seeking residency in a peaceful, innovative European country.",
    },
  },
  {
    id: "malta-residence",
    slug: "malta-residence",
    name: "Malta",
    type: "residence",
    shortDescription: "EU citizenship through exceptional investment",
    heroImage:
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Malta offers one of the fastest citizenship-by-investment programs in Europe. Invest in property, government bonds, and make a charitable donation to gain Maltese (EU) citizenship.",
      benefits: [
        "EU citizenship in 12 months",
        "Complete visa freedom (190+ countries)",
        "No residency requirement",
        "Citizenship for family members",
        "Low corporate tax rates (6%)",
        "Financial services hub of Europe",
      ],
      investmentOptions: [
        {
          title: "Full Program",
          amount: "€600,000+",
          description:
            "€250,000 in government bonds + €350,000 property + €10,000 donation",
        },
        {
          title: "Accelerated Program",
          amount: "€750,000+",
          description: "Fast-track to citizenship in 12 months",
        },
      ],
      requirements: [
        "Minimum age 18",
        "Valid passport",
        "Proof of funds",
        "Background clearance",
        "Investment commitment for min. 5 years",
      ],
      timeline: "12 months to full citizenship",
      process: [
        {
          title: "Eligibility Check",
          description:
            "Our consultants confirm your eligibility and select the optimal investment structure.",
        },
        {
          title: "Document Preparation",
          description:
            "Compile all KYC documentation, financial statements, and background checks.",
        },
        {
          title: "Application Submission",
          description:
            "Submit to Malta's Community Malta Agency (CMA) for due diligence review.",
        },
        {
          title: "Due Diligence",
          description:
            "CMA conducts a rigorous 4-tier background check process.",
        },
        {
          title: "Investment Payment",
          description:
            "Upon approval-in-principle, complete property purchase, bond subscription, and charitable donation.",
        },
        {
          title: "Certificate of Naturalisation",
          description:
            "Receive your Maltese (EU) citizenship certificate and passport within 12 months.",
        },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Hold a valid passport from an eligible country.",
        "Have no previous visa rejections from EU or Schengen states.",
        "Demonstrate a legitimate source of wealth.",
      ],
      faqs: [
        {
          question: "Is Malta in the Schengen Area?",
          answer:
            "Yes. A Maltese passport grants visa-free access to all Schengen member states plus over 180 countries globally.",
        },
        {
          question: "How long must I hold the investment?",
          answer:
            "The property must be held for a minimum of 5 years. The government bonds must also be held for 5 years.",
        },
        {
          question: "Can I hold dual citizenship?",
          answer:
            "Yes. Malta permits dual citizenship, so you do not need to renounce your current nationality.",
        },
      ],
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "€600,000",
          description: "Contribution + property + bonds",
        },
        {
          label: "Time to Citizenship",
          value: "12 Months",
          description: "One of the fastest EU programs",
        },
        {
          label: "Residency Required",
          value: "None",
          description: "No mandatory physical presence",
        },
        {
          label: "Visa-Free Travel",
          value: "190+ Countries",
          description: "Full EU passport access",
        },
        {
          label: "Dual Citizenship",
          value: "Permitted",
          description: "No need to renounce current passport",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse and dependent children",
        },
      ],
      about:
        "Malta is a sun-drenched archipelago in the heart of the Mediterranean and a member of the EU and Commonwealth. It is a major hub for financial services and iGaming, offering a high standard of living, a safe environment, and English as an official language. It provides an excellent base for both business and leisure.",
    },
  },
  {
    id: "panama-residence",
    slug: "panama-residence",
    name: "Panama",
    type: "residence",
    shortDescription: "Premium residence by investment program in Panama",
    heroImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Panama offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Panama is a dynamic hub for international trade and finance, bridging North and South America. It is known for its high standard of living, modern infrastructure (especially in Panama City), and a tropical climate. Its 'Friendly Nations Visa' and territorial tax system make it a top choice for global citizens.",
    },
  },
  {
    id: "portugal-residence",
    slug: "portugal-residence",
    name: "Portugal",
    type: "residence",
    shortDescription:
      "EU citizenship through property investment or capital transfer",
    heroImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Portugal offers a straightforward path to EU citizenship through the Golden Visa program and subsequent naturalization. Invest in real estate or transfer capital to qualify for residency, then apply for citizenship after 5 years.",
      benefits: [
        "Access to all EU member states",
        "Visa-free travel to 190+ countries",
        "Golden Visa pathway to citizenship",
        "Favorable tax regime for foreign residents",
        "World-class healthcare and education",
        "Growing tech and startup ecosystem",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€280,000+",
          description: "Purchase property in approved regions for Golden Visa",
        },
        {
          title: "Capital Transfer",
          amount: "€1,000,000+",
          description:
            "Direct capital investment in Portuguese business or financial institutions",
        },
        {
          title: "Job Creation",
          amount: "€500,000+",
          description: "Invest in creating jobs for Portuguese residents",
        },
      ],
      requirements: [
        "Valid passport",
        "Criminal background check",
        "Proof of funds",
        "Health insurance",
        "Residence in Portugal for 5 years to apply for citizenship",
      ],
      timeline: "2-3 months (Golden Visa) + 5 years to citizenship",
      process: [
        {
          title: "Initial Consultation",
          description:
            "Assess eligibility and choose the right investment route for your profile and goals.",
        },
        {
          title: "Investment Execution",
          description:
            "Purchase approved real estate or make the qualifying capital transfer.",
        },
        {
          title: "Golden Visa Application",
          description:
            "Submit your application to SEF (Immigration Service) with all required documentation.",
        },
        {
          title: "Biometrics & Approval",
          description:
            "Attend an appointment in Portugal for biometrics and receive your Golden Visa card.",
        },
        {
          title: "Renewals",
          description:
            "Renew every 2 years, maintaining minimal stay requirements (7 days/year).",
        },
        {
          title: "Citizenship Application",
          description:
            "After 5 years of legal residency, apply for Portuguese (EU) citizenship.",
        },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Prove a qualifying investment has been made.",
        "Maintain health insurance coverage.",
        "Meet the minimum stay requirement (7 days in year 1, 14 days in subsequent 2-year periods).",
      ],
      faqs: [
        {
          question: "Do I need to live in Portugal?",
          answer:
            "No. The Golden Visa only requires 7 days' physical presence in Portugal in the first year, and 14 days per two-year renewal period.",
        },
        {
          question: "Can I include my family?",
          answer:
            "Yes. Your spouse, dependent children, and dependent parents can be included in your application.",
        },
        {
          question: "How long until I get an EU passport?",
          answer:
            "After 5 years of holding the Golden Visa, you can apply for Portuguese citizenship and receive an EU passport.",
        },
      ],
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "€280,000",
          description: "Real estate in approved interior regions",
        },
        {
          label: "Time to Residency",
          value: "2-3 Months",
          description: "Golden Visa processing time",
        },
        {
          label: "Time to Citizenship",
          value: "5 Years",
          description: "From first Golden Visa approval",
        },
        {
          label: "Visa-Free Travel",
          value: "190+ Countries",
          description: "Including all EU Schengen member states",
        },
        {
          label: "Residency Requirement",
          value: "7 Days/Year",
          description: "Minimal physical presence needed",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse, children, and dependent parents",
        },
      ],
      about:
        "Portugal is consistently ranked as one of the world's safest and most welcoming countries. It offers a mild climate, a high quality of life, and a relatively low cost of living. As an EU member, it provides a gateway to Europe, with a culture that values family, community, and a balanced lifestyle.",
    },
  },
  {
    id: "switzerland-residence",
    slug: "switzerland-residence",
    name: "Switzerland",
    type: "residence",
    shortDescription: "Premium residence by investment program in Switzerland",
    heroImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Switzerland offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Switzerland is synonymous with precision, safety, and a high standard of living. It offers world-class healthcare, education, and infrastructure. Although it has a higher cost of living, it compensates with high salaries, political neutrality, and some of the most stunning natural landscapes in Europe.",
    },
  },
  {
    id: "thailand-residence",
    slug: "thailand-residence",
    name: "Thailand",
    type: "residence",
    shortDescription: "Southeast Asian destination with low cost of living",
    heroImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Thailand offers various long-term visa options including elite residency program. Low cost of living with vibrant culture and business opportunities.",
      benefits: [
        "Affordable cost of living",
        "Long-term visa options",
        "Business opportunities",
        "Rich culture and cuisine",
        "Healthcare access",
        "Tax-friendly environment",
      ],
      investmentOptions: [
        {
          title: "Thailand Elite Visa",
          amount: "THB 2,000,000+ (~$56,000+)",
          description: "Long-term membership and residency",
        },
        {
          title: "Business Investment",
          amount: "THB 10,000,000+ (~$280,000+)",
          description: "Thai business investment",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Health insurance",
        "Background clearance",
        "Hotel and visa application",
      ],
      timeline: "4-12 weeks",
      quickFacts: [
        {
          label: "Minimum Investment",
          value: "$56,000+",
          description: "Thailand Elite Visa membership",
        },
        {
          label: "Processing Time",
          value: "4-12 Weeks",
          description: "From application to visa issuance",
        },
        {
          label: "Visa Duration",
          value: "5-20 Years",
          description: "Long-term Elite Visa options",
        },
        {
          label: "Cost of Living",
          value: "Very Low",
          description: "Fraction of Western world costs",
        },
        {
          label: "Healthcare",
          value: "World-Class",
          description: "Internationally accredited hospitals",
        },
        {
          label: "Family Inclusion",
          value: "Yes",
          description: "Spouse and dependent children",
        },
      ],
      about:
        "Thailand, the 'Land of Smiles,' is a top destination in Southeast Asia for those seeking a high quality of life at an affordable price. It offers modern healthcare, vibrant cities, and a rich cultural heritage. It is a major hub for digital nomads and retirees alike, with a warm climate and hospitable people.",
    },
  },
  {
    id: "uae-residence",
    slug: "uae-residence",
    name: "UAE",
    type: "residence",
    shortDescription: "Premium residence by investment program in UAE",
    heroImage:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "UAE offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "The United Arab Emirates is a global business and tourism hub, offering a tax-free environment, world-class infrastructure, and a high level of safety. With a futuristic vision and a multicultural population, it provides a dynamic lifestyle and unparalleled opportunities for entrepreneurs and professionals.",
    },
  },
  {
    id: "united kingdom-residence",
    slug: "united kingdom-residence",
    name: "United Kingdom",
    type: "residence",
    shortDescription:
      "Premium residence by investment program in United Kingdom",
    heroImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "United Kingdom offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "The UK is a global leader in finance, education, and culture, offering a diverse and stable environment for immigrants. From the bustling metropolis of London to the scenic countryside, it provides a high standard of living and a well-established legal system. It remains a top choice for those seeking world-class opportunities.",
    },
  },
  {
    id: "usa-residence",
    slug: "usa-residence",
    name: "USA",
    type: "residence",
    shortDescription: "Premium residence by investment program in USA",
    heroImage:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "USA offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "The United States remains the 'Land of Opportunity,' offering an incredibly diverse range of landscapes, cultures, and economic sectors. It is a global leader in innovation and entrepreneurship. For immigrants, it provides a platform for growth, a high standard of higher education, and a dynamic job market.",
    },
  },
  {
    id: "saudi arabia-residence",
    slug: "saudi arabia-residence",
    name: "Saudi Arabia",
    type: "residence",
    shortDescription: "Premium residence by investment program in Saudi Arabia",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Saudi Arabia offers an attractive residence program for investors worldwide.",
      benefits: [
        "Global mobility",
        "High quality of life",
        "Secure environment",
      ],
      investmentOptions: [
        {
          title: "Investment",
          amount: "Contact for details",
          description: "Approved investment options",
        },
      ],
      requirements: ["Clean criminal record", "Proof of funds"],
      timeline: "Varies",
      quickFacts: [
        {
          label: "Processing",
          value: "Varies",
          description: "Standard processing time",
        },
      ],
      about:
        "Saudi Arabia's residency program offers a gateway to one of the world's fastest-growing economies. Residents benefit from a safe environment, high-quality modern infrastructure, and a strategic location. The Kingdom is rapidly expanding its entertainment and tourism sectors, making it an exciting place for international professionals.",
    },
  },
];

export function getCountriesByType(type: CountryType): Country[] {
  if (type === "both") {
    return countries;
  }
  return countries.filter(
    (country) => country.type === type || country.type === "both",
  );
}

export function getCitizenshipCountries(): Country[] {
  return getCountriesByType("citizenship");
}

export function getResidenceCountries(): Country[] {
  return getCountriesByType("residence");
}

export function getCountryBySlug(slug: string): Country | undefined {
  const decodedSlug = decodeURIComponent(slug);
  return countries.find((country) => country.slug === decodedSlug);
}

export function getCountryById(id: string): Country | undefined {
  return countries.find((country) => country.id === id);
}

export function getFeaturedCountries(count: number = 3): Country[] {
  return countries.slice(0, count);
}
