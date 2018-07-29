<template>
    <div>
      <v-detail 
      :Title="InfoDetail.hp_title" 
      :Author="InfoDetail.hp_author" 
      :content="InfoDetail.hp_content" 
      :ForPlace="InfoDetail.hp_author_introduce"
      :Cls="1"
      v-if="InfoDetail">
      </v-detail>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import detail from '@/components/detail';
export default {
  onLoad(query) {
    this.clearEssayDetail();
    const { id } = query;
    this.initPage(id);
  },
  components:{
    "v-detail":detail
  },
  created() {
  },
  data(){
    return { 
      InfoDetail:""
    }
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail",["clearEssayDetail","getEssayDetail"]),
    async initPage(id){
        await this.getEssayDetail(id);
        this.data.essayDetail.hp_content=this.data.essayDetail.hp_content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        this.InfoDetail=this.data.essayDetail;
    }

  }
};
</script>

<style>

</style>
