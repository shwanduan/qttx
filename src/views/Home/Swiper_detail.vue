<template>
    <div class="box">
     
    </div>
</template>
 <script>
   export default{
       created(){
           console.log(this.$route.params.id)
           console.log( document.documentElement.clientWidth)
       },
   }
 </script>
<style lang="scss" scoped>
  .box{
      margin-top: 120PX;
      border:1px solid black;
      widows: 19.5rem;;
      height:100px
  }

</style>