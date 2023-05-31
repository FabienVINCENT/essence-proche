<script setup lang="ts">
import {useGlobalState} from "./composables/store.ts";
import GetCoords from "./views/GetCoords.vue";
import ListStation from "./views/ListStation.vue";

const store = useGlobalState()

</script>

<template>
  <list-station v-if="store.coords.value !== null"></list-station>
  <get-coords v-else></get-coords>
</template>

