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
    <header className="relative w-full sticky top-0 z-50">
      {/* Full-width header image */}
      <div className="w-full relative">
        <Link href="/">
          <img
            src="/moniafrica.png"
            alt="Moni Africa Banner"
            className="w-full h-24 md:h-32 object-cover"
          />
        </Link>

        {/* Overlay for title and menu button */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          {/* Left placeholder */}
          <div className="w-6 md:w-12"></div>

          {/* Centered site title */}
          <h1 className="text-xl md:text-2xl font-bold text-white text-center drop-shadow-md">
            
          </h1>

          {/* Right: Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded transition text-white drop-shadow-md hover:bg-white/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-8 mt-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-blue-100 transition font-semibold text-sm whitespace-nowrap drop-shadow-sm"
          >
            {item.label}
          </Link>
        ))}
      </nav>

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
