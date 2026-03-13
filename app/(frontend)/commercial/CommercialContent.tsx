'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CommercialPageData {
  heroImage: { url: string };
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  service1Title: string;
  service1Text: string;
  service2Title: string;
  service2Text: string;
  service3Title: string;
  service3Text: string;
  formTitle: string;
  formSubtitle: string;
}

export default function CommercialContent({ data }: { data: CommercialPageData }) {
  const [formData, setFormData] = useState({
    name: '', email: '', projectType: '', scale: '', location: '', details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (!data) return null;

  const inputClasses = "w-full bg-transparent border-0 border-b border-[#1A1A1A] py-2 text-sm placeholder-[#1A1A1A]/30 focus:ring-0 focus:border-[#ec5b13] px-0 shadow-none outline-none appearance-none rounded-none";

  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans rtl" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 to-black/60 pointer-events-none"></div>
        <div className="absolute inset-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZtdWogZQlyhysvOn0ccNw9YpJvBmxzC8i117uDa35hHEmxuKfe4T6aIewzKKF5Fp62MrrizNapH6R3VHHqUdtCPZLodJPKpPAhsbeEJ1JtHZ-8X2TaRwpup0IiNawJvkytE89gr4VwXM5jCTS2Mx-hNCsG2n7Uq3-JsopL0oTgywTIblf7kV8aZSyl405PvhJZxjg4kXUjyeuNKR2ZKxjcaV3jUQ6jq4H50TgKBekNX-M_1X-RQpjvrhjKWTtDH0xCkQslvIxTL4p"
            alt="Commercial Hero"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-white text-5xl md:text-7xl mb-6 leading-tight">
            מרנזיה מסחרי — <br/>מעצבים מחדש חללים ציבוריים
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            {data.heroSubtitle || "מצוינות אדריכלית לחללים המובחרים בעולם."}
          </p>
          <div className="mt-10">
            <button className="bg-white text-[#0B0B0B] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
              צפייה בתיק העבודות
            </button>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl text-[#0B0B0B] mb-4">המגזרים שלנו</h2>
            <p className="text-[#1A1A1A]/70 leading-relaxed font-light">
              {data.introText || "פתרונות אבן מותאמים אישית לסביבות הדורשות נוכחות, עמידות ואלגנטיות נצחית."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {/* Hotel Tile */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#0B0B0B]">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRqxgotPvd1i7I3gW1nZU2H4GgRr3vP1vftLcnOFDpue91X5z5MUSlGT3EfBcMdEZO8X7Lt5D8_tVOFFwH6aVoQzB4rhNTLb46RmkbjFUZT2vF0Pwg4FIiT3Z5NRjh39AcvZpzTORYIE-WXwgCFu339_Hj1kKRNpkeukV0YilNcvnzULLwmm7o6-zialmRZjBtU5FIz_WUzybzGq9jloFCDHW3e90BRJr-7uHeRj9K8Dmu_vtnEoBSZTO83K0BiPt8EArSEVNZ5rbc" 
                alt="Hotels" 
                fill 
                className="object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100" 
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-3xl text-white mb-2">{data.service1Title || "מלונאות ואירוח"}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                {data.service1Text || "יוקרה סוחפת עבור יעדי האירוח המובילים בעולם."}
              </p>
            </div>
          </div>
          {/* Gastronomy Tile */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#0B0B0B]">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcPDGkdjvvA2HjiXZHiEmTuPTY9eAGny8BtVoQ1IuFkGQ_p5lwpMO7_mfwH9-Z3VFSV9GVqMaid9jYfec6L34mt2gKKAnmDMPqOcFgxJqvLkacKGtOjYoIUmkqDpu9xHWei5sfdR-8tbNstTXcWVhCC57il83ximmL13TyGHUmrJmQVFtYrRaEd19qtiuWG09PfVORmnbFPhexwM8r4uiRVoQqDD9vpqlnD8Ki6yWnAZHfgS1Z1Kd5If-8-AhqGjiD9-WTuDlb9Ym0" 
                alt="Gastronomy" 
                fill 
                className="object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100" 
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-3xl text-white mb-2">{data.service2Title || "מסעדות וגסטרונומיה"}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                {data.service2Text || "משטחים יוצאי דופן עבור יצירות מופת קולינריות."}
              </p>
            </div>
          </div>
          {/* Workspaces Tile */}
          <div className="group relative aspect-[4/5] overflow-hidden bg-[#0B0B0B]">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh3XOo6Rshcr9EAJiHdm31o-BuMmMfqPK1OkrTj38XSymwXlxy05AOiF-sAfi_5wx078nnrBrsAxRIMscslhvOHoBcEmBXLf6VZhahiJMRfUuxy2gmqFQmFoJmeRQC4chbQ-6iHPyxPO45sKs4cj5NonIDAlWs3n1yOrmMjVxN5AQf6iEN4pNzSJqEQtVdJ7ip5CrIGk2v9KjRQTFmPmK-me4KILUverecQCSLJAskpNfDLhFsgfg5ZATkUzrOXfJqreIwe_yv1ZhF" 
                alt="Workspaces" 
                fill 
                className="object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 scale-105 group-hover:scale-100" 
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <h3 className="font-serif text-3xl text-white mb-2">{data.service3Title || "סביבות עבודה"}</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                {data.service3Text || "עידוד פרודוקטיביות באמצעות יוקרה אדריכלית."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Inquiry Form */}
      <section className="py-24 bg-white border-y border-[#0B0B0B]/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#0B0B0B] mb-4">{data.formTitle || "פניות מסחריות"}</h2>
            <p className="text-[#1A1A1A]/60 uppercase tracking-widest text-xs font-bold">{data.formSubtitle || "שותפות עם מרנזיה"}</p>
          </div>
          
          {submitted ? (
            <div className="bg-green-50/50 border border-green-200 p-12 text-center rounded-xl animate-fade-in">
              <h3 className="text-2xl font-serif text-green-800 mb-2">פנייתך התקבלה בהצלחה</h3>
              <p className="text-green-600/80">נציג המחלקה המסחרית יחזור אליך בהקדם האפשרי.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">שם מלא</label>
                <input 
                  required
                  className={inputClasses} 
                  placeholder="ישראל ישראלי" 
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">כתובת אימייל</label>
                <input 
                  required
                  className={inputClasses} 
                  placeholder="israel@company.com" 
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">סוג פרויקט</label>
                <select 
                  required
                  className={inputClasses}
                  value={formData.projectType}
                  onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="" disabled>בחר סוג פרויקט...</option>
                  <option value="hotel">מלונאות ואירוח</option>
                  <option value="restaurant">מסעדה / בר</option>
                  <option value="office">משרדי תאגיד</option>
                  <option value="public">חלל ציבורי</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">גודל (מ"ר)</label>
                <input 
                  className={inputClasses} 
                  placeholder="לדוגמה: 500 - 1,000" 
                  type="text"
                  value={formData.scale}
                  onChange={e => setFormData({ ...formData, scale: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">מיקום הפרויקט</label>
                <input 
                  className={inputClasses} 
                  placeholder="עיר, ארץ" 
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0B0B0B]/40">תיאור קצר</label>
                <textarea 
                  className={inputClasses} 
                  placeholder="ספר לנו על החזון האדריכלי שלך..." 
                  rows={4}
                  value={formData.details}
                  onChange={e => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-6">
                <button 
                  type="submit"
                  className="w-full bg-[#0B0B0B] text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#1A1A1A] transition-all"
                >
                  בקשת ייעוץ
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-[#0B0B0B]">שיתופי פעולה אחרונים</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square overflow-hidden relative">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRdNi-RER6rEYR8xXB-j66GxgugUSA1W7_HAumst8jhABPrcwD6DI6glwT5aeXLms3orVzTaQOBIj9_Gk24Hhi4VeMPB_Ult9O55nS3DVjQTVq8zWW6mVjLHYleTXWtI5FnqYzITsHkLunD_BYtQS1yr73Ctse3y6VstMutyk9ThrSp25tMpcduRyXOmhRD0HqWmDapSq4pjGze1dRSrqDjeGV3kEeXtMS7K8O_gTqZImuUd_2NdtElKKM_DQBXgjxR_bpvdkSLdL2" 
                alt="Gallery 1" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-1000" 
                unoptimized
            />
          </div>
          <div className="aspect-square overflow-hidden mt-8 md:mt-16 relative">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEZQ-2S31lm8uT8dd9Gg7SHp4BpY90i1iSborH0_yRLafhy9vASFA7vWkKtR-ipssxx9UUSDekyNxzNWrRpY0IDeY6pW_7v0bPgfr3j_p_TfclSqLoynhaxC_BRxh3HeryavQM0LHfQNG3AJwnCai72NSwe3OtgQNqng-R3l-TBxa-_zhau41-hpvUOJuKWO9PX8C94e4PhTg5Er4tbI3yVToGsVj0hg1VzL3weea0cYNhzZ11-sbV-9mTS_t__RPYMAK54BzJl74B" 
                alt="Gallery 2" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-1000" 
                unoptimized
            />
          </div>
          <div className="aspect-square overflow-hidden relative">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_jWsCDsp73ho0R7LI7vCH_Wx5pKMD0AJ8FcQ9WFcWvXdID_kFX3nPVr6QcKim3dRvvUkiU0t75XTVi46lF-S2-t2jF7RXtS9zR5KZSDQNZ4lW7_AZIz-lnBb55CThXNZQGq1ILmFsQ8nnY8AE2CXnf8UHqH_3I3nFwi-zVHVcqBvpiOmnfTin7-jY1zQk91jyfmjZhMgbPICKc6by018vCVWl7hJI2uszgCd_lBm2BsMD23sZ0nny2j06WnInH-GOEHoUqTySlL5y" 
                alt="Gallery 3" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-1000" 
                unoptimized
            />
          </div>
          <div className="aspect-square overflow-hidden mt-8 md:mt-16 relative">
            <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv5eDvLNg7JPyXtQHJlWD0wDC9c3uihlsGsXCr5oz6fRH0otBjh2fiNYBPAyH8eykP6mbuPuX-yNdmN6uNNV1tON1yTJa5l61WWPLPyQvX675AuGg9wcpKNCPSwoWX8dRnZV8MtSXYC0tgWEJTt2nB8c1n3YCxc0-JF1aNmjkg4mvVCpwFVemXZoUomcEcmyc4kTMrKz5yqAMdkpF2HwtJPsPcW0YYD2EaSCOS-Ett5wFqn4_CXjGqnUtdWxm4bxE2X7VZkD6DykFx" 
                alt="Gallery 4" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-1000" 
                unoptimized
            />
          </div>
        </div>
      </section>
    </div>
  );
}
