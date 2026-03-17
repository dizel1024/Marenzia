'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Bookmark, ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';
import { useInspiration } from '@/components/InspirationContext';
import ConsultationModal from '@/components/ConsultationModal';

interface Product {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  overview?: { html: string };
  specifications?: { html: string };
  finishes?: { html: string };
  mainImage?: { url: string };
  gallery: { url: string }[];
  technicalDownloads: { url: string; fileName: string }[];
  productCollection?: {
    id: string;
    title: string;
    slug: string;
    collectionProducts: {
      id: string;
      title: string;
      slug: string;
      mainImage?: { url: string };
    }[];
  };
  productMaterials: {
    id: string;
    name: string;
    image?: { url: string };
  }[];
  relatedProjects: {
    id: string;
    title: string;
    slug: string;
    location: string;
    mainImage?: { url: string };
  }[];
}

export default function ProductDetailContent({ product, categorySlug }: { product: Product, categorySlug: string }) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSaved, addItem, removeItem } = useInspiration();

  const saved = isSaved(product.id);

  const images = [
    product.mainImage?.url,
    ...(product.gallery?.map(img => img.url) || [])
  ].filter(Boolean) as string[];

  const handleSaveToggle = () => {
    if (saved) {
      removeItem(product.id);
    } else {
      addItem({
        id: product.id,
        slug: product.slug,
        title: product.title,
        image: images[0],
        categorySlug
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
      <AnimatePresence>
        {enlargedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4 lg:p-8"
          >
            <button 
              className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              onClick={() => setEnlargedImageIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center" dir="ltr">
              {images.length > 1 && (
                <button 
                  className="absolute left-4 lg:left-12 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all z-10 bg-black/50 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnlargedImageIndex(prev => prev === 0 ? images.length - 1 : (prev || 0) - 1);
                  }}
                >
                  <ChevronLeft className="w-8 h-8 ml-[-2px]" />
                </button>
              )}

              <div className="relative w-full max-w-6xl h-[85vh]">
                <Image 
                  src={images[enlargedImageIndex]} 
                  alt={`${product.title} gallery view`} 
                  fill
                  className="object-contain"
                  priority 
                />
              </div>

              {images.length > 1 && (
                <button 
                  className="absolute right-4 lg:right-12 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all z-10 bg-black/50 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnlargedImageIndex(prev => prev === images.length - 1 ? 0 : (prev || 0) + 1);
                  }}
                >
                  <ChevronRight className="w-8 h-8 mr-[-2px]" />
                </button>
              )}
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em] font-mono">
              {enlargedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-1000" 
              style={{ backgroundImage: `url("${images[0] || '/assets/images/placeholder.png'}")` }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-12 gap-8 items-end pb-24 h-full">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-end h-full text-white pb-12 text-right">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-6 opacity-80">
                {product.productCollection?.title || 'קולקציה בלעדית'}
              </span>
              <h1 className="font-serif text-[8vw] leading-[0.85] mb-8 tracking-tighter italic">
                {product.title}
              </h1>
              <div className="flex items-center gap-8 mt-4">
                <div className="h-px w-24 bg-white/50"></div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
                  {product.productMaterials?.[0]?.name || 'אבן טבעית'}
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-8 pb-12 text-right">
              <div 
                className="text-xl text-white font-light leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: product.overview?.html || '' }}
              />
              <div className="flex flex-col gap-4">
                <button onClick={() => setIsModalOpen(true)} className="w-full bg-white text-black py-6 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-opacity-90 transition-all">
                  תיאום ייעוץ
                </button>
                <button onClick={handleSaveToggle} className={`w-full border py-6 text-[11px] font-bold tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 ${saved ? 'bg-white text-black border-white' : 'border-white/30 text-white hover:bg-white/10'}`}>
                  <Heart className="text-sm w-4 h-4 transition-all duration-300" fill={saved ? "currentColor" : "transparent"} />
                  {saved ? 'נשמר בלוח ההשראה' : 'שמור ללוח השראה'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Details & Tabs Section */}
        <section className="bg-white py-32 px-8 flex flex-col justify-center" dir="rtl">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="grid grid-cols-12 gap-4">
              {images.slice(0, 3).map((img, i) => (
                <div 
                  key={i}
                  className={`${i === 2 ? 'col-span-12 aspect-[16/9] mt-8' : 'col-span-6 aspect-[3/4] ' + (i === 1 ? '-mt-12' : 'mt-12')} bg-zinc-200 overflow-hidden relative group cursor-pointer`} 
                  onClick={() => setEnlargedImageIndex(i)}
                >
                  <Image alt={`${product.title} detail ${i+1}`} width={i === 2 ? 1200 : 600} height={i === 2 ? 675 : 800} className="h-full w-full object-cover transition-all duration-700" src={img} />
                  {i === 2 && images.length > 3 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/60">
                      <span className="text-white text-4xl font-serif italic">+ {images.length - 3}</span>
                    </div>
                  )}
                </div>
              ))}
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
                      <div className="text-2xl font-serif italic text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: product.overview?.html || '' }} />
                    </div>
                  )}
                  {activeTab === 'Specs' && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase">מפרט</span>
                      <div className="text-2xl font-serif italic text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: product.specifications?.html || '' }} />
                    </div>
                  )}
                  {activeTab === 'Finishes' && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase">גימורים</span>
                      <div className="text-2xl font-serif italic text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: product.finishes?.html || '' }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Stones Strip */}
              {product.productMaterials.length > 0 && (
                <div className="pt-12 border-t border-black/10">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-black/40 uppercase block mb-8">חומרים זמינים</span>
                  <div className="flex flex-wrap gap-8">
                    {product.productMaterials.map(stone => (
                      <div key={stone.id} className="flex flex-col items-center gap-4 group cursor-pointer">
                        <div className="w-16 h-16 rounded-full overflow-hidden border border-black/10 group-hover:scale-110 transition-transform">
                          <Image src={stone.image?.url || '/assets/images/placeholder.png'} alt={stone.name} width={64} height={64} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-bold tracking-widest uppercase">{stone.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        {product.relatedProjects.length > 0 && (
          <section className="bg-black text-white py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 mb-24 flex justify-between items-end text-right">
              <div className="max-w-xl">
                <h2 className="font-serif text-[6vw] leading-none mb-8 italic">גלריית פרויקטים</h2>
                <p className="text-slate-400 text-lg uppercase tracking-widest font-light">צפה ב-{product.title} משולב בפרויקטים. מחקר על שילוב אדריכלי.</p>
              </div>
              <Link className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-white pb-2 hover:opacity-60 transition-opacity" href="/projects">צפה בכל הפרויקטים</Link>
            </div>
            <div className="flex flex-col gap-32">
              {product.relatedProjects.map((project, i) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.slug}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-center group cursor-pointer ${i % 2 === 0 ? '' : 'text-right'}`}
                >
                  <div className={`lg:col-span-8 aspect-[16/10] overflow-hidden transition-all duration-1000 ${i % 2 === 0 ? '' : 'lg:order-2'}`}>
                    <Image alt={project.title} width={1200} height={800} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]" src={project.mainImage?.url || '/assets/images/placeholder.png'} />
                  </div>
                  <div className={`lg:col-span-4 px-12 py-12 lg:py-0 ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                    <span className="text-[10px] font-bold tracking-[0.5em] text-slate-500 uppercase block mb-4">פרויקט 0{i + 1}</span>
                    <h3 className="text-3xl font-serif italic mb-6 group-hover:text-white/70 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed tracking-wide">{project.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Similar Items Section */}
        {product.productCollection?.collectionProducts && product.productCollection.collectionProducts.length > 0 && (
          <section className="py-32 bg-[#f0f0f0]">
            <div className="max-w-7xl mx-auto px-8">
               <div className="mb-20 text-right">
                  <span className="text-[10px] font-bold tracking-[0.5em] text-black/40 uppercase block mb-4">עוד מסדרת {product.productCollection.title}</span>
                  <h2 className="font-serif text-5xl italic">פריטים דומים</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {product.productCollection.collectionProducts.map(item => (
                    <Link key={item.id} href={`/${categorySlug}/${item.slug}`} className="group block text-right">
                       <div className="aspect-[4/5] overflow-hidden bg-white relative mb-8">
                          <Image src={item.mainImage?.url || '/assets/images/placeholder.png'} alt={item.title} fill className="object-cover transition-all duration-700" />
                       </div>
                       <h3 className="font-serif text-2xl italic mb-2">{item.title}</h3>
                       <span className="text-[9px] font-bold tracking-widest uppercase text-black/40">צפה בפרטים</span>
                    </Link>
                  ))}
               </div>
            </div>
          </section>
        )}

        {/* Downloads Strip */}
        {product.technicalDownloads.length > 0 && (
          <section className="py-32 bg-white">
            <div className="max-w-5xl mx-auto px-8">
              <div className="text-center mb-24">
                <h2 className="font-serif text-[4vw] leading-none mb-6 italic">הורדות טכניות</h2>
                <div className="w-24 h-px bg-black mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 gap-1 border-t border-slate-200">
                {product.technicalDownloads.map((doc, i) => (
                  <a key={i} href={doc.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-12 items-center py-10 px-8 hover:bg-slate-50 transition-all cursor-pointer border-b border-slate-200">
                    <span className="col-span-1 text-[10px] font-mono text-slate-400">0{i + 1}</span>
                    <div className="col-span-8 text-right">
                      <p className="text-lg font-bold tracking-[0.2em] uppercase">{doc.fileName || 'מסמך טכני'}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">לחץ להורדה</p>
                    </div>
                    <div className="col-span-3 flex justify-end">
                      <div className="size-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.title} 
      />
    </div>
  );
}
