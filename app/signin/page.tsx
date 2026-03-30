'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ChevronRight } from 'lucide-react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-bg-secondary border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-gold/10 blur-[50px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-text-muted">Sign in to continue to ReelVault.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-text-muted">Password</label>
                  <Link href="/forgot-password" className="text-xs text-accent-gold hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-bg-primary border border-border rounded-xl pl-12 pr-4 py-3 text-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(212,168,67,0.2)]"
              >
                Sign In <ChevronRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-text-muted">
              Don&apos;t have an account? <Link href="/signup" className="text-accent-gold font-bold hover:underline">Start your free trial</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
