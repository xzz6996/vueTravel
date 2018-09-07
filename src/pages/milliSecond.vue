<template>
    <div id="timehs"></div>
</template>

<script>
export default {
  props:{
    endTimes:Number
  },
   created () {
      if(this.endTimes===0){
        this.$nextTick(() => {
            this.timeDt()
        })
      }
  
},
methods: {
  timeDt () {
    setTimeout(function () {
     var haomiao = 9
     document.getElementById('timehs').innerHTML =  + haomiao+"毫秒"
     setInterval(function () {
      document.getElementById('timehs').innerHTML =  + haomiao+"毫秒"
      haomiao--
      if (haomiao < 0) {
       haomiao = 9
     }
    }, 100)
   }, 1000)
  }
}
}
</script>

<style>

</style>
