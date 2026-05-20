import {
  ClipboardCheck,
  ArrowRight,
  FileCheck,
  ShieldCheck,
  User,
  Heart,
  Home,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const checklistItems = [
  {
    id: "01",
    title: "Identity Verification",
    item: "Passport Copy",
    description:
      "A valid copy of your passport is required to verify your identity and nationality as part of the application process.",
    icon: FileCheck,
  },
  {
    id: "02",
    title: "Character & Conduct",
    item: "Police Certificate",
    description:
      "An official document confirming you have no criminal record and meet the programmes requirements.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Legal Identity",
    item: "Birth Certificate",
    description:
      "Used to establish your identity, parentage, and eligibility for inclusion in the application.",
    icon: User,
  },
  {
    id: "04",
    title: "Marital Status",
    item: "Marriage Certificate",
    description:
      "Required to verify marital status and include a spouse in the application (where applicable).",
    icon: Heart,
  },
  {
    id: "05",
    title: "Residential Confirmation",
    item: "Proof of Address",
    description:
      "A recent utility bill or bank statement confirming your current residential address.",
    icon: Home,
  },
  {
    id: "06",
    title: "Health Standards",
    item: "Medical Checkup",
    description:
      "A standard health assessment ensuring you and your dependents meet the program's medical requirements.",
    icon: Stethoscope,
  },
];

export function EligibilitySection() {
  return (
    <Section className="bg-white py-24 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky Left Content */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 space-y-8">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-wider text-sm">
                    <span className="w-8 h-px bg-primary-500-600" />
                    Eligibility Roadmap
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight">
                    Document <br />
                    <span className="text-accent-500">Readiness</span> Checklist
                  </h2>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Preparing your application requires precise documentation.
                    We guide you through every step of collecting these
                    essential personal documents to ensure a seamless process.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-white">
                        <ClipboardCheck size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-500">
                          Total Required
                        </p>
                        <p className="text-xs text-neutral-500">
                          6 Core Document Sets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scrolling Checklist Items */}
          <div className="lg:w-2/3 space-y-6">
            {checklistItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.1} direction="up">
                <div className="group relative bg-white border border-neutral-200 rounded-[2rem] p-8 hover:border-primary-900 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-900/5">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* ID & Icon */}
                    <div className="flex items-center gap-6">
                      <span className="text-4xl font-black text-neutral-100 group-hover:text-primary-100 transition-colors duration-500">
                        {item.id}
                      </span>
                      <div className="w-16 h-16 rounded-2xl bg-primary-500-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                        <item.icon size={32} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-accent-600 uppercase tracking-widest">
                          {item.title}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-500">
                        {item.item}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all cursor-pointer">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
