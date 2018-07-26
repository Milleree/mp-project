<template>
    <div class="container">
        <div v-for="homelist in data.content_list" v-bind:key="homelist.id">
        <text v-show="homelist.category==0"
        >{{homelist.title}}</text>          
        <navigator v-show="homelist.category==1"
        :url="'/pages/all/essayDetail/main?id='+homelist.item_id"
        >{{homelist.title}}</navigator>
        <navigator v-show="homelist.category==2"
        :url="'/pages/all/longDetail/main?id='+homelist.item_id"
        >{{homelist.title}}</navigator>
        <navigator v-show="homelist.category==3"
        :url="'/pages/all/questionDetail/main?id='+homelist.item_id"
        >{{homelist.title}}</navigator>
        <navigator v-show="homelist.category==4"
        :url="'/pages/all/musicDetail/main?id='+homelist.item_id"
        >{{homelist.title}}</navigator>
        <navigator v-show="homelist.category==5"
        :url="'/pages/all/movieDetail/main?id='+homelist.item_id"
        >{{homelist.title}}</navigator>                      
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    created(){
        this.initPage()
    },
    computed:{
        ...mapState('home',['data'])
    },
    methods:{
        ...mapActions('home',['getDataList','getHomeData']),
        async initPage(){
            await this.getDataList()
            await this.getHomeData()
        }
    }
}
</script>

