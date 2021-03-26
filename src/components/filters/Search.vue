<template>
<div id="search">
    <input type="text" placeholder="Busque por um produto" v-model="filterSearch">
</div>
</template>

<script>
export default {
    computed: {
        filterSearch: {
            get() {
                return this.$store.state.products.filterSearch;
            },
            set(value) {
                this.$store.commit('products/setFilterSearch', value);
            },
        }

    }
}
</script>

<style lang="scss" scoped>
#search {
    margin-top: 48px;
    display: flex;
    width: 100%;
    justify-content: flex-end;

    input {
        width: 500px;
    }
}
</style>
