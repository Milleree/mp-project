<template>
<view>
    <view class="weather">
        <view class="weather-text">{{weatherText}}</view>
    </view>
    <view v-for="content in ContentList" :key="content.id" class="main-content">
       <view v-if="content.category=='0'" class="img-content">
        <image mode="aspectFill" class="content-img" :src="content.img_url" />
        <text class="img-info">{{content.title}}|{{content.pic_info}}</text>
        <br>
        <text class="img-text">{{content.words_info}}</text>
       </view>
       <view v-if="content.category!=='0'&&content.category!=8" v-on:click="ToUrl(content.category,content.item_id)" class="one-content">
        <text v-if="content.category=='1'&&content.tag_list.length>0">-{{content.tag_list[0].title}}-</text>
        <text v-if="content.category=='1'&&content.tag_list.length==0" >-阅读-</text>
        <text v-if="content.category=='2'" >-连载-</text>
        <text v-if="content.category=='3'" >-问答-</text>
        <text v-if="content.category=='4'" >-音乐-</text>
        <text v-if="content.category=='5'" >-影视-</text>
        <br>
        <view class="content-left right-title">
        <text class="content-title">{{content.title}}</text>
        <br>
        <text>文/{{content.author.user_name}}</text>
        <br>
        <image mode="aspectFill" class="content-img" :src="content.img_url" />
        <br>
        <text class="img-text">{{content.forward}}</text>
        </view>
        <div class="content-date flex-wrp">
            <view class="content-bottom content-left">
                {{content.post_date}}
            </view>
            <view class="content-bottom content-right">
                <text class="iconfont in-block">&#xe637;</text>{{content.like_count}}
            </view>
        </div>
       </view>
    </view>    
</view>   
</template>
<script>
export default {
  created() {},
  props: {      //为了学习父组件传值给子组件，使用props进行传值
    weather: Object,
    ContentList: Object
  },
  data() {
    return {
      // clsList:["","ONE STORY",""]
    };
  },
  computed: {
    weatherText() {
      return `${this.weather.city_name}·${this.weather.climate}
             温度：${this.weather.temperature}°C 
             风力：${this.weather.wind_direction} 
             湿度：${this.weather.humidity}`;
    }
  },
  methods: {
    ToUrl(cls, item_id) {
      let url = "";
      if (cls == 1) {
        url = "/pages/all/essayDetail/main?id=" + item_id;
      } else if (cls == 2) {
        url = "/pages/all/longDetail/main?id=" + item_id;
      } else if (cls == 3) {
        url = "/pages/all/questionDetail/main?id=" + item_id;
      } else if (cls == 4) {
        url = "/pages/all/musicDetail/main?id=" + item_id;
      } else if (cls == 5) {
        url = "/pages/all/movieDetail/main?id=" + item_id;
      }
      wx.navigateTo({ url });
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 759446 */
  src: url("//at.alicdn.com/t/font_759446_9ve3xg1k97.eot");
  src: url("//at.alicdn.com/t/font_759446_9ve3xg1k97.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_759446_9ve3xg1k97.woff") format("woff"),
    url("//at.alicdn.com/t/font_759446_9ve3xg1k97.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_759446_9ve3xg1k97.svg#iconfont") format("svg");
}
.weather {
  text-align: center;
  width: 100%;
}
.weather-text {
  font-size: 9pt;
  color: #888888;
}
.main-content {
  height: auto;
  text-align: center;
}
.content-img {
  width: 100%;
  margin: 2pt auto;
}
.img-info {
  font-size: 10pt;
  color: #888888;
}
.img-text {
  font-size: 10pt;
}
.main-content view {
  background-color: #ffffff;
}
.one-content {
  margin-top: 10pt;
  padding: 0px 10px 5px;
  font-size: 9pt;
  color: #888888;
}
.content-left {
  text-align: left;
}
.content-title {
  font-size: 12pt;
  color: black;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.in-block {
  display: inline-block;
  text-align: right;
}
.content-date {
  display: flex;
  flex-wrap: wrap;
  margin: 2pt auto;
}
.content-bottom {
  width: 50%;
}
.content-right {
  text-align: right;
}
.clear-float {
  clear: both;
}
.right-title {
  padding: 4pt 0pt;
}
</style>

