import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | Marenzia',
  description: 'הצהרת הנגישות של מרנזיה, מפרטת את הנגשת האתר לאנשים עם מוגבלויות.',
};

export default function AccessibilityPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#1A1A1A] font-sans rtl pt-32 pb-24" dir="rtl">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-[#0B0B0B] mb-12">הצהרת נגישות</h1>
        
        <div className="space-y-8 text-[#1A1A1A]/80 font-light leading-relaxed">
          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">מחויבות לנגישות</h2>
            <p>
              מרנזיה מחויבת להבטיח את הנגישות הדיגיטלית לכל האנשים, לרבות אנשים עם מוגבלויות. אנו משפרים ללא הרף את חוויית המשתמש עבור כולם ומיישמים את תקני הנגישות הרלוונטיים המקובלים, בפרט תקן הנגישות הישראלי 5568 ברמה AA.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">פעולות נגישות באתר</h2>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>הוספנו תוסף נגישות מתקדם מצד ימין המאפשר למשתמש להתאים את תצוגת האתר לפי צרכיו האישיים.</li>
              <li>האתר מותאם לניווט במקלדת, ולתמיכה בתוכנות קוראות מסך ברמה אופטימלית טכנולוגית.</li>
              <li>סיפקנו חלופות טקסטואליות (Alternative Text) לאלמנטים ויזואליים גרפיים באתר שאינם בגדר עיצוב טהור.</li>
              <li>תכנון המבנה היררכי ולוגי מותאם לגלישה ברורה, קריאה פשוטה ומיקוד במתן מידע נוח.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">התאמות שונות בעזרת תוסף הנגישות</h2>
            <p>
              אנו משתמשים בכלי חכם לשיפור הנגישות באתר על פי תקן. בעזרת תפריט הנגישות ניתן, בין היתר:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li>להגדיל ולהקטין טקסטים.</li>
              <li>לשנות ניגודיות (צבעים כהים ובהירים, אפור ואפקטים נוספים).</li>
              <li>להדגיש קישורים ותפריטים.</li>
              <li>השהיה ועצירה של אנימציות.</li>
              <li>שינוי פונט לקריא יותר.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2 text-[#0B0B0B]">משוב ויצירת קשר לשיפור נגישות</h2>
            <p>
              אם נתקלתם בבעיה בנגישות האתר, נשמח לשמוע מכם ולסייע! אנו מזמינים כל משתמש לדווח לנו במידה ומצא כי מקטע מסוים אינו מונגש דיו, כדי שנוכל לבדוק ולתקן בהתאם. ניתן לפנות אלינו באחת הדרכים הבאות:
            </p>
            <p className="mt-2 text-[#0B0B0B] font-medium">עמוד 'צור קשר' הראשי באתר.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
