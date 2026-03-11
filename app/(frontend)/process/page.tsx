'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-[#f7f7f7] text-[#0a0a0a] font-sans rtl" dir="rtl">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 grayscale contrast-125">
                    <Image
                        src="/assets/images/process_hero_v2.png"
                        alt="המסלול המשותף - עיצוב פנים יוקרתי"
                        fill
                        className="object-cover will-change-transform"
                        priority
                    />
                </div>
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-white text-5xl md:text-8xl mb-8 font-light italic tracking-tight"
                    >
                        המסלול המשותף
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-2xl mx-auto leading-loose"
                    >
                        שותפות ייעודית לאדריכלים ומעצבי פנים.
                    </motion.p>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50">
                        <ChevronDown className="w-8 h-8 animate-bounce font-thin" />
                    </div>
                </div>
            </section>

            {/* Editorial Content */}
            <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32 space-y-48 lg:space-y-64">

                {/* Section 1: Exclusively for you */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-2 lg:order-1 space-y-8"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">01 / חומריות</span>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">נוצר באופן בלעדי למענכם</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg font-light">
                            אין שתי פיסות אבן זהות. אנו שואבים את המינרלים הנדירים ביותר ממחצבות מורשת כדי להבטיח שהפרויקט שלכם יישאר יצירת מופת יחידה במינה. תהליך הבחירה שלנו הוא דיאלוג אינטימי בין הטבע לבין החזון שלכם.
                        </p>
                        <div className="pt-6">
                            <button className="border-b border-black text-[10px] uppercase tracking-[0.3em] font-bold py-2 hover:opacity-50 transition-all">צפו באוסף החומרים</button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 aspect-[4/5] relative grayscale overflow-hidden group"
                    >
                        <Image
                            src="/assets/images/process_materiality_v2.png"
                            alt="טקסטורת שיש גולמית"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                        />
                    </motion.div>
                </section>

                {/* Section 2: Design Consultation */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="aspect-[4/5] relative grayscale overflow-hidden group"
                    >
                        <Image
                            src="/assets/images/process_advisory_v2.png"
                            alt="קווים אדריכליים מודרניים"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">02 / ייעוץ</span>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">ייעוץ עיצובי ללא עלות</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg font-light">
                            אנו מסייעים בתהליך הקפדני של סטיילינג מחדש וביצוע טכני. היועצים שלנו פועלים כהרחבה של הסטודיו שלכם, ומספקים תובנות לגבי היתכנות מבנית והרמוניה אסתטית של יישומי מינרלים.
                        </p>
                        <div className="h-px w-24 bg-black/20"></div>
                        <p className="text-lg font-light tracking-wide italic font-serif text-neutral-500">
                            &quot;דיוק הוא הלוקסוס היחיד שלא ניתן לזייף.&quot;
                        </p>
                    </motion.div>
                </section>

                {/* Section 3: Design Assistance Service */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-2 lg:order-1 space-y-8"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">03 / סינרגיה</span>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">שירות הסיוע העיצובי שלנו</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg font-light">
                            בעבודה צמודה עם הצוות הקריאטיבי של הלקוח, אנו מפתחים פתרונות מותאמים אישית שפורצים את גבולות אומנות האבן. מסקיצה ראשונית ועד הדמיית תלת-ממד, המחלקה הטכנית שלנו מבטיחה שכל פרט ייפתר.
                        </p>
                        <ul className="space-y-4 pt-6">
                            {['אינטגרציית CAD', 'בדיקות מאמץ חומרים', 'פרטי נגרות מותאמים אישית'].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-[#0a0a0a] font-bold">
                                    <span className="size-1.5 bg-black rounded-full"></span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-1 lg:order-2 aspect-[4/5] relative grayscale overflow-hidden group"
                    >
                        <Image
                            src="/assets/images/process_synergy_v2.png"
                            alt="שולחן עבודה אדריכלי"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                        />
                    </motion.div>
                </section>

                {/* Section 4: Construction Site Assistance */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center pb-24 border-b border-black/5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="aspect-[4/5] relative grayscale overflow-hidden group"
                    >
                        <Image
                            src="/assets/images/process_execution_v2.png"
                            alt="ליווי באתר הבניה"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">04 / ביצוע</span>
                        <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">סיוע באתר הבנייה</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg font-light">
                            עשורים של ניסיון בשטח לימדו אותנו ש-5% האחרונים של הביצוע מגדירים את הפרויקט כולו. אנו מספקים תמיכה לוגיסטית מקצה לקצה ופיקוח מומחה במהלך ההתקנה כדי להבטיח ששלמות המינרלים נשמרת.
                        </p>
                        <div className="pt-8 grid grid-cols-2 gap-12 border-t border-black/5">
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">לוגיסטיקה גלובלית</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-light">משלוח &quot;כפפות לבנות&quot; מדלת לדלת של לוחות רגישים ברחבי העולם.</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3">ליווי טכני</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-light">מנהלי אתרים ייעודיים נוכחים בשלבי התקנה קריטיים.</p>
                            </div>
                        </div>
                    </motion.div>
                </section>
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
                        רוממו את הפרויקט הבא שלכם עם Marenzia.
                    </h2>
                    <p className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
                        בקשו מומחה ייעודי לסטודיו האדריכלי שלכם.
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
