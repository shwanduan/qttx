<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span> 当前位置：项目案例><span @click="goback" class="handsup">{{ typename }}</span>>{{ name }} </span>
      <span class="col_blue"></span>
    </div>
    <div class="center">
      <div
        style="
          width: 60%;
          height: 6.56rem;
          display: flex;
        "
        class="m_t_50"
      >
        <div style="flex: 1;display:flex;align-items:center;flex-direction:column;justify-content:center;" >
            <div class="color_blue font_16">
              业务需求
            </div>
            <div class="text_int font_13 line-height">
              {{ all.customer }}
            </div>
          
        </div>
        <div style="flex: 4;display:flex;justify-content:center;align-items:center" >
          <img
            :src="`http://web.zhangjitiao.top${all.customerphoto}`"
            alt=""
            style="width: 80%; height: 80%"
          />
        </div>
      </div>
      <div
        style="
          width: 60%;
          height: 6.56rem;
          display: flex;
        "
        class="m_t_50"
      >
        <div style="flex: 1;display:flex;justify-content:center;align-items:center;flex-direction:column" >
            <div class="color_blue font_16">
             功能设计
            </div>
            <div class="text_int font_13 line-height">
                 {{ all.design }}
            </div>
          
        </div>
        <div style="flex: 4;display:flex;justify-content:center;align-items:center" >
          <img
            :src="`http://web.zhangjitiao.top${all.designphoto}`"
            alt=""
            style="width: 80%; height: 80%"
          />
        </div>
      </div>

      <div
        style="
          width: 60%;
          height: 6.56rem;
          display: flex;
        "
        class="m_t_50"
      >
        <div style="flex: 1;display:flex;justify-content:center;align-items:center;flex-direction:column" >
            <div class="color_blue font_16">
               开发说明
            </div>
            <div class="text_int font_13 line-height">
                {{ all.itemdemand }}
            </div>
          
        </div>
        <div style="flex: 4;display:flex;justify-content:center;align-items:center" class="">
          <img
            :src="`http://web.zhangjitiao.top${all.itemdemandphoto}`"
            alt=""
            style="width: 80%; height: 80%"
          />
        </div>
      </div>
      <div
        style="
          width: 60%;
          height: 6.56rem;
          display: flex;
        "
        class="m_t_50"
      >
        <div style="flex: 1;display:flex;justify-content:flex-start;align-items:center;flex-direction:column" class="">
            <div class="color_blue font_16">
              产品介绍
            </div>
            <div class="text_int font_13 line-height">
                  {{ all.introduction }}
            </div>
       
        </div>
        <div style="flex: 4;display:flex;justify-content:center;align-items:center;" class="" >
          <el-carousel :interval="4000" type="card"  style="width:100%;height:100%;overflow:hidden">
            <el-carousel-item v-for="(item,index) in change" :key="index"  style="height:100%;">
                 <img :src="`http://web.zhangjitiao.top${item}`" alt="" style="width:100%;height:100%;">
            </el-carousel-item>
          </el-carousel>
        
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import header_top from "../components/Header/header_top";
import { proInfo, projectlist } from "../api/api";
export default {
  data() {
    return {
      typename: "",
      name: "",
      all: {},
      change:[]
    };
  },
  created() {
    console.log(this.$route.params.id);
    proInfo({ id: this.$route.params.id,state:2 }).then((res) => {
      console.log(JSON.stringify(res));
      this.typename = res.typename;
      this.name = res.name;
      this.all = res;
      this.change = res.introductionphoto.split(',')
    });
    // projectlist({id:'type'}).then((res)=>{
    //     console.log(JSON.stringify(res))
    // })
  },
  methods:{
    goback(){
      this.$router.go('-1')
    },
  },
  components: {
    header_top,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.handsup{
  cursor: pointer;
}
.color_blue{
  color:#085fff
}
.m_t_50{
  margin-top:.3rem
}
.container {
  .banner {
    margin-top: 1.65rem;
    width: 100%;
    height: 5rem;
    background: red;
    background: url(../assets/项目案例/banner.png);
    background-size: 100% 100%;
  }
  .header {
    padding: .2rem 3.53rem 0;
    height: .52rem;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    //   border:1PX solid black;
    height: auto;
    //   background: yellow;
  }
}
</style>