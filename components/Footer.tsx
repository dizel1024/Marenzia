'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Square, ArrowLeft, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-slate-400 py-24 px-6 lg:px-20 relative z-50 border-t border-white/5 opacity-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 text-right" dir="rtl">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-8 text-white">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/assets/images/icon white.webp"
                                    alt="Marenzia Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-32 h-6 mt-1">
                                <Image
                                    src="/assets/images/whitelogo.webp"
                                    alt="Marenzia Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-[200px]">
                            מפסלים שתיקה דרך צורות אדריכליות נצחיות מאז 1994.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h6 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">פניות</h6>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>כללי</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>עיתונות ומדיה</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>חשבון מסחרי</a></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h6 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">סטודיו</h6>
                        <ul className="space-y-4 text-sm">
                            <li><a className="hover:text-white transition-colors" href="/about" suppressHydrationWarning>הסיפור שלנו</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>חומריות</a></li>
                            <li><Link className="hover:text-white transition-colors" href="/process" suppressHydrationWarning>תהליך</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6 md:col-span-1">
                        <h6 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-4">צרו קשר</h6>
                        {(() => {
                            const [submitted, setSubmitted] = React.useState(false);
                            const [formData, setFormData] = React.useState({ name: '', phone: '', email: '', message: '' });

                            const handleSubmit = (e: React.FormEvent) => {
                                e.preventDefault();
                                setSubmitted(true);
                                setTimeout(() => setSubmitted(false), 5000);
                            };

                            if (submitted) {
                                return (
                                    <div className="h-full flex flex-col justify-center animate-pulse text-right">
                                        <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">הודעתך נשלחה בהצלחה.</p>
                                        <p className="text-white/60 text-[9px] mt-2 italic uppercase">נציגנו יצרו איתך קשר בהקדם.</p>
                                    </div>
                                );
                            }

                            return (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
                                    <input
                                        type="text"
                                        placeholder="שם מלא"
                                        required
                                        className="bg-transparent border-b border-white/20 py-2 text-[11px] text-white focus:border-[#149cb8] outline-none transition-colors placeholder:text-white/40 w-full text-right"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="tel"
                                            placeholder="טלפון"
                                            required
                                            className="bg-transparent border-b border-white/20 py-2 text-[11px] text-white focus:border-[#149cb8] outline-none transition-colors placeholder:text-white/40 text-right"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            placeholder="אימייל"
                                            required
                                            className="bg-transparent border-b border-white/20 py-2 text-[11px] text-white focus:border-[#149cb8] outline-none transition-colors placeholder:text-white/40 text-right"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <textarea
                                        placeholder="הודעה"
                                        rows={2}
                                        required
                                        className="bg-transparent border-b border-white/20 py-2 text-[11px] text-white focus:border-[#149cb8] outline-none transition-colors placeholder:text-white/40 resize-none text-right"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="mt-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white border border-white/30 py-3 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                                    >
                                        שלח הודעה <ArrowLeft className="w-3 h-3 rotate-180" />
                                    </button>
                                </form>
                            );
                        })()}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-800/50" dir="rtl">
                    <p className="text-[10px] uppercase tracking-widest text-right">© 2024 MARENZIA DESIGN HOUSE. כל הזכויות שמורות.</p>
                    <div className="flex gap-12 text-[10px] uppercase tracking-widest">
                        <a className="hover:text-white transition-colors flex items-center gap-1" href="#" suppressHydrationWarning>
                            <Instagram className="w-3 h-3" /> INSTAGRAM
                        </a>
                        <a className="hover:text-white transition-colors flex items-center gap-1" href="#" suppressHydrationWarning>
                            <Linkedin className="w-3 h-3" /> LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
