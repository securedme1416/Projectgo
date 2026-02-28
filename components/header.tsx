'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'OUR SERVICES', href: '/services' },
  { label: 'CONTACT US', href: '/contact' },
  { label: 'LOAN APPLICATION', href: '/loan-application' },
  { label: 'EMAIL VERIFICATION', href: '/email-verification' },
  { label: 'PAYMENT GATEWAY', href: '/payment-gateway' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm font-semibold text-gray-700">Moni Africa</div>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Main Header with Navigation */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between">
            <h1 className="text-2xl font-bold">Moni Africa</h1>
            <ul className="flex gap-8 flex-wrap justify-center flex-1 mx-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-100 transition font-semibold text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-between">
            <h1 className="text-xl font-bold">Moni Africa</h1>
            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-blue-500 rounded transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-100 transition font-semibold text-sm text-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
