export type CountryType = "citizenship" | "residence" | "both";

export interface InvestmentOption {
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
    id: "portugal-citizenship",
    slug: "portugal-citizenship",
    name: "Portugal",
    type: "citizenship",
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
        { title: "Initial Consultation", description: "Assess eligibility and choose the right investment route for your profile and goals." },
        { title: "Investment Execution", description: "Purchase approved real estate or make the qualifying capital transfer." },
        { title: "Golden Visa Application", description: "Submit your application to SEF (Immigration Service) with all required documentation." },
        { title: "Biometrics & Approval", description: "Attend an appointment in Portugal for biometrics and receive your Golden Visa card." },
        { title: "Renewals", description: "Renew every 2 years, maintaining minimal stay requirements (7 days/year)." },
        { title: "Citizenship Application", description: "After 5 years of legal residency, apply for Portuguese (EU) citizenship." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Prove a qualifying investment has been made.",
        "Maintain health insurance coverage.",
        "Meet the minimum stay requirement (7 days in year 1, 14 days in subsequent 2-year periods).",
      ],
      faqs: [
        { question: "Do I need to live in Portugal?", answer: "No. The Golden Visa only requires 7 days' physical presence in Portugal in the first year, and 14 days per two-year renewal period." },
        { question: "Can I include my family?", answer: "Yes. Your spouse, dependent children, and dependent parents can be included in your application." },
        { question: "How long until I get an EU passport?", answer: "After 5 years of holding the Golden Visa, you can apply for Portuguese citizenship and receive an EU passport." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "€280,000", description: "Real estate in approved interior regions" },
        { label: "Time to Residency", value: "2-3 Months", description: "Golden Visa processing time" },
        { label: "Time to Citizenship", value: "5 Years", description: "From first Golden Visa approval" },
        { label: "Visa-Free Travel", value: "190+ Countries", description: "Including all EU Schengen member states" },
        { label: "Residency Requirement", value: "7 Days/Year", description: "Minimal physical presence needed" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse, children, and dependent parents" },
      ],
    },
  },
  {
    id: "malta-citizenship",
    slug: "malta-citizenship",
    name: "Malta",
    type: "citizenship",
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
        { title: "Eligibility Check", description: "Our consultants confirm your eligibility and select the optimal investment structure." },
        { title: "Document Preparation", description: "Compile all KYC documentation, financial statements, and background checks." },
        { title: "Application Submission", description: "Submit to Malta's Community Malta Agency (CMA) for due diligence review." },
        { title: "Due Diligence", description: "CMA conducts a rigorous 4-tier background check process." },
        { title: "Investment Payment", description: "Upon approval-in-principle, complete property purchase, bond subscription, and charitable donation." },
        { title: "Certificate of Naturalisation", description: "Receive your Maltese (EU) citizenship certificate and passport within 12 months." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Hold a valid passport from an eligible country.",
        "Have no previous visa rejections from EU or Schengen states.",
        "Demonstrate a legitimate source of wealth.",
      ],
      faqs: [
        { question: "Is Malta in the Schengen Area?", answer: "Yes. A Maltese passport grants visa-free access to all Schengen member states plus over 180 countries globally." },
        { question: "How long must I hold the investment?", answer: "The property must be held for a minimum of 5 years. The government bonds must also be held for 5 years." },
        { question: "Can I hold dual citizenship?", answer: "Yes. Malta permits dual citizenship, so you do not need to renounce your current nationality." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "€600,000", description: "Contribution + property + bonds" },
        { label: "Time to Citizenship", value: "12 Months", description: "One of the fastest EU programs" },
        { label: "Residency Required", value: "None", description: "No mandatory physical presence" },
        { label: "Visa-Free Travel", value: "190+ Countries", description: "Full EU passport access" },
        { label: "Dual Citizenship", value: "Permitted", description: "No need to renounce current passport" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "cyprus-citizenship",
    slug: "cyprus-citizenship",
    name: "Cyprus",
    type: "citizenship",
    shortDescription:
      "EU citizenship through real estate and business investment",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
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
        { title: "Consultation", description: "Understand your goals and choose between the real estate or business investment route." },
        { title: "Due Diligence", description: "Preliminary checks on your background and source of funds." },
        { title: "Investment", description: "Complete the qualifying investment in approved property or business." },
        { title: "Application Submission", description: "File your residency application with the Civil Registry and Migration Department." },
        { title: "Biometrics", description: "Attend a biometrics appointment at a Cyprus immigration office." },
        { title: "Permit Issuance", description: "Receive your Cyprus residency permit, valid for life and renewable." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Hold a valid passport.",
        "Provide proof of a clean criminal record.",
        "Demonstrate legal source of investment funds.",
        "Hold comprehensive health insurance.",
      ],
      faqs: [
        { question: "Is Cyprus residence permanent?", answer: "Yes. The Cyprus Permanent Residency Permit is issued for life and can be passed on to family members." },
        { question: "Can I work in Cyprus?", answer: "The standard investment permit does not grant the right to work in Cyprus, but you may be a director of a Cyprus company." },
        { question: "How often must I visit Cyprus?", answer: "You must visit Cyprus at least once every 2 years to maintain your residency permit." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "€300,000", description: "Business or real estate investment" },
        { label: "Processing Time", value: "12-24 Months", description: "From application to permit issuance" },
        { label: "Program Type", value: "Permanent Residency", description: "Lifetime permit, never expires" },
        { label: "EU/Schengen Access", value: "Yes", description: "Travel freely across the EU and Schengen zone" },
        { label: "Minimum Visit", value: "Once / 2 Years", description: "To maintain residency status" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and minor children included" },
      ],
    },
  },
  {
    id: "dominica-citizenship",
    slug: "dominica-citizenship",
    name: "Dominica",
    type: "citizenship",
    shortDescription: "Caribbean citizenship by investment program",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Dominica offers one of the most affordable citizenship-by-investment programs globally. Gain visa-free travel to 140+ countries, including Schengen and UK access.",
      benefits: [
        "Visa-free to 140+ countries including Schengen",
        "No residency requirement",
        "Fast processing (3-4 months)",
        "Affordable investment amounts",
        "Citizenship for family members",
        "No taxes on worldwide income",
      ],
      investmentOptions: [
        {
          title: "Economic Diversification Fund",
          amount: "$250,000",
          description: "Non-refundable contribution to national development",
        },
        {
          title: "Real Estate Investment",
          amount: "$200,000+",
          description: "Purchase approved real estate development",
        },
      ],
      requirements: [
        "Age 18+",
        "Valid passport",
        "Proof of legitimate funds",
        "Health and police clearance",
      ],
      timeline: "3-4 months from application to citizenship",
      process: [
        { title: "Initial Consultation", description: "Assess eligibility and select between the Economic Diversification Fund or Real Estate route." },
        { title: "Document Collection", description: "Gather passport copies, police clearances, medical certificates, and source-of-funds documentation." },
        { title: "Application Submission", description: "Your authorized agent submits the complete application to the Citizenship by Investment Unit (CBIU)." },
        { title: "Due Diligence Review", description: "The CBIU conducts thorough background checks, typically taking 2-3 months." },
        { title: "Approval & Investment", description: "Upon approval-in-principle, make the required investment or fund contribution." },
        { title: "Passport Issuance", description: "Receive your Dominica passport and citizenship certificate." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Be in good health.",
        "Demonstrate a legal source of investment funds.",
        "Not be a national of a country under sanctions.",
      ],
      faqs: [
        { question: "Do I need to visit Dominica?", answer: "No prior visit or residency is required. The entire process can be completed remotely through an authorized agent." },
        { question: "How many countries can I visit visa-free?", answer: "A Dominican passport grants visa-free or visa-on-arrival access to over 140 countries, including the UK and Schengen Area." },
        { question: "Is the citizenship hereditary?", answer: "Yes. Citizenship can be passed down to future generations by descent." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "$250,000", description: "Economic Diversification Fund contribution" },
        { label: "Time to Citizenship", value: "3-4 Months", description: "One of the fastest programs globally" },
        { label: "Residency Required", value: "None", description: "No visits required before or after" },
        { label: "Visa-Free Travel", value: "140+ Countries", description: "Including UK and Schengen" },
        { label: "Dual Citizenship", value: "Permitted", description: "No need to renounce current passport" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse, children, and parents" },
      ],
    },
  },
  {
    id: "grenada-citizenship",
    slug: "grenada-citizenship",
    name: "Grenada",
    type: "citizenship",
    shortDescription: "Caribbean gateway with E-2 visa treaty access",
    heroImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Grenada is unique for offering citizenship with E-2 visa treaty access to the USA. Ideal for entrepreneurs seeking US business visa pathway.",
      benefits: [
        "E-2 US investor visa eligibility",
        "Access to 140+ countries visa-free",
        "Caribbean Tax Benefits",
        "Fast processing",
        "Family inclusion",
        "No prior residency needed",
      ],
      investmentOptions: [
        {
          title: "Economic Diversification Fund",
          amount: "$235,000",
          description: "Non-refundable contribution",
        },
        {
          title: "Real Estate Investment",
          amount: "$220,000+",
          description: "Approved property development investment",
        },
      ],
      requirements: [
        "Age 18+",
        "Clean background",
        "Valid passport",
        "Proof of funds",
        "Health insurance",
      ],
      timeline: "4-6 months",
      process: [
        { title: "Eligibility Assessment", description: "Confirm eligibility and decide on the National Transformation Fund contribution or Real Estate investment route." },
        { title: "Document Preparation", description: "Compile KYC documents, police clearances, medical forms, and financial proof." },
        { title: "Application to CBIU", description: "Your authorized agent submits a complete application to Grenada's Citizenship by Investment Unit." },
        { title: "Government Due Diligence", description: "Rigorous background checks are conducted at the government level." },
        { title: "Approval & Payment", description: "Receive approval-in-principle and make the required investment or contribution." },
        { title: "Citizenship & Passport", description: "Receive your Grenadian passport, which uniquely enables access to the US E-2 investor visa." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record with no serious convictions.",
        "Be in good health.",
        "Demonstrate a legal and verifiable source of funds.",
        "Not be subject to international sanctions.",
      ],
      faqs: [
        { question: "What makes Grenada unique?", answer: "Grenada is the only Caribbean CBI country with an E-2 Treaty Investor agreement with the USA, enabling Grenadian citizens to apply for a US investor visa." },
        { question: "Do I need to visit Grenada?", answer: "No residency or prior visit is required to obtain Grenadian citizenship by investment." },
        { question: "How long does the passport last?", answer: "The Grenadian passport is valid for 5 years and is renewable." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "$235,000", description: "National Transformation Fund contribution" },
        { label: "Time to Citizenship", value: "4-6 Months", description: "From application to passport" },
        { label: "US E-2 Visa", value: "Eligible", description: "Unique US investor visa treaty access" },
        { label: "Visa-Free Travel", value: "140+ Countries", description: "Including Schengen and UK" },
        { label: "Dual Citizenship", value: "Permitted", description: "No need to renounce current nationality" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse, children, and dependent parents" },
      ],
    },
  },
  {
    id: "st-lucia-citizenship",
    slug: "st-lucia-citizenship",
    name: "Saint Lucia",
    type: "citizenship",
    shortDescription: "Caribbean citizenship for savvy investors",
    heroImage:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Saint Lucia offers a premium citizenship-by-investment program with strong due diligence and diverse investment options. Access 140+ countries visa-free.",
      benefits: [
        "Visa-free to 140+ countries",
        "No residency requirement",
        "Premium program with high selectivity",
        "Fast processing (90-120 days)",
        "Citizenship by descent available",
        "Competitive pricing",
      ],
      investmentOptions: [
        {
          title: "National Economic Fund",
          amount: "$300,000",
          description: "Government fund contribution",
        },
        {
          title: "Real Estate Development",
          amount: "$300,000+",
          description: "Approved development project investment",
        },
      ],
      requirements: [
        "Age 18+",
        "Valid travel document",
        "Source of funds documentation",
        "Police and health clearance",
      ],
      timeline: "90-120 days",
      process: [
        { title: "Initial Consultation", description: "Assess your goals and select from the National Economic Fund, Real Estate, or Enterprise Investment options." },
        { title: "Document Preparation", description: "Prepare all required documentation including passport copies, police certificates, and financial records." },
        { title: "Application Submission", description: "Your authorized agent submits the application to the Citizenship by Investment Unit (CIU) of Saint Lucia." },
        { title: "Due Diligence", description: "The government conducts multi-tier due diligence checks on all applicants." },
        { title: "Approval & Investment", description: "Upon receiving approval, make the required investment or government fund contribution." },
        { title: "Passport Issuance", description: "Receive your Saint Lucia passport and citizenship certificate within 90-120 days." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a clean criminal record.",
        "Be in good physical and mental health.",
        "Provide documentation proving a legal source of funds.",
        "Not hold citizenship from a sanctioned country.",
      ],
      faqs: [
        { question: "What visa-free access does Saint Lucia offer?", answer: "A Saint Lucia passport provides visa-free or visa-on-arrival access to 140+ countries including the UK, EU Schengen, Hong Kong, and Singapore." },
        { question: "Is there a residency requirement?", answer: "No. There is no requirement to visit or reside in Saint Lucia before or after obtaining citizenship." },
        { question: "Can I include my family?", answer: "Yes. Your spouse, children under 30, parents over 55, and siblings can be included as dependants." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "$300,000", description: "National Economic Fund contribution" },
        { label: "Time to Citizenship", value: "90-120 Days", description: "Among the fastest in the Caribbean" },
        { label: "Residency Required", value: "None", description: "Fully remote process available" },
        { label: "Visa-Free Travel", value: "140+ Countries", description: "UK, Schengen, Hong Kong, Singapore" },
        { label: "Dual Citizenship", value: "Permitted", description: "Retain your current nationality" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse, children, parents, siblings" },
      ],
    },
  },
  {
    id: "mauritius-citizenship",
    slug: "mauritius-citizenship",
    name: "Mauritius",
    type: "citizenship",
    shortDescription: "African gateway with strong tax treaty network",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Mauritius combines African growth potential with first-world infrastructure. Gain citizenship through business investment and join a stable, prosperous nation.",
      benefits: [
        "Access to 80+ countries visa-free",
        "Extensive tax treaty network",
        "Strategic location for Africa trade",
        "Stable democracy and economy",
        "High quality of life",
        "Growing fintech ecosystem",
      ],
      investmentOptions: [
        {
          title: "Business Investment",
          amount: "₨5,000,000 (~$120,000)",
          description: "Start or invest in local business",
        },
        {
          title: "Property Investment",
          amount: "₨3,000,000+ (~$72,000+)",
          description: "Real estate development project",
        },
      ],
      requirements: [
        "Business plan or investment proposal",
        "Financial proof",
        "Valid passport",
        "Background clearance",
        "Health clearance",
      ],
      timeline: "6-12 months",
      process: [
        { title: "Consultation & Planning", description: "Define your investment strategy with our advisors — business setup or property acquisition." },
        { title: "Document Preparation", description: "Compile your business plan, financial records, passport, and background check certificates." },
        { title: "Application Submission", description: "Submit your application to the Mauritius Economic Development Board (EDB)." },
        { title: "Approval & Investment", description: "Receive approval and execute the qualifying investment in Mauritius." },
        { title: "Residency Permit", description: "Obtain your occupation permit or residence permit, which is linked to your investment." },
        { title: "Citizenship Eligibility", description: "After qualifying residency period, you may apply for Mauritian citizenship." },
      ],
      eligibility: [
        "Be 18 years of age or older.",
        "Have a viable business plan or investment proposal.",
        "Provide proof of clean criminal record.",
        "Hold a valid passport.",
        "Demonstrate sufficient financial resources.",
      ],
      faqs: [
        { question: "What are the tax benefits in Mauritius?", answer: "Mauritius has a flat income tax rate of 15%, no capital gains tax, no inheritance tax, and an extensive double-tax treaty network with 46+ countries." },
        { question: "Can I bring my family?", answer: "Yes. Your spouse and dependent children can be included in your residency application." },
        { question: "How long is the residency permit valid?", answer: "Occupation permits are typically issued for 3 years and are renewable upon continued compliance with investment requirements." },
      ],
      quickFacts: [
        { label: "Minimum Investment", value: "$120,000", description: "Business or real estate investment" },
        { label: "Processing Time", value: "6-12 Months", description: "From application to permit issuance" },
        { label: "Tax Rate", value: "15% Flat", description: "No capital gains or inheritance tax" },
        { label: "Tax Treaties", value: "46+ Countries", description: "Extensive double-tax treaty network" },
        { label: "Visa-Free Travel", value: "80+ Countries", description: "Growing global access" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "antigua-barbuda-citizenship",
    slug: "antigua-barbuda",
    name: "Antigua and Barbuda",
    type: "citizenship",
    shortDescription: "Caribbean citizenship with fast processing and global mobility",
    heroImage: "https://images.unsplash.com/photo-1589139454124-71239272332a?q=80&w=2070&auto=format&fit=crop",
    sections: {
      overview: "The Antigua and Barbuda Citizenship by Investment Program (CIP) was established following the Citizenship by Investment Act of 2013. It offers a straightforward and efficient path to a second citizenship in a beautiful Caribbean twin-island nation, providing investors with enhanced global mobility and financial freedom.",
      benefits: [
        "Visa-free access to 160+ countries, including the Schengen Area, UK, Hong Kong, and Singapore.",
        "Lifelong citizenship that is transferable to future generations.",
        "Dual citizenship is allowed, with no requirement to renounce your current nationality.",
        "No taxes on worldwide income, inheritance, or capital gains for non-residents.",
        "Minimal residency requirement of only 5 days within the first 5 years.",
        "Fast processing time, with citizenship often granted within 3 to 6 months."
      ],
      investmentOptions: [
        {
          title: "National Development Fund (NDF)",
          amount: "$230,000",
          description: "A one-time non-refundable contribution to the government fund for a family of up to four."
        },
        {
          title: "Real Estate Investment",
          amount: "$300,000",
          description: "Investment in a government-approved real estate project, which must be held for at least five years."
        },
        {
          title: "University of the West Indies (UWI) Fund",
          amount: "$260,000",
          description: "A contribution option specifically for large families of six or more people."
        }
      ],
      requirements: [
        "Main applicant must be at least 18 years old.",
        "Provide evidence of the source of investment funds.",
        "Possess a clean criminal record and pass due diligence checks.",
        "Submit a medical certificate confirming good health.",
        "Include eligible family members (spouse, children, and parents)."
      ],
      timeline: "3 - 6 Months",
      process: [
        {
          title: "Initial Consultation",
          description: "Meet with our experts to assess your eligibility and choose the best investment option for your needs."
        },
        {
          title: "Document Preparation",
          description: "Collect and prepare all necessary documents, including background checks and medical reports."
        },
        {
          title: "Submission & Due Diligence",
          description: "Submit your application to the CIU. The government conducts thorough due diligence and background checks."
        },
        {
          title: "Approval in Principle",
          description: "Receive your letter of approval. Once approved, you proceed to make the chosen investment."
        },
        {
          title: "Final Payment & Oath",
          description: "Make the final investment payment and take the oath of allegiance."
        },
        {
          title: "Passport Handover",
          description: "Receive your Antigua and Barbuda citizenship certificate and passport."
        }
      ],
      eligibility: [
        "Be over 18 years of age.",
        "Have a clean criminal record.",
        "Be in good health.",
        "Provide proof of investment funds from a legal source.",
        "Meet the 5-day residency requirement over 5 years."
      ],
      faqs: [
        {
          question: "Can I include my family in the application?",
          answer: "Yes, you can include your spouse, dependent children under 30, and dependent parents or grandparents over 55."
        },
        {
          question: "How long is the passport valid for?",
          answer: "The initial passport is valid for 5 years and can be renewed if the residency requirement of 5 days is met."
        },
        {
          question: "Is there an interview requirement?",
          answer: "While generally not required, the Citizenship by Investment Unit (CIU) reserves the right to request an interview if necessary."
        }
      ]
    }
  },

  // RESIDENCE COUNTRIES (13)
  {
    id: "spain-residence",
    slug: "spain-residence",
    name: "Spain",
    type: "residence",
    shortDescription: "EU residency through real estate investment",
    heroImage:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Spain offers a popular Golden Visa program for non-EU investors. Secure residency, travel freely across the EU, and enjoy Mediterranean lifestyle.",
      benefits: [
        "EU residency and Schengen access",
        "Path to citizenship after 10 years",
        "Free healthcare system",
        "World-class education",
        "Strong real estate market",
        "Rich culture and lifestyle",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€500,000",
          description: "Purchase property in Spain",
        },
        {
          title: "Business Investment",
          amount: "€1,000,000",
          description: "Create jobs or business expansion",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Health insurance",
        "Criminal background check",
        "Residency plan",
      ],
      timeline: "1-2 months",
      quickFacts: [
        { label: "Minimum Investment", value: "€500,000", description: "Real estate purchase in Spain" },
        { label: "Processing Time", value: "1-2 Months", description: "Golden Visa application" },
        { label: "EU/Schengen Access", value: "Yes", description: "Travel freely across all Schengen states" },
        { label: "Path to Citizenship", value: "10 Years", description: "After continuous legal residency" },
        { label: "Residency Required", value: "Minimal", description: "No minimum stay requirement" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "ireland-residence",
    slug: "ireland-residence",
    name: "Ireland",
    type: "residence",
    shortDescription: "English-speaking EU country with strong economy",
    heroImage:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Ireland offers residency through investment in real estate, business, or capital transfers. English-speaking EU nation with thriving tech sector.",
      benefits: [
        "English-speaking country",
        "EU/Schengen membership",
        "Tech hub of Europe",
        "Strong education system",
        "Path to citizenship",
        "Favorable business climate",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€1,000,000+",
          description: "Property investment across Ireland",
        },
        {
          title: "Capital Investment",
          amount: "€500,000+",
          description: "Direct investment in Irish business",
        },
      ],
      requirements: [
        "Proof of funds",
        "Business plan (if applicable)",
        "Health and police clearance",
        "Valid passport",
      ],
      timeline: "2-4 months",
      quickFacts: [
        { label: "Minimum Investment", value: "€500,000", description: "Business or capital transfer" },
        { label: "Processing Time", value: "2-4 Months", description: "From application to permit" },
        { label: "Language", value: "English", description: "Only English-speaking EU nation" },
        { label: "EU/Schengen Access", value: "Yes", description: "Full EU membership benefits" },
        { label: "Path to Citizenship", value: "5 Years", description: "After qualifying residency period" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "italy-residence",
    slug: "italy-residence",
    name: "Italy",
    type: "residence",
    shortDescription: "Historic culture with EU benefits",
    heroImage:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Italy offers residency for investors in real estate and business. Experience rich history, art, and cuisine while enjoying EU benefits.",
      benefits: [
        "EU/Schengen access",
        "Rich cultural heritage",
        "Excellent healthcare",
        "Strategic location",
        "Real estate value",
        "Quality of life",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "€500,000+",
          description: "Property in Italy",
        },
        {
          title: "Business Investment",
          amount: "€500,000+",
          description: "Italian business investment",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Background check",
        "Health insurance",
        "Housing arrangement",
      ],
      timeline: "2-3 months",
      quickFacts: [
        { label: "Minimum Investment", value: "€500,000", description: "Real estate or business investment" },
        { label: "Processing Time", value: "2-3 Months", description: "From application to permit" },
        { label: "EU/Schengen Access", value: "Yes", description: "Travel freely across Europe" },
        { label: "Tax Regime", value: "Flat €100K/yr", description: "Lucrative flat-tax regime for HNWIs" },
        { label: "Path to Citizenship", value: "10 Years", description: "After continuous legal residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
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
        { label: "Minimum Investment", value: "€250,000", description: "Lowest entry in the EU Golden Visa market" },
        { label: "Processing Time", value: "30-60 Days", description: "Among the fastest in the EU" },
        { label: "EU/Schengen Access", value: "Yes", description: "Travel freely across all Schengen states" },
        { label: "Path to Citizenship", value: "7 Years", description: "After legal residency" },
        { label: "Residency Required", value: "None", description: "No minimum stay requirement" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse, children, and parents" },
      ],
    },
  },
  {
    id: "turkey-residence",
    slug: "turkey-residence",
    name: "Turkey",
    type: "residence",
    shortDescription: "Bridge between Europe and Asia",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
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
        { label: "Minimum Investment", value: "$250,000", description: "Real estate purchase in Turkey" },
        { label: "Processing Time", value: "30-45 Days", description: "Fast-track residency" },
        { label: "Location", value: "EU/Asia Bridge", description: "Strategic crossroads of Europe and Asia" },
        { label: "Income Tax", value: "15-40%", description: "Competitive tax rates" },
        { label: "Path to Citizenship", value: "5 Years", description: "After qualifying residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "usa-residence",
    slug: "usa-residence",
    name: "United States",
    type: "residence",
    shortDescription: "Global superpower with diverse economy",
    heroImage:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "USA offers residency through EB-5 investor visa program. Invest in job creation and secure green card path for you and your family.",
      benefits: [
        "Green card pathway",
        "World's largest economy",
        "Diverse career opportunities",
        "World-class education",
        "Strong legal protections",
        "Immigration pathways",
      ],
      investmentOptions: [
        {
          title: "Regional Center Investment",
          amount: "$1,050,000",
          description: "Targeted employment area investment",
        },
        {
          title: "Direct Investment",
          amount: "$1,050,000",
          description: "Direct business investment",
        },
      ],
      requirements: [
        "Source of funds documentation",
        "Background clearance",
        "Medical examination",
        "Valid passport",
        "Investment commitment",
      ],
      timeline: "2-3 years",
      quickFacts: [
        { label: "Minimum Investment", value: "$1,050,000", description: "EB-5 investor visa program" },
        { label: "Processing Time", value: "2-3 Years", description: "Full green card pathway" },
        { label: "Program", value: "EB-5 Visa", description: "Permanent residency via job creation" },
        { label: "Jobs Required", value: "10 Full-Time", description: "Must create or preserve 10 US jobs" },
        { label: "Path to Citizenship", value: "5 Years", description: "After permanent residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and unmarried children under 21" },
      ],
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
        { label: "Minimum Investment", value: "CAD $300K", description: "Provincial business investment" },
        { label: "Processing Time", value: "6-24 Months", description: "Varies by province and program" },
        { label: "Program Type", value: "Permanent Residency", description: "PR card for you and family" },
        { label: "Healthcare", value: "Universal", description: "Access to Canada's public health system" },
        { label: "Path to Citizenship", value: "3 Years", description: "After permanent residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "new-zealand-residence",
    slug: "new-zealand-residence",
    name: "New Zealand",
    type: "residence",
    shortDescription: "Island paradise with strong economy",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "New Zealand offers residency through business investment and real estate. Experience world-class living standards and natural beauty.",
      benefits: [
        "High quality of life",
        "Stable government",
        "Business-friendly environment",
        "Natural beauty",
        "Strong education system",
        "Easy pathway to citizenship",
      ],
      investmentOptions: [
        {
          title: "Business Investment",
          amount: "NZD $3,000,000",
          description: "New Zealand business investment",
        },
        {
          title: "Real Estate Investment",
          amount: "NZD $1,500,000+",
          description: "Property investment in NZ",
        },
      ],
      requirements: [
        "Business proposal",
        "Proof of funds",
        "Health clearance",
        "Character assessment",
        "Valid passport",
      ],
      timeline: "6-12 months",
      quickFacts: [
        { label: "Minimum Investment", value: "NZD $3M", description: "Active investor visa program" },
        { label: "Processing Time", value: "6-12 Months", description: "From application to residency" },
        { label: "QoL Ranking", value: "Top 10", description: "Consistently ranked among the world's best" },
        { label: "Education", value: "World-Class", description: "Access to top-ranked universities" },
        { label: "Path to Citizenship", value: "5 Years", description: "After permanent residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "singapore-residence",
    slug: "singapore-residence",
    name: "Singapore",
    type: "residence",
    shortDescription: "Asian financial hub with modern infrastructure",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Singapore offers business and residency pathways for entrepreneurs. Gateway to Asia with first-world standards and political stability.",
      benefits: [
        "Financial hub of Asia",
        "World-class infrastructure",
        "Political stability",
        "Favorable tax environment",
        "Strategic Asian location",
        "Business-friendly regulations",
      ],
      investmentOptions: [
        {
          title: "Business Investment",
          amount: "SGD $500,000+",
          description: "Singapore business investment",
        },
        {
          title: "Headquarter Pass",
          amount: "Varies",
          description: "Regional HQ establishment",
        },
      ],
      requirements: [
        "Business plan",
        "Proof of funds",
        "Education background",
        "Employment contract (if applicable)",
        "Health declaration",
      ],
      timeline: "2-4 weeks",
      quickFacts: [
        { label: "Minimum Investment", value: "SGD $500K", description: "Business or GIP investment" },
        { label: "Processing Time", value: "2-4 Weeks", description: "One of the fastest globally" },
        { label: "Income Tax", value: "Up to 22%", description: "No capital gains or inheritance tax" },
        { label: "Asian Gateway", value: "Hub Access", description: "Gateway to Southeast Asian markets" },
        { label: "Path to Citizenship", value: "2 Years", description: "After permanent residency" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "uae-residence",
    slug: "uae-residence",
    name: "United Arab Emirates",
    type: "residence",
    shortDescription: "Middle East business hub with luxury lifestyle",
    heroImage:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "UAE offers accessible residency through business investment and real estate. Global business hub with tax advantages and modern infrastructure.",
      benefits: [
        "Business-friendly environment",
        "No personal income tax",
        "Luxury lifestyle",
        "Strategic Middle East location",
        "Real estate growth potential",
        "Safe and secure",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "AED 1,000,000+ (~$270,000+)",
          description: "Property purchase in UAE",
        },
        {
          title: "Business Setup",
          amount: "Varies",
          description: "Company establishment with capital",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Employment contract or business license",
        "Health insurance",
        "Rental contract",
      ],
      timeline: "2-4 weeks",
      quickFacts: [
        { label: "Minimum Investment", value: "$270,000+", description: "Real estate investment in UAE" },
        { label: "Processing Time", value: "2-4 Weeks", description: "Rapid permit processing" },
        { label: "Income Tax", value: "0%", description: "No personal income tax" },
        { label: "Golden Visa", value: "10 Years", description: "Long-term residency for investors" },
        { label: "Business Setup", value: "Free Zones", description: "100% foreign ownership in free zones" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
  {
    id: "bahamas-residence",
    slug: "bahamas-residence",
    name: "Bahamas",
    type: "residence",
    shortDescription: "Caribbean island paradise",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    sections: {
      overview:
        "Bahamas offers residency through real estate investment and business. Tropical paradise with no personal income tax.",
      benefits: [
        "No personal income tax",
        "Beautiful tropical climate",
        "English-speaking country",
        "Caribbean lifestyle",
        "Real estate opportunity",
        "Safe community",
      ],
      investmentOptions: [
        {
          title: "Real Estate Investment",
          amount: "$250,000+",
          description: "Property purchase in Bahamas",
        },
        {
          title: "Business Investment",
          amount: "$500,000+",
          description: "Business establishment",
        },
      ],
      requirements: [
        "Valid passport",
        "Proof of funds",
        "Background clearance",
        "Health insurance",
        "Housing arrangement",
      ],
      timeline: "4-8 weeks",
      quickFacts: [
        { label: "Minimum Investment", value: "$250,000", description: "Real estate purchase in Bahamas" },
        { label: "Processing Time", value: "4-8 Weeks", description: "From application to residency" },
        { label: "Income Tax", value: "0%", description: "No personal income, capital gains, or wealth tax" },
        { label: "Language", value: "English", description: "Official language" },
        { label: "Lifestyle", value: "Caribbean", description: "Tropical island paradise" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
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
        { label: "Minimum Investment", value: "$56,000+", description: "Thailand Elite Visa membership" },
        { label: "Processing Time", value: "4-12 Weeks", description: "From application to visa issuance" },
        { label: "Visa Duration", value: "5-20 Years", description: "Long-term Elite Visa options" },
        { label: "Cost of Living", value: "Very Low", description: "Fraction of Western world costs" },
        { label: "Healthcare", value: "World-Class", description: "Internationally accredited hospitals" },
        { label: "Family Inclusion", value: "Yes", description: "Spouse and dependent children" },
      ],
    },
  },
];

// Utility functions
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
  return countries.find((country) => country.slug === slug);
}

export function getCountryById(id: string): Country | undefined {
  return countries.find((country) => country.id === id);
}

export function getFeaturedCountries(count: number = 3): Country[] {
  return countries.slice(0, count);
}
