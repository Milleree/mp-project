<template>
    <div>
      <v-detail 
      :Title="LInfoDetail.title" 
      :Author="LInfoDetail.author.user_name" 
      :content="LInfoDetail.content" 
      :ForPlace="LInfoDetail.charge_edt"
      :Cls="2"
      v-if="LInfoDetail" >
      </v-detail>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import detail from "@/components/detail";
export default {
  onLoad(query) {
    this.clearLongDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {
  },
  components: {
    "v-detail": detail
  },
  data() {
    return {
      LInfoDetail: ""
    }
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail", ["clearLongDetail", "getLongDetail"]),
    async initPage(id) {
      await this.getLongDetail(id);
      this.data.longDetail.content=this.data.longDetail.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
      this.LInfoDetail=this.data.longDetail;
    }
  }
};
</script>

