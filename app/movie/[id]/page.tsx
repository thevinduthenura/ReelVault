import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Calendar, Film, ShieldCheck, Zap, XCircle, ThumbsUp, MessageSquare } from 'lucide-react';

export default function MovieDetail() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* 1. HERO BAND */}
      <section className="relative bg-bg-secondary border-b border-border">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/departed_bg/1920/600"
            alt="The Departed Background"
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/80 to-transparent" />
          <div className="film-grain absolute inset-0 mix-blend-overlay opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-balance">The Departed</h1>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-text-muted mb-8">
            <span className="font-semibold text-text-primary">Dir. Martin Scorsese</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 151 min</span>
            <span className="border border-border px-2 py-0.5 rounded text-xs font-bold">R</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2006</span>
            <div className="flex gap-2">
              <span className="bg-bg-primary/50 px-2 py-1 rounded">Crime</span>
              <span className="bg-bg-primary/50 px-2 py-1 rounded">Thriller</span>
              <span className="bg-bg-primary/50 px-2 py-1 rounded">Drama</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 text-accent-gold fill-accent-gold" />
              <div>
                <div className="text-2xl font-bold leading-none">8.5<span className="text-lg text-text-muted font-normal">/10</span></div>
                <div className="text-xs text-text-muted">IMDb Rating</div>
              </div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-danger leading-none">91%</div>
              <div className="text-xs text-text-muted">Rotten Tomatoes</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] hover:-translate-y-1">
              <Film className="w-5 h-5" /> Rent for $3.99 — 48hrs
            </button>
            <button className="border border-border hover:border-text-primary hover:bg-bg-secondary text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1">
              ♥ Add to Watchlist
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SPLIT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: Poster & Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* 2. FILM SYNOPSIS BLOCK */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-border">
                  <Image
                    src="https://picsum.photos/seed/departed_poster/600/900"
                    alt="The Departed Poster"
                    fill
                    className="object-cover"
                  />
                  <div className="film-grain absolute inset-0 mix-blend-overlay opacity-40" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-display text-2xl font-bold mb-4 border-b border-border pb-2 inline-block border-b-accent-gold">Synopsis</h3>
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston. As the stakes get higher and the danger more palpable, both men must race against time to uncover the other&apos;s identity before their own is revealed.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-sm text-text-muted uppercase tracking-wider mb-3">Top Cast</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between"><span className="font-medium">Leonardo DiCaprio</span> <span className="text-text-muted text-sm">Billy Costigan</span></li>
                      <li className="flex justify-between"><span className="font-medium">Matt Damon</span> <span className="text-text-muted text-sm">Colin Sullivan</span></li>
                      <li className="flex justify-between"><span className="font-medium">Jack Nicholson</span> <span className="text-text-muted text-sm">Frank Costello</span></li>
                      <li className="flex justify-between"><span className="font-medium">Mark Wahlberg</span> <span className="text-text-muted text-sm">Dignam</span></li>
                      <li className="flex justify-between"><span className="font-medium">Martin Sheen</span> <span className="text-text-muted text-sm">Queenan</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-muted uppercase tracking-wider mb-3">Awards</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" /> <span>Winner: Best Picture (Oscar)</span></li>
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" /> <span>Winner: Best Director (Oscar)</span></li>
                      <li className="flex items-start gap-2"><Star className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" /> <span>Winner: Best Adapted Screenplay</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. REVIEWS SECTION */}
            <div>
              <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
                <div className="flex gap-6">
                  <button className="font-display text-xl font-bold text-accent-gold border-b-2 border-accent-gold pb-2 -mb-[10px]">Critic Reviews</button>
                  <button className="font-display text-xl font-bold text-text-muted hover:text-text-primary pb-2 -mb-[10px] transition-colors">User Reviews</button>
                </div>
                <button className="text-sm font-medium border border-border px-4 py-2 rounded-full hover:bg-bg-secondary transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Write Review
                </button>
              </div>

              <div className="space-y-6">
                {[
                  { score: "100", critic: "Peter Travers", pub: "Rolling Stone", text: "Scorsese has never directed with more energy, more passion, or more sheer filmmaking bravado." },
                  { score: "90", critic: "Manohla Dargis", pub: "The New York Times", text: "A brutally violent, brilliantly entertaining picture that finds the director returning to the mean streets with a vengeance." },
                  { score: "88", critic: "Roger Ebert", pub: "Chicago Sun-Times", text: "What a piece of work this is. It's like a master class in how to make a crime movie." }
                ].map((review, i) => (
                  <div key={i} className="bg-bg-secondary/50 p-6 rounded-xl border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-bold text-lg">{review.critic}</div>
                        <div className="text-sm text-text-muted">{review.pub}</div>
                      </div>
                      <div className="bg-bg-primary px-3 py-1 rounded font-bold text-accent-gold border border-border">{review.score}/100</div>
                    </div>
                    <p className="italic text-text-muted">&quot;{review.text}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Pricing Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* 3. RENTAL PRICING PANEL */}
              <div className="bg-bg-secondary border border-border rounded-2xl p-6 shadow-2xl">
                <h3 className="font-display text-xl font-bold mb-4">Rent This Film</h3>
                
                <div className="space-y-3 mb-6">
                  <label className="flex items-center justify-between p-3 border border-accent-gold bg-accent-gold/10 rounded-lg cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="quality" defaultChecked className="accent-accent-gold w-4 h-4" />
                      <span className="font-bold">4K Ultra HD</span>
                    </div>
                    <span className="font-bold">$4.99</span>
                  </label>
                  <label className="flex items-center justify-between p-3 border border-border hover:border-text-muted rounded-lg cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="quality" className="accent-accent-gold w-4 h-4" />
                      <span className="font-bold">1080p HD</span>
                    </div>
                    <span className="font-bold">$3.99</span>
                  </label>
                </div>

                <div className="text-sm text-text-muted mb-6 flex items-center justify-center gap-2 bg-bg-primary py-2 rounded">
                  <Clock className="w-4 h-4" /> 48-hour access once started
                </div>

                <button className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-4 rounded-xl font-bold text-lg mb-4 transition-all shadow-[0_0_15px_rgba(212,168,67,0.2)] hover:shadow-[0_0_25px_rgba(212,168,67,0.4)] hover:-translate-y-0.5">
                  Confirm Rental
                </button>

                <div className="flex justify-between items-center text-xs text-text-muted pt-4 border-t border-border">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Instant</span>
                  <span className="flex items-center gap-1"><XCircle className="w-3 h-3" /> Cancel Anytime</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-bg-secondary to-bg-primary border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="w-6 h-6 text-accent-gold" />
                </div>
                <h4 className="font-bold mb-2">Watch Free with Pro</h4>
                <p className="text-sm text-text-muted mb-4">Get unlimited access to this and 10,000+ other films.</p>
                <Link href="/pricing" className="text-accent-gold hover:text-accent-gold-hover font-bold text-sm flex items-center justify-center gap-1 transition-colors">
                  Start 14-Day Free Trial <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
