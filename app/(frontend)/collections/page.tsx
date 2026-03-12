import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_COLLECTIONS } from '@/lib/queries';
import CollectionsGrid from './CollectionsGrid';

export default async function CollectionsPage() {
  const { collections } = await hygraph.request<{ collections: any[] }>(GET_COLLECTIONS);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1440px] mx-auto pt-32">
        <CollectionsGrid collections={collections} />
      </main>
    </div>
  );
}
