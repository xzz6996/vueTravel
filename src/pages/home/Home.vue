<template>
    <div>
       <home-header></home-header>
       <home-swiper :swiperList="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>  
       <home-recommend :recommendList="recommendList"></home-recommend>   
       <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import {mapState} from 'vuex'
export default {
    components:{
        homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend
    },
    data(){
        return{
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[],
            lastCity:''
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            this.axios.get('/api/index.json?city='+北京).then(r=>{
            this.iconList=r.data.data.iconList;
            this.recommendList=r.data.data.recommendList;
            this.swiperList=r.data.data.swiperList;
            this.weekendList=r.data.data.weekendList;
        })
        }
    },
    mounted(){
        this.getHomeInfo()
        this.lastCity=this.city;
    },
    activated(){ //页面重新显示的时候
        if(this.city!==this.lastCity){
            this.getHomeInfo()
            this.lastCity=this.city;
        }
    }
}
</script>

<style lang='stylus' scoped>
   
</style>
