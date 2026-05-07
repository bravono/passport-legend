import Link from 'next/link';
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
  GraduationCap
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { QuickFactsTable } from '@/components/QuickFactsTable';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getCountryBySlug, countries } from '@/lib/data/countries';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return countries
    .filter(c => c.type === 'citizenship' || c.type === 'both')
    .map((country) => ({
      slug: country.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested citizenship page could not be found.',
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

  if (!country || (country.type !== 'citizenship' && country.type !== 'both')) {
    notFound();
  }

  const sections = [
    { id: 'benefits', label: 'Benefits' },
    { id: 'investment', label: 'Investment Options' },
    { id: 'process', label: 'Application Process' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'faq', label: 'FAQ' },
  ];

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
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={14} />
                <Link href="/citizenship" className="hover:text-white transition-colors">Citizenship</Link>
                <ChevronRight size={14} />
                <span className="text-white opacity-60">{country.name}</span>
              </nav>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                {country.name} <br />
                <span className="text-accent-500">Citizenship</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-200 mb-10 leading-relaxed font-light max-w-2xl">
                {country.shortDescription}. Gain global mobility and financial freedom in as little as {country.sections.timeline}.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="xl" className="bg-accent-600 hover:bg-accent-700 text-white border-none px-10 rounded-full shadow-lg shadow-accent-600/20 group">
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 rounded-full backdrop-blur-sm">
                  Download Brochure
                </Button>
                {country.brochureUrl ? (
                  <a href={country.brochureUrl} target="_blank" rel="noopener noreferrer" download>
                    <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 rounded-full backdrop-blur-sm">
                      Download Brochure
                    </Button>
                  </a>
                ) : (
                  <Link href="/contact">
                    <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 rounded-full backdrop-blur-sm">
                      Request Brochure
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </Container>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
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

        {/* Quick Facts Table */}
        <QuickFactsTable country={country} />

        {/* Overview Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section id="overview" className="bg-white dark:bg-neutral-950 py-24 md:py-32">
            <Container>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                    Program Overview
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight">
                    A Gateway to <span className="text-accent-600">New Opportunities</span>
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    <p>{country.sections.overview}</p>
                    {country.sections.about && (
                      <>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-8 mb-4 tracking-tight">About {country.name}</h3>
                        <p>{country.sections.about}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-500/10">
                     <img 
                      src={country.heroImage} 
                      alt={country.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Benefits Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section id="benefits" className="bg-neutral-50 dark:bg-neutral-900 py-24 md:py-32">
            <Container>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                  Key Advantages
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                  Benefits of {country.name} Citizenship
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
                  Secure your future with one of the most powerful and respected passports in the world.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {country.sections.benefits.map((benefit, index) => {
                  const icons = [Globe, ShieldCheck, Users, Coins, MapPin, Check];
                  const Icon = icons[index % icons.length];
                  
                  return (
                    <Card key={index} className="group hover:border-accent-400 transition-all duration-300 p-8 bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700 rounded-3xl overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-50 dark:bg-accent-900/10 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
                      <div className="w-14 h-14 rounded-2xl bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-6 relative z-10">
                        <Icon size={28} />
                      </div>
                      <p className="text-lg text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed relative z-10">
                        {benefit}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Investment Options Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section id="investment" className="bg-white dark:bg-neutral-950 py-24 md:py-32">
            <Container>
               <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                  Investment Routes
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                  Flexible Investment Options
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
                  Choose the investment pathway that best aligns with your financial goals and family needs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {country.sections.investmentOptions.map((option, index) => {
                  const icons = [Coins, Building2, GraduationCap];
                  const Icon = icons[index % icons.length];
                  
                  return (
                    <div key={index} className="flex flex-col h-full bg-neutral-50 dark:bg-neutral-900 rounded-[2.5rem] p-10 border border-neutral-100 dark:border-neutral-800 hover:shadow-2xl hover:shadow-accent-500/5 transition-all duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center text-accent-600 dark:text-accent-400 mb-8">
                        <Icon size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                        {option.title}
                      </h3>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider mb-2">Starting From</div>
                      <div className="text-4xl font-black text-accent-600 dark:text-accent-400 mb-6">
                        {option.amount}
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                        {option.description}
                      </p>
                      <Button variant="outline" className="w-full rounded-full py-6 border-accent-200 dark:border-accent-900/50 hover:bg-accent-600 hover:text-white hover:border-accent-600 transition-all duration-300">
                        Learn More
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* Process Section */}
        {country.sections.process && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section id="process" className="bg-neutral-50 dark:bg-neutral-900 py-24 md:py-32">
              <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                    Step-by-Step
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                    The Application Process
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light">
                    A transparent and streamlined journey toward your second citizenship.
                  </p>
                </div>
                
                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent-100 dark:bg-accent-900/30 -translate-x-1/2" />
                  
                  <div className="space-y-12">
                    {country.sections.process.map((step, index) => (
                      <div key={index} className={`relative flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className="hidden md:block w-1/2" />
                        
                        <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white dark:bg-neutral-800 border-4 border-accent-50 dark:border-accent-900/30 flex items-center justify-center z-10">
                          <span className="text-xl font-bold text-accent-600 dark:text-accent-400">{index + 1}</span>
                        </div>
                        
                        <div className="w-full md:w-1/2 pl-24 md:pl-0">
                          <div className={`p-8 bg-white dark:bg-neutral-800 rounded-3xl shadow-lg shadow-neutral-500/5 border border-neutral-100 dark:border-neutral-700 hover:border-accent-400/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                              {step.title}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                              {step.description}
                            </p>
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

        {/* Eligibility Section */}
        {country.sections.eligibility && (
          <ScrollReveal direction="up" delay={0.2}>
            <Section id="eligibility" className="bg-white dark:bg-neutral-950 py-24 md:py-32">
              <Container>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4 pt-12">
                        <div className="aspect-square bg-accent-600 rounded-3xl flex items-center justify-center p-8 text-white">
                          <ShieldCheck size={80} strokeWidth={1} className="opacity-40" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                             <div className="text-4xl font-bold mb-1">100%</div>
                             <div className="text-[10px] uppercase tracking-widest font-bold">Confidential</div>
                          </div>
                        </div>
                        <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1573164067005-44621acc872c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-3xl flex items-center justify-center p-8">
                          <FileText size={80} strokeWidth={1} className="text-accent-600/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                      Requirements
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight">
                      Eligibility <span className="text-accent-600">Criteria</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 font-light">
                      To qualify for the {country.name} Citizenship by Investment Program, applicants must meet the following core requirements:
                    </p>
                    
                    <div className="space-y-4">
                      {country.sections.eligibility.map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors mt-1">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <p className="text-neutral-700 dark:text-neutral-300 font-medium">{item}</p>
                        </div>
                      ))}
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
            <Section id="faq" className="bg-neutral-50 dark:bg-neutral-900 py-24 md:py-32">
              <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <div className="inline-block px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                    Common Questions
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>
                
                <div className="max-w-4xl mx-auto grid gap-6">
                  {country.sections.faqs.map((faq, index) => (
                    <details key={index} className="group bg-white dark:bg-neutral-800 rounded-3xl border border-neutral-100 dark:border-neutral-700 overflow-hidden shadow-sm">
                      <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white pr-8">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 group-open:bg-accent-600 group-open:text-white transition-all duration-300">
                          <ChevronRight className="group-open:rotate-90 transition-transform duration-300" size={20} />
                        </div>
                      </summary>
                      <div className="px-8 pb-8">
                        <div className="h-[1px] w-full bg-neutral-100 dark:bg-neutral-700 mb-6" />
                        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </Container>
            </Section>
          </ScrollReveal>
        )}

        {/* Final CTA Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <Section className="relative overflow-hidden py-32">
            <div className="absolute inset-0 bg-primary-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-accent-600),transparent_50%)] opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <Container className="relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-10">
                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                  Ready to become a <br />
                  <span className="text-accent-400">Global Citizen?</span>
                </h2>
                <p className="text-xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
                  Our experts are ready to guide you through every step of the {country.name} Citizenship by Investment process. Schedule your private consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                 <Button size="lg" variant="primary" asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/citizenship">Explore Programs</Link>
                  </Button>
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
