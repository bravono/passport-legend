"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getCountriesByType } from "@/lib/data/countries";
import { ScrollReveal } from "@/components/ScrollReveal";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const countries = getCountriesByType("both");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Store to localStorage
    const submissions = JSON.parse(
      localStorage.getItem("contact_submissions") || "[]",
    );
    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("contact_submissions", JSON.stringify(submissions));

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
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
        <Section className="relative min-h-[40vh] flex items-center overflow-hidden bg-primary-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent-600),transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-neutral-900/60" />
          <Container className="relative z-10 text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Get in <span className="text-accent-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule your free consultation with our expert advisors
            </p>
            <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full" />
          </Container>
        </Section>

        {/* Contact Section */}
        <ScrollReveal direction="up" delay={0.2}>
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
                      <p className="text-green-800 dark:text-green-200 font-semibold flex items-center gap-2">
                        <Check size={18} /> Thank you! Your message has been
                        received. We'll contact you soon.
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 font-semibold">
                        {error}
                      </p>
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
                      <a
                        href="mailto:hello@passportlegend.com"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
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
                      <a
                        href="tel:+2347081432919"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        +234 708 143 2919
                      </a>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                        Available Mon-Fri, 9 AM - 6 PM GMT
                      </p>
                    </Card>

                    <Card>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                        Office Addresses
                      </h3>
                      <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <div>
                          <p className="font-semibold text-neutral-900 dark:text-white">
                            1st floor,
                          </p>
                          <p>North westgate house, Harlow, Essex</p>
                          <p>United Kingdom</p>
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900 dark:text-white">
                            7th floor
                          </p>
                          <p>Churchgate tower, Central Business District,</p>
                          <p>Abuja, Nigeria</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal direction="up" delay={0.2}>
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
                    q: "How long does the consultation take?",
                    a: "Initial consultations typically last 30-45 minutes. We tailor the discussion to your specific needs.",
                  },
                  {
                    q: "What information do I need to provide?",
                    a: "Basic information about your background, financial situation, and immigration goals. Detailed due diligence comes later.",
                  },
                  {
                    q: "Is the consultation free?",
                    a: "Yes, our initial consultation is completely free and without obligation.",
                  },
                  {
                    q: "Do you guarantee approval?",
                    a: "We cannot guarantee approval, but our 98% success rate reflects our expertise and due diligence.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {faq.a}
                    </p>
                  </Card>
                ))}
              </div>
            </Container>
          </Section>
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
