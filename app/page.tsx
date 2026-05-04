import Link from "next/link";
import {
  Globe,
  ClipboardList,
  Zap,
  Network,
  Landmark,
  Star,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getFeaturedCountries } from "@/lib/data/countries";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  const featured = getFeaturedCountries(3);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-neutral-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-100),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,var(--color-primary-900),transparent_40%)] opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-100),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-900),transparent_40%)] opacity-30" />

          <Container className="relative z-10">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 text-sm font-semibold text-primary-700 dark:text-primary-300">
                  Global Citizenship Advisors
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-neutral-900 dark:text-white">
                  Your Trusted <br />
                  <span className="text-gradient">
                    {" "}
                    Gateway to Global Freedom
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-[1.1] text-neutral-900 dark:text-white">
                  Through Residence & Citizenship by Investment
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
                  Partner with a leading consultancy trusted by ambitious
                  investors worldwide to secure second residencies and
                  passports. We make global mobility simple, strategic, and
                  within reach
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
              <div className="relative hidden md:block animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-3xl rounded-full" />
                <div className="relative h-[500px] flex items-center justify-center animate-float">
                  <div className="p-12 rounded-3xl glass-dark shadow-2xl scale-125">
                    <Globe
                      size={160}
                      strokeWidth={1}
                      className="text-accent-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Do */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-neutral-50 dark:bg-neutral-900/50">
            <Container>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                  Why Choose <span className="italic">Passport Legend</span>?
                </h2>
                <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  We guide you through the entire process of obtaining
                  citizenship or residence in premium jurisdictions worldwide.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card hover className="group">
                  <div className="h-16 w-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                    <ClipboardList size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    Expert Guidance
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Our team of specialists provides personalized advice
                    tailored to your unique financial and personal situation.
                  </p>
                </Card>
                <Card hover className="group">
                  <div className="h-16 w-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    Fast Processing
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Streamlined internal processes and strong government ties
                    ensure you get citizenship or residence faster than anywhere
                    else.
                  </p>
                </Card>
                <Card hover className="group">
                  <div className="h-16 w-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                    <Network size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                    Global Network
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Our presence across 6 continents provides you with local
                    expertise and exclusive access to worldwide opportunities.
                  </p>
                </Card>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Featured Countries */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative overflow-hidden bg-white dark:bg-neutral-900">
            <div className="absolute inset-0 section-shimmer opacity-30" />
            <Container className="relative z-10">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                  Featured Opportunities
                </h2>
                <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
                <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  Discover some of our most popular citizenship and residence
                  programs.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {featured.map((country) => (
                  <Link
                    key={country.id}
                    href={
                      country.type === "citizenship"
                        ? `/citizenship-by-investment/${country.slug}`
                        : `/countries/${country.slug}`
                    }
                  >
                    <Card
                      hover
                      className="h-full p-0 overflow-hidden flex flex-col group"
                    >
                      <div className="relative h-56 w-full overflow-hidden">
                        <img
                          src={country.heroImage}
                          alt={country.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                            {country.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2 flex-grow">
                          {country.shortDescription}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400">
                          View Details
                          <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-2"
                          />
                        </div>
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
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal direction="up" delay={0.2}>
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
                        <Star
                          key={i}
                          size={16}
                          className="fill-accent-500 text-accent-500"
                        />
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
        </ScrollReveal>

        {/* Trust Signals */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative overflow-hidden bg-primary-900 py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary-800),transparent_70%)] opacity-50" />
            <Container className="relative z-10">
              <div className="grid gap-12 text-center md:grid-cols-4">
                <div className="space-y-2 group">
                  <p className="text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500">
                    15+
                  </p>
                  <div className="h-0.5 w-8 bg-accent-500/30 mx-auto" />
                  <p className="text-primary-100 font-medium tracking-wide uppercase text-xs">
                    Years Experience
                  </p>
                </div>
                <div className="space-y-2 group">
                  <p className="text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500">
                    5000+
                  </p>
                  <div className="h-0.5 w-8 bg-accent-500/30 mx-auto" />
                  <p className="text-primary-100 font-medium tracking-wide uppercase text-xs">
                    Happy Clients
                  </p>
                </div>
                <div className="space-y-2 group">
                  <p className="text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500">
                    50+
                  </p>
                  <div className="h-0.5 w-8 bg-accent-500/30 mx-auto" />
                  <p className="text-primary-100 font-medium tracking-wide uppercase text-xs">
                    Countries
                  </p>
                </div>
                <div className="space-y-2 group">
                  <p className="text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500">
                    98%
                  </p>
                  <div className="h-0.5 w-8 bg-accent-500/30 mx-auto" />
                  <p className="text-primary-100 font-medium tracking-wide uppercase text-xs">
                    Success Rate
                  </p>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative overflow-hidden py-24">
            <div className="absolute inset-0 bg-primary-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-accent-600/20" />
            <div className="absolute inset-0 section-shimmer opacity-20" />

            <Container className="relative z-10">
              <div className="glass-dark p-12 md:p-20 rounded-[3rem] text-center border-accent-500/20 max-w-5xl mx-auto">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Ready to Start Your <br />
                    <span className="text-accent-400">Legendary Journey?</span>
                  </h2>
                  <p className="text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
                    Schedule a free consultation with our expert team to find
                    the perfect program for you.
                  </p>
                  <div className="pt-4">
                    <Button size="xl" variant="accent" asChild>
                      <Link href="/contact">Book Your Free Consultation</Link>
                    </Button>
                  </div>
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
