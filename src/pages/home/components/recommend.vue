<template>
    <div>
        <div class="title">直播推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id" v-for="item in recommendList" :key="item.id">
                  <img :src="item.imgUrl" alt="" class="re-img">
                  <div class="re-right">
                    <p class="re-title">{{item.title}}</p> 
                    <p class="re-desc">{{item.desc}}</p>   
                    <button class='re-info'>查看详情</button>
                  </div>  
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        recommendList:Array
    },
    data(){
        return{       
        }
    }
}
</script>

<style lang="stylus" scoped>
    .title
        line-height 0.8rem
        background #eee
    
        font-size 0.3rem
        padding 0 0.3rem
    li
        margin 0.1rem auto
        overflow: hidden;
        .re-img
            display block
            width 1.6rem
            height 1.6rem
            float left 
            padding 0.2rem    
        .re-right
            float left
            .re-title
                line-height 0.4rem
                padding 0.2rem
                font-size 0.2rem
            .re-desc    
                line-height 0.4rem
                font-size 0.2rem
                padding-left 0.2rem
            .re-info 
                display block    
                margin 0.2rem 0 0 0.2rem
                line-height 0.4rem
                font-size 0.18rem
                background #eeeeee

</style>
