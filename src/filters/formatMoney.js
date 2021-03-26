const formatMoney = {
    install(Vue) {
        Vue.filter('formatMoney', (value) => {
            let val = value.toFixed(2).toString().replace('.', ',')
            return val;
        });
    },
};

export default formatMoney