<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-banner :list="list"></detail-banner>  
        <div class="content">
            <detail-list :categoryList="categoryList"></detail-list>
        </div>
    </div>    
</template>

<script>
import detailHeader from './components/header'
import detailBanner from './components/banner'
import detailList from './components/list'
export default {
    components:{    
        detailBanner,detailHeader,detailList
    },
    data(){
        return {
            list:{},
            categoryList:[]
        }
    },
    mounted(){
        this.axios.get('/api/detail.json',{
         params: {
          id: this.$route.params.id
        }
        }).then(res=>{
            this.list=res.data.data;
            this.categoryList=res.data.data.categoryList
        })
    }
}
</script>

<style lang="stylus" scoped>
 

</style>
