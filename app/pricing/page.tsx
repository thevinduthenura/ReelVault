import Link from 'next/link';
import { Check, Minus, ShieldCheck, Zap, XCircle, Star, Clock } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary">
      {/* 1. HERO HEADER */}
      <section className="py-20 text-center px-4 max-w-4xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-accent-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-balance relative z-10">Two Ways to Watch. Zero Compromises.</h1>
        <p className="text-xl text-text-muted text-balance relative z-10">Rent a single film tonight, or go unlimited for less than a coffee a week.</p>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* CARD 1 */}
          <div className="bg-bg-secondary border border-border rounded-2xl p-8 hover:border-text-muted transition-colors">
            <h3 className="font-display text-2xl font-bold mb-2">Pay Per Film</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-sm text-text-muted mb-8 h-10">Free to join. Pay only for what you watch.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Rent from $1.99/film</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>48-hour access</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>HD quality</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>No commitment</span></li>
            </ul>
            
            <Link href="/browse" className="block w-full text-center border border-border hover:bg-bg-primary py-3 rounded-xl font-bold transition-colors">
              Browse Films
            </Link>
          </div>

          {/* CARD 2 - PRO */}
          <div className="bg-bg-secondary border-2 border-accent-gold rounded-2xl p-8 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(212,168,67,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-bg-primary px-4 py-1 rounded-full font-bold text-sm shadow-lg whitespace-nowrap">MOST POPULAR</div>
            <h3 className="font-display text-2xl font-bold mb-2 text-accent-gold">ReelVault Pro</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-5xl font-bold">$9.99</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-sm text-text-muted mb-8 h-10">Or $89/year (save 26%). Unlimited streaming.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent-gold" /> <span className="font-medium">Unlimited streaming</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent-gold" /> <span>4K where available</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent-gold" /> <span>Offline downloads (3 devices)</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent-gold" /> <span>Ad-free</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-accent-gold" /> <span>Early access to new releases</span></li>
            </ul>
            
            <Link href="/signup" className="block w-full text-center bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-4 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(212,168,67,0.3)] hover:-translate-y-1">
              Start 14-Day Free Trial
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-bg-secondary border border-border rounded-2xl p-8 hover:border-text-muted transition-colors">
            <h3 className="font-display text-2xl font-bold mb-2">Cinephile Bundle</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold">$14.99</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-sm text-text-muted mb-8 h-10">For the ultimate film collector.</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Everything in Pro</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Monthly curated film box</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Director&apos;s commentary tracks</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Exclusive critic roundtables</span></li>
              <li className="flex items-center gap-3"><Check className="w-5 h-5 text-text-muted" /> <span>Priority support</span></li>
            </ul>
            
            <Link href="/signup" className="block w-full text-center border border-border hover:bg-bg-primary py-3 rounded-xl font-bold transition-colors">
              Get Bundle
            </Link>
          </div>

        </div>
      </section>

      {/* 5. TRUST STRIP */}
      <section className="border-y border-border bg-bg-secondary/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium text-text-muted">
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 256-bit Encryption</div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5" /> 14-Day Money Back</div>
            <div className="flex items-center gap-2"><XCircle className="w-5 h-5" /> Cancel Anytime</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5 text-accent-gold fill-accent-gold" /> 4.8★ App Store</div>
          </div>
        </div>
      </section>

      {/* 3. FEATURE COMPARISON TABLE */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="font-display text-3xl font-bold mb-12 text-center">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-border font-bold text-lg w-2/5">Features</th>
                <th className="p-4 border-b border-border font-bold text-center w-1/5">Pay Per Film</th>
                <th className="p-4 border-b border-border font-bold text-center w-1/5 text-accent-gold">Pro</th>
                <th className="p-4 border-b border-border font-bold text-center w-1/5">Bundle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { name: 'Access to 10,000+ films', p1: 'Per rental', p2: true, p3: true },
                { name: 'Video Quality', p1: 'HD', p2: '4K HDR', p3: '4K HDR' },
                { name: 'Ad-free streaming', p1: true, p2: true, p3: true },
                { name: 'Offline downloads', p1: false, p2: '3 devices', p3: '5 devices' },
                { name: 'Early access to new releases', p1: false, p2: true, p3: true },
                { name: 'Director commentaries', p1: false, p2: false, p3: true },
                { name: 'Physical film box', p1: false, p2: false, p3: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-bg-secondary/30 transition-colors">
                  <td className="p-4 text-text-muted">{row.name}</td>
                  <td className="p-4 text-center">
                    {typeof row.p1 === 'boolean' ? (row.p1 ? <Check className="w-5 h-5 mx-auto text-text-muted" /> : <Minus className="w-5 h-5 mx-auto text-border" />) : <span className="text-sm font-medium">{row.p1}</span>}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.p2 === 'boolean' ? (row.p2 ? <Check className="w-5 h-5 mx-auto text-accent-gold" /> : <Minus className="w-5 h-5 mx-auto text-border" />) : <span className="text-sm font-medium text-accent-gold">{row.p2}</span>}
                  </td>
                  <td className="p-4 text-center">
                    {typeof row.p3 === 'boolean' ? (row.p3 ? <Check className="w-5 h-5 mx-auto text-text-muted" /> : <Minus className="w-5 h-5 mx-auto text-border" />) : <span className="text-sm font-medium">{row.p3}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. FINAL CTA BAND */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden text-center">
        <div className="film-grain absolute inset-0 mix-blend-overlay opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to watch something great tonight?</h2>
          <p className="text-text-muted mb-8">Join thousands of cinephiles on ReelVault.</p>
          <Link href="/signup" className="inline-block bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-10 py-5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,168,67,0.3)]">
            Start Your Free Trial
          </Link>
          <div className="mt-4 text-sm text-text-muted flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Offer expires in 2:47:33
          </div>
        </div>
      </section>
    </div>
  );
}
