<template>
  <div>
    <h1>This is a Pie Chart</h1>
    <Pie :data="chartData" :options="options" v-if="loaded"/>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

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
  const trees = [];
  chartData.value.labels = [];
  for (let tree of data) {
    if (!chartData.value.labels.includes(tree.spc_common)) {
      chartData.value.labels.push(tree.spc_common);
    }
    trees.push(tree.spc_common);
  }

  for (let bobs of chartData.value.labels) {
    for (let tree in trees) {
      if (tree == bobs) {
        data++;
      }
    }
  }

  console.log(chartData)
  loaded.value=true;
}

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

const options = {
  responsive: true,
}

</script>

<style scoped></style>

