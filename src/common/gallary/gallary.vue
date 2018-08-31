<template>
    <div class="gallary" @click="closeGallary">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <!-- <swiper-slide v-for="(item,index) in swiperList" :key="index"><img class='swiper-img' :src="item.imgUrl" alt="">
                </swiper-slide>  -->
                <swiper-slide ><img class='swiper-img' src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" alt="">
                </swiper-slide> 
                 <swiper-slide ><img class='swiper-img' src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="">
                </swiper-slide> 
                <!-- Optional controls -->
                 <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true

            },
            swiperList:[]
        }
    },
    methods:{
        closeGallary(){
            this.$emit('closeGallary')
        }
    }

}
</script>

<style lang="stylus" scoped>
    .gallary >>>.swiper-container
        overflow inherit
    .gallary    
        z-index 99
        position fixed
        left 0
        right 0
        top 0 
        bottom 0
        background #000
        display flex
        flex-direction  column
        justify-content center
        .wrapper
            width 100%
            height 0
            padding-bottom 100%
            .swiper-img
                width 100%
            .swiper-pagination
                color #fff 
                bottom -1rem  
                font-size 0.3rem 
</style>
