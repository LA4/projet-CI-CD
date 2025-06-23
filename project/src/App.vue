<template>
  <div id="app">
    <header class="app-header">
      <div class="header-content">
        <div class="logo-section">
          <img src="/vite.svg" class="logo vite-logo" alt="Vite logo" />
          <img src="./assets/vue.svg" class="logo vue-logo" alt="Vue logo" />
        </div>
        <h1 class="app-title">Magic: The Gathering Collection</h1>
        <p class="app-description">
          Explorez l'univers fascinant de Magic: The Gathering
        </p>
      </div>
    </header>

    <main class="main-content">
      <CardGrid />
    </main>

    <footer class="app-footer">
      <p>&copy; 2025 Magic Collection. Propulsé par Vue.js et Vite.</p>
      <p class="deployment-info">
        Déployé automatiquement sur Netlify avec hooks Git
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import CardGrid from './components/CardGrid.vue'
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0f0c29, #24243e, #302b63);
  color: #f7fafc;
}

.app-header {
  background: linear-gradient(135deg, rgba(45, 27, 105, 0.9), rgba(26, 16, 63, 0.9));
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(128, 90, 213, 0.3);
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
}

.logo-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.logo {
  height: 4rem;
  width: 4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vite-logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
  transform: rotate(360deg);
}

.vue-logo:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
  transform: scale(1.1);
}

.app-title {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #d4af37, #ffd700, #ff6b35);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.app-description {
  font-size: 1.3rem;
  color: #a0aec0;
  margin: 0;
  font-weight: 300;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.app-footer {
  background: rgba(26, 16, 63, 0.8);
  border-top: 1px solid rgba(128, 90, 213, 0.3);
  padding: 2rem;
  text-align: center;
  color: #a0aec0;
}

.deployment-info {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem 0;
  }
  
  .header-content {
    padding: 0 1rem;
  }
  
  .logo-section {
    gap: 1rem;
  }
  
  .logo {
    height: 3rem;
    width: 3rem;
  }
  
  .app-title {
    font-size: 2.5rem;
  }
  
  .app-description {
    font-size: 1.1rem;
  }
  
  .main-content {
    padding: 1rem 0;
  }
}
</style>