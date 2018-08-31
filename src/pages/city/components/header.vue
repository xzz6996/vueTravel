<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="iconfont header-back">&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    @import '~@/styles/common.styl'
    .header
        width 100%
        line-height $headerHeight
        background :$bgcolor
        text-align center
        position relative
        font-size 0.32rem
        color #ffffff
        .header-back
            color #ffffff
            position absolute 
            left 0
            top 0
            font-size 0.4rem
</style>
