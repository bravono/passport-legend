import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { getCountryBySlug, countries } from '@/lib/data/countries';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested country page could not be found.',
    };
  }

  return {
    title: `${country.name} - Citizenship & Residency by Investment | Passport Legend`,
    description: country.shortDescription,
  };
}

export default function CountryPage({ params }: Props) {
  const country = getCountryBySlug(params.slug);

  if (!country) {
    notFound();
  }

  const breadcrumbType = country.type === 'citizenship' ? 'Citizenship' : country.type === 'residence' ? 'Residence' : 'Programs';
  const breadcrumbHref = country.type === 'citizenship' ? '/citizenship' : country.type === 'residence' ? '/residence' : '/';

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="relative bg-neutral-900 h-96 flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url('${country.heroImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />

          <Container className="relative z-10">
            <div className="mb-8">
              <nav className="text-sm text-neutral-300 mb-4 flex gap-2">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href={breadcrumbHref} className="hover:text-white">
                  {breadcrumbType}
                </Link>
                <span>/</span>
                <span className="text-white font-semibold">{country.name}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {country.name}
              </h1>
              <p className="text-xl text-neutral-200 max-w-2xl">
                {country.shortDescription}
              </p>
            </div>
          </Container>
        </Section>

        {/* Overview Section */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              Overview
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              {country.sections.overview}
            </p>
          </Container>
        </Section>

        {/* Key Benefits Section */}
        <Section className="bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Key Benefits
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {country.sections.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">{benefit}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Investment Options Section */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Investment Options
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {country.sections.investmentOptions.map((option, index) => (
                <Card key={index}>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {option.amount}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">{option.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Requirements Section */}
        <Section className="bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Requirements
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {country.sections.requirements.map((requirement, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <p className="text-neutral-600 dark:text-neutral-400">{requirement}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Timeline Section */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Timeline
              </h2>
              <Card className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  <strong>Expected Duration:</strong> {country.sections.timeline}
                </p>
              </Card>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-sm">
                Timeline may vary based on individual circumstances, completeness of documentation,
                and government processing times.
              </p>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white">
          <Container>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Explore {country.name}?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Schedule a personalized consultation with our experts to learn how this program can work for you.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Book Your Consultation</Link>
              </Button>
            </div>
          </Container>
        </Section>

        {/* Related Countries */}
        <Section className="bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              Similar Programs
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {countries
                .filter(
                  (c) =>
                    c.type === country.type &&
                    c.id !== country.id
                )
                .slice(0, 3)
                .map((relatedCountry) => (
                  <Link
                    key={relatedCountry.id}
                    href={`/countries/${relatedCountry.slug}`}
                  >
                    <Card className="h-full">
                      <div className="mb-4 text-4xl">🌍</div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                        {relatedCountry.name}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        {relatedCountry.shortDescription}
                      </p>
                      <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        Learn More →
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
