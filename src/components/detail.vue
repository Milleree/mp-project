<template>
    <view class="main-content">
        <!-- <text>11</text> -->
        <block v-if="Cls==1||Cls==2||Cls==5">
            <view class="read-title">
                <text class="read-title">{{Title}}</text>
            </view>
            <view class="right-author">
                <text>文/{{Author}}</text>
            </view>
            <rich-text class="read-content" :nodes="content" bindtap="tap"></rich-text>
        </block>
        
        <view v-if="Cls==4" class="text-left">
            <view class="music-audio">
            <audio 
            :src="MusicUrl" 
            :poster="Cover"
            :name="MusicName" 
            :author="MusicAuthor" 
            bindplay="audioPlayed" 
            bindtimeupdate="audioTimeUpdated" 
            controls>
            </audio>
            </view>
            <text>{{Title}}</text>
            <br>
            <view class="left-author">
                <text>文/{{Author}}</text>
            </view>
            <rich-text class="read-content" :nodes="content" bindtap="tap"></rich-text>
        </view>
        <block v-if="Cls==3">
            <text>{{Title}}</text>
            <view class="ask-view">
                <text class="que-name">{{QuestionUser}}问：</text>
                <br>
                <text class="read-content">{{QuestionContent}}</text>
            </view>
            <view>
                <text class="que-name">{{AnswerUser}}答：</text>
                <br>
                <rich-text class="read-content" :nodes="AnswerContent" bindtap="tap"></rich-text>
            </view>
        </block>
        <text class="right-author">{{ForPlace}}</text>
    </view>
</template>

<script>
import {mapState} from 'vuex'
export default {
    created(){
    },
    props:{
        Title:String,
        Cls:Number,
        Author:String,
        content:String,
        ForPlace:String,
        MusicUrl:String,
        Cover:String,
        MusicName:String,
        MusicAuthor:String,
        QuestionUser:String,
        QuestionContent:String,
        AnswerUser:String,
        AnswerContent:String
    },
    components:{
        
    }
    
}
</script>
<style scoped>
.read-title{
    text-align: center;
    font-size: 17pt;
    margin-bottom: 20pt;
}
.right-author{
    text-align: right;
    color: #888888;
    font-size: 9pt;
    margin-bottom: 20pt;
}
.left-author{
    text-align: left;
    color: #888888;
    font-size: 9pt;
    margin: 20pt 0pt;
}
.author{
     color: #888888;
    font-size: 9pt;
}
.read-content{
    font-size: 11pt;
    line-height:  20pt;
}
.main-content{
    padding: 10pt;
}
.read-title{
  width: 100%;
  text-align: center;
}
img{
    max-width: 80%;
    text-align: center;
    height: auto;
}
.text-left{
    text-align: left;
}
.ask-view{
    margin: 20pt 0pt;
    font-size: 17pt;
    text-align: left;
}
.que-name{
    color: #888888;
    font-size: 9pt;
}
.music-audio{
    text-align: center;
    margin-bottom: 20pt;
}
</style>


