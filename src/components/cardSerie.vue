<script>

export default {
    name: "cardSerie",

    props: {
        descrizioneSerie: Object,
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
    <img :src="getImage(descrizioneSerie.poster_path)" alt="">
</template>

<style lang="scss" scoped>

    img{
        width: 100%;
        object-fit: contain;
    }

</style>