<script>

export default {
    name: "cardFilm",

    props: {
        descrizione: Object,
    },

    methods: {
        getImage(posterPath) {
            const basePath = "https://image.tmdb.org/t/p/w342";
            return `${basePath}${posterPath}`;
        }
    }
}

</script>

<template>
    <img :src="getImage(descrizione.poster_path)" alt="">
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>