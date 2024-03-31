<template>
    <div>
        <div v-if="loaded">
            <h1>This is the Raw Data</h1>
            <ul>
            <li v-for="(tree, index) in rawData" :key="index">
            {{ tree.spc_common }} - {{ tree.tree_id }} - {{ tree.boroname }}
            </li>
            </ul>
        </div> 
        </div>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue';

const loaded = ref(false);
const rawData = ref([]);

onBeforeMount(() => {
  loaded.value = false;
  try {
    getTrees();
  } catch (error) {
    console.warn(error);
  }
});

async function getTrees() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    rawData.value = await res.json();
    console.log(rawData.value);
    loaded.value = true;
  } catch (error) {
    console.error(error);
  }
}
</script>

<style lang="scss" scoped>

</style>