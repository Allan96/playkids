import axios from 'axios'
import store from '@/store'
async function getProducts() {
    try {
        const result = await axios.get(`https://5ff37c3328c3980017b195e8.mockapi.io/api/products`);

        store.commit('products/setProducts', result.data)

        return result.data
    } catch (e) {
        return e.response
    }
}

export default getProducts