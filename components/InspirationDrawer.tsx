'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useInspiration } from './InspirationContext';

export default function InspirationDrawer() {
  const { isDrawerOpen, closeDrawer, savedItems, removeItem } = useInspiration();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-full sm:w-[450px] bg-white z-[210] shadow-2xl flex flex-col"
            dir="rtl"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/10">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-black" fill="black" />
                <h2 className="text-[12px] font-bold tracking-[0.3em] uppercase">לוח השראה</h2>
                <span className="bg-black/5 text-[10px] px-2 py-0.5 rounded-full font-mono">{savedItems.length}</span>
              </div>
              <button 
                onClick={closeDrawer}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {savedItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50 space-y-4">
                  <Heart className="w-12 h-12 stroke-1" />
                  <p className="text-[11px] uppercase tracking-[0.2em] max-w-[200px]">לא נשמרו פריטים בלוח ההשראה שלך עדיין.</p>
                </div>
              ) : (
                savedItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <Link href={`/${item.categorySlug}/${item.slug}`} onClick={closeDrawer} className="flex-shrink-0 w-24 h-24 bg-zinc-100 relative overflow-hidden">
                      {item.image ? (
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[8px] text-zinc-400">אין תמונה</div>
                      )}
                    </Link>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <Link href={`/${item.categorySlug}/${item.slug}`} onClick={closeDrawer} className="hover:text-[#149cb8] transition-colors">
                          <h3 className="font-serif text-lg leading-tight mb-1">{item.title}</h3>
                        </Link>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-black/40">{item.categorySlug}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="self-start flex items-center gap-1 text-[10px] text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest font-bold"
                      >
                        <Trash2 className="w-3 h-3" />
                        הסר
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {savedItems.length > 0 && (
              <div className="p-6 border-t border-black/10">
                <button 
                  onClick={() => {
                     // Optionally copy to clipboard or open a print view, but standard form triggers works too.
                     alert('בקרוב: אפשרות שליחת הלוח ליועץ');
                  }}
                  className="w-full bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase py-4 hover:bg-black/80 transition-colors"
                >
                  שתף או בקש הצעת מחיר
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
