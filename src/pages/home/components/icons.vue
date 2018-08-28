<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="(item,index) in list" :key="index">
                    <div class='icon-img'>
                        <img :src="item.imgUrl" alt="" class="icon-imgs">
                    </div>
                    <p class="icon-conten">{{item.content}}</p>
                </div>
            </swiper-slide>    
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeICons",
    data (){
        return{
            list:[
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
                {
                    imgUrl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3065014263,1876107866&fm=58",
                    content:"签证 · WiFi"
                },
            ]    
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
                display block
                height 100% 
                margin 0 auto
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
