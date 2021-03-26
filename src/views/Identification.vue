<template>
<div>
    <Navbar :createOrder="false" />
    <div class="container">
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
export default {
    components: {
        Navbar,
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
#login {
    text-align: center;
    max-width: 100%;
    width: 500px;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;

    h1 {
        margin-bottom: 32px;
    }

    .btn {
        max-width: 100%;
        width: 500px;
        justify-content: center;
        margin: 16px 0 0 0;
    }

    .error {
        margin-top: 16px;
        display: inline-block;
        color: rgba(255, 0, 0, 0.788);
    }
}
</style>
