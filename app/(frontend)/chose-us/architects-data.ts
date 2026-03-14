export interface Architect {
  slug: string;
  name: string;
  studio: string;
  image: string;
  quote: string;
  bio: string[];
  portfolio: {
    image: string;
    title: string;
    year: string;
    aspect: string;
    colSpan: string;
    extraClass?: string;
  }[];
  materials: {
    image: string;
    name: string;
    finish: string;
  }[];
}

export const architects: Architect[] = [
  {
    slug: 'david-levi',
    name: 'אדר. דוד לוי',
    studio: 'לוי אדריכלים',
    image: '/assets/images/chose-us-1.png',
    quote: '״יופי של שתיקה, דיוק של קו. אדריכלות היא אומנות ההפחתה — עד שנותרת רק הנשמה.״',
    bio: [
      'הגישה של דוד לוי מתאפיינת בתחושה של קפדנות וחתירה למהותיות. עבודתו עבור מרנזיה חוקרת את נקודת המפגש בין כוח גיאולוגי גולמי לבין אומנות ישראלית מעודנת, והופכת אבן לאלמנטים אדריכליים זורמים.',
      'לאורך שלושה עשורים של פרקטיקה, לוי שמר על דיאלוג בין התעשייתי לבין האומנותי. שיתוף הפעולה שלו עם הסטודיו שלנו הביא לאוצר מילים חדש של משטחים — שבו כובד השיש מתאזן עם קלילות החזון הגיאומטרי שלו.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-1.png', title: 'וילה נואר, הרצליה', year: '2022', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-2.png', title: 'פנטהאוז האטריום', year: '2023', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-3.png', title: 'ביתן השקט', year: '2020', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-4.png', title: 'מגורי מונולית', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-calacatta.png', name: 'קלקטה בורגיני', finish: 'מלוטש עדין' },
      { image: '/assets/images/material-basalt.png', name: 'בזלטינה ויטרבו', finish: 'גימור עור' },
      { image: '/assets/images/material-travertine.png', name: 'טרוורטינו נבונה', finish: 'חיתוך נקבובי' },
    ],
  },
  {
    slug: 'michal-cohen',
    name: 'אדר. מיכל כהן',
    studio: 'סטודיו כהן עיצוב פנים',
    image: '/assets/images/chose-us-2.png',
    quote: '״אבן היא לא חומר — היא זיכרון של כדור הארץ. אנחנו פשוט נותנים לה צורה חדשה.״',
    bio: [
      'מיכל כהן ידועה בגישה הנשית והרגישה שלה לעיצוב פנים. עבודתה משלבת חמימות ביתית עם קווים נקיים ומינימליסטיים, תוך שימוש באבן טבעית כאלמנט מרכזי.',
      'הפרויקטים שלה עם מרנזיה מדגימים כיצד אבן יכולה ליצור אווירה של שלווה ויוקרה — ממטבחים פתוחים ועד חדרי אמבטיה מפנקים, כל פריט מתוכנן בקפידה עד לפרט האחרון.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-2.png', title: 'דירת גג, תל אביב', year: '2023', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-1.png', title: 'בית המשפחה', year: '2021', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-4.png', title: 'סלון הזהב', year: '2022', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-3.png', title: 'חלל מסחרי', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-travertine.png', name: 'טרוורטינו קלאסי', finish: 'מלוטש חם' },
      { image: '/assets/images/material-calacatta.png', name: 'שיש קררה', finish: 'מלוטש' },
      { image: '/assets/images/material-basalt.png', name: 'גרניט שחור', finish: 'מוברש' },
    ],
  },
  {
    slug: 'yonatan-avraham',
    name: 'אדר. יונתן אברהם',
    studio: 'אברהם אדריכלות',
    image: '/assets/images/chose-us-3.png',
    quote: '״כל מבנה הוא שיחה בין האדם לבין הנוף. האבן היא השפה.״',
    bio: [
      'יונתן אברהם מייצג את הדור החדש של האדריכלות הישראלית. עבודתו משלבת מסורת מקומית עם חדשנות עכשווית, תוך דגש על קיימות ושימוש באבן מקומית.',
      'שיתוף הפעולה שלו עם מרנזיה התמקד בפרויקטים שבהם האבן אינה רק חומר גלם אלא אלמנט מרכזי בסיפור האדריכלי — מווילות פרטיות ועד מבני ציבור.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-3.png', title: 'מרכז תרבות, ירושלים', year: '2022', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-4.png', title: 'וילה בכרמל', year: '2023', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-1.png', title: 'מלון בוטיק', year: '2021', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-2.png', title: 'מגורי יוקרה', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-basalt.png', name: 'בזלת גולן', finish: 'טבעי' },
      { image: '/assets/images/material-travertine.png', name: 'אבן ירושלמית', finish: 'מסותת' },
      { image: '/assets/images/material-calacatta.png', name: 'שיש לבן', finish: 'מלוטש' },
    ],
  },
  {
    slug: 'ronit-sharon',
    name: 'אדר. רונית שרון',
    studio: 'שרון אדריכלות ועיצוב',
    image: '/assets/images/chose-us-4.png',
    quote: '״אדריכלות טובה לא צועקת — היא לוחשת. והאבן הנכונה היא הלחישה המושלמת.״',
    bio: [
      'רונית שרון, עם למעלה מ-30 שנות ניסיון, היא אחת האדריכליות הנחשבות בישראל. פרויקטים שלה זכו בפרסים בינלאומיים רבים, ומאופיינים בגישה הוליסטית המשלבת אדריכלות, עיצוב פנים ונוף.',
      'עבודתה עם מרנזיה בולטת בשימוש מתוחכם באבן כחומר מקשר — בין הפנים והחוץ, בין הישן לחדש, ובין הטבע לבנוי.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-4.png', title: 'משרדי יוקרה, רמת גן', year: '2021', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-3.png', title: 'בית הגלריה', year: '2022', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-2.png', title: 'ספא פרטי', year: '2023', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-1.png', title: 'וילה בקיסריה', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-calacatta.png', name: 'קלקטה אורו', finish: 'מלוטש מראה' },
      { image: '/assets/images/material-travertine.png', name: 'טרוורטינו סילבר', finish: 'מוברש' },
      { image: '/assets/images/material-basalt.png', name: 'אנדזית', finish: 'חתוך טבעי' },
    ],
  },
  {
    slug: 'eli-mizrahi',
    name: 'אדר. אלי מזרחי',
    studio: 'מזרחי אדריכלים',
    image: '/assets/images/chose-us-5.png',
    quote: '״האבן מלמדת אותנו סבלנות. היא עמדה כאן מיליוני שנים — ואנחנו מעצבים אותה לנצח.״',
    bio: [
      'אלי מזרחי הוא אדריכל נוף מוביל שמשלב בצורה ייחודית אלמנטים טבעיים באדריכלות. התמחותו באבן מקומית הביאה לשיתוף פעולה פורה עם מרנזיה על פני שני עשורים.',
      'הפרויקטים שלו מדגישים את הקשר בין המבנה הבנוי לסביבה הטבעית, כאשר האבן משמשת כגשר בין שני העולמות — יוצרת המשכיות ויזואלית ותחושתית.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-1.png', title: 'גן הפסלים', year: '2020', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-2.png', title: 'חצר האבן', year: '2022', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-4.png', title: 'מרפסת הנוף', year: '2023', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-3.png', title: 'שביל האבן', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-travertine.png', name: 'אבן חולית', finish: 'טבעי גולמי' },
      { image: '/assets/images/material-basalt.png', name: 'בזלת שחורה', finish: 'מסותת' },
      { image: '/assets/images/material-calacatta.png', name: 'גרניט לבן', finish: 'מלוטש' },
    ],
  },
  {
    slug: 'noa-barak',
    name: 'אדר. נועה ברק',
    studio: 'סטודיו ברק',
    image: '/assets/images/chose-us-6.png',
    quote: '״אני מאמינה שכל חלל צריך לספר סיפור. האבן היא הדמות הראשית.״',
    bio: [
      'נועה ברק מביאה פרספקטיבה רעננה לעולם האדריכלות הישראלית. הגישה שלה משלבת מינימליזם סקנדינבי עם חמימות ים-תיכונית, ויצרה שפה עיצובית ייחודית.',
      'עבודתה עם מרנזיה מתמקדת בפרויקטי מגורי יוקרה, שבהם היא משתמשת באבן ליצירת אווירה של שלווה ואלגנטיות נצחית — כל פריט מתוכנן בקפידה כמו יצירת אומנות.',
    ],
    portfolio: [
      { image: '/assets/images/portfolio-2.png', title: 'לופט בנמל, יפו', year: '2023', aspect: 'aspect-[16/10]', colSpan: 'md:col-span-7' },
      { image: '/assets/images/portfolio-1.png', title: 'דירת חוף', year: '2022', aspect: 'aspect-[3/4]', colSpan: 'md:col-span-4 md:col-start-9', extraClass: 'md:pt-32' },
      { image: '/assets/images/portfolio-3.png', title: 'בית הקמרון', year: '2021', aspect: 'aspect-square', colSpan: 'md:col-span-5', extraClass: 'md:mt-[-80px]' },
      { image: '/assets/images/portfolio-4.png', title: 'סוויטה פרטית', year: '2024', aspect: 'aspect-[16/9]', colSpan: 'md:col-span-6 md:col-start-7' },
    ],
    materials: [
      { image: '/assets/images/material-calacatta.png', name: 'שיש סטטואריו', finish: 'מלוטש' },
      { image: '/assets/images/material-travertine.png', name: 'טרוורטינו רומנו', finish: 'גימור חם' },
      { image: '/assets/images/material-basalt.png', name: 'לברדוריט', finish: 'מוברש עדין' },
    ],
  },
];
