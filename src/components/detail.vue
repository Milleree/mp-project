<template>
    <block>
        <!-- <text>11</text> -->
        <block v-if="Cls==1||Cls==2||Cls==5">
            <view class="read-title">
                <text>{{Title}}</text>
                <br>
            </view>
            <view>
                <text>文/{{Author}}</text>
            </view>
            
        </block>
        <wx-parse :content="content"></wx-parse>
        <!-- <block v-if="Cls==4">
            <audio 
            :src="MusicUrl" 
            :poster="Cover"
            :name="MusicName" 
            :author="MusicAuthor" 
            bindplay="audioPlayed" 
            bindtimeupdate="audioTimeUpdated" 
            controls>
            </audio>
            <text>{{Title}}</text>
            <br>
            <text>文/{{Author}}</text>
            <v-wxparse :content="Content"/>
        </block>
        <block v-if="Cls==3">
            <text>{{title}}</text>
            <view>
                <text>{{QuestionUser}}问：</text>
                <br>
                <text>{{QuestionContent}}</text>
            </view>
            <view>
                <text>{{AnswerUser}}问：</text>
                <br>
                <v-wxparse :content="AnswerContent" />
            </view>
        </block> -->
        <text>{{ForPlace}}
        </text>
    </block>
</template>

<script>
import {mapState} from 'vuex'
import wxParse from 'mpvue-wxparse'
export default {
    created(){
        console.log(this.content);
    },
    props:{
        Title:String,
        Cls:Number,
        Author:String,
        content:String,
        ForPlace:String,
        // MusicUrl:String,
        // Cover:String,
        // MusicName:String,
        // MusicAuthor:String,
        // QuestionUser:String,
        // QuestionContent:String,
        // AnswerUser:String,
        // AnswerContent:String
    },
    components:{
        wxParse
    }
    
}
</script>
<style scoped>

.read-title{
  width: 100%;
  text-align: center;
}
</style>


