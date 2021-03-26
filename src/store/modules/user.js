export default {
    namespaced: true,
    state: {
        name: null,
    },
    mutations: {
        clear(state) {
            state.name = null
        },
        setName(state, name) {
            state.name = name
        },
    },
    actions: {}
}