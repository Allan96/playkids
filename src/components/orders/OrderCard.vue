<template>
<div class="order-card">
    <h3>PlayFood</h3>
    <span class="order-id">
        #{{ order.orderNumber }}
    </span>
    Items comprados: {{ order.products.length }}
    <router-link :to="`orders/details/${order.id}`">
        <button class="btn btn-default">
            Ver detalhes do pedido
        </button>
    </router-link>
</div>
</template>

<script>
export default {
    props: {
        order: {
            default: []
        }
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
            bottom: 12px;
            right: 21px;
        }
    }

    .btn {
        margin-top: 24px;
    }

    &:hover {
        background: #00000003;
    }
}
</style>
