'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function MaterialsContent({ data }: { data: any }) {
  return (
    <div className="bg-white text-[#0a0a0a] font-sans rtl" dir="rtl">
        <main className="pt-0">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <div className="absolute inset-0 grayscale scale-105">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDa3FZuH_384naEpwbo9uDFkL6YdZOEJbWYhQktmgjbGUeAVseR6UFQQ2ulqTvFoCFH0IiPqPqr9UlhatEAb3rljSPisOJbWJrf7EKrkVc2MXDya5ntWJg_5Bjd86G9OQR7hvvEJhMoAUOZG4osoL25Rrbwr7M0ZBN-P6qpUiXZTK0mlWif5hnHJQkC9j8frJKNp7ixJk6aZ2lr9MIaaUJq5vlK-iZZXwc8fkFrXi0o-OVxIYvaNZ9zBg1HewJ_wGElLirGHnNUvLq"
                        alt="Hero"
                        fill
                        className="object-cover relative"
                        unoptimized
                    />
                </div>
                <div className="relative z-20 h-full flex flex-col justify-end items-center pb-24 px-6 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-serif italic font-light tracking-tight mb-4"
                    >
                        עיצוב פוגש אבן טבעית
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 96 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="w-px bg-white/40 mt-8"
                    ></motion.div>
                </div>
            </section>

            {/* Our Heritage Section */}
            <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 order-2 lg:order-1"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 block mb-6 font-bold">יסודות</span>
                        <h3 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8 text-[#0a0a0a]">
                            מורשת של אומנות איטלקית.
                        </h3>
                        <p className="text-zinc-600 leading-relaxed text-lg mb-10 font-light">
                            נולד בלב טוסקנה, מרנזיה הופכת אבן גולמית וקדומה לשירה אדריכלית. המורשת שלנו היא לא רק במחצבות שמהן אנו שואבים, אלא בשליטה הבין-דורית של אומנים המבינים את שפתו השקטה של השיש.
                        </p>
                        <a className="inline-flex items-center gap-4 group" href="/about">
                            <span className="text-xs uppercase tracking-[0.2em] font-bold">גלו את המקור</span>
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 order-1 lg:order-2"
                    >
                        <div className="aspect-[4/5] grayscale overflow-hidden relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFwz3l2dBgE_HNq3VF8mbz8KI_sUQD9KTRz68Ui76TjHbvbmbeQgfzb2aH-XL4N7ua4y2-hngxtYWo6byqBLlRvsQM1dtw2cxjnBlRdg6jXrneUcECdfYbjXzJjbcYBg_NQYDMEHBAE2__jH6aE4ImWmun_Q41KObdW4OcqbDcf1xz8feb2jm61-jjwCcqQdkZ12AqH1-Ee0mgUCu_J4wcEOyibYV0UzBVg2AH5eZK7GFwZZWFQHXzqswh7BuzS3SXnZfes1XNLGgr"
                                alt="Italian quarry"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Full Bleed Architectural Image */}
            <section className="w-full aspect-video lg:h-[80vh] overflow-hidden grayscale relative">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gosnj0tKPteJ1BrbDi-TWsyKmdtW3cGSss7_jAJjAq7vME5bkxwdYVr80Hy3zvezqAdFm3lZTT-Mhwx0ZlK_tpu8Y2OahKh6B5A_lskYGcsu7RjI9cO4SqK9-9Qg6AjKrYqONFDpr6XI_vIay_Alp25NVtqMog2eJ9sqUxJbuTB0riTD3Ju3kAu1J7mDlu3rQCioUqnHmnL6ivEZ2DS-t-6T7z9EU7H7O--r8fHu4H0xsv_eBJpi8TfwFbvmR3BxjYoVKvgPEzZe"
                    alt="Minimal sculptural stone"
                    fill
                    className="object-cover"
                    unoptimized
                />
            </section>

            {/* Process & Material Section */}
            <section className="py-24 lg:py-40 bg-zinc-50 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="aspect-square grayscale mb-12 relative overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjZeob8-hbvTJXPe9SjsSOca4R8SUbS20uGL5P7KcKYeeMW_ZY8D6aMmrSwYfzFkNWs27kkoC8_JwVjbzUqeyJjPTSOnzg8mxWcGN5fx2baQuSr3ADGeUtNBwppkbBAjDR5ufAXvWUPhRcfix_noFmSWJhHS1UYaAWZXm5h7aISMtxhSSpB94vrbK7mfFvxRp3UCBeDx1i8rgtIxs-xbwZzqzOFs01AlD9rLEK-jRv36OI0j1bccH5AkoMDe50GAXXi-5lc2DR1QbW"
                                    alt="The Material"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h4 className="font-serif text-3xl mb-6 text-[#0a0a0a]">החומר</h4>
                            <p className="text-zinc-500 font-light leading-relaxed max-w-md">
                                אנו בוחרים רק את הקלקטה והקרארה המשובחים ביותר, תוך התמקדות בקצב האורגני של הגידים. כל לוח נבחר בקפידה עבור הפוטנציאל הסיפורי שלו.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:pt-40"
                        >
                            <div className="aspect-square grayscale mb-12 relative overflow-hidden">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKIRf3xcQAdsMGH60AcUvFvFJeJ_RWPBlXo9PbLAA5q6LalzqNI9GccNzo-gd6KlCgzHQt0F_3TmZZCKWShZ1GN-4mYJSUzo1EKIYlpLJPPphYmC7_pDvtZ099yo5hb0LFVnz5iTyAmwxOX3Gy6u7nFW3dcj3Cb0oV69Dlt4cTGWC5QGnllS8PwzNw_33ShJDuxeCQ9D2U9CZByIFhggH6eM8PMDqRG8RaWCIGs8pvJPX4z30RGX1b-u3rmxP4NI4UTF9BSHV2nwhX"
                                    alt="The Vision"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h4 className="font-serif text-3xl mb-6 text-[#0a0a0a]">החזון</h4>
                            <p className="text-zinc-500 font-light leading-relaxed max-w-md">
                                פילוסופיה של צמצום. על ידי הפשטת המיותר, אנו חושפים את נשמת האבן. חדשנות פוגשת מסורת בכל חיתוך.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-32 px-6 lg:px-20 text-center bg-white">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-5xl text-zinc-300 mb-8 italic font-serif block leading-none">"</span>
                    <blockquote className="font-serif text-3xl md:text-5xl italic font-light leading-tight text-[#0a0a0a] mb-12">
                        האבן היא הזיכרון של כדור הארץ. תפקידנו הוא פשוט לאצור את סיפורה עבור הבית המודרני.
                    </blockquote>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">פייטרו מרנזיה, מייסד</p>
                </motion.div>
            </section>

            {/* Final Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 pb-1 bg-white">
                <div className="aspect-[3/4] grayscale relative hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz-q3N-m2gPixdsE6jq8TWQr3NH6LrG90xX-J3TRm2fZknbo9vvUrYaXvlNU_c3B8vhaGDSWxqjgHTsfbvAMTxZQ57RlCJrkme62rajvHagEUo9nZOvW0j2-nt1aZazsUbUZ8Pkv4Tb29rqosUpDh5Y3HNgv9ZsyMhyw44IKSUVvo8B-QYe3XmAKWD7IoeFuMwu7Q7qu7J7G1of3_OqJvXKDjVD0uKpur0vYNYQyKvQ0QuBVxlh_kgS-efI71sOwGI13mvJEix56e1"
                        alt="Grid 1"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="aspect-[3/4] grayscale relative hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0WzAnc1Dk3Z0VF1HOjqWLPOFigRMYdI1IdFlzjpePjDps2KT-56iE5ablPbMoAR_VrU7lDzr3b_dFDnt2ERVzvVgTAAfag4NJCbXwelaFUivEueiSU_m7g__MXrJFM3CMx-3woa36CQmyPIEV1Du4wWE_zjw_w0w_q1c-l8S18NJB-rRIzqef0J-ObgeQlkzguXfSGZPgptQXcGWIbCHE3XUQ_kWE3G6jt9pURgpyKbLPRGCx2h3MiXqv4v7QTeTE5ChUWj78fQ0"
                        alt="Grid 2"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="aspect-[3/4] grayscale relative hover:grayscale-0 transition-all duration-700">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnRE_Rma0AusZcVuCQBG2Rp9Num4wfVeaPLPJAyGzSKBj1cb8Z8xZBIddpPZcX1tUrNun6uux-9GL_jHG3oWMVNTncbf-4ANVVyLx4nu4Y5oijV84ONtPUZWlJMyfaNhB1WmhEKKBZDbWk7Jcx_589F4VjePGjShOLD0fOqEnaIdlIxnW45bia9ZKuLvKwxtgvuoQxrPMwmjaPyt5uuMzSORWG98_3hCqzZiJoA_MbGpIgRqtDDN3D6ZNFiCqEoK-TR53k8_6qjMYM"
                        alt="Grid 3"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </section>
        </main>
    </div>
  );
}
