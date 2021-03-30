import { mount, shallowMount } from '@vue/test-utils'
import Login from '@/components/identification/Login.vue'



describe('Login.vue', () => {
    const wrapper = mount(Login)
    it('Titulo na página de login', () => {
        expect(wrapper.find('h1').text()).toEqual('Fazer login')
    })
    it('Mensagem de erro quando o formulário é submitado sem um nome', async() => {
        jest.useFakeTimers()
        wrapper.find('form').trigger("submit")
        await wrapper.vm.$nextTick();
        jest.runTimersToTime(2000)
        expect(wrapper.find('.error').text()).toEqual('Insira um nome válido')



    })
})