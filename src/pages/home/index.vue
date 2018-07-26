<template>
    <div class="one-home">
        <v-homelist :weather="weather" v-if="weather||ContentList!=''" :ContentList="ContentList"></v-homelist>
        <v-one-bottom></v-one-bottom>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import homelist from '@/components/HomeList'
import oneBottom from '@/components/one'
export default {
    created(){
        this.initPage()
    },
    data(){
        return {
            weather:"",
            ContentList:"",
        }
    },
    components:{
        "v-homelist":homelist,
        "v-one-bottom":oneBottom
    },
    computed:{
        ...mapState('home',['data']),
    },
    methods:{
        ...mapActions('home',['getDataList','getHomeData']),
        async initPage(){
            await this.getDataList()
            await this.getHomeData()
            this.weather=this.data.HomeData.weather;
            this.ContentList=this.data.HomeData.content_list;
        }
    }
}
</script>

<style>
page{
    background-color: #f7f7f7
}
</style>


