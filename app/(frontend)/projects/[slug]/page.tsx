import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { hygraph } from '@/lib/hygraph';
import { GET_PROJECT_DETAILS, GET_PROJECTS } from '@/lib/queries';
import { getColorfulMainImage, getColorfulGallery } from '@/lib/colorful-fallbacks';

export const dynamic = 'force-dynamic';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await hygraph.request(GET_PROJECT_DETAILS, {
    slug: resolvedParams.slug,
  });

  const project = data.project;

  if (!project) {
    notFound();
  }

  // Use dynamic content or fallbacks to preserve the design even if data is missing
  const heroImage = getColorfulMainImage(project.slug, project.mainImage?.url);
  const colorfulGallery = getColorfulGallery(project.slug, project.gallery);
  const quote = project.quote || "האור מגדיר את האבן, מעניק משקל לריק וקול לצורה המונוליטית.";
  const overviewHtml = project.overview?.html || "<p>פרטי הפרויקט אינם תוארים עדיין. נבחרו משטחים בקפידה כדי להבטיח המשכיות.</p>";
  
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-right" dir="rtl">
      <main className="pt-32">
        <section className="relative h-[80vh] w-full overflow-hidden bg-black">
          <div className="absolute inset-0 bg-cover bg-center brightness-75 transition-transform duration-1000 scale-105" style={{ backgroundImage: `url('${heroImage}')` }}></div>
          <div className="relative z-10 flex h-full items-center justify-center">
            <h1 className="font-serif text-7xl md:text-[8rem] text-white/90 text-center leading-none uppercase tracking-wide">
              {project.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 2 !== 0 ? 'italic' : ''}>
                  {word} <br/>
                </span>
              ))}
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-8 py-32 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-8 text-right">
              <h2 className="font-serif text-4xl md:text-5xl italic leading-tight text-black/80">
                &quot;{quote}&quot;
              </h2>
              <div 
                className="mt-16 text-lg font-light leading-relaxed text-black/60 max-w-xl prose prose-p:text-black/60 prose-a:text-black"
                dangerouslySetInnerHTML={{ __html: overviewHtml }}
              />
            </div>
            <div className="md:col-span-4 space-y-10 pt-4 text-right">
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">מיקום</p>
                <p className="text-sm font-medium">{project.location || 'לא צוין'}</p>
              </div>
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">אדריכל</p>
                <p className="text-sm font-medium">{project.architect || 'לא צוין'}</p>
              </div>
              <div className="h-px bg-black/10"></div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 mb-4">שנה</p>
                <p className="text-sm font-medium">{project.year || 'לא צוין'}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="mx-auto max-w-[1800px] px-8">
            
            {/* Gallery Section */}
            {colorfulGallery && colorfulGallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-40">
                <div className="md:col-span-8 aspect-[16/10] overflow-hidden">
                  <Image alt="Project detail" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src={colorfulGallery[0].url}/>
                </div>
                {project.products && project.products.length > 0 && (
                  <div className="md:col-span-3 md:col-start-10 text-right">
                    <div className="group cursor-pointer border border-black/5 p-8 bg-white">
                      <div className="aspect-square mb-6 overflow-hidden bg-zinc-100">
                        <Image alt="Product detail" width={400} height={400} className="h-full w-full object-cover brightness-110" src={project.products[0].mainImage?.url || '/assets/images/placeholder.png'}/>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">מוצר קשור</span>
                      <h3 className="font-serif text-2xl mt-2 mb-6">{project.products[0].title}</h3>
                      <Link className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 w-fit group-hover:border-black transition-all" href={`/bath/${project.products[0].slug}`}>
                        צפה במוצר <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Additional Gallery Items if any */}
            {colorfulGallery && colorfulGallery.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-40">
                {project.products && project.products.length > 1 && (
                  <div className="md:col-span-3 md:col-start-2 text-right order-2 md:order-1">
                    <div className="group cursor-pointer border border-black/5 p-8 bg-white">
                      <div className="aspect-square mb-6 overflow-hidden bg-zinc-100">
                        <Image alt="Product detail" width={400} height={400} className="h-full w-full object-cover brightness-110" src={project.products[1].mainImage?.url || '/assets/images/placeholder.png'}/>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">מוצר קשור</span>
                      <h3 className="font-serif text-2xl mt-2 mb-6">{project.products[1].title}</h3>
                      <Link className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 w-fit group-hover:border-black transition-all" href={`/bath/${project.products[1].slug}`}>
                        צפה במוצר <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
                
                <div className={`md:col-span-6 overflow-hidden ${project.products && project.products.length > 1 ? 'md:col-start-7 order-1 md:order-2 aspect-[4/5]' : 'md:col-span-12 w-full aspect-[21/9]'}`}>
                  <Image alt="Stone architectural shot" width={1800} height={1000} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" src={colorfulGallery[1].url}/>
                </div>
              </div>
            )}

            {/* Third Gallery Item if any */}
            {colorfulGallery && colorfulGallery.length > 2 && (
              <div className="w-full aspect-[21/9] overflow-hidden mb-40 relative group">
                <Image alt="Penthouse view" width={1800} height={800} className="h-full w-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-110" src={colorfulGallery[2].url}/>
              </div>
            )}

            {/* Next Project Placeholder or Link */}
            <Link href="/projects" className="bg-black text-white py-32 overflow-hidden relative group cursor-pointer block">
              <div className="mx-auto max-w-[1440px] px-8 relative z-10 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.4em] mb-8 text-white/50">חזרה</span>
                <h2 className="font-serif text-5xl md:text-8xl italic text-center transition-transform duration-500 group-hover:-translate-y-2">לכל הפרויקטים</h2>
                <div className="mt-12 h-px w-24 bg-white/30 group-hover:w-48 transition-all duration-700"></div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
