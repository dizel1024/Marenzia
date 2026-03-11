'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  Menu, 
  ArrowLeft, 
  ArrowRight,
  Square,
  Instagram,
  Linkedin
} from 'lucide-react';

const collections = [
  {
    id: 1,
    slug: 'monolith',
    title: 'סדרת המונולית',
    category: 'אבן אדריכלית / בזלת כהה',
    image: '/assets/images/img_4e9fc4a0ac29.webp'
  },
  {
    id: 2,
    slug: 'ethereal',
    title: 'אגן אתרי',
    category: 'כלים סניטריים / אבולוציית קרארה',
    image: '/assets/images/img_90bcd2935e2e.webp'
  },
  {
    id: 3,
    slug: 'obsidian',
    title: 'טקסטורות אובסידיאן',
    category: 'ריהוט / זכוכית וולקנית',
    image: '/assets/images/img_106de601b121.webp'
  },
  {
    id: 4,
    slug: 'travertine',
    title: 'מהות הטרברטין',
    category: 'משטחים אנכיים / גידים גולמיים',
    image: '/assets/images/img_fc6e729c5caa.webp'
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1440px] mx-auto pt-32">
        {/* Grid Content */}
        <section className="p-8 lg:p-16">
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl lg:text-7xl mb-6 italic font-light tracking-tight"
            >
              קולקציות
            </motion.h1>
            <p className="text-sm max-w-lg leading-relaxed text-black/60 uppercase tracking-widest">
              מבחר אוצר של משטחים אדריכליים וצורות אבן עכשוויות, המאזנים נוכחות מונוליטית עם חן אתרי.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {collections.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/collections/${item.slug}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-8 flex flex-col items-center text-center">
                    <h3 className="font-serif text-3xl mb-2">{item.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">{item.category}</p>
                    <div className="h-px w-8 bg-black mt-6 transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Pagination */}
          <div className="mt-32 pt-16 border-t border-black/10 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center border border-black text-[11px] font-bold">01</button>
              <button className="w-10 h-10 flex items-center justify-center border border-black/10 text-[11px] hover:border-black transition-colors">02</button>
              <button className="w-10 h-10 flex items-center justify-center border border-black/10 text-[11px] hover:border-black transition-colors">03</button>
            </div>
            <button className="flex items-center gap-4 group">
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold">הבא</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
            </button>
          </div>
        </section>
      </main>

      
    </div>
  );
}
