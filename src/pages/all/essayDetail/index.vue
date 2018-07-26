<template>
    <div class="container">
        <text>阅读</text>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  onLoad(query) {
    this.clearEssayDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {
  },
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail",["clearEssayDetail","getEssayDetail"]),
    async initPage(id){
        await this.getEssayDetail(id);
    }
  }
};
</script>

