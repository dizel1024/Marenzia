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
        name: 'ביאנקו קרארה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'לבן',
        code: 'BC-01',
        toneDetails: 'לבן קלאסי עם גידים אפורים',
        porosity: 'נמוכה (0.3%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_bianco_carrara_color.png'
    },
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
        name: 'קלקטה אורו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'זהב',
        code: 'CO-02',
        toneDetails: 'לבן חם עם גידים מוזהבים',
        porosity: 'נמוכה (0.2%)',
        origin: 'קרארה, איטליה',
        image: '/assets/images/stone_calacatta_oro_color.png'
    },
    {
        name: 'ארבסקטו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'לבן',
        code: 'AR-03',
        toneDetails: 'לבן עם גידים אפורים עזים',
        porosity: 'נמוכה (0.3%)',
        origin: 'טוסקנה, איטליה',
        image: '/assets/images/stone_arabescato_color.png'
    },
    {
        name: 'אמפרדור בהיר',
        type: 'שיש • ספרד',
        category: 'שיש',
        tone: 'חום',
        code: 'EL-04',
        toneDetails: 'חום בהיר עם גידי קרם',
        porosity: 'נמוכה (0.3%)',
        origin: 'ספרד',
        image: '/assets/images/stone_light_emperador_color.png'
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
        name: 'טרוורטין רומאי',
        type: 'טרוורטין • איטליה',
        category: 'טרוורטין',
        tone: 'בז׳',
        code: 'RT-05',
        toneDetails: 'שנהב קלאסי',
        porosity: 'בינונית (1.5%)',
        origin: 'טיבולי, איטליה',
        image: '/assets/images/stone_roman_travertine_color.png'
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
        name: 'גראנד אנטיקו',
        type: 'שיש • צרפת',
        category: 'שיש',
        tone: 'שחור',
        code: 'GA-06',
        toneDetails: 'שחור עמוק עם הכללות לבנות',
        porosity: 'נמוכה (0.2%)',
        origin: 'צרפת',
        image: '/assets/images/stone_grand_antico_color.png'
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
        name: 'פראדה ורדה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'ירוק',
        code: 'PV-07',
        toneDetails: 'ירוק אמרלד עם גידים לבנים',
        porosity: 'נמוכה (0.2%)',
        origin: 'איטליה',
        image: '/assets/images/stone_prada_verde_color.png'
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
        name: 'רוסו לבנטו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'אדום',
        code: 'RL-08',
        toneDetails: 'אדום דובדבן וסגול',
        porosity: 'נמוכה (0.4%)',
        origin: 'ליגוריה, איטליה',
        image: '/assets/images/stone_rosso_levanto_color.png'
    },
    {
        name: 'טאג׳ מאהל',
        type: 'קוורציט • ברזיל',
        category: 'קוורציט',
        tone: 'בז׳',
        code: 'TM-09',
        toneDetails: 'לבן שמנת שקוף למחצה',
        porosity: 'נמוכה מאוד (0.1%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_taj_mahal_color.png'
    },
    {
        name: 'אוניקס לבן',
        type: 'אוניקס • טורקיה',
        category: 'אוניקס',
        tone: 'לבן',
        code: 'WO-10',
        toneDetails: 'לבן חלבי שקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'טורקיה',
        image: '/assets/images/stone_white_onyx_color.png'
    },
    {
        name: 'אוניקס רוזה',
        type: 'אוניקס • איראן',
        category: 'אוניקס',
        tone: 'ורוד',
        code: 'RO-11',
        toneDetails: 'ורוד עדין עם גידי זהב',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'איראן',
        image: '/assets/images/stone_rose_onyx_color.png'
    },
    {
        name: 'ג׳ייד גרין',
        type: 'אוניקס • איטליה',
        category: 'אוניקס',
        tone: 'ירוק',
        code: 'JG-12',
        toneDetails: 'ירוק ירקן שקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'איטליה',
        image: '/assets/images/stone_jade_green_color.png'
    },
    {
        name: 'רוזה נורווגיה',
        type: 'שיש • נורווגיה',
        category: 'שיש',
        tone: 'ורוד',
        code: 'RN-13',
        toneDetails: 'ורוד בהיר עם גידים אפורים',
        porosity: 'נמוכה (0.3%)',
        origin: 'נורווגיה',
        image: '/assets/images/stone_norwegian_rose_color.png'
    },
    {
        name: 'פנדה לבן',
        type: 'שיש • סין',
        category: 'שיש',
        tone: 'שחור',
        code: 'PW-14',
        toneDetails: 'לבן טהור עם גידים שחורים עזים',
        porosity: 'נמוכה (0.2%)',
        origin: 'סין',
        image: '/assets/images/stone_panda_white_color.png'
    },
    {
        name: 'קרמה מרפיל',
        type: 'שיש • ספרד',
        category: 'שיש',
        tone: 'בז׳',
        code: 'CM-15',
        toneDetails: 'בז׳ חם ואחיד',
        porosity: 'נמוכה (0.3%)',
        origin: 'ספרד',
        image: '/assets/images/stone_crema_marfil_color.png'
    },
    {
        name: 'ארבסקטו גריג׳יו אורוביקו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'אפור',
        code: 'AGO-16',
        toneDetails: 'אפור כהה עם גידים מוזהבים',
        porosity: 'נמוכה (0.2%)',
        origin: 'ברגמו, איטליה',
        image: '/assets/images/stone_grigio_orobico_color.png'
    },
    {
        name: 'ארבסקטו רוסו אורוביקו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'אדום',
        code: 'ARO-17',
        toneDetails: 'אדום עמוק עם ערבולי אפור ולבן',
        porosity: 'נמוכה (0.2%)',
        origin: 'ברגמו, איטליה',
        image: '/assets/images/stone_rosso_orobico_color.png'
    },
    {
        name: 'רוסו פרנציה',
        type: 'שיש • צרפת',
        category: 'שיש',
        tone: 'אדום',
        code: 'RF-18',
        toneDetails: 'אדום עז עם הכללות לבנות',
        porosity: 'נמוכה (0.3%)',
        origin: 'צרפת',
        image: '/assets/images/stone_rosso_francia_color.png'
    },
    {
        name: 'ורדה לפוניה',
        type: 'שיש • ברזיל',
        category: 'שיש',
        tone: 'ירוק',
        code: 'VL-19',
        toneDetails: 'ירוק אצילי עם זרימה אמנותית',
        porosity: 'נמוכה (0.15%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_verde_lapponia_color.png'
    },
    {
        name: 'נרו פורטורו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'זהב',
        code: 'NP-20',
        toneDetails: 'שחור עמוק עם גידי זהב עזים',
        porosity: 'נמוכה (0.1%)',
        origin: 'לה ספציה, איטליה',
        image: '/assets/images/stone_nero_portoro_color.png'
    },
    {
        name: 'שיש ארבע העונות',
        type: 'שיש • צרפת',
        category: 'שיש',
        tone: 'ירוק',
        code: 'FS-21',
        toneDetails: 'שילוב אמנותי של ירוק, סגול וזהב',
        porosity: 'נמוכה (0.3%)',
        origin: 'פירנאים, צרפת',
        image: '/assets/images/stone_four_seasons_color.png'
    },
    {
        name: 'פורט לורן',
        type: 'שיש • מרוקו',
        category: 'שיש',
        tone: 'שחור',
        code: 'PL-22',
        toneDetails: 'שחור-חום עם גידי זהב ולבן',
        porosity: 'נמוכה (0.2%)',
        origin: 'מרוקו',
        image: '/assets/images/stone_port_laurent_color.png'
    },
    {
        name: 'מיסטי ווייט',
        type: 'שיש • נאמיביה',
        category: 'שיש',
        tone: 'לבן',
        code: 'MW-23',
        toneDetails: 'לבן טהור עם עננות עדינה',
        porosity: 'נמוכה (0.2%)',
        origin: 'נאמיביה',
        image: '/assets/images/stone_misty_white_color.png'
    },
    {
        name: 'בלו גלקסי',
        type: 'שיש • סין',
        category: 'שיש',
        tone: 'כחול',
        code: 'BG-24',
        toneDetails: 'כחול כהה עם גבישים נוצצים',
        porosity: 'נמוכה (0.2%)',
        origin: 'סין',
        image: '/assets/images/stone_blue_galaxy_color.png'
    },
    {
        name: 'סילבר וייב',
        type: 'שיש • סין',
        category: 'שיש',
        tone: 'אפור',
        code: 'SW-25',
        toneDetails: 'גלים דרמטיים של אפור ושחור',
        porosity: 'נמוכה (0.2%)',
        origin: 'סין',
        image: '/assets/images/stone_silver_wave_color.png'
    },
    {
        name: 'אוניקס ג׳ייד לבן',
        type: 'אוניקס • סין',
        category: 'אוניקס',
        tone: 'לבן',
        code: 'WJO-26',
        toneDetails: 'לבן קרמי שקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'סין',
        image: '/assets/images/stone_white_jade_onyx_color.png'
    },
    {
        name: 'אוניקס בלו סקיי',
        type: 'אוניקס • ארגנטינה',
        category: 'אוניקס',
        tone: 'כחול',
        code: 'BSO-27',
        toneDetails: 'תכלת שמיים שקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'ארגנטינה',
        image: '/assets/images/stone_blue_sky_onyx_color.png'
    },
    {
        name: 'אוניקס דבש',
        type: 'אוניקס • טורקיה',
        category: 'אוניקס',
        tone: 'זהב',
        code: 'HO-28',
        toneDetails: 'זהב עמוק ושקוף',
        porosity: 'נמוכה מאוד (0.05%)',
        origin: 'טורקיה',
        image: '/assets/images/stone_honey_onyx_color.png'
    },
    {
        name: 'רוסו לואנה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'אדום',
        code: 'RLU-29',
        toneDetails: 'קלידוסקופ של סגול, ירוק ואדום',
        porosity: 'נמוכה (0.3%)',
        origin: 'איטליה',
        image: '/assets/images/stone_rosso_luana_color.png'
    },
    {
        name: 'פליסנדרו',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'כחול',
        code: 'PAL-30',
        toneDetails: 'תכלת-אפור עם גידים ליניאריים',
        porosity: 'נמוכה (0.25%)',
        origin: 'איטליה',
        image: '/assets/images/stone_palissandro_color.png'
    },
    {
        name: 'ורדה מאסטרו',
        type: 'שיש • ברזיל',
        category: 'שיש',
        tone: 'ירוק',
        code: 'VM-31',
        toneDetails: 'ירוק יער עמוק ומלכותי',
        porosity: 'נמוכה (0.15%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_verde_maestro_color.png'
    },
    {
        name: 'פטגוניה',
        type: 'קוורציט • ברזיל',
        category: 'קוורציט',
        tone: 'בז׳',
        code: 'PAT-32',
        toneDetails: 'גבישים שקופים עם הכללות דרמטיות',
        porosity: 'נמוכה מאוד (0.1%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_patagonia_color.png'
    },
    {
        name: 'מינג גרין',
        type: 'שיש • סין',
        category: 'שיש',
        tone: 'ירוק',
        code: 'MG-33',
        toneDetails: 'ירוק מנטה עדין ונקי',
        porosity: 'נמוכה (0.3%)',
        origin: 'סין',
        image: '/assets/images/stone_ming_green_color.png'
    },
    {
        name: 'פנדורה',
        type: 'קוורציט • ברזיל',
        category: 'קוורציט',
        tone: 'בז׳',
        code: 'PAN-34',
        toneDetails: 'מבנה גבישי רחב בגווני קרם ופחם',
        porosity: 'נמוכה מאוד (0.1%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_pandora_color.png'
    },
    {
        name: 'אופרה ד׳ארטה',
        type: 'שיש • איטליה',
        category: 'שיש',
        tone: 'ירוק',
        code: 'ODA-35',
        toneDetails: 'קלידוסקופ דרמטי של ירוק, סגול ולבן',
        porosity: 'נמוכה (0.2%)',
        origin: 'איטליה',
        image: '/assets/images/stone_opera_d_arte_color.png'
    },
    {
        name: 'שאנגרי-לה',
        type: 'שיש • ברזיל',
        category: 'שיש',
        tone: 'ירוק',
        code: 'SHL-36',
        toneDetails: 'ירוק אקזוטי ג׳ונגל עם גידי זהב ולבן',
        porosity: 'נמוכה (0.15%)',
        origin: 'ברזיל',
        image: '/assets/images/stone_shangri_la_color.png'
    }
];

const categories = ['כל האבנים', 'שיש', 'טרוורטין', 'קוורציט', 'אבן סינטר', 'אוניקס'];
const tones = [
    { id: 'לבן', color: '#FFFFFF' },
    { id: 'בז׳', color: '#F5F5DC' },
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
