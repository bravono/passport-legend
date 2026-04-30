import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { CountryGrid } from "@/components/CountryGrid";
import { getResidenceCountries } from "@/lib/data/countries";

export default function Residence() {
  const countries = getResidenceCountries();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-900 dark:to-primary-900">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                Residence by Investment
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                Secure residency in world-class destinations. Live, work, and
                invest in countries with exceptional quality of life, economic
                opportunities, and lifestyle benefits.
              </p>
            </div>
          </Container>
        </Section>

        {/* Intro Section */}
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
                    ✓
                  </span>
                  <span>
                    <strong>Real Estate:</strong> Purchase property meeting
                    program requirements
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Capital Investment:</strong> Deposit funds in
                    government or business accounts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    ✓
                  </span>
                  <span>
                    <strong>Business Establishment:</strong> Start and operate a
                    local business
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    ✓
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

        {/* Benefits Section */}
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
                  description:
                    "Keep your original citizenship while living abroad",
                  icon: "🌐",
                },
                {
                  title: "Tax Planning",
                  description:
                    "Strategic tax residency and planning opportunities",
                  icon: "📊",
                },
                {
                  title: "Quality of Life",
                  description: "Access to world-class healthcare and education",
                  icon: "✨",
                },
                {
                  title: "Business Growth",
                  description: "Expand your business to new markets",
                  icon: "📈",
                },
                {
                  title: "Schengen Access",
                  description:
                    "Travel freely in EU countries (select programs)",
                  icon: "🛫",
                },
                {
                  title: "Family Sponsorship",
                  description: "Bring dependents with you",
                  icon: "👪",
                },
                {
                  title: "Property Rights",
                  description: "Own and rent property freely",
                  icon: "🏘️",
                },
                {
                  title: "Pathway to Citizenship",
                  description: "Many programs offer citizenship eligibility",
                  icon: "🛤️",
                },
              ].map((benefit, index) => (
                <Card key={index} className="text-center">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
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

        {/* Countries Grid */}
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

        {/* CTA Section */}
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
      </main>
      <Footer />
    </>
  );
}
