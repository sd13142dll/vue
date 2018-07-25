<template>
    <div class="detail">
        <Loading ref='loading'></Loading>

        <!-- banner Start -->
        <div class="detailBanner">
            <img src="./img/detailBanner_img.jpg" class="detailBanner_img">
            
            <div class="detailBanner_wrap">
                <img src="./img/detailBanner_logo.png" class="detailBanner_logo">
                <div class="detailBanner_content">
                    <h3 class="detailBanner_titleS">担当者行动</h3>
                    <h1 class="detailBanner_title">班班有个图书角</h1>
                    <ul class="detailBanner_box">
                        <li>
                            <div class="detailBanner_type">支出</div>
                            <div class="detailBanner_money detailBanner_moneyOut">121,234,243.00</div>
                        </li>
                        <li>
                            <div class="detailBanner_type">收入</div>
                            <div class="detailBanner_money detailBanner_moneyIn">121,234,243.00</div>
                        </li>
                        <li>
                            <div class="detailBanner_type">结余</div>
                            <div class="detailBanner_money">121,234,243.00</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- banner End -->
        
        <!-- content Start -->
        <div class="detailContent">
            <h2 class="detailContent_title">账本流水</h2>
            
            <!-- indexNodate Start-->
            <div class="detailNodate" v-if="monthTransactions.length <= 0">
                <img src="./img/detailNoDate.png" width="25.3125%">
                <p class="indexNodate_text">暂无流水</p>
            </div>
            <!-- indexNodate End-->
            
            <div class="detailList" v-if="monthTransactions.length > 0">
                <div class="detailMonth" v-for="monthTransaction of monthTransactions">    
                    <div class="detailColumn" v-for="dayTransaction of monthTransaction.dayTransactions">
                        <div class="detailData">
                            <div class="detailData_dateFlex">
                                <div class="detailData_ym">{{monthTransaction.yearMonth}}</div>
                                <div><span class="detailData_day">{{dayTransaction.dateOfDay}}</span> / {{dayTransaction.weekOfDay}}</div>
                            </div>

                            <ul class="detailData_numFlex">
                                <li>
                                    <i class="detailData_icon detailData_iconAdd"></i>
                                    <span class="detailData_num">{{dayTransaction.inComeTotal}}</span>
                                </li>

                                <li>
                                    <i class="detailData_icon detailData_iconReduce"></i>
                                    <span class="detailData_num">{{dayTransaction.expenditureTotal}}</span>
                                </li>

                                <li>
                                    <i class="detailData_icon detailData_iconSurplus"></i>
                                    <span class="detailData_num">{{dayTransaction.surplus}}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="detailItem" v-for="transactionItem of dayTransaction.transactionItems">
                            <div class="detailItem_icon" v-if="transactionItem.type !== 2 && transactionItem.type !== 3"
                            :style="'background-position: -' + iconPosition(transactionItem.transactionIcon) + 'px 0;'"></div>
                            <div class="detailItem_content">
                                <div class="detailItem_title">
                                    <div class="detailItem_name">{{transactionItem.categoryName}}</div>
                                    <div class="detailItem_money detailItem_moneyOut">{{transactionItem.money}}</div>
                                </div>
                                <div class="detailItem_text">
                                    <img :src="transactionItem.transactionImgUrl" @click="showDetailImgPop"> 
                                </div>
                                <div class="detailItem_note" v-html="transactionItem.bottomBar.replace(/[*]/g, '<span class=detailItem_point></span>')"></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <!-- content End -->

        <!-- menu Start -->
        <ul class="detailMenu">
            <li><a href="javascript:;">支出分类</a></li>
            <li><a href="javascript:;">支出预算表</a></li>
            <li><a href="javascript:;">切换项目</a></li>
        </ul>
        <!-- menu End --> 

        <!-- pop Start -->
        <div class="pop" v-show="popShow" @click="hidePop">
            <div class="detailPop_wrap"><img :src="popShow ? popImg : 'http://img.zcool.cn/community/01491557e1e0f00000012e7e66d689.gif'" class="detailPop_img"></div>
        </div>
        <!-- pop End -->
    </div>
</template>

<script>
    import '@/common/css/common.css';
    import axios from 'axios';
    import $ from 'jquery';
    import Loading from '@/components/Loading.vue';

    export default {
        name: 'Detail',
        components: {
            Loading
        },
        data(){
            return {
                monthTransactions: [],
                popImg: '',
                popShow: false
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
                axios.get('./static/data/detail.json').then(res => {
                    const data = res.data;
                    this.monthTransactions = data.monthTransactions;
                });
            },
            iconPosition(iconName){
                let mIcons = [];
                mIcons['d_ajhk.png'] = 45;
                mIcons['d_bjf.png'] = 33;
                mIcons['d_com1.png'] = 11;
                mIcons['d_com2.png'] = 23;
                mIcons['d_dczc.png'] = 29;
                mIcons['d_fbjh.png'] = 31;
                mIcons['d_fz.png'] = 3;
                mIcons['d_ggjt.png'] = 16;
                mIcons['d_gzsr.png'] = 24;
                mIcons['d_hrqw.png'] = 32;
                mIcons['d_hzsp.png'] = 38;
                mIcons['d_jbsr.png'] = 50;
                mIcons['d_jjsr.png'] = 46;
                mIcons['d_jjwy.png'] = 2;
                mIcons['d_jltx.png'] = 5;
                mIcons['d_jrbx.png'] = 10;
                mIcons['d_jysd.png'] = 51;
                mIcons['d_jzsr.png'] = 37;
                mIcons['d_ljsr.png'] = 25;
                mIcons['d_lxsr.png'] = 36;
                mIcons['d_lxzc.png'] = 53;
                mIcons['d_mrf.png'] = 44;
                mIcons['d_qtsr.png'] = 13;
                mIcons['d_rcyp.png'] = 15;
                mIcons['d_rqwl.png'] = 8;
                mIcons['d_sbzz.png'] = 19;
                mIcons['d_sdmq.png'] = 28;
                mIcons['d_sgls.png'] = 39;
                mIcons['d_sjcf.png'] = 40;
                mIcons['d_sjf.png'] = 30;
                mIcons['d_smzb.png'] = 43;
                mIcons['d_spjs.png'] = 1;
                mIcons['d_swf.png'] = 41;
                mIcons['d_tzks.png'] = 34;
                mIcons['d_tzsr.png'] = 54;
                mIcons['d_wxby.png'] = 52;
                mIcons['d_wygl.png'] = 56;
                mIcons['d_xcjt.png'] = 4;
                mIcons['d_xfss.png'] = 14;
                mIcons['d_xjjz.png'] = 20;
                mIcons['d_xmbb.png'] = 26;
                mIcons['d_xxjx.png'] = 7;
                mIcons['d_xxwl.png'] = 42;
                mIcons['d_xxyl.png'] = 6;
                mIcons['d_ydjs.png'] = 18;
                mIcons['d_yfsp.png'] = 0;
                mIcons['d_yhsx.png'] = 22;
                mIcons['d_yjc.png'] = 27;
                mIcons['d_yjf.png'] = 48;
                mIcons['d_ylbj.png'] = 9;
                mIcons['d_ypf.png'] = 21;
                mIcons['d_ywds.png'] = 35;
                mIcons['d_ywlq.png'] = 55;
                mIcons['d_zjf.png'] = 17;
                mIcons['d_zjsr.png'] = 47;
                mIcons['d_zlf.png'] = 49;
                mIcons['d_zysr.png'] = 12;
                mIcons['d_yfkz.png'] = 57;
                mIcons['d_zwwc.png'] = 58;
                mIcons['d_pxjx.png'] = 59;
                mIcons['d_cwbb.png'] = 60;
                mIcons['d_lydj.png'] = 61;
                mIcons['d_slqk.png'] = 62;
                mIcons['d_csjz.png'] = 63;
                mIcons['d_lzss.png'] = 64;
                mIcons['d_pcfk.png'] = 65;
                mIcons['d_yl.png'] = 66;
                mIcons['d_zc.png'] = 67;
                mIcons['d_tc.png'] = 68;
                mIcons['d_mc.png'] = 69;
                mIcons['d_jyf.png'] = 70;
                mIcons['d_wc.png'] = 71;
                mIcons['d_wg.png'] = 72;
                mIcons['d_cmswzc.png'] = 73;
                mIcons['d_cp.png'] = 74;
                mIcons['d_yhsxf.png'] = 75;
                mIcons['d_ggx.png'] = 76;
                mIcons['d_fd.png'] = 77;
                mIcons['d_zs.png'] = 78;
                mIcons['d_jydq.png'] = 79;
                mIcons['d_jj.png'] = 80;
                mIcons['d_shyp.png'] = 81;
                mIcons['d_dy.png'] = 82;
                mIcons['d_wanj.png'] = 83;
                mIcons['d_yx.png'] = 84;
                mIcons['d_nf.png'] = 85;
                mIcons['d_wj.png'] = 86;
                mIcons['d_dhdsjwlxl.png'] = 87;
                mIcons['d_tlrjq.png'] = 88;
                mIcons['d_db.png'] = 89;
                mIcons['d_cfsb.png'] = 90;
                mIcons['d_qtjj.png'] = 91;
                mIcons['d_zg.png'] = 92;
                mIcons['d_fscl.png'] = 93;
                mIcons['d_dlgzcl.png'] = 94;
                mIcons['d_mc1.png'] = 95;
                mIcons['d_wysb.png'] = 96;
                mIcons['d_zszh.png'] = 97;
                mIcons['d_fzcl.png'] = 98;
                mIcons['d_slgzcl.png'] = 99;
                mIcons['d_muc.png'] = 100;
                mIcons['d_sfjj.png'] = 101;
                mIcons['d_ctjj.png'] = 102;
                mIcons['d_fjp.png'] = 103;
                mIcons['d_hcp.png'] = 104;
                mIcons['d_qcp.png'] = 105;
                mIcons['d_lcp.png'] = 106;
                mIcons['d_jdmp.png'] = 107;
                mIcons['d_jhsp.png'] = 108;
                mIcons['d_hsfz.png'] = 109;
                mIcons['d_hssy.png'] = 110;
                mIcons['d_hqhdfy.png'] = 111;
                mIcons['d_zxmr.png'] = 112;
                mIcons['d_xtxt.png'] = 113;
                mIcons['d_hlqt.png'] = 114;
                mIcons['d_glds.png'] = 115;
                mIcons['d_mrwh'] = 116;
                mIcons['d_pjsp'] = 117;
                mIcons['d_jsqh'] = 118;
                mIcons['d_jssh'] = 119;
                mIcons['d_jsh']  = 120;
                mIcons['d_jsbh'] = 121;
                mIcons['d_lh']   = 122;
                mIcons['d_qmcl'] = 123;
                mIcons['d_fzsb'] = 124;
                mIcons['d_hld']  = 125;
                mIcons['d_qcqj'] = 126;
                mIcons['icon_lyyp_hwzb'] = 127;
                // 128
                mIcons['icon_bbyp_zjwj'] = 129;
                mIcons['icon_lyyp_hwyk'] = 130;
                mIcons['icon_bbyp_nbnp'] = 131;
                // 132
                mIcons['icon_bbyp_ykxm'] = 133;
                mIcons['icon_bbyp']      = 134;
                mIcons['icon_qtzx_bmf']  = 135;
                //136
                mIcons['icon_yysr_fwsr']     = 137;
                mIcons['icon_jrtz_bxsr.png'] = 138;
                mIcons['icon_qtsr_thtk.png'] = 139;
                mIcons['icon_qtsr_mfp.png']  = 140;
                mIcons['icon_yyfy.png']      = 141;
                mIcons['icon_yyfy_sf']       = 142;
                mIcons['icon_yyfy_yyzf.png'] = 143;
                mIcons['icon_jrbx_bxzc.png'] = 144;
                mIcons['d_jseh'] = 145;
                mIcons['d_jswh'] = 146;

                return mIcons[iconName] * 36;
            },
            showDetailImgPop(e){
                const target = e.target;
                this.popImg = target.src;
                this.popShow = true;
            },
            hidePop(){
                this.popShow = false;
            }
        }
    }
</script>

<style>
    /* detail */
    .detailData_numFlex,
    .detailData_numFlex li {
        -webkit-box-align: center;
        box-align: center;
    }

    .detailNodate {
        text-align: center;
        margin-top: 15%;
    }
    .detail {
        padding-bottom: 1.3rem;
    }
    .detailBanner {
        height: 0;
        padding-bottom: 70%;
        overflow: hidden;
    }
    .detailBanner_img,
    .detailBanner_wrap {
        left: 0;
        top: 0;
        width: 100%;
    }
    .detailBanner_wrap {
        height: 100%;
        background: rgba(0, 0, 0, 0.48);
    }
    .detailBanner_logo {
        top: 6.7%;
        right: 4.6875%;
        width: 16.40625%;
    }
    .detailBanner_content {
        left: 0;
        bottom: 0;
        width: 100%;
        padding-left: 0.32rem;
        color: #fff;
        background: -webkit-linear-gradient(top,transparent, rgba(0, 0, 0,0.52));
        background: linear-gradient(to bottom,transparent, rgba(0, 0, 0,0.52));
    }
    .detailBanner_titleS,
    .detailBanner_title {
        font-weight: normal;
        padding-right: 0.32rem;
    }
    .detailBanner_title {
        font-size: 0.54rem;
    }
    .detailBanner_box {
        display: table;
        margin: 0.25rem 0 0.2rem 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    .detailBanner_box li {
        display: table-cell;
        line-height: normal;
        vertical-align: bottom;
        padding-right: 0.32rem;
    }
    .detailBanner_money {
        font-family: 'sgj';
        font-size: 0.58rem;
    }
    .detailContent_title {
        line-height: 0.48rem;
        font-weight: normal;
        padding-left: 0.32rem;
        margin-top: 0.2rem;
    }
    .detailContent_title::before {
        content: "";
        left: 0;
        top: 0;
        width: 0.08rem;
        height: 100%;
        background-color: #f69917;
    }
    .detailNodate {
        margin-top: 10%;
    }
    .detailColumn {
        padding: 0.2rem 0.32rem 0 0.32rem;
        margin-top: 0.25rem;
        border-top: 1px solid #f1f1f1;
    }
    .detailData {
        -webkit-box-pack: justify;
        box-pack: justify;
        -webkit-box-align: end;
        box-align: end;
        width: 100%;
    }
    .detailData_day {
        font-size: 0.38rem;
        font-weight: bold;
    }
    .detailData_dateFlex {
        line-height: normal;
    }
    .detailData_ym {
        -webkit-transform: scale(0.83);
        transform: scale(0.83);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
    }
    .detailData_numFlex {
        -webkit-box-pack: end;
        box-pack: end;
        padding-left: 0.2rem;
    }
    .detailData_numFlex li {
        max-width: 33.333333%;
        padding-left: 0.2rem;
    }
    .detailData_icon,
    .detailData_num {
        display: block;
    }
    .detailData_icon {
        width: 0.2rem;
        height: 0.2rem;
        margin-right: 0.08rem; 
    }
    .detailData_iconAdd {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAOVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZku8lwOAAAAEnRSTlMAk4nm7gxbBa5UpR/PQc5EJ6grML+HAAAAkklEQVQY022QWw4FIQhDO4oCOk/2v9gbB68mE/tjPKFSi1esD5nFRxlDGp9cOd1ZonbEQS50XRJ8OGxpmtIWXq80NqkowHT4bT/9PIiRC1xmcJUM0S9UAdUvrARrEU7rau+ywVJb8oe7w3gv7KtF60gz/D7Cr77phTCmvBDwNqs7ZExoLFqZq5ao08NZyIwk+9gPU0MGXzByDk0AAAAASUVORK5CYII=') no-repeat;
        background-size: 100% 100%;
    }
    .detailData_iconReduce {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAOVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZku8lwOAAAAEnRSTlMAW5MCBgymrlTrih/OQEJEJ9er3lpaAAAAh0lEQVQY023RWQoEIQwE0LKNWbQ3cv/DDooExvb9CIXBxGAgZXM3VkJQk9SovElMZ5SrPJgeqRldPQpCOeqolZFFKgqQXfhzGyExFpwguoYqsLaGzeAE4PTpBEAOL5vQ3m/59qFtS9/mL6PtmONDMkI+6jzljsElbqixNqKmbIpASfo6JBG6H0rQBSRoQemvAAAAAElFTkSuQmCC') no-repeat;
        background-size: 100% 100%;
    }
    .detailData_iconSurplus {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAXVBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmIF5V4AAAAHnRSTlMABB32ElTLQHcIpIL6SNqvLJO5Xzbsv44Yw4pammLq687OAAAAqUlEQVQY032Q2xKDIAxE5ZqgAuIFrbX5/8+sQnXgpTyw5Ewm2aX5cwzriLqavYmClIGELaAAk/qtKGBs4RLwvoBs0kFuSKoaKlEQ9e1QMtWvQbsJ6TAPQ4JG43haWvVNPwdv2DJgPN97mxmnOSm469aQih2rHLnVVTv5koRMCRnljFvlOCf1U2V5TDITFI3R3h+H/DdQvbpn47oIHX10NEI5aputsgPLxRcKeAeG2jYz8AAAAABJRU5ErkJggg==') no-repeat;
        background-size: 100% 100%;
    }
    .detailItem {
        margin-top: 0.35rem;
    }
    .detailColumn .detailItem:nth-child(2) .detailItem_icon {
        margin-top: 0.07rem;    
    }
    .detailColumn .detailItem:nth-child(2) .detailItem_content {
        padding-top: 0;
        border-top: none;   
    }
    .detailItem_icon,
    .categoryIcon,
    .projectList_portrait {
        display: block;
        width: 0.72rem;
        height: 0.72rem;
        background: url('https://res.feidee.com/money/img/tally/cat48.png') no-repeat;
        background-size: 105.84rem 0.72rem;
        border-radius: 50%;
    }
    .detailItem_icon {
        margin-right: 0.24rem;
        margin-top: 0.34rem;
    }
    .detailItem_content {
        padding-top: 0.3rem;
        border-top: 1px solid #f1f1f1;
    }
    .detailItem_title {
        -webkit-box-pack: justify;
        box-pack: justify;
        -webkit-box-align: center;
        box-align: center;
    }
    .detailItem_money {
        text-align: right;
        margin-left: 0.1rem;
    }
    .detailItem_text,
    .detailItem_note {
        margin-top: 0.08rem;
    }
    .detailItem_text {
        position: relative;
        z-index: 2;
        text-align: justify;
    }
    .detailItem_text a {
        display: inline-block;
        color: #2b79c2;
        margin: 0 0.1rem;
    }
    .detailItem_text img {
        position: relative;
        z-index: 2;
        display: block;
        width: 70%;
        margin-top: 0.1rem;
    }
    .detailItem_note {
        width: 120.48%;
        text-align: justify;
        color: #afafaf;
        -webkit-transform: scale(0.83);
        transform: scale(0.83);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    .detailItem_point {
        display: inline-block;
        width: 3px;
        height: 3px;
        background-color: #ccc;
        border-radius: 50%;
        margin: 0 0.07rem;
        vertical-align: middle;
    }
    .detailMenu {
        position: fixed;
        z-index: 9;
        left: 50%;
        bottom: 0;
        width: 100%;
        max-width: 640px;
        background-color: #f8f8f8;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        -webkit-transform: translate3d(-50%,0, 0);
        transform: translate3d(-50%,0, 0);
    }
    .detailMenu a {
        display: block;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        border-left: 1px solid #e4e4e4;
    }
    .detailMenu li:first-child a {
        border-left: none;
    }
    .detailPop_wrap {
        display: -webkit-box;
        display: box;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        -webkit-box-pack: center;
        box-pack: center;
        -webkit-box-align: center;
        box-align: center;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .detailPop_img {
        display: block;
        width: 100%;
    }
</style>
