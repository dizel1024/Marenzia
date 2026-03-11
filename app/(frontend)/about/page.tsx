'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function AboutPage() {
    return (
        <div className="bg-white text-[#0a0a0a] font-sans antialiased rtl pt-20" dir="rtl">
            <section className="w-full h-[80vh] overflow-hidden bg-zinc-100 relative flex items-center justify-center">
                <Image
                    src="/assets/images/about_hero.png"
                    alt=" sculptural stone objects"
                    fill
                    className="object-cover grayscale contrast-125 transition-transform duration-[10s] hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-1000"></div>

                <div className="relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-6xl md:text-9xl italic text-black tracking-tight"
                    >
                        הסיפור שלנו
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                        className="h-[1px] bg-black/20 w-32 mx-auto mt-8 origin-center"
                    />
                </div>
            </section>

            {/* 2. Three-column Editorial Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">01 / מורשת משפחתית</h2>
                        <div className="w-12 h-[1px] bg-black/10"></div>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] font-bold leading-loose text-neutral-600 space-y-4">
                        <p>שורשינו נטועים בלב קרארה, שושלת מַרֶנְזִיָה משתרעת על פני דורות של אומנות באבן. התחלנו כקולקטיב קטן של מחצבות, המוקדש להפקת השיש המשובח ביותר שהגדיר את האדריכלות האיטלקית במשך מאות שנים.</p>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] font-bold leading-loose text-neutral-600 space-y-4">
                        <p>כיום, אנו משתפים פעולה עם אנשי חזון עולמיים כדי להגדיר מחדש את גבולות האבן הטבעית. השותפויות הבינלאומיות שלנו מביאות דיוק אדריכלי עכשווי להיסטוריה גאולוגית גולמית, ויוצרות מונוליטים נצחיים עבור חללי הפנים המודרניים.</p>
                    </div>
                </div>
            </section>

            {/* 3. Centered Large Quote */}
            <section className="py-48 bg-white border-y border-black/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-7xl italic text-[#0a0a0a] leading-tight"
                    >
                        ״העיצוב פוגש את האבן הטבעית״
                    </motion.h2>
                </div>
            </section>

            {/* 4. Split-screen Philosophy Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black/5">
                {/* Right Side (Hebrew logic: Right is first in RTL) */}
                <div className="flex flex-col border-l border-black/5">
                    <div className="aspect-[4/3] bg-zinc-200 overflow-hidden relative">
                        <Image
                            src="/assets/images/about_philosophy_1.png"
                            alt="Minimalist interior"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                    <div className="p-16 md:p-32 flex flex-col items-start gap-8">
                        <h3 className="text-sm uppercase tracking-[0.4em] font-bold">פילוסופיית העיצוב שלנו</h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-500 leading-relaxed max-w-sm">חקרו את המפגש בין צורה להיסטוריה גאולוגית. אנו מאמינים בהתערבות מינימלית כדי לחשוף את הנשמה הטובה באבן.</p>
                        <div className="pt-4">
                            <Link href="/philosophy" className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 font-bold hover:opacity-50 transition-all inline-block">צפייה בפילוסופיה</Link>
                        </div>
                    </div>
                </div>
                {/* Left Side */}
                <div className="flex flex-col">
                    <div className="aspect-[4/3] bg-zinc-300 overflow-hidden relative">
                        <Image
                            src="/assets/images/about_philosophy_2.png"
                            alt="Monolith series"
                            fill
                            className="object-cover grayscale contrast-110"
                        />
                    </div>
                    <div className="p-16 md:p-32 flex flex-col items-start gap-8">
                        <h3 className="text-sm uppercase tracking-[0.4em] font-bold">סדרת המונוליטים</h3>
                        <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-500 leading-relaxed max-w-sm">אלמנטים אדריכליים לחדר הרחצה המגולפים מבלוקים בודדים. גישה מהפכנית ליוקרה בת קיימא באמצעות הנדסה מדויקת.</p>
                        <div className="pt-4">
                            <Link href="/collections" className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 font-bold hover:opacity-50 transition-all inline-block">חקרו את הקולקציה</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Two-panel Made in Italy/Lost Stones */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer space-y-12"
                >
                    <div className="aspect-square bg-zinc-100 overflow-hidden relative grayscale">
                        <Image
                            src="/assets/images/about_made_in_italy.png"
                            alt="Made in Italy"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-serif italic tracking-widest">תוצרת איטליה</h4>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.4em] font-bold">אומנות ומסורת</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group cursor-pointer space-y-12"
                >
                    <div className="aspect-square bg-zinc-100 overflow-hidden relative grayscale">
                        <Image
                            src="/assets/images/about_lost_stones.png"
                            alt="Lost Stones"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-xl font-serif italic tracking-widest">אבנים אבודות</h4>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.4em] font-bold">שימור מורשת</p>
                    </div>
                </motion.div>
            </section>

            {/* 6. Large Feature Image Bottom */}
            <section className="relative w-full h-screen bg-black overflow-hidden">
                <div className="absolute inset-0 grayscale opacity-40">
                    <Image
                        src="/assets/images/about_craftsman.png"
                        alt="Craftsman hands"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center text-white px-6 space-y-12">
                        <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold">למה מַרֶנְזִיָה</h2>
                        <p className="font-serif text-3xl md:text-5xl max-w-3xl leading-snug italic">
                            כל פריט הוא דיאלוג בין טבע גולמי לדיוק אדריכלי מעודן.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
