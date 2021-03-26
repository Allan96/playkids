export default {
    namespaced: true,
    state: {
        cartOpen: false,
        productsCart: [],
        orders: []
    },
    mutations: {
        clear(state) {
            state.cartOpen = false
            state.productsCart = []
            state.orders = []
        },
        addProduct(state, productsCart) {
            state.productsCart.push(productsCart)
        },
        setOpenCart(state) {
            state.cartOpen = !state.cartOpen
        },
        addAmountProduct(state, idProduct) {
            let index = state.productsCart.findIndex((product => product.id == idProduct));
            state.productsCart[index].amount++
        },
        removeAmountProduct(state, idProduct) {
            let index = state.productsCart.findIndex((product => product.id == idProduct));
            if (state.productsCart[index].amount > 1) {
                state.productsCart[index].amount--
            } else {
                state.productsCart.splice(index, 1);
            }
        },
        addcheckOut(state) {
            let now = Date.now().toString()
            now += now + Math.floor(Math.random() * 10)
            state.orders.push({ orderNumber: (state.orders.length + 1), id: [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-'), products: state.productsCart, creadtedAt: new Date().toISOString() })
            state.productsCart = []
        }
    },
    actions: {

    }
}