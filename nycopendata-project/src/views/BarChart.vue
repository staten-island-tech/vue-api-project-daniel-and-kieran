<template>
  <div>
    <h1>This is a Bar Chart</h1>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const trees = ref();
async function gettrees() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    let data = await res.json();
    console.log(data)
    trees.value = data.results;
  } catch (e) {
    console.error(e);
  }
}
onBeforeMount(() => {
  try {
    gettrees()
  } catch (error) {
    console.warn(error)
  }
})
//bar chart of different type of species
</script>

<style scoped></style>
