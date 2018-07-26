import request from './request'

const baseURL = `http://v3.wufazhuce.com:8000/api/`
// const baseURL = 'http://192.168.29.238:7001'
request.config.baseURL = baseURL

const endUrl=`?channel=wdj&version=4.3.4&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android`

const api = {
  //HOME
  getDataList:()=>request.get('onelist/idlist/'+endUrl),
  getHomeData:(id)=>request.get('onelist/'+id+'/0'+endUrl),

  //ALL
  getAllRead:()=>request.get('channel/reading/more/0'+endUrl),
  getAllMovie:()=>request.get('channel/movie/more/0'+endUrl),
  getAllMusicM:(NowMonth)=>request.get('music/bymonth/'+NowMonth+endUrl),//NowMonth:2018-06-20 00:00:00
  getAllMusic:()=>request.get('channel/music/more/0'+endUrl),

  //摄影，category=0
  
  //短文,category=1
  getEssayDetail:(itemId)=>request.get('essay/'+itemId+endUrl),
  //连载,category=2
  getLongDetail:(itemId)=>request.get('serialcontent/'+itemId+endUrl),
  //问答，category=3
  getQuestionDetail:(itemId)=>request.get('question/'+itemId+endUrl),
  //音乐，category=4，HOME页面使用
  getMusicDetail:(itemId)=>request.get('music/detail/'+itemId+endUrl),
  //电影,category=5
  getMovieDetail:(itemId)=>request.get('movie/'+itemId+'/story/1/0'+endUrl),
  //音乐，某日时间传递
  // getMusicDateDetail:(ite)=>request.get('music/bymonth/'+_Date+endUrl),

}

export default api
