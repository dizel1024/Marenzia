'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#0a0a0a] font-sans rtl selection:bg-black/5" dir="rtl">
      {/* 1. Iconic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <Image
            src="/assets/images/home_hero.png"
            alt="Sculptural stone bathtub"
            fill
            className="w-full h-full object-cover opacity-60 grayscale transition-all duration-[2s] hover:scale-110 hover:grayscale-0 will-change-transform"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 group-hover:bg-black/20 transition-all duration-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-72 h-16 md:w-[800px] md:h-40 mb-8 mx-auto"
          >
            <Image
              src="/assets/images/whitelogo.webp"
              alt="Marenzia"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-12 font-light"
          >
            יוקרה מפוסלת לחללי פנים אדריכליים.
          </motion.p>
          <Link href="/collections" className="inline-block" suppressHydrationWarning>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white text-[11px] tracking-[0.3em] uppercase py-5 px-12 rounded-none hover:bg-white hover:text-black transition-all duration-500 cursor-pointer text-center"
            >
              חקור קולקציות
            </motion.div>
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em]">גלול</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
            />
          </div>
        </div>
      </section>

      {/* 2. Mosaic Grid Section */}
      <section className="relative py-24 px-4 lg:px-12 bg-[#f7f7f7]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-12 gap-4 h-auto lg:h-[120vh]">

            {/* Stone - Large Panel */}
            <Link href="/stone" className="group relative col-span-12 lg:col-span-7 row-span-2 overflow-hidden bg-zinc-200" suppressHydrationWarning>
              <Image
                src="/assets/images/home_mosaic_stone.png"
                alt="Architectural stone"
                fill
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 px-16 text-center">
                <h4 className="text-white text-5xl font-serif italic mb-8">אבן</h4>
                <p className="text-white/80 text-lg leading-relaxed max-w-sm italic mb-6">"מינימליזם המפגש עם היופי הגולמי של אבן טבעית."</p>
                <div className="w-12 h-px bg-white/30 mb-6"></div>
                <p className="text-[10px] text-white/50 tracking-[0.4em] uppercase">אמנות האיפוק</p>
              </div>
              <div className="absolute bottom-10 right-10 text-white group-hover:opacity-0 transition-opacity">
                <h4 className="text-3xl font-serif italic">אבן</h4>
              </div>
            </Link>

            {/* Decor - Small Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative col-span-12 lg:col-span-5 row-span-1 overflow-hidden bg-zinc-200"
            >
              <Link href="/decor" suppressHydrationWarning>
                <Image
                  src="/assets/images/home_mosaic_decor.png"
                  alt="Minimalist decor"
                  fill
                  className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-110 group-hover:grayscale-0 will-change-transform"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 px-12 text-center" suppressHydrationWarning>
                  <h4 className="text-white text-3xl font-serif italic mb-4">דקור</h4>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs italic mb-4">"אובייקטים המגדירים את המרחב דרך צורה וחומר."</p>
                  <div className="w-8 h-px bg-white/30 mb-4"></div>
                  <p className="text-[8px] text-white/50 tracking-[0.4em] uppercase">Marenzia Objects</p>
                </div>
                <div className="absolute bottom-6 right-6 text-white group-hover:opacity-0 transition-opacity">
                  <h4 className="text-xl font-serif italic">דקור</h4>
                </div>
              </Link>
            </motion.div>

            {/* Bath - Medium Panel */}
            <Link href="/bath" className="group relative col-span-12 lg:col-span-5 row-span-2 overflow-hidden bg-zinc-200" suppressHydrationWarning>
              <Image
                src="/assets/images/home_mosaic_bath.png"
                alt="Minimalist bath"
                fill
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 px-16 text-center">
                <h4 className="text-white text-5xl font-serif italic mb-8">אמבט</h4>
                <p className="text-white/80 text-lg leading-relaxed max-w-sm italic mb-6">"כל פריט הוא עדות לאלגנטיות אדריכלית נצחית, שבה השתיקה מדברת חזק יותר מקישוט."</p>
                <div className="w-12 h-px bg-white/30 mb-6"></div>
                <p className="text-[10px] text-white/50 tracking-[0.4em] uppercase">אמנות האיפוק</p>
              </div>
              <div className="absolute bottom-10 right-10 text-white group-hover:opacity-0 transition-opacity">
                <h4 className="text-3xl font-serif italic">אמבט</h4>
              </div>
            </Link>

            {/* Projects - Wide Panel */}
            <Link href="/projects" className="group relative col-span-12 lg:col-span-7 row-span-1 overflow-hidden bg-zinc-200" suppressHydrationWarning>
              <Image
                src="/assets/images/home_mosaic_surfaces.png"
                alt="Architectural projects"
                fill
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-105 group-hover:grayscale-0 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 px-16 text-center">
                <h4 className="text-white text-5xl font-serif italic mb-8">פרויקטים</h4>
                <p className="text-white/80 text-lg leading-relaxed max-w-sm italic mb-6">"דיאלוג בין חומר, צורה וחלל."</p>
                <div className="w-12 h-px bg-white/30 mb-6"></div>
                <p className="text-[10px] text-white/50 tracking-[0.4em] uppercase">אמנות האיפוק</p>
              </div>
              <div className="absolute bottom-10 right-10 text-white group-hover:opacity-0 transition-opacity">
                <h4 className="text-3xl font-serif italic">פרויקטים</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Collections Horizontal Wall */}
      <section className="py-40 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="px-6 lg:px-20 mb-20 max-w-[1440px] mx-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.5em] text-white/40 uppercase mb-4">קולקציות ופרספקטיבה</p>
            <h3 className="text-5xl md:text-7xl font-serif italic">קולקציות נבחרות</h3>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40">גלול לחקירה</span>
            <div className="w-32 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                animate={{ x: [-128, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-white/30"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-12 overflow-x-auto no-scrollbar px-6 lg:px-20 pb-20 snap-x snap-mandatory">

          {/* Collection 01 */}
          <div className="min-w-[90vw] lg:min-w-[1200px] bg-black border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden snap-center group">
            <div className="lg:col-span-7 h-[450px] lg:h-[700px] relative overflow-hidden">
              <Image
                src="/assets/images/home_collection_carrara.png"
                alt="Carrara Series"
                fill
                className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <div className="lg:col-span-5 p-16 lg:p-24 flex flex-col justify-center space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-xs font-light text-white/30 tracking-[0.4em]">קולקציה 01</span>
                <div className="w-16 h-px bg-white/10"></div>
              </div>
              <h5 className="text-5xl font-serif italic tracking-tight">סדרת קרארה</h5>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                מצוינות מינימליסטית הפוגשת את היופי הגולמי של אבן טבעית. כל פריט הוא עדות לאלגנטיות אדריכלית נצחית, שבה השתיקה מדברת חזק יותר מקישוט.
              </p>
              <div className="pt-12 flex items-center justify-between border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">טוהר בחומר</p>
                <Link href="/collections" className="flex items-center gap-3 text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors group/btn" suppressHydrationWarning>
                  צפה בפרטים
                  <motion.span whileHover={{ x: 3, y: -3 }} className="material-symbols-outlined text-sm">north_east</motion.span>
                </Link>
              </div>
            </div>
          </div>

          {/* Collection 02 */}
          <div className="min-w-[90vw] lg:min-w-[1200px] bg-black border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden snap-center group">
            <div className="lg:col-span-7 h-[450px] lg:h-[700px] relative overflow-hidden">
              <Image
                src="/assets/images/home_collection_obsidian.png"
                alt="Obsidian Mono"
                fill
                className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            <div className="lg:col-span-5 p-16 lg:p-24 flex flex-col justify-center space-y-10">
              <div className="flex items-center gap-6">
                <span className="text-xs font-light text-white/30 tracking-[0.4em]">קולקציה 02</span>
                <div className="w-16 h-px bg-white/10"></div>
              </div>
              <h5 className="text-5xl font-serif italic tracking-tight">מונו אובסידיאן</h5>
              <p className="text-xl text-white/50 font-light leading-relaxed">
                דיאלוג בין עומק לאור. מונו אובסידיאן חוקר את השתיקה העמוקה של משטחים אדריכליים כהים, שעוצבו עבור חללים הדורשים נוכחות מוחלטת.
              </p>
              <div className="pt-12 flex items-center justify-between border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">קולקציית 2024</p>
                <Link href="/collections" className="flex items-center gap-3 text-[10px] uppercase tracking-widest hover:text-white/60 transition-colors group/btn">
                  צפה בפרטים
                  <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="px-6 lg:px-20 max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-white/5 relative">
            <div className="absolute top-0 right-0 w-1/3 h-px bg-white/20"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
