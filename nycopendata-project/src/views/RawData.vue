<template>
  <h1 id="bruhh">NYC Tree Census Data 2015</h1>
  <div id="woah">
    <div v-if="loaded">
      <h2 id="bruhhh">Raw Data:</h2>
      <ul>
        <div class="heya">
          <li v-for="(tree, index) in rawData" :key="index">
            {{ tree.spc_common }} - {{ tree.tree_id }} - {{ tree.boroname }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
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

<style scoped>
#woah {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgba(33, 82, 0, 0.678);
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 2.5%;
  padding-top: 2.5%;
  padding-right: 4%;
  border-radius: 45px;
}
.heya {
  font-size: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
}
#bruhh {
  align-self: center;
  display: flex;
  justify-content: center;
}
#bruhhh {
  align-self: center;
  display: flex;
  justify-content: center;
}
</style>
