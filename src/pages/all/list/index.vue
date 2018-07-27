<template>
    <block>
    <v-one-list :hotList="infoList" v-if="infoList!=''"></v-one-list>
    </block>
</template>

<script>
import { mapState, mapActions } from "vuex";
import oneBottom from '@/components/one'
import InfoList from '@/components/InfoList'
export default {
  onLoad(query) {
    const { cls } = query;
    this.initPage(cls);
    this.infoList={};
  },
  created() {},
  components:{
        "v-one-bottom":oneBottom,
        "v-one-list":InfoList
  },
  data(){
    return {
        infoList:"",
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
<style>
page{
  background-color: #f7f7f7;
}
</style>

