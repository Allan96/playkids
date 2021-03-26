import IndexOrder from '@/views/orders/Index.vue';
import OrdersPage from '@/views/orders/Orders.vue';
import DetailsOrderPage from '@/views/orders/DetailsOrder.vue';


const ordersRouter = {
    name: 'orders',
    path: '/orders',
    component: IndexOrder,
    meta: {
        title: 'Cashforce | Meus pedidos',
        requiresAuth: false
    },
    children: [{
        path: '/',
        component: OrdersPage
    }, {
        path: 'details/:id',
        component: DetailsOrderPage
    }]
}

export default ordersRouter;