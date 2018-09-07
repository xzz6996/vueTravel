<template>
    <div>
        <div class="search">
           <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
        </div>
        <div class="search-content" v-show="this.keyword" ref="search">
            <ul>
                <li v-for="item in list" :key="item.id" class="search-item" @click="handleChangeCity(item.name)">{{item.name}}</li>
                <li class="search-no" v-show="!list.length">没有找到匹配的城市</li>
            </ul>
        </div>
    </div>  
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:null,
            list:[],
            timer:null
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }    
            if(!this.keyword){
                this.list=[];
                return
            }
            this.timer=setTimeout(()=>{
                const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.name.indexOf(this.keyword)>-1||value.spell.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list=result
            },100)
        }
    },
    methods:{
        handleChangeCity(city){
            this.$store.dispatch('changeCity',city);
            this.keyword=null;
            this.$router.push('/');
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/styles/common.styl'
    .search
        background $bgcolor
        height 0.72rem
        padding 0 0.1rem
        .search-input
            box-sizing border-box
            width 100%
            height 0.62rem
            line-height 0.62rem
            padding 0 0.1rem
            text-align center
            color #666
            border-radius 0.06rem    
            display block
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee      
        li
            line-height 0.4rem
            padding 0.1rem 0 0 0.3rem
            color #666
            font-size 0.2rem
            border-bottom 1px solid #ddd
</style>
