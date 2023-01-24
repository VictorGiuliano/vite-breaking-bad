<script>
import CardPokemon from './CardPokemon.vue';
import { store } from '../../data/store';
export default {
    name: "PokemonList",
    components: { CardPokemon },
    data() {
        return { store }
    }
}
</script>
<template>
    <div class="row">
        <card-pokemon v-for="pokemon in store.pokemons" key:pokemon._id :Name="pokemon.name"
            :imageUrl="pokemon.imageUrl" :id="pokemon._id" :number="pokemon.number" :type1="pokemon.type1"
            :type2="pokemon.type2"></card-pokemon>

    </div>

</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixin' as *;
@use '../../assets/scss/style.scss' as *;

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 10px;
    background-color: lightgrey;
    border-radius: 2%;
}
</style>