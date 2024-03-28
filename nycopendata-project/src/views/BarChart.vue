<template>
  <div>
    <h1 class="hello">NYC Tree Census Data 2015</h1>
    <canvas id="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { Chart, registerables } from 'chart.js'
import { ref, reactive, onMounted } from 'vue';

Chart.register(...registerables);

const chartData = reactive({
  labels: [],
  datasets: [{
    backgroundColor: [],
    data: []
  }]
});

const loaded = ref(false);

onMounted(() => {
  fetchData();
});

async function fetchData() {
  try {
    const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    const data = await res.json();
    processChartData(data);
  } catch (error) {
    console.error(error);
  }
}

function processChartData(data) {
  const trees = {};
  chartData.labels = [];
  chartData.datasets[0].backgroundColor = [];
  chartData.datasets[0].data = [];

  for (const tree of data) {
    if (!chartData.labels.includes(tree.spc_common)) {
      chartData.labels.push(tree.spc_common);
      chartData.datasets[0].backgroundColor.push("#FFA500");
    }
    if (!trees[tree.spc_common]) {
      trees[tree.spc_common] = 0;
    }
    trees[tree.spc_common]++;
  }

  chartData.datasets[0].data = Object.values(trees);
  loaded.value = true;

  renderChart();
}

function renderChart() {
  const canvas = document.getElementById('chartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
    }
  });
}
</script>

<style scoped>
.hello {
  align-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
}
</style>
/*
1. for each tree species, add a label - if label is already in label array, dont push it
2. for each tree species, also increment a counter for the tree species by 1
3. for each tree species, push the number to data array
*/

/*const chartData = {
  labels: ["a", "b"],
  datasets: [{
    backgroundColor: ["#ffffff", "#000000"],
    data: [1, 2]
  }]
}*/




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