<script setup lang="ts">
import { onMounted, ref, watch} from "vue";
import {useGlobalState} from "../composables/store.ts";
import {getStationById} from "../composables/useStation.ts";
import CardStation from "../components/CardStation.vue";
import FilterSelectCarburant from "../components/filters/FilterSelectCarburant.vue";
import FilterRangeDistance from "../components/filters/FilterRangeDistance.vue";
import {useApi} from "../composables/useApi.ts";

const store = useGlobalState()
const {getUrl} = useApi()

interface Enseigne {
  id: number,
  nom: string,
  marque: string
}

interface Field {
  id: number,
  code_departement: number,
  dist: number,
}

interface Station {
  enseigne: Enseigne,
  prix: any,
  fields: Field
}

const stations = ref<Station[]>([]);

const getData = async () => {
  fetch(getUrl.value)
      .then(response => response.json())
      .then(data => {
        stations.value = data.records.map((record: any) => {
          return {
            enseigne: getStationById(record.fields.id, record.fields.code_departement),
            prix: JSON.parse(record.fields.prix),
            ...record
          }
        })
      })
}

onMounted(() => {
  getData()
})

watch([store.carburant, store.distance], () => {
  getData()
})


</script>

<template>
  <filter-select-carburant></filter-select-carburant>
  <filter-range-distance></filter-range-distance>
  <card-station v-for="station in stations" :station="station"></card-station>

</template>

