<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/var.scss';

@media screen and (min-width: $xs) {
    #app {
        padding-top: 145px;
    }
}

@media screen and (min-width: $lg) {
    #app {
        padding-top: 70px;
    }
}
</style>
