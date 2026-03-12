'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { getColorfulMainImage } from '@/lib/colorful-fallbacks';

interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  year: string;
  mainImage: {
    url: string;
  };
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-black/60">No projects found.</p>
      </div>
    );
  }

  return (
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
          <Link href={`/projects/${project.slug}`}>
            <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-200">
              <Image 
                src={getColorfulMainImage(project.slug, project.mainImage?.url)}
                alt={project.title}
                width={800}
                height={1000}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-right mt-4">
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
  );
}
