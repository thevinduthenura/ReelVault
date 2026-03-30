'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, Clock, Star, Settings, LogOut, Film, Heart, History, MessageSquare, ChevronRight } from 'lucide-react';
import { MovieCard } from '@/components/MovieCard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-bg-primary">
      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        
        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-64 border-r border-border p-6 shrink-0">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-display font-bold text-xl border border-accent-gold/50">
              AC
            </div>
            <div>
              <div className="font-bold">Alex Chen</div>
              <div className="text-xs bg-accent-gold text-bg-primary px-2 py-0.5 rounded inline-block font-bold mt-1">PRO</div>
            </div>
          </div>

          <nav className="space-y-2 flex-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: Film },
              { id: 'watchlist', label: 'My Watchlist', icon: Heart },
              { id: 'history', label: 'Rental History', icon: History },
              { id: 'reviews', label: 'Reviews', icon: MessageSquare },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id ? 'bg-bg-secondary text-accent-gold' : 'text-text-muted hover:text-text-primary hover:bg-bg-secondary/50'
                }`}
              >
                <item.icon className="w-5 h-5" /> {item.label}
              </button>
            ))}
          </nav>

          <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-danger hover:bg-danger/10 rounded-lg transition-colors mt-auto">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 sm:p-8 overflow-hidden">
          {/* Mobile Nav (Bottom) */}
          <div className="md:hidden fixed bottom-0 left-0 w-full bg-bg-secondary border-t border-border flex justify-around p-3 z-50">
             {[
              { id: 'dashboard', icon: Film },
              { id: 'watchlist', icon: Heart },
              { id: 'history', icon: History },
              { id: 'settings', icon: Settings },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`p-2 rounded-lg ${activeTab === item.id ? 'text-accent-gold' : 'text-text-muted'}`}
              >
                <item.icon className="w-6 h-6" />
              </button>
            ))}
          </div>

          {activeTab === 'dashboard' && (
            <div className="space-y-10 pb-20 md:pb-0">
              {/* 1. Welcome bar */}
              <div className="bg-gradient-to-r from-bg-secondary to-bg-primary border border-border rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="font-display text-2xl font-bold mb-1">Good evening, Alex 🎬</h1>
                  <p className="text-text-muted text-sm">You&apos;ve watched 4 films this week.</p>
                </div>
                <div className="bg-bg-primary border border-border px-4 py-2 rounded-lg text-sm">
                  <span className="text-text-muted">Pro Plan renews on</span> <span className="font-bold">April 12, 2024</span>
                </div>
              </div>

              {/* 6. ACCOUNT STATS STRIP */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-bg-secondary border border-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center"><Film className="w-5 h-5 text-blue-500" /></div>
                  <div>
                    <div className="text-2xl font-bold">47</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">Films Watched</div>
                  </div>
                </div>
                <div className="bg-bg-secondary border border-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-green-500" /></div>
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">Reviews Written</div>
                  </div>
                </div>
                <div className="bg-bg-secondary border border-border rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center"><Star className="w-5 h-5 text-accent-gold" /></div>
                  <div>
                    <div className="text-2xl font-bold">Jan 2024</div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">Member Since</div>
                  </div>
                </div>
              </div>

              {/* 2. CONTINUE WATCHING ROW */}
              <div>
                <h2 className="font-display text-xl font-bold mb-4">Continue Watching</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Dune: Part Two', progress: 65, time: '1h 12m remaining', img: 'https://picsum.photos/seed/dune2_wide/600/337' },
                    { title: 'Anatomy of a Fall', progress: 30, time: '1h 45m remaining', img: 'https://picsum.photos/seed/anatomy_wide/600/337' },
                  ].map((movie, i) => (
                    <div key={i} className="group relative rounded-xl overflow-hidden border border-border bg-bg-secondary cursor-pointer">
                      <div className="aspect-video relative">
                        <img src={movie.img} alt={movie.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-accent-gold/90 flex items-center justify-center pl-1">
                            <Play className="w-5 h-5 text-bg-primary fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="h-1 bg-bg-primary w-full">
                        <div className="h-full bg-accent-gold" style={{ width: `${movie.progress}%` }} />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">{movie.title}</h3>
                        <p className="text-xs text-text-muted">{movie.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. RECENT RENTALS */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="font-display text-xl font-bold">Recent Rentals</h2>
                  <button className="text-sm text-accent-gold hover:underline">View All</button>
                </div>
                <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-bg-primary/50 border-b border-border">
                      <tr>
                        <th className="p-4 font-medium text-text-muted">Film</th>
                        <th className="p-4 font-medium text-text-muted">Date Rented</th>
                        <th className="p-4 font-medium text-text-muted">Expires</th>
                        <th className="p-4 font-medium text-text-muted">Status</th>
                        <th className="p-4 font-medium text-text-muted">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        { title: 'The Zone of Interest', date: 'Mar 28, 2024', expires: 'Mar 30, 2024', status: 'Active', action: 'Watch' },
                        { title: 'Past Lives', date: 'Mar 20, 2024', expires: 'Mar 22, 2024', status: 'Expired', action: 'Re-Rent' },
                        { title: 'Poor Things', date: 'Mar 15, 2024', expires: 'Mar 17, 2024', status: 'Expired', action: 'Re-Rent' },
                      ].map((rental, i) => (
                        <tr key={i} className="hover:bg-bg-primary/30 transition-colors">
                          <td className="p-4 font-bold">{rental.title}</td>
                          <td className="p-4 text-text-muted">{rental.date}</td>
                          <td className="p-4 text-text-muted">{rental.expires}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${rental.status === 'Active' ? 'bg-success/20 text-success' : 'bg-border text-text-muted'}`}>
                              {rental.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <button className={`text-sm font-bold flex items-center gap-1 ${rental.status === 'Active' ? 'text-accent-gold hover:text-accent-gold-hover' : 'text-text-primary hover:text-accent-gold'}`}>
                              {rental.status === 'Active' ? <Play className="w-4 h-4" /> : null} {rental.action}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}
          
          {activeTab === 'watchlist' && (
            <div className="space-y-8 pb-20 md:pb-0">
              <h1 className="font-display text-3xl font-bold mb-6">My Watchlist</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {[
                  { id: '1', title: 'Oppenheimer', year: 2023, rating: 94, price: 4.99, posterUrl: 'https://picsum.photos/seed/oppenheimer/400/600', genre: 'Biography' },
                  { id: '2', title: 'Poor Things', year: 2023, rating: 92, price: 5.99, posterUrl: 'https://picsum.photos/seed/poorthings/400/600', genre: 'Comedy' },
                  { id: '3', title: 'Killers of the Flower Moon', year: 2023, rating: 89, price: 5.99, posterUrl: 'https://picsum.photos/seed/killers/400/600', genre: 'Crime' },
                  { id: '4', title: 'Anatomy of a Fall', year: 2023, rating: 96, price: 4.99, posterUrl: 'https://picsum.photos/seed/anatomy/400/600', genre: 'Thriller' },
                ].map((movie) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-8 pb-20 md:pb-0">
              <h1 className="font-display text-3xl font-bold mb-6">Rental History</h1>
              <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-bg-primary/50 border-b border-border">
                    <tr>
                      <th className="p-4 font-medium text-text-muted">Film</th>
                      <th className="p-4 font-medium text-text-muted">Date Rented</th>
                      <th className="p-4 font-medium text-text-muted">Price</th>
                      <th className="p-4 font-medium text-text-muted">Status</th>
                      <th className="p-4 font-medium text-text-muted">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { title: 'The Zone of Interest', date: 'Mar 28, 2024', price: '$4.99', status: 'Active', action: 'Watch' },
                      { title: 'Past Lives', date: 'Mar 20, 2024', price: '$3.99', status: 'Expired', action: 'Re-Rent' },
                      { title: 'Poor Things', date: 'Mar 15, 2024', price: '$5.99', status: 'Expired', action: 'Re-Rent' },
                      { title: 'Dune: Part Two', date: 'Mar 01, 2024', price: '$19.99', status: 'Expired', action: 'Re-Rent' },
                      { title: 'The Holdovers', date: 'Feb 14, 2024', price: '$4.99', status: 'Expired', action: 'Re-Rent' },
                    ].map((rental, i) => (
                      <tr key={i} className="hover:bg-bg-primary/30 transition-colors">
                        <td className="p-4 font-bold">{rental.title}</td>
                        <td className="p-4 text-text-muted">{rental.date}</td>
                        <td className="p-4 text-text-muted">{rental.price}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${rental.status === 'Active' ? 'bg-success/20 text-success' : 'bg-border text-text-muted'}`}>
                            {rental.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <button className={`text-sm font-bold flex items-center gap-1 ${rental.status === 'Active' ? 'text-accent-gold hover:text-accent-gold-hover' : 'text-text-primary hover:text-accent-gold'}`}>
                            {rental.status === 'Active' ? <Play className="w-4 h-4" /> : null} {rental.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-8 pb-20 md:pb-0">
              <h1 className="font-display text-3xl font-bold mb-6">My Reviews</h1>
              <div className="space-y-6">
                {[
                  { title: 'Dune: Part Two', date: 'Mar 05, 2024', rating: 95, text: 'A monumental achievement in sci-fi cinema. Villeneuve delivers on every promise made in the first part.' },
                  { title: 'The Holdovers', date: 'Feb 16, 2024', rating: 88, text: 'Warm, funny, and deeply moving. Paul Giamatti gives one of his best performances.' },
                  { title: 'Past Lives', date: 'Jan 10, 2024', rating: 92, text: 'A beautifully restrained exploration of what could have been. Heartbreakingly real.' },
                ].map((review, i) => (
                  <div key={i} className="bg-bg-secondary border border-border rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg">{review.title}</h3>
                        <p className="text-sm text-text-muted">{review.date}</p>
                      </div>
                      <div className="bg-bg-primary px-3 py-1 rounded font-bold text-accent-gold border border-border">{review.rating}/100</div>
                    </div>
                    <p className="italic text-text-muted">&quot;{review.text}&quot;</p>
                    <div className="mt-4 flex gap-4">
                      <button className="text-sm text-text-muted hover:text-accent-gold transition-colors">Edit</button>
                      <button className="text-sm text-danger hover:text-danger/80 transition-colors">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-8 pb-20 md:pb-0 max-w-2xl">
              <h1 className="font-display text-3xl font-bold mb-6">Account Settings</h1>
              
              <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-6">
                <h2 className="font-display text-xl font-bold border-b border-border pb-2">Profile</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">First Name</label>
                    <input type="text" defaultValue="Alex" className="w-full bg-bg-primary border border-border rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-gold" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Last Name</label>
                    <input type="text" defaultValue="Chen" className="w-full bg-bg-primary border border-border rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-gold" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-text-muted mb-1">Email Address</label>
                    <input type="email" defaultValue="alex.chen@example.com" className="w-full bg-bg-primary border border-border rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-accent-gold" />
                  </div>
                </div>
                <button className="bg-bg-primary border border-border hover:border-accent-gold text-text-primary px-6 py-2 rounded-lg font-bold transition-colors">Save Changes</button>
              </div>

              <div className="bg-bg-secondary border border-border rounded-xl p-6 space-y-6">
                <h2 className="font-display text-xl font-bold border-b border-border pb-2">Subscription</h2>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-lg">ReelVault Pro</div>
                    <div className="text-sm text-text-muted">$9.99/month</div>
                  </div>
                  <span className="bg-success/20 text-success px-3 py-1 rounded-full text-xs font-bold">Active</span>
                </div>
                <p className="text-sm text-text-muted">Your next billing date is April 12, 2024.</p>
                <div className="flex gap-4">
                  <button className="bg-bg-primary border border-border hover:border-accent-gold text-text-primary px-6 py-2 rounded-lg font-bold transition-colors">Manage Billing</button>
                  <button className="text-danger hover:underline text-sm font-medium">Cancel Subscription</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
