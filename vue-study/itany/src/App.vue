<template>
    <div id="app">
        <Header></Header>

        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>

        <router-view/>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue'
    export default {
        components: {
            Header
        }
    }
</script>

<style scoped>
    #app .tab {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .tab-item {
        flex: 1;
        text-align: center;
        border-bottom: 1px solid rgba(7,17,27,0.1);
    }
    .tab-item a {
        font-size: 14px;
        color: #666;
    }
    .tab-item .active {
        color: #ff7300;
    }
</style>
