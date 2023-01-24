<script>
export default {
    name: 'AppHeader'
}
</script>
<template>
    <header class="container">
        <div class="pokedex-button">
            <img src="../assets/scss/img/gold.png">
            <img src="../assets/scss/img/blu.png">
            <img src="../assets/scss/img/green.png">
        </div>
        <img src="../assets/scss/img/pokemon-logo.png">
    </header>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/mixin' as *;
@use '../assets/scss/style.scss' as *;

header {
    height: 100px;
    @include my-display-flex;
}

.pokedex-button {
    @include my-display-flex;
    align-items: center;

    img {
        width: auto;
        max-height: 40%;
    }
}
</style>