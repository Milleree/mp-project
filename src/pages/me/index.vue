<template>
<block>
    <div class="container">
        <open-data type="userAvatarUrl"></open-data>
        <open-data class="text-margin" type="userNickName" lang="zh_CN"></open-data>
        <view class="text-margin"><text>Welcome To ONE</text></view>
        <view class="text-margin tip"><text>本项目为个人学习项目，如有侵权，请联系删除！</text></view>
        
    </div>
    <oneBottom></oneBottom>
</block>
</template>

<script>
import oneBottom from '@/components/one'
export default {
  components:{
    oneBottom
  },
  created() {
    
  },
  data() {
    return {
      UserInfo: {}
    }
  },
  methods: {
  }
};
</script>
<style>
.text-margin{
  margin: 5% 0pt;
}
.tip{
  font-size: 11pt;
  color: #888888;
}
</style>


