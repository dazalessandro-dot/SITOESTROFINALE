export const shopItems = [
  {
    slug: 'achille',
    title: 'Achille',
    status: 'coming soon',
    description: 'Un piccolo strumento trasparente per portare scrittura, misura e appunti dentro il movimento.',
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
    description: 'Una custodia morbida per tenere insieme strumenti, oggetti piccoli e materiali da campo.',
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
    description: 'Una borsa morbida e tecnica per portare strumenti, materiali e piccoli oggetti dentro situazioni di lavoro mobili.',
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
    description: 'Un oggetto leggero per fermarsi, sospendere il corpo e lasciare spazio al pensiero fuori dalla postazione.',
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
    description: 'Una superficie grafica pieghevole: accessorio, segnale e piccolo campo visivo da portare con sé.',
    images: [
      '/shop/bandana/1.jpg',
    ],
  },
];

export type ShopItem = (typeof shopItems)[number];
