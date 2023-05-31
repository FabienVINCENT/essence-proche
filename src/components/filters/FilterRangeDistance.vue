<script setup lang="ts">
import {useGlobalState} from "../../composables/store.ts";
import {ref} from "vue";

const store = useGlobalState()

const tempDistance = ref(store.distance.value)

const setDistance = () => {
  store.distance.value = tempDistance.value
}
</script>

<template>
  <input type="range" min="1" max="100" v-model="tempDistance" @change="setDistance">
  <span>{{tempDistance}} km</span>
</template>
https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=horaires_automate_24_24&facet=services_service&facet=departement&facet=region&refine.carburants_disponibles=E10&geofilter.distance=48.153034%2C+5.133520%2C+5000
