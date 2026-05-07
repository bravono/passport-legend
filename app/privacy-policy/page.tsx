import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Metadata } from "next";
import { Shield, Eye, Lock, FileText, Mail, ChevronRight, Scale, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Passport Legend",
  description: "Learn how Passport Legend protects your privacy and handles your personal information with the highest standards of security.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 7, 2026";

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 md:pt-32">
        {/* Decorative background elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <Shield className="w-3.5 h-3.5" />
              Privacy & Security
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
              Privacy <span className="text-accent-600 italic">Policy</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 animate-fade-in delay-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdated}
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span>Passport Legend HQ</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="glass p-8 md:p-10 rounded-3xl mb-16 border-primary-100/20 animate-fade-in-up">
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "At Passport Legend, we believe that your privacy is not just a policy—it is a fundamental right. We are committed to safeguarding your personal data with the same dedication we bring to securing your global future."
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              {/* Section 1: Data Controller */}
              <section className="group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 dark:text-white mb-4">
                      1. Owner and Data Controller
                    </h2>
                    <div className="text-neutral-600 dark:text-neutral-400 space-y-3">
                      <p>
                        Passport Legend is the primary data controller responsible for your personal information. We operate with full transparency and compliance with international data protection standards.
                      </p>
                      <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
                        <p className="font-bold text-neutral-900 dark:text-white">Passport Legend</p>
                        <p>1st floor, North westgate house</p>
                        <p>Harlow, Essex, United Kingdom</p>
                        <p className="mt-4 flex items-center gap-2">
                          <span className="font-medium text-neutral-900 dark:text-white">Contact Email:</span>
                          <a href="mailto:hello@passportlegend.com" className="text-accent-600 hover:underline">
                            hello@passportlegend.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Data Collection */}
              <section className="group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent-600 text-white flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 dark:text-white mb-4">
                      2. Information We Collect
                    </h2>
                    <div className="text-neutral-600 dark:text-neutral-400 space-y-4">
                      <p>
                        We collect information to provide better services to all our users. This collection happens in two ways:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                          <h3 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                            <Lock className="w-4 h-4 text-accent-600" />
                            Directly Provided
                          </h3>
                          <p className="text-sm">Information you give us, such as your name, email address, and phone number when you inquire about our services.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                          <h3 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-accent-600" />
                            Automatically Collected
                          </h3>
                          <p className="text-sm">Usage data, IP addresses, and information collected through trackers and cookies to improve site performance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Usage & Legal Basis */}
              <section className="group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 dark:text-white mb-4">
                      3. Why We Process Your Data
                    </h2>
                    <div className="text-neutral-600 dark:text-neutral-400 space-y-4">
                      <p>
                        We only process your personal data when we have a legal basis to do so. These include:
                      </p>
                      <ul className="space-y-3">
                        {[
                          "When you have given your explicit consent.",
                          "To fulfill our contractual obligations with you.",
                          "To comply with legal and regulatory requirements.",
                          "For our legitimate business interests, such as improving our services."
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-accent-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Your Rights */}
              <section className="group">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-700 text-white flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 dark:text-white mb-4">
                      4. Your Privacy Rights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Right to Access", desc: "You can request a copy of the personal data we hold about you." },
                        { title: "Right to Erasure", desc: "You can request that we delete your personal information." },
                        { title: "Right to Correct", desc: "You can ask us to update or correct inaccurate data." },
                        { title: "Right to Object", desc: "You have the right to object to our processing of your data." }
                      ].map((right, i) => (
                        <div key={i} className="p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-accent-500/50 transition-colors">
                          <h4 className="font-bold text-neutral-900 dark:text-white mb-1">{right.title}</h4>
                          <p className="text-sm">{right.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Contact */}
              <section className="mt-20">
                <div className="relative overflow-hidden rounded-[2rem] bg-primary-600 p-8 md:p-12 text-white">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/20 rounded-full -ml-24 -mb-24 blur-2xl" />
                  
                  <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <Mail className="w-12 h-12 mx-auto mb-6 text-accent-400" />
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Questions about your privacy?</h2>
                    <p className="text-primary-100 mb-8 text-lg">
                      Our privacy team is dedicated to ensuring your data remains secure. If you have any questions or wish to exercise your rights, please reach out.
                    </p>
                    <a 
                      href="mailto:hello@passportlegend.com"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-600 text-neutral-900 font-bold hover:bg-accent-500 transition-all duration-300 shadow-xl hover:shadow-accent-500/20 active:scale-95"
                    >
                      Contact Our Privacy Officer
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}