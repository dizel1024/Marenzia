import React from 'react';
import { hygraph } from '@/lib/hygraph';
import { GET_ABOUT_PAGE_DATA } from '@/lib/queries';
import AboutContent from './AboutContent';
import { notFound } from 'next/navigation';

export default async function AboutPage() {
  const { aboutPages } = await hygraph.request<{ aboutPages: any[] }>(GET_ABOUT_PAGE_DATA);
  const data = aboutPages[0];

  if (!data) {
    notFound();
  }

  return <AboutContent data={data} />;
}
