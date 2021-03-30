<template>
<div class="container">
    <div class="details-order">
        <h2>PlayFood | Pedido {{ this.$route.params.id }} </h2>

        <h3 v-show="productsWithType('food').length > 0">Comidas</h3>
        <ProductResume :changeAmount="false" v-for="(product, index)  in productsWithType('food')" v-bind:key="index" :product="product" />

        <h3 v-show="productsWithType('drink').length > 0">Bebidas</h3>
        <ProductResume :changeAmount="false" v-for="(product, index)  in productsWithType('drink')" v-bind:key="index" :product="product" />
        <div>
            <h3>
                Total do pedido:
                R$ {{ totalProductsCart() | formatMoney }}
            </h3>

        </div>

    </div>
</div>
</template>

<script>
import ProductResume from '@/components/resume/ProductResume.vue'
export default {
    components: {
        ProductResume
    },
    data() {
        return {
            order: []
        }
    },
    methods: {
        productsWithType(value) {
            return this.order.products.filter((product) => {
                return product.category.toLowerCase().indexOf(value) >= 0
            })
        },
        totalProductsCart() {
            var totalCart = this.order.products.reduce((sum, product) => {
                return sum + (product.amount * product.price);
            }, 0);
            return totalCart;
        },
    },
    created() {
        let result = this.$store.state.cart.orders.filter((order) => {
            return order.id.toLowerCase().indexOf(this.$route.params.id) >= 0
        })

        this.order = result[0]
    }
}
</script>

<style lang="scss" scoped>
.details-order {
    width: 500px;
    max-width: 100%;
    margin: 48px auto;

    h2 {
        margin-bottom: 24px;
        font-family: 'Fredoka One', cursive;
        font-weight: 400;
    }
}
</style>
