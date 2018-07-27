<template>
    <view>
        <view class="main-content" v-for="(hotlist,index) in hotList" :key="index" v-if="index<10" @click="ToUrl(hotlist)">
            <view class="left-content">
                <image mode="aspectFill" lazy-load=true :src="hotlist.cover" v-if="!hotlist.category"/>
                <image mode="aspectFill" lazy-load=true :src="hotlist.img_url" v-if="hotlist.category"/>
            </view>
            <view class="right-content">
                <text  v-if="hotlist.category">{{hotlist.title}}</text>
                <text v-if="!hotlist.category">{{hotlist.story_title}}</text>
                <br>
                <text v-if="hotlist.category==1||hotlist.category==2">文|{{hotlist.author.user_name}}</text>
                <text v-if="hotlist.category==5">《{{hotlist.subtitle}}》</text>
                <text v-if="!hotlist.category">{{hotlist.title}}|{{hotlist.author.user_name}}</text>
            </view>
        </view>
    </view>
</template>
<script>
import {mapState} from 'vuex'

export default {
    // computed:{
    //     ...mapState("all",["data"])
    // }
    created(){
    },
    props:{
        hotList:Object
    },
    methods:{
        ToUrl(hotList){
            let url="";
            if(hotList.category){
                if(hotList.category==1){
                    url="/pages/all/essayDetail/main?id=" + hotList.item_id;
                }
                if(hotList.category==2){
                    url="/pages/all/longDetail/main?id=" + hotList.item_id;
                }
                if(hotList.category==3){
                    url="/pages/all/questionDetail/main?id=" + hotList.item_id;
                }
                if(hotList.category==5){
                    url="/pages/all/movieDetail/main?id=" + hotList.item_id;
                }
            }else{
                    url="/pages/all/musicDetail/main?id=" + hotList.item_id;
            }
            wx.navigateTo({url});
        }
    }
}
</script>
<style scoped>
.main-content{
    height: 8.8vh;
    display: flex;
    flex-wrap: wrap;
    padding: 2pt;
    margin-top: 3pt;
    background-color: #ffffff;
}
.left-content{
    width: 15%;
}
.left-content image{
    width: 100%;
    height: 100%;
}
.right-content{
    width:80%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    padding:0 5pt 5pt;
    height:100%;
}
.right-content text:nth-child(1){
    font-size: 10pt;
}
.right-content text:nth-child(3){
    font-size: 9pt;
    color: #888888;
}
</style>


