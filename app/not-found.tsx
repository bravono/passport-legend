import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Section className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-900 dark:to-primary-900">
          <Container>
            <div className="text-center space-y-6">
              <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                404
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                Page Not Found
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button size="lg" variant="primary" asChild>
                  <Link href="/">Go Home</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/citizenship">Browse Programs</Link>
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
