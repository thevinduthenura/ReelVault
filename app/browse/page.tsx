'use client';

import { useState } from 'react';
import { Search, Grid, List as ListIcon, SlidersHorizontal, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MovieCard } from '@/components/MovieCard';

const DUMMY_MOVIES = [
  { id: '1', title: 'Dune: Part Two', year: 2024, rating: 8.8, price: 4.99, genre: 'Sci-Fi', posterUrl: 'https://picsum.photos/seed/dune2/400/600' },
  { id: '2', title: 'Poor Things', year: 2023, rating: 8.4, isPro: true, genre: 'Comedy', posterUrl: 'https://picsum.photos/seed/poorthings/400/600' },
  { id: '3', title: 'Past Lives', year: 2023, rating: 8.0, price: 3.99, genre: 'Romance', posterUrl: 'https://picsum.photos/seed/pastlives/400/600' },
  { id: '4', title: 'Anatomy of a Fall', year: 2023, rating: 7.8, isPro: true, genre: 'Thriller', posterUrl: 'https://picsum.photos/seed/anatomy/400/600' },
  { id: '5', title: 'The Zone of Interest', year: 2023, rating: 7.6, price: 4.99, genre: 'Drama', posterUrl: 'https://picsum.photos/seed/zone/400/600' },
  { id: '6', title: 'Perfect Days', year: 2023, rating: 7.9, isPro: true, genre: 'Drama', posterUrl: 'https://picsum.photos/seed/perfect/400/600' },
  { id: '7', title: 'Killers of the Flower Moon', year: 2023, rating: 7.7, price: 5.99, genre: 'Crime', posterUrl: 'https://picsum.photos/seed/killers/400/600' },
  { id: '8', title: 'Spider-Man: Across the Spider-Verse', year: 2023, rating: 8.6, isPro: true, genre: 'Animation', posterUrl: 'https://picsum.photos/seed/spiderverse/400/600' },
  { id: '9', title: 'The Boy and the Heron', year: 2023, rating: 7.6, price: 4.99, genre: 'Animation', posterUrl: 'https://picsum.photos/seed/heron/400/600' },
  { id: '10', title: 'Godzilla Minus One', year: 2023, rating: 8.4, isPro: true, genre: 'Action', posterUrl: 'https://picsum.photos/seed/godzilla/400/600' },
  { id: '11', title: 'The Holdovers', year: 2023, rating: 8.0, price: 3.99, genre: 'Comedy', posterUrl: 'https://picsum.photos/seed/holdovers/400/600' },
  { id: '12', title: 'Society of the Snow', year: 2023, rating: 7.9, isPro: true, genre: 'Thriller', posterUrl: 'https://picsum.photos/seed/society/400/600' },
];

const GENRES = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Documentary', 'World Cinema', 'Animation'];
const DECADES = ['2020s', '2010s', '2000s', '90s', '80s', 'Classic (pre-1980)'];

export default function Browse() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary">
      {/* 1. PAGE HEADER */}
      <div className="bg-bg-secondary border-b border-border py-12 relative overflow-hidden">
        <div className="film-grain absolute inset-0 mix-blend-overlay opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">Browse All Films</h1>
          <p className="text-text-muted text-lg flex items-center gap-2">
            Rent individually or stream everything with Pro <span className="w-1 h-1 rounded-full bg-text-muted" /> <span className="text-accent-gold font-bold">4,821 titles</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center gap-2 bg-bg-secondary border border-border py-3 rounded-lg font-bold"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        >
          <SlidersHorizontal className="w-5 h-5" /> Filters
        </button>

        {/* 2. FILTER SIDEBAR */}
        <aside className={`w-full lg:w-64 shrink-0 ${mobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Availability</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-border group-hover:border-accent-gold flex items-center justify-center bg-bg-secondary">
                    <div className="w-3 h-3 rounded-sm bg-accent-gold opacity-0" />
                  </div>
                  <span className="text-text-muted group-hover:text-text-primary transition-colors">Available to Rent</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-border group-hover:border-accent-gold flex items-center justify-center bg-bg-secondary">
                    <div className="w-3 h-3 rounded-sm bg-accent-gold opacity-100" />
                  </div>
                  <span className="text-text-muted group-hover:text-text-primary transition-colors">Included in Pro</span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Genres</h3>
              <div className="space-y-3">
                {GENRES.map(genre => (
                  <label key={genre} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border border-border group-hover:border-accent-gold flex items-center justify-center bg-bg-secondary">
                      <div className="w-3 h-3 rounded-sm bg-accent-gold opacity-0" />
                    </div>
                    <span className="text-text-muted group-hover:text-text-primary transition-colors">{genre}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">Decade</h3>
              <div className="space-y-3">
                {DECADES.map(decade => (
                  <label key={decade} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded border border-border group-hover:border-accent-gold flex items-center justify-center bg-bg-secondary">
                      <div className="w-3 h-3 rounded-sm bg-accent-gold opacity-0" />
                    </div>
                    <span className="text-text-muted group-hover:text-text-primary transition-colors">{decade}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 border-b border-border pb-2">IMDb Rating</h3>
              <input type="range" min="0" max="10" step="0.5" defaultValue="7" className="w-full accent-accent-gold" />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>0</span>
                <span>7.0+</span>
                <span>10</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <button className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-3 rounded-lg font-bold transition-colors">
                Apply Filters
              </button>
              <button className="w-full text-text-muted hover:text-text-primary text-sm font-medium transition-colors">
                Reset All
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1">
          {/* 3. SORT & SEARCH BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-bg-secondary p-4 rounded-xl border border-border">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search films, directors..." 
                className="w-full bg-bg-primary border border-border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-accent-gold transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-muted">Sort by:</span>
                <select className="bg-bg-primary border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-gold cursor-pointer">
                  <option>Newest</option>
                  <option>Top Rated</option>
                  <option>Most Reviewed</option>
                  <option>Alphabetical</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
              
              <div className="flex bg-bg-primary border border-border rounded-lg p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-bg-secondary text-accent-gold shadow' : 'text-text-muted hover:text-text-primary'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-bg-secondary text-accent-gold shadow' : 'text-text-muted hover:text-text-primary'}`}
                >
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. MOVIE GRID / 5. LIST VIEW */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {DUMMY_MOVIES.map(movie => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {DUMMY_MOVIES.map(movie => (
                <div key={movie.id} className="flex gap-4 bg-bg-secondary border border-border rounded-xl p-4 hover:border-accent-gold/50 transition-colors group">
                  <div className="w-24 sm:w-32 shrink-0 aspect-[2/3] relative rounded-lg overflow-hidden">
                    <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-display text-xl font-bold">{movie.title}</h3>
                        {movie.isPro ? (
                          <span className="bg-accent-gold text-bg-primary px-2 py-0.5 rounded text-xs font-bold">PRO</span>
                        ) : (
                          <span className="bg-bg-primary px-2 py-0.5 rounded text-xs font-bold border border-border">${movie.price}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-text-muted mb-3">
                        <span>{movie.year}</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-accent-gold fill-accent-gold" /> {movie.rating}</span>
                        <span className="uppercase text-xs tracking-wider text-accent-gold">{movie.genre}</span>
                      </div>
                      <p className="text-sm text-text-muted line-clamp-2 hidden sm:block">
                        A cinematic masterpiece that explores the depths of human emotion and the complexities of our modern world. Directed by a visionary filmmaker.
                      </p>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button className="bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-6 py-2 rounded font-bold text-sm transition-colors">
                        Rent Now
                      </button>
                      <button className="border border-border hover:bg-bg-primary px-4 py-2 rounded font-bold text-sm transition-colors">
                        Add to Watchlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 6. PAGINATION */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            <span className="text-sm text-text-muted">Showing 1–12 of 4,821 results</span>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-border rounded-lg hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors disabled:opacity-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 border border-accent-gold bg-accent-gold/10 text-accent-gold rounded-lg font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 border border-border hover:bg-bg-secondary rounded-lg font-bold flex items-center justify-center transition-colors">2</button>
              <button className="w-10 h-10 border border-border hover:bg-bg-secondary rounded-lg font-bold flex items-center justify-center transition-colors">3</button>
              <span className="text-text-muted px-2">...</span>
              <button className="w-10 h-10 border border-border hover:bg-bg-secondary rounded-lg font-bold flex items-center justify-center transition-colors">402</button>
              <button className="p-2 border border-border rounded-lg hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
