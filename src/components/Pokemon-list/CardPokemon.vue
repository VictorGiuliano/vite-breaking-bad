<script>
export default {
    name: 'CardPokemon',
    props: {
        id: String,
        number: Number,
        type1: String,
        type2: String,
        color: String,
        imageUrl: String,
        Name: String
    }
}
</script>
<template>
    <div class="column">
        <div class="card">
            <img :src="imageUrl" :alt="Name">
            <p>{{ number }}</p>
            <p>{{ Name }}</p>
            <div>
                <p>{{ type1 }}</p><span>{{ type2 }}</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixin' as *;
@use '../../assets/scss/style.scss' as *;


.column {
    padding: 30px 10px;
    flex-basis: calc(100% / 5);
    background-color: rgba(0, 0, 0, 0.6);
}

.card {
    padding: 15px;
    text-align: center;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;

    img {
        display: block;

        max-height: 100%;
        max-width: 100%;
        border-radius: 50%;
    }

    div {
        padding: 5px 0;
    }

    p {
        padding: 0.2rem 0;
    }
}
</style>