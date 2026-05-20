import {
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

const requirements = [
  {
    title: "Passport Copy",
    description:
      "A valid copy of your passport is required to verify your identity and nationality as part of the application process.",
    icon: FileCheck,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Police Certificate",
    description:
      "An official document confirming you have no criminal record and meet the programmes requirements.",
    icon: ShieldCheck,
    color: "bg-green-500/10 text-green-400",
  },
  {
    title: "Birth Certificate",
    description:
      "Used to establish your identity, parentage, and eligibility for inclusion in the application.",
    icon: User,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "Marriage Certificate",
    description:
      "Required to verify marital status and include a spouse in the application (where applicable).",
    icon: Heart,
    color: "bg-red-500/10 text-red-400",
  },
  {
    title: "Proof of Address",
    description:
      "A recent utility bill or bank statement confirming your current residential address.",
    icon: Home,
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    title: "Medical Checkup",
    description:
      "A standard health assessment ensuring you and your dependents meet the program's medical requirements.",
    icon: Stethoscope,
    color: "bg-cyan-500/10 text-cyan-400",
  },
];

export function RequirementsSection() {
  return (
    <Section className="bg-primary-500 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-800/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-semibold tracking-wider uppercase">
                  Documentation
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Documents & <br />
                  <span className="text-accent-400">Eligibility</span>{" "}
                  Requirements
                </h2>
                <div className="h-1 w-20 bg-accent-500 rounded-full" />
                <p className="text-primary-100 text-lg leading-relaxed max-w-sm">
                  Documentation is required in order to apply for citizenship by
                  investment programmes. These can vary slightly from programme
                  to programme, but the most important personal documents needed
                  are indicated here.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bento Grid of Requirements */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div className="group relative p-8 rounded-3xl bg-primary-500-800/40 border border-primary-700/50 backdrop-blur-sm hover:border-accent-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/10">
                    <div
                      className={`inline-flex p-3 rounded-2xl ${req.color} mb-6 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <req.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {req.title}
                    </h3>
                    <p className="text-primary-200 text-sm leading-relaxed line-clamp-3">
                      {req.description}
                    </p>

                    {/* Subtle corner accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                      <req.icon size={48} />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
