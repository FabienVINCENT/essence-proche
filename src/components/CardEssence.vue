<script setup lang="ts">
import {computed} from "vue";
import moment from 'moment';
import 'moment/dist/locale/fr'

moment.locale('fr')

interface Prix {
  '@id': string,
  '@nom': string,
  '@valeur': string,
  '@maj': string
}
interface Props {
  prix: Prix
}

const props = defineProps<Props>()

const img = computed(() => {
  return `carburants/${props.prix['@nom'].toLowerCase()}.png`
})

</script>

<template>
  <div>
    <img class="img-carburant" :src="img" :alt="prix['@nom']" />
    {{ prix['@valeur'] }} €
    <span>{{ moment(props.prix['@maj']).fromNow() }}</span>
  </div>
</template>

<style scoped>

.img-carburant {
  height: 50px;
}


</style>
