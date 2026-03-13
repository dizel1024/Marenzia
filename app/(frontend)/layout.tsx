import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { InspirationProvider } from '@/components/InspirationContext';
import InspirationDrawer from '@/components/InspirationDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Marenzia | מַרֶנְזִיָה',
  description: 'יוקרה מפוסלת לחללי פנים אדריכליים.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased bg-[#f7f7f7] text-[#0a0a0a]">
        <script src="https://widget.tabnav.com/limited-widget.min.js.gz" data-config='{"language":"he","color":"#405ec3","buttonColor":"#0a0a0a","buttonSize":"small","widgetSize":"small","widgetLocation":"right","buttonLocation":"bottom"}' defer></script>
        <noscript> פתרונות נגישות לאתרי אינטרנט לפי התקן הישראלי 5568<a href="https://tabnav.com/he">הנגשת אתרים</a> </noscript>
        <InspirationProvider>
          <Navbar />
          <InspirationDrawer />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </InspirationProvider>
      </body>
    </html>
  );
}
