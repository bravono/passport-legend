import Link from "next/link";
import {
  Check,
  Globe,
  Briefcase,
  Users,
  Coins,
  Hospital,
  Home,
  Key,
  Shield,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CountryGrid } from "@/components/CountryGrid";
import { getCitizenshipCountries } from "@/lib/data/countries-citizenship";
import { CountrySection } from "@/components/CountrySection";
import { RequirementsSection } from "@/components/RequirementsSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { ScrollReveal } from "@/components/ScrollReveal";
export default function Citizenship() {
  const countries = getCitizenshipCountries();

  const cbiSteps = [
    {
      title: "Assessment and Onboarding",
      description:
        "Consult Passport Legacy's client advisors for expert guidance, complemented by their rigorous due diligence checks to ensure sound financial decisions.",
      details: [
        "Consult with Passport Legacy's client advisors.",
        "Passport Legacy's due diligence check is conducted.",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Application Preparation",
      description:
        "Our processing team collates personal documents from the client, completing and submitting the necessary government paperwork for their application.",
      details: [
        "Our team assists with the collection and legalization of documents.",
        "Preparation and signatures of Government forms.",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      title: "Application Submission",
      description:
        "When the file is ready, it will be sent to the Citizenship by Investment Unit (CIU) of the respective country for processing. A confirmation is shared with clients.",
      details: [
        "The team lodges the application with the government.",
        "Follow ups are conducted and clarifications are provided, if needed.",
      ],
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Certificate and Passport",
      description:
        "   Once the application is approved, our team will collect the certificates of naturalization and the original passports.",
      details: [
        "Original documents are sent to our main office.",
        "Client advisor meets with the client to handover the certificate and passport.",
      ],
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const citizenshipFaqs = [
    {
      q: "What is Citizenship by Investment?",
      a: "Citizenship by Investment (CBI) is a process where individuals can acquire a second citizenship and passport by making a significant financial contribution or investment in a host country, typically in real estate, government bonds, or a national development fund.",
    },
    {
      q: "How to Get Citizenship by Investment?",
      a: "The process involves choosing a program, passing a rigorous due diligence check, making the required investment, and submitting an application through an authorized agent like Passport Legend. Once approved, you receive a certificate of naturalization and your new passport.",
    },
    {
      q: "Which Countries Allow Citizenship by Investment?",
      a: "Several countries offer official CBI programs, including Caribbean nations like St. Kitts & Nevis, Grenada, Antigua & Barbuda, and St. Lucia, as well as European and Asian options like Türkiye and São Tomé & Príncipe.",
    },
    {
      q: "What Residence by Investment programmes does Passport Legend offer?",
      a: "Passport Legend offers a wide range of residency programs including the Greek Golden Visa, Cyprus Permanent Residence, Canada Start-up Visa, and various European programs that provide a pathway to residency through investment.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero (Navy Blue) */}
        <Section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-500 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Best Citizenship by <br />
                <span className="text-accent-400">Investment Programmes</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 max-w-4xl mx-auto font-light leading-relaxed">
                Citizenship by investment (CBI) programmes allow foreign
                individuals to acquire citizenship in new countries in exchange
                for an investment in the host country. These programmes are
                designed to attract foreign capital, stimulate economic
                development, and enhance international relations, whilst giving
                investors access to higher levels of mobility, tax optimization
                and lifestyle benefits.
              </p>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>
          </Container>
        </Section>
        <CountrySection countries={countries} />
        {/* Section 2: Intro (Navy Blue) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-primary-500 text-white">
            <Container>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  What is Citizenship by Investment?
                </h2>
                <p className="text-primary-100 text-lg">
                  Citizenship by Investment (CBI) programs allow individuals to
                  obtain a second (or new) citizenship through making a
                  significant financial investment in a country. This investment
                  typically takes the form of:
                </p>
                <ul className="space-y-3 text-primary-200">
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">
                        Real Estate Investment:
                      </strong>{" "}
                      Purchasing property or commercial real estate
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">Government Bonds:</strong>{" "}
                      Investing in government-backed securities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">Capital Transfer:</strong>{" "}
                      Direct government fund contributions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">
                        Business Investment:
                      </strong>{" "}
                      Creating jobs and investing in local businesses
                    </span>
                  </li>
                </ul>
                <p className="text-primary-100 text-lg">
                  In return, you gain full citizenship with all associated
                  rights, including visa-free travel to numerous countries,
                  ability to live and work anywhere in the country, and for many
                  programs, include your family members.
                </p>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Section 3: Benefits (White) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-500 mb-4">
                  Benefits of Citizenship
                </h2>
                <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Visa Freedom",
                    description: "Travel visa-free to 140+ countries",
                    icon: Globe,
                  },
                  {
                    title: "Business Opportunities",
                    description: "Unrestricted business and investment rights",
                    icon: Briefcase,
                  },
                  {
                    title: "Family Benefits",
                    description: "Include spouse and dependent children",
                    icon: Users,
                  },
                  {
                    title: "Tax Advantages",
                    description: "Access to favorable tax treaties",
                    icon: Coins,
                  },
                  {
                    title: "Healthcare & Education",
                    description: "Equal access to public services",
                    icon: Hospital,
                  },
                  {
                    title: "Real Estate Rights",
                    description: "Property ownership and rental rights",
                    icon: Home,
                  },
                  {
                    title: "Permanent Residence",
                    description: "Lifetime residency rights",
                    icon: Key,
                  },
                  {
                    title: "Security",
                    description: "Stability and political security",
                    icon: Shield,
                  },
                ].map((benefit, index) => (
                  <Card
                    key={index}
                    className="bg-white border-neutral-100 shadow-lg hover:shadow-xl transition-shadow text-center p-6"
                  >
                    <div className="text-primary-600 flex justify-center mb-4">
                      <benefit.icon size={40} />
                    </div>
                    <h3 className="font-semibold text-primary-500 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-primary-500">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Section 4: Requirements (Navy Blue) */}
        <RequirementsSection />

        {/* Section 5: Eligibility Roadmap (White) */}
        <EligibilitySection />

        {/* Section 6: Process (Navy Blue) */}
        <ProcessSection
          title="CBI Application Process"
          subtitle="Application processes are straightforward and typically take between 2-6 months between initiating the process and obtaining citizenship."
          steps={cbiSteps}
          theme="dark"
        />

        {/* Section 7: Countries Grid (White) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-500 mb-4">
                  Available Programs ({countries.length})
                </h2>
                <p className="text-primary-500">
                  Explore citizenship opportunities across diverse regions
                </p>
                <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full mt-4" />
              </div>

              <CountryGrid countries={countries} />
            </Container>
          </Section>
        </ScrollReveal>

        {/* Section 8: FAQ (Navy Blue) */}
        <FaqSection faqs={citizenshipFaqs} theme="dark" />

        {/* Section 9: CTA (White) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative bg-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
            <Container className="relative z-10">
              <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-800 to-primary-900 p-12 md:p-20 text-center border border-primary-700 shadow-2xl">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Ready to Explore Your Options?
                  </h2>
                  <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                    Schedule a free consultation to learn about the citizenship
                    programs best suited to your goals.
                  </p>
                  <Button size="lg" variant="accent" asChild>
                    <Link href="/contact">Book Your Consultation</Link>
                  </Button>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
