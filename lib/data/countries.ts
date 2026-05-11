export type CountryType = "citizenship" | "residence" | "both";
interface ImportantDetail {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FaqsSection {
  title: string;
  qAndA: Array<{ q: string; a: string }>;
}

export interface Benefit {
  title: string;
  subTitle?: string;
  items?: string[];
  icon: string;
}

export interface QuickFact {
  label: string;
  value: string;
  description?: string;
}

export interface AppProcessStep {
  no: number;
  item: string;
  list: string[];
}

export interface AppProcess {
  title: string;
  description: string;
  process: AppProcessStep[];
}

export interface InvestmentRequirement {
  title: string;
  description: string;
  items: string[];
  note?: string;
}

export interface InvestmentOptions {
  title: string;
  description: string;
  items: Array<{ title: string; list: string[] }>;
  note?: string;
}

export interface Requirements {
  investmentRequirements?: InvestmentRequirement;
  investmentOptions?: InvestmentOptions;
}

export interface LegalBasis {
  title: string;
  description: string;
  items: string[];
  note?: string;
}

export interface OverviewItem {
  no: number;
  title: string;
  description: string;
}

export interface OverviewSection {
  title: string;
  items: OverviewItem[];
}

export interface CountrySection {
  overview: OverviewSection;
  benefits: Benefit[];
  importantDetails: ImportantDetail[];
  requirements: Requirements | string[];
  appProcess?: AppProcess;
  process?: ProcessStep[];
  faqs?: FaqsSection;
  legalBasis?: LegalBasis;
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
    shortDescription: `Explore the St. Kitts and Nevis Citizenship by Investment Program. Obtain a passport quickly by investing $250,000+ and secure citizenship for you and your family within 6 months.`,
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1nThJ1h58EtFl9kQrDA2X7fe-IqqQjHfG",
    sections: {
      overview: {
        title: "Overview of St. Kitts & Nevis",
        items: [
          {
            no: 1,
            title:
              "St. Kitts & Nevis is a captivating Caribbean island nation located in the Leeward Islands",
            description: `St. Kitts & Nevis is a captivating Caribbean island nation located in the Leeward Islands that offers visitors a unique blend of history, culture, and natural beauty. The country is made up of two main islands, St. Kitts and Nevis, as well as several smaller islets, covering a total area of approximately 261 square kilometres.`,
          },
          {
            no: 2,
            title:
              "St. Kitts & Nevis has a stable political climate and a diverse economy",
            description: `As a member of the British Commonwealth, St. Kitts & Nevis has a stable political climate and a diverse economy that is fueled by tourism, agriculture, and financial services. The country gained independence from the United Kingdom in 1983 and is now a parliamentary democracy within the Commonwealth. St. Kitts & Nevis’ population, estimated at around 55,000, is a diverse mix of African, East Indian, and European descent, resulting in a rich cultural fusion of customs, music, and cuisine.`,
          },
          {
            no: 3,
            title: "The country's lush tropical landscapes",
            description: `The country’s lush tropical landscapes are characterised by verdant rainforests, white sandy beaches, and crystal-clear waters, making it an attractive destination for adventure-seekers, nature-lovers, and those in search of relaxation. St. Kitts & Nevis is home to several historical landmarks, including Brimstone Hill Fortress National Park, a UNESCO World Heritage Site that offers a glimpse into the island’s colonial past.`,
          },
          {
            no: 4,
            title:
              "Tourism plays a significant role in St. Kitts & Nevis' economy,",
            description: `Tourism plays a significant role in St. Kitts & Nevis’ economy, contributing to over 50% of the country’s GDP. The island’s natural beauty, combined with its wide range of recreational activities such as sailing, snorkelling, and hiking, makes it an attractive destination for travellers. Other key sectors driving the economy include agriculture, with St. Kitts & Nevis being a significant producer of sugarcane, as well as fishing and manufacturing. The official currency is the Eastern Caribbean Dollar (XCD), pegged to the US Dollar.`,
          },
          {
            no: 5,
            title:
              "St. Kitts & Nevis actively participates in regional and global affairs",
            description: `St. Kitts & Nevis actively participates in regional and global affairs as a member of various international organisations, including the United Nations, the Organisation of Eastern Caribbean States (OECS), and the Caribbean Community (CARICOM). The country is committed to sustainable development and has been investing in renewable energy and eco-tourism initiatives to ensure a more environmentally responsible future.`,
          },
        ],
      },
      benefits: [
        {
          title: "Strong Global Mobility",
          subTitle:
            "Visa-free/visa-on-arrival access to 162+ destinations, including:",
          items: [
            "United Kingdom",
            "Schengen Area",
            "Hong Kong",
            "Singapore",
            "Ireland",
          ],
          icon: "Globe",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "The country offers one of the world’s most attractive tax regimes:",
          items: [
            "No income tax",
            "No wealth tax",
            "No inheritance tax",
            "No capital gains tax",
          ],
          icon: "Coins",
        },
        {
          title: "No Residency Requirements",
          subTitle:
            "Applicants are not required to visit or reside in the country during or after the application.",
          items: [],
          icon: "MapPin",
        },
        {
          title: "Fast & Reliable Citizenship",
          subTitle: "",
          items: [
            "Full citizenship issued within 6 months",
            "Optional accelerated process available",
          ],
          icon: "Zap",
        },
        {
          title: "Dual Citizenship Allowed",
          subTitle:
            "You may maintain existing citizenship. St. Kitts & Nevis citizens are allowed dual citizenship.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "USD 250,000",
          description: "USD 250,000 (Minimum Investment by Donation)",
          icon: "",
        },
        {
          title: "USD 325,000",
          description: "USD 325,000 (Minimum Investment in Real Estate)",
          icon: "",
        },
        {
          title: "6 Months",
          description: "6 Months (Time to Citizenship)",
          icon: "",
        },
        {
          title: "Free Visa",
          description: "Free Visa (Access to 162 Countries)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "St. Kitts & Nevis Citizenship by Investment Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Have no criminal record",
            "Pass government due diligence checks",
            "Be in good health",
            "Fulfill one of the investment options",
            "Provide required supporting documentation",
          ],
          note: "No residency or interview is required, and all applications must be submitted through a government-authorized agent like Passport Legend.",
        },
        investmentOptions: {
          title: `St. Kitts & Nevis Investment Options ${new Date().getFullYear()}`,
          description: "To obtain citizenship, applicants may choose from:",
          items: [
            {
              title: "1. Sustainable Island State Contribution (SISC)",
              list: [
                "Minimum Donation: USD 250,000Non-refundableSupports national",
                "sustainability, economic development, and infrastructure.",
              ],
            },
            {
              title: "2. Approved Public Benefit Project",
              list: [
                "Minimum Contribution: USD 250,000",
                "Non-refundable",
                "Must be made to a government-approved public development project.",
              ],
            },
          ],
          note: "Real estate investments allow applicants to earn returns while securing citizenship.",
        },
      },
      appProcess: {
        title:
          "Application Process for St. Kitts & Nevis Citizenship by Investment Program",
        description:
          "The application process for Saint Kitts and Nevis citizenship through investment is straightforward, and it may take up to 6 months between initiating the process and receiving the residency documents. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of St. Kitts & Nevis is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      about: `About St. Kitts & Nevis
St. Kitts & Nevis is a two-island nation in the eastern Caribbean, known for its white-sand beaches, lush rainforests, and pristine coral reefs. Its culture blends African, European, and Indigenous influences, showcased through its music, cuisine, and annual Carnival.

The country is a member of major international organizations, including the UN and OECS, making its passport highly valuable with visa-free or visa-on-arrival access to 160+ countries. The economy relies mainly on tourism and agriculture, with tourism contributing over 60% of GDP. Its commitment to sustainable tourism has positioned it as a leading eco-tourism destination.

St. Kitts & Nevis is an attractive choice for individuals seeking a fast and efficient Citizenship by Investment Programme in a scenic Caribbean setting.

 
Why Consider St. Kitts & Nevis Citizenship?
St. Kitts & Nevis is a British Commonwealth country with a strong rule of law, stable governance, and internationally recognized due diligence standards. The islands are members of the United Nations, OECS, and CARICOM, offering credibility and long-term security for global investors and families.

`,
      legalBasis: {
        title: "Legal Basis for St. Kitts and Nevis Citizenship Program",
        description: "The program operates under:",
        items: [
          "Chapter VIII (Sections 90–95) of the Constitution of St. Christopher and Nevis",
          "St. Christopher and Nevis Citizenship Act, 1984 (No. 1 of 1984)",
          "Subsequent regulations enabling eligible persons to obtain citizenship via investment",
        ],
        note: "This strong legal framework ensures transparency, stability, and global recognition.",
      },
      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "ARE THERE ANY AGE LIMITS FOR DEPENDENTS?",
            a: "Children up to age 30 qualify; those above 30 incur additional government fees.",
          },
          {
            q: "HOW LONG IS ST. KITTS & NEVIS PASSPORT VALID?",
            a: "10 years, renewable thereafter.",
          },
          {
            q: "IS THE ST. KITTS & NEVIS PASSPORT STRONG?",
            a: "Yes, with 160+ visa-free/visa-on-arrival destinations.",
          },
          {
            q: "ARE THERE ANY RESIDENCY REQUIREMENTS TO OBTAIN ST KITTS AND NEVIS CITIZENSHIP BY INVESTMENT?",
            a: "No residency requirement.",
          },
          {
            q: "HOW LONG DOES THE ST. KITTS & NEVIS CBI PROCESS TAKE?",
            a: "3 to 6 months.",
          },
          {
            q: "CAN I APPLY FOR THE CITIZENSHIP BY INVESTMENT PROGRAM TO THE GOVERNMENT DIRECTLY?",
            a: "No, all applications must be submitted through government-authorized service providers.",
          },
          {
            q: "IS THE APPLICATION FORM AVAILABLE ONLINE?",
            a: "No. The application form for citizenship by investment can only be obtained through and submitted to the Citizenship by Investment Unit by an authorised person or representative.",
          },
          {
            q: "HOW MUCH DOES ST. KITTS & NEVIS CITIZENSHIP COST?",
            a: "Starting from USD 250,000.",
          },
          {
            q: "IS DUAL CITIZENSHIP ALLOWED IN ST. KITTS & NEVIS CITIZENSHIP PROGRAM?",
            a: "Yes, the twin-island federation recognizes dual citizenship and does not require citizens to renounce any other citizenship.",
          },
          {
            q: "DO I NEED TO LIVE IN ST. KITTS & NEVIS TO GET CITIZENSHIP?",
            a: "No.",
          },
          {
            q: "ARE MY FAMILY MEMBERS ELIGIBLE?",
            a: "Yes, including spouse, dependent children, and dependent parents.",
          },
          {
            q: "WHAT DUE DILIGENCE CHECKS ARE PERFORMED?",
            a: "All applicants undergo rigorous background checks conducted by independent agencies and government entities.",
          },
        ],
      },
    },
  },
  {
    id: "grenada-citizenship",
    slug: "grenada-citizenship",
    name: "Grenada",
    type: "citizenship",
    shortDescription: `Planning to apply for Grenada Citizenship and Passport by Investment? Explore the requirements, including eligibility, investment options, costs, benefits and processing time.`,
    heroImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1ZZsSI6QxLLAiLurYgTT1zRcOAxGMJ5BI",
    sections: {
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "The Island of Spice",
            description: `Grenada, known as the “Island of Spice,” is a vibrant Caribbean nation located in the southeastern Caribbean Sea, at the southern end of the Grenadines island chain. The country consists of the main island, Grenada, and several smaller islands, including Carriacou and Petite Martinique. With a total area of 348.5 square kilometres, Grenada boasts picturesque landscapes, vibrant culture, and warm, friendly people, making it a highly sought-after destination for tourists.`,
          },
          {
            no: 2,
            title: "Capital City",
            description: `The capital city of Grenada is St. George’s, a charming harbour town nestled on the southwestern coast of the main island. St. George’s is known for its well-preserved colonial architecture, bustling markets, and the historic Fort George, offering panoramic views of the city and the sea. The island’s interior is characterised by lush rainforests, cascading waterfalls, and the famous Grand Etang Lake, which sits within an extinct volcanic crater.`,
          },
          {
            no: 3,
            title: "Language",
            description: `The official language of Grenada is English, making it easy for international investors and tourists to communicate. However, a local patois, influenced by French and various African languages, is widely spoken in daily life.`,
          },
          {
            no: 4,
            title: "Grenada's economy is primarily driven by tourism",
            description: `Grenada’s economy is primarily driven by tourism, which contributes significantly to the country’s GDP. The island’s natural beauty, coupled with its range of recreational activities such as sailing, scuba diving, and hiking, makes it a popular destination for travellers. Other sectors contributing to the economy include agriculture, with Grenada being a major producer of spices like nutmeg and mace, as well as fishing and manufacturing. The official currency is the Eastern Caribbean Dollar (XCD), pegged to the US Dollar.`,
          },
          {
            no: 5,
            title:
              "The country is committed to sustainable development and has made significant strides in renewable energy",
            description: `As a member of various international organisations, including the United Nations, the Caribbean Community (CARICOM), the Organisation of Eastern Caribbean States (OECS), and the British Commonwealth, Grenada actively engages in regional and global affairs. The country is committed to sustainable development and has made significant strides in renewable energy, environmental conservation, and climate change adaptation, ensuring that its natural beauty and resources are preserved for generations to come.`,
          },
        ],
      },
      benefits: [
        {
          title: "Dual Citizenship",
          subTitle: "Grenada passport holders can hold dual citizenship.",
          items: [],
          icon: "",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "Grenada Citizenship offers exemption from taxation on capital gains, inheritance, wealth, gifts, or foreign income.",
          items: [],
          icon: "",
        },
        {
          title: "Application Time",
          subTitle:
            "The Grenada citizenship application process typically takes a minimum of 6 months to complete",
          icon: "",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for his/her family members as dependants, including the main applicant’s spouse, children (biological or adopted) under 30 years of age, dependant parents, and siblings above the age of 18.",
          icon: "",
        },
        {
          title: "Citizenship",
          subTitle:
            "Grenada Citizenship is passed on to all future generations; newborn children and a newly married wife can be added for free.",
          items: [],
          icon: "",
        },
        {
          title: "Education",
          subTitle:
            "Access to the largest offshore Medical University, St. George’s University, of the United States of America in Grenada.",
          items: [],
          icon: "",
        },
        {
          title: "Visa-Free Access",
          subTitle:
            "Grenadian citizens can travel visa-free and visa-on-arrival to a total of 143 countries.",
          icon: "",
        },
        {
          title: "US E-2 Treaty Visa",
          subTitle:
            "A gateway to acquire a US E-2 Treaty Visa – The only Caribbean Citizenship program that offers it.",
          icon: "",
        },
      ],
      importantDetails: [
        {
          title: "USD 235,000",
          description: "Minimum Investment by Donation",
          icon: "",
        },
        {
          title: "6 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "143+ Countries",
          description: "Visa - Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Requirements for Grenada Citizenship by Investment",
          description:
            "To acquire Grenada citizenship applicant must be over 18 years of age and must meet the below mentions requirements.",
          items: [
            "Applicant must have no criminal record.",
            "Applicants must successfully pass due diligence checks.",
            "Applicants must be in good health.",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "How to Get Grenada Citizenship by Investment ?",
          description:
            "To get Grenada citizenship by investment , applicants can either make a minimum donation of USD 235,000 to the National Transformation Fund or invest a minimum of USD 270,000 in an approved real estate project. The required investment amount for the NTF will increase with the number of dependents during the time of application. The applicant is free to sell the acquired property after five years.",
          items: [
            {
              title:
                "To qualify for economic Grenada Citizenship by Investment, applicants may choose from one of the two options:",
              list: [
                "Applicants must spend a non-refundable contribution to the National Transformation Fund of USD 235,000",
                "An investment in an approved real estate development with a minimum value of USD 270,000",
              ],
            },
          ],
          note: "Contact us for the latest investment details.",
        },
      },

      appProcess: {
        title:
          "Step-by-step Process for Grenada Passport & Citizenship by Investment",
        description:
          "The application process to buy Grenadian citizenship is straightforward, and it may take up to 6 months between initiating the process and receiving the documents. It is not a requirement to visit Grenada to initiate the application. The Grenada citizenship application process is divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of St. Kitts & Nevis is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Grenada Passport & Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "          HOW LONG IS THE INVESTOR REQUIRED TO MAINTAIN OWNERSHIP OF THEIR PROPERTY TO KEEP GRENADIAN CITIZENSHIP AND QUALIFY FOR THE RESALE PROVISIONS AS PER THE CBI LEGISLATION?",
            a: "Properties acquired through the Grenada citizenship by investment program must be kept for at least five (5) years before being sold. However, lifestyle investors can immediately resell their properties.",
          },
          {
            q: "WHEN I RESELL MY PROPERTY, WILL THE SECOND PURCHASER OF MY PROPERTY ALSO QUALIFY FOR CITIZENSHIP IN GRENADA?",
            a: "No, there is no physical residency or visit requirement for the application process.",
          },
          {
            q: "HOW LONG WILL IT TAKE TO GET GRENADA CITIZENSHIP THROUGH INVESTMENT?",
            a: "Once the Government approved apartment has been purchased or the final contribution amount is paid and received by the Government of Grenada, it will take approximately 5-6 weeks for the Citizenship and passport to be issued. The total process is approximately 8-11 months.",
          },
          {
            q: "WHAT ARE THE EDUCATIONAL BENEFITS OF GRENADA CITIZENSHIP FOR CHILDREN?",
            a: "Grenada’s public education is open for children up to the age of 16. Furthermore, St. George’s University is internationally accredited and widely regarded as the world’s finest US-run medical university outside of the US. St. Georges University has the greatest amount of licensed physicians in the United States per the 2108 FSMB Survey, with 10,791 licensed physicians. It has colleges of medicine, veterinary science, and arts and science schools. St. George’s Medical School graduates are typically well-positioned to practice at top hospitals in the United States and the United Kingdom. All Grenadian citizens receive a 90% Grenada Partnership Award, which means they only pay 10% of tuition fees for undergraduate programmes, including pre-medical and pre-veterinary courses. This applies to any Grenadian citizen who has been a resident in Grenada for at least one (1) year before registering in an undergraduate programme.",
          },
          {
            q: "WHAT MAKES THE GRENADA PASSPORT UNIQUE?",
            a: "To date, the Grenadian passport is one of the few in the world that allows visa-free travel to the United Kingdom for 180 days, the Schengen Area countries for 90 days, and Mainland China for 30 days. Grenada is the only Caribbean nation that ensures qualified applicants are entitled to apply for a USA E-2 Treaty visa, allowing the investor and family members to establish a company and lawfully reside in the United States of America. The list is evolving as Grenada continues to forge and strengthen new diplomatic relations.",
          },
          {
            q: "IS CITIZENSHIP IN GRENADA PASSED ON TO FUTURE GENERATIONS?",
            a: "Yes, Grenada citizenship can be passed on from generation to generation. The principal applicant, upon acquiring citizenship, can apply for citizenship for children, including minors. Second-generation citizens can also apply for citizenship for their children allowing the principal applicant’s grandchild to be a Grenadian citizen, and so on.",
          },
          {
            q: "How to become a citizen of Grenada",
            a: "One can become a citizen of Grenada by birth, descent, long-term residency, or aslo through the Citizenship by Investment Program via a donation or real estate investment.",
          },
          {
            q: "Is Grenada a strong passport?",
            a: "Yes, Grenada passport is considered strong, as it offer visa-free & visa-on-arrival access to numerous countries, including the UK, Schengen Area, China, and Russia.",
          },
          {
            q: "What is Grenada Passport Ranking 2025 ?",
            a: "As of 2025, Grenada passport ranks on 24th position globally, offering visa-free to 93 countries and visa-on-arrival to 39 other.",
          },
          {
            q: "How much does it cost to get Grenada citizenship?",
            a: "Obtaining a Grenadian Citizenship through investment involves two primary options:​ National Transformation Fund (NTF) Donation: A non-refundable contribution of USD 235,000 for a single applicant or a family of up to four. ​Real Estate Investment: An investment of at least USD 270,000 in a government-approved project.",
          },
        ],
      },
      about: `Grenada is an island nation located in the southeastern Caribbean that sits 160km north of Venezuela.  Famed for its natural beauty, Grenada is comprised of the island of Grenada itself, two smaller islands named ‘Carriacou’ and ‘Petite Martinique’, and then a cluster of smaller islands lying just offshore. Grenada is known for its tropical rainforests, beautiful white-sand beaches, and spice production, earning its nickname ‘The Island of Spice’ due to its strong production of Nutmeg and Mace.

As a member of the Commonwealth of Nations and a parliamentary democracy, Grenada has a stable environment politically speaking, and also has a thriving economy that is mainly driven by tourism, and the aforementioned agriculture of spices, fruit, and vegetables. 

In addition to its famed beauty and economic stability, Grenada is also known for its spirited culture; with strong African roots and French influence, the music, cuisine, and culture of the island is rich and varied. The country is ideal for those seeking a secondary passport in a beautiful nation; offering a quick and efficient Citizenship by Investment Programme.

The capital of the country is St. George’s
The currency is the Eastern Caribbean Dollar
Current population as of 2025: 117,276`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "The Citizenship by Investment (CBI) Programme is regulated by Grenada’s Citizenship by Investment Act 15, 2013. This law has been effectively documented and published. It is part of the Grenada legal system and approved by the national parliament. Any individual may apply for naturalisation and be eligible for Citizenship if the Government is satisfied that such a person has invested significantly in Grenada and passed Due Diligence successfully.",
        items: [],
        note: "",
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Saudi Arabia offers an attractive citizenship program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Mobility",
          subTitle: "Enhanced travel freedom for business and leisure.",
          icon: "Globe",
        },
        {
          title: "Favorable Tax Regime",
          subTitle: "Competitive tax environment for investors.",
          icon: "Coins",
        },
        {
          title: "High Quality of Life",
          subTitle: "Access to world-class infrastructure and services.",
          icon: "Heart",
        },
      ],
      importantDetails: [
        {
          title: "USD 235,000",
          description: "Minimum Investment by Donation",
          icon: "",
        },
        {
          title: "6 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "143+ Countries",
          description: "Visa - Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },

      about:
        "Saudi Arabia is a rapidly modernizing nation at the heart of the Middle East. With its 'Vision 2030' initiative, the Kingdom is diversifying its economy and opening up to global investment and tourism. It offers a unique blend of ancient heritage, ultra-modern infrastructure, and a high quality of life for professionals and investors.",
    },
  },
  {
    id: "antigua and barbuda-citizenship",
    slug: "antigua and barbuda-citizenship",
    name: "Antigua & Barbuda",
    type: "citizenship",
    shortDescription: `Planning to apply for Antigua and Barbuda Citizenship and Passport by Investment? Explore the requirements, including eligibility, investment options, costs, benefits, and processing time.`,
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1VS4EWV7c3zdBAj_cChK3n60Rp5RxEaE4",
    sections: {
      overview: {
        title: "Overview of Antigua & Barbuda",
        items: [
          {
            no: 1,
            title: "Geographic",
            description: `Antigua & Barbuda, is a captivating twin-island nation in the eastern Caribbean Sea, part of the Lesser Antilles archipelago. With a combined area of 440 square kilometres, these islands boast stunning white-sand beaches, crystal-clear turquoise waters, and lush landscapes, attracting visitors from around the world. The nation enjoys a tropical maritime climate characterised by warm temperatures throughout the year, with a relatively cooler and drier season from December to April.`,
          },
          {
            no: 2,
            title: "The capital city",
            description: `The capital city of Antigua & Barbuda is St. John’s, which is located on the island of Antigua, the larger and more populous of the two islands. Antigua is known for its historical sites, including Nelson’s Dockyard, a UNESCO World Heritage site, and Fort James, a well-preserved 18th-century fortress. Barbuda, the smaller and more secluded island, is renowned for its unspoiled environment, pristine beaches, and abundant wildlife. Among the natural attractions is the Frigate Bird Sanctuary, home to one of the largest nesting colonies of frigatebirds in the world.`,
          },
          {
            no: 3,
            title: "Language",
            description: `The capital city of Antigua & Barbuda is St. John’s, which is located on the island of Antigua, the larger and more populous of the two islands. Antigua is known for its historical sites, including Nelson’s Dockyard, a UNESCO World Heritage site, and Fort James, a well-preserved 18th-century fortress. Barbuda, the smaller and more secluded island, is renowned for its unspoiled environment, pristine beaches, and abundant wildlife. Among the natural attractions is the Frigate Bird Sanctuary, home to one of the largest nesting colonies of frigatebirds in the world.`,
          },
          {
            no: 4,
            title: "The economy of Antigua & Barbuda",
            description: `The economy of Antigua & Barbuda primarily relies on tourism, which accounts for a significant portion of the country’s GDP. In addition to its natural beauty, the nation offers a wide range of recreational activities such as sailing, scuba diving, and golfing, further enhancing its appeal as a travel destination. Other industries contributing to the economy include offshore banking, agriculture, and fishing. The Eastern Caribbean Dollar (XCD) is the official currency, and it is pegged to the US Dollar.`,
          },
          {
            no: 5,
            title: "International organisations",
            description: `Antigua & Barbuda is a member of several international organisations, including the United Nations, the Caribbean Community (CARICOM), the Organisation of Eastern Caribbean States (OECS), and the British Commonwealth. With a strong focus on sustainable development, the nation is making strides towards renewable energy, environmental conservation, and climate change adaptation to protect its natural resources and maintain its appeal as an idyllic Caribbean destination.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Visa-free access to 151 countries, including the UK, the Schengen area, and Russia. The only Caribbean passport that grants visa-free access to South Africa.",
          items: [],
          icon: "Globe",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "Antigua offers exemptions from paying taxes on capital gains, inheritance, wealth, gifts, and foreign income.",
          icon: "ShieldCheck",
        },
        {
          title: "Citizen Rights",
          subTitle: "A British Commonwealth country.",
          icon: "Coins",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for their family members, such as the main applicant’s spouse, children (biological or adopted) under the age of 30, parents aged 55 years or over, and siblings of any age.",
          icon: "MapPin",
        },
        {
          title: "Citizenship",
          subTitle: "Antigua passport holders can hold dual citizenship.",
          icon: "Zap",
        },
      ],
      importantDetails: [
        {
          title: "$230,000",
          description:
            "National Development Fund (NDF) (A one-time non-refundable contribution to the government fund for a family of up to four.)",
          icon: "",
        },
        {
          title: "$300,000",
          description:
            "Real Estate Investment (Investment in a government-approved real estate project, which must be held for at least five years.)",
          icon: "",
        },
        {
          title: "$260,000",
          description:
            "University of the West Indies (UWI) Fund (A contribution option specifically for large families of six or more people.)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Antigua and Barbuda Citizenship by Investment Requirements",
          description: "",
          items: [
            "Applicant must have no criminal record.",
            "The applicant must be in good health.",
            "Applicants must successfully pass due diligence checks.",
            "Applicants must reside for at least 5 days in the first 5 years of holding Antiguan citizenship.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "How to get Antigua & Barbuda Citizenship by Investment?",
          description:
            "To become a citizen of Antigua and Barbuda by investment, applicants can buy Antigua citizenship by either making a minimum donation of USD 230,000 to the National Development Fund or invest a minimum of USD 300,000 in an approved real estate development.",
          items: [
            {
              title: "Antigua & Barbuda Citizenship by Investment Options",
              list: [
                "Applicants must invest in a non-refundable contribution to the National Development Fund of USD 230,000",
                "An investment in an approved real estate development with a minimum value of USD 300,000",
                "Applicants can support the University of the West Indies and must donate USD 260,000",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title:
          "Antigua and Barbuda Citizenship by Investment Program Application Process",
        description:
          "The Antigua & Barbuda citizenship by investment application process is straightforward, and it may take up to 6 months between initiating the process and receiving the residency documents. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Antigua & Barbuda is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },

      faqs: {
        title: "Antigua and Barbuda Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "How Many Countries Do Antigua And Barbuda Passport Holders Have Access To Visa-Free And Visa-On-Arrival?",
            a: "Antigua passport holders can travel visa-free or enjoy visa-on-arrival to more than 151 countries, including the UK and Schengen countries, China, and Singapore. Additionally it is the only country in the Caribbean Citizenship program that offers visa-free access to South Africa.",
          },
          {
            q: "Who are the dependents that can be included in the application?",
            a: "The spouse of the principal applicant, biological or adopted children under 30 years of age and parents above 55 years of age are all dependents that can be included in the application. Siblings of any age, provided they are not married and have no children, can also be added to the list of dependents.",
          },
          {
            q: "How many years will an Antigua and Barbuda passport be valid?",
            a: "The Antiguan passport is valid for five (5) years and can be renewed for ten (10) years. At Passport Legacy, we can help you with passport renewals for an appropriate fee.",
          },
          {
            q: "How long does it take to acquire Antigua & Barbuda citizenship by investment?",
            a: "Antigua and Barbuda’s citizenship by investment application process takes approximately 6-9 months.",
          },
          {
            q: "What is the next step once the application has been accepted?",
            a: "The investor must fulfil the financial requirements to complete the process. Accordingly, a Citizenship Certificate will be issued to Passport Legacy, a government-authorised agent, which will then be shared with the investor to ensure that all information is valid and correct. Once checked and approved, the Citizenship Certificate will be submitted to the passport office for Passport Issuance.",
          },
        ],
      },
      about: `Antigua & Barbuda is a beautiful twin-island nation located in the Caribbean, to the East of St Kitts & Nevis and north-east of the Volcanic Island of Montserrat. Antigua and Barbuda is recognized world-wide for its famous white-sand beaches, crystal clear waters, and varied and textured history, boasting Nelson’s Dockyard, which was designated as a UNESCO World Heritage Site in 2016, and is the only continuously working Georgian Era dockyard in the world. 

The islands’ natural beauty mixed with its classic Caribbean laid-back vibe have made it a popular destination for tourists from around the world. Antigua & Barbuda has famously friendly and warm locals, which creates an incredibly welcoming environment for tourists and investors alike.

Antigua and Barbuda is a member of the British Commonwealth, which contributes to its stable political environment and strong economy. The main drivers of the local economy are tourism, finance, and offshore banking. In recent years, the country has also prioritized sustainable tourism and green energy, making significant investments in both, reflecting its commitment to sustainable and ethical growth and development. Due to all of these factors, Antigua and Barbuda is widely recognized as a tropical paradise that offers ample opportunities for investment, exploration, adventure, and relaxation. Antigua and Barbuda is the perfect destination for those seeking a secondary passport in a beautiful twin-island nation; offering a quick and efficient Citizenship by Investment Programme.

The capital of the country is St. John
The currency is the Eastern Caribbean Dollar
Current population as of 2025: 94,094`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "The Antigua and Barbuda Citizenship by Investment Program is considered amongst the best options for those interested in securing a second citizenship and passport. Established following Parliamentary approval, the Citizenship by Investment Program can be found in Section 6 of the Citizenship by Investment Act, 2013 (Act No. 2 of 2013). Amendments were made to The Act in 2014, and it is compounded by the Antigua and Barbuda Citizenship by Investment Regulations.",
        items: [],
        note: "",
      },
    },
  },
  {
    id: "nauru-citizenship",
    slug: "nauru-citizenship",
    name: "Nauru",
    type: "citizenship",
    shortDescription: `Planning to apply for Nauru Citizenship and Passport by Investment? Explore the requirements, including eligibility, investment options, costs, benefits, and processing timelines.`,
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1HRvMnBII8t3z4K4drLrGorV4yTfYehf_",
    sections: {
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Geographic",
            description: `Nauru is a tiny, oval-shaped island situated in the Pacific Ocean, just south of the equator. Covering only 21 square kilometers, it is officially the third smallest country in the world. The island is surrounded by a coral reef and contains beautiful beaches. Most of the population reside along Nauru’s coastal areas, and its tropical climate supports a mix of native vegetation and coconut palms.`,
          },
          {
            no: 2,
            title: "The Capital City",
            description: `Nauru does not have an official capital city, making it unique amongst recognised nations. Government offices and key administrative functions are concentrated in Yaren, a district on the island’s southern coast. Due to this fact, Yaren can be viewed as the de facto capital and is home to the Parliament House, the airport, and other essential facilities.`,
          },
          {
            no: 3,
            title: "The Official Languages",
            description: `Nauru’s population of roughly 12,000 people are primarily of Micronesian descent, with traces of Polynesian and European ancestry. The vast majority of the population are Christians, belonging to either the Nauruan Congregational Church or the Catholic Church. The official languages are Nauruan, a distinct Micronesian language, and English. English is widely spoken and used in government, business, and media, making it a useful second language for investors and visitors. Additionally, the country is a member of the United Nations, the Commonwealth of Nations, and the Pacific Islands Forum, reflecting its strong ties to both regional and international communities. Nauru’s currency is the Australian Dollar (AUD), and its economy relies heavily on phosphate mining and the sale of phosphate-related by-products. However, in recent years, the country has been focusing on diversifying its economy through sustainable tourism and the development of a robust digital economy.`,
          },
          {
            no: 4,
            title: "Economy",
            description: `Nauru’s economy historically relied on its phosphate reserves, which brought significant wealth during the 20th century. However, the depletion of these reserves led to economic challenges, forcing the country to diversify its income sources. Initiatives like the Nauru Economic and Climate Resilience Citizenship by Investment Programme are in place to counter these challenges.`,
          },
          {
            no: 5,
            title: "International Organisations",
            description: `Nauru is a member of several international organizations despite its small size. It joined the United Nations (UN) in 1999 and actively participates in regional and global forums. Nauru is also a member of the Commonwealth of Nations, the Pacific Islands Forum (PIF), and the Asian Development Bank (ADB).`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Visa free access to global hubs such as Singapore, the UAE, the UK, Ireland and Hong Kong.",
          items: [],
          icon: "Globe",
        },
        {
          title: "For Familily",
          subTitle:
            "A single applicant can apply for their family members such as the main applicant’s spouse, children under 30, siblings, and parents or grandparents over the age of 55.",
          icon: "Coins",
        },
        {
          title: "Citizen Rights",
          subTitle: "Nauru passport holders can hold dual citizenship.",
          icon: "Zap",
        },
        {
          title: "Application Time",
          subTitle:
            "There is no need to reside in the country during the citizenship process.",
          icon: "ShieldCheck",
        },
        {
          title: "Citizenship",
          subTitle: "Become a Nauru citizen in just 3-4 months.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "USD 105,000",
          description: "Minimum Investment by Donation",
          icon: "",
        },
        {
          title: "3 - 4 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "107 Countries",
          description: "Visa - Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "How to get Nauru Citizenship By Investment ?",
          description: "",
          items: [
            "Applicant must be at least 18 years of age.",
            "Applicant must not have any criminal record.",
            "Applicant should successfully pass due diligence.",
            "Applicant must undertake the Nauru Citizenship Interview.",
            "Applicant must swear allegiance to Nauru.",
            "The application process takes between 3-4 months",
          ],
          note: "",
        },
        investmentOptions: {
          title: "How to get Nauru Citizenship By Investment ?",
          description:
            "To obtain citizenship in Nauru by an investment program, applicants must make a minimum donation of USD 105,000 to the Nauru Economic and Climate Resilience Citizenship by Investment Programme. Applicants can secure their Nauru passports within 3-4 months, granting visa-free access to over 107 countries, including Singapore, the UAE, the UK, and Hong Kong.",
          items: [
            {
              title: "ANauru Citizenship By Investment Option",
              list: [
                "Contribute no less than USD 105,000 to the Nauru Economic and Climate Resilience",
                "Citizenship by Investment Programme",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "Nauru Application Process",
        description:
          "The application process for Nauru Citizenship by investment is straightforward, and applications are currently being processed in 3-4 months. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Antigua & Barbuda is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Nauru Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "Can I include my family in the application?",
            a: "Yes, a single applicant can apply for their family members such  spouse, children under 30, siblings (unmarried), and parents or grandparents over the age of 55.",
          },
          {
            q: "How long does it take to acquire a Nauru passport?",
            a: "Applications for the Nauru Economic and Climate Resilience Citizenship by Investment Programme are currently being processed in just 3-4 months.",
          },
          {
            q: "What is the next step once the application has been approved?",
            a: "Antigua and Barbuda’s citizenship by investment application process takes approximately 6-9 months.",
          },
        ],
      },
      about: `Formerly known as the Pleasant Island, Nauru is the third smallest country in the world (behind the Vatican City and Monaco) at just 21 square km in size and has no neighboring countries; Banaba of Kiribati is the closest island to Nauru, and it is over 190 miles away to the East. Located in the Central Pacific Ocean, known specifically as Micronesia, Nauru is known for its year-round warm and humid climate and coastal beaches, making it a popular destination for visitors seeking a place to explore and relax.

Politically, Nauru is a democracy, with the President serving as both head of state and government; historically the political environment has been marked by stability and peace. For much of its history, Nauru’s main source of economic output came via phosphate mining. However, since the phosphate reserves exhausted in the late 1990’s, Nauru has shifted its focus to finding alternative sources of revenue.

With just 10,000 residents, Nauru has an incredibly close-knit culture with a strong emphasis on family and community, and the island’s population is mostly made up of indigenous Nauruans of Micronesian descent. With its year-round tropical climate, friendly population, and favorable tax system, Nauru is an island that has much to offer investors. Nauru is an ideal destination for those seeking a secondary passport in a small, beautiful nation; offering a quick and efficient Citizenship by Investment Programme.

Due to its size, Nauru doesn’t have an official capital
The currency is Australian dollar (AUD)
The Current population as of 2025 , circa 12,009`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "Established following governmental approval in November 2024, the Nauru Economic and Climate Resilience Citizenship by Investment Programme is among the most affordable citizenship by investment programs worldwide.",
        items: [],
        note: "",
      },
    },
  },
  {
    id: "sao tome and principe-citizenship",
    slug: "sao tome and principe-citizenship",
    name: "São Tomé & Príncipe",
    type: "citizenship",
    shortDescription: `The São Tomé & Príncipe citizenship by investment programme was established in 2025 and carries a minimum investment of $90,000, making it the most`,
    heroImage:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1OStQXPzup_1hUI0hgxSd7j7U30hAAYgG",
    sections: {
      overview: {
        title: "Overview of São Tomé & Príncipe",
        items: [
          {
            no: 1,
            title: "Geographic",
            description: `
São Tomé & Príncipe is a small island nation located in the Gulf of Guinea, roughly 200km’s West of Gabon and Equatorial Guinea. It is made up of two main islands (the first being São Tomé and the second being Príncipe) and then several smaller islets not big enough to register as official islands. It has a total land mass of 1,000KM², making it the second smallest country on the continent of Africa, with only the Seychelles being smaller.`,
          },
          {
            no: 2,
            title: "The capital city",
            description: `
The capital and largest city of São Tomé & Príncipe is São Tomé.`,
          },
          {
            no: 3,
            title: "Language",
            description: `
Whilst creole is widely spoken across São Tomé & Príncipe, the official language of the country is Portuguese, due to its discovery by Portuguese explorers João de Santarém and Pedro Escobar in roughly 1470.`,
          },
          {
            no: 4,
            title: "Economy",
            description: `
São Tomé & Príncipe’s economy is mainly driven by agriculture (primarily the growing and selling of coca), fishing and a rapidly growing tourism sector, which is predicted to keep growing at large scale.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Visa-Free or e-visa access to over 93 countries, including South Africa, Singapore & Hong Kong.",
          icon: "Globe",
        },
        {
          title: "Fast Processing",
          subTitle:
            "With a processing time of just 1-2 months, the São Tomé & Príncipe Citizenship by Investment programme is one of the fastest in the world.",
          icon: "Coins",
        },
        {
          title: "Citizen Rights",
          subTitle: "All the citizenship rights of a São Toméan.",
          icon: "Heart",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for their family members, such as the main applicant’s spouse, dependent children under 30, and parents aged 55 and over.",
          icon: "Zap",
        },
        {
          title: "Citizenship",
          subTitle:
            "São Tomé & Príncipe passport holders can hold dual citizenship",
          icon: "Zap",
        },
      ],
      importantDetails: [
        {
          title: "USD 90,000",
          description: "Contribution to the National Transformation Fund",
          icon: "",
        },
        {
          title: "2 - 3 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "93+ Countries",
          description: "Visa-Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "São Tomé & Príncipe Citizenship Personal Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Applicant must be at least 18 years old.",
            "Applicant must have no criminal record.",
            "The applicant must be in good health.",
            "Applicants must successfully pass due diligence checks.",
            "Applicants must show proof of a valid source of income.",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Who Can Get São Tomé & Príncipe Citizenship?",
          description:
            "To obtain citizenship in São Tomé & Príncipe, applicants must make an investment into the National Transformation Fund of:",
          items: [
            {
              title: "",
              list: [
                "$90,000 for a single applicant",
                "$95,000 for a family of two to four",
                "$5,000 for each additional dependant",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "São Tomé & Príncipe Application Process",
        description:
          "The application process for São Tomé & Príncipe is straightforward, and applications are currently being processed in 1-2 months. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Antigua & Barbuda is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "São Tomé & Príncipe Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "How Long does it take to acquire an São Tomé & Príncipe passport?",
            a: "While processing times can’t be guaranteed, typically applications are processed and citizenship is achieved within just 1-2 months.",
          },
          {
            q: "What are the investment options available for obtaining citizenship in São Tomé & Príncipe?",
            a: "To obtain citizenship in São Tomé & Príncipe, applicants must invest into the National Transformational fund: $90,000 for a single applicant, $95,000 for a family of 2-4 and $5,000 for each dependant thereafter.",
          },
          {
            q: "Can family members be included in the São Tomé & Príncipe citizenship program application?",
            a: "Yes, applications can include the main applicant’s spouse, children under 30, and parents over the age of 55.",
          },
          {
            q: "What are the residence requirements for the São Tomé & Príncipe citizenship program?",
            a: "There are no residence requirements for the São Tomé & Príncipe citizenship; applicants do not need to stay or reside in the country in order to keep their citizenship. On top of that, dual citizenship is allowed, meaning the applicant will not need to give up their existing passport to hold one from São Tomé & Príncipe.",
          },
          {
            q: "What documents are required for São Tomé & Príncipe citizenship by investment application?",
            a: `There are a few documents applicants will need in order to qualify for São Tomé & Príncipe citizenship:
Birth Certificate
Police Clearance Certificate
Passport pictures
Current Passport
Proof of Address
Medical Clearance Results
Source of Funds Documentation
Police Clearance Certificate`,
          },
          {
            q: "What is the process for applying for São Tomé & Príncipe citizenship?",
            a: `The process for applying for São Tomé & Príncipe Citizenship is fairly simple. First, applicants will go through the assessment and onboarding process, consulting with Passport Legacy advisors and passing the due diligence checks.

Next comes the application submission phase, where the client is fully onboarded, and retainer fees are paid. Documents are meticulously prepared before an application is submitted.

Once submitted, the application will be processed. This is followed by government pre-approval, at which point the investment requirements must be fulfilled.

Following this step, applications will be approved, after which a São Tomé & Príncipe passport will be issues within 1-2 months.`,
          },
          {
            q: "Is it possible to gain São Tomé & Príncipe citizenship by marriage and what are the requirements?",
            a: "Yes, it is possible to gain São Tomé & Príncipe citizenship by marriage. When applicants fulfil the investment requirements, the main applicant’s spouse can be included.",
          },
          {
            q: "Does São Tomé & Príncipe recognize dual citizenship?",
            a: "Yes, São Tomé & Príncipe recognizes dual citizenship. Investors can retain their original nationality whilst holding São Tomé & Príncipe citizenship. The country’s laws do not require new citizens to renounce their existing citizenship.",
          },
        ],
      },

      about: `São Tomé & Príncipe is a small island nation located in the Gulf of Guinea, roughly 200km’s West of Gabon and Equatorial Guinea. It is made up of two main islands (the first being São Tomé and the second being Príncipe) and then several smaller islets not big enough to register as official islands. It has a total land mass of 1,000KM², making it one of the smallest countries on the continent of Africa.

The capital is officially São Tomé, and the islands enjoy a warm and tropical climate year-round. Whilst Creole dialects are widely spoken throughout the islands, the officially recognized language is Portuguese. The economy of São Tomé is primarily driven by agriculture (primarily coca), fishing and a rapidly growing tourism sector too. All in all, São Tomé & Principe is a steadily growing and attractive destination for investors and families alike.

Why Choose São Tomé & Príncipe Citizenship by Investment (CBI) Program?
There are many benefits to obtaining an São Tomé & Príncipe passport, such as visa-free access to over 93 countries (including South Africa, Singapore, and Hong Kong, while enjoying an e-visa to the UAE or Qatar). São Tomé & Príncipe citizenship also carries tax benefits, as citizens don’t pay tax on wealth/inheritance, and personal income tax rates are very low.

There are also no minimum stay requirements, which means investors won’t need to physically reside in São Tomé & Príncipe in order to keep their citizenship. The programme also carries no language test requirement (as is standard with some other programmes). Applicants for São Tomé & Príncipe also benefit from being able to include their family in the application, with parents over the age of 55, spouses, and children under the age of 30 all allowed to form part of one application.`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "São Tomé and Príncipe’s Citizenship by Investment and Donation Program is established under the Decree-Law, which came into effect on 1 August 2025. The program is governed by the Regulation on Nationality by Investment and Donation, and provides a legal pathway for foreign nationals to acquire São Toméan citizenship through naturalisation. Applicants must meet the requirements outlined in Decree Law No. 07/2022 and make a qualifying contribution to the country’s National Transformation Fund. This initiative supports national development while offering investors the opportunity to become citizens of São Tomé and Príncipe through a transparent and structured process.",
        items: [],
        note: "",
      },
    },
  },
  {
    id: "st lucia-citizenship",
    slug: "st lucia-citizenship",
    name: "St Lucia",
    type: "citizenship",
    shortDescription: `Secure St Lucia citizenship by investment. Learn about St Lucia passport benefits, visa-free travel options, and the Saint Lucia citizenship program.`,
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1V_9XkfkeiWWtu69zpvYlp4S63bAO_d5I",
    sections: {
      overview: {
        title: "Overview of ST. Lucia",
        items: [
          {
            no: 1,
            title: "St. Lucia is an enchanting Caribbean island nation",
            description: `St. Lucia is an enchanting Caribbean island nation located in the eastern Caribbean Sea, part of the Lesser Antilles chain. Known for its breathtaking landscapes, pristine beaches, and vibrant culture, St. Lucia is a popular destination for tourists and investors alike. The country consists of the main island, St. Lucia, and several smaller islets, covering a total area of 616 square kilometres.`,
          },
          {
            no: 2,
            title: "St. Lucia is an enchanting Caribbean island nation",
            description: `The capital city of St. Lucia is Castries
The capital city of St. Lucia is Castries, a bustling port city situated on the northwestern coast of the island. Castries is renowned for its lively markets, charming colonial architecture, and panoramic views of the surrounding mountains and sea. The island’s lush interior is characterised by dense rainforests, striking volcanic formations, and the iconic Pitons, a pair of dramatic volcanic spires that are a UNESCO World Heritage Site.`,
          },
          {
            no: 3,
            title: "English is the official language of St. Lucia",
            description: `
English is the official language of St. Lucia, a reflection of its history as a former British colony. The nation gained independence in 1979 and is now a parliamentary democracy within the British Commonwealth. St. Lucia’s population, estimated at around 185,000, is a diverse mix of African, East Indian, and European descent, resulting in a rich cultural fusion of customs, music, and cuisine.`,
          },
          {
            no: 4,
            title: "Tourism plays a crucial role in St. Lucia's economy",
            description: `
Tourism plays a crucial role in St. Lucia’s economy, contributing significantly to the country’s GDP. The island’s natural beauty, combined with its wide range of recreational activities such as sailing, scuba diving, and hiking, makes it an attractive destination for travellers. Other key sectors driving the economy include agriculture, with St. Lucia being a significant producer of bananas, as well as fishing and manufacturing. The official currency is the Eastern Caribbean Dollar (XCD), pegged to the US Dollar.`,
          },
          {
            no: 5,
            title: "As a member of various international organisations",
            description: `
As a member of various international organisations, including the United Nations, the Caribbean Community (CARICOM), the Organisation of Eastern Caribbean States (OECS), and the British Commonwealth, St. Lucia actively participates in regional and global affairs. Dedicated to promoting sustainable development, St. Lucia has achieved notable advancements in fields like renewable energy, environmental protection, and climate change mitigation, thereby safeguarding its natural splendour and resources for generations to come.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access and Visa-On-Arrival ",
          subTitle:
            "St. Lucia passport allows its holder to travel visa-free and visa-on-arrival to a total of 147 countries, including Singapore, Hong Kong, the United Kingdom, and the Schengen area.",
          icon: "Globe",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "Applicants are exempt from the capital gains tax, foreign income tax, and inheritance tax.",
          icon: "Coins",
        },
        {
          title: "For Family",
          subTitle:
            "Citizenship is passed onto future generations; newborn children can be added as well.",
          icon: "Heart",
        },
        {
          title: "Application Time",
          subTitle:
            "Applicants do not need to be in St. Lucia during the time of application.",
          icon: "ShieldCheck",
        },
        {
          title: "The Process",
          subTitle: "The process takes around 6 months.",
          icon: "ShieldCheck",
        },
        {
          title: "Banking Access",
          subTitle: "Access to European and offshore banking.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "USD 240,000",
          description: "  Minimum Investment by Donation",
          icon: "",
        },
        {
          title: "USD 300,000",
          description: "Minimum Investment in Real Estate",
          icon: "",
        },
        {
          title: "12-14 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "Free Visa",
          description: "Access to 147 Countries",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "ST. Lucia Citizenship by Investment Programme Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Clean criminal record",
            "Proof of funds",
            "Applicant must have a clean criminal record",
            "Applicants must successfully pass due diligence to proceed with the programme",
            "Applicant must be in good health",
            "It is not a requirement to reside in St. Lucia during the time of application",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Saint Lucia Citizenship By Investment Programme",
          description:
            "To obtain Saint Lucia Citizenship By Investment, applicants can either make a minimum donation of USD 240,000 to the National Economic Fund or invest a minimum of USD 300,000 in an approved real estate project.",
          items: [
            {
              title:
                "To qualify for economic citizenship by investment, applicants may choose from one of the three options:",
              list: [
                "Invest USD 240,000 as a non-refundable contribution to St. Lucia's National Economic Fund.",
                "Invest a minimum value of USD 300,000 in an approved real estate development.",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title:
          "Application Process for ST. Lucia Citizenship by Investment Program",
        description:
          "The application process to get ST. Lucia Citizenship by Investment is straightforward, and it may take up to 9 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client is onboarded and retainer fees are paid.",
              "Documents are prepared and an application for St. Kitts & Nevis is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government pre-approval is received.",
              "Investment requirements are fulfilled.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Antigua & Barbuda is issued in 6 months.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Saint Lucia Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "WHAT IS THE ST. LUCIA CITIZENSHIP ACT?",
            a: "The St. Lucia Citizenship by Investment Act No 14 of 2015 enables individuals to obtain citizenship of St Lucia by registration following a qualified investment.",
          },
          {
            q: "WHICH LANGUAGE SHOULD THE SUPPORTING DOCUMENTATION BE PRESENTED IN?",
            a: "All supporting documentation must be submitted in its original language. If the supporting document’s original language is not English, Passport Legacy will manage and oversee the original’s official and authentical English translation.",
          },
          {
            q: "WHAT FAMILY MEMBERS CAN I INCLUDE IN MY CBI APPLICATION FOR ST. LUCIA?",
            a: "The primary applicant can include the following family members in their application: Spouse, children up to the age of 30 and dependent on the principal applicant, dependent parents who are above 55 years of age and siblings up to the age of 18",
          },
          {
            q: "CAN I PAY FOR MY ST. LUCIA CITIZENSHIP IN CRYPTOCURRENCY?",
            a: "Passport Legacy can accept direct cryptocurrency payments for application and processing fees. However, the principal investment for St Lucia Citizenship is payable to the St Lucian Citizenship by Investment Unit. These funds will need to be paid in USD. For more details on how Passport Legacy can assist you with cryptocurrency payments, please contact us here.  https://bit.ly/Second_Citizenship",
          },
        ],
      },
      about: `St. Lucia is an island nation located in the eastern Caribbean, situated South of Martinique and North of St Vincent and the Grenadines, known for its stunning natural landscapes, and friendly, warm population. Boasting beautiful and naturally diverse rainforests, majestic mountain ranges, and beautiful white-sand beaches, St. Lucia is extremely popular among nature lovers, adventure seekers and those in search of a relaxing holiday destination.

St Lucia is a member of the British Commonwealth, and as such has a stable political climate and a diverse economy that is mainly fueled by tourism and financial services. Much like St. Kitts & Nevis, the St. Lucia government has committed to sustainable development and has been investing in renewable energy and eco-tourism initiatives to safeguard the island nation’s future from an ecological perspective. With its beautiful landscapes, friendly population, and energetic environment, St. Lucia remains a captivating destination for investors and tourists alike. St. Lucia is an ideal destination for those seeking a secondary passport in a beautiful eastern Caribbean island nation; offering a quick and efficient Citizenship by Investment Programme.

The capital of the country is Castries
The currency is the Eastern Caribbean dollar
The current population as of 2025 : 180,043`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "São Tomé and Príncipe’s Citizenship by Investment and Donation Program is established under the Decree-Law, which came into effect on 1 August 2025. The program is governed by the Regulation on Nationality by Investment and Donation, and provides a legal pathway for foreign nationals to acquire São Toméan citizenship through naturalisation. Applicants must meet the requirements outlined in Decree Law No. 07/2022 and make a qualifying contribution to the country’s National Transformation Fund. This initiative supports national development while offering investors the opportunity to become citizens of São Tomé and Príncipe through a transparent and structured process.",
        items: [],
        note: "",
      },
    },
  },
  {
    id: "turkiye-citizenship",
    slug: "turkiye-citizenship",
    name: "Türkiye",
    type: "citizenship",
    shortDescription: `Get Turkey passport by investment with Passport Legend. Invest USD 500,000+ to get citizenship by investment in Turkey within 6 months. Contact us today!`,
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1MjY1I0j6SlNCwF0lhI7sddUQLSoViAW8",
    sections: {
      overview: {
        title: "Overview of Turkey",
        items: [
          {
            no: 1,
            title:
              "Turkey is a captivating country located at the crossroads of Europe and Asia",
            description: `Turkey is a captivating country located at the crossroads of Europe and Asia, offering visitors a unique blend of history, culture, and natural beauty. Turkey covers an area of approximately 783,000 square kilometres and has a population of over 82 million people, making it one of the largest and most populous countries in the region.
`,
          },
          {
            no: 2,
            title: "The country has a rich cultural heritage",
            description: `The country has a rich cultural heritage that reflects its diverse history, with influences from Greek, Roman, Byzantine, and Ottoman empires. Turkey’s modern culture is also vibrant and dynamic, with a thriving contemporary art scene, culinary traditions, and a bustling nightlife. The country’s stunning natural landscapes include beautiful beaches, towering mountains, vast steppes, and ancient forests, making it a popular destination for nature-lovers and adventure-seekers alike.
`,
          },
          {
            no: 3,
            title: "Turkey is home to several UNESCO World Heritage Sites",
            description: `Turkey is home to several UNESCO World Heritage Sites, including the historic city of Istanbul, the fairy chimneys of Cappadocia, and the ancient ruins of Ephesus. The country also offers a range of cultural festivals and events throughout the year, providing visitors with the opportunity to experience traditional music, dance, and cuisine.
`,
          },
          {
            no: 4,
            title: "Turkey has a stable political climate",
            description: `Turkey has a stable political climate, with a parliamentary democracy that operates within the framework of a republic. The country’s constitution provides freedom of speech, assembly, and the press, and the country has a strong tradition of civil society participation in decision-making processes.
`,
          },
          {
            no: 5,
            title: "The economy of Turkey is diverse",
            description: `The economy of Turkey is diverse, with sectors including textiles, automotive manufacturing, electronics, and agriculture. The country is also a popular destination for tourists, with over 50 million visitors annually. Turkey actively promotes sustainable development and has implemented policies to protect the environment, promote human rights, and support economic growth.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-On-Arrival",
          subTitle:
            "Visa-on-arrival and visa-free travel to 111 countries and territories worldwide, including Brazil, Singapore, and Hong Kong.",
          icon: "Home",
        },
        {
          title: "For Family",
          subTitle:
            "The applicant’s family members, spouse, parents, and children up to 18 years old can be qualified dependents for the residence card.",
          icon: "MapPin",
        },
        {
          title: "Passport Holder",
          subTitle:
            "A Turkish passport holder can apply for an E-2 Investor visa in the United States of America.",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "          USD 500,000",
          description: "Minimum Capital Investment",
          icon: "",
        },
        {
          title: "          USD 400,000",
          description: "Minimum Investment In Real Estate",
          icon: "",
        },
        {
          title: "          6 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "          111 Countries",
          description: "Visa - Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Turkey Citizenship by Investment Requirements",
          description: "",
          items: [
            "            Applicants must pass due diligence in order to apply for the programme.",
            "Applicant must be a minimum of 18 years of age.",
            "Applicant must not have a criminal record.",
            "Applicant must be in good health.",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Turkey Citizenship By Investment Programme",
          description: "",
          items: [
            {
              title:
                "To get Turkish citizenship through investment, applicants are required to choose from one of the following programme options:",
              list: [
                "The Real Estate Development Programme requires a minimum investment of USD 400,000 in real estate, either commercial or residential.",
                "The Cash Investment Programme involves making a minimum fixed capital investment of USD 500,000 or equivalent in foreign currency or Turkish lira, attested by the Ministry of Industry and Technology. Alternatively, applicants can deposit at least USD 500,000 or equivalent in foreign currency or Turkish lira in banks operating in Turkey, with the condition of not withdrawing the same for at least three years.",
                "Lastly, the Company Set-Up Programme requires the creation of at least 50 jobs, attested by the Ministry of Family, Labor and Social Services.",
              ],
            },
          ],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title:
          "Application Process for Turkey Citizenship by Investment Program",
        description:
          "The application process for Turkey Citizenship by Investment Program is straightforward, and it may take up to 6 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
              "Client is onboarded and retainer fees are paid.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client travels to Turkey.",
              "Real estate acquisition requirements are fulfilled, legal process commences, and bank account is opened.",
              "Turkish residence permit is obtained.",
              "Documents are prepared and application for Turkish citizenship is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: ["Application is processed.", "Application is approved."],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Turkish citizenship documents are issued.",
              "Application for Turkish passport is submitted.",
              "Passport is handed over to client by Passport Legend’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Turkey Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "WHAT ARE THE BENEFITS OF ACQUIRING A TURKISH PASSPORT?",
            a: "Turkish passport holders have visa-free access to 110 countries, including Japan, Singapore, and Hong Kong. You will also be eligible for an E-2 Investor Visa in the United States of America, which provides a five-year renewable residence card. Turkey has one of the fastest-growing economies in the world, and investors can benefit from the growing markets a wide array of business opportunities.",
          },
          {
            q: "ONCE I ACQUIRE TURKISH CITIZENSHIP, AM I ALLOWED TO WORK IN TURKEY? OR DO I REQUIRE A WORK PERMIT?",
            a: "After acquiring Turkish citizenship through investment, you will have the same rights as any Turkish citizen, and therefore, you will be able to work in Turkey without needing a work permit.",
          },
          {
            q: "IS PROPERTY OWNERSHIP IN TURKEY UNDER THE CITIZENSHIP BY INVESTMENT PROGRAM INFINITE?         ",
            a: "After purchasing and receiving title deeds of property in your name, as a landowner, you will acquire the same rights as other Turkish property owners. Under the Turkish citizenship by investment program, you cannot sell the property for three (3) years; however, after that, you have the freedom to hold or sell the property with no restrictions.",
          },
          {
            q: "WHICH NATIONALITIES CAN APPLY FOR TURKISH CITIZENSHIP BY INVESTMENT?",
            a: "Citizens of any country can apply for Turkish citizenship by investment as long as they have the financial means to invest. The minimum investment for Turkish citizenship by investment program is USD 400,000.",
          },
        ],
      },
      about: `Turkey (officially the Republic of Türkiye) is a unique country in that it is part of two continents, Europe and Asia, and as such it contains a blend of cultures, history, and natural beauty. Turkey’s culture and customs reflect its diverse history and cultural depth, with influences from the Greek, Roman, Byzantine, and Ottoman empires. In more recent times, Turkey has a dynamic culture containing a thriving contemporary art landscape, unique culinary traditions, world-famous music, and a spirited nightlife scene.

The Turkish economy is the 19th largest in the world, with a varied range of sectors that include textiles, automotive manufacturing, electronics, and agriculture. Turkey is officially a member of various international organizations, including the United Nations, NATO, and the Organization for Economic Cooperation and Development (OECD), and as such is an important player in global geopolitics.

A Turkish passport offers several benefits, including visa-free or visa-on-arrival access to over 100 countries, and the opportunity to establish residency in a strategically located country that spans two continents. Turkey is an ideal destination for those seeking a secondary passport in a beautiful country; offering a quick and efficient Citizenship by Investment Programme.

The capital of the country is Ankara
The currency is the Turkish Lira (TL)
The current population as of 2025 : 87,629,938`,
      legalBasis: {
        title: "Legal Basis",
        description:
          "Article 20 of the Regulation on the Implementation of the Turkish Nationality Law (“Regulation “) stipulates exceptional cases based on which Turkish nationality is obtained and went through extensive amendments by Presidential Decree No. 106 (“Decree “). This was published in the Official Gazette dated September 19, 2018 and entered into force on the same date. A new eligibility requirement for Turkish citizenship has been added to Article 20 of the Regulation. As a result, if the Capital Markets Board decides that a foreign national has bought a share in a real estate investment fund or venture capital fund with a stated minimum value of foreign currency or Turkish Lira on the condition that such foreigner will hold the share for at least three years, Turkish citizenship may be obtained by presidential decree.",
        items: [],
        note: "",
      },
    },
  },

  {
    id: "vanuatu-citizenship",
    slug: "vanuatu-citizenship",
    name: "Vanuatu",
    type: "citizenship",
    shortDescription: `Explore the Vanuatu Citizenship by Investment Program. Obtain a passport quickly by investing $130,000 and secure citizenship for you and your family within 3–5 months, with visa-free access to 112 countries.`,
    heroImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=600&fit=crop",
    brochureUrl:
      "https://drive.google.com/uc?export=download&id=1FjRYi288AiIkPqQ8naQWp6y07gAod28k",
    sections: {
      overview: {
        title: "Overview of Vanuatu",
        items: [
          {
            no: 1,
            title: "Vanuatu is an enchanting island nation",
            description: `Vanuatu is an enchanting island nation located in the South Pacific Ocean, comprising more than 80 islands with breathtaking natural landscapes, including volcanic origins, white sand beaches, turquoise waters, and lush tropical rainforests. The archipelago stretches over 1,300 kilometres and covers an area of approximately 12,189 square kilometres, making it one of the Pacific’s largest island nations.`,
          },
          {
            no: 2,
            title: "Vanuatu has a unique cultural heritage",
            description: `Vanuatu has a unique cultural heritage that reflects its diverse history. The country has been inhabited by Melanesian people for thousands of years, who have preserved their traditions, customs, and language. The country gained independence in 1980, and today, its official languages are English, French, and Bislama, a Creole language that evolved from the interaction between local communities and European traders.`,
          },
          {
            no: 3,
            title:
              "The country is home to a range of festivals and cultural events",
            description: `The country is home to a range of festivals and cultural events throughout the year, including the popular Nagol Land Diving ceremony on the island of Pentecost. Visitors can also experience local handicrafts, music, and cuisine, all of which reflect the country’s unique blend of Melanesian and European influences.`,
          },
          {
            no: 4,
            title: "The country has a stable political climate",
            description: `The country has a stable political climate, with a parliamentary democracy that operates within the framework of a republic. Vanuatu’s constitution provides for freedom of speech, assembly, and the press, and the country has a strong tradition of civil society participation in decision-making processes.`,
          },
        ],
      },
      benefits: [
        {
          title: "visa-free and visa-on-arrival",
          subTitle:
            "Enjoy travel freedom to 112+ countries, including major hubs in Asia and the Commonwealth.",
          icon: "Globe",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "Vanuatu imposes no income, wealth, capital gains, or inheritance taxes, offering a highly efficient fiscal environment.",
          icon: "Coins",
        },
        {
          title: "Dual Citizenship Allowed",
          subTitle: "Vanuatu permits dual citizenship without limitations.",
          icon: "Zap",
        },
        {
          title: "Fast Citizenship Processing",
          subTitle:
            "Citizenship is typically granted within 3–4 months, making it one of the fastest CBI programs in the world.",
          icon: "ShieldCheck",
        },
        {
          title: "No Residency Requirements",
          subTitle:
            "Applicants are not required to visit or reside in Vanuatu during or after the process.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "USD 130,000",
          description: "Minimum Investment by Donation",
          icon: "",
        },
        {
          title: "3 - 5 Months",
          description: "Time to Citizenship",
          icon: "",
        },
        {
          title: "112 Countries",
          description: "Visa - Free Access",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Vanuatu Citizenship by Investment Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Applicant must be at least 18 years of age.",
            "Applicant must not have any criminal record.",
            "The application process takes between 2-3 months.",
            "Applicant should successfully pass due diligence.",
            "Applicant should possess valid medical health insurance.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Vanuatu Citizenship By Investment Programme",
          description: "",
          items: [
            {
              title:
                "To obtain Vanuatu citizenship by investment, applicants must make a minimum USD 130,000 contribution to the national Development Support Program (DSP). Upon approval, investors receive full citizenship and a Vanuatu passport within 2–3 months, enabling travel to 100+ countries and providing enhanced global mobility. Investment Requirement:",
              list: [
                "Minimum USD 130,000 contribution to the DSP",
                "Additional fees apply based on the number of dependents included",
              ],
            },
            {
              title:
                "Vanuatu Citizenship by Investment Programme Explained The DSP is the official economic citizenship initiative of Vanuatu. Investors contributing to the program receive:",
              list: [
                "Full citizenship",
                "Passport issuance",
                "Visa-free mobility benefits",
                "Lifetime nationality passed to future generations",
              ],
            },
            {
              title: "Vanuatu Citizenship by Investment Benefits",
              list: [
                "Ideal for global mobility in Asia-Pacific, UK & Caribbean regions",
                "Fast-track approvals for high-net-worth individuals (HNWIs)",
                "Low document burden — no language tests, interviews, or residency",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "Vanuatu Application Process",
        description:
          "The process is transparent, efficient, and designed to be completed within 3 months.The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legend’s client advisors.",
              "Passport Legend’s due diligence check is conducted.",
              "Retainer fees are initiated",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Required documents prepared",
              "Application filed with Vanuatu’s Financial Intelligence Unit (FIU)",
              "Approval-in-principle granted",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Additional documentation submitted",
              "Government conducts enhanced due diligence",
              "Second payment made",
              "Final approval issued",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Government contribution completed",
              "Certificates of citizenship issued",
              "Passport delivered to the client via Passport Legacy",
            ],
          },
        ],
      },
      faqs: {
        title: "São Tomé & Príncipe Citizenship by Investment FAQ's",
        qAndA: [
          {
            q: "CAN A VANUATU PASSPORT ENTER ANY COUNTRY UNDER THE EUROPEAN UNION?",
            a: "Since November 2022, the council of the European Union has decided to suspend the visa-waiver agreement with Vanuatu fully. This decision will be fully effective on 4 February 2023. This means that Vanuatu passport holders must apply for a visa to enter any country under the European Union. Vanuatuans can still travel visa-free to the UK, Hong Kong and Singapore using their Vanuatu passport.",
          },
          {
            q: "HOW FAST IS THE PROCESSING TIME FOR VANUATUAN CITIZENSHIP BY INVESTMENT?",
            a: "The Vanuatu citizenship application typically takes 3-4 months to be processed from when the proper documents are submitted to the Vanuatuan Government. Our team of highly knowledgeable client advisors and efficient processing officers will assist all applicants through the entire process.",
          },
          {
            q: "DOES MY FAMILY QUALIFY FOR CITIZENSHIP AS WELL?",
            a: "Yes, family members of the principal applicant can be included in the Vanuatu citizenship application. Investors may include spouses and children below the age of 25. There is no educational requirement, and parents can also be added to the application.",
          },
        ],
      },
      about: `Vanuatu consists of 80+ volcanic islands located northeast of Sydney and Byron Bay. The country features a diverse natural environment, including pristine beaches, turquoise waters, volcanic landscapes, and rich tropical rainforests. As a member of the United Nations, Commonwealth of Nations, Organisation Internationale de la Francophonie, and Pacific Islands Forum, Vanuatu maintains a stable political environment and actively participates in global affairs.

The nation is also committed to sustainable development, investing heavily in eco-tourism and renewable energy. Its economy relies primarily on tourism and agriculture, with eco-adventure tourism attracting a growing segment of global visitors.

Key Facts:

Capital: Port Vila
Currency: Vanuatu Vatu (VUV)
Population (2025): 333,252
Citizenship Processing Time : 3–4 months
Minimum contribution: USD 130,000 to the Development Support Program (DSP)
Visa-free travel: 100+ countries, including the UK, Singapore, Hong Kong
Tax benefits: No income, wealth, inheritance, or capital gains taxes
Residency: No stay requirements before, during, or after citizenship
Dual citizenship: Fully permitted
Eligible Family Members : Spouse, children < 25, parents
Government Authority : Vanuatu Citizenship Commission
Legal Basis : Citizenship Act [CAP 112]
 

Advantages of the Vanuatu Passport

The Vanuatu passport offers several benefits to global investors, including:

Visa-free or visa-on-arrival access to over 100 countries, including the UK, Singapore, and Hong Kong.
A tax-friendly jurisdiction with no income, wealth, or inheritance taxes.
A stable, peaceful environment ideal for residency planning and global mobility.
One of the world’s fastest citizenship-by-investment timelines.`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "Vanuatu’s Citizenship by Investment Programme is governed by the: Citizenship Act [CAP 112] and executed by the Vanuatu Citizenship Commission under the Development Support Program.",
        items: [],
        note: "",
      },
    },
  },

  // RESIDENCE BEGINS HERE!!!
  {
    id: "canada-residence",
    slug: "canada-residence",
    name: "Canada",
    type: "residence",
    shortDescription: "High quality of life, stable economy",
    heroImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&h=600&fit=crop",
    sections: {
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Canada offers multiple pathways to permanent residency through business investment. Known for high quality of life and stable government.`,
          },
        ],
      },
      benefits: [
        {
          title: "PR Pathway",
          subTitle: "Clear path to permanent residency and citizenship.",
          icon: "ShieldCheck",
        },
        {
          title: "High Quality of Life",
          subTitle: "Ranked as one of the best countries to live in.",
          icon: "Heart",
        },
        {
          title: "Healthcare & Education",
          subTitle: "Access to world-class public services.",
          icon: "Star",
        },
        {
          title: "Stable Economy",
          subTitle: "Safe environment for business and investment.",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "USD 250,000",
          description: "Minimum Investment",
          icon: "",
        },
        {
          title: "12 - 16 Months",
          description: "Time to Residency",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Business plan",
            "Proof of funds",
            "Language assessment",
            "Medical examination",
            "Police clearance",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Application Process for Canada Permanent Residency",
        description: "A structured journey toward residency in Canada.",
        process: [
          {
            no: 1,
            item: "Initial Assessment",
            list: ["Review eligibility.", "Determine optimal pathway."],
          },
          {
            no: 2,
            item: "Application Preparation",
            list: ["Compile financial documents.", "Prepare business plan."],
          },
          {
            no: 3,
            item: "Submission",
            list: ["Submit to relevant authorities.", "Begin due diligence."],
          },
        ],
      },
      about: `Canada, the second-largest country in the world, is a diverse and welcoming nation that spans a vast expanse of North America. From the towering peaks of the Rocky Mountains to the sparkling waters of the Atlantic and Pacific Oceans, Canada boasts an unparalleled natural beauty that captivates visitors and residents alike.

Canada has a largely multicultural society, with influences from this reflected in the fact they have two official languages: English and French. This diversity is also reflected in the country’s food, music scenes, and artistic expression, particularly in major cities like Toronto and Quebec. Canada is known for its culture of kindness and friendly residents, as well as progressive social policies, and commitment to positive immigration, making it an excellent choice for investors looking to settle with their families or launch a business in the country. Canada is an ideal destination for those seeking a secondary passport in a large and extremely well developed country; offering a quick and efficient Residence by Investment Programme.

The capital of the country is Ottawa
The currency is Canadian Dollar (CAD)
The current population as of 2025 : 40,026,470,`,
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Cyprus provides EU citizenship through strategic real estate and business investments. Enjoy Mediterranean lifestyle with EU benefits and favorable tax treatment.`,
          },
        ],
      },
      benefits: [
        {
          title: "EU/EEA Access",
          subTitle: "Freedom to travel and do business in Europe.",
          icon: "Globe",
        },
        {
          title: "Mediterranean Lifestyle",
          subTitle: "Enjoy a high quality of life by the sea.",
          icon: "Heart",
        },
        {
          title: "Attractive Tax Regime",
          subTitle: "Favorable tax treatment for non-domiciled residents.",
          icon: "Coins",
        },
        {
          title: "Stable Environment",
          subTitle: "Safe and secure political and social climate.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "€500,000+",
          description:
            "Real Estate Investment (Purchase residential or commercial property)",
          icon: "",
        },
        {
          title: "€300,000+",
          description:
            "Business Investment (Invest in local business or startup)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Proof of legal funds",
            "Health and criminal clearance",
            "Valid passport",
            "Residence in Cyprus",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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

      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "Is Cyprus residence permanent?",
            a: "Yes. The Cyprus Permanent Residency Permit is issued for life and can be passed on to family members.",
          },
          {
            q: "Can I work in Cyprus?",
            a: "The standard investment permit does not grant the right to work in Cyprus, but you may be a director of a Cyprus company.",
          },
          {
            q: "How often must I visit Cyprus?",
            a: "You must visit Cyprus at least once every 2 years to maintain your residency permit.",
          },
        ],
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Greece offers affordable Golden Visa residency through real estate investment. Enjoy Mediterranean lifestyle with EU benefits.`,
          },
        ],
      },
      benefits: [
        {
          title: "EU/Schengen Residency",
          subTitle: "Visa-free travel across all 29 Schengen countries.",
          icon: "Globe",
        },
        {
          title: "Low Investment Threshold",
          subTitle: "One of the most affordable Golden Visas in the EU.",
          icon: "Coins",
        },
        {
          title: "Mediterranean Climate",
          subTitle: "Enjoy over 300 days of sunshine per year.",
          icon: "Sun",
        },
        {
          title: "No Stay Requirement",
          subTitle: "No minimum residency required to maintain the visa.",
          icon: "MapPin",
        },
      ],
      importantDetails: [
        {
          title: "€250,000",
          description: "Real Estate Investment (Property investment in Greece)",
          icon: "",
        },
        {
          title: "€500,000+",
          description: "Premium Property (High-value property investment)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Valid passport",
            "Proof of funds",
            "Police clearance",
            "Health insurance",
            "Property ownership",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Application Process for Greece Golden Visa",
        description:
          "The journey to residency in Greece through real estate investment.",
        process: [
          {
            no: 1,
            item: "Property Selection",
            list: [
              "Identify qualifying real estate.",
              "Conduct legal due diligence.",
            ],
          },
          {
            no: 2,
            item: "Investment Completion",
            list: ["Finalize purchase agreement.", "Transfer funds and title."],
          },
          {
            no: 3,
            item: "Visa Application",
            list: ["Submit residency request.", "Biometric data collection."],
          },
        ],
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Hungary offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Mobility",
          subTitle: "Freedom to travel across the Schengen Area.",
          icon: "Globe",
        },
        {
          title: "High Quality of Life",
          subTitle: "Central European culture and vibrant lifestyle.",
          icon: "Heart",
        },
        {
          title: "Secure Environment",
          subTitle: "Safe and stable nation in the heart of Europe.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Application Process for Hungary Residency",
        description:
          "Obtaining residency in Hungary through approved investment channels.",
        process: [
          {
            no: 1,
            item: "Investment Planning",
            list: ["Consult with advisors.", "Select investment path."],
          },
          {
            no: 2,
            item: "Legal Setup",
            list: [
              "Establish local presence if required.",
              "Prepare residency dossier.",
            ],
          },
          {
            no: 3,
            item: "Filing",
            list: [
              "Submit application to immigration office.",
              "Receive residency permit.",
            ],
          },
        ],
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Latvia offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Mobility",
          subTitle: "EU residency with Schengen travel privileges.",
          icon: "Globe",
        },
        {
          title: "High Quality of Life",
          subTitle: "Peaceful environment and beautiful nature.",
          icon: "Heart",
        },
        {
          title: "Secure Environment",
          subTitle: "Stable political and social climate.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Malta offers one of the fastest citizenship-by-investment programs in Europe. Invest in property, government bonds, and make a charitable donation to gain Maltese (EU) citizenship.`,
          },
        ],
      },
      benefits: [
        {
          title: "EU Citizenship",
          subTitle: "Pathway to full Maltese and EU citizenship.",
          icon: "ShieldCheck",
        },
        {
          title: "Global Mobility",
          subTitle: "Visa-free access to 190+ countries.",
          icon: "Globe",
        },
        {
          title: "Tax Incentives",
          subTitle: "Competitive corporate and personal tax rates.",
          icon: "Coins",
        },
        {
          title: "Financial Hub",
          subTitle: "Access to Europe's leading financial services.",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "€600,000+",
          description:
            "Full Program (€250,000 in government bonds + €350,000 property + €10,000 donation)",
          icon: "",
        },
        {
          title: "€750,000+",
          description:
            "Accelerated Program (Fast-track to citizenship in 12 months)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Minimum age 18",
            "Valid passport",
            "Proof of funds",
            "Background clearance",
            "Investment commitment for min. 5 years",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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

      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "Is Malta in the Schengen Area?",
            a: "Yes. A Maltese passport grants visa-free access to all Schengen member states plus over 180 countries globally.",
          },
          {
            q: "How long must I hold the investment?",
            a: "The property must be held for a minimum of 5 years. The government bonds must also be held for 5 years.",
          },
          {
            q: "Can I hold dual citizenship?",
            a: "Yes. Malta permits dual citizenship, so you do not need to renounce your current nationality.",
          },
        ],
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Panama offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Mobility",
          subTitle: "Visa-free access to many countries worldwide.",
          icon: "Globe",
        },
        {
          title: "High Quality of Life",
          subTitle: "Modern infrastructure and tropical lifestyle.",
          icon: "Heart",
        },
        {
          title: "Secure Environment",
          subTitle: "Stable and growing economy in Central America.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Portugal offers a straightforward path to EU citizenship through the Golden Visa program and subsequent naturalization. Invest in real estate or transfer capital to qualify for residency, then apply for citizenship after 5 years.`,
          },
        ],
      },
      benefits: [
        {
          title: "EU Access",
          subTitle: "Live, work, and study anywhere in the EU.",
          icon: "Globe",
        },
        {
          title: "Golden Visa Pathway",
          subTitle: "Straightforward route to citizenship after 5 years.",
          icon: "Zap",
        },
        {
          title: "Tax Benefits",
          subTitle: "Favorable regime for non-habitual residents.",
          icon: "Coins",
        },
        {
          title: "High Quality of Life",
          subTitle: "Safe environment with excellent healthcare.",
          icon: "Heart",
        },
      ],
      importantDetails: [
        {
          title: "€280,000+",
          description:
            "Real Estate Investment (Purchase property in approved regions for Golden Visa)",
          icon: "",
        },
        {
          title: "€1,000,000+",
          description:
            "Capital Transfer (Direct capital investment in Portuguese business or financial institutions)",
          icon: "",
        },
        {
          title: "€500,000+",
          description:
            "Job Creation (Invest in creating jobs for Portuguese residents)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Valid passport",
            "Criminal background check",
            "Proof of funds",
            "Health insurance",
            "Residence in Portugal for 5 years to apply for citizenship",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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

      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "Do I need to live in Portugal?",
            a: "No. The Golden Visa only requires 7 days' physical presence in Portugal in the first year, and 14 days per two-year renewal period.",
          },
          {
            q: "Can I include my family?",
            a: "Yes. Your spouse, dependent children, and dependent parents can be included in your application.",
          },
          {
            q: "How long until I get an EU passport?",
            a: "After 5 years of holding the Golden Visa, you can apply for Portuguese citizenship and receive an EU passport.",
          },
        ],
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Switzerland offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Mobility",
          subTitle: "Visa-free access to the Schengen Area and beyond.",
          icon: "Globe",
        },
        {
          title: "High Quality of Life",
          subTitle: "World-class safety, healthcare, and education.",
          icon: "Heart",
        },
        {
          title: "Secure Environment",
          subTitle: "Political neutrality and economic stability.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Thailand offers various long-term visa options including elite residency program. Low cost of living with vibrant culture and business opportunities.`,
          },
        ],
      },
      benefits: [
        {
          title: "Low Cost of Living",
          subTitle: "Affordable luxury lifestyle in Southeast Asia.",
          icon: "Coins",
        },
        {
          title: "Long-Term Residency",
          subTitle: "Visa options ranging from 5 to 20 years.",
          icon: "Clock",
        },
        {
          title: "World-Class Healthcare",
          subTitle: "Access to top-tier medical facilities.",
          icon: "Star",
        },
        {
          title: "Vibrant Culture",
          subTitle: "Rich heritage, cuisine, and friendly community.",
          icon: "Heart",
        },
      ],
      importantDetails: [
        {
          title: "THB 2,000,000+ (~$56,000+)",
          description:
            "Thailand Elite Visa (Long-term membership and residency)",
          icon: "",
        },
        {
          title: "THB 10,000,000+ (~$280,000+)",
          description: "Business Investment (Thai business investment)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: [
            "Valid passport",
            "Proof of funds",
            "Health insurance",
            "Background clearance",
            "Hotel and visa application",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `UAE offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Tax-Free Environment",
          subTitle: "No personal income tax or capital gains tax.",
          icon: "Coins",
        },
        {
          title: "Global Business Hub",
          subTitle: "World-class infrastructure and connectivity.",
          icon: "TrendingUp",
        },
        {
          title: "High Quality of Life",
          subTitle: "Safe, modern, and multicultural environment.",
          icon: "Heart",
        },
        {
          title: "Golden Visa Options",
          subTitle: "Long-term residency for investors and talent.",
          icon: "Zap",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `United Kingdom offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Global Finance Hub",
          subTitle: "Access to one of the world's leading economies.",
          icon: "TrendingUp",
        },
        {
          title: "World-Class Education",
          subTitle: "Home to some of the world's top universities.",
          icon: "Star",
        },
        {
          title: "High Quality of Life",
          subTitle: "Rich culture, history, and social stability.",
          icon: "Heart",
        },
        {
          title: "Secure Legal System",
          subTitle: "Reliable and well-established rule of law.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `USA offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Economic Opportunity",
          subTitle: "Access to the world's largest consumer market.",
          icon: "TrendingUp",
        },
        {
          title: "Innovation Hub",
          subTitle: "Global leader in technology and entrepreneurship.",
          icon: "Zap",
        },
        {
          title: "Top-Tier Education",
          subTitle: "Access to premier higher education institutions.",
          icon: "Star",
        },
        {
          title: "Diverse Lifestyle",
          subTitle: "Wide range of cultural and geographic options.",
          icon: "Globe",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
      overview: {
        title: "Overview",
        items: [
          {
            no: 1,
            title: "Summary",
            description: `Saudi Arabia offers an attractive residence program for investors worldwide.`,
          },
        ],
      },
      benefits: [
        {
          title: "Strategic Location",
          subTitle: "Gateways to Middle Eastern and global markets.",
          icon: "MapPin",
        },
        {
          title: "Modern Infrastructure",
          subTitle: "Rapidly developing cities and services.",
          icon: "TrendingUp",
        },
        {
          title: "High Safety Standards",
          subTitle: "One of the safest environments for families.",
          icon: "ShieldCheck",
        },
        {
          title: "Economic Vision 2030",
          subTitle: "Vast growth and investment opportunities.",
          icon: "Zap",
        },
      ],
      importantDetails: [
        {
          title: "Contact for details",
          description: "Investment (Approved investment options)",
          icon: "",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Program Requirements",
          description: "To qualify, applicants must:",
          items: ["Clean criminal record", "Proof of funds"],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Investment Options",
          description: "Applicants may choose from several investment paths.",
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
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
