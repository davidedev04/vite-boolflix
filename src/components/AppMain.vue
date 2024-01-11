<script>
import cardFilm from './cardFilm.vue';

import { store } from "../store.js"

export default {
    name: "AppMain",
    components: {
        cardFilm
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
    </main>
</template>

<style lang="scss" scoped>
main {
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: #434343;
}
</style>