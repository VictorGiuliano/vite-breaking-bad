import { reactive } from 'vue';
export const store = reactive({
    apiUri: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=60',
    pokemons: [],
    PokemonType: [
        "Ground",
        "Water",
        "Flying",
        "Bug",
        "Grass",
        "Ice",
        "Psychic",
        "Ghost",
        "Rock",
        "Electric",
        "Poison",
        "Dark",
        "Fighting",
        "Normal",
        "Dragon",
        "Fire",
        "Fairy",
        "Steel"
    ]
});