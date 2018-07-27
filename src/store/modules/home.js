import {GET_DATA_ID,GET_HOME_DATA} from '../mutation-types'
import API from '@/utils/api'

const state={
    data:{
        IdList:[],
        HomeData:{}
    }
}

const mutations = {
    [GET_DATA_ID](state,payload){
        state.data.IdList=payload.IdList
    },
    [GET_HOME_DATA](state,payload){
        state.data.HomeData=payload.data
    }
}

const actions={
    async getDataList({commit}){
        const {data}=await API.getDataList()
        commit(GET_DATA_ID,{IdList:data})
    },
    async getHomeData({commit}){
        const {data}=await API.getHomeData(state.data.IdList[0])
        console.log(data);
        commit(GET_HOME_DATA,{data})
    }
}

export default{
    state,
    mutations,
    actions
}