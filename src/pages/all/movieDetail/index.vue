<template>
    <div class="container">
        <text>1</text>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  onLoad(query) {
    this.clearMovieDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {},
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail", ["clearMovieDetail", "getMovieDetail"]),
    async initPage(id) {
      await this.getMovieDetail(id);
    }
  }
};
</script>

