<template>
<div class="card-product">
    <h5 class="type">
        {{ product.category == 'food' ? 'Comida' : ' Bebida'}}
    </h5>
    <h4 class="title">
        {{ product.name }}
    </h4>
    <p class="description">
        {{ product.description }}
    </p>
    <h5 class="price">
        R$ {{ product.price | formatMoney }}
    </h5>
    <button class="btn btn-default" @click="addProduct" v-if="$store.state.user.name">
        {{ selectedProduct.length == 0 ? 'Adicionar' : 'Adicionado' }}
    </button>
</div>
</template>

<script>
export default {
    props: {
        product: {
            required: true
        }
    },
    methods: {
        addProduct() {
            if (this.selectedProduct.length != 0) {
                this.$store.commit('cart/setOpenCart')
                return;
            }
            this.$store.commit('cart/setOpenCart')
            this.$store.commit('cart/addProduct', {
                ...this.product,
                amount: 1
            })
        }
    },
    computed: {
        selectedProduct() {
            return this.$store.state.cart.productsCart.filter((productCart) => {
                return productCart.id == this.product.id;
            })
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

.card-product {
    border: 1px solid rgba(168, 175, 192, 0.3);
    border-radius: 4px;
    padding: 24px 24px 48px 24px;
    cursor: pointer;
    position: relative;

    h5 {
        &.price {
            color: $purple;
            font-size: 12px;
            display: block;
            position: absolute;
            bottom: 12px;
            right: 21px;
        }

        &.type {
            font-size: 12px;
            color: $purple;
            font-weight: bold;
        }
    }

    .btn {
        position: absolute;
        bottom: 12px;
        padding: 8px;
        font-size: 12px;
    }

    &:hover {
        background: #00000003;
    }
}
</style>
