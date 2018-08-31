<template>
<div>
    <div class="banner" @click="showGallary=!showGallary">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
            <div class="banner-number"><span class='iconfont tupian'>&#xe6e9;</span>39</div>
        </div>
    </div>
     <gallary v-if="showGallary" @closeGallary="closeGallary"></gallary>    
</div>     
</template>

<script>
import gallary from '@/common/gallary/gallary'
export default {
    components:{
        gallary
    },
    data(){
        return {
            showGallary:false
        }
    },
    methods:{
        closeGallary(){
            this.showGallary=false
        }
    }
}
</script> 

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info 
            font-size 0.24rem
            position absolute
            left 0 
            right 0
            bottom 0
            color #fff
            line-height 0.5rem
            .banner-title
                float left
                padding-left 0.3rem
            .banner-number
                float right 
                padding-right 0.3rem
            .tupian
                font-size 0.3rem
            
</style>
