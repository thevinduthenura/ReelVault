import Link from 'next/link';
import { Film, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Film className="w-6 h-6 text-accent-gold" />
              <span className="font-display text-xl font-bold tracking-wider">ReelVault</span>
            </Link>
            <p className="text-text-muted text-sm mb-6 max-w-sm">
              Cinema without compromise. Curated films for the true enthusiast, available to rent or stream unlimited.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted hover:text-accent-gold transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-text-muted hover:text-accent-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-text-muted hover:text-accent-gold transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/browse" className="text-text-muted hover:text-accent-gold text-sm transition-colors">All Films</Link></li>
              <li><Link href="/browse?filter=new" className="text-text-muted hover:text-accent-gold text-sm transition-colors">New Releases</Link></li>
              <li><Link href="/browse?genre=documentary" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Documentaries</Link></li>
              <li><Link href="/browse?genre=world" className="text-text-muted hover:text-accent-gold text-sm transition-colors">World Cinema</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Account</h4>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Pricing & Plans</Link></li>
              <li><Link href="/dashboard" className="text-text-muted hover:text-accent-gold text-sm transition-colors">My Dashboard</Link></li>
              <li><Link href="/dashboard" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Watchlist</Link></li>
              <li><Link href="/signup" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Sign In</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-gold text-sm transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} ReelVault. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-muted text-sm">Subscribe to our newsletter</span>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-bg-secondary border border-border rounded-l-md px-3 py-1.5 text-sm focus:outline-none focus:border-accent-gold" />
              <button className="bg-accent-gold text-bg-primary px-3 py-1.5 rounded-r-md text-sm font-semibold hover:bg-accent-gold-hover transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
