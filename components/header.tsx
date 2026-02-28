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
      {/* Full-width header image with small vertical height */}
      <div className="w-full">
        <Link href="/">
          <img
            src="/moniafrica.png"
            alt="Moni Africa Banner"
            className="w-full h-12 md:h-12 object-cover"
          />
        </Link>
      </div>

      {/* Main header with navigation */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left placeholder (empty for centering) */}
          <div className="w-6 md:w-12"></div>

          {/* Centered site title */}
          <h1 className="text-xl md:text-2xl font-bold text-center flex-1">
            Moni Africa
          </h1>

          {/* Right: Mobile menu button */}
          <div className="md:hidden">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-100 transition font-semibold text-sm whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
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
