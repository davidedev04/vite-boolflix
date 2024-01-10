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

}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss"></style>
