import { Country } from '@/lib/data/countries';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

interface QuickFactsTableProps {
  country: Country;
}

export function QuickFactsTable({ country }: QuickFactsTableProps) {
  // Use explicit quickFacts if provided, otherwise derive some defaults
  const quickFacts = country.sections.quickFacts || [
    {
      value: country.sections.investmentOptions?.[0]?.amount || 'Varies',
      label: 'Minimum Investment',
      description: country.sections.investmentOptions?.[0]?.title || 'Investment Route',
    },
    {
      value: country.sections.timeline || 'Varies',
      label: country.type === 'citizenship' ? 'Time to Citizenship' : 'Time to Residency',
    },
    {
      value: country.type === 'citizenship' ? 'Full Citizenship' : 'Permanent Residency',
      label: 'Program Type',
      description: 'Status granted upon approval',
    },
    {
      value: country.type === 'citizenship' ? 'Visa-Free Travel' : 'Schengen Access',
      label: 'Global Mobility',
      description: country.type === 'citizenship' ? 'To 140+ countries worldwide' : 'Travel freely within the Schengen zone',
    },
    {
      value: 'Family Inclusion',
      label: 'For Family',
      description: 'Include spouse and dependent children',
    },
    {
      value: 'Favorable Tax Regime',
      label: 'Tax Benefits',
      description: 'Attractive tax incentives for residents',
    }
  ];

  return (
    <Section id="quick-facts" className="bg-white dark:bg-neutral-950 py-16 border-y border-neutral-100 dark:border-neutral-800">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="flex flex-col border-l-2 border-accent-500 pl-6 py-1">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2 font-serif">
                {fact.value}
              </h3>
              <div className="text-sm font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2">
                {fact.label}
              </div>
              {fact.description && (
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  {fact.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
