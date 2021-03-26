<template>
<nav class="navbar">
    <div class="container">
        <div class="navbar-logo">
            <router-link to="/">
                PlayFood
            </router-link>
        </div>
        <div class="create-order">
            <router-link to="/orders" v-show="$store.state.cart.orders.length > 0">
                <div class="my-orders"> Meus pedidos </div>
            </router-link>
            <router-link to="/identification" v-show="createOrder">
                <button class="btn btn-default">
                    Criar um novo pedido
                </button>
            </router-link>
            <div @click="closeBox" class="pointer">
                <Cart v-show="$store.state.user.name" />
            </div>
            <div class="area-client" v-show="$store.state.user.name">
                <User />
                {{ $store.state.user.name }}
            </div>
            <div class="logout pointer" @click="logout" v-show="$store.state.user.name">
                Sair
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import Cart from '@/components/icons/Cart.vue'
import User from '@/components/icons/User.vue'
export default {
    components: {
        User,
        Cart
    },
    props: {
        createOrder: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        closeBox() {
            this.$store.commit('cart/setOpenCart')
        },
        logout() {
            this.$store.commit('user/clear')
            this.$store.commit('cart/clear')
            this.$store.commit('products/clear')
            this.$router.push(`/`)
        }
    }

}
</script>

<style>

</style>
