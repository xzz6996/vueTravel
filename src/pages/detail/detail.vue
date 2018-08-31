<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-banner></detail-banner>  
         <div style="height:30rem"></div>  
    </div>    
</template>

<script>
import detailHeader from './components/header'
import detailBanner from './components/banner'
export default {
    components:{
        detailBanner,detailHeader
    }
}
</script>

<style lang="stylus" scoped>
 

</style>
