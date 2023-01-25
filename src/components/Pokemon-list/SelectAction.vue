<script>
export default {
    name: 'Selection',
    props: {
        arrayTypes: Array
    },
    emit: ['chose-value', 'press-button'],
    methods: {
        choseOne() {
            this.$emit('chose-value')
        },
        pressButton() {
            this.$emit('press-button')
        }
    }
}
</script>
<template>
    <form @submit.prevent="onSubmit">
        <select @change="choseOne">
            <option selected value="">-</option>
            <option v-for="type in arrayTypes">{{ type }}</option>
        </select>
        <button @click="pressButton">Search</button>
    </form>
</template>
<style lang="scss" scoped>
button {
    width: 7%;
}
</style>