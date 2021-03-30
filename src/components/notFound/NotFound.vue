<template>
<div class="not-found">
    <NotFound />
    <h2>
        Não conseguimos encontrar nenhum produto com esse nome
    </h2>
    <p>
        Não foi encontrado nenhum resultado de acordo com a sua busca. Tente novamente!
    </p>
</div>
</template>

<script>
import NotFound from '@/components/icons/NotFound.vue'
export default {
    components:{
        NotFound
    }

}
</script>

<style lang="scss" scoped>
.not-found {
    text-align: center;
    color: #6E1EA0;
    margin: 150px 0;

    h2 {
        margin: 16px 0 8px 0;
    }

    svg {
        fill: #6E1EA0;
    }
}
</style>
