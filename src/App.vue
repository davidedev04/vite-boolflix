<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// richiamiamo lo store
import { store } from "./store.js";

// richiamiamo l'axios
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {

    return {
      store
    }

  },

  methods: {
    getFilms() {
      let myAdressF = store.apiUrlF
      let myAdressS = store.apiUrlS

      if (store.searchContent !== "") {
        myAdressF += `&query=${store.searchContent}`
        myAdressS += `&query=${store.searchContent}`
      }

      axios

        .get(myAdressF)
        .then((res) => {
          store.filmsArr = res.data.results;
          console.log(store.filmsArr);
        })
        .catch((err) => {
          console.error("Errore:", err);
        })

      axios

        .get(myAdressS)
        .then((res) => {
          store.serietvArr = res.data.results;
          console.log(store.serietvArr);
        })
        .catch((err) => {
          console.error("Errore:", err);
        })

    }
  },

  created() {
    this.getFilms();
  }

}

</script>

<template>
  <AppHeader @search="getFilms" />
  <AppMain />
</template>

<style lang="scss"></style>
