<template>
    <div class="container">
        <text>1</text>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    created(){
        this.initPage()
    },
    computed:{
        ...mapState('home',['data'])
    },
    methods:{
        ...mapActions('home',['getDataList','getHomeData']),
        async initPage(){
            await this.getDataList()
            await this.getHomeData()
        }
    }
}
</script>

