<template>
    <div class='header'>
       <div class='header-left'>
           <span class='iconfont back-icon'>&#xe624;</span>
       </div>
       <div class='header-input'>
           <span class='iconfont'>&#xe632;</span>
           请输入选择城市
        </div>
       <div class='header-right'>
           <span>城市</span>
           <span class='iconfont'>&#xe62d;</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='stylus' scoped>
    @import '~@/styles/common.styl'
    .header
        display:flex
        line-height:0.86rem
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
            width:1.24rem
            float:right
            text-align:center
</style>
