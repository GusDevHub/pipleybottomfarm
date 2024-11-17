const products = [
  {
    name: 'Hay',
    price: '£4.50 per small bale',
    stock: 1,
    description: 'May increase in line with availability and significant increases in fuel costs during 2022-23; noting our small bales remain much larger than many of those other small bales offered locally.',
    type: [{
      name: 'Small Bale',
      price: '£4.50'
    },],
    link: '',
    image: '/products/hay.jpg',
    alt: 'Hay',
  },
  {
    name: 'Straw',
    price: '£4.00',
    stock: 1,
    description: 'May increase in line with availability during 2022.',
    type: [{
      name: 'Small Bale',
      price: '£4.00'
    },],
    link: '',
    image: '/products/straw.jpg',
    alt: 'Straw',
  },
  {
    name: 'Haylage',
    price: 'Request availability info',
    stock: 3,
    link: '/contact',
    image: '/products/haylage.jpg',
    alt: 'Haylage',
  },
  {
    name: 'Kindling',
    price: '£6.00',
    stock: 2,
    description: 'Plastic crate circa 500mm x 300mm x 250mm detph. To reduce waste packaging firewood is delivered in carry size plastic crates, which are brought away on delivery, all fire wood is naturally seasoned and dried.',
    type: [{
      name: 'Twigs not processed',
      price: '£6.00 per plastic crate'
    },],
    link: '',
    image: '/products/kindling.jpg',
    alt: 'Kindling',
  },
  {
    name: 'Small logs',
    price: '£7.00',
    stock: 2,
    description: 'Plastic crate circa 500mm x 300mm x 250mm detph. To reduce waste packaging firewood is delivered in carry size plastic crates, which are brought away on delivery, all fire wood is naturally seasoned and dried.',
    type: [{
      name: 'Naturally seasoned',
      price: '£7.00 per plastic crate'
    },],
    link: '',
    image: '/products/small-log.jpg',
    alt: 'Small log',
  },
  {
    name: 'Eggs',
    price: '£2.50 (6 units)',
    stock: 1,
    description: 'Rare breed Duck and Chicken',
    type: [{
      name: 'Welsh Harlequin Duck Eggs',
      price: '£2.50 per half dozen'
    }, {
      name: 'Golden Crested Legbar (blue eggs)',
      price: '£1.50 per half dozen (tend to be smaller eggs)'
    },],
    link: '',
    image: '/products/eggs.jpg',
    alt: 'Eggs',
  },
  {
    name: 'Fertilised eggs',
    price: '£12.00 (6 units)',
    stock: 1,
    type: [{
      name: 'Welsh Harlequin',
      price: '£12 per half dozen'
    }, {
      name: 'Golden Crested Legbar',
      price: '£10 per half dozen'
    },],
    link: '',
    image: '/products/fertilised-egg.jpg',
    alt: 'Fertilised eggs',
  },
  {
    name: 'Day old ducklings/chicks',
    price: 'Request availability info',
    stock: 3,
    description: 'Normally sold as a trio',
    type: [{
      name: 'Ducklings',
      price: 'Contact for price'
    }, {
      name: 'Chicks',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/duckling-chick.jpg',
    alt: 'Day old ducklings/chicks',
  },
  {
    name: 'Young Waterfowl',
    price: 'Request availability info',
    stock: 3,
    description: 'Normally sold as a trio',
    type: [{
      name: 'Welsh Harlequin Ducks',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/young-waterfowl.jpg',
    alt: 'Young Waterfowl',
  },
  {
    name: 'Young Chickens',
    price: 'Request availability info',
    stock: 3,
    description: 'Normally sold as a trio',
    type: [{
      name: 'Golden Crested Leg bars',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/young-chick.jpg',
    alt: 'Young Waterfowl',
  },
  {
    name: 'Apples',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Ashmead Kernel',
      price: 'Contact for price'
    }, {
      name: 'Morgan Sweet (For eating and Cider)',
      price: 'Contact for price'
    }, {
      name: 'Early Worcester',
      price: 'Contact for price'
    }, {
      name: 'Katy',
      price: 'Contact for price'
    }, {
      name: 'Kingston Black (Cider)',
      price: 'Contact for price'
    }, {
      name: 'Dabinet (Cider)',
      price: 'Contact for price'
    }, {
      name: 'Cox Pippin',
      price: 'Contact for price'
    }, {
      name: 'John O Gold',
      price: 'Contact for price'
    }, {
      name: 'Orleans Reinette',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/apples.jpg',
    alt: 'Apples',
  },
  {
    name: 'Pears',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Doyenne du Comice (French)',
      price: 'Contact for price'
    }, {
      name: 'Williams',
      price: 'Contact for price'
    }, {
      name: 'Conference',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/pears.jpg',
    alt: 'Pears',
  },
  {
    name: 'Gages, plums, damsons',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Oullins Golden Gage',
      price: 'Contact for price'
    }, {
      name: 'Green Gage',
      price: 'Contact for price'
    }, {
      name: 'English Plum',
      price: 'Contact for price'
    }, {
      name: 'Sloes (For Gin/ Preserves or Jam)',
      price: 'Contact for price'
    }, {
      name: 'Victoria Plum',
      price: 'Contact for price'
    }, {
      name: 'Damson',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/plums.jpg',
    alt: 'Gages, plums, damsons',
  },
  {
    name: 'Cherries',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Stella',
      price: 'Contact for price'
    }, {
      name: 'Morello',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/cherries.jpg',
    alt: 'Cherries',
  },
  {
    name: 'Nuts',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Sweet Chestnut',
      price: 'Contact for price'
    }, {
      name: 'Hazel Nut',
      price: 'Contact for price'
    }, {
      name: 'Walnut',
      price: 'Contact for price'
    }, {
      name: 'Giant Cob Nut',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/nuts.jpg',
    alt: 'Nuts',
  },
  {
    name: 'Hedgerow fruit',
    price: 'Request availability info',
    stock: 3,
    type: [{
      name: 'Sloes',
      price: 'Contact for price'
    }, {
      name: 'Hornbeam Berries',
      price: 'Contact for price'
    }, {
      name: 'Elderflower',
      price: 'Contact for price'
    }, {
      name: 'Elder Berries',
      price: 'Contact for price'
    }, {
      name: 'Rowan berries',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/hedgerow-fruits.jpg',
    alt: 'Hedgerow fruit',
  },
  {
    name: 'British saanen goats cheese',
    price: 'Request availability info',
    stock: 3,
    description: 'Available at markets',
    type: [{
      name: 'British saanen goats cheese',
      price: 'Contact for price'
    },],
    link: '/contact',
    image: '/products/goat-cheese.jpg',
    alt: 'British saanen goats cheese',
  },
];

export default products;