import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIChatWidget } from '@/components/AIChatWidget';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'ReelVault | Cinema without compromise',
  description: 'Premium movie review and rental platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-body antialiased selection:bg-accent-gold selection:text-bg-primary">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}
