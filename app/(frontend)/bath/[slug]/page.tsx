import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_PRODUCT_DETAILS } from '@/lib/queries';
import ProductDetailContent from './ProductDetailContent';
import { notFound } from 'next/navigation';

export default async function BathProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { product } = await hygraph.request<{ product: any }>(GET_PRODUCT_DETAILS, {
    slug: resolvedParams.slug,
  });

  if (!product) {
    notFound();
  }

  return <ProductDetailContent product={product} categorySlug="bath" />;
}
