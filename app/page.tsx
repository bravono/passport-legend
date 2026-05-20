import Link from "next/link";
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  citizenshipCountries,
  residenceCountries,
  processSteps,
  faqs,
  blogPosts,
} from "@/lib/data/home-page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Section 1: Hero Section (White) */}
        <Section className="relative min-h-[90vh] flex items-center bg-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent" />

          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-sm font-semibold text-primary-700">
                  Global Citizenship & Residence Advisors
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-primary-500">
                  Your Trusted <br />
                  Gateway to Global Freedom
                </h1>
                <p className="text-lg md:text-xl text-primary-500 max-w-xl leading-relaxed">
                  Through Residence & Citizenship by Investment.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" variant="primary" asChild>
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/citizenship">Explore Programs</Link>
                  </Button>
                </div>
              </div>
              <div className="relative block">
                <div className="absolute inset-0 bg-accent-500/10 blur-3xl rounded-full animate-pulse" />
                <img
                  src="https://live.staticflickr.com/65535/55277283787_b9ff8cb76f_b.jpg"
                  alt="Luxury Architecture"
                  className="relative rounded-[3rem] shadow-premium object-cover aspect-[4/5] animate-float"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Section 2: Social Proof (Navy Blue) - Pushed right after hero */}
        <Section className="bg-primary-500 text-white relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
          <Container className="relative z-10">
            <div className="grid gap-16 md:grid-cols-4 text-center mb-24">
              {[
                { label: "Years Experience", value: "15+" },
                { label: "Happy Clients", value: "5000+" },
                { label: "Countries", value: "50+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2 group">
                  <p className="text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </p>
                  <div className="h-0.5 w-8 bg-accent-500/30 mx-auto" />
                  <p className="text-primary-100 font-medium tracking-wide uppercase text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "John Smith",
                  role: "Entrepreneur",
                  content:
                    "Passport Legend made my citizenship dream a reality. The process was seamless from start to finish.",
                },
                {
                  name: "Maria Garcia",
                  role: "Real Estate Investor",
                  content:
                    "Professional, transparent, and incredibly supportive. Their guidance on the Golden Visa was invaluable.",
                },
                {
                  name: "David Chen",
                  role: "Business Owner",
                  content:
                    "The team went above and beyond to ensure my family's security. Best decision we've made.",
                },
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  className="bg-primary-800/50 border-primary-700/50 backdrop-blur-sm p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-accent-500 text-accent-500"
                      />
                    ))}
                  </div>
                  <p className="text-primary-100 italic mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-primary-300">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section 3: Residence Opportunities (White) */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500">
                Residence{" "}
                <span className="italic text-accent-600">Opportunities</span>
              </h2>
              <p className="text-xl text-primary-500 max-w-2xl mx-auto">
                Secure your right to live, work, and study in the world's most
                desirable jurisdictions.
              </p>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {residenceCountries.map((country, i) => (
                <Link key={i} href={`/residence-by-investment/${country.slug}`}>
                  <Card
                    hover
                    className="p-0 overflow-hidden group h-full flex flex-col border-neutral-100 shadow-sm hover:shadow-premium transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                      <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <ul className="space-y-3 mb-6">
                        {country.facts.map((fact, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-primary-500"
                          >
                            <CheckCircle
                              size={18}
                              className="text-primary-600"
                            />
                            <span className="text-sm font-medium">{fact}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-primary-600 font-bold group-hover:text-primary-700">
                        Explore Program{" "}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section 4: Citizenship Opportunities (Navy Blue) */}
        <Section className="bg-primary-500 text-white">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Citizenship{" "}
                <span className="italic text-accent-400">Opportunities</span>
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Obtain a powerful second passport and enjoy visa-free travel to
                over 150 countries.
              </p>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {citizenshipCountries.map((country, i) => (
                <Link
                  key={i}
                  href={`/citizenship-by-investment/${country.slug}`}
                >
                  <Card
                    hover
                    className="bg-primary-800/30 border-primary-700/50 p-0 overflow-hidden group h-full flex flex-col shadow-sm hover:shadow-premium-hover transition-all"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                      <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                        {country.name}
                      </h3>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <ul className="space-y-3 mb-6">
                        {country.facts.map((fact, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-primary-100"
                          >
                            <CheckCircle
                              size={18}
                              className="text-accent-500"
                            />
                            <span className="text-sm font-medium">{fact}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-accent-400 font-bold group-hover:text-accent-300">
                        Explore Program{" "}
                        <ArrowRight
                          size={18}
                          className="transition-transform group-hover:translate-x-2"
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section 5: Our Process (White) */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500">
                Our Process
              </h2>
              <p className="text-xl text-primary-500 max-w-2xl mx-auto">
                We streamline the residency and citizenship investment process
                by offering a systematic approach with round-the-clock support.
              </p>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>

            {/* Zigzag Timeline */}
            <div className="max-w-5xl mx-auto space-y-16 md:space-y-24 relative">
              {/* Center vertical line (desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-accent-400 to-primary-200 -translate-x-1/2" />

              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? "" : "md:flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div
                      className={`flex-1 group ${isLeft ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`p-8 md:p-10 rounded-3xl border border-primary-500/20 bg-primary-600 shadow-lg hover:shadow-premium-hover transition-all duration-500 ${isLeft ? "md:ml-auto" : "md:mr-auto"} max-w-lg`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-6 ${isLeft ? "md:flex-row-reverse" : ""}`}
                        >
                          <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm shadow-lg flex items-center justify-center text-white shrink-0">
                            <step.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p
                          className={`text-white/90 leading-relaxed text-sm ${isLeft ? "md:text-right" : "md:text-left"}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Step Number */}
                    <div className="relative z-10 shrink-0 order-first md:order-none">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-800 to-primary-900 shadow-xl flex items-center justify-center border-4 border-accent-500">
                        <span className="text-xl font-bold text-accent-500">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Empty spacer for the other side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Section 6: Blog Carousel (Navy Blue) */}
        <Section className="bg-primary-500 text-white overflow-hidden py-24">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Latest Insights</h2>
                <p className="text-primary-100 max-w-xl">
                  Stay updated with the latest trends and changes in the
                  investment migration industry.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-accent-500/30 !text-white hover:bg-accent-500/10"
                asChild
              >
                <Link href="/blog" className="!text-white">
                  View All Articles
                </Link>
              </Button>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-8 snap-x no-scrollbar">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="min-w-[300px] md:min-w-[400px] snap-start group"
                >
                  <Link href={post.link}>
                    <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-primary-200 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-accent-500 font-bold text-sm">
                      Read More <ChevronRight size={16} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section 7: FAQs (White) */}
        <Section className="bg-white">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-500">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-neutral-100 rounded-3xl overflow-hidden bg-neutral-50/50"
                >
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-primary-500 group-hover:text-primary-700 pr-4">
                      {faq.q}
                    </h3>
                    <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-600 transition-transform group-open:rotate-180">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-primary-500 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        {/* Section 8: CTA (Navy Blue) */}
        <Section className="relative py-24 bg-primary-500 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
            }}
          />
          <Container className="relative z-10">
            <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary-800 to-primary-900 p-12 md:p-24 text-center border border-primary-700 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 space-y-12">
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                  Start Your <br />
                  <span className="text-accent-400 italic">Legendary</span>{" "}
                  Journey
                </h2>
                <p className="text-xl text-primary-100 max-w-2xl mx-auto font-light">
                  Join elite investors worldwide and secure your global mobility
                  today. Our advisors are ready to guide you.
                </p>
                <div className="pt-4">
                  <Button
                    size="xl"
                    variant="accent"
                    className="px-12 py-6 text-lg"
                    asChild
                  >
                    <Link href="/contact">Book Your Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
