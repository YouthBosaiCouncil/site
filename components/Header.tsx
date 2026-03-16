"use client";

import Link from 'next/link';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'ホーム', href: '/' },
    { name: '団体概要', href: '/about' },
    { name: '活動実績', href: '/activities' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-2 rounded-xl group-hover:scale-105 transition-transform">
            <Shield size={20} strokeWidth={2.5} />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
            若者防災協議会
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 mr-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ml-2"
            >
              参加する
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-900 dark:text-white -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 absolute top-full left-0 right-0">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-zinc-900 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-center py-4 rounded-full font-bold mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              参加する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
