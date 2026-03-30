'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ChevronRight, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-bg-secondary border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-gold/10 blur-[50px] pointer-events-none" />
          
          <div className="relative z-10">
            <Link href="/signin" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-gold transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Sign In
            </Link>

            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold mb-2">Reset Password</h1>
              <p className="text-text-muted">Enter your email and we&apos;ll send you a link to reset your password.</p>
            </div>

            {!submitted ? (
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-bg-primary border border-border rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                      placeholder="alex@example.com"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(212,168,67,0.2)]"
                >
                  Send Reset Link <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-success" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Check your email</h3>
                <p className="text-text-muted mb-6">We&apos;ve sent a password reset link to <span className="text-text-primary font-bold">{email}</span>.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent-gold hover:underline font-medium"
                >
                  Didn&apos;t receive it? Try again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
