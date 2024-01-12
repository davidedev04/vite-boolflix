<script>

export default {
    name: "cardSerie",

    props: {
        descrizioneSerie: Object,
    },

    data() {
        return {
            showElement: true
        };
    },

    methods: {
        getImage(posterPath) {
            const basePath = "https://image.tmdb.org/t/p/w342";
            return `${basePath}${posterPath}`;
        },

        hideImg() {
            this.showElement = false;
        },

        showImg() {
            this.showElement = true;
        }
    }

}

</script>

<template>
    <div @mouseenter="hideImg" @mouseout="showImg">
        <img v-if="showElement === true" :src="getImage(descrizioneSerie.poster_path)"
            :alt="descrizioneSerie.original_name">
        <div v-else="showElement === false" class="back">
            <div class="d-flex align-items-center flex-column">
                <h4>{{ descrizioneSerie.name }}</h4>
                <h5>{{ descrizioneSerie.original_name }}</h5>
                <span>{{ descrizioneSerie.original_language }}</span>
                <p>{{ descrizioneSerie.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 400px;
}

.back {
    background-color: #000;
    width: 100%;
    height: 400px;
    color: #fff;
    padding: 10px;
    overflow-y: scroll;
}
</style>