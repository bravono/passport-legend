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
            title: "Canada is a vast and rugged land",
            description: `Canada is a vast and rugged land that spans more than half of the Northern Hemisphere from north to south and stretches almost 4,700 miles (7,560 kilometres) across six time zones from east to west. Despite being the second-largest country in the world, Canada has a relatively small population, accounting for just one-half of one percent of the world’s total.`,
          },
          {
            no: 2,
            title: "Canada's government is a parliamentary democracy",
            description: `Canada’s government is a parliamentary democracy with the British monarch as the symbolic head of state. The country’s laws are made by an elected federal government, which includes a parliament and a prime minister, reflecting Canada’s commitment to democracy and self-governance.`,
          },
          {
            no: 3,
            title: "Canada is a true melting pot of cultures",
            description: `Canada is a true melting pot of cultures, with its diverse population representing a myriad of heritages and backgrounds. Descendants of British and French immigrants comprise approximately half of the population, while other European and Asian immigrants make up a significant portion as well.`,
          },
          {
            no: 4,
            title: "home to abundant wildlife",
            description: `Canada’s diverse landscapes are home to abundant wildlife, including bison, moose, black bears, and caribou, as well as trout and salmon in its freshwater lakes and rivers. With 41 national parks and three marine conservation areas, Canadians are committed to preserving this biodiversity, although some species have suffered from overhunting and overfishing in the past.`,
          },
          {
            no: 5,
            title: "Canada is a global leader in agricultural production",
            description: `Canada is a global leader in agricultural production, telecommunications, and energy technologies, reflecting its commitment to innovation and progress. The vast majority of Canada’s exports are directed to its southern neighbor, the United States, underscoring the strong economic ties and shared values between these two North American nations.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Qualified applicants are able to apply for Canadian permanent residence.",
          icon: "ShieldCheck",
        },
        {
          title: "Business Freedom",
          subTitle:
            "Newly arriving immigrant assets are not taxed under Canadian law.",
          icon: "Heart",
        },
        {
          title: "Virtual Residency",
          subTitle:
            "The applicant and their family will have the right to live, work, and study anywhere in Canada (except Quebec), availing all the same benefits as other Canadian residents.",
          icon: "Star",
        },
        {
          title: "Permanent Residents",
          subTitle:
            "Canadian permanent residents are eligible to apply for Canadian citizenship upon spending a minimum of three years in the country (out of a five-year period).",
          icon: "TrendingUp",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for permanent residency for their family.",
          icon: "Star",
        },
        {
          title: "Citizenship",
          subTitle: "The country places no restrictions on dual citizenship",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "USD 250,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "12 - 16 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Canada Residence by Investment Requirements",
          description: "",
          items: [
            "Applicants must pass due diligence in order to apply for the Canada Startup visa programme.",
            "Applicants must not have a criminal record.",
            "Applicant must be in good health.",
            "Applicants must be proficient either in English or in French at the CLB/IELTS 5 level.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Programme Options",
          description:
            "A first-of-its-kind initiative that connects immigrant entrepreneurs with experienced private sector organisations that specialise in start-ups. Successful applicants can immediately apply for permanent residence by securing a commitment from a designated Canadian private sector organisation.",
          items: [],
          note: "",
        },
      },
      appProcess: {
        title: "Canada Startup Visa Application Process",
        description:
          "The application process to apply for Canada residence by investment program is straightforward, and it may take up to 18 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
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
              "Proposal to the designated organisation is prepared and submitted.",
              "Letter to support is received.",
              "Supporting immigration documents are prepared and application is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application for Permanent Residence is processed.",
              "Application for Permanent Residence is approved.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Permanent Residence is granted.",
              "Our on-the-ground team continues to support business setup and immigration requirements.",
            ],
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
            title: "Capital city",
            description: `The capital city of Cyprus is Nicosia, also known as Lefkosia and Lefkoşa. It is the southeasternmost of all EU member states’ capital cities. It is well known for it’s varied and rich history, as well as cultural importance to the region.`,
          },
          {
            no: 2,
            title: "Language",
            description: `The primary languages spoken in Cyprus are Greek and Turkish. While these are the official languages and widely spoken in daily life, English is also commonly used.`,
          },
          {
            no: 3,
            title: "Economy",
            description: `Cyprus’ economy is mainly driven by tourism, financial services, shipping, and finally real estate. In recent years, Cyprus has seen its economy grow steadily, supported by foreign direct investment (particularly in real estate and residency programs).

Cyprus continues to attract international investors from all over the globe, and is bolstered by its proposed entry into the Schengen Area, which is touted for 2025.`,
          },
          {
            no: 4,
            title: "International Organisations",
            description: `Cyprus is an active member of several international organizations. It joined the United Nations (UN) in 1960 and is also a member of the European Union (EU) and the Commonwealth of Nations. Cyprus also participates in organizations such as the World Trade Organization (WTO), the International Monetary Fund (IMF), and the Organization for Security and Co-operation in Europe (OSCE).`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Cyprus is expected to join the Schengen Zone in 2026, which will grant visa-free access to all Schengen countries. Currently the Cyprus residency grants visa-free access to Cyprus as well the right to live in Cyprus.",
          icon: "Globe",
        },
        {
          title: "For Family",
          subTitle:
            "The main applicant’s spouse and dependent children under the age of 25 can qualify for this residency card.",
          icon: "Heart",
        },
        {
          title: "No Minimum Stay",
          subTitle:
            "Applicants must visit Cyprus once every two years to maintain residency status.",
          icon: "Coins",
        },
      ],
      importantDetails: [
        {
          title: "EUR 300,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "2 - 3 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
        {
          title: "Cyprus",
          description: "Visa Free Access",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Cyprus Residency by Investment Requirements",
          description: "",
          items: [
            "Minimum age of 18",
            "Clean personal background",
            "Pass due diligence checks",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Cyprus residence by Invesment",
          description:
            "Cyprus Golden Visa applicants are granted permanent residence in Cyprus by acquiring real estate in the amount of EUR 300,000, investing EUR 300,000 in a Cypriot company (that employs at least 5 people), or by allocating EUR 300,000 into an Alternative Investment Fund. The residency permit allows its holder visa-free travel to the Schengen area for 90 days every six months. The residency card must be renewed every five years but there are no stay requirements. To qualify for the Cyprus Residence by Investment Programme, applicants may consider one of the below investment options:",
          items: [
            {
              title: "COMPANY INVESTMENT",
              list: [
                "Invest EUR 300,000 in a Cypriot company that employs at least five people.",
              ],
            },
            {
              title: "CYPRUS INVESTMENT FUND",
              list: [
                "Allocating EUR 300,000 into an Alternative Investment Fund (AIF, RAIF, or UCITS) registered in Cyprus",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "Cyprus Residency Application Process",
        description:
          "The application process for Cyprus residency is straightforward, and applications are currently being processed in 3-4 months. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legacy’s client advisors.",
              "Passport Legacy conducts a due diligence check.",
              "Client is onboarded and retainer fees are paid.",
            ],
          },
          {
            no: 2,
            item: "Application Preparation & Investment",
            list: [
              "Legal process commences, and necessary documents are collected.",
              "Investment requirements are fulfilled (real estate purchase or other qualifying investment).",
              "Application is prepared and submitted to the Cyprus Civil Registry and Migration Department.",
            ],
          },
          {
            no: 3,
            item: "Document & Application Processing",
            list: [
              "Application is reviewed by the authorities.",
              "Residency approval is granted within approximately two to three months.",
            ],
          },
          {
            no: 4,
            item: "Finalization & Residency Grant",
            list: [
              "Client travels to Cyprus for biometrics submission.",
              "Cyprus Permanent Residency Card is issued.",
              "Our team continues to provide post-approval support",
            ],
          },
        ],
      },

      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "How many countries does Cyprus have access to visa-free and visa on arrival?",
            a: "Cyprus has visa free and visa on arrival access to over 160 countries worldwide, including China, Germany, Hong-Kong, Japan, Singapore, Spain, the UK and many more. Cyprus is also set to join the Schengen zone in 2026, which will grant residents of Cyprus visa-free access to all Schengen countries.",
          },
          {
            q: "How long does it take to acquire a residence in Cyprus?",
            a: "Applications for the Cyprus Residence by Investment Programme are currently being processed in just 2-3 months.",
          },
          {
            q: "What is the next step once the application has been approved?",
            a: "Once an application is approved, the investor must fulfil the financial requirements to complete the process. Accordingly, a Residence Card will be issued to Passport Legacy, a government-authorised agent, which will then be shared with the investor to ensure that all information is valid and correct. Once checked and approved, the Residence Card will be handed over to the client.",
          },
        ],
      },
      about: `Cyprus is an island south of Turkey and West of Lebanon that is known for its high-income economy as well as its beautiful Mediterranean climate, with beautiful weather almost all year round. Despite technically being located in West Asia, its cultural makeup and geopolitical climate are more closely tied to Southeast Europe, making it an attractive strategic location for businesses and individuals with interests across Europe, Asia, and the Middle East. 

Cyprus is a member of the European Union and is expected to join the Schengen zone in 2026. It offers a high standard of living, excellent healthcare options, and, crucially, an extremely business-friendly environment, making it an attractive choice for investors looking for a strategic location to conduct their business. 

The Cyprus Permanent Residence Programme remains an attractive path for non-European investors to secure long-term residency on the continent; with a simple application process and approvals being granted in a matter of months, it’s a great option for investors who are looking for strong access to European, African, Asian and Middle Eastern markets simultaneously. Plus, with its favorable tax policies, Cyprus offers investors more than just a home in the sun; it’s a strong investment option for businesses as well as families looking to settle in a beautiful country. Cyprus is an ideal destination for those seeking a secondary passport in a beautiful, historic nation; offering a quick and efficient Residence by Investment Programme.

The capital of the country is Nicosia
The currency is Euro (EUR)
The current population as of 2025: 1,367,468`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "The Cyprus Residence by Investment Programme is a government-approved initiative that grants residency to qualifying investors. Established under Regulation 6(2) of the Aliens and Immigration Regulations, the program allows non-EU nationals to obtain permanent residency through real estate investment, subject to meeting the financial and due diligence requirements set by the Cypriot authorities.",
        items: [],
        note: "",
      },
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
            title:
              "Greece Unveiled: A Tapestry of History, Landscape, and Climate",
            description: `Greece is a historic southeastern European country located at the southern end of the Balkan Peninsula. Known for its rich history, stunning landscapes, and warm Mediterranean climate, Greece is an appealing destination for tourists and investors alike. The country comprises mainland Greece and over 6,000 islands and islets scattered across the Aegean and Ionian seas, covering a total area of 131,957 square kilometres.`,
          },
          {
            no: 2,
            title: "Athens: Bridging the Past and Present in a Vibrant Capital",
            description: `The capital city of Greece is Athens, a vibrant city where ancient and modern architecture coexist harmoniously. Athens is renowned for its archaeological sites, including the iconic Parthenon, which stands on the Acropolis overlooking the city. Thessaloniki, the country’s second-largest city, boasts a rich cultural life and cosmopolitan atmosphere. The Greek islands, each with its unique character, attract millions of visitors every year who come to explore their pristine beaches and charming villages.`,
          },
          {
            no: 3,
            title: "Island Charms: Exploring Greece's Diverse Archipelago",
            description: `Greek is the official language of the country, which has a population of approximately 10.4 million people. Greece is a parliamentary republic and a member of the European Union, providing its citizens with numerous benefits such as visa-free travel within the Schengen Area. The nation’s cultural heritage is deeply rooted in its ancient history, with Greece being the birthplace of democracy, philosophy, and the Olympic Games.`,
          },
          {
            no: 4,
            title: "Language, Democracy, and Heritage: Greece's Cultural Nexus",
            description: `Tourism plays a vital role in Greece’s economy, significantly contributing to the country’s GDP. The nation’s natural beauty, combined with its impressive historical sites and diverse recreational activities, makes it an attractive destination for travellers. Other key sectors driving the economy include shipping, agriculture, and renewable energy. The official currency is the Euro (EUR).`,
          },
          {
            no: 5,
            title:
              "Economic Pillars: Tourism and Beyond in the Mediterranean Gem",
            description: `As a member of various international organisations, including the United Nations, the European Union, and the Council of Europe, Greece actively participates in regional and global affairs.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle: "Visa-free travel to 27 Schengen countries.",
          icon: "ShieldCheck",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "Taxes need to be paid for income generated within the country; however, no tax is required to be paid for income generated outside the country.",
          icon: "ShieldCheck",
        },
        {
          title: "Business Freedom",
          subTitle:
            "Greek Golden Visa gives you the right to set up your own business.",
          icon: "Heart",
        },
        {
          title: "Virtual Residency",
          subTitle: "No physical stay requirements.",
          icon: "Star",
        },

        {
          title: "For Family",
          subTitle:
            "The main applicant’s spouse, parents, and children up to 21 years of age can be qualified dependents for the residency card.",
          icon: "Star",
        },
        {
          title: "Citizenship",
          subTitle:
            "With recent legislative changes, Greek citizenship by naturalization is possible provided that the applicant lives in Greece for seven consecutive years and speaks the language.",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "EUR 500,000",
          description: "Min-Investment in High-Demand Municipalities",
          icon: "Coins",
        },
        {
          title: "EUR 250,000",
          description: "Minimum Investment in Other Areas",
          icon: "Coins",
        },
        {
          title: "2 - 3 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
        {
          title: "Free Visa",
          description: "Schengen Area",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Greece Residency by Investment Requirements",
          description: "",
          items: [
            "Applicant must be 18+ years of age to apply for the Greece Golden Visa program.",
            "Confirmed investment sources.",
            "Must have no criminal record.",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "Greece residence by Invesment",
          description:
            "Greece Golden Visa applicants are granted permanent residence in Greece by acquiring real estate in the amount of EUR 250,000 or by putting EUR 400,000 in fixed-term deposits or government bonds. The residency permit allows its holder visa-free travel to the Schengen area for 90 days every six months. The residency card must be renewed every five years but there are no stay requirements. To qualify for the Greek Residence by Investment Programme, applicants may consider one of the below investment options:",
          items: [
            {
              title:
                "A minimum capital transfer of EUR 400,000 in one of the following:",
              list: [
                "Greek Government bonds.",
                "Bonds or shares of real estate investment companies in Greece.",
                "Shares and bonds of venture fund and private equity headquartered in Greece.",
              ],
            },
          ],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Greece Golden Visa Application Process",
        description:
          "The application process to apply for Greece residency by investment programme is straightforward, and it may take up to 3 months between initiating the process and receiving the residency documents. The application process can be divided into the following stages:",
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
              "Legal process commences, and bank account is opened.",
              "Client travels to Greece.",
              "Biometrics appointment is booked in Greece.",
              "Investment requirements are fulfilled.",
              "Documents are prepared and application for Greece’s Golden Residence Permit is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application for Permanent Residence is processed.",
              "Application for Permanent Residence is approved.",
            ],
          },
          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Golden Residence Permit is granted.",
              "Our team continues to support until the permit is stamped.",
            ],
          },
        ],
      },
      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "DOES THE GREEK GOLDEN VISA LEAD TO CITIZENSHIP?",
            a: "To become a Greek citizen, individuals will have to be a resident of Greece for at least seven years. Another critical requirement is proficiency in the Greek language.",
          },
          {
            q: "WHICH FAMILY MEMBER/S CAN I INCLUDE AND WILL BENEFIT FROM THE SAME GREECE GOLDEN VISA INVESTMENT?",
            a: `Family members that may benefit from the same Greece Golden Visa investment include:

Spouse or partner carrying a cohabitation contract in Greece.
Children under 21 years old when the investment is made and until 24 years old.
Parents and in-laws of the main investor`,
          },
          {
            q: "WHERE CAN I PURCHASE PROPERTIES IN GREECE THAT CAN QUALIFY FOR THE GREECE GOLDEN VISA?",
            a: "Properties can be purchased in all areas of Greece, including Athens, city centres, coastal areas and the beautiful islands. Property in Athens is currently cheaper than in many other European capitals, three times cheaper than Lisbon, Portugal, or Madrid, Spain and almost eight times more affordable than in Paris, France. For more information on real estate properties that qualify for the Greece Golden Visa.",
          },
          {
            q: "DO I NEED TO GO TO GREECE TO GET A RESIDENCE PERMIT?",
            a: "You will need to travel at least once to Greece to finalise the residency application. It is possible to buy properties remotely with our assistance. In any event, our dedicated team will assist you throughout the process if you want to conduct a property view of attractive real estate opportunities.",
          },
        ],
      },
      about: `Greece is a country located in southeastern Europe that is steeped in rich history and culture, known for its beautiful and varied landscapes, white-sand beaches with crystal clear waters, beautiful towns like Santorini and Mykonos, and archaeological sites such as Olympia, The Temple of Poseidon, and The Acropolis. 

Greece is widely accepted as the cradle of Western civilization and boasts a history that dates back thousands of years; evidenced by its famous ancient ruins, such as the Parthenon in Athens and the Temple of Apollo in Delphi. This history contributes to its reputation as the birthplace of many modern concepts such as scientific and mathematic principles, Western philosophy, theatre, democracy, and of course, the Olympic games. 

With more than 2,000 islands scattered across the Aegean and Ionian Seas, Greece can offer tourists and its residents a huge tapestry of cultural experiences, from the urban and cosmopolitan cities like Athens to the serene and quaint beauty in places like Santorini and Mykonos.

Greek people are famous for their friendly nature and warm embrace of people from all backgrounds, as well as their love for good food, making the country extremely popular with people who appreciate delectable food. Their Mediterranean cuisine, prominently featuring fresh seafood, olives, and feta cheese, is a highlight of any visit to Greece.

Greece has a unique charm that is seldom found anywhere else in the world and is an ideal place for investors looking to expand their businesses or secure residence in one of the most historic countries on the globe. Greece is an ideal destination for those seeking a secondary passport in a beautiful southeastern European country; offering a quick and efficient Residence by Investment Programme. 

The capital of the country is Athens
The currency is Euro
The current population as of 2025: 9,967,275`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "Greece passed Law 4146/2013 on April 18, 2013, which allows foreign nationals who invest at least 250,000 Euros in residential real estate that is physically located in Greece to apply for a five-year Greek residency visa. A residence permit is given for five years (for a 5-year period each time) and can be renewed indefinitely as long as the real estate property is still owned by the applicant. However, the residence permits do not grant you any right to employment.",
        items: [],
        note: "",
      },
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
        title: "Overview of Hungary",
        items: [
          {
            no: 1,
            title: "Geographic",
            description: `Hungary is a landlocked country in Central Europe, covering an area of approximately 93,000 square kilometers and containing 10 million people. It has an extremely diverse geography, with the Great Hungarian Plain covering the southeastern region, offering vast flatlands that provide a base for the country’s rich agriculture. Western Hungary features rolling hills and low mountains, while the northern regions contain higher peaks. Hungary is also home to the world-famous Danube River, which flows through the capital, Budapest, separating the ‘Buda’ from the ‘Pest’.`,
          },
          {
            no: 2,
            title: "The Capital City",
            description: `The capital of Hungary is Budapest, a famous city worldwide for its food, culture and nightlife. It is also home to the beautiful Hungarian Parliament Building, and is often referred to as the “Pearl of the Danube.”`,
          },
          {
            no: 1,
            title: "Language",
            description: `The official language of Hungary is Hungarian, and is spoken by the vast majority of the population. Known for its complex grammar and rich vocabulary, it plays a vital role in the country’s cultural identity. While Hungarian is the primary language spoken, English and German are widely spoken in urban areas, particularly among younger generations and in business settings.`,
          },
          {
            no: 1,
            title: "Economy",
            description: `Hungary has a diverse economy, ranking as one of the most developed in Central Europe. It is a member of the European Union, meaning it benefits from strong trade ties and foreign investments. Its key sectors are manufacturing (particularly automotive and electronics), and agriculture, pharmaceuticals, and tourism. Budapest also serves as a financial and innovation hub, attracting global companies and startups alike.`,
          },
          {
            no: 1,
            title: "International Organisations",
            description: `Budapest hosts and participates in several international organizations. Hungary is a member of major global institutions such as the United Nations (UN), European Union (EU), NATO, World Trade Organization (WTO), and OECD. Budapest itself is home to offices of international organizations such as the International Centre for Democratic Transition (ICDT) and the European Institute of Innovation and Technology (EIT).`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle: "Visa free access to the entire Schengen Area.",
          icon: "Globe",
        },
        {
          title: "For Family",
          subTitle:
            "Applicants can include their spouse and children under the age of 18 years.",
          icon: "Heart",
        },
        {
          title: "Investment Flexibility",
          subTitle:
            "Choose from three investment options to suit various budgets.",
          icon: "ShieldCheck",
        },
        {
          title: "No Physical Residency Required",
          subTitle:
            "Hungarian residence permit holders can travel visa free within the Schengen countries for up to 90 days within any 180-day period.",
          icon: "Globe",
        },
        {
          title: "Right to Extend",
          subTitle:
            "Secure a 10-year residency with the right to renew for an additional 10 years.",
          icon: "Heart",
        },
        {
          title: "Visa Voyage",
          subTitle:
            "The visa allows its holders visa-free travel within Europe’s Schengen area.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "EUR 250,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "4 Months",
          description: "Time To Residency",
          icon: "Clock",
        },
        {
          title: "Free Visa",
          description: "Schengen Area",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Hungary Residency by Investment Requirements",
          description: "",
          items: [
            "The applicant must successfully pass due diligence in order to apply for residency in Hungary by investment.",
            "Applicant must be 18+ years of age.",
            "Applicant must not have any criminal record.",
            "Applicant must have a legitimate source of income",
            "Applicant must have a non-EU or non-EEA country of origin.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Hungary residence by Invesment",
          description: `There are three investment options to acquire the Residence by Investment in Hungary.

The first is through the ‘Real Estate Investment Fund’, which involves acquiring investment certificates from a real estate fund registered with the National Bank of Hungary. The investment amount is set at a minimum of EUR 250,000.

Next, there is ‘Real Estate Acquisition’ (available from 1 January 2025). This option allows investors to acquire strictly residential property in Hungary, valued at a minimum of EUR 500,000.

Finally, an applicant can make a donation to a Hungarian public trust, which involves making a monetary donation of at least EUR 1 million to a designated educational or cultural institution operated by a public trust performing public functions.`,
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
              "Documents are prepared and application for Greece’s Golden Residence Permit is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government of Hungary pre-approval is received.",
              "Investment requirements are fulfilled",
            ],
          },
          {
            no: 4,
            item: "Background Checks",
            list: [
              "Hungarian authorities will conduct due diligence and verify the legitimacy of the application and investment funds",
            ],
          },
          {
            no: 5,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Hungary is issued within 4 months.",
              "Passport is handed over to client by Passport Legacy’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "HOW MANY COUNTRIES DOES HUNGARY HAVE ACCESS TO VISA-FREE?",
            a: "Cyprus has visa free and visa on arrival access to over 160 countries worldwide, including China, Germany, Hong-Kong, Japan, Singapore, Spain, the UK and many more. Cyprus is also set to join the Schengen zone in 2026, which will grant residents of Cyprus visa-free access to all Schengen countries.",
          },
          {
            q: "WHAT TYPE OF INVESTMENT WILL I BE MAKING IN HUNGARY?",
            a: "Applications for the Cyprus Residence by Investment Programme are currently being processed in just 2-3 months.",
          },
          {
            q: "HOW LONG DOES IT TAKE TO ACQUIRE A HUNGARY PASSPORT?",
            a: "Once an application is approved, the investor must fulfil the financial requirements to complete the process. Accordingly, a Residence Card will be issued to Passport Legacy, a government-authorised agent, which will then be shared with the investor to ensure that all information is valid and correct. Once checked and approved, the Residence Card will be handed over to the client.",
          },
          {
            q: "WHAT IS THE NEXT STEP ONCE THE HUNGARY RESIDENCY APPLICATION HAS BEEN APPROVED?",
            a: "Once an application is approved, the investor must fulfil the financial requirements to complete the process. Accordingly, a Residence Card will be issued to Passport Legacy, a government-authorised agent, which will then be shared with the investor to ensure that all information is valid and correct. Once checked and approved, the Residence Card will be handed over to the client.",
          },
        ],
      },
      about: `Hungary is a landlocked country situated in Central Europe that borders Slovakia, Ukraine, Romania, Serbia, Croatia, Slovenia, and Austria, making it a perfect strategic location for European interests. At 93,000 square kilometers, it’s home to a population of over 9 million and boasts cities known across the globe such as Budapest, famous for its stunning parliamentary buildings and thermal baths, as well as picturesque countryside vineyards and charming villages.

Politically, Hungary is a parliamentary republic; historically democratic and stable. Its commitment to innovation (as evidenced by the fact it is the largest innovator and manufacturer of electronics in Central and Eastern Europe), and solid trade industries make it one of Europe’s most stable economies, boasting a highly skilled labor force and the 16th lowest income equality in the world. With its strategic location at the center of Europe, Hungary offers excellent connectivity to global markets, making it a hugely attractive destination for residence by investment.

The capital of this country is Budapest
The currency is Hungarian Forint (HUF)
Current population as of 2025: 9,643,770`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "The Hungary Residency by Investment Programme was established in 2024. The program is governed by the following legal and regulatory foundations:",
        items: [
          "Act II of 2007 on the Admission and Right of Residence of Third-Country Nationals establishes the legal basis for granting temporary and permanent residency permits in Hungary, including provisions for residency by investment.",
          "Government Decree 114/2007 (V.24.) on the Implementation of Act II of 2007 outlines the specific procedures, requirements, and conditions for third-country nationals to obtain residency through investments that contribute to Hungary’s economic development.",
          "Act LXXVI of 2013 on the Strategic Partnership Between Hungary and Investors introduced additional incentives for investment-based residency, emphasizing Hungary’s commitment to fostering foreign direct investment and economic growth.",
        ],
        note: "",
      },
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
        title: "Overview of Latvia",
        items: [
          {
            no: 1,
            title: "Geographic",
            description: `Latvia is located in Northern Europe, bordered by Estonia to the north, Lithuania to the south, Russia to the east, and Belarus to the southeast, with a coastline along the Baltic Sea to the west. The country spans 64,589 square kilometers, featuring diverse landscapes such as dense forests, rolling hills, pristine lakes, and over 500 kilometers of coastline. Latvia’s terrain is primarily flat, with some low mountain ranges, such as the Vidzeme Highlands.`,
          },
          {
            no: 2,
            title: "The Capital City",
            description: `Riga, the capital city of Latvia, is the largest city in the Baltic States and is seen as the country’s cultural hub. Situated on the banks of the Daugava River, Riga is known for its world famous medieval architecture, particularly its UNESCO World Heritage-listed Old Town, and its impressive Art Nouveau buildings. As Latvia’s political, financial, and educational center, Riga is not only the country’s most populous city but also a key player in the Baltic region, with excellent connectivity and a growing international presence.`,
          },
          {
            no: 3,
            title: "Language",
            description: `Latvia’s official language is Latvian, a Baltic language that belongs to the Indo-European language family. It is one of the oldest languages in Europe, with its roots tracing back over a thousand years. Latvian is known for its rich phonetic structure and unique vocabulary, preserving many ancient linguistic features not found in other European languages, making it is one of the most unique languages in the continent. While Latvian is the primary language spoken by the majority of the population, Russian is also widely understood, particularly among older generations, due to Latvia’s history as part of the Soviet Union. English is also increasingly spoken, especially in urban areas and among younger people.`,
          },
          {
            no: 4,
            title: "Economy",
            description: `Latvia has a rapidly growing economy, with key sectors including manufacturing, services, agriculture, and information technology. As a member of the European Union, Latvia benefits from access to the single market and has seen significant growth in exports, particularly in machinery, wood products, and agricultural goods. With a stable macroeconomic outlook, low unemployment, and a strong focus on economic modernization, Latvia continues to be an appealing destination for investment.`,
          },
          {
            no: 5,
            title: "International Organisations",
            description: `Latvia is a member of several key international organizations, showing its strong commitment to global cooperation and integration. These include:


European Union (EU) – Latvia has been a member since 2004, benefiting from access to the single market and contributing to EU policies and initiatives.

North Atlantic Treaty Organization (NATO) – Latvia joined NATO in 2004, enhancing its security and defense cooperation with other member states.

United Nations (UN) – Latvia is a member of the UN since 1991, participating in a wide range of global initiatives and peacekeeping efforts.

World Trade Organization (WTO) – Latvia has been a member since 1999, playing an active role in promoting free trade and economic cooperation.

Organization for Security and Co-operation in Europe (OSCE) – Latvia is a member, contributing to peace and stability in Europe and beyond.

Council of Europe – Latvia is a member, working to promote human rights, democracy, and the rule of law across the continent.

Eurozone – Since 2014, Latvia has been a member of the Eurozone, using the Euro as its official currency.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle: "Visa free access to the entire Schengen Area.",
          icon: "Globe",
        },
        {
          title: "For Family",
          subTitle:
            "Applicants can include their spouse and children under the age of 18 years.",
          icon: "Heart",
        },
        {
          title: "Competitive Tax Regime",
          subTitle:
            "Holders of the Latvian Golden Visa will be considered non-residents if they spend less than 183 days every civil year, and do not face worldwide taxation",
          icon: "ShieldCheck",
        },
        {
          title: "Limited Physical Residency Required",
          subTitle:
            "Golden Visa holders just need to visit Latvia on a yearly basis for 48 hours to renew their residence permit.",
          icon: "ShieldCheck",
        },
        {
          title: "Pathway to Permanent Residence",
          subTitle:
            "Permanent Residency is obtainable after residing physically in Latvia for 5 years. Application for Citizenship can be submitted after residing physically in Latvia for 10 years.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "EUR 60,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "6 Months",
          description: "Time To Residency",
          icon: "Clock",
        },
        {
          title: "Free Visa",
          description: "Schengen Area",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Latvia Golden Visa Requirements",
          description: "",
          items: [
            "Applicant must successfully pass due diligence in order to apply for Latvia residency by investment program.",
            "Applicant must be 18+ years of age.",
            "Applicant must not have any criminal record.",
            "Applicant must have a legitimate source of income",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Latvia residence by Invesment",
          description: "",
          items: [
            {
              title:
                "There are four investment options to acquire the Residence by Investment in Latvia. The first is through a company investment; EUR 50,000 equity investment in a Latvian company that:",
              list: [
                "Annually pays at least EUR 40,000 in taxes",
                "Employs less than 50 people",
                "Has a revenue of less than EUR 10,000,000 along with a one-time government fee of EUR 10,000",
              ],
            },
            {
              title: `Next, there is Real Estate, where an investor must pay EUR 250,000 in real estate in Latvia, along with a one-time government fee corresponding to the equivalent of 5% of the purchase price.

The third option is through Special Bond Investment, requiring the applicant to invest EUR 250,000 in special purpose, interest-free bonds, along with a one-time government fee of EUR 38,000.

Finally, you can obtain the residence through a bank deposit. An applicant must deposit EUR 280,000 in a Latvian bank for a period of five years, along with a one-time government fee of EUR 25,000.`,
              list: [],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "Latvia Residence by Investment Application Process",
        description:
          "The application process for Latvia Residency by investment is straightforward, and applications are currently being processed in 6 months. The application process can be divided into the following stages:",
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
              "Documents are prepared and application for Greece’s Golden Residence Permit is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government of Hungary pre-approval is received.",
              "Investment requirements are fulfilled",
            ],
          },
          {
            no: 4,
            item: "Background Checks",
            list: [
              "Latvian authorities will conduct due diligence and verify the legitimacy of the application and investment funds",
            ],
          },
          {
            no: 5,
            item: "Residence Permit Handover",
            list: [
              "Application is approved.",
              "Residence Permit of Latvia is issued within 6 months.",
              "Residence Permit is handed over to client by Passport Legacy’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Latvia Residence by Investment FAQ's",
        qAndA: [
          {
            q: "HOW MANY COUNTRIES DOES LATVIA HAVE ACCESS TO VISA-FREE?",
            a: "Latvia passport holders have visa-free access to the entire Schengen Region.",
          },
          {
            q: "WHAT TYPE OF INVESTMENT WILL I BE MAKING IN LATVIA?",
            a: `There are four investment options to acquire the Residence by Investment in Latvia. The first is through a company investment; EUR 50,000 equity investment in a Latvian company that:

Annually pays at least EUR 40,000 in taxes
Employs less than 50 people
Has a revenue of less than EUR 10,000,000 along with a one-time government fee of EUR 10,000
 
Next, there is Real Estate, where an investor must pay EUR 250,000 in real estate in Latvia, along with a one-time government fee corresponding to the equivalent of 5% of the purchase price.

The third option is through Special Bond Investment, requiring the applicant to invest EUR 250,000 in special purpose, interest-free bonds, along with a one-time government fee of EUR 38,000.

Finally, you can obtain the residence through a bank deposit. An applicant must deposit EUR 280,000 in a Latvian bank for a period of five years, along with a one-time government fee of EUR 25,000.`,
          },
          {
            q: "HOW LONG DOES IT TAKE TO ACQUIRE A LATVIAN RESIDENCE PERMIT?",
            a: "Applications for the Latvia Residence by Investment Programme are currently being processed in just 6 months.",
          },
          {
            q: "WHAT IS THE NEXT STEP ONCE THE APPLICATION HAS BEEN APPROVED?",
            a: "Once an application is approved, the investor must fulfil the financial requirements to complete the process. Accordingly, a Citizenship Certificate will be issued to Passport Legacy, a government-authorised agent, which will then be shared with the investor to ensure that all information is valid and correct. Once checked and approved, the Citizenship Certificate will be submitted to the passport office for Passport Issuance.",
          },
        ],
      },
      about: `Latvia, officially The Republic of Latvia is one of three Baltic states nestled in Northern Europe that is famous for its medieval architecture, and interesting and diverse cultural scene. With Estonia to the North, Russia and Belarus to the East, and Lithuania to the South, it spans 64,589 square kilometers and is home to a population of approximately 1.8 million people. 

The capital of Latvia is Riga, a UNESCO World Heritage site that is famous for its extraordinary ‘Art Nouveau’ architecture, celebrated old town, and burgeoning festivals. On top of all of that, Latvia is also home to serene forests, charming beaches, and picturesque small towns, giving it a rare range stemming from developed urban cities to quaint natural beauty.

Politically, Latvia is a parliamentary republic with a stable and democratic framework, and it is a member of the World Trade Organization as well as the European Union, with the Euro officially becoming the country’s currency on 1st January 2014, superseding the Lats. Latvia has boasted one of the highest GDP growth rates in Europe since the year 2000, making it an appealing destination for residency by investment. Its strategic location serves as a gateway between Europe and the Nordic region, providing investors with excellent connectivity to key markets for businesses and commerce.

The capital of Latvia is Riga
The currency is Euro (EUR)
The current population as of 2025 : 1,858,298`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "The Latvia Residence by Investment Program is governed by a robust legal framework designed to ensure transparency and compliance. The program is based on the following legal and regulatory foundations:",
        items: [
          "Immigration Law of Latvia (1992): This law establishes the legal basis for granting temporary residence permits, including those issued through investment, outlining the rights and obligations of third-country nationals residing in Latvia.",
          "Cabinet of Ministers Regulation No. 564 (2010): This regulation specifies the conditions and procedures for obtaining residence permits, including investment thresholds, eligible sectors, and documentation requirements for the Residence by Investment Program.",
          "Amendments to the Immigration Law (2014): These amendments introduced updates to the investment thresholds and clarified the types of qualifying investments, emphasizing contributions to Latvia’s economic and social development.",
        ],
        note: "",
      },
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
            title: "Malta is a charismatic southern European island nation",
            description: `Malta is a charismatic southern European island nation situated in the heart of the Mediterranean Sea. Known for its rich history, stunning landscapes, and delightful climate, Malta is an attractive destination for tourists and investors alike. The country comprises three main islands – Malta, Gozo, and Comino – covering a total area of 316 square kilometres.`,
          },
          {
            no: 2,
            title: "The capital city of Malta is Valletta",
            description: `The capital city of Malta is Valletta, a UNESCO World Heritage Site characterised by its baroque architecture, impressive fortifications, and vibrant cultural life. Valletta is known for its fascinating museums, historical landmarks, and bustling waterfront. The Maltese islands are famous for their crystal-clear waters, golden beaches, and ancient temples, which attract millions of visitors each year.`,
          },
          {
            no: 3,
            title:
              "Maltese and English are the official languages of the country",
            description: `Maltese and English are the official languages of the country, reflecting its history as a former British colony. Malta gained independence in 1964 and became a republic in 1974. The nation’s population of approximately 546,000 people is a diverse mix of Maltese, British, Italian, and other Mediterranean influences, resulting in a unique cultural fusion.`,
          },
          {
            no: 4,
            title: "Tourism role in Malta's economy",
            description: `Tourism plays a significant role in Malta’s economy, contributing considerably to the country’s GDP. The nation’s natural beauty, combined with its rich historical sites and diverse recreational activities, makes it an attractive destination for travellers. Other key sectors driving the economy include financial services, online gaming, and maritime services. The official currency is the Euro (EUR).`,
          },
          {
            no: 5,
            title: "International Organisations",
            description: `As a member of various international organisations, including the United Nations, the European Union, and the British Commonwealth, Malta actively participates in regional and global affairs. The country is committed to sustainable development and has made substantial progress in areas such as renewable energy, environmental conservation, and climate change adaptation, ensuring the preservation of its natural resources for future generations.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Travel",
          subTitle: "Visa free access to the entire Schengen Area.",
          icon: "ShieldCheck",
        },
        {
          title: "Family Eligibility",
          subTitle:
            "Applicants can include their spouse, unmarried and financially dependent children under 29, financially dependent parents and parents-in law, with no age limits.",
          icon: "Globe",
        },
        {
          title: "Renewable Long-Term Residency",
          subTitle:
            "The residence card’s validity is five years and will be renewed automatically every 5 years.",
          icon: "Coins",
        },
        {
          title: "STABLE ECONOMY",
          subTitle:
            "Malta is economically stable, with an A+ credit rating and one of the highest economic growth rates among all EU countries.",
          icon: "TrendingUp",
        },
        {
          title: "Language-Friendly Environment",
          subTitle:
            "There are no language requirements for applicants, and English is one of Malta’s official languages, making integration easier for international residents.",
          icon: "TrendingUp",
        },
      ],
      importantDetails: [
        {
          title: "EUR 110,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "6 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
        {
          title: "Malta",
          description: "Schengen Area",
          icon: "Check",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Malta Residence by Investment Requirements",
          description: "",
          items: [
            "Applicant must pass due diligence in order to apply for the programme.",
            "Applicant must not have a criminal record.",
            "Applicant must be in good health.",
            "Applicant must have a confirmed source of funds.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Malta Residence by Investment",
          description:
            "The Malta Permanent Residence Programme (MPRP) allows non-EU nationals to gain permanent residency in Malta through a structured investment process. Managed by the Residency Malta Agency, this program offers long-term security, visa-free access to the Schengen Area, and a high standard of living in a stable EU country.To qualify, applicants must meet the following requirements:",
          items: [
            {
              title: "1. Government Contribution Programme",
              list: [
                `Applicants need to make a non-refundable contribution to the Residency Malta Agency: 

USD 37,000 government contribution
EUR 2,000 donation to a registered Maltese NGO that supports culture, sports, science, animal welfare, or the arts`,
                `These contributions must be made within eight months of receiving the Letter of Approval in Principle.`,
              ],
            },
            {
              title: "2. Real Estate Development Programme ",
              list: [
                `Applicants must invest in qualifying real estate for at least five years. There are two options: 

Buy a residential property in Malta or Gozo valued at EUR 375,000 or more
Rent a residential property in Malta or Gozo with a minimum annual rent of EUR 14,000`,
                `The property must be the applicant’s official residence in Malta for the entire five-year period.`,
              ],
            },
            {
              title: "3. Financial Requirements",
              list: [
                `Applicants must also show: 

A minimum net worth of EUR 500,000, which includes
At least EUR 150,000 in liquid financial assets`,
              ],
            },
          ],
          note: "This ensures that the applicant can support themselves and their dependents without depending on Malta’s public assistance system. The MPRP does not require language skills, educational qualifications, or physical presence in Malta. It provides a flexible and efficient route to European residency for individuals and families from around the world.",
        },
      },
      appProcess: {
        title: "Malta Residence by Investment Application Process",
        description:
          "The application process for the Malta Residence by Investment is straightforward, and applications are currently being processed in 6 months. The application process can be divided into the following stages:",
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
              "Legal process commences, and bank account is opened.",
              "Investment requirements are fulfilled.",
              "Documents are prepared and application for Malta’s Golden Residence Permit is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: ["Application is processed.", "Application is approved."],
          },
          {
            no: 4,
            item: "Approval & Final Handover",
            list: [
              "Final Payments are completed within 8 months.",
              "Applicants have to travel to Malta to submit biometrics.",
              "Maltese Permanent Residence Cards are issued.",
              "Our team continues to support until the permit is stamped.",
            ],
          },
        ],
      },

      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "HOW MANY COUNTRIES DOES MALTA HAVE ACCESS TO VISA-FREE?",
            a: "Malta residents have visa-free access throughout the Schengen Area.",
          },
          {
            q: "WHAT TYPE OF INVESTMENT WILL I BE MAKING IN MALTA?",
            a: `
            The Malta Permanent Residence Programme (MPRP) allows non-EU nationals to gain permanent residency in Malta through a structured investment process. Managed by the Residency Malta Agency, this program offers long-term security, visa-free access to the Schengen Area, and a high standard of living in a stable EU country.

To qualify, applicants must meet the following requirements:

1. Government Contribution Programme

Applicants need to make a non-refundable contribution to the Residency Malta Agency: 

USD 37,000 government contribution
EUR 2,000 donation to a registered Maltese NGO that supports culture, sports, science, animal welfare, or the arts
These contributions must be made within eight months of receiving the Letter of Approval in Principle.

2. Real Estate Development Programme 

Applicants must invest in qualifying real estate for at least five years. There are two options: 

Buy a residential property in Malta or Gozo valued at EUR 375,000 or more
Rent a residential property in Malta or Gozo with a minimum annual rent of EUR 14,000
The property must be the applicant’s official residence in Malta for the entire five-year period.

3. Financial Requirements

Applicants must also show: 

A minimum net worth of EUR 500,000, which includes
At least EUR 150,000 in liquid financial assets
This ensures that the applicant can support themselves and their dependents without depending on Malta’s public assistance system.

The MPRP does not require language skills, educational qualifications, or physical presence in Malta. It provides a flexible and efficient route to European residency for individuals and families from around the world.
            `,
          },
          {
            q: "HOW LONG DOES IT TAKE TO ACQUIRE A MALTA RESIDENCE PERMIT?",
            a: "Applications for the Malta Residence by Investment Programme are currently being processed in just 6 months.",
          },
          {
            q: "WHAT IS THE NEXT STEP ONCE THE APPLICATION HAS BEEN APPROVED?",
            a: "Once the application is approved, the next steps include making the final payments within eight months. Applicants must travel to Malta to submit their biometric data in person. After that, the Maltese Permanent Residence Cards are officially issued. Our team offers ongoing support throughout this process to make sure all formalities are completed smoothly, including help until the residence permit is successfully stamped.",
          },
        ],
      },
      about: `Malta is a sovereign island nation in the Mediterranean, located between Southern Europe and North Africa. It includes three islands: Malta, Gozo, and the smaller Comino. Malta is known for its historic charm, scenic coastlines, and high quality of life.

With a history that goes back to 5900 BC, Malta has a rich cultural heritage shaped by the Phoenicians, Romans, Byzantines, Arabs, and Normans. Its capital, Valletta, is a UNESCO World Heritage Site and was a former European Capital of Culture. The city offers a unique mix of historical depth and modern style.

Since it joined the European Union in 2004 and the Schengen Area soon after, Malta has become a center for international residents seeking safety, stability, and easy access to Europe. The Malta Permanent Residence Programme (MPRP) allows non-EU nationals to gain permanent residency in Malta. This grants visa-free access to the Schengen Zone and the advantages of living in a respected, well-connected European nation. The MPRP has no language or physical stay requirements, making it a flexible and efficient path to long-term residency in the EU.

The capital of the country is Valletta
The currency is Euro
Current population as of 2025: 546,673`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "The Malta Permanent Residence Programme (MPRP) is governed by Legal Notice 121 of 2021, under the Immigration Act (Cap. 217) of the Laws of Malta. The programme is managed by the Residency Malta Agency, a government body responsible for handling the issuance of residence permits under this framework. The MPRP lets non-EU nationals and their eligible family members gain permanent residency in Malta. In return, they must make a contribution to national development and meet a qualifying real estate commitment, all while adhering to strict due diligence and compliance standards.",
        items: [],
        note: "",
      },
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
            title:
              "Enchanting Portugal: A Tapestry of History, Culture, and Nature",
            description: `Nestled in southwestern Europe, Portugal is a historic country that enthrals visitors with its rich blend of history, culture, and natural beauty. Portugal covers an area of approximately 92,212 square kilometres and has a population of over 10 million people.`,
          },
          {
            no: 2,
            title: "Cultural Mosaic: Portugal's Rich Tapestry Through Time",
            description: `The country has a diverse cultural heritage, shaped by its long history as a maritime nation, including influences from the Celts, Romans, Moors, and explorers like Vasco da Gama. The country’s modern culture is also vibrant, with a thriving contemporary art scene, culinary traditions, and a bustling nightlife.`,
          },
          {
            no: 3,
            title: "Portugal's Natural and Cultural Marvels",
            description: `Portugal is home to a range of stunning natural landscapes, including beautiful beaches, rugged cliffs, rolling hills, and fertile vineyards. Portugal boasts a diverse range of World Heritage Sites, such as the historic city of Porto, the Douro Valley wine region, and the charming historic centre of Sintra. In addition, Portugal is renowned for its vibrant music, dance, and festivals, including the lively Festa de São João which is held in Porto.`,
          },
          {
            no: 4,
            title: "Portugal: A Global Beacon of Democracy and Sustainability",
            description: `Portugal is a parliamentary democracy and a member of various international organisations, including the United Nations, the European Union, and the Community of Portuguese-Speaking Countries. The country has a stable political climate, and the country is committed to sustainable development, with policies to protect the environment, promote human rights, and support economic growth.`,
          },
          {
            no: 5,
            title: "Portugal's Allure: Eco, Culture, and Sun Tourism",
            description: `Portugal is a popular destination for tourists, with over 20 million visitors annually. The country’s tourism industry is focused on eco-tourism, cultural tourism, and sun and beach tourism, with visitors drawn to the country’s stunning natural beauty, cultural heritage, and warm hospitality. Portugal is also a significant producer of wine, with the Douro Valley being one of the world’s oldest demarcated wine regions.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free",
          subTitle: "The right to live, work, and study in Panama",
          icon: "Globe",
        },
        {
          title: "Family inclusion",
          subTitle:
            "Applicable to spouses, children under 18, full-time students up to 25, differently abled children of any age, and parents of any age",
          icon: "Heart",
        },
        {
          title: "Strategic Access",
          subTitle:
            "Strategic access to Central, South, and North American markets. Strong logistics infrastructure, including the Panama Canal (one of the most strategically placed waterways globally)",
          icon: "ShieldCheck",
        },
        {
          title: "Proximity to Regional Markets",
          subTitle:
            "Proximity to key regional markets such as Colombia, Ecuador, and Venezuela",
          icon: "ShieldCheck",
        },
        {
          title: "Citizen Rights",
          subTitle: "Pathway to citizenship after five years of residence",
          icon: "ShieldCheck",
        },
        {
          title: "Investment Friendly",
          subTitle:
            "A stable, investor-friendly economy with growing real estate and business opportunities",
          icon: "ShieldCheck",
        },
        {
          title: "Travel Passport",
          subTitle:
            "This is not a citizenship, but a regular passport which can be used for travel purposes.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "USD 500,000",
          description: "Minimum Investment in Panama Stock Exchange",
          icon: "Coins",
        },
        {
          title: "3 - 5 Months",
          description: "Time To Residency",
          icon: "Clock",
        },
        {
          title: "Free Visa",
          description: "The right to live, work, and study in Panama",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Who Can Obtain Panama Residence?",
          description:
            "To qualify for the Panama Residence by Investment Programme, applicants must select one of the following investment routes and maintain the investment for a minimum of five years (unless otherwise stated):",
          items: [],
          note: "",
        },
        investmentOptions: {
          title: "1. Qualified Investor",
          description: `USD 300,000 in real estate investment
USD 500,000 investment in Panama’s stock exchange
USD 750,000 fixed-term deposit in the Panamanian banking sector`,
          items: [],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Panama Golden Visa Application Process",
        description:
          "Process The application process to apply for the Panama residency by investment programme is straightforward, and it may take up to 16 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
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
              "              Client travels to Panama.",
              "Investment requirements are fulfilled, legal process commences, and bank account is opened.",
              "Biometrics appointment is booked in Panama.",
              "Documents are prepared and an application for Panama Golden Residence Permit is submitted.",
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
              "Golden Residence Permit is granted.",
              "Our team continues to support until the permit is stamped.",
            ],
          },
        ],
      },
      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "How long does it take to obtain Panama residence?",
            a: "Applications are typically processed within a few months, depending on the chosen investment route and due diligence clearance.",
          },
          {
            q: "What are the investment options available?",
            a: "Applicants may invest in real estate, the stock exchange, or fixed-term bank deposits under the Qualified Investor category, or choose the Forestry or Friendly Nations options.",
          },
          {
            q: "Can family members be included in the application?",
            a: "Yes. Spouses, dependent children, differently abled dependents, and parents of any age can be included.",
          },
          {
            q: "Are there residence requirements to maintain the permit?",
            a: "There are no strict physical residence requirements, although maintaining investment conditions and compliance with Panamanian immigration regulations is mandatory.",
          },
          {
            q: "When can I apply for citizenship?",
            a: "There are no strict physical residence requirements, although maintaining investment conditions and compliance with Panamanian immigration regulations is mandatory.",
          },
          {
            q: "Does Panama recognize dual citizenship?",
            a: "Yes. Panama allows dual citizenship, meaning investors are not required to renounce their existing nationality.",
          },
        ],
      },
      about: `Panama sits in an ideal location between Central and South America. In recent years, Panama has earned the reputation of being a vibrant and rapidly developing nation known for its strong economy and dynamic business environment. It is best recognized for the world-famous Panama Canal (one of the busiest and most important trade routes on the planet) connecting the Atlantic and Pacific Oceans.

Panama enjoys a tropical maritime climate, making it a well-regarded destination year-round for both business and leisure. The capital city, Panama City, is a thriving metropolis with a modern skyline, modern infrastructure, and a reputation as a leading international banking and logistics center. The official language is Spanish, though English is commonly used in business.

Its economy is primarily service based, driven by sectors such as logistics, finance, real estate, and tourism. With its investor-friendly policies, stable governance, and favorable tax environment, Panama has emerged as an attractive destination for high-net-worth individuals looking for residency and long-term investment opportunities in the Americas.`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "The Panama Residence by Investment Programme is governed by Panamanian immigration law and associated investment regulations designed to promote foreign capital inflows and stimulate national development. Applicants are required to comply with all investment and documentation standards established by the National Immigration Service and related authorities.",
        items: [],
        note: "",
      },
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
            title:
              "Enchanting Portugal: A Tapestry of History, Culture, and Nature",
            description: `Nestled in southwestern Europe, Portugal is a historic country that enthrals visitors with its rich blend of history, culture, and natural beauty. Portugal covers an area of approximately 92,212 square kilometres and has a population of over 10 million people.`,
          },
          {
            no: 2,
            title: "Cultural Mosaic: Portugal's Rich Tapestry Through Time",
            description: `The country has a diverse cultural heritage, shaped by its long history as a maritime nation, including influences from the Celts, Romans, Moors, and explorers like Vasco da Gama. The country’s modern culture is also vibrant, with a thriving contemporary art scene, culinary traditions, and a bustling nightlife.`,
          },
          {
            no: 3,
            title: "Portugal's Natural and Cultural Marvels",
            description: `Portugal is home to a range of stunning natural landscapes, including beautiful beaches, rugged cliffs, rolling hills, and fertile vineyards. Portugal boasts a diverse range of World Heritage Sites, such as the historic city of Porto, the Douro Valley wine region, and the charming historic centre of Sintra. In addition, Portugal is renowned for its vibrant music, dance, and festivals, including the lively Festa de São João which is held in Porto.`,
          },
          {
            no: 4,
            title: "Portugal: A Global Beacon of Democracy and Sustainability",
            description: `Portugal is a parliamentary democracy and a member of various international organisations, including the United Nations, the European Union, and the Community of Portuguese-Speaking Countries. The country has a stable political climate, and the country is committed to sustainable development, with policies to protect the environment, promote human rights, and support economic growth.`,
          },
          {
            no: 5,
            title: "Portugal's Allure: Eco, Culture, and Sun Tourism",
            description: `Portugal is a popular destination for tourists, with over 20 million visitors annually. The country’s tourism industry is focused on eco-tourism, cultural tourism, and sun and beach tourism, with visitors drawn to the country’s stunning natural beauty, cultural heritage, and warm hospitality. Portugal is also a significant producer of wine, with the Douro Valley being one of the world’s oldest demarcated wine regions.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free And Visa-On-Arrival",
          subTitle:
            "Golden Visa holders and their family will have the right to work, study and live in Portugal.",
          icon: "Globe",
        },
        {
          title: "For Family",
          subTitle:
            "Access to primary healthcare and education system for the family.",
          icon: "Zap",
        },
        {
          title: "Low Tax Rate",
          subTitle: "Attractive taxation system.",
          icon: "Coins",
        },
        {
          title: "Application Time",
          subTitle:
            "Possibility of applying for permanent residency after five years, and for citizenship after ten years.",
          icon: "Heart",
        },
        {
          title: "Citizen Rights",
          subTitle: "The country places no restrictions on dual citizenship.",
          icon: "Heart",
        },
        {
          title: "Visa Voyage",
          subTitle:
            "The golden visa allows its holders visa-free travel within Europe’s Schengen area.",
          icon: "Heart",
        },
      ],
      importantDetails: [
        {
          title: "EUR 250,000",
          description:
            "Real Estate Investment (Purchase property in approved regions for Golden Visa)",
          icon: "Coins",
        },
        {
          title: "EUR 500.000",
          description:
            "Capital Transfer (Direct capital investment in Portuguese business or financial institutions)",
          icon: "Coins",
        },
        {
          title: "12 - 16 Months",
          description:
            "Job Creation (Invest in creating jobs for Portuguese residents)",
          icon: "Clock",
        },
        {
          title: "Free Visa",
          description:
            "Job Creation (Invest in creating jobs for Portuguese residents)",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Portugal Residency by Investment Requirements",
          description: "",
          items: [
            "Applicant must be 18+ years of age in order to apply for the Portugal Golden Visa Program.",
            "Applicants must not have any criminal record.",
            "Should possess valid medical health insurance.",
            "Applicant should successfully pass due diligence.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Portugal Residence by Invesment Programme",
          description: `
          Launched in 2012, the Portugal Golden Visa has been widely promoted by the Portuguese Government, attracting numerous qualified foreign investors due to its flexible and attractive benefits, such as low stay requirements and the possibility of acquiring citizenship by naturalisation.

To qualify for the Portuguese Golden Residence Permit Programme, applicants must make a qualifying investment of at least EUR 250,000 in donation to a foundation or institute for artistic preservation. Investments must be maintained for a minimum of five years from the date the residence permit is granted, and the holder must stay in Portugal for a minimum of seven days per year during the first five years.
          `,
          items: [
            {
              title: `CAPITAL TRANSFER
Investors can choose one of the below options:`,
              list: [
                "EUR 500,000 for the acquisition of investment fund or venture capital fund units committed to the capitalization of companies incorporated under the Portuguese law, with a maturity of at least five years and with at least 60% of the investment portfolio in companies with a registered office in the national territory.",
                "EUR 500,000 for research activities of public or private entities that are part of the national scientific and technological system.",
                "EUR 250,000 in support of artistic production or in the recovery or maintenance of national cultural heritage. This amount can be reduced to EUR 200,000 if made in a low population density area.",
              ],
            },
            {
              title: `BUSINESS
Investors can choose one of the below options:`,
              list: [
                "Creation of a minimum of ten new jobs.",
                "EUR 500,000 for the incorporation or increase of the share capital of a company that is registered in Portugal, creating, or maintaining a minimum of five permanent jobs for a period of three years.",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "Portugal Golden Visa Application Process",
        description:
          "The application process to apply for the Portugal residency by investment programme is straightforward, and it may take up to 16 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
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
              "Client travels to Portugal.",
              "Investment requirements are fulfilled, legal process commences, and bank account is opened.",
              "Biometrics appointment is booked in Portugal.",
              "Documents are prepared and an application for Portuguese Golden Residence Permit is submitted.",
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
              "Golden Residence Permit is granted.",
              "Our team continues to support until the permit is stamped.",
            ],
          },
        ],
      },

      faqs: {
        title: "Frequently Asked Questions",
        qAndA: [
          {
            q: "HOW DOES THE PORTUGAL VISA PROGRAM WORK?",
            a: "The Portugal Golden Visa program is a straightforward way for non-EU citizens to obtain a Portugal residency with reduced permanence requirements at an average of 7 days per year. An investor can get a residence visa for himself and his dependents by completing a qualifying investment, starting at €200,000.",
          },
          {
            q: "IS THERE AN OPTION OF RECEIVING THE GOLDEN VISA BY OPENING A COMPANY IN PORTUGAL?",
            a: "The applicant may also start a business in Portugal and employ a minimum ten people. If the company is in a low-density population area, the number is reduced to a minimum of eight jobs.",
          },
          {
            q: "HOW LONG DOES IT TAKE TO GET CITIZENSHIP BY INVESTMENT IN PORTUGAL?",
            a: "Portugal does not have a Citizenship by Investment program. However, after ten years of holding the Golden Visa residency, an investor can apply for citizenship via naturalisation. In addition to being a legal resident for ten years, applicants for citizenship need to demonstrate basic knowledge of the Portuguese language and pass a cultural test.",
          },
          {
            q: "WHAT ARE THE LANGUAGE REQUIREMENTS TO ACQUIRE PERMANENT RESIDENCY AND FOR PORTUGAL CITIZENSHIP?",
            a: `
            To gain Portugal permanent residency, the applicant must pass an A2 level basic language examination (CIPLE). For children under the age of ten, the exam may be modified. Children between the ages of ten and eighteen will be excluded from the exam if they attend a Portuguese school or have a declaration of proficiency.

To apply for citizenship, applicants need to demonstrate sufficient knowledge of the Portuguese language and culture, as well of Portuguese history and of the national symbols.
            `,
          },
        ],
      },
      about: `Portugal is a beautiful country located in southwestern Europe, bordering Spain and the North Atlantic Ocean, and is known for its cobbled streets, colorful culture and beautiful beaches. The country is famous across the globe for many things, from elegant natural landscapes to their exports in Port wine and fertile vineyards. 

Portugal is also home to several World Heritage Sites like the renowned city of Porto, the Douro Valley wine region, and the famed center of Sintra. Portugal’s vigorous culture includes a flourishing contemporary art scene and celebrated culinary traditions, famously being part of the Atlantic diet; the saying goes that the Portuguese have mastered 365 different ways of preparing codfish, meaning there is a different dish for each day of the year. 

The Portuguese economy is diverse, and it is classed as a high-income country; its most prominent sectors are tourism, textiles, wine, and renewable energy. It is also a member of various international organizations, including the United Nations, the European Union, and the Community of Portuguese-Speaking Countries. The Portuguese Golden Visa offers investors many benefits such as visa-free access to Europe’s Schengen Area, and the opportunity to reside in one of the most stable and beautiful countries across the European continent. Portugal is an ideal destination for those seeking a secondary passport in a beautiful southwestern Europe country; offering a quick and efficient Residence by Investment Programme.

The capital of the country is Lisbon
The currency is Euro (EUR)
The current population as of 2025 : 10,415,328`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "An amendment to the Act n. 23/2007 of July 4, the Order n. 1661-A/2013 Act n. 29/2012 of August 9 laid the legal framework for the entry, permanence and exit of foreigners from national territory. In addition, the order created a new special legal resident status for those who engage in investment activities in the country. The amendment allows for shorter residency requirements of seven days per year for five years, at which point the applicant and the family can apply for Citizenship.",
        items: [],
        note: "",
      },
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
            title: "a small mountainous country",
            description: `Switzerland, a small mountainous country situated in central Europe, is roughly the same size as New Jersey and is landlocked between France and Italy, with Austria, Germany, and Liechtenstein also sharing its borders.`,
          },
          {
            no: 1,
            title: "majority of the population lives in the sprawling plateau",
            description: `The majority of the population lives in the sprawling plateau that lies between the towering peaks of the Alps in the south and the serene beauty of the Jura mountains in the north, while the southern mountainous region is sparsely populated, providing a tranquil escape for those seeking to reconnect with nature`,
          },
          {
            no: 1,
            title: "The country has no official language",
            description: `Switzerland’s linguistic diversity is a source of pride and fascination. The country has no official language, and its inhabitants speak one of several tongues, including Swiss German, French, and Italian, among others. This cultural richness is a testament to Switzerland’s commitment to diversity and its welcoming spirit.`,
          },
          {
            no: 1,
            title: "diverse traditions and cultures",
            description: `Switzerland has long been a melting pot of diverse traditions and cultures, making it a hub of cosmopolitanism in the heart of Europe. The country’s rich cultural tapestry is reflected in its vibrant art and cultural scene, which offers an incredible array of styles and genres. From classical music to contemporary art, Swiss cultural life is an exciting blend of traditional and modern, reflecting the country’s commitment to diversity and openness to new ideas.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "Switzerland’s residence permit allows visa-free travel across Europe’s Schengen states.",
          icon: "Globe",
        },
        {
          title: "dual citizenship",
          subTitle: "The country places no restrictions on dual citizenship.",
          icon: "Heart",
        },
        {
          title: "low tax rates",
          subTitle:
            "Switzerland is home to low tax rates and favourable tax incentives for foreign residents.",
          icon: "ShieldCheck",
        },
        {
          title: "Citizen Rights",
          subTitle:
            "The applicant and their family will have the right to live and study in Switzerland, enjoying a high standard of living and access to world-class infrastructure, banking, and education facilities.",
          icon: "ShieldCheck",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for family members to become their dependents including spouse and children.",
          icon: "ShieldCheck",
        },
        {
          title: "Citizenship",
          subTitle: "Become a European resident in just 3-6 months.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "CHF 250,000/year",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "3 - 6 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
        {
          title: "Visa - Free Access",
          description: "Schengen Countries",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Switzerland Residency by Investment Requirements",
          description: "",
          items: [
            "Applicants must pass due diligence in order to apply for the Switzerland residency by investment programme.",
            "Applicant must be 18+ years of age.",
            "Applicants must not have a criminal record.",
            "Applicants must have good financial standing.",
            "Applicants must not be gainfully employed in Switzerland.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "Switzerland Residence Details",
          description:
            "Various categories of residence exist in Switzerland, with differentiation between EU/EFTA and non-EU/non-EFTA nationals. To acquire a Swiss Residence Permit, financially independent individuals who are not employed in the country must commit to paying a predetermined minimum of net annual taxes, regardless of their age.",
          items: [
            {
              title: "Programme Options",
              list: [
                "Participants within Switzerland’s Residence Programme are required to commit to paying an annual lump sum tax amount of at least CHF 250,000 per year. The exact value of the payment can vary depending on the applicant’s profile and Canton of residence.",
              ],
            },
          ],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Switzerland Residence by Investment Application Process",
        description:
          "The application process to apply for Switzerland residency by investment is straightforward, and it may take up to 6 months between initiating the process and receiving the residency documents. The application process can be divided into the following stages:",
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
              "             Client selects canton, documents are prepared and submitted.",
              "Annual lump-sum tax value is determined.",
              "Application is submitted.",
              "Client travels to Switzerland to submit documents in-person.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government conducts due diligence checks.",
              "Application is approved.",
            ],
          },

          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Applicant travels to Switzerland.",
              "Our team continues to support until the Residence Permit is collected by the client.",
            ],
          },
        ],
      },

      about: `But looking beyond the country’s beautiful natural wonders; Switzerland is also a haven for history and culture. Its charming cities and towns are steeped in tradition, which continues to attract tourists from around the world, not to mention the world-renowned chocolate it produces. Situated at the heart of Europe and connecting the North and the South, Switzerland provides investors with a perfect strategic location in Europe, as well as extremely favorable tax conditions. Switzerland is an ideal destination for those seeking a secondary passport in one of the world’s most beautiful and wealthy countries, offering a quick and efficient Residence by Investment Programme.

The capital of the country is Berne
The currency is Swiss Franc (CHF)
The current population as of  2025 : 8,955,693`,
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
            title: "Thailand is a charismatic southern European island nation",
            description: `Thailand is a charismatic southern European island nation situated in the heart of the Mediterranean Sea. Known for its rich history, stunning landscapes, and delightful climate, Thailand  is an attractive destination for tourists and investors alike. The country comprises three main islands – Thailand, Gozo, and Comino – covering a total area of 316 square kilometres.`,
          },
          {
            no: 2,
            title:
              "The capital city of Thailand is Bangkok, a UNESCO World Heritage Site characterised by its baroque architecture, impressive fortifications, and vibrant cultural life. Bangkok is known for its fascinating museums, historical landmarks, and bustling waterfront. The Thai islands are famous for their crystal-clear waters, golden beaches, and ancient temples, which attract millions of visitors each year.",
            description: `The capital city of Thailand is Bangkok, a UNESCO World Heritage Site characterised by its baroque architecture, impressive fortifications, and vibrant cultural life. Bangkok is known for its fascinating museums, historical landmarks, and bustling waterfront. The Thai islands are famous for their crystal-clear waters, golden beaches, and ancient temples, which attract millions of visitors each year.`,
          },
          {
            no: 3,
            title: "Thai and English are the official languages of the country",
            description: `Thai and English are the official languages of the country, reflecting its history as a former British colony. Thai gained independence in 1964 and became a republic in 1974. The nation’s population of approximately 515,000 people is a diverse mix of Thai , British, Italian, and other Mediterranean influences, resulting in a unique cultural fusion.`,
          },
          {
            no: 4,
            title: "Tourism role in Thai's economy",
            description: `Tourism plays a significant role in Thai’s economy, contributing considerably to the country’s GDP. The nation’s natural beauty, combined with its rich historical sites and diverse recreational activities, makes it an attractive destination for travellers. Other key sectors driving the economy include financial services, online gaming, and maritime services. The official currency is the Euro (EUR).`,
          },
          {
            no: 5,
            title: "International Organisations",
            description: `As a member of various international organisations, including the United Nations, the European Union, and the British Commonwealth, Thailand actively participates in regional and global affairs. The country is committed to sustainable development and has made substantial progress in areas such as renewable energy, environmental conservation, and climate change adaptation, ensuring the preservation of its natural resources for future generations.`,
          },
        ],
      },
      benefits: [
        {
          title: "Airport Services",
          subTitle:
            "Thailand’s exclusive airport services are designed to provide a luxurious and seamless experience. Upon arrival, clients are greeted by an Elite Personal Assistant, ensuring a VIP welcome that sets the tone for a premium journey. This exceptional service is complemented by a sophisticated limousine service, offering a blend of comfort, elegance, and convenience, thus ensuring a top-tier travel experience right from the moment of arrival.",
          icon: "Coins",
        },
        {
          title: "5-15 Years Residence Visa",
          subTitle:
            "The Privilege Entry Visa offers an unparalleled opportunity for long-term residence in Thailand, spanning a duration of 5 to 15 years. This unique visa eliminates the necessity for multiple re-entry applications, thus streamlining the process for the holder. Additionally, it allows a generous length of stay of up to one year per entry, with the added convenience of being extendable without the requirement to leave the country. This visa represents an exceptional choice for individuals seeking an extended stay in Thailand with minimal administrative complexities",
          icon: "Clock",
        },
        {
          title: "Facilitation",
          subTitle:
            "The Thailand Privilege card includes the convenient 90 Day Report Service, streamlining the necessary formalities for clients with efficiency and ease. Additionally, this program will provide a dedicated assistance in opening bank accounts and obtaining driving licenses, among other essential services, ensuring a smooth transition and integration for clients. Moreover, members will enjoy exclusive access to special discounts at a wide range of participating establishments, including top-tier hospitals, prestigious golf courses, and luxurious spas.",
          icon: "Star",
        },
        {
          title: "For Family",
          subTitle:
            "Your family members, spouse, parents, and children can be qualified dependents for citizenship.",
          icon: "Heart",
        },
        {
          title: "Membership Contact Center",
          subTitle:
            "Esteemed clientele are assured unparalleled support with the 24-hour service, available in multiple languages to cater to a diverse global audience. This dedicated service includes proficient assistance in English, ensuring round-the-clock accessibility and communication for all clients. Additionally, the service extends language offerings to include Korean, Mandarin Chinese, and Japanese, demonstrating a commitment to meeting the linguistic needs of clients from various backgrounds.",
          icon: "Heart",
        },
      ],
      importantDetails: [
        {
          title: "USD 24,800",
          description: "Minimum Investment By Donation",
          icon: "Coins",
        },
        {
          title: "4 - 5 Months",
          description: "Time to Citizenship",
          icon: "Clock",
        },
        {
          title: "Thailand",
          description: "Visa - Free Access",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "Thailand Residency by Investment Requirements",
          description: "",
          items: [
            "           Applicants are required to pay for membership fees in order to apply for Thailand citizenship.",
            "Thailand Privilege Members are required to complete a 90 Day Report.",
            "If staying for a continuous year in Thailand, the members are required to do a Stay Extension.",
            "Privilege Entry Visa is a Tourist Visa which does not allow one to apply for a Work permit to work in Thailand.",
          ],
          note: "All applications must be submitted through an authorized agent.",
        },
        investmentOptions: {
          title: "",
          description: "",
          items: [
            {
              title: "Thailand Privilege Card Packages",
              list: [
                "            A contribution of at least EUR 600,000.",
                "The purchase of a residential property of at least EUR 700,000, which must be held for five years. An alternative to the Real Estate purchase is the lease of a residential property with a rental value of at least EUR 16,000 per year.",
                "A donation of at least EUR 10,000 is also required. This can be done to a sport, cultural, scientific, philanthropic, animal welfare, or artistic non-governmental organization in Malta.",
              ],
            },
          ],
          note: "Contact us for the latest investment details.",
        },
      },
      appProcess: {
        title: "Thailand Residence by Investment Application Process",
        description:
          "The application process to apply for Thailand residency by investment programme is straightforward, and it may take up to 18 months between initiating the process and receiving the citizenship documents. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Submit Application",
            list: [
              "Fill and sign Application Form.",
              "Prepare a copy of passport Biodata page and Photograph 2 x 2 inches.",
            ],
          },
          {
            no: 2,
            item: "Receive Approval Invoice Letter",
            list: [
              "Make payment for membership fee through a Thai government bank. Your client advisor will coordinate and guide you.",
            ],
          },
          {
            no: 3,
            item: "Receive Membership ID",
            list: ["Receive Membership ID"],
          },

          {
            no: 4,
            item: "Passport Handover",
            list: [
              "              Thai certificate of naturalisation is granted.",
              "Client travels to Tailand to swear oath of allegiance and collect the certificate of naturalisation.",
              "Application for passport is submitted.",
              "Passport is granted.",
            ],
          },
        ],
      },
      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "WHY IS THE THAILAND PASSPORT POWERFUL?",
            a: "The Thai passport will give you visa-free and visa-on-arrival travel to 184 countries. As a Thai citizen, you have access to the Schengen area and all European Union countries. You have the right to the establishment, which refers to the ability to immigrate to all EU member states. Apart from Europe, Thailand also has visa-free access to the United States of America, Canada and Australia.",
          },
          {
            q: "CAN AN INDIVIDUAL HOLD DUAL CITIZENSHIP IF THEY HAVE BEEN NATURALISED AS A THAILAND CITIZEN?",
            a: "Yes, an individual can hold more than one citizenship after being naturalised as a Thai citizen. However, the individual’s current country of citizenship may impose limitations.",
          },
          {
            q: "IS IT NECESSARY FOR THE APPLICANT TO KNOW THAI AND TAKE A CITIZENSHIP TEST AS PART OF THE APPLICATION PROCESS?",
            a: "Thai language proficiency is not necessary for naturalisation, and the applicant does not require any citizenship test during the application process.",
          },
        ],
      },
      about: `Thailand, officially the Kingdom of Thailand, is a country in Southeast Asia that boasts a population of almost 70 million and spans 513,120 square kilometers. It is bordered to the northwest by Myanmar, to the northeast by Laos, to the southeast by Cambodia, to the south by the Gulf of Thailand and Malaysia, and the southwest by the Andaman Sea.

Thai culture incorporates influence from across Asia, from India, Cambodia, China, and many other countries in Southeast Asia. Bangkok is the nation’s capital and largest city and contains many of the nation’s most famous attractions such as the Wat Trai and the Wat Arun. Thailand also boasts a rich and varied history with literature dating back thousands of years, music and dance that is world-renowned, and one of the most popular cuisines in the world. Thai boxing has also become famous on the world stage in recent years.

Located in Southeast Asia, Thailand is situated in a perfect location for investors looking to live and conduct their business in a strategic location with access to major global hubs such as China, India, Vietnam, and Myanmar. Thailand is an ideal destination for those seeking a secondary passport in one of the world’s most famous countries for tourism, offering a quick and efficient Residence by Investment Program.

The capital of the country is Bangkok
The currency is Thai Baht
The current population as of 2025 : 71,632,347`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "Vanuatu’s Citizenship by Investment Programme is governed by the: Citizenship Act [CAP 112] and executed by the Vanuatu Citizenship Commission under the Development Support Program.",
        items: [],
        note: "",
      },
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
        title: "Overview of UAE",
        items: [
          {
            no: 1,
            title: "UAE is comprised of seven Emirates",
            description: `The UAE is comprised of seven Emirates: Abu Dhabi, Dubai, Sharjah, Umm Al Quwain, Fujairah, Ajman, and Ras Al Khaimah. In 1971, the late President His Highness Sheikh Zayed bin Sultan Al Nahyan unified these Emirates into a federation, the only one in the Arab world. Under his visionary leadership, the UAE utilised its oil wealth to become one of the most prosperous and open economies in the world.`,
          },
          {
            no: 2,
            title:
              "UAE has become a significant player in regional and global affairs",
            description: `Despite its small size (comparable to the state of Maine), the UAE has become a significant player in regional and global affairs. Situated strategically in the Arabian Gulf and accessible within an eight-hour flight to two-thirds of the world’s population, the UAE serves as a modern hub that connects the East and West. Consequently, Abu Dhabi and Dubai, the country’s two largest cities, have emerged as regional centres for education, culture, tourism, and business.`,
          },
          {
            no: 3,
            title: "home to a diverse range of natural landscapes",
            description: `The UAE is home to a diverse range of natural landscapes, including sandy deserts, rugged mountains, and stunning coastline. The country’s desert regions are famous for their towering sand dunes, while the mountainous regions are home to a variety of flora and fauna. Jebel Jais, the UAE’s highest peak, offers breathtaking views and challenging hiking trails. The country’s coastline boasts pristine beaches, crystal-clear waters, and coral reefs that are teeming with marine life.`,
          },
          {
            no: 4,
            title: "UAE is a modern, vibrant, and inclusive nation",
            description: `In 2004, His Highness Sheikh Khalifa bin Zayed Al Nahyan became president of the UAE and has since worked towards an ambitious vision for the country. In just over 40 years, the UAE has undergone a remarkable transformation from a tribal culture dependent on agriculture and fishing to a thriving entrepreneurial success story with world-class infrastructure. Today, the UAE is a modern, vibrant, and inclusive nation that welcomes people from all over the world. The UAE serves as a model for sustainability, innovation, dialogue, and coexistence.`,
          },
          {
            no: 5,
            title: "Sheikh Mohammed bin Zayed",
            description: `In May 2022, His Highness Sheikh Mohammed bin Zayed was elected president of the UAE, with plans to build on the legacies of Sheikh Khalifa and the country’s founding father, Sheikh Zayed.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "UAE’s residence visa holders can enjoy visa-free travel across a number of European, Middle Eastern, and Asian destinations.",
          icon: "Coins",
        },
        {
          title: "Low Tax Rate",
          subTitle:
            "The UAE is home to one of the most attractive taxation systems in the world, with low corporate taxes and no taxes on income, capital gains, gifts, inheritance, or wealth.",
          icon: "TrendingUp",
        },
        {
          title: "Citizen Rights",
          subTitle:
            "The applicant and his/her family will have the right to live, work, and study in the UAE, availing all the same benefits as other UAE residents, including access to world-class facilities.",
          icon: "Heart",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can apply for family members to become his/her dependents including spouse and children.",
          icon: "Zap",
        },
        {
          title: "VIP Processing",
          subTitle:
            "Become a UAE resident in 1 week with VIP processing, and 2-4 weeks with standard processing",
          icon: "Zap",
        },
      ],
      importantDetails: [
        {
          title: "USD 10,000",
          description: "Minimum Investment (Business Setup)",
          icon: "Coins",
        },
        {
          title: "1-4 Weeks",
          description: "Time to Residency",
          icon: "Clock",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "UAE Residency by Investment Requirements",
          description: "",
          items: [
            "Applicant must pass due diligence in order to apply for the UAE residence by investment programme.",
            "Applicant must be 18+ years of age.",
            "Applicant must not have a criminal record.",
            "Applicant must pass the UAE government’s mandatory medical fitness test.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "UAE Residence By Investment Details",
          description: `The UAE’s Residence by Investment Programme presents the ideal opportunity for families seeking an alternative residence or lucrative investment property in one of the most exciting destinations in the world. The programme allows investors to become a UAE resident in as little as 1 week.

This programme offers different options including a company setup route, which grants a 3-year residence visa with total costs starting at AED36,500 (USD 10,000). For property investors, the programme requires a minimum property investment of AED 750,000 (USD 204,500) for a 2-year investor visa and AED 2,000,000 (USD 544,000) for a 10-year Golden Visa. The property can be utilised as a rental property while still maintaining its status as an investment.`,
          items: [
            {
              title: "Programme Options",
              list: [
                `Company Setup:
According to the applicant’s needs and business activity in the UAE, Passport Legacy’s experienced consultant recommends the applicable business license to the applicant. A 3-year residence visa can be expected with total costs starting at AED 36,500 (USD 10,000).`,
                `Property Investment:
To obtain a 2-year investment visa, applicants must invest in real estate worth at least AED 750,000 (USD 204,500). For the UAE’s 10-year Golden Visa, a real estate investment of at least AED 2,000,000 (USD 545,000) is required. Investors must maintain the property investment to keep their visa valid, and both visas can be renewed.`,
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "UAE Golden Visa Application Process ",
        description:
          "The application process to apply for a UAE Golden Visa is straightforward, and it may take up to 4 weeks between initiating the process and receiving the residency documents. The application process can be divided into the following stages:",
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
              "Applicant fulfils real estate investment requirements.",
              "Applicant travels to the UAE.",
              "Documents are prepared and an application for a UAE residence visa is submitted.",
              "Applicant completes medical fitness test.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Application is approved.",
              "Applicant submits biometric data.",
            ],
          },

          {
            no: 4,
            item: "Passport Handover",
            list: [
              "UAE Visa is granted in 1-4 weeks.",
              "Client can choose to stay or leave the UAE.",
              "Our team continues to support, making sure that the Emirates ID reaches the client.",
            ],
          },
        ],
      },
      faqs: {
        title: "FAQ's",
        qAndA: [
          {
            q: "How To Get Dubai Investor Visa",
            a: "To get Dubai Investor Visa, interested individuals can invest in Dubai real estate, start or invest in a business or can also make specific investment in the Dubai Bank. These are the primary routes to Dubai Investment Visa.",
          },

          {
            q: `How Much Investment Required For Dubai Golden Visa
`,
            a: `Following is the breakdown for Investment Required For UAE Golden Visa : 

Dubai Real Estate Investment: Invest in Dubai real Estate worth at least AED 2 million.
Business Investment : Start or invest in UAE based company with a capital of at least AED 2 million.​
Public Investment: Depositing AED 2 million in an investment fund or UAE bank.
The Capital investent in the above programs must not be loaned`,
          },

          {
            q: `How To Get Dubai Citizenship By Investment
`,
            a: "Dubai does not offer direct citizenship or UAE Passport, one can get residency by investing through UAE Golden Visa Programs.",
          },
          {
            q: `What Is Golden Visa Dubai
`,
            a: "The UAE Golden Visa is a long term residence visa especially granted for investors, entrepreneurs, and exceptional talents to live, work and study in UAE without the need for a local sponsor. This Dubai Golden Visa is valid for 5 to 10 yrs and can be automatically renewable depending on the eligibility criteria.",
          },
          {
            q: `How much does a Golden Visa cost in Dubai?
`,
            a: "Dubai Golden Visa price ranges form minimum AED 36,500 to AED 2,000,000 depending upon validity period and eligibility criteria chosen investment plan.",
          },
        ],
      },
      about: `The UAE is located in the Middle East, comprised of seven emirates: Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah, and Dubai, arguably the most famous of all the Emirates. The UAE is famous for its impressive skylines, luxurious shopping centers, lively nightlife destinations, glamourous resorts, and world-class restaurants and bars, with Dubai being one of the world’s most famous and revered cities. The UAE is home to over 200 different nationalities, making it one of the world’s most cosmopolitan destinations, and is one of the safest places to live on the globe.

The UAE’s booming economy has historically been supported by oil and gas reserves, however in more recent times it has diversified and aims to make tourism and business the main source of economic focus. Dubai in particular has become an axis for entrepreneurship and innovation, attracting expats from across the globe for business. It is also home to iconic global landmarks such as the Burj Khalifa, Burj Al Arab and the famed Palm Jumeirah. The UAE is a member of several international organizations such as The United Nations, Arab League, Organization of Islamic Cooperation, OPEC, Non-Aligned Movement, World Trade Organization, and BRICS, and is situated in an extremely strategic location, being 8 hours or less away from many global business hubs, making it perfect for investors and residents alike. UAE is an ideal destination for those seeking a secondary passport in one of the fastest-growing and most sought after countries, offering a quick and efficient Residence by Investment Program. 

The capital of the country is Abu Dhabi
The currency is UAE Dirham (AED)
The current population as of 2025 : 11,263,050`,
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "Vanuatu’s Citizenship by Investment Programme is governed by the: Citizenship Act [CAP 112] and executed by the Vanuatu Citizenship Commission under the Development Support Program.",
        items: [],
        note: "",
      },
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
        title: "Overview of United Kingdom",
        items: [
          {
            no: 1,
            title:
              "The United Kingdom is situated off the northwest coast of Europe",
            description: `The United Kingdom is situated off the northwest coast of Europe and comprises four countries: England, Scotland, Wales, and Northern Ireland. Ireland, a separate country that gained independence from the UK in 1937, is located south of Northern Ireland.`,
          },
          {
            no: 2,
            title: "The country's extensive coastline is home to seabirds",
            description: `The UK’s wildlife includes mammals that can coexist with humans, such as hedgehogs and badgers, as well as native roe and red deer. The country’s extensive coastline is home to seabirds like puffins and great skuas, while marine mammals like minke whales, bottlenose dolphins, and orcas can be spotted in its waters.`,
          },
          {
            no: 3,
            title: "England has the largest population in the United Kingdom",
            description: `England has the largest population in the United Kingdom, with more than 80 percent of the total population residing there. London, the capital of both England and the UK, has just under nine million residents. The majority of the population in the UK identifies as Christian, with the majority belonging to Protestant churches. However, the country is also home to rapidly growing communities of Muslims, Hindus, and Jews.`,
          },
          {
            no: 4,
            title: "The UK is a constitutional monarchy",
            description: `The UK is a constitutional monarchy, where the reigning monarch is the head of state but has no real political power. The Prime Minister, who is usually the leader of the party in charge of Parliament, serves as the head of government. Parliament is responsible for passing all of the country’s laws and consists of two chambers: the elected House of Commons and the appointed House of Lords.`,
          },
        ],
      },
      benefits: [
        {
          title: "permanent residency",
          subTitle:
            "A qualified applicant is able to apply for UK permanent residency.",
          icon: "TrendingUp",
        },
        {
          title: "Citizen Rights",
          subTitle:
            "An applicant will be able to enjoy the UK’s high standard of living, with access to world-class infrastructure, education, and healthcare facilities.",
          icon: "Star",
        },
        {
          title: "Citizenship",
          subTitle:
            "A UK permanent resident is able to apply for British citizenship upon completing citizenship requirements.",
          icon: "Heart",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can sponsor immediate family members, including his/her spouse and unmarried children under the age of 21.",
          icon: "ShieldCheck",
        },
      ],
      importantDetails: [
        {
          title: "GBP 50,000",
          description: "Minimum Investment",
          icon: "Coins",
        },
        {
          title: "4 - 6 Months",
          description: "Time to Residency",
          icon: "Clock",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "United Kingdom Residency by Investment Requirements",
          description: "",
          items: [
            "Applicant must pass due diligence in order to apply for the UK residence by investment programme.",
            "Applicant must be 18+ years of age.",
            "Applicant must not have a criminal record.",
            "Applicant must have a good business idea and experience in the business they want to establish.",
            "English language proficiency: Applicant must be proficient in English at Level B, 4.0 for the Skilled Worker Business Visa Programme and obtain a score of 5.5. across each category of IELTS for the Isle of Man Innovator Visa Programme.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "UK Residency Details",
          description: `The UK provides two distinct pathways for ambitious entrepreneurs and innovators who are seeking residency: the Isle of Man Innovator Programme and the Skilled Worker Business Visa Programme. The Isle of Man Innovator Visa Programme paves the way for gifted entrepreneurs to launch their ventures on the Isle of Man, while the Skilled Worker Business Visa Programme presents a unique 5-year business setup pathway with exclusive benefits.

Both routes not only facilitate the pursuit of success in the UK’s dynamic, international business environment, but also lead to multiple opportunities for obtaining UK permanent residency and, ultimately, citizenship.`,
          items: [
            {
              title: "Programme Options",
              list: [
                "            The Isle of Man Innovator Visa is a 3-year programme designed for experienced entrepreneurs seeking to establish a business in the Isle of Man, collaborate with an existing company through investment, or become involved in the management of a business.",
                "The Skilled Worker Business Visa is a 5-year programme designed for individuals looking to set up or expand a business in the UK.",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "United Kingdom Residency by Investment Application Process",
        description:
          "At Passport Legacy, we streamline the UK Entrepreneur Residence Visa process by offering a systematic approach with round-the-clock support. The application process can be divided into the following stages:",
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
              "Proposal for a business visa is prepared and submitted.",
              "Supporting business, legal, and immigration documents are prepared, and the application is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: ["Application is processed.", "Application is approved"],
          },

          {
            no: 4,
            item: "Passport Handover",
            list: [
              "Visa is granted.",
              "Our on-the-ground team continues to support business setup and immigration requirements.",
            ],
          },
        ],
      },

      about: `The United Kingdom is a diverse nation that has played a significant role in shaping the modern world and is made up of England, Scotland, Wales, and Northern Island. The UK is known across the globe for its buzzing cities such as London, Edinburgh, and Manchester, all of which are multicultural cities that offer a sundry array of food, music, and art, with heavy influences from Asia, Africa, and Europe. From the West End theatres of London to the iconic Edinburgh Castle, the UK has a wealth of cultural and historical attractions.

The UK is a hub for technological innovation, with many leading companies in sectors such as finance, pharmaceuticals, and engineering based in London and Edinburgh. Officially the sixth largest economy on the globe and the second largest in Europe, the UK ranked 5th in 2024 on the Global Innovation Index. It also has a thriving tourism industry, attracting millions of visitors each year who come to experience its famed landmarks, such as Big Ben and the Tower of London, and varied culture, from the upscale restaurants in Mayfair to the lively art scenes in the Northern Quarter, Manchester. The United Kingdom is an ideal destination for those seeking a secondary passport in one of the most popular tourist destinations in the world, offering a quick and efficient Residence by Investment Program.

The capital of the country is London
The currency is Pound Sterling (GBP)
The population as of 2025 : 69,442,865`,
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
        title: "Overview of USA",
        items: [
          {
            no: 1,
            title: "USA is the third-largest country in the world",
            description: `The United States of America is the third-largest country in the world in terms of size and population. Its western border is formed by the Pacific Ocean, while the Atlantic Ocean borders the east. Canada shares its northern border, and Mexico shares the southern border. The country comprises 50 states and the District of Columbia.`,
          },
          {
            no: 2,
            title: "The United States has always been a nation of immigrants",
            description: `The United States has always been a nation of immigrants, with people from various parts of the world seeking refuge and a better way of life. As a result, the population is diverse, reflecting the rich cultural heritage and traditions of its inhabitants.`,
          },
          {
            no: 3,
            title: "The United States is divided into six regions",
            description: `The United States is divided into six regions: New England, the mid-Atlantic, the South, the Midwest, the Southwest, and the West. New England, comprising the states of Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont.`,
          },
          {
            no: 4,
            title: "United States is characterised by a diverse landscape",
            description: `The vast expanse of the United States is characterised by a diverse landscape that includes tropical beaches in Florida, towering peaks in the Rocky Mountains, rolling prairies, barren deserts in the West, dense wilderness areas in the Northeast and Northwest, and iconic landmarks such as the Great Lakes, Grand Canyon, Yosemite Valley, and the mighty Mississippi River.`,
          },
          {
            no: 5,
            title:
              "The wildlife in the United States is just as distinct as its varied landscape.",
            description: `The wildlife in the United States is just as distinct as its varied landscape. The country’s largest carnivores include black bears, grizzlies, and polar bears. Over 20,000 flower species can be found, with most of them having originated from Europe. The bald eagle, a protected species, is the national bird and a symbol of the United States.`,
          },
        ],
      },
      benefits: [
        {
          title: "Visa-Free Access",
          subTitle:
            "US green card holders can enjoy visa-free and visa-on-arrival travel across 189 countries with US Passport including Canada, Mexico, Costa Rica, and Peru.",
          icon: "TrendingUp",
        },
        {
          title: "Citizen Rights",
          subTitle:
            "The applicant and his/her family will have the right to live, work, and study anywhere in the USA, availing all the same benefits as other American residents.",
          icon: "Zap",
        },
        {
          title: "Citizenship",
          subTitle:
            "US green card holders are able to apply for American citizenship after 5 years of legal residence.",
          icon: "Star",
        },
        {
          title: "For Family",
          subTitle:
            "A single applicant can sponsor immediate family members, including his/her spouse and unmarried children under the age of 21.",
          icon: "Globe",
        },
      ],
      importantDetails: [
        {
          title: "USD 800,000",
          description: "Minimum Investment (Principle return in 5 - 6 years)",
          icon: "Coins",
        },
        {
          title: "Concurrent Filing",
          description:
            "For applicants inside the USA to gain immediate right to work / Re-entry permit",
          icon: "Briefcase",
        },
        {
          title: "Access to work, live, and study",
          description: "Anywhere in the USA",
          icon: "GraduationCap",
        },
        {
          title: "189 Countries",
          description: "Visa - Free Access",
          icon: "Globe",
        },
      ],
      requirements: {
        investmentRequirements: {
          title: "USA Residency by Investment Requirements",
          description: "",
          items: [
            "Applicant must pass due diligence in order to apply for the USA Visa programme.",
            "Applicant must be 18+ years of age.",
            "Applicant must not have a criminal record.",
            "Confirmed legal investment sources.",
          ],
          note: "",
        },
        investmentOptions: {
          title: "United States Of America Residence By Investment Details",
          description: `Introduced by the US Congress in 1990, the EB-5 Visa Programme grants permanent residency to immigrant investors and their families, via investments in Government-approved Regional Centers. An EB-5 applicant and his/her family can apply for a full, permanent green card after two years of obtaining an initial conditional green card.

After holding a green card for five years, an EB-5 applicant may apply for US citizenship. This popular programme offers an attractive opportunity for investors seeking to establish residency in the United States.`,
          items: [
            {
              title: "Programme Options",
              list: [
                "The EB-5 Visa Programme requires the applicant to invest a minimum of USD 800,000 in a US business, typically through a Regional Centre licensed by US Department of Homeland Security. Approximately 30 months after investing, the applicant will receive an initial conditional green card. After holding the conditional green card for two years, the EB-5 applicant can apply for a permanent green card.",
              ],
            },
          ],
          note: "",
        },
      },
      appProcess: {
        title: "United States of America Visa Requirements",
        description:
          "At Passport Legacy, we streamline the American EB-5 Visa process by offering a systematic approach with round-the-clock support. The application process can be divided into the following stages:",
        process: [
          {
            no: 1,
            item: "Assessment & Onboarding",
            list: [
              "Consult with Passport Legacy’s client advisors.",
              "Consult with Passport Legacy’s US immigration attorney in the USA.",
              "Passport Legacy’s due diligence check is conducted.",
              "Client is onboarded and retainer fees are paid.",
            ],
          },
          {
            no: 2,
            item: "Application Submission",
            list: [
              "Client works closely with immigration attorney to validate and facilitate source of funds.",
              "Suitable licensed Regional Centre options are provided.",
              "Regional Centre is selected.",
              "Econometric study proving creation of jobs is obtained from the Regional Centre after 18 months.",
              "Application for conditional green card is submitted.",
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
              "Conditional green card is granted.",
              "Our team continues to support until the permanent green card is obtained and can continue to provide professional assistance and guidance on obtaining citizenship thereafter.",
            ],
          },
        ],
      },

      about: `The United States of America is a dynamic nation with an abundant history and a rich tapestry of experiences, from spectacular natural landscapes to bustling cities renowned around the globe. These cities are a testament to its multiculturalism, containing an eclectic mix of individuals who contribute to a varied scene of music, cuisine, and art. From the world-famous jazz clubs of New Orleans to the globally prominent hip-hop scene in New York City, the USA can truly claim to have something for everyone.

The USA is perhaps most famous for its entrepreneurial spirit, coining the celebrated American Dream. It is also known for technological innovation, and the ability to shift global culture through exports such as Hollywood movies and music. It has a thriving economy that is the largest in the world by GDP, and it attracts millions of tourists each year who come to experience its iconic landmarks, like the Empire State Building and the Statue of Liberty, natural wonders like the Grand Canyon and Yosemite National Park, and attractions like Central Park and Disneyland. 

Due to this varied culture and the vast opportunities available to its residents, the USA is one of the most powerful residency by investment programmes available for people who wish to conduct business and give their family access to some of the best healthcare and educational institutions in the world. 

The capital of the country is Washington D. C.
The currency is American Dollar (USD)
The current population as of 2025 : 346,794,259`,
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
        title: "Overview of Saudi Arabia",
        items: [
          {
            no: 1,
            title: "",
            description: ``,
          },
          {
            no: 2,
            title: "",
            description: ``,
          },
          {
            no: 3,
            title: "",
            description: ``,
          },
          {
            no: 4,
            title: "",
            description: ``,
          },
          {
            no: 5,
            title: "",
            description: ``,
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
          title: "",
          description: "",
          icon: "Check",
        },
        {
          title: "",
          description: "",
          icon: "Check",
        },
        {
          title: "",
          description: "",
          icon: "Check",
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
              "Documents are prepared and application for Greece’s Golden Residence Permit is submitted.",
            ],
          },
          {
            no: 3,
            item: "Application Processing",
            list: [
              "Application is processed.",
              "Government of Hungary pre-approval is received.",
              "Investment requirements are fulfilled",
            ],
          },
          {
            no: 4,
            item: "Background Checks",
            list: [
              "Hungarian authorities will conduct due diligence and verify the legitimacy of the application and investment funds",
            ],
          },
          {
            no: 5,
            item: "Passport Handover",
            list: [
              "Application is approved.",
              "Passport of Hungary is issued within 4 months.",
              "Passport is handed over to client by Passport Legacy’s advisors.",
            ],
          },
        ],
      },
      faqs: {
        title: "Cyprus Residency Through Investment FAQ's",
        qAndA: [
          {
            q: "",
            a: "",
          },

          {
            q: "",
            a: "",
          },

          {
            q: "",
            a: "",
          },
        ],
      },
      about:
        "Saudi Arabia's residency program offers a gateway to one of the world's fastest-growing economies. Residents benefit from a safe environment, high-quality modern infrastructure, and a strategic location. The Kingdom is rapidly expanding its entertainment and tourism sectors, making it an exciting place for international professionals.",
      legalBasis: {
        title: "Legal Basis of the Programme",
        description:
          "Vanuatu’s Citizenship by Investment Programme is governed by the: Citizenship Act [CAP 112] and executed by the Vanuatu Citizenship Commission under the Development Support Program.",
        items: [],
        note: "",
      },
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
