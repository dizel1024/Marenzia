import React, { Suspense } from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_PRODUCTS_BY_TYPE } from '@/lib/queries';
import CategoryListingContent from '../CategoryListingContent';

const categories = [
    { id: 'all', name: 'הכל', slug: null },
    { id: 'fragrance', name: 'ניחוחות ומחזיקי נרות', slug: 'fragrance' },
    { id: 'racks', name: 'מתלים וווים', slug: 'racks' },
    { id: 'lighting', name: 'תאורה', slug: 'lighting' },
    { id: 'mirrors', name: 'מראות', slug: 'mirrors' },
    { id: 'home-accessories', name: 'אביזרים לבית', slug: 'home-accessories' },
];

async function DecorContent() {
    const { products } = await hygraph.request<{ products: any[] }>(GET_PRODUCTS_BY_TYPE, {
        type: 'DECOR',
    });

    return (
        <CategoryListingContent 
            products={products} 
            categories={categories} 
            basePath="/decor" 
            title="Marenzia Objects" 
        />
    );
}

export default function DecorPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center font-serif text-2xl italic">טוען אוסף דקור...</div>}>
            <DecorContent />
        </Suspense>
    );
}
