<template>
<div>
    <Navbar :createOrder="!$store.state.user.name" />
    <div class="container">
        <Search />
        <main>
            <Categories />
            <CardContent />
        </main>
    </div>
    <BoxResume />
</div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Search from '@/components/filters/Search.vue'
import Categories from '@/components/filters/Categories.vue'
import CardContent from '@/components/cards/CardContent.vue'
import BoxResume from '@/components/resume/BoxResume.vue'
export default {
    components: {
        Navbar,
        Search,
        Categories,
        CardContent,
        BoxResume
    },

}
</script>

<style>

</style>
