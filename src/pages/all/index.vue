<template>
    <div class="container">
        <navigator 
        :url="'/pages/all/list/main?cls=1'">
        阅读</navigator>
        <navigator 
        :url="'/pages/all/list/main?cls=2'">
        音乐</navigator>
        <navigator 
        :url="'/pages/all/list/main?cls=3'">
        电影</navigator>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
//   created() {},
//   computed: {
//     ...mapState("all", ["data"])
//   },
//   methods: {
//     ...mapActions("all", ["getAllRead"])
//   }
};
</script>

