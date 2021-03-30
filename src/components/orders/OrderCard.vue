<template>
<router-link class="order-card" :to="`orders/details/${order.id}`">
    <h3>PlayFood</h3>
    <span class="order-id">
        #{{ order.orderNumber }}
    </span>
    <span v-for="(product, index)  in order.products.slice(0, 5)" v-bind:key="index">
        {{ product.name }} x {{ product.amount }} <br>
    </span>
    <br>
    {{ order.products.length }} items comprados
    <br>
    <b>Valor do pedido: R$ {{ totalProductsCart() | formatMoney }} </b>
</router-link>
</template>

<script>
export default {
    props: {
        order: {
            default: []
        }
    },
    methods: {
        totalProductsCart() {
            var totalCart = this.order.products.reduce((sum, product) => {
                return sum + (product.amount * product.price);
            }, 0);
            return totalCart;
        },
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

.order-card {
    border: 1px solid rgba(168, 175, 192, 0.3);
    border-radius: 4px;
    padding: 24px;
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        &.order-id {
            color: $purple;
            font-size: 12px;
            display: block;
            position: absolute;
            top: 10px;
            right: 21px;
        }
    }

    .btn {
        margin-top: 24px;
        padding: auto 0;
    }

    &:hover {
        background: #00000003;
    }
}
</style>
