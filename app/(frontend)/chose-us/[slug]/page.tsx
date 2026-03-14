import React from 'react';
import { notFound } from 'next/navigation';
import { architects } from '../architects-data';
import ArchitectDetailContent from './ArchitectDetailContent';

export function generateStaticParams() {
  return architects.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const architect = architects.find((a) => a.slug === params.slug);
  if (!architect) return { title: 'לא נמצא | Marenzia' };
  return {
    title: `${architect.name} | בחרנו בנו | Marenzia`,
    description: `פרופיל ${architect.name} מ${architect.studio}. שיתוף פעולה אדריכלי עם מרנזיה.`,
  };
}

export default function ArchitectPage({ params }: { params: { slug: string } }) {
  const architect = architects.find((a) => a.slug === params.slug);
  if (!architect) notFound();
  return <ArchitectDetailContent architect={architect} />;
}
