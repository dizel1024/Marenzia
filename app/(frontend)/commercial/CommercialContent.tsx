'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft, Building2, Briefcase, Key } from 'lucide-react';

interface CommercialPageData {
  heroImage: { url: string };
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  service1Title: string;
  service1Text: string;
  service2Title: string;
  service2Text: string;
  service3Title: string;
  service3Text: string;
  formTitle: string;
  formSubtitle: string;
}

export default function CommercialContent({ data }: { data: CommercialPageData }) {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '', projectType: '', timeframe: '', details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (!data) return null;

  const services = [
    { title: data.service1Title, text: data.service1Text, icon: Building2 },
    { title: data.service2Title, text: data.service2Text, icon: Briefcase },
    { title: data.service3Title, text: data.service3Text, icon: Key }
  ].filter(s => s.title);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#0a0a0a] font-sans rtl" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 grayscale contrast-125">
          <Image
            src={data.heroImage?.url || "/assets/images/13.jpg"}
            alt={data.heroTitle}
            fill
            className="object-cover will-change-transform"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white text-5xl md:text-8xl mb-8 font-light italic tracking-tight"
          >
            {data.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold max-w-2xl mx-auto leading-loose"
          >
            {data.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl leading-tight italic">{data.introTitle}</h2>
          <p className="text-neutral-600 leading-relaxed text-lg font-light whitespace-pre-line">
            {data.introText}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#111] text-white py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8">
                <service.icon className="w-6 h-6 text-[#149cb8]" />
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider">{service.title}</h3>
              <p className="text-white/60 font-light leading-relaxed whitespace-pre-line text-sm">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl italic">{data.formTitle}</h2>
          <p className="text-neutral-500 font-light text-sm">{data.formSubtitle}</p>
        </div>

        {submitted ? (
          <div className="bg-green-50/50 border border-green-200 p-12 text-center rounded-xl animate-fade-in">
            <h3 className="text-2xl font-serif text-green-800 mb-2">פנייתך התקבלה בהצלחה</h3>
            <p className="text-green-600/80">נציג המחלקה המסחרית יחזור אליך בהקדם האפשרי.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="שם מלא *"
                required
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:border-black outline-none transition-colors"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="שם חברה / משרד"
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:border-black outline-none transition-colors"
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
              />
              <input
                type="email"
                placeholder="אימייל *"
                required
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:border-black outline-none transition-colors"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="טלפון *"
                required
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:border-black outline-none transition-colors"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
              <select
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm text-neutral-500 focus:border-black outline-none transition-colors appearance-none"
                value={formData.projectType}
                onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                required
              >
                <option value="" disabled>סוג פרויקט *</option>
                <option value="hotel">מלונאות ואירוח</option>
                <option value="restaurant">מסעדה / בר</option>
                <option value="office">משרדים</option>
                <option value="residential">מגורי יוקרה (פרויקט קבלני)</option>
                <option value="other">אחר</option>
              </select>
              <select
                className="w-full bg-transparent border-b border-black/20 py-4 text-sm text-neutral-500 focus:border-black outline-none transition-colors appearance-none"
                value={formData.timeframe}
                onChange={e => setFormData({ ...formData, timeframe: e.target.value })}
              >
                <option value="" disabled>מסגרת זמן משוערת</option>
                <option value="immediate">מיידי</option>
                <option value="1-3">1-3 חודשים</option>
                <option value="3-6">3-6 חודשים</option>
                <option value="future">תכנון עתידי</option>
              </select>
            </div>
            
            <textarea
              placeholder="תאר/י את הפרויקט (מיקום, קצב מבוקש, חומרים מועדפים)..."
              rows={4}
              className="w-full bg-transparent border-b border-black/20 py-4 text-sm focus:border-black outline-none transition-colors resize-none"
              value={formData.details}
              onChange={e => setFormData({ ...formData, details: e.target.value })}
            ></textarea>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#149cb8] transition-colors flex items-center justify-center gap-4 mx-auto"
            >
              שליחת טופס <ArrowLeft className="w-4 h-4" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
