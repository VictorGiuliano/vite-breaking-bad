<script>
import { store } from '../../data/store';
export default {
    name: 'Selection',
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <select class="form-control">
        <option selected value="">-</option>
        <option v-for="type in store.PokemonType">
            {{ type }}
        </option>
    </select>
    <input type="submit" value="Submit">

</template>