'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ email: '', name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  // WhatsApp number (replace with your number in international format, e.g., 2348012345678)
  const whatsappNumber = '2348012345678';
  const whatsappMessage = encodeURIComponent('Hello! I want to chat with Moni Africa.');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://lendig0.simdif.com/images/public/sd_678a1c8276e3a.jpg"
              alt="Contact Page"
              width={960}
              height={800}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact us by Email</h2>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Your message has been sent successfully! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
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

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your Phone or WhatsApp Number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
            <p className="text-gray-700 mb-4">
              Have questions about our loan services? We're here to help! Fill out the form above and one of our representatives will contact you shortly.
            </p>
            <p className="text-gray-700">
              For urgent inquiries, please call us directly or visit our office during business hours.
            </p>
          </div>

          {/* Centered WhatsApp Button */}
          <div className="flex justify-center mb-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all"
            >
              <FaWhatsapp size={24} />
              <span>Chat with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
