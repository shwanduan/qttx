<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span> 当前位置：<span class="col_blue">动态详情</span> </span>
      <!-- <span class="col_blue">{{ title }}</span> -->
    </div>
    <div class="center ">
      <div
        style="
          width: 100%;
          height: .5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: .3rem;
        "
        class="color_title"
      >
        {{ obj.title }}
      </div>
     
      <div style="width: 100%; height: 9rem" >
        <span>
          <img
            :src="`http://web.zhangjitiao.top${obj.image}`"
            alt=""
            style="width: 4rem; height: 4rem;float:left"
          />
        </span>
        <span v-html="obj.content" style="" >
           {{ obj.content }}
        </span>
      </div>
       <div
        style="
          width: 100%;
          height: .5rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        <span>
          {{ obj.createtime | dateFormat }}
        </span>
      </div>

      <!-- <span> {{ obj.title }}</span>
      <span class="bor_one">     {{ obj.content }}</span>
       <span>{{obj.image}}</span>
         <div style="width:200PX;height:200PX" class="bor_one">
            <img :src="`http://web.zhangjitiao.top${obj.image}` " alt="" style="width:100%;height:100% ">
         </div>
      <span> {{ obj.summary }}</span>
      <span> {{ obj.username }}</span>
      <span>{{ obj.createtime | dateFormat }}</span> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";
import { dyInfo } from "../api/api";
export default {
  data() {
    return {
      obj: {},
    };
  },
  created() {
    console.log(this.$route.params.id);
    dyInfo({ id: this.$route.params.id,state:2 }).then((res) => {
      console.log(JSON.stringify(res));
      this.obj = res;
    });
  },
  components: {
    Footer,
    header_top,
  },
};
</script>

<style lang="scss" scoped>
.container {
  .banner {
    margin-top: 1.65rem;
    width: 100%;
    height: 5rem;
    background: url(../assets/行业动态/banner.png);
    background-size: 100% 100%;
  }
  .header {
    padding: .2rem 3.53rem 0;
    height: .52rem;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    margin: 0 auto;
    width: 62.5%;
    // border: 1PX solid black;
    height: 11.67rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>