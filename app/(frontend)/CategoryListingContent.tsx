'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useSearchParams } from 'next/navigation';
import { Filter } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  slug: string;
  category: {
    slug: string;
  };
  mainImage?: {
    url: string;
  };
  productCollection?: {
    title: string;
    slug: string;
  };
  productMaterials?: {
    name: string;
  }[];
  mountingType?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string | null;
  mounting?: string;
}

export default function CategoryListingContent({ 
  products, 
  categories, 
  basePath, 
  title 
}: { 
  products: Product[]; 
  categories: Category[]; 
  basePath: string;
  title: string;
}) {
  const searchParams = useSearchParams();
  const activeCategoryParam = searchParams.get('category') || 'all';
  const activeCategory = activeCategoryParam;
  const activeCollection = searchParams.get('collection') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeMounting = searchParams.get('mounting') || 'all';

  const collections = Array.from(new Set(
    products.filter(p => p.productCollection).map(p => JSON.stringify({ slug: p.productCollection!.slug, name: p.productCollection!.title }))
  )).map(s => JSON.parse(s as string));

  const materials = Array.from(new Set(
    products.filter(p => p.productMaterials).flatMap(p => p.productMaterials!.map(m => m.name))
  ));

  const mountingTypes = Array.from(new Set(
    products.filter(p => p.mountingType).map(p => p.mountingType!)
  ));

  const mountingTypeLabels: Record<string, string> = {
    WALL_MOUNTED: 'תלוי',
    FREESTANDING: 'רצפתי',
  };

  // Find the active category definition to check for compound filters
  const activeCategoryDef = categories.find(c => c.id === activeCategory);
  const isCompoundFilter = activeCategoryDef && activeCategoryDef.mounting;

  const filteredProducts = products.filter(p => {
    let matchCategory: boolean;
    if (activeCategory === 'all') {
      matchCategory = true;
    } else if (isCompoundFilter) {
      // Compound filter: match both category slug AND mounting type
      matchCategory = p.category?.slug === activeCategoryDef.slug && p.mountingType === activeCategoryDef.mounting;
    } else {
      matchCategory = p.category?.slug === activeCategory;
    }
    const matchCollection = activeCollection === 'all' || p.productCollection?.slug === activeCollection;
    const matchMaterial = activeMaterial === 'all' || p.productMaterials?.some(m => m.name === activeMaterial);
    const matchMounting = activeMounting === 'all' || p.mountingType === activeMounting;
    return matchCategory && matchCollection && matchMaterial && matchMounting;
  });

  const createFilterUrl = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  // For category filters, use the category id instead of slug to support compound filters
  const createCategoryFilterUrl = (cat: Category) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat.id !== 'all') {
      params.set('category', cat.id);
    } else {
      params.delete('category');
    }
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
      <main className="pt-48 pb-32 px-6 lg:px-20 max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-20">
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-40 space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8 text-black/40">
                <Filter className="w-4 h-4" />
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase">סוגי מוצרים</h3>
              </div>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href={createCategoryFilterUrl(cat)}
                      className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 block hover:pr-2 ${activeCategory === cat.id
                        ? 'text-[#149cb8] pr-2 border-r-2 border-[#149cb8]'
                        : 'text-black/50 hover:text-black'
                        }${cat.mounting ? ' pr-4' : ''}`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {collections.length > 0 && (
              <div className="pt-12 border-t border-black/5">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">קולקציות</h3>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href={createFilterUrl('collection', 'all')}
                      className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 block hover:pr-2 ${activeCollection === 'all' ? 'text-[#149cb8] pr-2 border-r-2 border-[#149cb8]' : 'text-black/50 hover:text-black'}`}
                    >
                      הכל
                    </Link>
                  </li>
                  {collections.map((col: any) => (
                    <li key={col.slug}>
                      <Link
                        href={createFilterUrl('collection', col.slug)}
                        className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 block hover:pr-2 ${activeCollection === col.slug ? 'text-[#149cb8] pr-2 border-r-2 border-[#149cb8]' : 'text-black/50 hover:text-black'}`}
                      >
                        {col.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {materials.length > 0 && (
              <div className="pt-12 border-t border-black/5">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">חומריות</h3>
                <div className="flex flex-wrap gap-2 text-[10px] items-center">
                  <Link
                    href={createFilterUrl('material', 'all')}
                    className={`px-3 py-1 rounded-full tracking-widest font-bold transition-colors ${activeMaterial === 'all' ? 'bg-[#149cb8] text-white' : 'bg-black/5 text-black/60 hover:bg-black/10'}`}
                  >
                    הכל
                  </Link>
                  {materials.map((mat: any) => (
                    <Link
                      key={mat}
                      href={createFilterUrl('material', mat)}
                      className={`px-3 py-1 rounded-full tracking-widest font-bold transition-colors ${activeMaterial === mat ? 'bg-[#149cb8] text-white' : 'bg-black/5 text-black/60 hover:bg-black/10'}`}
                    >
                      {mat}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {mountingTypes.length > 0 && (
              <div className="pt-12 border-t border-black/5">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-8">סוג התקנה</h3>
                <div className="flex flex-wrap gap-2 text-[10px] items-center">
                  <Link
                    href={createFilterUrl('mounting', 'all')}
                    className={`px-3 py-1 rounded-full tracking-widest font-bold transition-colors ${activeMounting === 'all' ? 'bg-[#149cb8] text-white' : 'bg-black/5 text-black/60 hover:bg-black/10'}`}
                  >
                    הכל
                  </Link>
                  {mountingTypes.map((mt: string) => (
                    <Link
                      key={mt}
                      href={createFilterUrl('mounting', mt)}
                      className={`px-3 py-1 rounded-full tracking-widest font-bold transition-colors ${activeMounting === mt ? 'bg-[#149cb8] text-white' : 'bg-black/5 text-black/60 hover:bg-black/10'}`}
                    >
                      {mountingTypeLabels[mt] || mt}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        <div className="flex-1">
          <div className="mb-20 space-y-4">
            <p className="text-[10px] tracking-[0.5em] text-black/30 uppercase font-bold">{title}</p>
            <h1 className="font-serif text-6xl md:text-8xl italic font-light tracking-tight text-black">
              {categories.find(c => c.id === activeCategory)?.name || title}
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
                  <Link href={`${basePath}/${product.slug}`} className="block space-y-8">
                    <div className="aspect-[4/5] bg-zinc-100 overflow-hidden relative border border-black/5">
                      <Image
                        src={product.mainImage?.url || '/assets/images/placeholder.png'}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700"></div>
                      <div className="absolute bottom-10 right-10 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-black tracking-widest px-4 py-2 uppercase">צפה בפרטים</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] font-black tracking-[0.3em] text-[#149cb8] uppercase">
                        {product.productCollection?.title || 'קולקציה'}
                      </span>
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
