'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageSquare, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans antialiased relative overflow-hidden rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0 grayscale opacity-40">
        <Image
          src="/assets/images/contact_bg.png"
          alt="Stone Showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>

      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#121212]/85 backdrop-blur-3xl border border-white/10 w-full max-w-5xl p-12 md:p-20 flex flex-col md:flex-row gap-16 relative"
        >
          {/* Decorative Corner Lines */}
          <div className="absolute top-0 right-0 w-24 h-[1px] bg-white/40"></div>
          <div className="absolute top-0 right-0 w-[1px] h-24 bg-white/40"></div>

          {/* Contact Information */}
          <div className="flex-1 flex flex-col justify-center text-right">
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-serif text-6xl md:text-8xl mb-10 font-light tracking-tight text-white leading-none italic"
            >
              צור קשר
            </motion.h1>
            <p className="text-white/50 text-base font-light leading-relaxed mb-16 max-w-sm">
              פתרונות אבן בהתאמה אישית למצוינות אדריכלית. קבעו פגישת ייעוץ פרטית או בקשו דוגמאות חומרים.
            </p>

            <div className="flex gap-10 mt-auto">
              <a href="#" className="flex items-center gap-3 group transition-all">
                <MessageSquare className="text-white/40 w-5 h-5 group-hover:text-white group-hover:-translate-y-1 transition-all" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors">WhatsApp</span>
              </a>
              <a href="#" className="flex items-center gap-3 group transition-all">
                <Mail className="text-white/40 w-5 h-5 group-hover:text-white group-hover:-translate-y-1 transition-all" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors">Email</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-[1.2] flex flex-col gap-1.2 justify-center">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/30">שם פרטי</label>
                  <input
                    type="text"
                    placeholder="הזן שם"
                    className="bg-transparent border-b border-white/10 text-white placeholder:text-white/5 py-3 focus:outline-none focus:border-white/40 transition-colors text-right"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30">שם משפחה</label>
                  <input
                    type="text"
                    placeholder="הזן שם משפחה"
                    className="bg-transparent border-b border-white/10 text-white placeholder:text-white/5 py-3 focus:outline-none focus:border-white/40 transition-colors text-right"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/30">כתובת אימייל</label>
                  <input
                    type="email"
                    placeholder="email@architecture.com"
                    className="bg-transparent border-b border-white/10 text-white placeholder:text-white/5 py-3 focus:outline-none focus:border-white/40 transition-colors text-right"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/30">פירוט הפרויקט</label>
                  <textarea
                    rows={1}
                    placeholder="תאר את צרכי החומר שלך"
                    className="bg-transparent border-b border-white/10 text-white placeholder:text-white/5 py-3 focus:outline-none focus:border-white/40 transition-colors resize-none text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/30">תאריך מועדף</label>
                  <input
                    type="date"
                    className="bg-transparent border-b border-white/10 text-white py-3 focus:outline-none focus:border-white/40 transition-colors text-right [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/30">מיקום</label>
                  <select className="bg-transparent border-b border-white/10 text-white py-3 focus:outline-none focus:border-white/40 transition-colors appearance-none text-right">
                    <option className="bg-[#121212]">אולם תצוגה - תל אביב</option>
                    <option className="bg-[#121212]">סטודיו - הרצליה</option>
                    <option className="bg-[#121212]">שיחת וידאו דיגיטלית</option>
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, letterSpacing: '0.4em' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-6 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:bg-neutral-200"
              >
                שלח פנייה
              </motion.button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
