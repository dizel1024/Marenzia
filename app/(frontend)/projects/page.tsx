'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Menu, Square, ArrowLeft } from 'lucide-react';

const projects = [
  { id: 1, title: 'Nouveau Penthouse', location: 'New York, NY', year: '2023', image: '/assets/images/img_38ac2d605600.webp' },
  { id: 2, title: 'Azure Coastal Villa', location: 'Malibu, CA', year: '2023', image: '/assets/images/img_13e3f89e94f3.webp' },
  { id: 3, title: 'The Monolith Hotel', location: 'Milan, IT', year: '2022', image: '/assets/images/img_c4c407d8b8f7.webp' },
  { id: 4, title: 'Carrara Showroom', location: 'Carrara, IT', year: '2022', image: '/assets/images/img_69be383dc846.webp' },
  { id: 5, title: 'Desert Retreat', location: 'Palm Springs, CA', year: '2021', image: '/assets/images/img_6ffab66ff533.webp' },
  { id: 6, title: 'Highline Residence', location: 'Chelsea, NY', year: '2021', image: '/assets/images/img_a4d4fb32a3e9.webp' },
];

export default function ProjectsPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col gap-5 cursor-pointer"
            >
              <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-200">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col text-right">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-black">{project.title}</h3>
                  <div className="mt-1 flex items-center justify-end gap-2 text-[10px] font-medium uppercase tracking-widest text-black/40">
                    <span>{project.year}</span>
                    <span className="h-px w-4 bg-black/20"></span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      
    </div>
  );
}
