<script>

export default {
    name: "cardSerie",

    props: {
        descrizioneSerie: Object,
    },
}

</script>

<template>
    <h4>{{ descrizioneSerie.original_name }}</h4>
    <h4>{{ descrizioneSerie.original_language }}</h4>
    <h4>{{ descrizioneSerie.vote_average }}</h4>
</template>

<style lang="scss" scoped></style>