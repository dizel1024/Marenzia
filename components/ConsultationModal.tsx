'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function ConsultationModal({ isOpen, onClose, productName }: ConsultationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[310] p-4 text-right" dir="rtl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white p-8 lg:p-12 max-w-lg w-full shadow-2xl pointer-events-auto relative"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 left-6 text-black/40 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#149cb8]" />
                  <div>
                    <h2 className="font-serif text-3xl mb-2">תודה רבה</h2>
                    <p className="text-black/60 text-sm">פנייתך התקבלה בהצלחה. יועץ שלנו ייצור איתך קשר בהקדם.</p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-10 text-center">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40 mb-4 block">
                      Marenzia Advisory
                    </span>
                    <h2 className="font-serif text-3xl italic">תיאום ייעוץ אישי</h2>
                    {productName && (
                      <p className="mt-4 text-[11px] uppercase tracking-[0.2em] bg-black/5 inline-block px-4 py-2 font-bold text-[#149cb8]">
                        עבור: {productName}
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-2">שם מלא</label>
                      <input required type="text" className="w-full border-b border-black/20 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="הכנס שם מלא" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-2">טלפון</label>
                      <input required type="tel" className="w-full border-b border-black/20 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="05X-XXXXXXX" dir="ltr" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-2">אימייל</label>
                      <input required type="email" className="w-full border-b border-black/20 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent text-sm" placeholder="your@email.com" dir="ltr" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-black/60 mb-2">מידות מבוקשות / הערות</label>
                      <textarea rows={3} className="w-full border-b border-black/20 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent text-sm resize-none" placeholder="פרט לגבי המידות הנדרשות לפרויקט שלך..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase py-5 mt-4 hover:bg-black/80 transition-colors">
                      שלח בקשה
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
