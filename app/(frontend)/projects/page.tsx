import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hygraph } from '@/lib/hygraph';
import { GET_PROJECTS } from '@/lib/queries';
import ProjectsClient from './ProjectsClient';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const data = await hygraph.request(GET_PROJECTS);
  const projects = data.projects || [];

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
      <main className="pt-40 pb-24 px-6 lg:px-20 max-w-[1800px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-6xl italic font-light tracking-tight text-black">פרויקטים נבחרים</h2>
            <p className="mt-6 text-lg font-light text-black/60 leading-relaxed">
              אוסף אצור של התערבויות אדריכליות, משטחי יוקרה וחללי אמבט מונוליטיים שתוכננו למגורים עכשוויים.
            </p>
          </div>
        </div>

        <ProjectsClient projects={projects} />
      </main>
    </div>
  );
}
