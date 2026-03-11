'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Download, Bookmark } from 'lucide-react';

const bathProducts = [
    {
        id: 'product-1',
        slug: 'product-1',
        title: 'כיור אבן מונוליטי No. 01',
        collection: 'קולקציה 01 — אדריכלי',
        subtitle: 'Vessel No. 01',
        description: 'הצהרה ייחודית של צורה וחומריות. מגולף ביד מבלוק מונוליטי של שיש קרארה, ה-Vessel No. 01 חוקר את המתח שבין גיאומטריה ברוטליסטית לשימוש מעודן.',
        material: 'שיש קרארה מגולף ביד',
        images: [
            '/assets/images/nav_bath_basins_color.png',
            '/assets/images/img_1c850df040e0.webp',
            '/assets/images/img_268319206c4d.webp'
        ],
        specs: ['ביאנקו קרארה, מושחז', '900W x 550D x 850H mm', '120 ק"ג', 'טוסקנה, איטליה'],
        finishes: ['מושחז (Honed)', 'מלוטש (Polished)', 'מוברש (Brushed)']
    },
    {
        id: 'product-2',
        slug: 'product-2',
        title: 'ארון אבן מונוליטי No. 02',
        collection: 'קולקציה 02 — פונקציונלי',
        subtitle: 'Storage No. 02',
        description: 'יחידת אחסון אלגנטית המשלבת עץ אלון מושחר עם משטחי אבן טבעית. עיצוב המקצה מקום לשקט וסדר בחלל הרחצה.',
        material: 'עץ אלון מושחר ואבן טבעית',
        images: [
            '/assets/images/nav_bath_storage_color.png',
            '/assets/images/img_13e3f89e94f3.webp',
            '/assets/images/img_c4c407d8b8f7.webp'
        ],
        specs: ['אלון מושחר, אבן גריי', '1200W x 500D x 400H mm', '45 ק"ג', 'ייצור מקומי'],
        finishes: ['מט עמוק', 'טקסטורה טבעית']
    },
    {
        id: 'product-3',
        slug: 'product-3',
        title: 'סט אביזרי אבן מונוליטי No. 03',
        collection: 'Marenzia Elements',
        subtitle: 'Accessories Set',
        description: 'אוסף אביזרים משלימים המגולפים מאבן אחת, ליצירת המשכיות חומרית מושלמת בחלל.',
        material: 'שיש טבעי',
        images: [
            '/assets/images/nav_bath_accessories_color.png',
            '/assets/images/img_a392b292b833.webp',
            '/assets/images/img_0f6728d8a475.webp'
        ],
        specs: ['מגוון אבנים נבחרות', 'סט של 4 חלקים', 'גימור בעבודת יד'],
        finishes: ['מושחז', 'מלוטש']
    },
    {
        id: 'product-4',
        slug: 'product-4',
        title: 'ברז אבן מונוליטי No. 04',
        collection: 'Metal & Stone',
        subtitle: 'Taps No. 04',
        description: 'דיאלוג בין מתכת מוברשת לאלמנטים של אבן. ברז המגדיר מחדש את הטקס היומי של רחצה.',
        material: 'פליז מוברש ואבן',
        images: [
            '/assets/images/nav_bath_taps_color.png',
            '/assets/images/img_5a3508cf2a1c.webp',
            '/assets/images/img_256ac227f6e9.webp'
        ],
        specs: ['פליז איכותי', 'תושבת אבן טבעית', 'מנגנון קרמי גרמני'],
        finishes: ['זהב מוברש', 'שחור מט', 'ניקל מוברש']
    },
    {
        id: 'product-5',
        slug: 'product-5',
        title: 'מתלה אבן מונוליטי No. 05',
        collection: 'קולקציה 01 — אדריכלי',
        subtitle: 'The Tower',
        description: 'פסל פרקטי העומד בחלל. המתלה משלב בסיס אבן כבד עם מסגרת מתכת דקה, יוצר איזון ויזואלי מושלם.',
        material: 'שיש קרארה ופלדה',
        images: [
            '/assets/images/nav_bath_towel_stand_color.png',
            '/assets/images/img_38ac2d605600.webp',
            '/assets/images/img_69be383dc846.webp'
        ],
        specs: ['בסיס שיש 300x300mm', 'גובה 1100mm', 'פלדה בציפוי אבקה'],
        finishes: ['לבן שלג', 'פחם עמוק']
    },
    {
        id: 'product-6',
        slug: 'product-6',
        title: 'כיור אבן מונוליטי No. 06',
        collection: 'קולקציה 01 — אדריכלי',
        subtitle: 'Vessel No. 01',
        description: 'הצהרה ייחודית של צורה וחומריות. מגולף ביד מבלוק מונוליטי של שיש קרארה, ה-Vessel No. 01 חוקר את המתח שבין גיאומטריה ברוטליסטית לשימוש מעודן.',
        material: 'שיש קרארה מגולף ביד',
        images: [
            '/assets/images/nav_bath_basins_color.png',
            '/assets/images/img_1c850df040e0.webp',
            '/assets/images/img_268319206c4d.webp'
        ],
        specs: ['ביאנקו קרארה, מושחז', '900W x 550D x 850H mm', '120 ק"ג', 'טוסקנה, איטליה'],
        finishes: ['מושחז (Honed)', 'מלוטש (Polished)', 'מוברש (Brushed)']
    },
    {
        id: 'product-7',
        slug: 'product-7',
        title: 'יחידת מדפים אבן מונוליטי No. 07',
        collection: 'קולקציה 02 — פונקציונלי',
        subtitle: 'Shelf Unit',
        description: 'מדפי אבן הצפים על הקיר, יוצרים תחושת קלילות ויוקרה מאופקת.',
        material: 'אבן טבעית ופלדת אל-חלד',
        images: [
            '/assets/images/nav_bath_storage_color.png',
            '/assets/images/img_6ffab66ff533.webp',
            '/assets/images/img_a4d4fb32a3e9.webp'
        ],
        specs: ['מדפי אבן 20mm', 'מבנה סמוי', 'עומס עד 15 ק"ג למדף'],
        finishes: ['מט', 'משי']
    }
];

export default function BathProductDetails({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = bathProducts.find(p => p.slug === resolvedParams.slug) || bathProducts[0];
    const [activeTab, setActiveTab] = useState('Overview');
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
            {enlargedImage && (
                <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-8" onClick={() => setEnlargedImage(null)}>
                    <Image src={enlargedImage} alt="Enlarged" width={1200} height={1200} className="max-w-full max-h-full object-contain" />
                </div>
            )}

            <main className="w-full">
                <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-center bg-no-repeat bg-cover grayscale" style={{ backgroundImage: `url("${product.images[0]}")` }}></div>
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 items-end pb-24 h-full">
                        <div className="col-span-12 lg:col-span-7 flex flex-col justify-end h-full text-white pb-12 text-right">
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-6 opacity-80">{product.collection}</span>
                            <h1 className="font-serif text-[8vw] leading-[0.85] mb-8 tracking-tighter italic">
                                {product.subtitle.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>{word}{i === 0 ? <br /> : ' '}</React.Fragment>
                                ))}
                            </h1>
                            <div className="flex items-center gap-8 mt-4">
                                <div className="h-px w-24 bg-white/50"></div>
                                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">{product.material}</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-8 pb-12 text-right">
                            <p className="text-xl text-white font-light leading-relaxed mb-4">
                                {product.description}
                            </p>
                            <div className="flex flex-col gap-4">
                                <button className="w-full bg-white text-black py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-opacity-90 transition-all">
                                    תיאום ייעוץ
                                </button>
                                <button className="w-full border border-white/30 text-white py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                    <Bookmark className="text-sm w-4 h-4" />
                                    שמור ללוח השראה
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-32 px-8 flex flex-col justify-center" dir="rtl">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-6 aspect-[3/4] bg-zinc-200 overflow-hidden relative group cursor-pointer mt-12" onClick={() => setEnlargedImage(product.images[0])}>
                                <Image alt="Product detail" width={600} height={800} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={product.images[0]} />
                            </div>
                            <div className="col-span-6 aspect-[3/4] bg-zinc-200 overflow-hidden relative group cursor-pointer -mt-12" onClick={() => setEnlargedImage(product.images[1])}>
                                <Image alt="Product detail" width={600} height={800} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={product.images[1]} />
                            </div>
                            <div className="col-span-12 aspect-[16/9] bg-zinc-200 overflow-hidden relative group cursor-pointer mt-8" onClick={() => setEnlargedImage(product.images[2])}>
                                <Image alt="Product detail" width={1200} height={675} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={product.images[2]} />
                            </div>
                        </div>

                        <div className="lg:pr-12 text-right">
                            <div className="mb-16">
                                <div className="flex gap-10 border-b border-black/10 mb-12">
                                    {['Overview', 'Specs', 'Finishes'].map(tab => (
                                        <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-6 border-b-2 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors ${activeTab === tab ? 'border-black text-black' : 'border-transparent text-black/40 hover:text-black'}`}>
                                            {tab === 'Overview' ? 'סקירה' : tab === 'Specs' ? 'מפרט' : 'גימורים'}
                                        </button>
                                    ))}
                                </div>
                                <div className="space-y-12">
                                    {activeTab === 'Overview' && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase">סקירה</span>
                                            <p className="text-2xl font-serif italic text-black leading-relaxed">{product.description}</p>
                                        </div>
                                    )}
                                    {activeTab === 'Specs' && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase">מפרט</span>
                                            <div className="text-2xl font-serif italic text-black leading-relaxed flex flex-col gap-2">
                                                {product.specs.map((s, i) => <p key={i}>{s}</p>)}
                                            </div>
                                        </div>
                                    )}
                                    {activeTab === 'Finishes' && (
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase">גימורים</span>
                                            <div className="text-2xl font-serif italic text-black leading-relaxed flex flex-col gap-2">
                                                {product.finishes.map((f, i) => <p key={i}>{f}</p>)}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black text-white py-32 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-8 mb-24 flex justify-between items-end text-right">
                        <div className="max-w-xl">
                            <h2 className="font-serif text-[6vw] leading-none mb-8 italic">גלריית פרויקטים</h2>
                            <p className="text-slate-400 text-lg uppercase tracking-widest font-light">צפה ב-{product.title} משולב בפרויקטים. מחקר על שילוב אדריכלי.</p>
                        </div>
                        <Link className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white pb-2 hover:opacity-60 transition-opacity" href="/projects">צפה בכל הפרויקטים</Link>
                    </div>
                    <div className="flex flex-col gap-32">
                        {[
                            { title: 'Nouveau Penthouse', location: 'New York, NY', image: '/assets/images/img_38ac2d605600.webp' },
                            { title: 'Azure Coastal Villa', location: 'Malibu, CA', image: '/assets/images/img_13e3f89e94f3.webp' },
                            { title: 'The Monolith Hotel', location: 'Milan, IT', image: '/assets/images/img_c4c407d8b8f7.webp' },
                        ].map((project, i) => (
                            <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center ${i % 2 === 0 ? '' : 'text-right'}`}>
                                <div className={`lg:col-span-8 aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ${i % 2 === 0 ? '' : 'lg:order-2'}`}>
                                    <Image alt={project.title} width={1200} height={800} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]" src={project.image} />
                                </div>
                                <div className={`lg:col-span-4 px-12 py-12 lg:py-0 ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                                    <span className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase block mb-4">פרויקט 0{i + 1}</span>
                                    <h3 className="text-3xl font-serif italic mb-6">{project.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed tracking-wide">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-32 bg-white">
                    <div className="max-w-5xl mx-auto px-8">
                        <div className="text-center mb-24">
                            <h2 className="font-serif text-[4vw] leading-none mb-6 italic">הורדות טכניות</h2>
                            <div className="w-24 h-px bg-black mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-1 border-t border-slate-200">
                            {[
                                { title: 'מפרט מוצר', type: 'PDF / 2.4 MB' },
                                { title: 'שרטוטי CAD דו-מימדיים', type: 'DWG / 4.8 MB' },
                                { title: 'מודל תלת-מימדי (BIM)', type: 'OBJ / 12.1 MB' },
                                { title: 'מדריך התקנה', type: 'PDF / 1.1 MB' },
                            ].map((doc, i) => (
                                <div key={i} className="group grid grid-cols-12 items-center py-10 px-8 hover:bg-slate-50 transition-all cursor-pointer border-b border-slate-200">
                                    <span className="col-span-1 text-[10px] font-mono text-slate-400">0{i + 1}</span>
                                    <div className="col-span-8 text-right">
                                        <p className="text-lg font-bold tracking-[0.2em] uppercase">{doc.title}</p>
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{doc.type}</p>
                                    </div>
                                    <div className="col-span-3 flex justify-end">
                                        <div className="size-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                                            <Download className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
