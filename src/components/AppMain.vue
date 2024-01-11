<script>
import cardFilm from './cardFilm.vue';
import cardSerie from './cardSerie.vue';

import { store } from "../store.js"

export default {
    name: "AppMain",
    components: {
        cardFilm,
        cardSerie
    },

    data() {

        return {
            store
        }

    }
}
</script>

<template>
    <main>
        <div class="cardF" v-for="item in store.filmsArr" :key="item">
            <cardFilm :descrizione="item" />
        </div>
        <div class="cardF" v-for="item in store.serietvArr" :key="item">
            <cardSerie :descrizioneSerie="item" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #434343;
    padding-top: 100px;
}
</style>