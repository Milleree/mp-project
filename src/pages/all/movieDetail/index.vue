<template>
    <div>
        <v-detail 
      :Title="MInfoDetail.title" 
      :Author="MInfoDetail.user.user_name" 
      :content="MInfoDetail.content" 
      :ForPlace="MInfoDetail.charge_edt"
      :Cls="5"
      v-if="MInfoDetail">
      </v-detail>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import detail from '@/components/detail';
export default {
  onLoad(query) {
    this.clearMovieDetail();
    const { id } = query;
    this.initPage(id);
  },
  components:{
    "v-detail":detail
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  data(){
    return {
      MInfoDetail:""
    }
  },
  methods: {
    ...mapActions("detail", ["clearMovieDetail", "getMovieDetail"]),
    async initPage(id) {
      await this.getMovieDetail(id);
      this.data.movieDetail.content=this.data.movieDetail.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
      this.MInfoDetail=this.data.movieDetail;
    }
  }
};
</script>

