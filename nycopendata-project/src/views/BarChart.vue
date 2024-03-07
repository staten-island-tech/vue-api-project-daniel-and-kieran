<template>
  <div>
    <h1>This is a Bar Chart</h1>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
const squirrels = ref("");
async function getSquirrels() {
  let res = await fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json");
  let data = await res.json();
  squirrels.value = data.results;
  console.log(squirrels.value);
}

onBeforeMount(() => {
  getSquirrels();
});


</script>

<style lang="scss" scoped>

</style>
