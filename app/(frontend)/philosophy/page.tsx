import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_PHILOSOPHY_PAGE_DATA } from '@/lib/queries';
import PhilosophyContent from './PhilosophyContent';
import { notFound } from 'next/navigation';

export default async function PhilosophyPage() {
  const { philosophyPages } = await hygraph.request<{ philosophyPages: any[] }>(GET_PHILOSOPHY_PAGE_DATA);
  const data = philosophyPages[0];

  if (!data) {
    notFound();
  }

  return <PhilosophyContent data={data} />;
}
