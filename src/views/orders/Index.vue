<template>
<div>
    <Navbar :createOrder="!$store.state.user.name" :searchVisible="false" />

    <router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
export default {
    components: {
        Navbar
    },

}
</script>

<style>

</style>
