import {
    GET_ESSAY_DETAIL,
    GET_LONG_DETAIL,
    GET_QUE_DETAIL,
    GET_MUSIC_DETAIL,
    GET_MOVIE_DETAIL,
    GET_MUSICDATE_DETAIL
} from '../mutation-types'

import API from '@/utils/api'

const state={
    nowDetail:{},
    data:{
        essayDetail:{},
        longDetail:{},
        queDetail:{},
        movieDetail:{},
        musicDetail:{},
    }
}

const mutations={
    [GET_ESSAY_DETAIL](state,payload){
        state.data.essayDetail=payload.data
    },
    [GET_LONG_DETAIL](state,payload){
        state.data.longDetail=payload.data
    },
    [GET_QUE_DETAIL](state,payload){
        state.data.queDetail=payload.data
    },
    [GET_MUSIC_DETAIL](state,payload){
        state.data.musicDetail=payload.data
    },
    [GET_MOVIE_DETAIL](state,payload){
        state.data.movieDetail=payload.data
    }
}

const actions={
    async getEssayDetail({commit,state},itemId){
        const { data }=await API.getEssayDetail(itemId)
        commit(GET_ESSAY_DETAIL, { data } )
    },
    async getLongDetail({commit,state},itemId){
        const { data }=await API.getLongDetail(itemId)
        commit(GET_LONG_DETAIL,{ data })
    },
    async getQuestionDetail({commit,state},itemId){
        const { data }=await API.getQuestionDetail(itemId)
        commit(GET_QUE_DETAIL,{ data })
    },
    async getMusicDetail({commit,state},itemId){
        const { data }=await API.getMusicDetail(itemId)
        commit(GET_MUSIC_DETAIL,{ data })
    },
    async getMovieDetail({commit,state},itemId){
        const { data:{data} }=await API.getMovieDetail(itemId)
        commit(GET_MOVIE_DETAIL,{ data:data[0] })
    },
    clearEssayDetail({ commit }) {
        commit(GET_ESSAY_DETAIL, { data: {} })
    },
    clearLongDetail({ commit }) {
        commit(GET_LONG_DETAIL, { data: {} })
    },
    clearQuestionDetail({ commit }) {
        commit(GET_QUE_DETAIL, { data: {} })
    },
    clearMusicDetail({ commit }) {
        commit(GET_MUSIC_DETAIL, { data: {} })
    },
    clearMovieDetail({ commit }) {
        commit(GET_MOVIE_DETAIL, { data: {} })
    }
}
export default{
    state,
    mutations,
    actions
}
