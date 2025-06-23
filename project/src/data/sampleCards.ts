import type { MagicCard } from '../types/Card'

export const sampleCards: MagicCard[] = [
  {
    id: '1',
    name: 'Lightning Bolt',
    imageUrl: 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Lightning Bolt deals 3 damage to any target.',
    manaCost: 'R',
    type: 'Instant',
    rarity: 'Common',
    set: 'Alpha'
  },
  {
    id: '2',
    name: 'Black Lotus',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Tap, Sacrifice Black Lotus: Add three mana of any one color.',
    manaCost: '0',
    type: 'Artifact',
    rarity: 'Rare',
    set: 'Alpha'
  },
  {
    id: '3',
    name: 'Serra Angel',
    imageUrl: 'https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Flying, vigilance',
    manaCost: '3WW',
    type: 'Creature — Angel',
    rarity: 'Uncommon',
    power: '4',
    toughness: '4',
    set: 'Alpha'
  },
  {
    id: '4',
    name: 'Counterspell',
    imageUrl: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Counter target spell.',
    manaCost: 'UU',
    type: 'Instant',
    rarity: 'Common',
    set: 'Alpha'
  },
  {
    id: '5',
    name: 'Ancestral Recall',
    imageUrl: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Target player draws three cards.',
    manaCost: 'U',
    type: 'Instant',
    rarity: 'Rare',
    set: 'Alpha'
  },
  {
    id: '6',
    name: 'Time Walk',
    imageUrl: 'https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=300&h=420&fit=crop',
    description: 'Take an extra turn after this one.',
    manaCost: '1U',
    type: 'Sorcery',
    rarity: 'Rare',
    set: 'Alpha'
  }
]