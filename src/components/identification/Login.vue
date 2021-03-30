<template>
<div id="login">
    <h1>Fazer login</h1>
    <form @submit.prevent="submitForm">
        <input type="text" name="name" id="" placeholder="Insira seu nome" v-model="form.name">
        <span class="error">
            {{ error }}
        </span>
        <button type="submit" class="btn btn-default">
            Entrar
        </button>
    </form>
</div>
</template>

<script>
export default {

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
</style>
