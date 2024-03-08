<template>
  <div>
    <h1>This is a Bar Chart</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const squirrels = ref('')
async function getsquirrels() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  squirrels.value = data.results;
  console.log(squirrels);
}
onMounted(() => {
  console.log(getsquirrels());
})
</script>

<style lang="scss" scoped></style>
