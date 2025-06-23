<template>
  <div class="magic-card" :class="rarityClass">
    <div class="card-header">
      <h3 class="card-name">{{ card.name }}</h3>
      <span class="mana-cost">{{ card.manaCost }}</span>
    </div>
    
    <div class="card-image-container">
      <img :src="card.imageUrl" :alt="card.name" class="card-image" />
      <div class="rarity-gem" :class="rarityClass"></div>
    </div>
    
    <div class="card-info">
      <div class="card-type">{{ card.type }}</div>
      <div class="card-description">{{ card.description }}</div>
      
      <div v-if="card.power && card.toughness" class="power-toughness">
        {{ card.power }}/{{ card.toughness }}
      </div>
    </div>
    
    <div class="card-footer">
      <span class="rarity">{{ card.rarity }}</span>
      <span class="set">{{ card.set }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MagicCard } from '../types/Card'

interface Props {
  card: MagicCard
}

const props = defineProps<Props>()

const rarityClass = computed(() => {
  switch (props.card.rarity) {
    case 'Common':
      return 'rarity-common'
    case 'Uncommon':
      return 'rarity-uncommon'
    case 'Rare':
      return 'rarity-rare'
    case 'Mythic Rare':
      return 'rarity-mythic'
    default:
      return 'rarity-common'
  }
})
</script>

<style scoped>
.magic-card {
  background: linear-gradient(145deg, #2d1b69, #1a103f);
  border: 2px solid #4a5568;
  border-radius: 16px;
  padding: 16px;
  width: 280px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.magic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.magic-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border-color: #805ad5;
}

.magic-card:hover::before {
  opacity: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.card-name {
  color: #f7fafc;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.mana-cost {
  background: linear-gradient(135deg, #d4af37, #ffd700);
  color: #1a202c;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  position: relative;
  margin-bottom: 12px;
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.rarity-gem {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-info {
  margin-bottom: 12px;
}

.card-type {
  color: #a0aec0;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-description {
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 8px;
  font-style: italic;
}

.power-toughness {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.8);
  color: #f7fafc;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.1rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #a0aec0;
}

.rarity {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.set {
  opacity: 0.8;
}

/* Rarity-specific styles */
.rarity-common {
  border-color: #718096;
}

.rarity-common .rarity-gem {
  background: #718096;
}

.rarity-uncommon {
  border-color: #805ad5;
}

.rarity-uncommon .rarity-gem {
  background: #805ad5;
}

.rarity-rare {
  border-color: #d4af37;
}

.rarity-rare .rarity-gem {
  background: linear-gradient(135deg, #d4af37, #ffd700);
}

.rarity-mythic {
  border-color: #ff6b35;
}

.rarity-mythic .rarity-gem {
  background: linear-gradient(135deg, #ff6b35, #ff8e53);
}

@media (max-width: 768px) {
  .magic-card {
    width: 100%;
    max-width: 320px;
  }
  
  .card-name {
    font-size: 1.1rem;
  }
  
  .card-image {
    height: 160px;
  }
}
</style>