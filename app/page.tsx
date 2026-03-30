import Image from 'next/image';
import Link from 'next/link';
import { Play, Plus, Star, Film, Smartphone, MessageSquare } from 'lucide-react';
import { MovieCard } from '@/components/MovieCard';

const NEW_RELEASES = [
  { id: '1', title: 'Dune: Part Two', year: 2024, rating: 8.8, price: 4.99, genre: 'Sci-Fi', posterUrl: 'https://picsum.photos/seed/dune2/400/600' },
  { id: '2', title: 'Poor Things', year: 2023, rating: 8.4, isPro: true, genre: 'Comedy', posterUrl: 'https://picsum.photos/seed/poorthings/400/600' },
  { id: '3', title: 'Past Lives', year: 2023, rating: 8.0, price: 3.99, genre: 'Romance', posterUrl: 'https://picsum.photos/seed/pastlives/400/600' },
  { id: '4', title: 'Anatomy of a Fall', year: 2023, rating: 7.8, isPro: true, genre: 'Thriller', posterUrl: 'https://picsum.photos/seed/anatomy/400/600' },
  { id: '5', title: 'The Zone of Interest', year: 2023, rating: 7.6, price: 4.99, genre: 'Drama', posterUrl: 'https://picsum.photos/seed/zone/400/600' },
  { id: '6', title: 'Perfect Days', year: 2023, rating: 7.9, isPro: true, genre: 'Drama', posterUrl: 'https://picsum.photos/seed/perfect/400/600' },
];

const GENRES = [
  { name: 'Drama', icon: '🎭', color: 'from-blue-900/40 to-bg-secondary' },
  { name: 'Thriller', icon: '🔪', color: 'from-red-900/40 to-bg-secondary' },
  { name: 'Sci-Fi', icon: '🚀', color: 'from-purple-900/40 to-bg-secondary' },
  { name: 'Horror', icon: '👻', color: 'from-green-900/40 to-bg-secondary' },
  { name: 'Romance', icon: '❤️', color: 'from-pink-900/40 to-bg-secondary' },
  { name: 'Documentary', icon: '🎥', color: 'from-yellow-900/40 to-bg-secondary' },
  { name: 'Animation', icon: '✨', color: 'from-cyan-900/40 to-bg-secondary' },
  { name: 'World Cinema', icon: '🌍', color: 'from-orange-900/40 to-bg-secondary' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/oppenheimer/1920/1080"
            alt="Hero Background"
            fill
            className="object-cover opacity-50 blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
          <div className="film-grain absolute inset-0 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent-gold text-bg-primary px-2 py-0.5 rounded text-xs font-bold tracking-wider uppercase">Featured</span>
              <span className="text-text-muted text-sm flex items-center gap-1"><Star className="w-4 h-4 text-accent-gold fill-accent-gold" /> 9.1/10</span>
              <span className="text-text-muted text-sm">2023</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 leading-none text-balance">Oppenheimer</h1>
            <div className="flex gap-2 mb-6">
              <span className="border border-border px-3 py-1 rounded-full text-xs text-text-muted">Biography</span>
              <span className="border border-border px-3 py-1 rounded-full text-xs text-text-muted">Drama</span>
              <span className="border border-border px-3 py-1 rounded-full text-xs text-text-muted">History</span>
            </div>
            <p className="text-lg text-text-muted mb-8 max-w-xl text-balance">
              The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A cinematic masterpiece by Christopher Nolan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/movie/oppenheimer" className="bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(212,168,67,0.4)] hover:-translate-y-1">
                <Play className="w-5 h-5 fill-current" /> Rent Now — $3.99
              </Link>
              <button className="border border-border hover:border-text-primary hover:bg-bg-secondary text-text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:-translate-y-1">
                <Plus className="w-5 h-5" /> Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION STRIP */}
      <section className="border-y border-border bg-bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6 first:pl-0">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0">
                <Film className="w-6 h-6 text-accent-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg">10,000+ Films</h3>
                <p className="text-sm text-text-muted">Curated classics to modern masterpieces.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-accent-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Critic & Fan Reviews</h3>
                <p className="text-sm text-text-muted">Read trusted opinions before you watch.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-accent-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Watch on Any Device</h3>
                <p className="text-sm text-text-muted">Stream in 4K on your TV, phone, or tablet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEW RELEASES CAROUSEL */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Now Showing</h2>
          <Link href="/browse?filter=new" className="text-accent-gold hover:text-accent-gold-hover font-medium flex items-center gap-1 transition-colors">
            See All <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {NEW_RELEASES.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>

      {/* 5. SUBSCRIPTION PITCH SECTION */}
      <section className="py-20 bg-bg-secondary relative overflow-hidden">
        <div className="film-grain absolute inset-0 mix-blend-overlay opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">Unlimited Cinema. One Price.</h2>
              <p className="text-lg text-text-muted mb-8">Stop paying per rental. Join ReelVault Pro and get unlimited access to our entire curated catalog in stunning 4K.</p>
              <ul className="space-y-4 mb-8">
                {['Stream 10,000+ films ad-free', 'Download for offline viewing', 'Exclusive director commentaries', 'Cancel anytime, no commitment'].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent-gold" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="inline-flex bg-text-primary text-bg-primary hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
                View All Plans
              </Link>
            </div>
            
            <div className="bg-bg-primary border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-accent-gold text-bg-primary px-4 py-1 rounded-full font-bold text-sm rotate-12 shadow-lg">Most Popular</div>
              <h3 className="font-display text-2xl font-bold mb-2">ReelVault Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-text-muted">/month</span>
              </div>
              <div className="h-px bg-border w-full mb-6" />
              <Link href="/signup" className="block w-full text-center bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-4 rounded-full font-bold mb-4 transition-colors">
                Start 14-Day Free Trial
              </Link>
              <p className="text-center text-sm text-text-muted">Then $9.99/mo. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOP CRITIC REVIEWS STRIP */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">What Critics Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { critic: "James Whitmore", pub: "Sight & Sound", quote: "ReelVault is the streaming service cinephiles have been waiting for. The curation is unmatched." },
            { critic: "Priya Nair", pub: "Film Comment", quote: "Finally, a platform that treats movies as art rather than just 'content'. The video quality is pristine." },
            { critic: "Lucas Vega", pub: "IndieWire", quote: "The combination of a la carte rentals and a solid subscription tier makes this the most flexible option out there." }
          ].map((review, i) => (
            <div key={i} className="bg-bg-secondary p-8 rounded-xl border border-border relative">
              <MessageSquare className="absolute top-6 right-6 w-8 h-8 text-border opacity-50" />
              <div className="flex text-accent-gold mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg font-display italic mb-6 leading-relaxed">&quot;{review.quote}&quot;</p>
              <div>
                <div className="font-bold">{review.critic}</div>
                <div className="text-sm text-text-muted">{review.pub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. GENRE BROWSE GRID */}
      <section className="py-20 bg-bg-secondary/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Explore by Mood</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GENRES.map((genre) => (
              <Link 
                key={genre.name} 
                href={`/browse?genre=${genre.name.toLowerCase()}`}
                className={`relative overflow-hidden rounded-xl aspect-[2/1] flex flex-col items-center justify-center p-6 border border-border/50 hover:border-accent-gold/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-gold group bg-gradient-to-br ${genre.color}`}
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{genre.icon}</span>
                <span className="font-bold tracking-wide">{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
