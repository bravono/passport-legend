import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getFeaturedCountries } from "@/lib/data/countries";

export default function Home() {
  const featured = getFeaturedCountries(3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-primary-900 py-20 md:py-32">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white">
                  Your Gateway to Global{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    Citizenship & Residence
                  </span>
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  Unlock world-class investment opportunities. Gain citizenship,
                  residency, or tax advantages in premium jurisdictions
                  worldwide.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/citizenship">Explore Programs</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 md:h-full hidden md:block animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-2xl opacity-30" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-6xl">🌍</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Do */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Why Choose Passport Legend?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                We guide you through the entire process of obtaining citizenship
                or residence in premium jurisdictions worldwide.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Expert Guidance
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our team of specialists provides personalized advice for your
                  unique situation.
                </p>
              </Card>
              <Card>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Fast Processing
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Streamlined processes to get you citizenship or residence
                  faster than ever.
                </p>
              </Card>
              <Card>
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Global Network
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Connected with government agencies, partners, and experts
                  worldwide.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Featured Countries */}
        <Section className="bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Featured Opportunities
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Discover some of our most popular citizenship and residence
                programs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((country) => (
                <Link key={country.id} href={`/countries/${country.slug}`}>
                  <Card className="h-full">
                    <div className="mb-4 text-5xl">🏛️</div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {country.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      {country.shortDescription}
                    </p>
                    <div className="inline-block text-sm font-semibold text-primary-600 dark:text-primary-400">
                      Learn More →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/citizenship">View All Citizenship Programs</Link>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "John Smith",
                  role: "Entrepreneur",
                  content:
                    "Passport Legend made my citizenship dream a reality. Seamless process from start to finish.",
                  rating: 5,
                },
                {
                  name: "Maria Garcia",
                  role: "Investor",
                  content:
                    "Professional, transparent, and incredibly supportive. Highly recommended!",
                  rating: 5,
                },
                {
                  name: "David Chen",
                  role: "Business Owner",
                  content:
                    "The team went above and beyond. Best decision I made for my family.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Trust Signals */}
        <Section className="bg-primary-50 dark:bg-primary-900/20">
          <Container>
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  15+
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  5000+
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  50+
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Countries
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  98%
                </p>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Success Rate
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white">
          <Container>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Schedule a free consultation with our expert team to find the
                perfect program for you.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
