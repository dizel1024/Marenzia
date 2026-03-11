'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import {
    ArrowLeft,
    Square,
    Filter
} from 'lucide-react';

const categories = [
    { id: 'all', name: 'הכל', slug: null },
    { id: 'fragrance', name: 'ניחוחות ומחזיקי נרות', slug: 'fragrance' },
    { id: 'racks', name: 'מתלים וווים', slug: 'racks' },
    { id: 'lighting', name: 'תאורה', slug: 'lighting' },
    { id: 'mirrors', name: 'מראות', slug: 'mirrors' },
    { id: 'home-accessories', name: 'אביזרים לבית', slug: 'home-accessories' },
];

const products = [
    { id: 1, title: 'מחזיק נר אבן מונוליטי No. 01', category: 'fragrance', categoryName: 'ניחוחות ומחזיקי נרות', image: '/assets/images/nav_decor_fragrance.png' },
    { id: 2, title: 'וו תלייה אבן מונוליטי No. 02', category: 'racks', categoryName: 'מתלים וווים', image: '/assets/images/nav_decor_racks.png' },
    { id: 3, title: 'תאורת אבן מונוליטי No. 03', category: 'lighting', categoryName: 'תאורה', image: '/assets/images/nav_decor_lighting.png' },
    { id: 4, title: 'מראת אבן מונוליטי No. 04', category: 'mirrors', categoryName: 'מראות', image: '/assets/images/nav_decor_mirrors.png' },
    { id: 5, title: 'מגש אבן מונוליטי No. 05', category: 'home-accessories', categoryName: 'אביזרים לבית', image: '/assets/images/nav_decor_home_acc.png' },
];

function DecorContent() {
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get('category') || 'all';

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
            <main className="pt-48 pb-32 px-6 lg:px-20 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-20">
                <aside className="lg:w-64 flex-shrink-0">
                    <div className="sticky top-40 space-y-16">
                        <div>
                            <div className="flex items-center gap-3 mb-8 text-black/40">
                                <Filter className="w-4 h-4" />
                                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase">קטגוריות דקור</h3>
                            </div>
                            <ul className="space-y-4">
                                {categories.map((cat) => (
                                    <li key={cat.id}>
                                        <Link
                                            href={cat.slug ? `/decor?category=${cat.slug}` : '/decor'}
                                            className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 block hover:pr-2 ${activeCategory === (cat.slug || 'all')
                                                ? 'text-[#149cb8] pr-2 border-r-2 border-[#149cb8]'
                                                : 'text-black/50 hover:text-black'
                                                }`}
                                        >
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-12 border-t border-black/5">
                            <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">חומריות</h3>
                            <div className="flex flex-wrap gap-2 text-[10px] items-center">
                                <span className="px-3 py-1 bg-black/5 rounded-full text-black/60 tracking-widest font-bold">שיש</span>
                                <span className="px-3 py-1 bg-black/5 rounded-full text-black/60 tracking-widest font-bold">בראס</span>
                                <span className="px-3 py-1 bg-black/5 rounded-full text-black/60 tracking-widest font-bold">זכוכית</span>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1">
                    <div className="mb-20 space-y-4">
                        <p className="text-[10px] tracking-[0.5em] text-black/30 uppercase font-bold">Marenzia Objects</p>
                        <h1 className="font-serif text-6xl md:text-8xl italic font-light tracking-tight text-black">
                            {categories.find(c => (c.slug || 'all') === activeCategory)?.name || 'דקור'}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                        <AnimatePresence mode="wait">
                            {filteredProducts.map((product, i) => (
                                <motion.div
                                    key={`${product.id}-${activeCategory}`}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="group"
                                >
                                    <Link href={`/decor/product-${product.id}`} className="block space-y-8">
                                        <div className="aspect-[4/5] bg-zinc-100 overflow-hidden relative border border-black/5">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700"></div>
                                            <div className="absolute bottom-10 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-black tracking-widest px-4 py-2 uppercase">Explore Object</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-[9px] font-black tracking-[0.3em] text-[#149cb8] uppercase">{product.categoryName}</span>
                                            <h2 className="font-serif text-4xl text-black leading-tight">{product.title}</h2>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function DecorPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center font-serif text-2xl italic">טוען אוסף דקור...</div>}>
            <DecorContent />
        </Suspense>
    );
}
