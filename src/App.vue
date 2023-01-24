<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './data/store';
export default {
  name: 'Pokedex',
  components: { AppHeader, AppMain },
  data() {
    return {
      store
    }
  },
  methods: {
    fetchPokemon(url) {
      axios.get(url)
        .then(res => {
          store.pokemons = res.data.docs;
        })
    }
  },
  created() {
    this.fetchPokemon(store.apiUri);
  }
}

</script>
<template>
  <AppHeader />
  <AppMain />
</template>
<style lang="scss">
@use './assets/scss/style.scss';
</style>