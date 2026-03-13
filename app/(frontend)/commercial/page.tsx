import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_COMMERCIAL_PAGE_DATA } from '@/lib/queries';
import CommercialContent from './CommercialContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CommercialPage() {
  const { commercialPages } = await hygraph.request<{ commercialPages: any[] }>(GET_COMMERCIAL_PAGE_DATA);
  const data = commercialPages?.[0];

  if (!data) {
    notFound();
  }

  return <CommercialContent data={data} />;
}
