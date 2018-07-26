import {
    GET_ALL_READ,
    GET_ALL_MOVIE,
    GET_ALL_MUSIC,
    GET_ALL_MUSICM
} from '../mutation-types'

import API from '@/utils/api'

const state={
    data:{
        readList:{},
        movieList:{},
        musicList:{},
        musicmList:{}
    }
}

const mutations={
    [GET_ALL_READ](state,payload){
        state.data.readList=payload.data;
    },
    [GET_ALL_MOVIE](state,payload){
        state.data.movieList=payload.data
    },
    [GET_ALL_MUSIC](state,payload){
        state.data.musicList=payload.data
    },
    [GET_ALL_MUSICM](state,payload){
        state.data.musicmList=payload.data
    }
}

const actions={
    async getAllRead({commit}){
        const {data}=await API.getAllRead()
        commit(GET_ALL_READ,{data})
    },
    async getAllMovie({commit}){
        const {data}=await API.getAllMovie()
        console.log(data);
        commit(GET_ALL_MOVIE,{data})
    },
    async getAllMusic({commit}){
        const {data}=await API.getMusic()
        commit(GET_ALL_MUSIC,{data})
    },
    async getAllMusicM({commit},NowMonth){
        const {data}=await API.getAllMusicM(NowMonth)
        commit(GET_ALL_MUSICM,{data})
    },
    // clearReadDetail({ commit }) {
    //     commit(GET_ALL_READ, { data: {} })
    // },
    // clearMovieDetail({ commit }) {
    //     commit(GET_ALL_MOVIE, { data: {} })
    // },
    // clearMusicDetail({ commit }) {
    //     commit(GET_ALL_MUSICM, { data: {} })
    // },
}
export default{
    state,
    mutations,
    actions
}
