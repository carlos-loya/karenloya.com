'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here you would typically send the email to your newsletter service
    console.info('Newsletter signup:', { email: '[REDACTED]' });

    setIsSubmitted(true);
    setEmail('');

    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 md:py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>

          {/* Description */}
          <p className="font-inter text-warm-gray-300 mb-8">
            Subscribe to receive the latest stories, inspiration, and lifestyle insights delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-olive-700 focus:border-transparent transition-all"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-olive-700 text-white font-inter font-medium rounded-lg hover:bg-olive-800 transition-colors focus:outline-none focus:ring-2 focus:ring-olive-700 focus:ring-offset-2 focus:ring-offset-warm-gray-900"
            >
              Subscribe
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <p className="mt-4 text-olive-400 font-inter animate-fade-in">
              Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}