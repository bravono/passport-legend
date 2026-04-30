'use client';

import { useState, FormEvent } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { getCountriesByType } from '@/lib/data/countries';

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const countries = getCountriesByType('both');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Phone is required');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Store to localStorage
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      message: '',
    });
    setSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-neutral-900 dark:to-primary-900">
          <Container>
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                Get in Touch
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Schedule your free consultation with our expert advisors
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section className="bg-white dark:bg-neutral-800">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Contact Form
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 font-semibold">
                      ✓ Thank you! Your message has been received. We'll contact you soon.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 font-semibold">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Country of Interest
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">-- Select a country --</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your citizenship or residency goals..."
                      rows={5}
                      className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <Button type="submit" size="lg" fullWidth variant="primary">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a href="mailto:hello@passportlegend.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                      hello@passportlegend.com
                    </a>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                      We respond to all inquiries within 24 hours
                    </p>
                  </Card>

                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <a href="tel:+12125550123" className="text-primary-600 dark:text-primary-400 hover:underline">
                      +1 (212) 555-0123
                    </a>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                      Available Mon-Fri, 9 AM - 6 PM EST
                    </p>
                  </Card>

                  <Card>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                      Office Addresses
                    </h3>
                    <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <div>
                        <p className="font-semibold text-neutral-900 dark:text-white">New York, USA</p>
                        <p>123 Business Avenue</p>
                        <p>New York, NY 10001</p>
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 dark:text-white">London, UK</p>
                        <p>456 Mayfair Plaza</p>
                        <p>London, W1A 2BX</p>
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 dark:text-white">Singapore</p>
                        <p>789 Central Avenue</p>
                        <p>Singapore 188555</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  q: 'How long does the consultation take?',
                  a: 'Initial consultations typically last 30-45 minutes. We tailor the discussion to your specific needs.',
                },
                {
                  q: 'What information do I need to provide?',
                  a: 'Basic information about your background, financial situation, and immigration goals. Detailed due diligence comes later.',
                },
                {
                  q: 'Is the consultation free?',
                  a: 'Yes, our initial consultation is completely free and without obligation.',
                },
                {
                  q: 'Do you guarantee approval?',
                  a: 'We cannot guarantee approval, but our 98% success rate reflects our expertise and due diligence.',
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{faq.a}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
