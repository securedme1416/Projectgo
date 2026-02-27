'use client';

import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </section>

        {/* Services Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895ea4c42d5.jpg"
                alt="Personal Loans"
                width={960}
                height={1683}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Service 2 */}
            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895ef20bfaf.jpg"
                alt="Business Loans"
                width={960}
                height={1637}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Service 3 */}
            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_6789604cc5bda.jpg"
                alt="Additional Services"
                width={960}
                height={1658}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Service Description */}
          <section className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Moni Africa?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Fast and hassle-free loan approval process</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Loans up to 10 Million Naira</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Low interest rates and flexible payment terms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Minimal documentation required</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span>Dedicated customer support available 24/7</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
