<template>
  <div>
    <h1>This is a Pie Chart</h1>
    <Pie :data="chartData" :options="options" v-if="loaded"/>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
const loaded = ref(false);
const chartData = ref({});

async function gettrees() {
  loaded.value = false;
  let data;
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    data = await res.json();
    console.log(data)
  } catch (e) {
    console.error(e);
  }
  chartData.value = data;
  console.log(chartData)
  loaded.value=true;
}
onBeforeMount(() => {
  try {
    gettrees()
  } catch (error) {
    console.warn(error)
  }
})

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<style scoped></style>

