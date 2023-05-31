<script setup lang="ts">
import CardEssence from "./CardEssence.vue";
import {useGlobalState} from "../composables/store.ts";
import {computed, ref} from "vue";

interface Props {
  station: any
}

const props = defineProps<Props>()
const store = useGlobalState()

const carburant = computed(() => {
  return props.station.prix.find((prix: any) => parseInt(prix['@id']) === store.carburant.value)
})

const km = computed(() => {
  return (props.station.fields.dist / 1000).toFixed(1)
})


const img = computed(() => {
  return `marques/${props.station.enseigne.marque.toLowerCase()}.png`
})


const showImg = ref(true)
const handleError = () => {
  showImg.value = false
}
</script>

<template>
  <div>
    <h3>
      <img v-if="showImg" class="img-enseigne" :src="img" :alt="station.enseigne.marque" @error="handleError"/>
      <span v-else>{{station.enseigne.marque}}</span>
      : {{ station?.enseigne.nom }}
    </h3>
    <div>
      <card-essence v-if="carburant" :prix="carburant"></card-essence>
      <div v-else>pas de carbureant</div>
    </div>
    <p v-if="carburant">
      {{ km }} km -> le trajet coutera
      {{ (7 / 100 * (props.station.fields.dist / 1000) * carburant['@valeur']).toFixed(2) }} €
    </p>
  </div>
</template>


<style scoped>

.img-enseigne {
  height: 50px;
}


</style>
