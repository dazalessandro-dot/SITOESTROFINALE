export const shopItems = [
  {
    slug: 'achille',
    title: 'Achille',
    status: 'coming soon',
    description: 'A small transparent tool for carrying writing, measuring, and notes into movement.',
    images: [
      '/shop/achille/1.jpg',
      '/shop/achille/2.jpg',
      '/shop/achille/3.jpg',
    ],
  },
  {
    slug: 'travel-pouch',
    title: 'Travel pouch',
    status: 'prototype',
    description: 'A soft pouch for keeping tools, small objects, and field materials together.',
    images: [
      '/shop/travel-pouch/1.jpg',
      '/shop/travel-pouch/2.jpg',
      '/shop/travel-pouch/3.jpg',
    ],
  },
  {
    slug: 'field-bag',
    title: 'Field bag',
    status: 'prototype',
    description: 'A soft technical bag for carrying tools, materials, and small objects through mobile work situations.',
    images: [
      '/shop/field-bag/1.jpg',
      '/shop/field-bag/2.jpg',
      '/shop/field-bag/3.jpg',
    ],
  },
  {
    slug: 'hammock',
    title: 'Hammock',
    status: 'prototype',
    description: 'A light object for pausing, suspending the body, and making space for thought away from the desk.',
    images: [
      '/shop/hammock/1.jpg',
      '/shop/hammock/2.jpg',
      '/shop/hammock/3.jpg',
    ],
  },
  {
    slug: 'bandana',
    title: 'Bandana',
    status: 'concept',
    description: 'A foldable graphic surface: accessory, signal, and small visual field to carry with you.',
    images: [
      '/shop/bandana/1.jpg',
    ],
  },
];

export type ShopItem = (typeof shopItems)[number];
