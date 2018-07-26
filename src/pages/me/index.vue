<template>
    <div class="container">
        <text>1</text>
    </div>
</template>

<script>
export default {
  created() {
      this.getUserInfo()
  },
  data() {
    return {
      UserInfo: {}
    }
  },
  methods: {
    getUserInfo() {
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.UserInfo = res.userInfo;
            }
          });
        }
      });
    }
  }
};
</script>

