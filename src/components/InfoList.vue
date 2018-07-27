<template>
    <view>
        <view class="main-content">
            <view class="left-content">
                
            </view>
            <view class="right-content">

            </view>
        </view>
    </view>
</template>
<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState("all",["data"])
    }
}
</script>
<style>

</style>


