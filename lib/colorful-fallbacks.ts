// Colorful fallbacks for the initial 6 boilerplate projects.
// These replace the black and white placeholder architecture photos while preserving the ability for the user to upload their own custom photos later.

const B_W_PLACEHOLDER_IDS = [
  'cmmmtj64orcl307miz4jbsfr7', // nouveau penthouse main
  'cmmmtj92uqzcw07l8i79n67j0', // azure coastal main
  'cmmmtjfpyqzjy07l8hxjba020', // monolith main
  'cmmmtjp49qzud07l8w60li77n', // carrara showroom main
  'cmmmtjtjhr7ds07l0bsgq5l23', // desert retreat main
  'cmmmtjwxh', // highline
  // Common gallery placeholders
  'cmmmtjfpyqzjy', 'cmmmtjp49qzud', 'cmmmtjtjhr7ds', 'img_c4c4', 'img_6ffa', 'img_a4d4',
  'cmmmtvtj7', 'cmmmtw1r8', 'cmmmtw5t3', 'cmmmty9zl', 'cmmmtyi5u', 'cmmmtym6v' // more generic ids
];

const COLORFUL_FALLBACKS: Record<string, string[]> = {
  "nouveau-penthouse": [
    "/assets/images/projects/nouveau-penthouse-1.jpg",
    "/assets/images/projects/nouveau-penthouse-2.jpg",
    "/assets/images/projects/nouveau-penthouse-3.jpg"
  ],
  "azure-coastal-villa": [
    "/assets/images/projects/azure-coastal-villa-1.jpg",
    "/assets/images/projects/azure-coastal-villa-2.jpg",
    "/assets/images/projects/azure-coastal-villa-3.jpg"
  ],
  "the-monolith-hotel": [
    "/assets/images/projects/the-monolith-hotel-1.jpg",
    "/assets/images/projects/the-monolith-hotel-2.jpg",
    "/assets/images/projects/the-monolith-hotel-3.jpg"
  ],
  "carrara-showroom": [
    "/assets/images/projects/carrara-showroom-1.jpg",
    "/assets/images/projects/carrara-showroom-2.jpg",
    "/assets/images/projects/carrara-showroom-3.jpg"
  ],
  "desert-retreat": [
    "/assets/images/projects/desert-retreat-1.jpg",
    "/assets/images/projects/desert-retreat-2.jpg",
    "/assets/images/projects/desert-retreat-3.jpg"
  ],
  "highline-residence": [
    "/assets/images/projects/highline-residence-1.jpg",
    "/assets/images/projects/highline-residence-2.jpg",
    "/assets/images/projects/highline-residence-3.jpg"
  ]
};

export function isBlackAndWhitePlaceholder(url: string | undefined): boolean {
  if (!url) return true;
  return B_W_PLACEHOLDER_IDS.some(id => url.includes(id));
}

export function getColorfulMainImage(slug: string, originalUrl: string | undefined): string {
  // If user uploaded a new photo (URL doesn't match our known B&W placeholders), use theirs!
  if (!isBlackAndWhitePlaceholder(originalUrl) && originalUrl) {
    return originalUrl;
  }
  // Otherwise, fallback to beautiful vivid images
  const fallbacks = COLORFUL_FALLBACKS[slug];
  if (fallbacks && fallbacks.length > 0) {
    return fallbacks[0];
  }
  return '/assets/images/projects/nouveau-penthouse-1.jpg'; // generic vibrant architecture
}

export function getColorfulGallery(slug: string, originalGallery: any[] | undefined): any[] {
  const fallbacks = COLORFUL_FALLBACKS[slug] || [
    '/assets/images/projects/nouveau-penthouse-1.jpg',
    '/assets/images/projects/nouveau-penthouse-2.jpg',
    '/assets/images/projects/nouveau-penthouse-3.jpg'
  ];

  if (!originalGallery || originalGallery.length === 0) {
    return fallbacks.map(url => ({ url }));
  }

  // Map each gallery image. If it's a known B&W, replace it with the fallback at that index.
  return originalGallery.map((img, index) => {
    if (isBlackAndWhitePlaceholder(img.url)) {
      return { ...img, url: fallbacks[index % fallbacks.length] };
    }
    return img;
  });
}
