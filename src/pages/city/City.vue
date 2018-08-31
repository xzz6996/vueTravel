<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search> 
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="change"></city-alphabet>
    </div>
</template>

<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
export default {
    components:{
        cityHeader,citySearch,cityList,cityAlphabet
    },
    mounted(){
        this.axios.get('/api/city.json').then(res=>{
            this.cities=res.data.data.cities
            this.hotCities=res.data.data.hotCities
        })
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        change(r){
            this.letter=r;
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
