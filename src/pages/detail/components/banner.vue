<template>
<div>
    <div class="banner" @click="showGallary=!showGallary">
        <img class="banner-img" :src="list.bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-title">{{list.sightName}}</div>
            <div class="banner-number"><span class='iconfont tupian'>&#xe6e9;</span>2</div>
        </div>
    </div>
    <fade-animation>
        <gallary v-if="showGallary" @closeGallary="closeGallary"></gallary>  
    </fade-animation>      
</div>     
</template>

<script>
import gallary from '@/common/gallary/gallary'
import fadeAnimation from '@/common/fadeAnimation'
export default {
    props:{
         list:Object
    },
    components:{
        gallary,fadeAnimation
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
