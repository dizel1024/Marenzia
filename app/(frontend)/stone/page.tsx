'use client';

import React from 'react';
import Image from 'next/image';
import {
    Search,
    Heart,
    User,
    ChevronLeft,
    LayoutGrid
} from 'lucide-react';
import { motion } from 'motion/react';

const stones = [
    {
        name: 'קרארה סטטואריו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'לבן',
        code: 'Hon-01',
        toneDetails: 'לבן טהור',
        porosity: 'נמוכה (0.3%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_carrara_statuario_color.png'
    },
    {
        name: 'פיאטרה די פוסנה',
        type: 'אבן גיר • צרפת',
        category: 'אבן גיר',
        tone: 'אפור',
        code: 'Fos-04',
        toneDetails: 'פחם חם',
        porosity: 'נמוכה (0.2%)',
        origin: 'מונפלייה, צרפת',
        image: '/assets/images/img_8371c2031331.webp'
    },
    {
        name: 'טרוורטין כסוף',
        type: 'טרוורטין • טורקיה',
        category: 'טרוורטין',
        tone: 'כסוף',
        code: 'Trv-12',
        toneDetails: 'כסף קריר',
        porosity: 'בינונית (1.8%)',
        origin: 'דניזלי, טורקיה',
        image: '/assets/images/stone_silver_travertine_color.png'
    },
    {
        name: 'בזלטינה סקורו',
        type: 'בזלת • איטליה',
        category: 'בזלת',
        tone: 'שחור',
        code: 'Bas-09',
        toneDetails: 'פחם עמוק',
        porosity: 'נמוכה מאוד (0.1%)',
        origin: 'ויטרבו, איטליה',
        image: '/assets/images/img_12acfce4b7df.webp'
    },
    {
        name: 'ורדה אלפי',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'ירוק',
        code: 'Ver-01',
        toneDetails: 'ירוק יער עמוק',
        porosity: 'נמוכה (0.2%)',
        origin: 'פיימונטה, איטליה',
        image: '/assets/images/stone_verde_alpi_color.png'
    },
    {
        name: "רוסו ורונה",
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'אדום',
        code: 'Ros-02',
        toneDetails: 'אדום אדמה',
        porosity: 'נמוכה (0.4%)',
        origin: 'ורונה, איטליה',
        image: '/assets/images/stone_rosso_verona_color.png'
    },
    {
        name: "ג'יאלו סיינה",
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'זהב',
        code: 'Gia-03',
        toneDetails: 'זהב עמוק',
        porosity: 'נמוכה (0.3%)',
        origin: 'סיינה, איטליה',
        image: '/assets/images/stone_giallo_siena_color.png'
    },
    {
        name: 'אזול בהייה',
        type: 'קוורציט • ברזיל',
        category: 'קוורציט',
        tone: 'כחול',
        code: 'Azu-04',
        toneDetails: 'כחול אקזוטי',
        porosity: 'נמוכה מאוד (0.1%)',
        origin: 'בהייה, ברזיל',
        image: '/assets/images/stone_azul_bahia_color.png'
    },
    {
        name: 'נרו מרקווינה',
        type: 'שיש • ספרד',
        category: 'שיש',
        tone: 'שחור',
        code: 'Mar-05',
        toneDetails: 'שחור פחם',
        porosity: 'נמוכה (0.2%)',
        origin: 'חבל הבאסקים, ספרד',
        image: '/assets/images/stone_nero_marquina_color.png'
    },
    {
        name: 'קלקטה ויולה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'סגול',
        code: 'Vio-06',
        toneDetails: 'לבן עם ורידי סגול',
        porosity: 'נמוכה (0.2%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_calacatta_viola_color.png'
    },
    {
        name: 'רוזה פורטוגל',
        type: 'שיש • פורטוגל',
        category: 'שיש',
        tone: 'ורוד',
        code: 'Ros-07',
        toneDetails: 'ורוד פסטל',
        porosity: 'נמוכה (0.3%)',
        origin: 'אסטרמוז, פורטוגל',
        image: '/assets/images/stone_rosa_portugal_color.png'
    },
    {
        name: 'פיאטרה גריי',
        type: 'שיש • איראן',
        category: 'שיש',
        tone: 'אפור',
        code: 'Pie-08',
        toneDetails: 'אפור גרפיט',
        porosity: 'נמוכה (0.2%)',
        origin: 'איספהאן, איראן',
        image: '/assets/images/stone_pietra_grey_color.png'
    },
    {
        name: 'אמפרדור כהה',
        type: 'שיש • ספרד',
        category: 'שיש',
        tone: 'חום',
        code: 'Emp-09',
        toneDetails: 'חום שוקולד',
        porosity: 'נמוכה (0.3%)',
        origin: 'מורסיה, ספרד',
        image: '/assets/images/stone_emperador_color.png'
    },
    {
        name: 'אוניקס דבש',
        type: 'אוניקס • טורקיה',
        category: 'אוניקס',
        tone: 'זהב',
        code: 'Ony-10',
        toneDetails: 'זהב שקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'טורקיה',
        image: '/assets/images/stone_onyx_color.png'
    }
];

const categories = ['כל האבנים', 'שיש', 'טרוורטין', 'קוורציט', 'אבן גיר', 'בזלת', 'אוניקס'];
const tones = [
    { id: 'לבן', color: '#FFFFFF' },
    { id: 'אפור', color: '#BDBDBD' },
    { id: 'כסוף', color: '#E0E0E0' },
    { id: 'שחור', color: '#212121' },
    { id: 'ירוק', color: '#2E7D32' },
    { id: 'אדום', color: '#C62828' },
    { id: 'זהב', color: '#FFD700' },
    { id: 'כחול', color: '#1565C0' },
    { id: 'סגול', color: '#7B1FA2' },
    { id: 'ורוד', color: '#F8BBD0' },
    { id: 'חום', color: '#4E342E' }
];

export default function StoneArchivePage() {
    const [selectedCategory, setSelectedCategory] = React.useState('כל האבנים');
    const [selectedTone, setSelectedTone] = React.useState<string | null>(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const filteredStones = stones.filter((stone) => {
        const matchesCategory = selectedCategory === 'כל האבנים' || stone.category === selectedCategory;
        const matchesTone = !selectedTone || stone.tone === selectedTone;
        const matchesSearch = stone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            stone.type.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesTone && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#f7f7f7] text-[#0a0a0a] font-sans rtl pt-20" dir="rtl">
            {/* Archive Navbar */}
            <header className="fixed top-[88px] w-full z-40 bg-white/80 backdrop-blur-md border-b border-black/5 px-8 py-4 flex items-center justify-between [transform:translateZ(0)]">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2 text-black">
                        <LayoutGrid className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="relative hidden sm:block">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            className="bg-black/5 border-none rounded-none py-2 pr-10 pl-4 text-[10px] w-64 focus:ring-1 focus:ring-black/20 placeholder:text-slate-400 uppercase tracking-widest font-bold"
                            placeholder="חיפוש באוסף..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-black/5 transition-colors">
                            <Heart className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex pt-16">
                {/* Sidebar */}
                <aside className="w-80 border-l border-black/5 bg-white p-8 sticky top-36 h-[calc(100vh-144px)] overflow-y-auto hidden lg:flex flex-col gap-10">
                    <div className="space-y-4">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold">ספריית חומרים</span>
                        <nav className="flex flex-col gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-right py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all ${selectedCategory === cat ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-neutral-400 font-bold">גוון דומיננטי</span>
                        <div className="grid grid-cols-5 gap-3">
                            {tones.map((tone) => (
                                <button
                                    key={tone.id}
                                    onClick={() => setSelectedTone(selectedTone === tone.id ? null : tone.id)}
                                    style={{ backgroundColor: tone.color }}
                                    className={`aspect-square border border-black/10 transition-all ${selectedTone === tone.id ? 'ring-2 ring-offset-2 ring-black scale-110' : 'hover:scale-105'}`}
                                    title={tone.id}
                                />
                            ))}
                        </div>
                        {selectedTone && (
                            <button
                                onClick={() => setSelectedTone(null)}
                                className="text-[9px] uppercase tracking-widest font-bold text-red-500 underline"
                            >
                                נקה סינון גוון
                            </button>
                        )}
                    </div>
                </aside>

                {/* Grid */}
                <section className="flex-1 p-12 lg:p-24">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-24 space-y-4">
                            <h1 className="font-serif text-5xl md:text-7xl italic text-[#0a0a0a]">אוצרות מינרלית</h1>
                            <p className="text-neutral-500 max-w-xl text-lg font-light leading-relaxed">
                                דוגמאות נבחרות של האבנים המרהיבות ביותר בעולם, שנאצרו בקפידה עבור אדריכלות ומעצבי פנים.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
                            {filteredStones.length > 0 ? (
                                filteredStones.map((stone, i) => (
                                    <motion.div
                                        key={stone.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: (i % 2) * 0.2 }}
                                        className="group will-change-transform"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden bg-neutral-100 relative mb-8">
                                            <Image
                                                alt={stone.name}
                                                src={stone.image}
                                                fill
                                                className="object-cover transition-transform duration-[2s] group-hover:scale-105 will-change-transform"
                                                priority={i < 2}
                                            />
                                            <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-bold border border-white/20">
                                                {stone.code}
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end border-b border-black/5 pb-6">
                                                <div>
                                                    <h3 className="font-serif text-3xl italic mb-1">{stone.name}</h3>
                                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">{stone.type}</span>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    <span className="text-[8px] uppercase tracking-widest text-neutral-300 font-bold">מקור</span>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">{stone.origin}</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-12 pt-4">
                                                <div>
                                                    <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-300 font-bold block mb-1">גוון</span>
                                                    <span className="text-[11px] font-medium tracking-wide">{stone.toneDetails}</span>
                                                </div>
                                                <div className="text-left" dir="ltr">
                                                    <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-300 font-bold block mb-1">POROSITY</span>
                                                    <span className="text-[11px] font-medium tracking-wide">{stone.porosity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-32 text-center border-t border-black/5">
                                    <p className="font-serif italic text-3xl text-neutral-300">לא נמצאו תוצאות התואמות לסדרה זו.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory('כל האבנים');
                                            setSelectedTone(null);
                                            setSearchQuery('');
                                        }}
                                        className="mt-8 text-[10px] uppercase tracking-[0.4em] font-bold underline"
                                    >
                                        איפוס הגדרות חיפוש
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
