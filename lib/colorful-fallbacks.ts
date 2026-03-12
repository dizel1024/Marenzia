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
  'nouveau-penthouse': [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ],
  'azure-coastal-villa': [
    'https://images.unsplash.com/photo-1613490900226-06bb50570b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ],
  'the-monolith-hotel': [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1551882547-ff40c0d589rx?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ],
  'carrara-showroom': [
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ],
  'desert-retreat': [
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ],
  'highline-residence': [
    'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
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
  return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'; // generic vibrant architecture
}

export function getColorfulGallery(slug: string, originalGallery: any[] | undefined): any[] {
  const fallbacks = COLORFUL_FALLBACKS[slug] || [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
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
