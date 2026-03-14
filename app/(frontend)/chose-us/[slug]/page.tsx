import React from 'react';
import { notFound } from 'next/navigation';
import { architects } from '../architects-data';
import ArchitectDetailContent from './ArchitectDetailContent';

export function generateStaticParams() {
  return architects.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const architect = architects.find((a) => a.slug === slug);
  if (!architect) return { title: 'לא נמצא | Marenzia' };
  return {
    title: `${architect.name} | בחרנו בנו | Marenzia`,
    description: `פרופיל ${architect.name} מ${architect.studio}. שיתוף פעולה אדריכלי עם מרנזיה.`,
  };
}

export default async function ArchitectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const architect = architects.find((a) => a.slug === slug);
  if (!architect) notFound();
  return <ArchitectDetailContent architect={architect} />;
}
