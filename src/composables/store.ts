import {computed, ref} from 'vue'
import {createGlobalState} from '@vueuse/core'
import {listeCarburants} from "../helpers/carburant.ts";

export const useGlobalState = createGlobalState(
    () => {
        const coords = ref<GeolocationCoordinates | null>(null)

        const distance = ref<number>(10)

        const carburant = ref<number>(1)
        const selectedCarburant = computed(() => listeCarburants.find(c => c.id === carburant.value))

        return {coords, distance, carburant, selectedCarburant}
    }
)
