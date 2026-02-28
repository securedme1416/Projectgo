import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moni Africa - Professional Loan Service',
  description:
    "Moni Africa is a financial technology firm with a vision to become Nigeria's leading financial institution dedicated to SMEs through technology and innovative practices. Get loans up to 10 million naira with ease, low interest rates and minimal documentation.",
  generator: 'Next.js 16',
  keywords:
    'loan service, business loan, personal loan, Nigeria, SME lending, financial technology',
  authors: [{ name: 'Drance Nigeria Limited' }],
  creator: 'Drance Nigeria Limited',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased relative">
        {children}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  );
}
