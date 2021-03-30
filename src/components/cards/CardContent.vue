<template>
<div class="card-content">
    <div class="card" v-if="productsFiltered.length">
        <CardProduct v-for="(product, index)  in productsFiltered" v-bind:key="index" :product="product" />
    </div>
    <NotFound v-else />
</div>
</template>

<script>
import getProducts from '@/api/getProducts'
import CardProduct from '@/components/cards/CardProduct.vue'
import NotFound from '@/components/notFound/NotFound.vue'
export default {
    components: {
        CardProduct,
        NotFound
    },

    async mounted() {
        await getProducts()
    },
    computed: {
        productsFiltered() {
            let filter = this.$store.state.products.allProducts.filter((product) => {
                return product.name.toLowerCase().indexOf(this.$store.state.products.filterSearch.toLowerCase()) >= 0 && product.category.toLowerCase().indexOf(this.$store.state.products.filterCategory) >= 0
            })
            return filter
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

.card-content {
    grid-area: content;
    display: grid;

    .card {
        display: grid;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        margin: 0 0 24px 0;
    }
}

@media screen and (min-width: $xs) {
    .card {
        grid-template-columns: 1fr;
    }
}

@media screen and (min-width: $lg) {
    .card {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
