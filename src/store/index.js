import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import all from './modules/all'
import detail from './modules/detail'

Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        home:{
            namespaced:true,
            ...home
        },
        all:{
            namespaced:true,
            ...all
        },
        detail:{
            namespaced:true,
            ...detail
        }

    }
})

export default store