<template>
<div id="content">
    <div class="card" v-if="productsFiltered.length">
        <CardProduct v-for="(product, index)  in productsFiltered" v-bind:key="index" :product="product" />
    </div>
    <div class="not-found" v-else>

        <NotFound />
        <h2>
            Não conseguimos encontrar nenhum produto com esse nome
        </h2>
        <p>
            Não foi encontrado nenhum resultado de acordo com a sua busca. Tente novamente!
        </p>
    </div>
</div>
</template>

<script>
import getProducts from '@/api/getProducts'
import CardProduct from '@/components/cards/CardProduct.vue'
import NotFound from '@/components/icons/NotFound.vue'
export default {
    components: {
        CardProduct,
        NotFound
    },

    async created() {
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

.card {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    margin: 0 0 24px 0;
}

.not-found {
    text-align: center;
    color: #6E1EA0;
    margin: 150px 0;

    h2 {
        margin: 16px 0 8px 0;
    }

    svg {
        fill: #6E1EA0;
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
