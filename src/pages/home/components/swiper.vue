<template>
    <div class="warpper">
        <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
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
    props:{
        swiperList:Array
    },
    data(){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',
                loop:true, //循环                
            }           
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
    padding-bottom 32%
    background #ccc
    .swiper-img
        width :100%
      

   
</style>
