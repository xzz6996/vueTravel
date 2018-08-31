<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @click="handleChangeCity(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item" v-for="innerItem in item" :key="innerItem.id" @click="handleChangeCity(innerItem.name)">
                    <div class="item-list">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState(['city'])
    },
    data(){
        return{}
    },
    mounted(){
        this.scroll= new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element=this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    },
    methods:{
        handleChangeCity(city){
            this.$store.dispatch('changeCity',city);
            this.$router.push('/');
        }
    }
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color:#777
        &:after
            border-color:#777
    .list
        position absolute
        left 0
        right 0
        top 1.58rem
        bottom 0   
        overflow hidden     
        .title  
            line-height 0.54rem
            color #666
            padding-left 0.2rem
            background #eee
            font-size 0.24rem
        .button-list
            padding 0.1rem 0.6rem 0.1rem 0.1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.33%
                .button 
                    font-size 0.2rem    
                    background #eeeeee
                    text-align center
                    margin 0.1rem
                    padding 0.1rem 0
        .item
            .item-list     
                font-size 0.2rem   
                padding-left 0.2rem
                line-height 0.6rem
                border-bottom 1px solid #ccc
                color #666
</style>
