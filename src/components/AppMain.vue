<script>

import { store } from "../store.js"

export default {
    name: "AppMain",
    data() {

        return {
            store
        }

    }
}
</script>

<template>
    <main>

    </main>
</template>

<style lang="scss" scoped>
main {
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: #434343;
}
</style>