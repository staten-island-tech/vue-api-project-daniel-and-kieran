<template>
  <div>
    <h1>This is a Pie Chart of the Data</h1>
    <div id="urmom">
      <Pie :data="chartData" :options="options" v-if="loaded"/>
    </div>
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
  const trees = {};
  chartData.value.labels = [];
  chartData.value.datasets = [{
    backgroundColor: [],
    data: []
  }]
  for (let tree of data) {
    if (!chartData.value.labels.includes(tree.spc_common)) {
      chartData.value.labels.push(tree.spc_common);
      chartData.value.datasets[0].backgroundColor.push("#FF0000","#00FF00","#0000FF", "#FFFF00","#00FFFF","#FF00FF","#FFA07A","#7FFFD4","#B0E0E6",
  "#32CD32","#FF4500","#ADFF2F","#8A2BE2","#D2691E",
  "#4682B4",
  "#B22222",
  "#FF69B4",
  "#DDA0DD",
  "#8B008B",
  "#556B2F",
  "#800000",
  "#6B8E23",
  "#FF6347",
  "#1E90FF",
  "#4B0082",
  "#20B2AA",
  "#FFA500",
  "#808000",
  "#9370DB",
  "#FF1493",
  "#48D1CC",
  "#FFC0CB",
  "#00FA9A",
  "#696969",
  "#2E8B57",
  "#9400D3",
  "#F0E68C",
  "#778899",
  "#800080",
  "#228B22",
  "#9932CC")
    }
    if (!trees[tree.spc_common]) { //adds tree name to the trees object
      trees[tree.spc_common] = 0;
    };
  }

  for (let tree of data) {
    trees[tree.spc_common]++;
  }

  chartData.value.datasets[0].data = Object.values(trees);

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
  plugins: {
    legend: {
      display: false
    }
  }
}

</script>

<style scoped>
#urmom {
  width:100vw;
  height:100vh;
  align-self: center;
  display: flex;
  justify-content: center;
  background-color: rgba(33, 82, 0, 0.678);
  margin-left: 10%;
  margin-right: 10%;
}
</style>

