'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">


      <main className="pt-32">
        <section className="relative h-[80vh] w-full overflow-hidden bg-black">
          <div className="absolute inset-0 bg-cover bg-center grayscale brightness-75 transition-transform duration-1000 scale-105" style={{ backgroundImage: "url('/assets/images/img_13e3f89e94f3.webp')" }}></div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="font-serif text-7xl md:text-[8rem] text-white/90 text-center leading-none">
              Azure <br/> <span className="italic">Coastal Villa</span>
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-32 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-8 text-right">
              <h2 className="font-serif text-4xl md:text-5xl italic leading-tight text-black/80">
                &quot;האור מגדיר את האבן, מעניק משקל לריק וקול לצורה המונוליטית.&quot;
              </h2>
              <p className="mt-16 text-lg font-light leading-relaxed text-black/60 max-w-xl">
                וילה על קו החוף, מגורים אלו משמשים כמקלט של מינרלים ואור. כל משטח נבחר בקפידה כדי להבטיח המשכיות קצבית בין חללי המגורים לסביבות החוץ האינטימיות. התוצאה היא נרטיב אדריכלי חלק של יוקרה ואיפוק.
              </p>
            </div>
            <div className="md:col-span-4 space-y-10 pt-4 text-right">
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">מיקום</p>
                <p className="text-sm font-medium">מאליבו, קליפורניה</p>
              </div>
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">אדריכל</p>
                <p className="text-sm font-medium">סטודיו סטפן ארקאס</p>
              </div>
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">שנה</p>
                <p className="text-sm font-medium">2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="mx-auto max-w-[1800px] px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-40">
              <div className="md:col-span-8 aspect-[16/10] overflow-hidden">
                <Image alt="Architectural stone detail" width={1200} height={800} className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105" src="/assets/images/img_c4c407d8b8f7.webp"/>
              </div>
              <div className="md:col-span-3 md:col-start-10 text-right">
                <div className="group cursor-pointer border border-black/5 p-8 bg-white">
                  <div className="aspect-square mb-6 overflow-hidden bg-zinc-100">
                    <Image alt="Product detail" width={400} height={400} className="h-full w-full object-cover grayscale brightness-110" src="/assets/images/img_69be383dc846.webp"/>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">מוצר מס&apos; 01</span>
                  <h3 className="font-serif text-2xl mt-2 mb-6">Monolith Vessel</h3>
                  <Link className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 w-fit group-hover:border-black transition-all" href="/bath/product-1">
                    צפה בקולקציה <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-40">
              <div className="md:col-span-3 md:col-start-2 text-right order-2 md:order-1">
                <div className="group cursor-pointer border border-black/5 p-8 bg-white">
                  <div className="aspect-square mb-6 overflow-hidden bg-zinc-100">
                    <Image alt="Product detail" width={400} height={400} className="h-full w-full object-cover grayscale brightness-110" src="/assets/images/img_13e3f89e94f3.webp"/>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">מוצר מס&apos; 04</span>
                  <h3 className="font-serif text-2xl mt-2 mb-6">Infinite Basin</h3>
                  <Link className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 w-fit group-hover:border-black transition-all" href="/bath/product-2">
                    צפה בקולקציה <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7 aspect-[4/5] overflow-hidden order-1 md:order-2">
                <Image alt="Stone architectural shot" width={800} height={1000} className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105" src="/assets/images/img_6ffab66ff533.webp"/>
              </div>
            </div>

            <div className="w-full aspect-[21/9] overflow-hidden mb-40 relative group">
              <Image alt="Penthouse view" width={1800} height={800} className="h-full w-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:scale-110" src="/assets/images/img_a4d4fb32a3e9.webp"/>
            </div>

            <Link href="/projects/the-monolith-hotel" className="bg-black text-white py-32 overflow-hidden relative group cursor-pointer block">
              <div className="absolute inset-0 opacity-20 grayscale transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/assets/images/img_c4c407d8b8f7.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="mx-auto max-w-[1440px] px-8 relative z-10 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] mb-8 text-white/50">הפרויקט הבא</span>
                <h2 className="font-serif text-5xl md:text-8xl italic text-center transition-transform duration-500 group-hover:-translate-y-2">The Monolith Hotel</h2>
                <div className="mt-12 h-px w-24 bg-white/30 group-hover:w-48 transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      
    </div>
  );
}
