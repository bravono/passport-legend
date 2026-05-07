import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Metadata } from "next";
import { Scale, CheckCircle2, AlertCircle, Globe, ShieldCheck, Gavel, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Passport Legend",
  description: "Read our terms of service to understand your rights and responsibilities when using Passport Legend's global citizenship and residency services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "May 7, 2026";

  const sections = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "1. Acceptance of Terms",
      content: "By accessing or using the Passport Legend website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      color: "bg-primary-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "2. Description of Services",
      content: "Passport Legend provides information, advisory services, and consultation regarding global citizenship and residence by investment programs. Our services are designed to assist clients in navigating complex international migration paths.",
      color: "bg-accent-600"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "3. User Responsibilities",
      content: "Users are responsible for providing accurate and complete information during consultations. Any misuse of our platform, including the submission of fraudulent documents or unauthorized access to our systems, is strictly prohibited.",
      color: "bg-neutral-900"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "4. Professional Disclaimer",
      content: "While we strive for accuracy, the information on this website is for general informational purposes only and does not constitute legal, financial, or tax advice. We recommend consulting with qualified professionals for specific legal or financial decisions.",
      color: "bg-primary-700"
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "5. Intellectual Property",
      content: "All content, logos, designs, and materials on this website are the intellectual property of Passport Legend. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited without prior written consent.",
      color: "bg-accent-700"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "6. Limitation of Liability",
      content: "Passport Legend shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services. Our total liability is limited to the extent permitted by law.",
      color: "bg-neutral-800"
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "7. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.",
      color: "bg-primary-900"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-950">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 md:pt-32">
        {/* Background Decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px]" />
        </div>

        <Container>
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 dark:bg-accent-900/30 border border-accent-100 dark:border-accent-800 text-accent-700 dark:text-accent-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
              <Scale className="w-3.5 h-3.5" />
              Legal Framework
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
              Terms of <span className="text-primary-600 italic">Service</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 animate-fade-in delay-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Last updated: {lastUpdated}
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span>United Kingdom Jurisdiction</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Intro Card */}
            <div className="glass p-8 md:p-10 rounded-3xl mb-16 border-accent-100/20 animate-fade-in-up">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                "Welcome to Passport Legend. These terms govern your relationship with our platform. By using our services, you entrust us with your global journey, and we commit to providing excellence and transparency in return."
              </p>
            </div>

            {/* Terms Items */}
            <div className="space-y-8 mb-20">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800 hover:border-accent-500/30 transition-all duration-500 animate-fade-in-up overflow-hidden" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${section.color} text-white flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {section.icon}
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-serif text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                        {section.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Footer Card */}
            <section className="relative overflow-hidden rounded-[2rem] bg-neutral-900 p-8 md:p-12 text-white">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/20 rounded-full -mr-40 -mt-40 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600/10 rounded-full -ml-32 -mb-32 blur-2xl" />
              
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <Mail className="w-12 h-12 mx-auto mb-6 text-accent-500" />
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Legal Inquiries</h2>
                <p className="text-neutral-400 mb-8 text-lg">
                  If you have any questions regarding these Terms of Service or our legal practices, please reach out to our legal department.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="mailto:hello@passportlegend.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-600 text-neutral-900 font-bold hover:bg-accent-500 transition-all duration-300 shadow-xl shadow-accent-600/20 active:scale-95"
                  >
                    Email Legal Team
                  </a>
                  <a 
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-neutral-900 font-bold hover:bg-neutral-100 transition-all duration-300 active:scale-95"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
