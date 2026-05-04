import Link from "next/link";
import { Check, Globe, Briefcase, Users, Coins, Hospital, Home, Key, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CountryGrid } from "@/components/CountryGrid";
import { getCitizenshipCountries } from "@/lib/data/countries";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Citizenship() {
  const countries = getCitizenshipCountries();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544253942-0fbc35daff1f?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Citizenship by <span className="text-accent-400">Investment</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto font-light leading-relaxed">
                Gain citizenship in premium countries worldwide. Expand your
                horizons with global mobility, visa-free travel, and unlimited
                opportunities.
              </p>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>
          </Container>
        </Section>

        {/* Intro Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white dark:bg-neutral-800">
            <Container>
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                  What is Citizenship by Investment?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  Citizenship by Investment (CBI) programs allow individuals to
                  obtain a second (or new) citizenship through making a
                  significant financial investment in a country. This investment
                  typically takes the form of:
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Real Estate Investment:</strong> Purchasing property
                      or commercial real estate
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Government Bonds:</strong> Investing in
                      government-backed securities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Capital Transfer:</strong> Direct government fund
                      contributions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Business Investment:</strong> Creating jobs and
                      investing in local businesses
                    </span>
                  </li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  In return, you gain full citizenship with all associated rights,
                  including visa-free travel to numerous countries, ability to
                  live and work anywhere in the country, and for many programs,
                  include your family members.
                </p>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Benefits Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-neutral-50 dark:bg-neutral-900">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                  Benefits of Citizenship
                </h2>
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
                  <Card key={index} className="text-center">
                    <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                      <benefit.icon size={40} />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {benefit.description}
                    </p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Countries Grid */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white dark:bg-neutral-800">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  Available Programs ({countries.length})
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Explore citizenship opportunities across diverse regions
                </p>
              </div>

              <CountryGrid countries={countries} />
            </Container>
          </Section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white">
            <Container>
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Explore Your Options?
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Schedule a free consultation to learn about the citizenship
                  programs best suited to your goals.
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Book Your Consultation</Link>
                </Button>
              </div>
            </Container>
          </Section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
