<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <header>
        <h1 class="titolo">BOOLFLIX</h1>
        <div class="inputDiv">
            <input type="text" class="form-control" placeholder="Search">
            <button type="button" class="btn btn-danger buttonDist">INVIA</button>
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

    .titolo {
        color: red;
        padding-left: 15px;
    }

    .inputDiv {
        width: 300px;
        height: 40px;
        padding-right: 15px;
        display: flex;

        .buttonDist{
            margin-left: 5px;
        }

    }

}
</style>