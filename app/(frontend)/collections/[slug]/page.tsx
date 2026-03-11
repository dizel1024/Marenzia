'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Square,
  Instagram,
  Linkedin,
  ArrowLeft,
  Menu
} from 'lucide-react';

export default function CollectionInnerPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Full-bleed Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/assets/images/img_35e545f59622.webp"
            alt="Architectural space"
            fill
            className="object-cover grayscale contrast-125"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-20 right-10 lg:right-20 text-white z-10 text-right">
          <p className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">קולקציית 2024</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-6 uppercase">ANTHEIA</h1>
          <div className="w-24 h-px bg-white/40 mr-auto ml-0"></div>
        </div>
      </section>

      {/* Concept Text Section */}
      <section className="bg-[#f7f7f7] py-32 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-black/40 text-xs uppercase tracking-widest mb-8 block">הקונספט</span>
          <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-black">
            דיאלוג בין קביעות גיאולוגית לטבע החולף של האור. אנתיה חוקרת את המפגש בין צורות אבן מונוליטיות לנפחים אדריכליים זורמים.
          </h2>
          <div className="mt-16 flex justify-center gap-12">
            <button className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black/20 hover:border-black transition-all pb-1">בקש דף מפרט</button>
          </div>
        </div>
      </section>

      {/* Rhythmic Product Gallery */}
      <section className="px-6 lg:px-20 pb-32">
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
          {/* Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative"
          >
            <Image 
              src="/assets/images/img_843bf57f42dc.webp"
              alt="Monolithic stone bathtub"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Small Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-4 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative"
          >
            <Image 
              src="/assets/images/img_08ee990bb352.webp"
              alt="Marble texture detail"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Small Image Offset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-12 lg:col-span-4 lg:col-start-2 aspect-[1/1] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative"
          >
            <Image 
              src="/assets/images/img_3a811565cf08.webp"
              alt="Architectural kitchen island"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Large Vertical */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-12 lg:col-span-6 lg:col-start-7 aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 lg:-mt-20 relative"
          >
            <Image 
              src="/assets/images/img_dfc6e2aaa0e5.webp"
              alt="Dramatic light on stone"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Finishes Strip */}
      <section className="border-t border-b border-black/10 py-12 px-6 lg:px-20 mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-shrink-0">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">גימורים זמינים</span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {[
              { name: 'קרארה מושחז', color: '#E5E5E5' },
              { name: 'נרו מרקווינה', color: '#1A1A1A' },
              { name: 'טרברטין כסף', color: '#D4CFC9' },
              { name: 'בזלת מותזת', color: '#3D3D3D' },
              { name: 'לבן קרח', color: '#F0EFEB' }
            ].map((finish) => (
              <div key={finish.name} className="flex flex-col items-center gap-3 group cursor-pointer">
                <div 
                  style={{ backgroundColor: finish.color }}
                  className="w-8 h-8 rounded-full border border-black/10 outline outline-offset-4 outline-transparent group-hover:outline-black/20 transition-all"
                ></div>
                <span className="text-[9px] uppercase tracking-widest font-medium">{finish.name}</span>
              </div>
            ))}
          </div>
          <div className="hidden lg:block w-32"></div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-32 px-6 text-center">
        <h3 className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50">התעניינות ב-ANTHEIA</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="min-w-[280px] bg-black text-white py-5 px-10 text-xs uppercase tracking-widest font-bold hover:scale-[1.02] transition-transform">
            תיאום ייעוץ אדריכלי
          </button>
          <button className="min-w-[280px] border border-black text-black py-5 px-10 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all">
            בקש ערכת מפרט מלאה
          </button>
        </div>
      </section>

      {/* Main Footer */}
      
    </div>
  );
}
