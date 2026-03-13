import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_MATERIALS_PAGE_DATA } from '@/lib/queries';
import MaterialsContent from './MaterialsContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function MaterialsPage() {
  const { materialsPages } = await hygraph.request<{ materialsPages: any[] }>(GET_MATERIALS_PAGE_DATA);
  const data = materialsPages?.[0];

  if (!data) {
    notFound();
  }

  return <MaterialsContent data={data} />;
}
