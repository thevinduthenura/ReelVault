import Image from 'next/image';
import Link from 'next/link';
import { Smartphone, Download, Star, CheckCircle, PlayCircle, Film } from 'lucide-react';

export default function AppLanding() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary overflow-hidden">
      {/* 1. Hero */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="absolute top-0 right-0 w-full h-full max-w-3xl bg-accent-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex-1 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 bg-bg-secondary border border-border px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Star className="w-4 h-4 text-accent-gold fill-accent-gold" /> 4.8 Rating on App Store
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            ReelVault in <br/><span className="text-accent-gold">Your Pocket</span>
          </h1>
          <p className="text-xl text-text-muted mb-10 max-w-xl mx-auto lg:mx-0 text-balance">
            Take 10,000+ curated films wherever you go. Download for offline viewing, cast to your TV, and discover your next favorite movie.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-text-primary text-bg-primary hover:bg-gray-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs font-medium">Download on the</div>
                <div className="text-lg leading-none">App Store</div>
              </div>
            </button>
            <button className="w-full sm:w-auto bg-bg-secondary border border-border hover:border-text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:-translate-y-1">
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs font-medium">Get it on</div>
                <div className="text-lg leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full max-w-sm mx-auto">
          {/* Phone Mockup */}
          <div className="relative mx-auto w-[300px] h-[600px] bg-bg-primary border-[12px] border-bg-secondary rounded-[3rem] shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(212,168,67,0.15)]">
            <div className="absolute top-0 inset-x-0 h-6 bg-bg-secondary rounded-b-3xl w-40 mx-auto z-20" /> {/* Notch */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/50 to-bg-primary" />
            
            {/* Mock App UI */}
            <div className="relative z-10 p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mt-6 mb-6">
                <Film className="w-6 h-6 text-accent-gold" />
                <div className="w-8 h-8 rounded-full bg-border" />
              </div>
              <div className="w-full aspect-[2/3] bg-border rounded-xl mb-4 relative overflow-hidden">
                <img src="https://picsum.photos/seed/app_hero/300/450" alt="App Hero" className="w-full h-full object-cover opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-6 w-3/4 bg-bg-primary/80 backdrop-blur rounded mb-2" />
                  <div className="h-4 w-1/2 bg-bg-primary/80 backdrop-blur rounded" />
                </div>
              </div>
              <div className="flex gap-2 mb-4 overflow-hidden">
                <div className="w-24 h-32 bg-border rounded-lg shrink-0 relative overflow-hidden">
                  <img src="https://picsum.photos/seed/app_1/100/150" alt="App 1" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="w-24 h-32 bg-border rounded-lg shrink-0 relative overflow-hidden">
                  <img src="https://picsum.photos/seed/app_2/100/150" alt="App 2" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="w-24 h-32 bg-border rounded-lg shrink-0 relative overflow-hidden">
                  <img src="https://picsum.photos/seed/app_3/100/150" alt="App 3" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature highlights */}
      <section className="py-24 bg-bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Offline Viewing</h3>
              <p className="text-text-muted">Download your rentals or Pro catalog films to watch on flights, commutes, or off-grid.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Seamless Casting</h3>
              <p className="text-text-muted">Start on your phone, cast to your TV in 4K HDR with a single tap. Perfect sync every time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Smart Curation</h3>
              <p className="text-text-muted">Our AI learns your taste to suggest hidden gems you won&apos;t find on generic algorithms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ratings */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold mb-12">Loved by Cinephiles</h2>
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-accent-gold fill-accent-gold" />)}
        </div>
        <div className="text-2xl font-bold mb-2">4.8 out of 5</div>
        <div className="text-text-muted mb-12">Based on 12,400+ reviews</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border">
            <div className="flex gap-1 mb-3 text-accent-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="italic mb-4">&quot;The video player is flawless. No buffering, true 4K, and the offline downloads actually work unlike other apps.&quot;</p>
            <div className="font-bold text-sm">— Sarah M.</div>
          </div>
          <div className="bg-bg-secondary p-6 rounded-2xl border border-border">
            <div className="flex gap-1 mb-3 text-accent-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="italic mb-4">&quot;I cancelled Netflix for this. The curation is incredible and the app design is gorgeous. Worth every penny.&quot;</p>
            <div className="font-bold text-sm">— David K.</div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-32 relative text-center px-4">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/app_cta/1920/800" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-5xl font-bold mb-6">Start Watching in 60 Seconds</h2>
          <p className="text-xl text-text-muted mb-10">Download the free app and get your first rental on us, or start a 14-day Pro trial.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,168,67,0.3)]">
              Download for iOS
            </button>
            <button className="bg-bg-secondary border border-border hover:border-text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1">
              Download for Android
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
