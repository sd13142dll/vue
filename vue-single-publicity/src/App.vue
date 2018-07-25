<template>
    <div id="app">
        <common-nav></common-nav>
        <router-view/>
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'
    export default {
        name: 'App',
        components: {
            'common-nav': Nav
        }
    }
</script>

<style>
</style>
