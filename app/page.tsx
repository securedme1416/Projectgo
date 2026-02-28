'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">

        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Moni Africa Loan Service</h1>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            Fast, secure and reliable loan services designed to support your personal
            and business financial needs.
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">

          {/* Apply Button */}
          <div className="flex justify-center mb-12">
            <Link 
              href="/loan-application"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              Apply Now
            </Link>
          </div>


          {/* SECTION 1 */}
          <div className="space-y-8">

            <div className="flex justify-center">
              <Image
                src="/images/home1.png"
                alt="Loan Banner"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Intro Write-up */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Quick Loans Without Stress
              </h2>
              <p className="text-gray-600">
                Moni Africa provides fast and reliable loan solutions with a simple
                application process. Our system is designed to deliver financial
                assistance quickly while maintaining transparency and security.
              </p>
            </div>


            {/* SECTION 2 */}
            <div className="flex justify-center">
              <Image
                src="/images/home2.png"
                alt="Loan Process"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Features Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2 text-blue-600">
                  Fast Approval
                </h3>
                <p className="text-gray-600 text-sm">
                  Get your loan processed quickly with minimal waiting time.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2 text-blue-600">
                  Secure Process
                </h3>
                <p className="text-gray-600 text-sm">
                  Your data is protected using modern secure systems.
                </p>
              </div>

              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="font-bold text-lg mb-2 text-blue-600">
                  Flexible Repayment
                </h3>
                <p className="text-gray-600 text-sm">
                  Repayment plans designed to suit your financial capability.
                </p>
              </div>
            </div>


            {/* SECTION 3 */}
            <div className="flex justify-center">
              <Image
                src="/images/home3.png"
                alt="Loan Benefits"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Transparent Loan System
              </h2>
              <p className="text-gray-600">
                We maintain complete transparency in all loan processes. There are
                no hidden charges and every step is clearly explained.
              </p>
            </div>


            {/* SECTION 4 */}
            <div className="flex justify-center">
              <Image
                src="/images/home4.png"
                alt="Loan Structure"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/home5.png"
                alt="Loan Terms"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>


            {/* SECTION 5 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Moni Africa?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-1">
                    Reliable Service
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Trusted by many customers for fast and dependable loan delivery.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-1">
                    Simple Application
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Apply online with easy steps and quick verification.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-600 mb-1">
                    Customer Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our support team is always ready to assist you.
                  </p>
                </div>
              </div>
            </div>


            {/* Remaining Images */}
            <div className="flex justify-center">
              <Image
                src="/images/home6.png"
                alt="Process"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/home7.png"
                alt="Steps"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/home8.png"
                alt="Support"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/home9.png"
                alt="Final"
                width={960}
                height={600}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
