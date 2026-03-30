import Image from 'next/image';
import Link from 'next/link';
import { Star, Play, Plus } from 'lucide-react';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  rating: number;
  price?: number;
  isPro?: boolean;
  posterUrl: string;
  genre: string;
}

export function MovieCard({ id, title, year, rating, price, isPro, posterUrl, genre }: MovieCardProps) {
  return (
    <Link href={`/movie/${id}`} className="group relative block w-full aspect-[2/3] rounded-lg overflow-hidden bg-bg-secondary transition-transform duration-500 hover:-translate-y-2 hover:shadow-glow-gold">
      <Image
        src={posterUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Top Badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        <div className="bg-bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1 border border-border/50">
          <Star className="w-3 h-3 text-accent-gold fill-accent-gold" />
          {rating.toFixed(1)}
        </div>
      </div>
      <div className="absolute top-3 right-3">
        {isPro ? (
          <div className="bg-accent-gold text-bg-primary px-2 py-1 rounded text-xs font-bold shadow-lg">PRO</div>
        ) : price ? (
          <div className="bg-bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold border border-border/50">${price}</div>
        ) : null}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="text-xs text-accent-gold font-semibold mb-1 uppercase tracking-wider">{genre}</div>
        <h3 className="font-display text-lg font-bold leading-tight mb-1 line-clamp-2">{title}</h3>
        <div className="text-sm text-text-muted mb-4">{year}</div>
        
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <button className="flex-1 bg-accent-gold hover:bg-accent-gold-hover text-bg-primary py-2 rounded text-sm font-bold flex items-center justify-center gap-1 transition-colors">
            <Play className="w-4 h-4" /> Rent
          </button>
          <button className="w-10 h-10 bg-bg-secondary/80 hover:bg-bg-secondary border border-border rounded flex items-center justify-center text-text-primary transition-colors backdrop-blur-sm">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
