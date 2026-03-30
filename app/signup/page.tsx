'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronRight, Film, Lock, Mail, User, ShieldCheck } from 'lucide-react';

const GENRES = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Documentary', 'World Cinema', 'Animation', 'Romance', 'Thriller', 'Crime', 'Fantasy'];

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-bg-secondary z-50">
        <div 
          className="h-full bg-accent-gold transition-all duration-500 ease-out"
          style={{ width: `${(step / 4) * 100}%` }}
        />
      </div>

      <div className="flex-1 flex">
        {/* Left side - Imagery (hidden on mobile) */}
        <div className="hidden lg:flex w-1/2 relative bg-bg-secondary items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="https://picsum.photos/seed/signup_bg/1000/1500" alt="Background" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/20 to-bg-primary" />
            <div className="film-grain absolute inset-0 mix-blend-overlay opacity-50" />
          </div>
          <div className="relative z-10 max-w-md p-12 text-center">
            <Film className="w-16 h-16 text-accent-gold mx-auto mb-8" />
            <h2 className="font-display text-4xl font-bold mb-4">Cinema without compromise.</h2>
            <p className="text-lg text-text-muted">Join ReelVault to access 10,000+ curated films, exclusive director commentaries, and a community of true cinephiles.</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
          <div className="w-full max-w-md">
            
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" className="font-display text-2xl font-bold tracking-wider text-text-primary">ReelVault</Link>
              <span className="text-sm text-text-muted font-mono">STEP {step}/4</span>
            </div>

            {/* STEP 1: CREATE ACCOUNT */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h1 className="font-display text-3xl font-bold mb-2">Create your account</h1>
                <p className="text-text-muted mb-8">Start your cinematic journey today.</p>

                <div className="space-y-4 mb-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input type="text" placeholder="Full Name" className="w-full bg-bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input type="email" placeholder="Email Address" className="w-full bg-bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input type="password" placeholder="Password" className="w-full bg-bg-secondary border border-border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-accent-gold transition-colors" />
                  </div>
                  {/* Password strength meter dummy */}
                  <div className="flex gap-1 h-1 mt-2">
                    <div className="flex-1 bg-success rounded-full" />
                    <div className="flex-1 bg-success rounded-full" />
                    <div className="flex-1 bg-border rounded-full" />
                  </div>
                </div>

                <button onClick={() => setStep(2)} className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3.5 rounded-lg font-bold text-lg transition-colors mb-6">
                  Create Account
                </button>

                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-border"></div>
                  <span className="flex-shrink-0 mx-4 text-text-muted text-sm">Or continue with</span>
                  <div className="flex-grow border-t border-border"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button className="bg-bg-secondary border border-border hover:bg-border py-3 rounded-lg font-medium transition-colors">Google</button>
                  <button className="bg-bg-secondary border border-border hover:bg-border py-3 rounded-lg font-medium transition-colors">Apple</button>
                </div>

                <p className="text-center text-sm text-text-muted">
                  Already have an account? <Link href="/login" className="text-accent-gold hover:underline">Sign In</Link>
                </p>
              </div>
            )}

            {/* STEP 2: CHOOSE PLAN */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h1 className="font-display text-3xl font-bold mb-2">How would you like to watch?</h1>
                <p className="text-text-muted mb-8">You can always change this later.</p>

                <div className="space-y-4 mb-8">
                  <label className="block relative bg-bg-secondary border border-border rounded-xl p-6 cursor-pointer hover:border-text-muted transition-colors">
                    <input type="radio" name="plan" className="absolute top-6 right-6 w-5 h-5 accent-accent-gold" />
                    <h3 className="font-bold text-xl mb-1">Rent as I go</h3>
                    <p className="text-text-muted text-sm mb-2">Pay only for what you watch. From $1.99/film.</p>
                    <div className="text-lg font-bold">$0<span className="text-sm text-text-muted font-normal">/month</span></div>
                  </label>

                  <label className="block relative bg-bg-secondary border-2 border-accent-gold rounded-xl p-6 cursor-pointer shadow-[0_0_20px_rgba(212,168,67,0.1)]">
                    <input type="radio" name="plan" defaultChecked className="absolute top-6 right-6 w-5 h-5 accent-accent-gold" />
                    <div className="absolute -top-3 left-6 bg-accent-gold text-bg-primary px-3 py-0.5 rounded-full text-xs font-bold">RECOMMENDED</div>
                    <h3 className="font-bold text-xl mb-1 text-accent-gold">Go Pro</h3>
                    <p className="text-text-muted text-sm mb-2">Unlimited streaming. 4K quality. Offline viewing.</p>
                    <div className="text-lg font-bold">$9.99<span className="text-sm text-text-muted font-normal">/month</span></div>
                  </label>
                </div>

                <p className="text-center text-sm text-text-muted mb-6 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> 14-day free trial, cancel anytime
                </p>

                <button onClick={() => setStep(3)} className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3.5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  Continue <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* STEP 3: TASTE PROFILE */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h1 className="font-display text-3xl font-bold mb-2">What do you love watching?</h1>
                <p className="text-text-muted mb-8">Select at least 3 genres to personalize your recommendations.</p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {GENRES.map(genre => (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedGenres.includes(genre) 
                          ? 'bg-accent-gold text-bg-primary border border-accent-gold scale-105' 
                          : 'bg-bg-secondary border border-border text-text-muted hover:border-text-primary hover:text-text-primary'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setStep(4)} 
                  disabled={selectedGenres.length < 3}
                  className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3.5 rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Complete Setup <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <div className="animate-in zoom-in-95 duration-500 text-center py-12">
                <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-12 h-12 text-success" />
                </div>
                <h1 className="font-display text-4xl font-bold mb-4">You&apos;re all set, Alex! 🎬</h1>
                <p className="text-lg text-text-muted mb-2">Your 14-day free trial starts today.</p>
                <p className="text-text-muted mb-10">We&apos;ve curated a special list of films just for you.</p>

                <Link href="/browse" className="inline-block w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,168,67,0.3)]">
                  Explore ReelVault
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
