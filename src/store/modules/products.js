export default {
    namespaced: true,
    state: {
        allProducts: [],
        foodProducts: [],
        drinkProducts: [],
        filterCategory: '',
        filterSearch: ''
    },
    mutations: {
        clear(state) {
            state.filterCategory = '',
                state.filterSearch = ''
        },
        setProducts(state, allProducts) {
            let drinkProducts = allProducts.filter((product) => {
                return product.category === 'drink';
            })

            let foodProducts = allProducts.filter((product) => {
                return product.category === 'food';
            })

            Object.assign(state, { allProducts })
            Object.assign(state, { foodProducts })
            Object.assign(state, { drinkProducts })

        },
        setFilterSearch(state, filterSearch) {
            state.filterSearch = filterSearch
        },
        setFilterCategory(state, filterCategory) {
            state.filterCategory = filterCategory
        },
    },
    actions: {

    }
}