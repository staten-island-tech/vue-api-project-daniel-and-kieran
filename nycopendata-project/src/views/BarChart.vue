<template>
  <div>
    <h1>This is a Bar Chart</h1>
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
      chartData.datasets[0].backgroundColor.push("#000000");
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

<style scoped></style>
