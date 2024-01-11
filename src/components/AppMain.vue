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
        <h1>FILM</h1>
        <section class="d-flex flex-wrap ms-3">
            <div class="cardF" v-for="item in store.filmsArr" :key="item">
                <cardFilm :descrizione="item" />
            </div>
        </section>
        <h1>SERIE TV</h1>
        <section class="d-flex flex-wrap ms-3">
            <div class="cardF" v-for="item in store.serietvArr" :key="item">
                <cardSerie :descrizioneSerie="item" />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    min-height: 100vh;
    background-color: #434343;
    padding-top: 100px;

    .cardF {
        width: 230px;
        height: 400px;
        background-color: #fff;
        margin: 10px;
    }

    h1 {
        color: #fff;
        margin-left: 15px;
    }
}
</style>