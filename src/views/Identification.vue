<template>
<div>
    <Navbar :searchVisible="false" />
    <Header :createOrder="false">
        <h1>
            Peça sua comida em minutos.
        </h1>
        <h3 class="regular">
            Temos diversos tipos de comidas e bebidas. Criou, finalizou, chegou.
        </h3>
    </Header>
    <div id="content-login" class="container">
        <Login />
    </div>
</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Header from '@/components/header/Header.vue'
import Login from '@/components/identification/Login.vue'
export default {
    components: {
        Navbar,
        Header,
        Login
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

#content-login {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
}

@media screen and (min-width: $xs) {
    #content-login {
        grid-template-areas:
            'login login login login login login';
    }
}

@media screen and (min-width: $lg) {
    #content-login {
        grid-template-areas:
            '. . login login . .';
    }
}
</style>
