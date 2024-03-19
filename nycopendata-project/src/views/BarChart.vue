<template>
  <div>
    <h1>This is a Bar Chart</h1>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const squirrels = ref('')
async function getsquirrels() {
  let res = await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
  let data = await res.json()
  squirrels.value = data.results
  console.log(squirrels)
}
onBeforeMount(() => {
  try {
    getsquirrels()
    console.log(getsquirrels())
  } catch (error) {
    console.warn(error)
  }
})

for (let squirrel of squirrels) {
  if ((squirrel = true)) {
    console.log(squirrel)
  }
}
</script>

<style scoped></style>
