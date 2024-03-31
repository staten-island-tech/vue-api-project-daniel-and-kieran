<template>
    <div>
        <div v-if="loaded">
            <h1>This is the Raw Data</h1>
            <ul>
            <li v-for="(tree, index) in rawData" :key="index">
            {{ tree.spc_common }} - {{ tree.tree_id }} - {{ tree.boroname }}
            </li>
            </ul>
        </div> 
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>