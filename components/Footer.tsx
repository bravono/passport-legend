import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 font-bold text-white">
                PL
              </div>
              <span className="font-bold text-neutral-900 dark:text-white">
                Passport Legend
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Your gateway to global citizenship and residence opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/citizenship" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  Citizenship
                </Link>
              </li>
              <li>
                <Link href="/residence" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  Residence
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:hello@passportlegend.com" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  Email Support
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
              Contact
            </h3>
            <address className="not-italic text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
              <p>123 Business Ave</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400 md:flex-row">
          <p>&copy; 2024 Passport Legend. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
