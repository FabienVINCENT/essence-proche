<script setup lang="ts">

import {useGeolocation} from '@vueuse/core'
import {ref, watch} from "vue";
import {useGlobalState} from "../composables/store.ts";

const isGeolocationResolved = ref(false);
const {coords, pause} = useGeolocation()
const store = useGlobalState()


// Utilisez watch pour détecter les changements dans les coordonnées
watch([coords], () => {
  if (coords.value.latitude && coords.value.longitude) {
    isGeolocationResolved.value = true;
    store.coords.value = coords.value
    pause()
  }
});
</script>

<template>
  <div>En attente de géolocalisation...</div>
</template>

<style scoped>

</style>
