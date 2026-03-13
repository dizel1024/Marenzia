'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function MaterialsContent({ data }: { data: any }) {
  return (
    <div className="bg-white text-[#0a0a0a] font-sans rtl" dir="rtl">
        <main className="pt-0">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <div className="absolute inset-0 scale-105">
                    <Image
                        src="/assets/images/stone_calacatta_oro_color.png"
                        alt="Hero"
                        fill
                        className="object-cover relative"
                        unoptimized
                    />
                </div>
                <div className="relative z-20 h-full flex flex-col justify-end items-center pb-24 px-6 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-white text-4xl md:text-5xl lg:text-7xl font-serif italic font-light tracking-tight mb-4"
                    >
                        איתור האבן המושלמת ברחבי העולם
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 96 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="w-px bg-white/40 mt-8"
                    ></motion.div>
                </div>
            </section>

            {/* Our Heritage Section */}
            <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 order-2 lg:order-1"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 block mb-6 font-bold">חיפוש חובק עולם</span>
                        <h3 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8 text-[#0a0a0a]">
                            מסע אל המחצבות הטובות בעולם.
                        </h3>
                        <p className="text-zinc-600 leading-relaxed text-lg mb-10 font-light">
                            מאיטליה ועד קצוות תבל, צוות המומחים שלנו נודד בחיפוש אחר גושי השיש, האוניקס והטרוורטין הנדירים והאיכותיים ביותר. אנו בוחרים כל אבן בקפידה אישית, היישר מן המחצבות המובילות בעולם, על מנת להבטיח את איכות החומר המושלמת עבור הפרויקטים שלנו.
                        </p>
                        <a className="inline-flex items-center gap-4 group" href="/about">
                            <span className="text-xs uppercase tracking-[0.2em] font-bold">גלו את המקור</span>
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 order-1 lg:order-2"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <Image
                                src="/assets/images/stone_patagonia_color.png"
                                alt="Italian quarry"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Full Bleed Architectural Image */}
            <section className="w-full aspect-video lg:h-[80vh] overflow-hidden relative">
                <Image
                    src="/assets/images/stone_grand_antico_color.png"
                    alt="Minimal sculptural stone"
                    fill
                    className="object-cover"
                    unoptimized
                />
            </section>

            {/* Process & Material Section */}
            <section className="py-24 lg:py-40 bg-zinc-50 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="aspect-square mb-12 relative overflow-hidden">
                                <Image
                                    src="/assets/images/stone_arabescato_color.png"
                                    alt="The Material"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h4 className="font-serif text-3xl mb-6 text-[#0a0a0a]">אומנות מוקפדת בעבודת יד</h4>
                            <p className="text-zinc-500 font-light leading-relaxed max-w-md">
                                כל הפרויקטים שלנו מתוכננים ומיוצרים בהתאמה אישית מלאה (Custom Made). החל משלב בחירת לוח האבן ועד לעיבוד והליטוש הסופי, אנו מקפידים על אומנות מסורתית בעבודת יד שיורדת לפרטים הקטנים ביותר.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:pt-40"
                        >
                            <div className="aspect-square mb-12 relative overflow-hidden">
                                <Image
                                    src="/assets/images/stone_onyx_color.png"
                                    alt="The Vision"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h4 className="font-serif text-3xl mb-6 text-[#0a0a0a]">מוצרי פרימיום מותאמים אישית</h4>
                            <p className="text-zinc-500 font-light leading-relaxed max-w-md">
                                אנו הופכים את אבני הגלם הטבעיות והייחודיות ביותר ליצירות אמנות מעשיות - מכיורים מונוליתיים במראה פיסולי ועד פינות אוכל מעוצבות. כל פריט הוא יצירה חד פעמית ובלתי רגילה המעניקה יוקרה לכל חלל.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-6 lg:px-20 text-center bg-white">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-5xl text-zinc-300 mb-8 italic font-serif block leading-none">"</span>
                    <blockquote className="font-serif text-3xl md:text-5xl italic font-light leading-tight text-[#0a0a0a] mb-12">
                        לחפש את האבן המושלמת זה רק הצעד הראשון. לעבד אותה ליצירה מרהיבה בעבודת יד – זו האומנות האמיתית.
                    </blockquote>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">פייטרו מרנזיה, מייסד</p>
                </motion.div>
            </section>

            {/* Final Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 pb-1 bg-white">
                <div className="aspect-[3/4] relative overflow-hidden group">
                    <Image
                        src="/assets/images/stone_emperador_color.png"
                        alt="Grid 1"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                    />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden group">
                    <Image
                        src="/assets/images/stone_prada_verde_color.png"
                        alt="Grid 2"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                    />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden group">
                    <Image
                        src="/assets/images/stone_four_seasons_color.png"
                        alt="Grid 3"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                    />
                </div>
            </section>
        </main>
    </div>
  );
}
