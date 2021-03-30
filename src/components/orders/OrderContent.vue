<template>
<div id="content-order">
    <div class="search">
        <input type="text" placeholder="Busque por um item comprado" v-model="filterSearch">
    </div>
    <div class="order" v-if="productsFiltered.length">
        <OrderCard v-for="(order, index)  in productsFiltered" v-bind:key="index" :order="order" />
    </div>
    <NotFound v-else />
</div>
</template>

<script>
import OrderCard from '@/components/orders/OrderCard.vue'
import NotFound from '@/components/notFound/NotFound.vue'
export default {
    components: {
        OrderCard,
        NotFound
    },
    data() {
        return {
            filterSearch: ''
        }
    },
    computed: {
        productsFiltered() {
            let filter = []
            this.$store.state.cart.orders.map((order) => {
                let filterPush = order.products.filter((product) => {
                    return product.name.toLowerCase().indexOf(this.filterSearch.toLowerCase()) >= 0;

                })
                filterPush.length > 0 ? filter.push(order) : '';
            })
            return filter
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

#content-order {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 16px;
    grid-column-gap: 16px;
}
.not-found{
      grid-area: content;
}

.order {
    grid-area: content;
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
}

.search {
    margin-top: 48px;
    grid-area: search;
}

@media screen and (min-width: $xs) {
    #content-order {
        grid-template-areas:
            'search search search search search search'
            'content content content content content content';
    }

    .order {
        grid-template-columns: 1fr;
    }

    @media screen and (min-width: $xl) {
        #content-order {
            grid-template-areas:
                '. . . . search search'
                'content content content content content content';
        }

        .order {
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>
