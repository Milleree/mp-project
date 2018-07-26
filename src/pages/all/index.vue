<template>
    <div>
        <v-all-list></v-all-list>
        <!-- <navigator 
        :url="'/pages/all/list/main?cls=1'">
        阅读</navigator>
        <navigator 
        :url="'/pages/all/list/main?cls=2'">
        音乐</navigator>
        <navigator 
        :url="'/pages/all/list/main?cls=3'">
        电影</navigator> -->
        <v-one-bottom></v-one-bottom>
    </div> 
</template>

<script>
import { mapState, mapActions } from "vuex";
import oneBottom from '@/components/one'
import AllList from '@/components/AllList'

export default {
  components:{
        "v-one-bottom":oneBottom,
        "v-all-list":AllList
  },
}; 
</script>
<style>
page{
    background-color:#f7f7f7; 
}
</style>


