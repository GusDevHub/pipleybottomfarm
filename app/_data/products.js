const products = [
  {
    id: 'p1pl3y-123',
    name: 'Hay',
    price: '£4.50 per small bale',
    stock: 1,
    description: 'May increase in line with availability and significant increases in fuel costs during 2022-23; noting our small bales remain much larger than many of those other small bales offered locally.',
    type: [{
      name: 'Small Bale',
      price: '£4.50'
    },],
    link: '',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnl4n2bTWcuJcq3Lhbov09Z4kEfaDgtXwemWnOR',
    alt: 'Hay',
  },
  {
    id: 'p1pl3y-456',
    name: 'Straw',
    price: '£4.00',
    stock: 1,
    description: 'May increase in line with availability during 2022.',
    type: [{
      name: 'Small Bale',
      price: '£4.00'
    },],
    link: '',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlEnhpJmfWGA01hKc8Jrsl5X9CZ4TqYHvUpFNB',
    alt: 'Straw',
  },
  {
    id: 'p1pl3y-789',
    name: 'Haylage',
    price: 'Request availability info',
    stock: 3,
    link: '/contact',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlP4DGWIkcWd9VOoTZiqAa0xS6ClhszRMPw83k',
    alt: 'Haylage',
  },
  {
    id: 'p1pl3y-012',
    name: 'Kindling',
    price: '£6.00',
    stock: 2,
    description: 'Plastic crate circa 500mm x 300mm x 250mm detph. To reduce waste packaging firewood is delivered in carry size plastic crates, which are brought away on delivery, all fire wood is naturally seasoned and dried.',
    type: [{
      name: 'Twigs not processed',
      price: '£6.00 per plastic crate'
    },],
    link: '',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnl6N2fAcBrvWaicL2sp460C7PtKmDTBfOnS3JU',
    alt: 'Kindling',
  },
  {
    id: 'p1pl3y-345',
    name: 'Small logs',
    price: '£7.00',
    stock: 2,
    description: 'Plastic crate circa 500mm x 300mm x 250mm detph. To reduce waste packaging firewood is delivered in carry size plastic crates, which are brought away on delivery, all fire wood is naturally seasoned and dried.',
    type: [{
      name: 'Naturally seasoned',
      price: '£7.00 per plastic crate'
    },],
    link: '',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlTOJ8wb0qb02DPSA6tyjBvpaZ8l7gKGi95CYU',
    alt: 'Small log',
  },
  {
    id: 'p1pl3y-678',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlKpR1xtMvcnPEybT4AjOf2SGu1dpm8YqVklWF',
    alt: 'Eggs',
  },
  {
    id: 'p1pl3y-901',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlgUFFuNZuVvfbtNFEm07p4ePzqS2wWBsd8ryD',
    alt: 'Fertilised eggs',
  },
  {
    id: 'p1pl3y-234',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlR5nofn3sUnr2vuZifo8StRjd0TDx7kQ4c3ah',
    alt: 'Day old ducklings/chicks',
  },
  {
    id: 'p1pl3y-567',
    name: 'Young Waterfowl',
    price: 'Request availability info',
    stock: 3,
    description: 'Normally sold as a trio',
    type: [{
      name: 'Welsh Harlequin Ducks',
      price: 'Contact for price'
    },],
    link: '/contact',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnl669cyEBrvWaicL2sp460C7PtKmDTBfOnS3JU',
    alt: 'Young Waterfowl',
  },
  {
    id: 'p1pl3y-890',
    name: 'Young Chickens',
    price: 'Request availability info',
    stock: 3,
    description: 'Normally sold as a trio',
    type: [{
      name: 'Golden Crested Leg bars',
      price: 'Contact for price'
    },],
    link: '/contact',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlGKUCE7a2BTjKxS8JZEPsfXqeI20vDUtCH6yn',
    alt: 'Young Waterfowl',
  },
  {
    id: 'p1pl3y-765',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlK7Qq3kMvcnPEybT4AjOf2SGu1dpm8YqVklWF',
    alt: 'Apples',
  },
  {
    id: 'p1pl3y-432',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlSt4gobbUdRFw0IOr3JnPS4by7CNuYap8B2X9',
    alt: 'Pears',
  },
  {
    id: 'p1pl3y-109',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlClRi6h1NycZLBfxJumUIW4g08V6S3PQ27aKO',
    alt: 'Gages, plums, damsons',
  },
  {
    id: 'p1pl3y-876',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlQRZlWJwAkahFmEjUJ05XZLSv2ntIKWc64iRz',
    alt: 'Cherries',
  },
  {
    id: 'p1pl3y-543',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlODDSZGB4g2QCdNjtDrabxBkecGX5RuLlKVO8',
    alt: 'Nuts',
  },
  {
    id: 'p1pl3y-210',
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
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlsvwhhCGGVbOc06JnwlEqQ4512RvZSoDCXag3',
    alt: 'Hedgerow fruit',
  },
  {
    id: 'p1pl3y-987',
    name: 'British saanen goats cheese',
    price: 'Request availability info',
    stock: 3,
    description: 'Available at markets',
    type: [{
      name: 'British saanen goats cheese',
      price: 'Contact for price'
    },],
    link: '/contact',
    imageUrl: 'https://utfs.io/f/cPsT3qD5xBnlxF7J3OR7IfJ2CvzwMqbHdAT0xjmiu4Z1KeEW',
    alt: 'British saanen goats cheese',
  },
];

export default products;