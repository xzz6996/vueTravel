<template>
    <div class="warpper">
        <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in swiperList" :key="index"><img class='swiper-img' :src="item.imgUrl" alt=""></swiper-slide> 
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop:true //循环
            },
            swiperList:[
                {
                    imgUrl:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"
                },
                {
                    imgUrl:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"
                }
            ]
        }
    }
}
</script>

 >>> 样式进行穿透
<style lang='stylus' scoped>
.warpper >>>.swiper-pagination-bullet-active 
        background red
.warpper
    width :100%;
    height: 0;
    overflow :hidden;
    padding-bottom 24.5%
    background #ccc
    .swiper-img
        width :100%
      

   
</style>
