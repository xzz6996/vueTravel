<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(item,index) in page" :key="index">
                    <div class='icon-img'>
                        <img :src="item.imgUrl" alt="" class="icon-imgs">
                    </div>
                    <p class="icon-conten">{{item.desc}}</p>
                </div>
            </swiper-slide>    
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeICons",
    props:{
        list:Array
    },
    data (){
        return{
             swiperOption: {
                autoplay: false
            },
        }
    },
    computed:{
        pages(){
            let pages=[];
            this.list.forEach((item,index)=>{
                const page=Math.floor(index/8);
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~@/styles/mixins.styl'
    .iocns >>> .swiper-container
        display: flex;
        height: 0;
        padding-bottom: 50%;
        justify-content: space-between;
        flex-wrap: wrap;       
    .icon
        width 25%
        float left
        padding-bottom 25%
        overflow hidden
        position relative
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom 0.4rem
            .icon-imgs
                height: 1rem;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
        .icon-conten
            position: absolute
            bottom: 0
            left: 0
            right: 0
            font-size: 0.2rem
            height :0.44rem
            line-height 0.44rem
            text-align: center  
            ellipsis()
                
</style>
