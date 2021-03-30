<template>
<header>
    <div class="container">
        <slot></slot>
        <router-link to="/identification" v-if="createOrder">
            <button class="btn btn-outline-white">
                Faça um novo pedido
            </button>
        </router-link>
    </div>
</header>
</template>

<script>
export default {
    props: {
        createOrder: {
            type: Boolean,
            default: true
        },
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

header {
    display: flex;
    align-items: center;
    margin: 0 0 48px 0;
    padding: 48px 0;
    min-height: 300px;
    background: #8E2DE2;
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
    color: white;

    .btn {
        margin-top: 32px;
    }
}

@media screen and (min-width: $xs) {
    header {
        background: linear-gradient(to right, #4A00E0, #8E2DE2);
    }
}

@media screen and (min-width: $lg) {
    header {
        background: url(../../assets/imgs/food.png), linear-gradient(to right, #4A00E0, #8E2DE2);
        background-position: calc(100% - 50px) top, left top;
        background-repeat: no-repeat;
    }
}
</style>
