<template>
<div>
    <Navbar />
    <Header :createOrder="!$store.state.user.name">
        <h1>
            Peça sua comida em minutos.
        </h1>
        <h3 class="regular">
            Temos diversos tipos de comidas e bebidas. Criou, finalizou, chegou.
        </h3>
    </Header>
    <div id="content-home" class="container">
        <Categories />
        <CardContent />
    </div>
    <BoxResume />
</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Categories from '@/components/filters/Categories.vue'
import CardContent from '@/components/cards/CardContent.vue'
import BoxResume from '@/components/resume/BoxResume.vue'
import Header from '@/components/header/Header.vue'
export default {
    components: {
        Navbar,
        Categories,
        CardContent,
        BoxResume,
        Header
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

#content-home {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
}

@media screen and (min-width: $xs) {
    #content-home {
        grid-template-areas:
            'content content content content content content';
    }
}

@media screen and (min-width: $xl) {
    #content-home {
        grid-template-areas:
            '. . . . search search'
            'sidebar content content content content content';
    }
}
</style>
