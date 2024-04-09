<!-- <template>
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
</script> -->

<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const loaded = ref(false);
const chartData = ref({});

onBeforeMount(() => {
  loaded.value = false;
  try {
    gettrees()
  } catch (error) {
    console.warn(error)
  }
});

async function gettrees() {
  let data;
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    data = await res.json();
    console.log(data)
  } catch (e) {
    console.error(e);
  }
  const trees = {};
  chartData.value.labels = [];
  chartData.value.datasets = [{
    backgroundColor: [],
    data: []
  }]
  for (let tree of data) {
    if (!chartData.value.labels.includes(tree.spc_common)) {
      chartData.value.labels.push(tree.spc_common);
      chartData.value.datasets[0].backgroundColor.push("#ffffff", "#000000")
    }
    if (!trees[tree.spc_common]) {
      trees[tree.spc_common] = 0;
    };
  }

  for (let tree of data) {
    trees[tree.spc_common]++;
  }

  chartData.value.datasets[0].data = Object.values(trees);

  loaded.value=true;
}
</script>

<style scoped></style>
