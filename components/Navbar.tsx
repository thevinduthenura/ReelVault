'use client';

import Link from 'next/link';
import { Film, Menu, Search, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Film className="w-8 h-8 text-accent-gold group-hover:rotate-12 transition-transform" />
              <span className="font-display text-2xl font-bold tracking-wider text-text-primary">ReelVault</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/browse" className="text-sm font-medium text-text-muted hover:text-accent-gold transition-colors">Browse</Link>
            <Link href="/browse?filter=new" className="text-sm font-medium text-text-muted hover:text-accent-gold transition-colors">New Releases</Link>
            <Link href="/browse?filter=top" className="text-sm font-medium text-text-muted hover:text-accent-gold transition-colors">Top Rated</Link>
            <Link href="/pricing" className="text-sm font-medium text-text-muted hover:text-accent-gold transition-colors">Pricing</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/signin" className="text-sm font-medium text-text-primary hover:text-accent-gold transition-colors">Sign In</Link>
            <Link
              href="/pricing"
              className="bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(212,168,67,0.4)]"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-primary"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-bg-secondary border-b border-border/50 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              <Link href="/browse" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-text-primary border-b border-border/30">Browse</Link>
              <Link href="/browse?filter=new" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-text-primary border-b border-border/30">New Releases</Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-text-primary border-b border-border/30">Pricing</Link>
              <Link href="/signin" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-text-primary border-b border-border/30">Sign In</Link>
              <div className="pt-4 px-3">
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-accent-gold text-bg-primary px-5 py-3 rounded-full text-base font-bold"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
