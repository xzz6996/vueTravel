<template>
    <div>
        <count-down :endTime="endTime" :callback="callback" endText="已经结束了"></count-down>
        <milli-second :endTimes="endTimes"></milli-second>
    </div>
</template>

<script>
import countDown from './countDown.vue'
import milliSecond from './milliSecond'
export default {
    data(){
        return{
          endTime:"1536041000",
          endTimes:0
        }
    },
    components:{
        countDown,milliSecond
    },
    created(){
        this.handleEndTime();
    },
    methods:{
        callback(){},
        handleEndTime(){
            let nowTime = new Date();  
            let endTime = new Date(this.endTime * 1000);  
            let t = endTime.getTime() - nowTime.getTime();
            if(t<0){
                this.endTimes=1
            }else{
                this.endTimes=0
            }
        }
    }
}
</script>

<style>

</style>
