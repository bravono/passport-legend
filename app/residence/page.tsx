import Link from "next/link";
import { Check, Globe, BarChart3, Sparkles, TrendingUp, Plane, Users, Home, Milestone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CountryGrid } from "@/components/CountryGrid";
import { getResidenceCountries } from "@/lib/data/countries";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Residence() {
  const countries = getResidenceCountries();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10">
            <div className="text-center space-y-8 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Residence by <span className="text-accent-400">Investment</span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto font-light leading-relaxed">
                Secure residency in world-class destinations. Live, work, and
                invest in countries with exceptional quality of life, economic
                opportunities, and lifestyle benefits.
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
                  What is Residence by Investment?
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  Residence by Investment (RBI) programs provide a pathway to
                  secure long-term or permanent residency in a country through
                  financial investment. Unlike citizenship, residence permits
                  allow you to live and work in a country while maintaining your
                  existing nationality. Common investment types include:
                </p>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Real Estate:</strong> Purchase property meeting
                      program requirements
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Capital Investment:</strong> Deposit funds in
                      government or business accounts
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Business Establishment:</strong> Start and operate a
                      local business
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">
                      <Check size={16} className="text-primary-600 dark:text-primary-400" />
                    </span>
                    <span>
                      <strong>Job Creation:</strong> Create employment for local
                      residents
                    </span>
                  </li>
                </ul>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                  Residence permits typically range from 1-10 years and can often
                  be renewed indefinitely. Many programs offer a pathway to
                  citizenship after a certain period of residence.
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
                  Benefits of Residence
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Flexibility",
                    description: "Keep your original citizenship while living abroad",
                    icon: Globe,
                  },
                  {
                    title: "Tax Planning",
                    description: "Strategic tax residency and planning opportunities",
                    icon: BarChart3,
                  },
                  {
                    title: "Quality of Life",
                    description: "Access to world-class healthcare and education",
                    icon: Sparkles,
                  },
                  {
                    title: "Business Growth",
                    description: "Expand your business to new markets",
                    icon: TrendingUp,
                  },
                  {
                    title: "Schengen Access",
                    description: "Travel freely in EU countries (select programs)",
                    icon: Plane,
                  },
                  {
                    title: "Family Sponsorship",
                    description: "Bring dependents with you",
                    icon: Users,
                  },
                  {
                    title: "Property Rights",
                    description: "Own and rent property freely",
                    icon: Home,
                  },
                  {
                    title: "Pathway to Citizenship",
                    description: "Many programs offer citizenship eligibility",
                    icon: Milestone,
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
                  Discover residency opportunities worldwide
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
                  Ready to Find Your Perfect Home Away?
                </h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Let our experts guide you to the ideal residency program for
                  your lifestyle and goals.
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
