<script setup>
/*import { ref, onBeforeMount } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const loaded = ref(false);
const chartData = ref({
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      'red',
      'blue',
      'green',
    ]
  }]
});

onBeforeMount(() => {
  loaded.value = false;
  try {
    getTrees();
  } catch (error) {
    console.warn(error);
  }
});

async function getTrees() {
  let data;
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json');
    data = await res.json();
    console.log(data);

    const treeCounts = {};
    for (let tree of data) {
      if (!treeCounts[tree.spc_common]) {
        treeCounts[tree.spc_common] = 1;
      } else {
        treeCounts[tree.spc_common]++;
      }
    }

    for (let species in treeCounts) {
      chartData.value.labels.push(species);
      chartData.value.datasets[0].data.push(treeCounts[species]);
    }

    console.log(chartData);
    loaded.value = true;
  } catch (e) {
    console.error(e);
  }
}

const options = {
  responsive: true,
};*/
 
</script>

<style scoped></style>
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