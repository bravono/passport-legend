import Link from "next/link";
import * as LucideIcons from "lucide-react";
import {
  Check,
  Globe,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Clock,
  Coins,
  FileText,
  Users,
  HelpCircle,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { OverviewSection } from "@/components/OverviewSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountryImage } from "@/components/CountryImage";
import { getCountryBySlug, countries } from "@/lib/data/countries-citizenship";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return countries
    .filter((c) => c.type === "citizenship" || c.type === "both")
    .map((country) => ({
      slug: country.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Country Not Found",
      description: "The requested citizenship page could not be found.",
    };
  }

  return {
    title: `${country.name} Citizenship by Investment | Passport Legend`,
    description: `Learn about ${country.name} citizenship by investment program. Benefits, requirements, process, and investment options.`,
  };
}

export default async function CitizenshipByInvestmentPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country || (country.type !== "citizenship" && country.type !== "both")) {
    notFound();
  }

  const sections = [
    {
      id: "country-info",
      label: "Country Info",
      show: !!country.sections.about,
    },
    {
      id: "benefits",
      label: "Benefits",
      show: country.sections.benefits.length > 0,
    },
    {
      id: "requirements",
      label: "Requirement",
      show: !!country.sections.requirements,
    },
    {
      id: "process",
      label: "Process",
      show: !!(country.sections.process || country.sections.appProcess),
    },
    {
      id: "legal-basis",
      label: "Legal Basis",
      show: !!country.sections.legalBasis,
    },
    { id: "faq", label: "FAQ", show: !!country.sections.faqs },
    { id: "overview", label: "Overview", show: !!country.sections.overview },
  ].filter((s) => s.show);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{
              backgroundImage: `url('${country.heroImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/70 to-transparent" />

          <Container className="relative z-10">
            <div className="max-w-3xl animate-fade-in-up">
              <nav className="flex items-center gap-2 text-sm font-medium text-accent-400 mb-8 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={14} />
                <Link
                  href="/citizenship"
                  className="hover:text-white transition-colors"
                >
                  Citizenship
                </Link>
                <ChevronRight size={14} />
                <span className="text-white opacity-60">{country.name}</span>
              </nav>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                {country.name} <br />
                <span className="text-accent-500">Citizenship</span>
              </h1>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="xl"
                    className="bg-accent-600 hover:bg-accent-700 text-white border-none px-10 rounded-full shadow-lg shadow-accent-600/20 group"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {country.brochureUrl ? (
                  <a
                    href={country.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button
                      size="xl"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-10 rounded-full backdrop-blur-sm"
                    >
                      Download Brochure
                    </Button>
                  </a>
                ) : (
                  <Link href="/contact">
                    <Button
                      size="xl"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 px-10 rounded-full backdrop-blur-sm"
                    >
                      Request Brochure
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </Container>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* Sticky Sub-Nav */}
        <div className="sticky top-[72px] z-40 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 hidden md:block">
          <Container>
            <nav className="flex justify-center gap-10">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="py-5 text-sm font-semibold text-neutral-500 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400 transition-colors relative group"
                >
                  {section.label}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>
          </Container>
        </div>

        {/* Country Info Section */}
        {country.sections.about && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section
              id="country-info"
              className="bg-white dark:bg-neutral-950 py-24 md:py-32 scroll-mt-24"
            >
              <Container>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                      Country Info
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight">
                      About{" "}
                      <span className="text-accent-600">{country.name}</span>
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                      <p>{country.sections.about}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <CountryImage src={country.heroImage} alt={country.name} />
                  </div>
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}

        {/* Important Details Section */}
        {country.sections.importantDetails && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-primary-500 dark:bg-primary-500-950 py-16">
              <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {country.sections.importantDetails.map((detail, index) => {
                    const Icon = (LucideIcons as any)[detail.icon] || Globe;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center space-y-4 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                          <Icon size={24} />
                        </div>
                        <div className="space-y-1">
                          <div className="text-3xl font-bold text-white tracking-tight">
                            {detail.title}
                          </div>
                          <div className="text-sm text-primary-200/60 uppercase tracking-widest font-medium">
                            {detail.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </div>
          </ScrollReveal>
        )}

        {/* Benefits Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section
            id="benefits"
            className="bg-white dark:bg-neutral-950 py-24 md:py-32 scroll-mt-24"
          >
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                  Key Advantages
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                  Benefits of {country.name} Citizenship
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
                  Secure your future with one of the most powerful and respected
                  passports in the world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {country.sections.benefits.map((benefit, index) => {
                  const Icon =
                    (LucideIcons as any)[benefit.icon] || LucideIcons.Check;

                  return (
                    <Card
                      key={index}
                      className="group hover:border-accent-400 transition-all duration-300 p-8 bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700 rounded-3xl overflow-hidden relative"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50 dark:bg-accent-900/10 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
                      <div className="w-14 h-14 rounded-2xl bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-6 relative z-10">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 relative z-10">
                        {benefit.title}
                      </h3>
                      {benefit.subTitle && (
                        <p className="text-neutral-600 dark:text-neutral-400 font-light mb-4 relative z-10">
                          {benefit.subTitle}
                        </p>
                      )}
                      {benefit.items && benefit.items.length > 0 && (
                        <ul className="space-y-2 relative z-10">
                          {benefit.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                            >
                              <Check
                                size={14}
                                className="mt-1 text-accent-600 flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  );
                })}
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Process Section */}
        {(country.sections.process || country.sections.appProcess) && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section
              id="process"
              className="bg-primary-500 text-white py-24 md:py-32 scroll-mt-24"
            >
              <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <div className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase border border-accent-500/20">
                    Step-by-Step
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {country.sections.appProcess?.title || "The Process"}
                  </h2>
                  <p className="text-lg text-primary-100 font-light">
                    {country.sections.appProcess?.description ||
                      "A transparent and streamlined journey toward your second citizenship."}
                  </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

                  <div className="space-y-12">
                    {(
                      country.sections.process ||
                      (country.sections.appProcess?.process as any[])
                    ).map((step: any, index: number) => (
                      <div
                        key={index}
                        className={`relative flex items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        <div className="hidden md:block w-1/2" />

                        <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary-500-800 border-4 border-primary-700 flex items-center justify-center z-10 shadow-xl">
                          <span className="text-xl font-bold text-accent-400">
                            {index + 1}
                          </span>
                        </div>

                        <div className="w-full md:w-1/2 pl-24 md:pl-0">
                          <div
                            className={`p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-accent-500/30 transition-all ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                          >
                            <h3 className="text-xl font-bold text-white mb-3">
                              {step.title || step.item}
                            </h3>
                            <div className="text-primary-100 font-light leading-relaxed">
                              {step.description || (
                                <ul
                                  className={`space-y-2 flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}
                                >
                                  {step.list?.map((li: string, i: number) => (
                                    <li key={i} className="flex gap-2">
                                      <span className="text-accent-500 mt-1.5">
                                        •
                                      </span>
                                      <span>{li}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}

        {/* Requirements & Investment Options Section */}
        {country.sections.requirements && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section
              id="requirements"
              className="bg-white dark:bg-neutral-950 py-24 md:py-32 scroll-mt-24"
            >
              <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* Left Column: Investment Requirements */}
                  {!Array.isArray(country.sections.requirements) && (
                    <div className="space-y-12">
                      <div>
                        <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                          Eligibility
                        </div>
                        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                          {country.sections.requirements.investmentRequirements
                            ?.title || "Program Requirements"}
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                          {
                            country.sections.requirements.investmentRequirements
                              ?.description
                          }
                        </p>
                      </div>

                      <div className="space-y-4">
                        {country.sections.requirements.investmentRequirements?.items?.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex gap-4 p-5 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800 group hover:border-accent-600/30 transition-all duration-300"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors mt-0.5">
                                <Check size={14} strokeWidth={3} />
                              </div>
                              <p className="text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                                {item}
                              </p>
                            </div>
                          ),
                        )}
                      </div>

                      {country.sections.requirements.investmentRequirements
                        ?.note && (
                        <div className="p-6 bg-accent-50/50 dark:bg-accent-900/10 rounded-2xl border border-accent-100/50 dark:border-accent-900/20">
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                            <span className="font-bold text-accent-700 dark:text-accent-400 not-italic mr-1">
                              Note:
                            </span>
                            {
                              country.sections.requirements
                                .investmentRequirements.note
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Right Column: Investment Options */}
                  {!Array.isArray(country.sections.requirements) &&
                    country.sections.requirements.investmentOptions && (
                      <div className="space-y-12">
                        <div>
                          <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                            Investment Routes
                          </div>
                          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                            {
                              country.sections.requirements.investmentOptions
                                .title
                            }
                          </h2>
                          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                            {
                              country.sections.requirements.investmentOptions
                                .description
                            }
                          </p>
                        </div>

                        <div className="space-y-6">
                          {country.sections.requirements.investmentOptions.items.map(
                            (option, index) => (
                              <div
                                key={index}
                                className="p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-xl shadow-neutral-200/20 dark:shadow-none border border-neutral-100 dark:border-neutral-700 hover:shadow-2xl hover:shadow-accent-600/5 transition-all duration-500 group"
                              >
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-accent-600 transition-colors">
                                  {option.title}
                                </h3>
                                <ul className="space-y-3">
                                  {option.list.map((listItem, i) => (
                                    <li
                                      key={i}
                                      className="flex gap-3 text-neutral-600 dark:text-neutral-400 font-light"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                                      <span>{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>

                        {country.sections.requirements.investmentOptions
                          .note && (
                          <p className="text-sm text-neutral-500 italic">
                            {
                              country.sections.requirements.investmentOptions
                                .note
                            }
                          </p>
                        )}
                      </div>
                    )}

                  {/* Fallback for legacy array requirements */}
                  {Array.isArray(country.sections.requirements) && (
                    <div className="col-span-full max-w-3xl mx-auto w-full">
                      <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                        Requirement
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-12 tracking-tight text-center">
                        Eligibility{" "}
                        <span className="text-accent-600">Criteria</span>
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {country.sections.requirements.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 p-5 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800 group hover:border-accent-600/30 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors mt-0.5">
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <p className="text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}

        {/* Legal Basis Section */}
        {country.sections.legalBasis && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section
              id="legal-basis"
              className="bg-primary-500 text-white py-24 md:py-32 scroll-mt-24"
            >
              <Container>
                <div className="max-w-4xl mx-auto">
                  <div className="inline-block px-4 py-1.5 bg-accent-500/10 text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase border border-accent-500/20">
                    Legal Framework
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    {country.sections.legalBasis.title}
                  </h2>
                  <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <div className="space-y-8">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 text-accent-400 flex items-center justify-center flex-shrink-0">
                          <ShieldCheck size={32} />
                        </div>
                        <div className="prose prose-lg prose-invert max-w-none text-primary-100 leading-relaxed font-light">
                          <p>{country.sections.legalBasis.description}</p>
                        </div>
                      </div>

                      <div className="grid gap-4 md:pl-24">
                        {country.sections.legalBasis.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                            <p className="text-primary-100 font-light">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {country.sections.legalBasis.note && (
                        <div className="mt-8 p-6 bg-primary-500-800/50 rounded-2xl border border-white/10 italic text-sm text-primary-200">
                          Note: {country.sections.legalBasis.note}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}

        {/* FAQ Section */}
        {country.sections.faqs && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section
              id="faq"
              className="bg-white dark:bg-neutral-950 py-24 md:py-32 scroll-mt-24"
            >
              <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                    Common Questions
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                    {country.sections.faqs.title}
                  </h2>
                </div>

                <div className="max-w-4xl mx-auto grid gap-6">
                  {country.sections.faqs.qAndA.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-100 dark:border-neutral-700 overflow-hidden shadow-sm"
                    >
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white pr-8">
                          {faq.q}
                        </h3>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 group-open:bg-accent-600 group-open:text-white transition-all duration-300">
                          <ChevronRight
                            className="group-open:rotate-90 transition-transform duration-300"
                            size={20}
                          />
                        </div>
                      </summary>
                      <div className="px-8 pb-8">
                        <div className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-700 mb-6" />
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light">
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}
        {/* Overview Section */}
        {country.sections.overview && (
          <OverviewSection
            title={country.sections.overview.title}
            items={country.sections.overview.items}
            countryName={country.name}
            theme="dark"
          />
        )}

        {/* Final CTA Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative overflow-hidden py-32 bg-white">
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-500),transparent_50%)] opacity-5" />

            <Container className="relative z-10">
              <div className="max-w-5xl mx-auto rounded-[4rem] bg-gradient-to-br from-primary-800 to-primary-900 p-12 md:p-24 text-center border border-primary-700 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 space-y-10">
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                    Ready to become a <br />
                    <span className="text-accent-400">Global Citizen?</span>
                  </h2>
                  <p className="text-xl text-primary-100 font-light max-w-2xl mx-auto leading-relaxed">
                    Our experts are ready to guide you through every step of the{" "}
                    {country.name} Citizenship by Investment process. Schedule
                    your private consultation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                    <Button
                      size="xl"
                      variant="accent"
                      className="px-12 py-6 text-lg"
                      asChild
                    >
                      <Link href="/contact">Book a Consultation</Link>
                    </Button>
                    <Button
                      size="xl"
                      variant="outline"
                      className="px-12 py-6 text-lg border-white/30 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link href="/citizenship">Explore Programs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
