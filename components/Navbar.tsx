'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, Square, ChevronDown, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInspiration } from './InspirationContext';

export default function Navbar() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const { savedItems, openDrawer } = useInspiration();

  const bathCategories = [
    { name: 'כיורי רחצה', href: '/bath?category=basins', image: '/assets/images/nav_bath_basins_color.png' },
    { name: 'ארון אמבטיה', href: '/bath?category=vanity', image: '/assets/images/nav_bath_vanity_color.png' },
    { name: 'ארונות אחסון ומדפים', href: '/bath?category=storage', image: '/assets/images/nav_bath_storage_color.png' },
    { name: 'אביזרי אמבטיה', href: '/bath?category=accessories', image: '/assets/images/nav_bath_accessories_color.png' },
    { name: 'ברזים ואביזרים', href: '/bath?category=taps', image: '/assets/images/nav_bath_taps_color.png' },
  ];

  const decorCategories = [
    { name: 'ניחוחות ומחזיקי נרות', href: '/decor?category=fragrance', image: '/assets/images/nav_decor_fragrance.png' },
    { name: 'מתלים וווים', href: '/decor?category=racks', image: '/assets/images/nav_decor_racks.png' },
    { name: 'תאורה', href: '/decor?category=lighting', image: '/assets/images/nav_decor_lighting.png' },
    { name: 'מראות', href: '/decor?category=mirrors', image: '/assets/images/nav_decor_mirrors.png' },
    { name: 'אביזרים לבית', href: '/decor?category=home-accessories', image: '/assets/images/nav_decor_home_acc.png' },
  ];

  const navLinks = [
    { name: 'קולקציות', href: '/collections' },
    { name: 'אבן', href: '/stone' },
    { name: 'תהליך', href: '/process' },
    { name: 'הסיפור שלנו', href: '/about' },
    { name: 'אמבט', href: '/bath', dropdownId: 'bath' },
    { name: 'דקור', href: '/decor', dropdownId: 'decor' },
    { name: 'פרויקטים', href: '/projects' },
    { name: 'בחרנו בנו', href: '/chose-us' },
    { name: 'צור קשר', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 lg:px-20 py-6 border-b border-white/10 bg-black [transform:translateZ(0)]" onMouseLeave={() => setActiveDropdown(null)}>
      <Link href="/" className="flex items-center group" suppressHydrationWarning>
        <div className="relative w-40 h-8 md:w-64 md:h-12 transition-transform group-hover:scale-105 will-change-transform">
          <Image
            src="/assets/images/whitelogo.webp"
            alt="Marenzia Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-8 xl:gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          if (link.dropdownId) {
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.dropdownId as string)}
              >
                <Link
                  href={link.href}
                  suppressHydrationWarning
                  className={`text-[11px] xl:text-[12px] uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-1 ${isActive ? 'text-[#149cb8]' : 'text-white hover:text-[#149cb8]'
                    }`}
                >
                  {link.name}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.dropdownId ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            );
          }
          return (
            <Link
              key={link.name}
              href={link.href}
              suppressHydrationWarning
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors ${isActive ? 'text-[#149cb8]' : 'text-white hover:text-[#149cb8]'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <AnimatePresence>
        {activeDropdown === 'bath' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-12 px-20 shadow-2xl"
            onMouseEnter={() => setActiveDropdown('bath')}
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-5 gap-8">
              {bathCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group flex flex-col gap-4"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 relative">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold group-hover:text-[#149cb8] transition-colors">{cat.name}</p>
                    <div className="w-0 h-[1px] bg-[#149cb8] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeDropdown === 'decor' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-12 px-20 shadow-2xl"
            onMouseEnter={() => setActiveDropdown('decor')}
          >
            <div className="max-w-[1440px] mx-auto grid grid-cols-5 gap-8">
              {decorCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group flex flex-col gap-4"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 relative">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold group-hover:text-[#149cb8] transition-colors">{cat.name}</p>
                    <div className="w-0 h-[1px] bg-[#149cb8] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-6">
        <button onClick={openDrawer} className="relative text-white hover:text-[#149cb8] transition-colors">
          <Heart className="w-5 h-5" />
          {savedItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#149cb8] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
              {savedItems.length}
            </span>
          )}
        </button>
        <Link href="/contact" className="hidden lg:block border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase py-3 px-6 hover:bg-white hover:text-[#080c0d] transition-all" suppressHydrationWarning>
          תיאום ייעוץ
        </Link>
        <MenuIcon className="w-5 h-5 cursor-pointer md:hidden text-white" />
      </div>
    </header>
  );
}
