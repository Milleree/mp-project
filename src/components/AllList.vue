<template>
<block>
    <view class="all-top-title">
        <text>ONE IN ALL</text>
    </view>
    <view class="all-out" v-for="(hotlist,hotlistindex) in Hotlist" :key="hotlistindex">
        <view class="all-in">
            <text>{{hotlist.clsName1}}{{hotlist.clsName2}}</text>
            <view class="all-in-right" >
                
                <!-- <text>{{hotlist.clsName1}}</text> 
                <br>
                <text>{{hotlist.clsName2}}</text> -->
            </view>
            <view class="all-in-left" v-for="(list,index) in data.HomeData.content_list"  v-if="index==hotlistindex" :key="index">
                <image mode="scaleToFill" :src="list.img_url"/>
            </view>
        </view>
    </view>
</block>    
</template>
<script>
import {mapState,mapGetter} from 'vuex'
export default {
    created(){
        console.log(this.data)
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
    width: 92%;
    padding: 4%;
    background-color: #ffffff;
    height: 30%;
}
.all-in{
    text-align: center;
    width: 100%;
    border: #f8f8f8 solid 1pt;
}
.all-in-right{
    width: 20%;
}
</style>


