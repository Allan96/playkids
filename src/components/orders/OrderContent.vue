<template>
<div class="order">
    <OrderCard v-for="(order, index)  in $store.state.cart.orders" v-bind:key="index" :order="order" />
</div>
</template>

<script>
import OrderCard from '@/components/orders/OrderCard.vue'
export default {
    components: {
        OrderCard
    },

}
</script>

<style lang="scss" scoped>
.order {
    margin-top: 48px;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: 1fr 1fr;
}
</style>
