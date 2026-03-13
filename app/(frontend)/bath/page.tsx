import React, { Suspense } from 'react';

export const dynamic = 'force-dynamic';
import { hygraph } from '@/lib/hygraph';
import { GET_PRODUCTS_BY_TYPE } from '@/lib/queries';
import CategoryListingContent from '../CategoryListingContent';

const categories = [
  { id: 'all', name: 'הכל', slug: null },
  { id: 'basins', name: 'כיורי רחצה', slug: 'basins' },
  { id: 'vanity', name: 'ארון אמבטיה', slug: 'vanity' },
  { id: 'storage', name: 'ארונות אחסון ומדפים', slug: 'storage' },
  { id: 'accessories', name: 'אביזרי אמבטיה', slug: 'accessories' },
  { id: 'taps', name: 'ברזים ואביזרים', slug: 'taps' },
  { id: 'rails', name: 'מתלי מגבות', slug: 'rails' },
];

async function BathContent() {
  const { products } = await hygraph.request<{ products: any[] }>(GET_PRODUCTS_BY_TYPE, {
    type: 'BATH',
  });

  return (
    <CategoryListingContent 
      products={products} 
      categories={categories} 
      basePath="/bath" 
      title="קולקציית אמבט" 
    />
  );
}

export default function BathProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center font-serif text-2xl italic">טוען אוסף אמבט...</div>}>
      <BathContent />
    </Suspense>
  );
}
