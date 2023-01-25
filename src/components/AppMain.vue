<script>
import PokemonList from './Pokemon-list/PokemonList.vue'
import SelectAction from './Pokemon-list/SelectAction.vue';
import { store } from '../data/store';
export default {
    name: 'AppMain',
    components: { PokemonList, SelectAction },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <main>
        <div class="container">
            <select-action> </select-action>
            <PokemonList />
        </div>
    </main>

</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/mixin' as *;
@use '../assets/scss/style.scss' as *;
</style>