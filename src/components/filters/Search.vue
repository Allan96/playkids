<template>
<div id="search">
    <input type="text" placeholder="Busque por um produto em nossa loja" v-model="filterSearch">
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
    grid-area: search;
    max-width: 100%;
    width: 300px;
}
</style>
