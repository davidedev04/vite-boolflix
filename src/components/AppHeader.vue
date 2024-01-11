<script>

import { store } from "../store.js"

export default {
    name: "AppHeader",

    data() {

        return {
            store
        }

    }
}

</script>

<template>
    <header>
        <h1 class="titolo">BOOLFLIX</h1>
        <div class="inputDiv">
            <input type="text" class="form-control" placeholder="Search" v-model.trim="store.searchContent">
            <button type="button" class="btn btn-danger buttonDist" @click="$emit('search')">INVIA</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100vw;
    height: 100px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;

    .titolo {
        color: red;
        padding-left: 15px;
    }

    .inputDiv {
        width: 300px;
        height: 40px;
        padding-right: 15px;
        display: flex;

        .buttonDist {
            margin-left: 5px;
        }

    }

}
</style>