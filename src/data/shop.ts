export type ShopStatus = 'coming soon' | 'prototype' | 'concept' | 'available';

export type ShopVariant = {
  name: string;
  options: string[];
};

export type ShopColorOption = {
  label: string;
  value: string;
  images: string[];
};

export type ShopItem = {
  slug: string;
  title: string;
  status: ShopStatus;
  description: string;
  longDescription: string;
  images: string[];
  price: string | null;
  currency: string;
  availability: string;
  variants: ShopVariant[];
  colorOptions?: ShopColorOption[];
  practicalDetails: string[];
  shipping: string;
  returns: string;
  processNotes: string[];
  stripePaymentLink: string | null;
};

export const shopItems: ShopItem[] = [
  {
    slug: 'achille',
    title: 'Achille',
    status: 'coming soon',
    description: 'A transparent pocket tool for notes and measurement.',
    longDescription:
      'A compact writing and measuring companion for creative work away from the desk.',
    images: [
      '/shop/achille/yellow-1.jpg',
      '/shop/achille/yellow-2.jpg',
      '/shop/achille/yellow-3.jpg',
    ],
    price: '15',
    currency: 'EUR',
    availability: 'Not available for purchase yet.',
    variants: [
      {
        name: 'Color',
        options: ['Topazio', 'Ambra', 'Ametista', 'Kryptonite'],
      },
    ],
    colorOptions: [
      {
        label: 'Topazio',
        value: '#f4d132',
        images: ['/shop/achille/yellow-1.jpg', '/shop/achille/yellow-2.jpg', '/shop/achille/yellow-3.jpg'],
      },
      {
        label: 'Ambra',
        value: '#f06a22',
        images: ['/shop/achille/orange-1.jpg', '/shop/achille/orange-2.jpg', '/shop/achille/orange-3.jpg'],
      },
      {
        label: 'Ametista',
        value: '#7067c9',
        images: ['/shop/achille/violet-1.jpg', '/shop/achille/violet-2.jpg', '/shop/achille/violet-3.jpg'],
      },
      {
        label: 'Kryptonite',
        value: '#35d667',
        images: ['/shop/achille/green-1.jpg', '/shop/achille/green-2.jpg', '/shop/achille/green-3.jpg'],
      },
    ],
    practicalDetails: [
      'Portable creative tool.',
      'Transparent body.',
      'Final specifications still to be confirmed.',
    ],
    shipping: 'Shipping options will be defined before release.',
    returns: 'Return conditions will be published when the product becomes available.',
    processNotes: [
      'The project starts from the gestures of moving, noting, measuring, and keeping small references close.',
      'Its role in the collection is to make field work feel prepared without becoming over-equipped.',
    ],
    stripePaymentLink: null,
  },
  {
    slug: 'travel-pouch',
    title: 'Travel pouch',
    status: 'prototype',
    description: 'A soft pouch for tools and field materials.',
    longDescription:
      'A soft container for pens, cards, cables, samples, notes, and small studio objects.',
    images: [
      '/shop/travel-pouch/1.jpg',
      '/shop/travel-pouch/2.jpg',
      '/shop/travel-pouch/3.jpg',
    ],
    price: '35',
    currency: 'EUR',
    availability: 'Prototype under evaluation.',
    variants: [],
    practicalDetails: [
      'Soft daily pouch.',
      'For tools, small objects, and field materials.',
      'Dimensions, materials, and production details still to be confirmed.',
    ],
    shipping: 'Shipping options will be defined if the prototype enters production.',
    returns: 'Return conditions will be published if the product becomes available.',
    processNotes: [
      'The pouch is part of a larger investigation into creative gear that supports work outside a fixed studio.',
      'The prototype is being read through access, order, tactility, and how quickly the right object can be found.',
    ],
    stripePaymentLink: null,
  },
  {
    slug: 'field-bag',
    title: 'Field bag',
    status: 'prototype',
    description: 'A technical bag for mobile creative work.',
    longDescription:
      'A mobile studio surface for tools, documentation materials, and small field objects.',
    images: [
      '/shop/field-bag/1.jpg',
      '/shop/field-bag/2.jpg',
      '/shop/field-bag/3.jpg',
    ],
    price: '60',
    currency: 'EUR',
    availability: 'Prototype under evaluation.',
    variants: [],
    practicalDetails: [
      'Designed for mobile work.',
      'For tools, materials, and compact field objects.',
      'Final construction and material specifications still to be confirmed.',
    ],
    shipping: 'Shipping options will be defined if the prototype enters production.',
    returns: 'Return conditions will be published if the product becomes available.',
    processNotes: [
      'The Field bag connects product thinking with Estro field practice: carrying, opening, choosing, documenting.',
      'Its value is not only storage, but the rhythm it gives to work that happens in motion.',
    ],
    stripePaymentLink: null,
  },
  {
    slug: 'hammock',
    title: 'Hammock',
    status: 'prototype',
    description: 'A light object for pause and outdoor thinking.',
    longDescription:
      'A light object for rest, field days, and thinking away from the workstation.',
    images: [
      '/shop/hammock/1.jpg',
      '/shop/hammock/2.jpg',
      '/shop/hammock/3.jpg',
    ],
    price: '110',
    currency: 'EUR',
    availability: 'Prototype under evaluation.',
    variants: [],
    practicalDetails: [
      'For rest and outdoor thinking.',
      'Made for pauses, field days, and temporary setups.',
      'Final load, material, and use specifications still to be confirmed.',
    ],
    shipping: 'Shipping options will be defined if the prototype enters production.',
    returns: 'Return conditions will be published if the product becomes available.',
    processNotes: [
      'The project asks what kind of gear helps creativity by removing pressure rather than adding tools.',
      'It belongs to the collection as a reminder that attention is physical, not only mental.',
    ],
    stripePaymentLink: null,
  },
  {
    slug: 'bandana',
    title: 'Bandana',
    status: 'concept',
    description: 'A foldable graphic surface to wear, tie, or carry.',
    longDescription:
      'A foldable graphic surface: accessory, signal, and small portable visual field.',
    images: [
      '/shop/bandana/1.jpg',
    ],
    price: '25',
    currency: 'EUR',
    availability: 'Concept not available for purchase yet.',
    variants: [],
    practicalDetails: [
      'Graphic textile concept.',
      'Can be worn, tied, packed, or displayed.',
      'Material, size, and production details still to be confirmed.',
    ],
    shipping: 'Shipping options will be defined before release.',
    returns: 'Return conditions will be published when the product becomes available.',
    processNotes: [
      'The Bandana works as a compact carrier for Estro graphics: a visual system that can move with the person using it.',
      'The concept is intentionally simple, relying on repetition, contrast, folding, and visibility.',
    ],
    stripePaymentLink: null,
  },
];

export function getShopItem(slug: string) {
  return shopItems.find((item) => item.slug === slug);
}

export function isPurchasable(item: ShopItem) {
  return item.status === 'available' && Boolean(item.price && item.stripePaymentLink);
}
