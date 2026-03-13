import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | Marenzia',
  description: 'מדיניות הפרטיות של מרנזיה, מפרטת על שמירת הנתונים ופרטיות המשתמשים באתר.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans rtl pt-32 pb-24" dir="rtl">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#0B0B0B] mb-12">מדיניות פרטיות</h1>
        
        <div className="space-y-8 text-[#1A1A1A]/80 font-light leading-relaxed">
          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">כללי</h2>
            <p>
              מרנזיה ("החברה", "אנחנו") מכבדת את פרטיותך ומחויבת להגן על המידע האישי שאתה עשוי לחלוק איתנו במהלך השימוש באתר.
              מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על מידע אישי.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">איסוף מידע</h2>
            <p>
              אנו עשויים לאסוף מידע אישי שאתה מספק לנו מרצונך החופשי, כגון שמך, כתובת הדוא"ל שלך, מספר הטלפון ופרטים הנוגעים לפניות שלך, בעת יצירת קשר או מילוי טפסים באתר. 
              בנוסף, ייתכן שימוש בקוקיז (Cookies) ובכלים טכנולוגיים דומים כדי לאסוף נתונים אנונימיים על השימוש באתר למטרות סטטיסטיות ושיפור חוויית המשתמש.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">שימוש במידע</h2>
            <p>
              המידע שאנו אוספים משמש כדי לחזור אליך ולענות על שאלותיך, להציע את השירותים הרלוונטיים, ולשפר את התוכן והפונקציונליות של האתר. 
              אנו לא נמכור, נשכיר או נעביר את המידע האישי שלך לצדדים שלישיים ללא הסכמתך, אלא אם נידרש לעשות זאת על פי חוק.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה טכניים וארגוניים סבירים כדי להגן על המידע האישי שלך מפני גישה, שימוש או חשיפה בלתי חוקיים. עם זאת, אין אנו יכולים להבטיח אבטחה מוחלטת של הנתונים המועברים דרך האינטרנט.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן או לשנות את מדיניות הפרטיות מעת לעת. שינויים ייכנסו לתוקף מיד עם פרסומם בעמוד זה. אנו ממליצים לחזור ולעיין במדיניות זו מעת לעת.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">יצירת קשר</h2>
            <p>
              לכל שאלה או בקשה בנוגע למדיניות פרטיות זו, תוכל ליצור איתנו קשר דרך עמוד צור קשר באתר.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
