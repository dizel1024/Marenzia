'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface PhilosophyPageData {
  heroImage: { url: string };
  heroSubtitle: string;
  philosophyTitle: string;
  philosophyText: { html: string };
  heritageYear1: string; heritageTitle1: string; heritageImage1: { url: string };
  heritageYear2: string; heritageTitle2: string; heritageImage2: { url: string };
  heritageYear3: string; heritageTitle3: string; heritageImage3: { url: string };
  heritageYear4: string; heritageTitle4: string; heritageImage4: { url: string };
  atelierTitle: string;
  atelierText: { html: string };
  atelierMainImage: { url: string };
  atelierSecondaryImage: { url: string };
  valuesTitle1: string; valuesDesc1: string;
  valuesTitle2: string; valuesDesc2: string;
  valuesTitle3: string; valuesDesc3: string;
  valuesTitle4: string; valuesDesc4: string;
}

export default function PhilosophyContent({ data }: { data: PhilosophyPageData }) {
  return (
    <div className="min-h-screen bg-[#080c0d] text-slate-100 selection:bg-[#149cb8]/30 font-sans" dir="rtl">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
              src={data.heroImage?.url || "/assets/images/img_92084469d381.webp"}
              alt="Hero image"
              fill
              className="object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <div className="relative z-20 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-72 h-16 md:w-[800px] md:h-40 mx-auto mix-blend-difference"
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
              transition={{ delay: 0.6, duration: 1 }}
              className="text-white font-serif italic text-xl md:text-2xl mt-4 opacity-80 tracking-[0.3em] uppercase"
            >
              {data.heroSubtitle}
            </motion.p>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
            <ChevronDown className="text-white/50 w-8 h-8 font-thin" />
          </div>
        </section>

        {/* Section 1: Philosophy */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-[#080c0d] px-6 lg:px-10 py-32">
          <div className="max-w-6xl w-full text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#149cb8] text-xs font-bold tracking-[0.4em] uppercase mb-12 block"
            >
              פילוסופיה
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-slate-100 text-5xl md:text-8xl font-light leading-tight"
              dangerouslySetInnerHTML={{ __html: data.philosophyTitle.replace('<br />', '<br />') }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-lg prose prose-invert"
              dangerouslySetInnerHTML={{ __html: data.philosophyText.html }}
            />
          </div>
        </section>

        {/* Section 2: Heritage (Horizontal Scroll) */}
        <section className="bg-[#080c0d] py-32 border-t border-white/5 overflow-hidden">
          <div className="px-6 lg:px-20 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-[#149cb8] text-xs font-bold tracking-[0.4em] uppercase block mb-4">מורשת</span>
              <h3 className="font-serif text-4xl text-slate-100">מורשת האבן</h3>
            </div>
            <div className="text-slate-500 text-sm italic">קרארה ופיאטרסנטה, 1924 — היום</div>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 lg:px-20 pb-10 scroll-smooth">
            {[
              { year: data.heritageYear1, title: data.heritageTitle1, img: data.heritageImage1?.url },
              { year: data.heritageYear2, title: data.heritageTitle2, img: data.heritageImage2?.url },
              { year: data.heritageYear3, title: data.heritageTitle3, img: data.heritageImage3?.url },
              { year: data.heritageYear4, title: data.heritageTitle4, img: data.heritageImage4?.url }
            ].filter(i => i.title).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[450px] group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
                  <Image
                    src={item.img || "/assets/images/img_bca9da9a0090.webp"}
                    alt={item.title || "Heritage item"}
                    fill
                    className="object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 border-r border-[#149cb8]/40 pr-4">
                  <p className="text-xs tracking-widest uppercase text-[#149cb8] mb-1">{item.year}</p>
                  <p className="font-serif text-xl text-slate-200">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Atelier (Asymmetric) */}
        <section className="bg-[#080c0d] py-32 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 md:col-span-5 relative">
              <span className="text-[#149cb8] text-xs font-bold tracking-[0.4em] uppercase block mb-8">אטלייה</span>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] overflow-hidden grayscale brightness-90 shadow-2xl relative"
              >
                <Image
                  src={data.atelierMainImage?.url || "/assets/images/img_256ac227f6e9.webp"}
                  alt="Atelier main"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 hidden md:block w-2/3 h-1/2 border border-white/10 -z-10"></div>
            </div>
            <div className="col-span-12 md:col-span-7 flex flex-col gap-12">
              <div className="md:pr-20">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="font-serif text-4xl md:text-5xl text-slate-100 leading-tight mb-8"
                  dangerouslySetInnerHTML={{ __html: data.atelierTitle }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-slate-400 font-light leading-relaxed max-w-md prose prose-invert"
                  dangerouslySetInnerHTML={{ __html: data.atelierText.html }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full aspect-video grayscale brightness-110 contrast-125 overflow-hidden relative"
              >
                <Image
                  src={data.atelierSecondaryImage?.url || "/assets/images/img_2add46ef9f45.webp"}
                  alt="Atelier detail"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Values (Minimalist Grid) */}
        <section className="bg-[#080c0d] py-40 border-t border-white/5">
          <div className="px-6 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
              {[
                { title: data.valuesTitle1, desc: data.valuesDesc1 },
                { title: data.valuesTitle2, desc: data.valuesDesc2 },
                { title: data.valuesTitle3, desc: data.valuesDesc3 },
                { title: data.valuesTitle4, desc: data.valuesDesc4 }
              ].filter(v => v.title).map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-12 md:py-0 md:px-12 text-center md:text-right"
                >
                  <h4 className="font-serif text-2xl text-slate-100 mb-6 tracking-wide">{value.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed tracking-wide whitespace-pre-line">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
