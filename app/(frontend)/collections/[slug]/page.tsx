import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_COLLECTION_DETAILS } from '@/lib/queries';
import CollectionDetailContent from './CollectionDetailContent';
import { notFound } from 'next/navigation';

export default async function CollectionInnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { collection } = await hygraph.request<{ collection: any }>(GET_COLLECTION_DETAILS, {
    slug: resolvedParams.slug,
  });

  if (!collection) {
    notFound();
  }

  return <CollectionDetailContent collection={collection} />;
}
