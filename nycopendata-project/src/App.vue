<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref, onBeforeMount } from 'vue'

const loaded = ref(false)
const rawData = ref([])

onBeforeMount(() => {
  loaded.value = false
  try {
    getTrees()
  } catch (error) {
    console.warn(error)
  }
})

async function getTrees() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
    rawData.value = await res.json()
    console.log(rawData.value)
    loaded.value = true
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Raw Data</RouterLink>
          <RouterLink to="/bar">Bar Chart</RouterLink>
          <RouterLink to="/pie">Pie Chart</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <!--     <div v-if="loaded">
      <h1>This is the Raw Data</h1>
      <ul>
        <li v-for="(tree, index) in rawData" :key="index">
          {{ tree.spc_common }} - {{ tree.tree_id }} - {{ tree.boroname }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
