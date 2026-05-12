import {
  Globe,
  ClipboardList,
  Zap,
  Network,
  Landmark,
  Star,
  ArrowRight,
  ShieldCheck,
  Coins,
  Search,
  CheckCircle,
  FileText,
  RefreshCw,
  HelpCircle,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

export const citizenshipCountries = [
    {
      name: "St Kitts & Nevis",
      slug: "st kitts and nevis-citizenship",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2074&auto=format&fit=crop",
      facts: ["$250,000 Min Investment", "6 Months Processing", "162+ Countries Visa-Free", "Dual Citizenship"],
    },
    {
      name: "Grenada",
      slug: "grenada-citizenship",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070&auto=format&fit=crop",
      facts: ["$235,000 Min Investment", "6 Months Processing", "143+ Countries Visa-Free", "US E-2 Visa Access"],
    },
    {
      name: "Antigua & Barbuda",
      slug: "antigua and barbuda-citizenship",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
      facts: ["$230,000 Min Investment", "6-9 Months Processing", "151 Countries Visa-Free", "No Income Tax"],
    },
    {
      name: "St Lucia",
      slug: "st lucia-citizenship",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
      facts: ["$240,000 Min Investment", "6 Months Processing", "147 Countries Visa-Free", "No Physical Stay"],
    },
    {
      name: "Türkiye",
      slug: "turkiye-citizenship",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      facts: ["$400,000 Min Investment", "6 Months Processing", "111+ Countries Visa-Free", "Access to Europe & Asia"],
    },
    {
      name: "São Tomé & Príncipe",
      slug: "sao tome and principe-citizenship",
      image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop",
      facts: ["$90,000 Min Investment", "1-2 Months Processing", "93+ Countries Visa-Free", "Most Affordable Program"],
    },
];
  
export const residenceCountries = [
    {
      name: "Canada",
      slug: "canada-residence",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop",
      facts: ["$250,000 Min Investment", "12-16 Months Processing", "Start-up Visa Program", "High Quality Life"],
    },
    {
      name: "Cyprus",
      slug: "cyprus-residence",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop",
      facts: ["€300,000 Min Investment", "2-3 Months Processing", "Schengen Area (2026)", "Permanent Status"],
    },
    {
      name: "Greece",
      slug: "greece-residence",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2074&auto=format&fit=crop",
      facts: ["€250,000 Min Investment", "3 Months Processing", "27 Schengen Countries", "Low Cost Entry"],
    },
    {
      name: "Hungary",
      slug: "hungary-residence",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2074&auto=format&fit=crop",
      facts: ["€250,000 Min Investment", "4 Months Processing", "10-Year Residency", "No Stay Required"],
    },
    {
      name: "USA",
      slug: "usa-residence",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
      facts: ["$800,000 Min Investment", "24-30 Months Processing", "EB-5 Green Card Pathway", "Live Anywhere in USA"],
    },
    {
      name: "United Kingdom",
      slug: "united kingdom-residence",
      image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop",
      facts: ["£50,000 Min Investment", "4-6 Months Processing", "Innovator Visa Pathway", "High Living Standard"],
    },
  ];

  export const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Our professional advisors meet with every client one-on-one to assess their individual circumstances and determine the most suitable residency and citizenship options that cater to their needs.",
      icon: Search,
    },
    {
      step: "02",
      title: "Pre-approval",
      description: "A rigorous due diligence check, led by compliance experts, allows the client to gain pre-approval through our internal vetting process before proceeding with the next steps.",
      icon: CheckCircle,
    },
    {
      step:"03",
      title: "Application",
      description: "Our processing team collates personal documents from the client, completing and submitting the necessary government paperwork for their application.",
      icon: FileText,
    },
    {
      step:"04",
      title: "Processing",
      description: "Our team of international investment advisors and immigration specialists provide 24/7 support, answering any questions or queries as the government processes the application.",
      icon: Zap,
    },
    {
      step:"05",
      title: "Handover",
      description: "Upon successful completion of the process, the client will have secured a powerful second residency or citizenship, unlocking the benefits and peace of mind that come with it. The new passport or residence card will be handed over directly to the client by a dedicated advisor.",
      icon: Star,
    },
    {
      step:"06",
      title: "Renewals",
      description: "Our commitment to our clients goes beyond just the initial immigration investment process. We are dedicated to providing ongoing support and assistance, including help with residency and passport renewals, addressing any potential queries that may arise.",
      icon: RefreshCw,
    },
  ];

  export const faqs = [
    {
      q: "How do I choose a good Investment Migration Advisory Firm?",
      a: "Look for a firm with a proven track record, transparent fee structures, and government authorizations. Ensure they provide personalized consultations and have a global presence to handle complex cross-border cases.",
    },
    {
      q: "What immigration services does Passport Legacy offer?",
      a: "Passport Legacy offers end-to-end services for Citizenship by Investment and Residence by Investment programs, including initial assessment, document preparation, government submission, 24/7 support, and post-approval services like renewals.",
    },
    {
      q: "Can an Investment Migration Advisory Firm Help Me Renew or Extend My Residence?",
      a: "Yes, firms like Passport Legacy provide ongoing support for residence permit renewals and passport extensions, ensuring that your status remains valid and any legal changes are addressed promptly.",
    },
    {
      q: "What is the Role of an Investment Migration Advisory Firm in the Investment Immigration Process?",
      a: "The advisory firm acts as a bridge between the client and the government. They conduct due diligence, prepare legal documents, manage the application timeline, and ensure that the investment meets all regulatory requirements to maximize the chance of approval.",
    },
    {
      q: "How to Choose the Right Immigration Programme?",
      a: "The right program depends on your goals (e.g., visa-free travel, tax optimization, education for children, or relocation). An advisor evaluates your budget, family size, and time horizon to recommend the most suitable jurisdiction.",
    },
    {
      q: "What kind of investments are accepted for citizenship or residency programmes?",
      a: "Common investments include non-refundable government donations, real estate purchases, fixed-term bank deposits, government bonds, or job-creating business investments.",
    },
  ];

  export const blogPosts = [
    {
      title: "The Ultimate Guide to Caribbean Citizenship by Investment in 2026",
      excerpt: "Explore the latest changes and benefits of the most popular Caribbean citizenship programs.",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2070&auto=format&fit=crop",
      link: "/blog/caribbean-citizenship-guide-2026",
    },
    {
      title: "Golden Visa vs. Digital Nomad Visa: Which One is Right for You?",
      excerpt: "Compare the long-term benefits of investment-based residency with flexible nomad options.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85def82820?q=80&w=2070&auto=format&fit=crop",
      link: "/blog/golden-visa-vs-digital-nomad",
    },
    {
      title: "A Second Passport: The Ultimate Insurance Policy for High-Net-Worth Individuals",
      excerpt: "Why securing a second citizenship is the best strategic move in an uncertain global landscape.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2088&auto=format&fit=crop",
      link: "/blog/second-passport-insurance-policy",
    },
  ];