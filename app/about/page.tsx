"use client";
import { Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10 text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              About <span className="text-accent-400">Passport Legend</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
              Your trusted partner in global citizenship and residence
              opportunities
            </p>
            <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
          </Container>
        </Section>

        {/* Company Story */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white dark:bg-neutral-800">
            <Container>
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                    Our Story
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Passport Legend is a globally trusted firm specializing in
                    residence and citizenship by investment, known for delivering
                    tailored, high-value immigration solutions. Founded in 2019,
                    Passport Legend is the preferred partner for thousands of
                    international investors who rely on our expertise and
                    personalised approach.
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    A UK-owned and managed advisory operating through multiple
                    global offices, we collaborate closely with governments
                    worldwide to provide seamless access to leading residence and
                    citizenship by investment programmes that deliver
                    life-changing opportunities.
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    As an established, government-authorised advisory, our
                    multidisciplinary international team of immigration investment
                    experts supports clients at every stage of the process,
                    ensuring exceptional outcomes.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900 rounded-2xl h-96 flex items-center justify-center">
                  <div className="text-primary-600 dark:text-primary-400">
                    <Globe size={120} strokeWidth={1} />
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Mission & Values */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-neutral-50 dark:bg-neutral-900">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  Our Mission & Values
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    Integrity
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Complete transparency and honesty in all our dealings. We
                    build lasting relationships on trust and ethical practices.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    Excellence
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Committed to delivering the highest standard of service. We
                    continuously improve our processes and expertise.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    Global Perspective
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Deep understanding of international regulations and diverse
                    client needs across cultures and jurisdictions.
                  </p>
                </Card>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Partnerships */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-white dark:bg-neutral-800">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  Partnerships & Collaborations
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                  We work with law firms, immigration consultants, and financial
                  advisors worldwide to provide comprehensive solutions.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    For Law Firms
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    We offer comprehensive referral programs and professional
                    collaboration opportunities. Our certified advisors can
                    support your immigration practice with expert guidance on
                    investment-based residency and citizenship programs.
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    Contact: partners@passportlegend.com
                  </p>
                </Card>
                <Card>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                    For Agents & Consultants
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    Join our network of qualified agents and earn attractive
                    commissions. We provide training, marketing materials, and
                    full operational support.
                  </p>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    Contact: agents@passportlegend.com
                  </p>
                </Card>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Office Locations */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-neutral-50 dark:bg-neutral-900">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  Global Offices
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Visit us at any of our international locations
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                    UK, Harlow
                  </h3>
                  <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <p>
                      <strong>Address:</strong>
                      <br />
                      1st floor
                      <br />
                      North westgate house, Essex
                    </p>

                    <p>
                      <strong>Phone:</strong>
                      <br />
                      +234 708 143 2919
                    </p>
                    <p>
                      <strong>Hours:</strong>
                      <br />
                      Mon-Fri: 9 AM - 6 PM WAT
                    </p>
                  </div>
                </Card>
                <Card>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                    Abuja, Nigeria
                  </h3>
                  <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <p>
                      <strong>Address:</strong>
                      <br />
                      7th floor
                      <br />
                      Churchgate tower, Central Business District,
                    </p>
                    <p>
                      <strong>Phone:</strong>
                      <br />
                      +234 708 143 2919
                    </p>
                    <p>
                      <strong>Hours:</strong>
                      <br />
                      Mon-Fri: 9 AM - 6 PM WAT
                    </p>
                  </div>
                </Card>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Team Stats */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="bg-primary-50 dark:bg-primary-900/20">
            <Container>
              <div className="grid gap-8 text-center md:grid-cols-4">
                <div>
                  <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    50+
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Certified Advisors
                  </p>
                </div>
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
                    Clients Served
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    6
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Continents
                  </p>
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
