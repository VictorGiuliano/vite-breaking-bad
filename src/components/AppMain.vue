<script>
import PokemonList from './Pokemon-list/PokemonList.vue'
export default {
    name: 'AppMain',
    components: { PokemonList }
}
</script>
<template>
    <main>
        <div class="container">
            <PokemonList />
        </div>
    </main>

</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/mixin' as *;
@use '../assets/scss/style.scss' as *;
</style>