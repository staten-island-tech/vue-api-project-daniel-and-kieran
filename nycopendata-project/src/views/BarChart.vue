<template>
  <div>
    <h1>This is a Bar Chart</h1>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const trees = ref();
async function getsquirrels() {
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
    getsquirrels()
  } catch (error) {
    console.warn(error)
  }
})

</script>

<style scoped></style>
