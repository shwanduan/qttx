<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="header"></div>
    <div class="title">
      <div style="width: 62.5%; height: 100%;display:flex;align-items:center">
        <span class="icon iconfont">&#xe600;</span>
        <span style="margin-left: 0.1rem">
          当前位置：关于我们><span class="handsup" @click="goback">企业活动</span>>活动详情</span
        >
      </div>
    </div>
    <div class="center">
      <div
        class="color_title"
        style="
          width: 100%;
          height: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        {{ array.title }}
      </div>
      <div
        class=""
        style="
          width: 100%;
          height: 0.25rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        "
      >
        {{ array.createtime | dateFormat }}
      </div>
      <div class="" style="width: 100%; height: 4rem">
        <img
          :src="`http://web.zhangjitiao.top${array.content}`"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="" style="width: 100%; height: 4rem" v-html="array.explain">
        {{ array.explain }}
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { abactivityInfo } from "../api/api";
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";
export default {
  methods:{
     goback(){
        this.$router.push('/about/4')
     }
  },
  data() {
    return {
      array: {},
    };
  },
  created() {
    abactivityInfo({ id: this.$route.params.id }).then((res) => {
      console.log(JSON.stringify(res));
      this.array = res;
    });
  },
  components: {
    header_top,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.handsup{
  cursor:pointer;
}
.container {
  .header {
    margin-top: 1.65rem;
    width: 100%;
    height: 500px;
    background: url(../assets/about/Aboutus.png);
  }
  .title {
    width: 100%;
    height: 50px;
    background: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center {
    width: 60%;

    margin: 0 auto;
    height: 1000px;
  }
}
</style>