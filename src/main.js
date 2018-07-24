import Vue from 'vue'
import App from './App'
import store from '@/store'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

// export default {
//     config:{
//         pages: ["^pages/home/main"],
//         window: {
//           backgroundTextStyle: "light",
//           navigationBarBackgroundColor: "#fff",
//           navigationBarTitleText: "一个(仿)",
//           navigationBarTextStyle: "black"
//         },
//         tabBar:{
//             color: '#130f13',
//             selectedColor: '#0f0f0f',
//             list:[
//                 {
//                     pagePath:'pages/home/main',
//                     text:'HOME',
//                     iconPath:'static/icon/one.png',
//                     selectedIconPath:'static/icon/one-active.png'
//                 },
//                 {
//                     pagePath:'pages/all/main',
//                     text:'HOME',
//                     iconPath:'static/icon/all.png',
//                     selectedIconPath:'static/icon/all-active.png'
//                 },
//                 {
//                     pagePath:'pages/me/main',
//                     text:'HOME',
//                     iconPath:'static/icon/me.png',
//                     selectedIconPath:'static/icon/me-active.png'
//                 }
//             ]
//         }
//       }
      
// }