import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_PROCESS_PAGE_DATA } from '@/lib/queries';
import ProcessContent from './ProcessContent';
import { notFound } from 'next/navigation';

export default async function ProcessPage() {
  const { processPages } = await hygraph.request<{ processPages: any[] }>(GET_PROCESS_PAGE_DATA);
  const data = processPages[0];

  if (!data) {
    notFound();
  }

  return <ProcessContent data={data} />;
}
