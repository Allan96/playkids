<template>
<div id="sidebar">
    <h3>
        Selecione uma categoria
    </h3>
    <ul>
        <li :class="$store.state.products.filterCategory == '' ? 'active' : ''" @click="selectCategory('')">
            Todos os produtos
        </li>
        <li :class="$store.state.products.filterCategory == 'food' ? 'active' : ''" @click="selectCategory('food')">
            Comidas
        </li>
        <li :class="$store.state.products.filterCategory == 'drink' ? 'active' : ''" @click="selectCategory('drink')">
            Bebidas
        </li>
    </ul>
</div>
</template>

<script>
export default {
    methods: {
        selectCategory(value) {
            this.$store.commit('products/setFilterCategory', value);
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

#sidebar {
    ul {
        padding: 0;

        li {
            display: block;
            padding: 0 8px;
            margin: 10px 0;
            border-left: 1px solid transparent;
            cursor: pointer;

            &.active,
            &:hover {
                color: $purple;
                font-weight: bold;
                border-left: 1px solid $purple;
            }
        }
    }
}
</style>
