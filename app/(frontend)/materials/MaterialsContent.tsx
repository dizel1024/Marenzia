'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface MaterialsPageData {
  heroImage: { url: string };
  heroTitle: string;
  heroSubtitle: string;
  storyTitle1: string;
  storyText1: string;
  storyImage1: { url: string };
  storyTitle2: string;
  storyText2: string;
  storyImage2: { url: string };
  sourcingTitle: string;
  sourcingText: string;
}

export default function MaterialsContent({ data }: { data: MaterialsPageData }) {
  if (!data) return null;

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

      {/* Story Sections */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32 space-y-48 lg:space-y-64">
        {/* Story 1 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">01 / תהליך</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">{data.storyTitle1}</h2>
            <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">
              {data.storyText1}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 aspect-[4/5] relative grayscale overflow-hidden group"
          >
            <Image
              src={data.storyImage1?.url || "/assets/images/stone_verde_alpi.jpg"}
              alt={data.storyTitle1}
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Story 2 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative grayscale overflow-hidden group"
          >
            <Image
              src={data.storyImage2?.url || "/assets/images/process_advisory_v2.png"}
              alt={data.storyTitle2}
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">02 / דיוק</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">{data.storyTitle2}</h2>
            <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">
              {data.storyText2}
            </p>
          </motion.div>
        </section>
      </main>

      {/* Sourcing Section */}
      <section className="bg-black text-white py-48 px-6 text-center overflow-hidden w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-light italic leading-tight uppercase tracking-widest text-[#149cb8]">
            {data.sourcingTitle}
          </h2>
          <div className="text-white/60 text-sm md:text-base font-light leading-loose max-w-2xl mx-auto">
            {data.sourcingText?.split('|').map((line, i) => (
              <p key={i} className="mb-4">{line.trim()}</p>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
