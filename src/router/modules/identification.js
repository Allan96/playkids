import IdentificationPage from '@/views/Identification.vue';


const identificationRouter = {
    name: 'identification',
    path: '/identification',
    component: IdentificationPage,
    meta: {
        title: 'Cashforce | Identificação!',
        requiresAuth: false
    }
}

export default identificationRouter;