import {useGlobalState} from "./store.ts";
import {computed} from "vue";

const store = useGlobalState()

const baseUrl = 'https://data.economie.gouv.fr/api/records/1.0/search/'

export const useApi = () => {
    const getUrl = computed(() => {
        const queryParams = new URLSearchParams()

        queryParams.append('dataset', 'prix-des-carburants-en-france-flux-instantane-v2')
        queryParams.append('q', '')
        queryParams.append('facet', 'carburants_disponibles')
        queryParams.append('facet', 'departement')
        queryParams.append('facet', 'region')
        queryParams.append(
            'geofilter.distance',
            store.coords.value?.latitude + ',' + store.coords.value?.longitude + ',' + store.distance.value * 1000
        )
        queryParams.append('refine.carburants_disponibles', store.selectedCarburant.value?.apiLabel || 'Gazole')

        return baseUrl + '?' + queryParams.toString()
    })

    return {getUrl}
}
