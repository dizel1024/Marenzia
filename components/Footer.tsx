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
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>הסיפור שלנו</a></li>
                            <li><a className="hover:text-white transition-colors" href="#" suppressHydrationWarning>חומריות</a></li>
                            <li><Link className="hover:text-white transition-colors" href="/process" suppressHydrationWarning>תהליך</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h6 className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">ז&apos;ורנל</h6>
                        <div className="flex border-b border-slate-700 pb-2">
                            <input
                                type="email"
                                placeholder="הירשם לניוזלטר"
                                className="bg-transparent border-none p-0 text-sm focus:ring-0 placeholder-slate-600 w-full text-right"
                                suppressHydrationWarning
                            />
                            <ArrowLeft className="w-4 h-4 text-slate-600 hover:text-white transition-colors cursor-pointer" />
                        </div>
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
