<template>
    <ul class="list">
       <li class="item" v-for="item in letters" :key="item" :ref="item" @click="handleLetterClick" 
        @touchmove="move" @touchstart.prevent="start" @touchend="end"
       >{{item}}</li> 
    </ul>
</template>

<script>
export default {
    props:{
        cities:Object,
    },
    data(){
        return {
            touchStatus:false,
            startY:0,
            timer:null   //数据节流
        }
    },
    computed:{
        letters(){
            let letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop;;
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText);
        },
        move(e){
             if(this.touchStatus){
                 if(this.timer){
                      clearTimeout(this.timer)  
                 }
                this.timer = setTimeout(() => {
                const touchY=e.touches[0].clientY-79;
                const index=Math.floor((touchY-this.startY)/20);
                if(index>=0&&index<this.letters.length){
                    this.$emit('change',this.letters[index]);
                }
                },16)
                              
            }
        },
        end(){
            this.touchStatus=false;
        },
        start(){
            this.touchStatus=true;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/common.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position  absolute
        right 0
        top 1.5rem
        bottom  0
        width 0.4rem
        .item
            text-align center
            line-height 0.44rem    
            color $bgcolor
            font-size 0.3rem
       
</style>
