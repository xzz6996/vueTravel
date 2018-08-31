<template>
    <div class='header'>
       <div class='header-left'>
           <span class='iconfont back-icon'>&#xe624;</span>
       </div>
       <div class='header-input'>
           <span class='iconfont'>&#xe632;</span>
           请输入选择城市
        </div>
        <router-link to='/city'>
            <div class='header-right'>
            <span>{{this.city}}</span>
            <span class='iconfont'>&#xe62d;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
   computed:{
       ...mapState([
           'city'
       ])
   }     
}
</script>

<style lang='stylus' scoped>
    @import '~@/styles/common.styl'
    .header
        display:flex
        line-height:$headerHeight
        background :$bgcolor
        color:#fff
        font-size:0.18rem
        .header-left
            float:left
            width:0.64rem
            .back-icon
                font-size: 0.4rem;
                text-align: center;
                display: block;    
        .header-input
            flex:1
            height:0.64rem 
            line-height:0.64rem 
            margin: 0.12rem 0 0 0.2rem
            background :#fff
            padding-left : 0.2rem
            border-radius:0.1rem
            color: #ccc
        .header-right
            min-width:1.04rem
            padding 0 0.1rem
            float:right
            text-align:center
            color:#fff
</style>
