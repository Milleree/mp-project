<template>
    <div class="container">
        <text>列表</text>
   <div v-if="cls==1" v-for="info in infoList" v-bind:key="info.item_id">
    <navigator v-show="info.category==1"
      :url="'/pages/all/essayDetail/main?id='+info.item_id"
    >{{info.title}}</navigator>
    <navigator v-show="info.category==2"
      :url="'/pages/all/longDetail/main?id='+info.item_id"
    >{{info.title}}</navigator>
    <navigator v-show="info.category==3"
      :url="'/pages/all/questionDetail/main?id='+info.item_id"
    >{{info.title}}</navigator>
   </div>
      <div v-if="cls==2" v-for="info in infoList" v-bind:key="info.id">
    <navigator
      :url="'/pages/all/musicDetail/main?id='+info.id"
    >{{info.title}}</navigator>
   </div>
      <div v-if="cls==3" v-for="info in infoList" v-bind:key="info.item_id">
    <navigator
      :url="'/pages/all/movieDetail/main?id='+info.item_id"
    >{{info.title}}</navigator>
   </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  onLoad(query) {
    const { cls } = query;
    this.initPage(cls);
    this.infoList={};
  },
  created() {},
  data(){
    return {
        infoList:{},
        cls:""
    }
  },
  computed: {
    ...mapState("all", ["data"])
  },
  methods: {
    ...mapActions("all", ["getAllRead","getAllMovie","getAllMusicM"]),
   async initPage(cls){
       this.cls=cls;
        if(cls==1){
             await this.getAllRead()
             this.infoList=this.data.readList;
        }else if(cls==2){
            const NowMonth=this.getNowMonth();
            await this.getAllMusicM(NowMonth)
            this.infoList=this.data.musicmList;
        }else if(cls==3){
             await this.getAllMovie()
            this.infoList=this.data.movieList;
        }
        console.log(this.infoList)
    },
    getNowMonth(){
        let date = new Date();          //获取当前时间
        let year = date.getFullYear();  //获取当前年份
        let mon = date.getMonth() + 1;  //获取当前月份
        let da = date.getDate();        //获取当前日
        if (mon.toString().length < 2) {
            mon = '0' + mon.toString();
        }
        if (da.toString().length < 2) {
            da = '0' + da.toString();
        }

        return year + "-" + mon + "-" + da+" 00:00:00";
    }
  }
}
</script>

