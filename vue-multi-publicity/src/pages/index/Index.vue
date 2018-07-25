<template>
    <div id="index">
        <Loading ref='loading'></Loading>

        <!-- banner Start -->
        <div class="indexBanner">
            <img src="./img/indexBanner_img.jpg" class="indexBanner_bgImg">
            <img src="./img/indexBanner_img.jpg" class="indexBanner_bgImg">

            <div class="indexBanner_content">
                <img src="./img/indexBanner_icon.png" class="indexBanner_icon">
                <div class="indexBanner_text">
                    <h2 class="indexBanner_title">担当者行动</h2>
                    <p class="indexBanner_des">让每个乡村小学的孩子都享有高品质量的阅读</p>
                </div>
            </div>
        </div>
        <!-- banner End -->

        <div class="indexTitle"><span class="totalCount">{{totalCount}}</span>个账本正在公示：</div>
        
        
        <!-- indexList Start -->
        <div class="indexList" v-if="welfareBooks.length > 0">
            <a href="detail.html" class="indexColumn" v-for="welfareBook of welfareBooks">
                <div class="indexColumn_img"><img :src="welfareBook.bookIconUrl" @load="changeImgProportion"></div>
                <div class="indexColumn_mid">
                    <h3 class="indexColumn_title">{{welfareBook.bookName}}</h3>
                    <div class="indexColumn_content">
                        <div class="indexColumn_textWrap">
                            <div class="indexColumn_textItem">
                                <i class="indexColumn_dateIcon" v-if="welfareBook.lastTransactionDateType === 1">今天</i>
                                <i class="indexColumn_dateIcon" v-if="welfareBook.lastTransactionDateType === 2">昨天</i>
                                <span v-if="welfareBook.lastTransactionDateType === 3">最近一笔</span>
                                <span>{{welfareBook.lastTransactionName}}</span>
                                <span>{{welfareBook.lastTransactionCategoryName}}</span>
                            </div>
                            <div class="indexColumn_textItem">
                                <span>当前结余</span>
                            </div>
                        </div>

                        <div class="indexColumn_numWrap">
                            <div class="indexColumn_inColor" v-if="welfareBook.type === 1">{{welfareBook.lastTransactionMoney}}</div>
                            <div class="indexColumn_outColor" v-if="welfareBook.type === -1">{{welfareBook.lastTransactionMoney}}</div>
                            <div v-if="welfareBook.type === 0">{{welfareBook.lastTransactionMoney}}</div>
                            <div class="indexColumn_surplusColor">{{welfareBook.bookSurplus}}</div>
                        </div>
                    </div>
                </div>
                <i class="indexColumn_arrowIcon"></i>
            </a>
        </div>
        <!-- indexList End -->

        <div class="indexNodate" v-if="welfareBooks.length <= 0">
            <img src="./img/indexNodate.png" class="indexNodate_img">
            <p class="indexNodate_text">暂无账本</p>
        </div>
        <img src="./img/indexBottom_logo.png" class="indexBottom_logo">
    </div>
</template>


<script>
    import '@/common/css/common.css';
    import axios from 'axios';
    import $ from 'jquery';
    import Loading from '@/components/Loading.vue';

    export default {
        name: 'Index',
        components: {
            Loading
        },
        data(){
            return {
                totalCount: 0,
                welfareBooks: []
            }
        },
        mounted(){
            this.getData();
        },
        updated: function () {
            this.$nextTick(() => {
                // DOM和数据更新后，修改loading组件的数据改变样式，隐藏loading
                this.$refs.loading.loaded = true;
            })
        },
        methods: {
            getData(){
                axios.get('./static/data/index.json').then(res => {
                    const data = res.data;
                    this.totalCount = data.totalCount;
                    this.welfareBooks = data.welfareBooks;
                });
            },
            changeImgProportion(e){
                var target = e.target,
                    imgW = target.offsetWidth,
                    imgH = target.offsetHeight,
                    imgScale = imgW / imgH, // 图片的宽高比
                    parentNode = target.parentNode,
                    parentW = parentNode.offsetWidth,
                    parentH = parentNode.offsetHeight,
                    parentScale = parentW / parentH; // 父元素的宽高比

                if( imgScale > parentScale ){
                    // 图片宽高比大于父元素宽高比，设置图片高度100%,截取图片宽度
                    target.style.cssText += ` 
                        width: auto;
                        height: 100%;
                        margin: 0;
                        margin-left: -${Math.round((parentH / imgH * imgW - parentW) / 2)}px;
                    `;
                }else if( imgScale < parentScale ){
                    // 图片宽高比小于父元素宽高比，设置图片宽度100%,截取图片高度
                    target.style.cssText += ` 
                        width: 100%;
                        height: auto;
                        margin: 0;
                        margin-left: -${Math.round((parentW / imgW * imgH - parentH) / 2)}px;
                    `;
                }else{
                    // 图片宽高比与父元素宽高比相等，设置图片宽高100%
                    target.style.cssText += ` 
                        width: 100%;
                        height: 100%;
                        margin: 0;
                    `;
                }
            }
        }
    }
</script>


<style scoped>
    /* index */
    #index{
        min-height: 100vh;
        padding-bottom: 0.87rem;
    }
    .indexBanner {
        height: 0;
        padding-bottom: 27.8125%;
        overflow: hidden;
    }
    .indexBanner_bgImg {
        left: 0;
        top: 0;
        width: 100%;
    }
    .indexBanner_content,
    .indexColumn{
        -webkit-box-align: center;
        box-align: center;
    }
    .indexBanner_content {
        z-index: 2;
        width: 100%;
        height: 100%;
        padding: 0 6.25%;
    }
    .indexBanner_icon {
        display: block;
        width: 0.71rem;
        height: 0.71rem;
        border-radius: 50%;
        overflow: hidden;
    }
    .indexBanner_text {
        margin-left: 0.3rem;
    }
    .indexBanner_des {
        font-size: 0.22rem;
        color: #ccc;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow : hidden;
        text-overflow: ellipsis;
    }
    .indexTitle {
        height: 0.7rem;
        line-height: 0.7rem;
        padding: 0 0.3rem;
    }
    .indexTitle {
        border-bottom: 1px solid #e4e4e4;
    }
    .indexColumn {
        border-bottom: 1px solid #ebebeb;
    }
    .indexList {
        background-color: #fff;
    }
    .indexColumn {
        -webkit-box-pack: justify;
        box-pack: justify;
        color: #333;
        padding: 0.14rem 0.3rem 0.14rem 0.14rem;
    }
    .indexColumn_img {
        width: 1.46rem;
        height: 1.46rem;
        overflow: hidden;
        box-shadow: 0 0 0.24rem #ccc;
    }
    .indexColumn_mid {
        padding: 0 0.3rem;
    }
    .indexColumn_title {
        font-size: 0.34rem;
    }
    .indexColumn_content {
        -webkit-box-pack: justify;
        box-pack: justify;
        -webkit-box-align: end;
        box-align: end;
        line-height: 0.4rem;
        margin-top: 0.1rem;
    }
    .indexColumn_textItem {
        font-size: 0;
    }
    .indexColumn_textItem span,
    .indexColumn_textItem i {
        display: inline-block;
        font-size: 0.24rem;
        vertical-align: top;
        line-height: normal;
    }
    .indexColumn_textItem span {
        margin-right: 0.18rem;
    }
    .indexColumn_dateIcon {
        display: inline-block;
        line-height: 1.5;
        font-style: normal;
        color: #f69917;
        background-color: #fff2e0;
        border-radius: 0.04rem;
        padding: 0 0.06rem;
        margin-right: 0.18rem;
    }
    .indexColumn_numWrap {
        text-align: right;
        margin-left: 0.2rem;
    }
    .indexColumn_arrowIcon,
    .projectArrowR {
        display: block;
        width: 0.18rem;
        height: 0.18rem;
        border: 0.04rem solid #999;
        border-left: none;
        border-bottom: none;
        -webkit-transform: rotate3d(0,0,1,45deg);
        transform: rotate3d(0,0,1,45deg);
    }
    .indexNodate {
        text-align: center;
        margin-top: 15%;
    }
    .indexNodate_img {
        width: 2.25rem;
    }
    .indexNodate_text {
        margin-top: 0.25rem;
    }
    .indexBottom_logo {
        left: 50%;
        bottom: 0.25rem;
        width: 2.58rem;
        margin-left: -1.29rem;
    }

    /* 首页数据显示条 */
    .dropload-up,.dropload-down {
        display: none;
        position: relative;
        overflow: hidden;
        -webkit-transform:translateZ(0);
        transform:translateZ(0);
    }
    .dropload-down{
        padding: 0.2rem 0;
    }
    .dropload-refresh,.dropload-update,.dropload-load,.dropload-noData{
        text-align: center;
    }
    .dropload-load .loading{
        display: inline-block;
        height: 0.3rem;
        width: 0.3rem;
        border-radius: 100%;
        margin: 0.12rem;
        border: 0.04rem solid #666;
        border-bottom-color: transparent;
        vertical-align: middle;
        -webkit-animation: rotate 0.75s linear infinite;
        animation: rotate 0.75s linear infinite;
    }
    @-webkit-keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
