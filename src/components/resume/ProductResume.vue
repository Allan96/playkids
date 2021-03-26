<template>
<div class="product-resume">
    <p>
        {{ product.name }} <br>
        <span><b>Total:</b> R$ {{ (product.amount * product.price) | formatMoney }}</span>
    </p>
    <div class="amount-product" v-if="changeAmount">
        <div @click="removeAmountProduct" class="button-amount">
            -
        </div>
        <div class="amount">
            {{ product.amount }}
        </div>

        <div @click="addAmountProduct" class="button-amount">
            +
        </div>
    </div>

    <div v-else>
        x{{ product.amount }}
    </div>
</div>
</template>

<script>
export default {
    props: {
        product: {
            default: []
        },
        changeAmount: {
            default: true
        }
    },
    methods: {
        addAmountProduct() {
            this.$store.commit('cart/addAmountProduct', this.product.id)
        },
        removeAmountProduct() {
            this.$store.commit('cart/removeAmountProduct', this.product.id)
        }
    }

}
</script>

<style lang="scss" scoped>
.product-resume {
    width: 100%;
    display: grid;
    grid-template-columns: auto 100px;
    border: 1px solid rgba(168, 175, 192, 0.3);
    border-radius: 4px;
    padding: 8px;
    align-items: center;
    margin: 16px 0;

    p {
        font-size: 18px;
        margin: 0;

        span {
            font-size: 12px;
            display: block;
        }
    }

    .amount-product {
        display: flex;
        align-items: center;

        .amount {
            font-size: 16px;
            font-weight: bold;
        }

        .button-amount {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            margin: 8px;
            cursor: pointer;
            background: #6E1EA0;
            color: white;
            width: 24px;
            height: 24px;
            font-size: 16px;
            line-height: 20px;
            font-weight: bold;
        }
    }
}
</style>
