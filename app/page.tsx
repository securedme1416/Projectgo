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
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Apply Now Button */}
          <div className="flex justify-center mb-12">
            <Link 
              href="/loan-application"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Hero Images - Marketing Content */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895d7feaf66.jpg"
                alt="Loan Benefits"
                width={960}
                height={1077}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895db81f5e3.jpg"
                alt="Easy Process"
                width={960}
                height={1297}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895dc71ecc7.jpg"
                alt="Features"
                width={960}
                height={1778}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895de694651.jpg"
                alt="Benefits Overview"
                width={960}
                height={1699}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895dffb9b48.jpg"
                alt="Terms & Conditions"
                width={960}
                height={1578}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895e1b1c5da.jpg"
                alt="Application Process"
                width={960}
                height={1661}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="https://lendig0.simdif.com/images/public/sd_67895e344f726.jpg"
                alt="Final Info"
                width={960}
                height={1587}
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
