<template>
  <div>
    <h1>This is a Bar Chart</h1>
    <Bar :data="data" :options="options" />
  </div>
</template>

<script setup>

//Chart js bs
//APPLY CHANGES WE FIXED IN PIE CHART TO HERE


// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale}
// from 'chart.js'
// import { Bar } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// const data = gettrees()
// const options= {responsive: true, maintainAspectRatio: false}



// import { ref, onBeforeMount } from 'vue'
// const trees = ref();
// async function gettrees() {
//   try {
//     let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
//     let data = await res.json();
//     console.log(data)
//     trees.value = data.results;
//   } catch (e) {
//     console.error(e);
//   }
// }
// onBeforeMount(() => {
//   try {
//     gettrees()
//   } catch (error) {
//     console.warn(error)
//   }
// })
//bar chart of different type of species
</script>

<style scoped></style>
