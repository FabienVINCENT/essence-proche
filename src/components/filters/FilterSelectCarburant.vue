<script setup lang="ts">
import {useGlobalState} from "../../composables/store.ts";

const store = useGlobalState()

const carburants = [
  {value: 1, label: 'Gazole'},//
  {value: 2, label: 'SP95'},//
  {value: 3, label: 'E85'},
  {value: 4, label: 'GPLc'},
  {value: 5, label: 'E10'},//
  {value: 6, label: 'SP98'},//
]
</script>

<template>
  <select v-model="store.carburant.value">
    <option v-for="carburant in carburants" :value="carburant.value">{{ carburant.label }}</option>
  </select>
</template>
