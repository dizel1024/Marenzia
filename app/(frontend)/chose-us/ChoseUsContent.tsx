'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { architects } from './architects-data';

const gridConfig = [
  { colSpan: 'md:col-span-7', aspect: 'aspect-[4/5]', extra: '', delay: 0 },
  { colSpan: 'md:col-span-5', aspect: 'aspect-[3/4]', extra: 'md:pt-32', delay: 0.2 },
  { colSpan: 'md:col-span-4', aspect: 'aspect-square', extra: '', delay: 0 },
  { colSpan: 'md:col-span-8', aspect: 'aspect-[16/10]', extra: 'md:-mt-24', delay: 0.2 },
  { colSpan: 'md:col-span-6', aspect: 'aspect-[4/5]', extra: '', delay: 0 },
  { colSpan: 'md:col-span-6', aspect: 'aspect-[3/2]', extra: 'md:pt-48', delay: 0.2 },
];

export default function ChoseUsContent() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
      {/* Hero Title */}
      <section className="px-6 lg:px-20 pt-48 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1800px]">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.5em] text-black/30 uppercase font-bold mb-6"
            >
              שותפים לדרך
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-black"
            >
              לא כולם בוחרים Marenzia.{' '}
              <span className="block italic text-black/50 text-2xl md:text-3xl lg:text-4xl mt-4">רק מי שמבינים חומר, נוכחות ויוקרה.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 text-lg text-black/50 max-w-xl font-light leading-relaxed"
            >
              יש חומרים שממלאים חלל, ויש חומרים שמגדירים אותו. Marenzia נבחרת על ידי אדריכלים ומעצבים שמבינים שהרושם האמיתי לא נולד מרעש, אלא מדיוק, מאיכות ומהיכולת של חומר נכון לשנות את כל התחושה של הפרויקט. אלו הבחירות שמבדילות בין חלל שנראה טוב, לבין חלל שאי אפשר להפסיק להסתכל עליו.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Asymmetric Grid Gallery */}
      <section className="px-6 lg:px-20 pb-32">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
            {architects.map((architect, i) => {
              const config = gridConfig[i];
              return (
                <motion.div
                  key={architect.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: config.delay }}
                  className={`${config.colSpan} flex flex-col gap-6 ${config.extra}`}
                >
                  <Link href={`/chose-us/${architect.slug}`} className="group block">
                    <div className={`${config.aspect} overflow-hidden bg-black/5 relative`}>
                      <Image
                        src={architect.image}
                        alt={architect.name}
                        fill
                        className="object-cover transition-all duration-[2s] group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="font-serif text-3xl font-medium tracking-tight text-black group-hover:text-black/70 transition-colors">{architect.name}</h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 mt-2">{architect.studio}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
