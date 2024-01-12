<script>

export default {
    name: "cardFilm",

    props: {
        descrizione: Object,
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
        <img v-if="showElement === true" :src="getImage(descrizione.poster_path)" :alt="descrizione.original_title">
        <div v-else="showElement === false" class="back">
            <div class="d-flex align-items-center flex-column">
                <h4>{{ descrizione.title }}</h4>
                <h5>{{ descrizione.original_title }}</h5>
                <span>{{ descrizione.original_language }}</span>
                <p>{{ descrizione.overview }}</p>
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