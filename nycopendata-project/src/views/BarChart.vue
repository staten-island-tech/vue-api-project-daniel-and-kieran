<template>
  <div>
    <div id="urmom">
      <h1 id="wow">This is a Bar Chart of the Data</h1>
      <bar :data="chartData" :options="options" v-if="loaded" />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale)

const loaded = ref(false)
const chartData = ref({})

onBeforeMount(() => {
  loaded.value = false
  try {
    getTrees()
  } catch (error) {
    console.warn(error)
  }
})

async function getTrees() {
  let data
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
    data = await res.json()
    console.log(data)
  } catch (e) {
    console.error(e)
  }
  const trees = {}
  chartData.value.labels = []
  chartData.value.datasets = [
    {
      label: 'Number of Trees',
      backgroundColor: [],
      data: []
    }
  ]
  for (let tree of data) {
    if (!chartData.value.labels.includes(tree.spc_common)) {
      chartData.value.labels.push(tree.spc_common)
      chartData.value.datasets[0].backgroundColor.push('#ffffff', '#000000')
      chartData.value.datasets[0].data.push(0)
    }
    if (!trees[tree.spc_common]) {
      trees[tree.spc_common] = 0
    }
  }

  for (let tree of data) {
    trees[tree.spc_common]++
  }

  chartData.value.datasets[0].data = Object.values(trees)

  loaded.value = true
}

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
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: rgba(33, 82, 0, 0.678);
  margin-left: 12.5%;
  margin-right: 10%;
  padding-top: 10%;
  padding-bottom: 5%;
  border-radius: 50px;
}
</style>



