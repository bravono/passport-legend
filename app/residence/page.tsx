import Link from "next/link";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CountryGrid } from "@/components/CountryGrid";
import { getResidenceCountries } from "@/lib/data/countries-residence";
import { CountrySection } from "@/components/CountrySection";
import { RequirementsSection } from "@/components/RequirementsSection";
import { ResidenceBenefitsSection } from "@/components/ResidenceBenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { ScrollReveal } from "@/components/ScrollReveal";
export default function Residence() {
  const countries = getResidenceCountries();

  const rbiSteps = [
    {
      title: "Assessment and Onboarding",

      description:
        "Our residency experts analyze your profile and investment goals to recommend the most suitable residency-by-investment program.",
      details: [
        "Consult with Passport Legacy’s client advisors.",
        "Passport Legacy’s due diligence check is conducted.",
        "Client is onboarded and retainer fees are paid.",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Application Submission",

      description:
        "We handle the complex paperwork, ensuring all personal and financial documents meet strict immigration requirements.",
      details: [
        "Legal process commences, and bank account is opened.",
        "Client travels to resident country.",
        "Biometrics appointment is booked.",
        "Investment requirements are fulfilled.",
        "Documents are prepared and the application is submitted.",
      ],
      image:
        "https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1932&auto=format&fit=crop",
    },
    {
      title: "Document & Application Processing",
      description:
        "Your application is submitted to the national residency bureau. We monitor progress and handle any queries from authorities.",
      details: ["Application is processed.", "Application is approved."],
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Approval & Golden Visa Handover",
      description:
        "Upon approval, you receive your official residency permit, granting you and your family the right to live and work in the host country.",
      details: [
        "Golden Residence Permit is granted.",
        "Our team continues to support until the permit is stamped.",
      ],
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const residenceFaqs = [
    {
      q: "Which countries give permanent residency by investment?",
      a: "Several countries offer permanent residency through investment, including Cyprus (Permanent Residence Program), Greece (Golden Visa), and various programs in Europe and North America that lead to permanent status after a qualifying period.",
    },
    {
      q: "What is residency by investment?",
      a: "Residency by investment (RBI) is a process where individuals can obtain a residency permit in a foreign country by making a significant financial investment, such as purchasing real estate or investing in a local business.",
    },
    {
      q: "How can I get permanent residency by investing?",
      a: "You can obtain permanent residency by choosing a program that offers an immediate permanent permit (like Cyprus) or one that provides a pathway to permanent residency after a few years of holding a temporary residence permit (like Greece or Portugal).",
    },
    {
      q: "What are the benefits of residency by investment?",
      a: "Key benefits include the right to live and work in the host country, access to world-class healthcare and education, visa-free travel within the Schengen Area (for EU programs), and a potential pathway to citizenship.",
    },
    {
      q: "Are family members included in the residency application?",
      a: "Yes, most residency by investment programs allow the main investor to include their spouse and dependent children in the same application, ensuring the whole family benefits from the new status.",
    },
    {
      q: "Which are the leading residences by investment programmes?",
      a: "Top-tier programs include the Greek Golden Visa, the Cyprus Permanent Residence Program, the UAE Golden Visa, and various European programs known for their efficiency and high quality of life.",
    },
    {
      q: "How should I choose a residence programme?",
      a: "Choosing the right program depends on your specific goals, such as ease of travel, tax optimization, education for your children, or relocation plans. Our advisors at Passport Legend provide personalized guidance to help you make the best choice.",
    },
    {
      q: "What Citizenship by Investment programmes does Passport Legend offer?",
      a: "Passport Legend offers comprehensive citizenship programs in the Caribbean (St. Kitts, Grenada, St. Lucia, Antigua) and other regions like Türkiye, providing a direct route to a second passport.",
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
                "url('https://live.staticflickr.com/65535/55277284017_2d3fc6d818_b.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Best Residence by <br />
                <span className="text-accent-400">Investment Programmes</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 max-w-4xl mx-auto font-light leading-relaxed">
                Residence by investment (RBI) programmes allow foreign
                individuals to acquire residency in new countries in exchange
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
                  What is Residence by Investment?
                </h2>
                <p className="text-primary-100 text-lg">
                  Residence by Investment (RBI) programs provide a pathway to
                  secure long-term or permanent residency in a country through
                  financial investment. Unlike citizenship, residence permits
                  allow you to live and work in a country while maintaining your
                  existing nationality. Common investment types include:
                </p>
                <ul className="space-y-3 text-primary-200">
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">Real Estate:</strong>{" "}
                      Purchase property meeting program requirements
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">
                        Capital Investment:
                      </strong>{" "}
                      Deposit funds in government or business accounts
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">
                        Business Establishment:
                      </strong>{" "}
                      Start and operate a local business
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-400 font-bold">
                      <Check size={16} className="text-accent-400" />
                    </span>
                    <span>
                      <strong className="text-white">Job Creation:</strong>{" "}
                      Create employment for local residents
                    </span>
                  </li>
                </ul>
                <p className="text-primary-100 text-lg">
                  Residence permits typically range from 1-10 years and can
                  often be renewed indefinitely. Many programs offer a pathway
                  to citizenship after a certain period of residence.
                </p>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Section 3: Benefits (White) */}
        <ResidenceBenefitsSection />

        {/* Section 4: Requirements (Navy Blue) */}
        <RequirementsSection />

        {/* Section 5: Process (White) */}
        <ProcessSection
          title="RBI Application Process"
          subtitle="Obtaining a golden visa or residency permit typically takes 3-9 months, providing a clear path to global mobility and security."
          steps={rbiSteps}
          theme="light"
        />

        {/* Section 6: Countries Grid (Navy Blue) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-primary-500 text-white">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Available Programs ({countries.length})
                </h2>
                <p className="text-primary-200">
                  Discover residency opportunities worldwide
                </p>
                <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full mt-4" />
              </div>

              <CountryGrid countries={countries} />
            </Container>
          </Section>
        </ScrollReveal>

        {/* Section 7: FAQ (White) */}
        <FaqSection faqs={residenceFaqs} theme="light" />

        {/* Section 8: CTA (Navy Blue) */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative bg-primary-500 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
            <Container className="relative z-10">
              <div className="max-w-4xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-800 to-primary-900 p-12 md:p-20 text-center border border-primary-700 shadow-2xl">
                <div className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Ready to Find Your Perfect Home Away?
                  </h2>
                  <p className="text-lg text-primary-100 max-w-2xl mx-auto">
                    Let our experts guide you to the ideal residency program for
                    your lifestyle and goals.
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
