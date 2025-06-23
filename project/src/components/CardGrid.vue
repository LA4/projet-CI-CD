<template>
  <div class="card-grid-container">
    <div class="grid-header">
      <h2 class="grid-title">Collection Magic: The Gathering</h2>
      <p class="grid-subtitle">Découvrez les cartes légendaires de Magic</p>
    </div>
    
    <div class="filter-controls">
      <select v-model="selectedRarity" class="filter-select">
        <option value="">Toutes les raretés</option>
        <option value="Common">Commune</option>
        <option value="Uncommon">Peu commune</option>
        <option value="Rare">Rare</option>
        <option value="Mythic Rare">Rare mythique</option>
      </select>
      
      <select v-model="selectedType" class="filter-select">
        <option value="">Tous les types</option>
        <option value="Instant">Éphémère</option>
        <option value="Sorcery">Rituel</option>
        <option value="Creature">Créature</option>
        <option value="Artifact">Artefact</option>
      </select>
    </div>
    
    <div class="card-grid">
      <MagicCard
        v-for="card in filteredCards"
        :key="card.id"
        :card="card"
      />
    </div>
    
    <div v-if="filteredCards.length === 0" class="no-results">
      <p>Aucune carte ne correspond aux filtres sélectionnés.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MagicCard from './MagicCard.vue'
import { sampleCards } from '../data/sampleCards'

const selectedRarity = ref('')
const selectedType = ref('')

const filteredCards = computed(() => {
  return sampleCards.filter(card => {
    const matchesRarity = !selectedRarity.value || card.rarity === selectedRarity.value
    const matchesType = !selectedType.value || card.type.includes(selectedType.value)
    return matchesRarity && matchesType
  })
})
</script>

<style scoped>
.card-grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.grid-header {
  text-align: center;
  margin-bottom: 2rem;
}

.grid-title {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #d4af37, #ffd700, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.grid-subtitle {
  font-size: 1.2rem;
  color: #a0aec0;
  margin-bottom: 0;
}

.filter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-select {
  background: linear-gradient(145deg, #2d1b69, #1a103f);
  color: #f7fafc;
  border: 2px solid #4a5568;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.filter-select:hover {
  border-color: #805ad5;
  transform: translateY(-2px);
}

.filter-select:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.no-results {
  text-align: center;
  color: #a0aec0;
  font-size: 1.1rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .card-grid-container {
    padding: 1rem;
  }
  
  .grid-title {
    font-size: 2rem;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-select {
    width: 100%;
    max-width: 300px;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>