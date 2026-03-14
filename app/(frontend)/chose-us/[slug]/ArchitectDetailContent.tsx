'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Architect } from '../architects-data';

export default function ArchitectDetailContent({ architect }: { architect: Architect }) {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      {/* Hero Section */}
      <section className="px-6 lg:px-20 pt-40 pb-12 md:pb-24 border-b border-black/5">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Text Side */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="max-w-md">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase text-[10px] tracking-[0.3em] mb-6 block text-black/40 font-bold"
              >
                פרופיל אדריכל / שותפים
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.85] text-black"
              >
                {architect.name.replace('אדר. ', '').split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === 0 && <br />}
                    {i > 0 && ' '}
                  </React.Fragment>
                ))}
              </motion.h1>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif italic text-xl md:text-2xl leading-relaxed text-black/70 border-r-2 border-black pr-6 py-2"
              >
                {architect.quote}
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12"
              >
                <Link
                  href="/chose-us"
                  className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:text-black/60 transition-colors"
                >
                  חזרה לכל האדריכלים
                  <ArrowRight className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="md:col-span-7 order-1 md:order-2"
          >
            <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
              <Image
                src={architect.image}
                alt={architect.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-24 py-24 md:py-40 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[10px] tracking-[0.4em] mb-12 text-center text-black/30 font-bold"
          >
            הסיפור
          </motion.h2>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light text-black/70 text-justify">
            {architect.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 lg:px-20 py-24 bg-[#fafafa]">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-black"
            >
              תיק העבודות
            </motion.h2>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase text-[10px] tracking-[0.2em] text-black/40 font-bold"
            >
              עבודות נבחרות 2020—2024
            </motion.span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
            {architect.portfolio.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${project.colSpan} ${project.extraClass || ''} ${i === 0 ? 'mb-12' : ''}`}
              >
                <div className={`${project.aspect} overflow-hidden relative group`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex justify-between uppercase text-[10px] tracking-widest text-black/40 font-bold">
                  <span>{project.title}</span>
                  <span>{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Signature Section */}
      <section className="px-6 lg:px-20 py-32 border-t border-black/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl text-black mb-4"
            >
              חתימת החומר
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="uppercase text-[10px] tracking-[0.4em] text-black/30 font-bold"
            >
              הטקסטורות המועדפות
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black/5">
            {architect.materials.map((material, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white p-12 flex flex-col items-center group"
              >
                <div className="w-full aspect-square overflow-hidden mb-8 relative">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl text-black mb-2">{material.name}</h3>
                <span className="uppercase text-[10px] tracking-widest text-black/30 font-bold">{material.finish}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
