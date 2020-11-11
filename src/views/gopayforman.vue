<template>
    <div class="container font_16">
     <header_top></header_top>
    <div class="header"></div>
    <div class="title">
   
      <span class="icon iconfont">&#xe600;</span>
      <span class="col_self" style="margin-left: .1rem">
        当前位置：关于我们>><span @click="goback" class="handsup" style="color:#38cffc">招聘信息</span>>招聘详情</span
      >
    </div>
    <div class="center">
        <div class="w100 " style="height:.7rem;display:flex;justify-content:space-around;align-items:center"><span style="font-size:.3rem;color:black;">{{arr.jobtitle}}</span> <span style="color:red;font-size:.2rem;font-weight:bold">{{arr.min}} - {{arr.max}}</span> </div>
        <div class="w100" style="height:3.5rem">
           <div class="w100" style="font-size:.2rem;color:black;height:.7rem;font-weight:bold;line-height:1rem">
             岗位职责：
           </div>
           <div v-html="arr.requirements">
               {{arr.requirements}}
           </div>
          </div>
           <div class="w100" style="font-size:.2rem;color:black;height:1rem;font-weight:bold;line-height:1rem">
             任职要求：
           </div>
           <div class="w100" v-html="arr.responsibility">
               {{arr.responsibility}}
           </div>
            <div class="w100" style="font-size:.2rem;color:black;height:.7rem;font-weight:bold;line-height:1rem">
             联系我们：
           </div>
           <div style='display:flex;width:100%;height:1.5rem;margin-top:.3rem'>
              <div style="width:20%;height:100%;">
                  <p>座机：0539-4233124</p>
                  <p>QQ:2897206463</p>
                  <p>微信：2897206463</p>
              </div>
               <div style="width:20%;height:100%;">
                  <p>手机：15324950833</p>
                  <p>邮箱:2897206463@qq.com</p>
                  <p>微信：2897206463</p>
              </div>
             
           </div>
         
        <!-- <div class="w100"></div>
        <div class="w100">{{arr.createtime | dateFormat}}</div>   -->
    </div>
     <Footer></Footer>
  </div>  
</template>

<script>
import {abrecruitmentInfo} from "../api/api"
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";

export default {
    components:{
      header_top,
      Footer
  },
    data(){
        return {
            arr:{}
        }
    },
   created(){
       console.log(this.$route.params.id)
         abrecruitmentInfo({id:this.$route.params.id}).then((res)=>{
             console.log(JSON.stringify(res))
             this.arr = res
         })  
   },
   methods:{
     goback(){
       this.$router.push('/about/5')
     }
   },
}
</script>

<style lang="scss" scoped>
.handsup{
  cursor: pointer;
}
.w100{
    width:100%;
}
   .bor_one{
    border:1PX solid black;
}
.container {
  .header {
    margin-top: 160PX;
    width: 100%;
    height: 500PX;
    background: url(../assets/about/Aboutus.png);
  }
  .title {
    width: 100%;
    height: 50PX;
    background: #eeeeee;
    padding: 0 360PX;
    display: flex;
    align-items: center;
    color: #b3b3b3;
  }
  .center {
    width: 60%;
    padding:0 0.3rem;
    margin:0 auto;
    height:1500PX
  }
}

</style>