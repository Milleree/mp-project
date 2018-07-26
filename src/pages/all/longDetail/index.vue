<template>
    <div class="container">
        <text>连载</text>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  onLoad(query) {
    this.clearLongDetail();
    const { id } = query;
    this.initPage(id);
  },
  created() {},
  computed: {
    ...mapState("detail", ["data"])
  },
  methods: {
    ...mapActions("detail", ["clearLongDetail", "getLongDetail"]),
    async initPage(id) {
      await this.getLongDetail(id);
    }
  }
};
</script>

