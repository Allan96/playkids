import { mount, shallowMount } from '@vue/test-utils'
import formatMoney from '@/filters/formatMoney'
import CardProduct from '@/components/cards/CardProduct.vue'
import store from '@/store';

import Vue from 'vue'
Vue.use(formatMoney)

describe('Comida | CardProduct.vue', () => {
    const wrapper = mount(CardProduct, {
        store,
        propsData: {
            product: {
                id: 1,
                category: "food",
                name: "Gourmet Chef Salad Platter",
                description: "Roast beef, turkey, ham and American cheese on a bed of mix lettuce with tomatoes, cucumbers, peppers, olives and boiled egg.",
                price: 9.95
            }
        }
    })

    it('Checar se as informações estão nos lugares corretos | Comida', () => {
        expect(wrapper.find('.type').text()).toEqual('Comida')
    })

    it('Checar se as informações estão nos lugares corretos | Nome', () => {
        expect(wrapper.find('.title').text()).toEqual('Gourmet Chef Salad Platter')
    })

    it('Checar se as informações estão nos lugares corretos | Descrição', () => {
        expect(wrapper.find('.description').text()).toEqual('Roast beef, turkey, ham and American cheese on a bed of mix lettuce with tomatoes, cucumbers, peppers, olives and boiled egg.')
    })

    it('Checar se as informações estão nos lugares corretos | Preço', () => {
        expect(wrapper.find('.price').text()).toEqual('R$ 9,95')
    })
})

describe('Bebida | CardProduct.vue', () => {
    const wrapper = mount(CardProduct, {
        store,
        propsData: {
            product: {
                id: 2,
                category: "drink",
                name: "Orange Juice",
                description: "",
                price: 3.5
            },
        }
    })

    it('Checar se as informações estão nos lugares corretos | Bebida', () => {
        expect(wrapper.find('.type').text()).toEqual('Bebida')
    })

    it('Checar se as informações estão nos lugares corretos | Nome', () => {
        expect(wrapper.find('.title').text()).toEqual('Orange Juice')
    })

    it('Checar se as informações estão nos lugares corretos | Descrição', () => {
        expect(wrapper.find('.description').text()).toEqual('')
    })

    it('Checar se as informações estão nos lugares corretos | Preço', () => {
        expect(wrapper.find('.price').text()).toEqual('R$ 3,50')
    })
})