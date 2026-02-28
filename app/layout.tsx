'use client';

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { FaWhatsapp } from 'react-icons/fa'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moni Africa - Professional Loan Service',
  description: 'Moni Africa is a financial technology firm with a vision to become Nigeria\'s leading financial institution dedicated to SMEs through technology and innovative practices. Get loans up to 10 million naira with ease, low interest rates and minimal documentation.',
  generator: 'Next.js 16',
  keywords: 'loan service, business loan, personal loan, Nigeria, SME lending, financial technology',
  authors: [{ name: 'Drance Nigeria Limited' }],
  creator: 'Drance Nigeria Limited',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Replace this number with your WhatsApp number in international format
  const whatsappNumber = '+2348012345678';
  const whatsappMessage = encodeURIComponent('Hello! I would like to get more information about Moni Africa loans.');

  return (
    <html lang="en">
      <body className="font-sans antialiased relative">
        {children}
        <Analytics />

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform transform hover:scale-110"
          title="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </body>
    </html>
  )
}
