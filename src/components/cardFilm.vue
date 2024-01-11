<script>

export default {
    name: "cardFilm",

    props: {
        descrizione: Object
    },
}

</script>

<template>
    <div class="card">
        <h4>{{ descrizione.original_title }}</h4>
        <h4>{{ descrizione.original_language }}</h4>
        <h4>{{ descrizione.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped></style>