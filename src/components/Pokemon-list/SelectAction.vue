<script>
export default {
    name: 'Selection',
    props: {
        arrayTypes: Array
    }
}
</script>
<template>
    <form>
        <select class="form-control">
            <option selected value="">-</option>
            <option v-for="type in arrayTypes">{{ type }}</option>
        </select>
        <input type="submit" value="Submit" />
    </form>
</template>