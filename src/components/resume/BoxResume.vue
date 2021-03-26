<template>
<div id="resume" v-show="$store.state.cart.cartOpen">
    <div class="box-resume">
        <div>
            <div class="header">
                <div @click="closeBox" class="pointer">
                    <Back />
                </div>
            </div>
            <div class="products">
                <h3 v-show="productsWithType('food').length > 0">Comidas</h3>
                <ProductResume v-for="(product, index)  in productsWithType('food')" v-bind:key="index" :product="product" />

                <h3 v-show="productsWithType('drink').length > 0">Bebidas</h3>
                <ProductResume v-for="(product, index)  in productsWithType('drink')" v-bind:key="index" :product="product" />
            </div>
        </div>
        <div class="box-card">
            <p>
                Dados do cartão de crédito
            </p>
            <input type="text" name="name" id="name" placeholder="Nome do portador">
            <div>
                <input type="text" name="number" id="number" placeholder="Número do cartão">
                <input type="text" name="validate" id="validate" placeholder="Validade (MM/AAAA)">
            </div>
            <input type="text" name="security" id="security" placeholder="Código de segurança">
        </div>
        <div class="resume-products">
            <h3>
                Total: R$ {{ totalProductsCart | formatMoney }}
            </h3>
            <button class="btn btn-default" @click="checkOut" :disabled="$store.state.cart.productsCart.length == 0">
                Finalizar pedido
            </button>
        </div>
    </div>
</div>
</template>

<script>
import Back from '@/components/icons/Back.vue'
import ProductResume from '@/components/resume/ProductResume.vue'
export default {
    components: {
        Back,
        ProductResume
    },
    methods: {
        closeBox() {
            this.$store.commit('cart/setOpenCart')
        },
        productsWithType(value) {
            let filter = this.$store.state.cart.productsCart.filter((product) => {
                return product.category.toLowerCase().indexOf(value) >= 0
            })
            return filter
        },
        checkOut() {
            this.$store.commit('cart/addcheckOut')
            this.$store.commit('cart/setOpenCart')
            this.$router.push(`/orders`)
        }
    },
    computed: {
        totalProductsCart() {
            var totalCart = this.$store.state.cart.productsCart.reduce((sum, product) => {
                return sum + (product.amount * product.price);
            }, 0);
            return totalCart;
        },
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

#resume {
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    background: #0000005e;

    .box-resume {
        overflow: auto;
        max-width: 100vw;
        width: 500px;
        background: white;
        padding: 0px 24px 24px 24px;
        position: absolute;
        top: 0;
        right: 0;
        min-height: calc(100vh - 48px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .header {
            border-bottom: 1px solid #DFE2EB;
            display: flex;
            align-items: center;
            margin: 0 -24px;
            padding: 16px 24px;
            height: 54px;

            svg {
                fill: #727D94;
                margin-right: 16px;
            }
        }

        .products {
            overflow: auto;
            height: calc(100vh - 150px);

            h3 {
                color: #6E1EA0;
                margin: 24px 0 16px 0;
            }
        }

        .box-card {
            input {
                width: 100%;
                margin: 8px 4px;
            }

            div {
                display: flex;
                justify-content: space-evenly;

                input {
                    margin-right: 0;
                }
            }
        }

        .resume-products {
            height: 50px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            margin-top: 22px;
        }
    }
}

@media screen and (min-width: $lg) {
    #resume {
        .box-resume {
            .resume-products {
                flex-direction: row;
            }
        }
    }
}
</style>
