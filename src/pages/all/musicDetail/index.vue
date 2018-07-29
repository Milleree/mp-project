<template>
    <div>
      <v-detail 
      :Title="MuInfoDetail.story_title" 
      :Author="MuInfoDetail.story_author.user_name" 
      :content="MuInfoDetail.story" 
      :ForPlace="MuInfoDetail.charge_edt"
      :MusicUrl="MuInfoDetail.music_id"
      :Cover="MuInfoDetail.cover"
      :MusicName="MuInfoDetail.title"
      :MusicAuthor="MuInfoDetail.author.user_name"
      :Cls="4"
      v-if="MuInfoDetail">
      </v-detail>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import detail from '@/components/detail';
export default {
  onLoad(query) {
    this.clearMusicDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {},
  components:{
    "v-detail":detail
  },
  data(){
    return {
      MuInfoDetail:""
    }
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail", ["clearMusicDetail", "getMusicDetail"]),
    async initPage(id) {
      await this.getMusicDetail(id);
      this.data.musicDetail.story=this.data.musicDetail.story.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
      this.MuInfoDetail=this.data.musicDetail;
    }
  }
};
</script>

