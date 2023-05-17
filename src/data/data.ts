import bleach from '../assets/bleach.png';
import ammonia from '../assets/ammonia.png';
import vinegar from '../assets/vinegar.png';
import ovenCleaner from '../assets/oven-cleaner.png';
import glassCleaner from '../assets/glass-cleaner.jpg';
import toiletCleaner from '../assets/toilet-cleaner.jpeg';
import drainCleaner from '../assets/drain-cleaner.webp';
import allPurposeCleaner from '../assets/all-purpose-cleaner.jpg';

interface Reactions {
  explosion: string[];
  poisonGas: string[];
  corrosive: string[];
};

interface CleaningProducts {
  id: string;
  name: string;
  image: string;
  reactions: Reactions;
};

export const CLEANING_PRODUCTS: CleaningProducts[] = [
  {
    id: 'product1',
    name: 'Bleach',
    image: bleach,
    reactions: {
      explosion: ['Oven Cleaner', 'Glass Cleaner'],
      poisonGas: ['Ammonia', 'Drain Cleaner'],
      corrosive: ['Vinegar', 'Toilet Bowl Cleaner', 'All-Purpose Cleaner']
    }
  },
  {
    id: 'product2',
    name: 'Ammonia',
    image: ammonia,
    reactions: {
      explosion: ['All-Purpose Cleaner', 'Glass Cleaner'],
      poisonGas: ['Bleach', 'Vinegar', 'Toilet Bowl Cleaner'],
      corrosive: ['Drain Cleaner']
    }
  },
  {
    id: 'product3',
    name: 'Vinegar',
    image: vinegar,
    reactions: {
      explosion: [],
      poisonGas: ['Ammonia'],
      corrosive: ['Bleach', 'All-Purpose Cleaner']
    }
  },
  {
    id: 'product4',
    name: 'Oven Cleaner',
    image: ovenCleaner,
    reactions: {
      explosion: ['Bleach','All-Purpose Cleaner', 'Drain Cleaner'],
      poisonGas: ['Toilet Bowl Cleaner'],
      corrosive: ['Ammonia', 'Glass Cleaner'],
    }
  },
  {
    id: 'product5',
    name: 'Glass Cleaner',
    image: glassCleaner,
    reactions: {
      explosion: ['Ammonia', 'Bleach', 'Drain Cleaner'],
      poisonGas: ['Toilet Bowl Cleaner', 'All-Purpose Cleaner'],
      corrosive: ['Oven Cleaner', 'All-Purpose Cleaner']
    }
  },
  {
    id: 'product6',
    name: 'Toilet Bowl Cleaner',
    image: toiletCleaner,
    reactions: {
      explosion: ['Drain Cleaner'],
      poisonGas: ['Oven Cleaner', 'Glass Cleaner', 'Ammonia'],
      corrosive: ['Bleach', 'All-Purpose Cleaner']
    }
  },
  {
    id: 'product7',
    name: 'Drain Cleaner',
    image: drainCleaner,
    reactions: {
      explosion: ['Oven Cleaner', 'Toilet Bowl Cleaner', 'Glass Cleaner'],
      poisonGas: ['Bleach'],
      corrosive: ['Ammonia', 'All-Purpose Cleaner']
    }
  },
  {
    id: 'product8',
    name: 'All-Purpose Cleaner',
    image: allPurposeCleaner,
    reactions: {
      explosion: ['Ammonia', 'Oven Cleaner'],
      poisonGas: [ 'Glass Cleaner'],
      corrosive: ['Bleach', 'Drain Cleaner', 'Vinegar', 'Glass Cleaner', 'Toilet Bowl Cleaner']
    }
  }
];
