export interface MagicCard {
  id: string
  name: string
  imageUrl: string
  description: string
  manaCost: string
  type: string
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Mythic Rare'
  power?: string
  toughness?: string
  set: string
}