'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Menu,
  Square,
  Instagram,
  Linkedin,
  ArrowLeft,
  ChevronDown
} from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-[#080c0d] text-slate-100 selection:bg-[#149cb8]/30 font-sans" dir="rtl">
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <Image
              src="/assets/images/img_92084469d381.webp"
              alt="Master carving marble"
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
              המניפסט השקט
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
            >
              ״השתיקה היא החומר <br />
              <span className="italic text-[#149cb8]/80">החזק</span> ביותר שלנו.״
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 max-w-2xl mx-auto text-slate-400 font-light leading-relaxed text-lg"
            >
              בעידן של רעש, אנו מוצאים כוח במה שלא נאמר. מַרֶנְזִיָה אינה עוסקת רק במשטחים; היא האוצרות של השקט. אנו הופכים אבן גולמית לשירה אדריכלית, מכבדים את המסע של מיליון שנה מהאדמה אל המקדש שלך.
            </motion.p>
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
              { year: '1924', title: 'החציבה הראשונה', img: '/assets/images/img_bca9da9a0090.webp' },
              { year: '1948', title: 'סדנת המאסטר', img: '/assets/images/img_07bfec56a32b.webp' },
              { year: '1965', title: 'אופקים גלובליים', img: '/assets/images/img_c5957e3de084.webp' },
              { year: '1982', title: 'החומר הטהור', img: '/assets/images/img_e0078a8310f5.webp' }
            ].map((item, idx) => (
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
                    src={item.img}
                    alt={item.title}
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
                  src="/assets/images/img_256ac227f6e9.webp"
                  alt="Master stone craftsman"
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
                >
                  מונחה על ידי היד, <br />לא הכלי
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-slate-400 font-light leading-relaxed max-w-md"
                >
                  כל לוח שנכנס לאטלייה שלנו מטופל כישות חיה. אמני המאסטר שלנו מקשיבים לגידים ולסדקים, ומבטיחים שהנשמה הטבעית של האבן לעולם לא תאבד לייצור מודרני.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full aspect-video grayscale brightness-110 contrast-125 overflow-hidden relative"
              >
                <Image
                  src="/assets/images/img_2add46ef9f45.webp"
                  alt="Marble texture"
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
                { title: 'אומנות', desc: 'ידע דורי פוגש דיוק עכשווי. אנחנו לא רק חותכים; אנחנו מלחינים.' },
                { title: 'דיוק', desc: 'סובלנות הנמדדת במיקרונים. שלמות היא הסטנדרט היחיד שאנו מכירים.' },
                { title: 'שתיקה', desc: 'האסתטיקה של החיסור. אנו מסירים את המיותר כדי לחשוף את המהותי.' },
                { title: 'אור', desc: 'אבן היא כלום ללא משחקי האור. הגימורים שלנו נועדו לרקוד איתו.' }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-12 md:py-0 md:px-12 text-center md:text-right"
                >
                  <h4 className="font-serif text-2xl text-slate-100 mb-6 tracking-wide">{value.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed tracking-wide">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Styled for Dark Theme but keeping structure */}

      </main>
    </div>
  );
}
