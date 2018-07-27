<template>
<block>
    <view class="all-top-title">
        <text>ONE IN ALL</text>
    </view>
    <view class="all-out" v-for="(hotlist,hotlistindex) in Hotlist" :key="hotlistindex" @click="ToUrl(hotlist.cls)">
        <view class="all-in">
            <!-- <text>{{hotlist.clsName1}}{{hotlist.clsName2}}</text> -->
            <view class="all-in-left" >
                <text>{{hotlist.clsName1}}</text> 
                <br>
                <text>{{hotlist.clsName2}}</text>
            </view>
            <view class="all-in-right" v-for="(list,index) in data.HomeData.content_list"  v-if="index==hotlistindex" :key="index">
                <image  lazy-load=true mode="widthFix" :src="list.img_url"/>
            </view>
        </view>
    </view>
</block>    
</template>
<script>
import {mapState,mapGetter} from 'vuex'
export default {
    created(){
    },
    data(){
        return{
            Hotlist:
            [   
                {clsName1:"阅",clsName2:"读",cls:1},
                {clsName1:"音",clsName2:"乐",cls:4},
                {clsName1:"影",clsName2:"视",cls:5}
            ]
        }
    },
    computed:{
        ...mapState("home",["data"])
    },
    methods:{
        ToUrl(cls){
            let url="";
            if(cls==1){
                url="/pages/all/list/main?cls=1";
            }else if(cls==4){
                url="/pages/all/list/main?cls=2";
            }else if(cls==5){
                url="/pages/all/list/main?cls=3";
            }
            wx.navigateTo({ url });
        }
    }
}
</script>
<style  scoped>
.all-top-title{
    font-size: 14pt;
    text-align: center;
    line-height: 30pt;
    background-color: #ffffff;
    margin: 1pt auto;
}
.all-out{
    margin-top: 4pt;
    width: 88%;
    padding:6%;
    background-color: #ffffff;
    height: 40%;
}
.all-in{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    height: 100%;
    border: #c9c7c7 solid 1pt;
    justify-content:center;
    align-items: center;
}
.all-in-left{
    width: 20%;
    height: 100%;
}
.all-in-left text{
    font-size: 20pt;
}
.all-in-right{
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
        justify-content:center;
    align-items: center;
}
.all-in-right image{
    width: 100%;
    height: 100%;
}
</style>


