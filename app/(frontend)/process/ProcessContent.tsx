'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ProcessPageData {
  heroImage: { url: string };
  heroTitle: string;
  heroSubtitle: string;
  sectionLabel1: string; sectionTitle1: string; sectionText1: string; sectionImage1: { url: string };
  sectionLabel2: string; sectionTitle2: string; sectionText2: string; sectionImage2: { url: string };
  sectionLabel3: string; sectionTitle3: string; sectionText3: string; sectionImage3: { url: string };
  sectionLabel4: string; sectionTitle4: string; sectionText4: string; sectionImage4: { url: string };
  feature1: string; feature2: string; feature3: string;
  executionLogisticTitle: string; executionLogisticText: string;
  executionAdvisoryTitle: string; executionAdvisoryText: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export default function ProcessContent({ data }: { data: ProcessPageData }) {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#0a0a0a] font-sans rtl" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 grayscale contrast-125">
          <Image
            src={data.heroImage?.url || "/assets/images/process_hero_v2.png"}
            alt={data.heroTitle}
            fill
            className="object-cover will-change-transform"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-5xl md:text-8xl mb-8 font-light italic tracking-tight"
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-2xl mx-auto leading-loose"
          >
            {data.heroSubtitle}
          </motion.p>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50">
            <ChevronDown className="w-8 h-8 animate-bounce font-thin" />
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32 space-y-48 lg:space-y-64">
        {[
          { label: data.sectionLabel1, title: data.sectionTitle1, body: data.sectionText1, image: data.sectionImage1?.url },
          { label: data.sectionLabel2, title: data.sectionTitle2, body: data.sectionText2, image: data.sectionImage2?.url },
          { label: data.sectionLabel3, title: data.sectionTitle3, body: data.sectionText3, image: data.sectionImage3?.url },
          { label: data.sectionLabel4, title: data.sectionTitle4, body: data.sectionText4, image: data.sectionImage4?.url }
        ].filter(s => s.title).map((section, idx) => (
          <section key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${idx % 2 === 0 ? 'order-2 lg:order-1' : ''} space-y-8`}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">{section.label}</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">{section.title}</h2>
              <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">
                {section.body}
              </p>
              
              {/* Features list for Synergy section (index 2) */}
              {idx === 2 && (data.feature1 || data.feature2) && (
                <ul className="space-y-4 pt-6">
                  {[data.feature1, data.feature2, data.feature3].filter(Boolean).map((item, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#0a0a0a] font-bold">
                      <span className="size-1.5 bg-black rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Execution details for Execution section (index 3) */}
              {idx === 3 && (data.executionLogisticTitle || data.executionAdvisoryTitle) && (
                <div className="pt-8 grid grid-cols-2 gap-12 border-t border-black/5">
                  {[
                    { title: data.executionLogisticTitle, text: data.executionLogisticText },
                    { title: data.executionAdvisoryTitle, text: data.executionAdvisoryText }
                  ].filter(d => d.title).map((detail, dIdx) => (
                    <div key={dIdx}>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">{detail.title}</h4>
                      <p className="text-xs text-neutral-500 leading-relaxed font-light whitespace-pre-line">{detail.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-6">
                <button className="border-b border-black text-[10px] uppercase tracking-[0.3em] font-bold py-2 hover:opacity-50 transition-all">
                  {idx === 0 ? 'צפו באוסף החומרים' : idx === 1 ? '' : ''}
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`${idx % 2 === 0 ? 'order-1 lg:order-2' : ''} aspect-[4/5] relative grayscale overflow-hidden group`}
            >
              <Image
                src={section.image || "/assets/images/process_materiality_v2.png"}
                alt={section.title || "Process image"}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </section>
        ))}
      </main>

      {/* Legacy/CTA Section */}
      <section className="bg-black text-white py-48 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-light italic leading-tight">
            {data.ctaTitle}
          </h2>
          <p className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            {data.ctaSubtitle}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-white text-black px-16 py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all w-full md:w-auto">
              תאמו ייעוץ סטודיו
            </button>
            <button className="border border-white/20 text-white px-16 py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all w-full md:w-auto">
              הורידו פורטפוליו
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
