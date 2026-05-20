import {
  Globe,
  GraduationCap,
  Palmtree,
  TrendingUp,
  Users,
  Milestone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const benefitItems = [
  {
    id: "01",
    category: "Global Access",
    title: "Global Mobility",
    description:
      "Enjoy greater travel freedom with visa-free or visa-on-arrival access to key destinations worldwide.",
    icon: Globe,
  },
  {
    id: "02",
    category: "Social Security",
    title: "Education & Healthcare",
    description:
      "Secure access to world-class education and healthcare systems for you and your family.",
    icon: GraduationCap,
  },
  {
    id: "03",
    category: "Future Security",
    title: "Retirement Planning",
    description:
      "Build a comfortable and secure retirement in a stable and welcoming environment.",
    icon: Palmtree,
  },
  {
    id: "04",
    category: "Financial Growth",
    title: "Diversification of Assets",
    description:
      "Broaden your investment portfolio through real estate or business opportunities abroad.",
    icon: TrendingUp,
  },
  {
    id: "05",
    category: "Family Protection",
    title: "Plan B for the Family",
    description:
      "Safeguard your family's future with an alternative residence option in times of uncertainty.",
    icon: Users,
  },
  {
    id: "06",
    category: "Future Status",
    title: "Pathway to Citizenship",
    description:
      "Gain the opportunity to transition from residency to full citizenship over time.",
    icon: Milestone,
  },
];

export function ResidenceBenefitsSection() {
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
                    Resident Advantages
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
                    Benefits of <br />
                    <span className="text-accent-500">Residence</span> by
                    Investment
                  </h2>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Investing in a second residency can offer various benefits,
                    including better global mobility, access to Education and
                    Healthcare, Retirement Planning, a pathway to citizenship
                    and a Plan B for the family.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-white">
                        <Sparkles size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary-900">
                          Value Proposition
                        </p>
                        <p className="text-xs text-neutral-500">
                          6 Strategic Benefits
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scrolling Benefit Items */}
          <div className="lg:w-2/3 space-y-6">
            {benefitItems.map((item, index) => (
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
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-primary-900 hover:bg-primary-500 hover:text-white transition-all cursor-pointer">
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
