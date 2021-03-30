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
        <div id="login">
            <h1>
                Fazer login
            </h1>
            <form @submit.prevent="submitForm">
                <input type="text" name="" id="" placeholder="Insira seu nome" v-model="form.name">
                <span class="error">
                    {{ error }}
                </span>
                <button type="submit" class="btn btn-default">
                    Entrar
                </button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Header from '@/components/header/Header.vue'
export default {
    components: {
        Navbar,
        Header
    },
    data() {
        return {
            form: {
                name: '',
            },
            error: ''
        }
    },
    methods: {
        submitForm() {
            this.error = ''
            if (this.form.name.length == 0) {
                this.error = 'Insira um nome válido'
                return
            }
            this.$store.commit('user/setName', this.form.name)
            this.$router.push(`/`)
        }
    }

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

#login {
    grid-area: login;
    text-align: center;
    position: relative;

    h1 {
        margin-bottom: 32px;
    }

    .btn {
        justify-content: center;
        margin: 16px 0 0 0;
        width: 100%;
    }

    .error {
        margin-top: 16px;
        display: inline-block;
        color: rgba(255, 0, 0, 0.788);
    }
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
