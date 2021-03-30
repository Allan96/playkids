<template>
<nav class="navbar">
    <div class="container">
        <div class="navbar-logo">
            <router-link to="/">
                PlayFood
            </router-link>
        </div>
        <div class="navbar-right">
            <Search v-if="searchVisible" />
            <ul class="create-order">
                <li v-if="$store.state.cart.orders.length > 0">
                    <router-link to="/orders">
                        <div class="my-orders"> Meus pedidos </div>
                    </router-link>
                </li>
                <li v-if="$store.state.user.name">
                    <div @click="closeBox" class="pointer">
                        <Cart />
                    </div>
                </li>
                <li v-if="$store.state.user.name">
                    <div class="button-client">
                        <User />
                        {{ $store.state.user.name }}
                    </div>
                </li>
                <li v-if="$store.state.user.name" @click="logout">
                    Sair
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
import Cart from '@/components/icons/Cart.vue'
import User from '@/components/icons/User.vue'
import Search from '@/components/filters/Search.vue'
export default {
    components: {
        Search,
        User,
        Cart
    },
    props: {
        createOrder: {
            type: Boolean,
            default: true
        },
        searchVisible: {
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

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

nav {
    padding: 20px 0;
    border-bottom: 2px solid #DFE2EB;
    grid-area: navbar;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 4;
    background: white;

    &.navbar {
        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .navbar-logo {
            font-family: 'Fredoka One', cursive;
            font-size: 24px;
            color: $purple;
        }

        .navbar-right {
            display: flex;
            align-items: center;
        }

        .create-order {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;

            li {
                display: inline-block;
                margin: 0 16px;
                cursor: pointer;
            }

        }

        .button-client {
            background: #dfe2eb67;
            border: 2px solid transparent;
            padding: 6px 24px;
            border-radius: 4px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 8px;
                fill: #727D94;
            }

            &:hover {
                background: transparent;
                border-color: #dfe2eb67;
            }
        }
    }
}

@media screen and (min-width: $xs) {
    nav {
        &.navbar {
            .container {
                flex-direction: column;

                .navbar-right {
                    flex-direction: column;
                    margin-top: 16px;

                    #search {
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: $md) {
    nav {
        &.navbar {
            .container {
                flex-direction: row;

                .navbar-right {
                    margin-top: 0;
                    flex-direction: row;

                    #search {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
