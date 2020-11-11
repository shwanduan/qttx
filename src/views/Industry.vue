<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span> 当前位置：<span class="col_blue">行业动态</span> </span>
      <!-- <span class="col_blue">{{ title }}</span> -->
    </div>
    <div class="center">
      <div
        class="center_top"
        style="display: flex; margin-top: 20PX; flex-direction: column"
      >
        <div
          style="width: 100%; height: 200PX; display: flex; margin-top: 10PX"
          v-for="(item,index) in list"
          :key="index"
          v-if='index % 2 !== 0'
        >
          <div class="" style="height: 200PX; width: 20%">
            <img :src="item.image" alt="" style="width: 100%; height: 100%" />
          </div>
          <div
            class=""
            style="
              width: 80%;
              height: 200PX;
              color: #bcbcbc;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <div style="width: 90%; height: 80%" class="">
              <div
                style="
                  width: 100%;
                  height: 30%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <span class="color_title"> {{ item.title }}</span>
                <span class="">{{ item.createtime | dateFormat }}</span>
              </div>
              <div style="width: 100%; height: 70%; text-indent: 2em;color:#06161c;" >
                {{ item.summary }}
                 <div style="width:100%;display:flex;align-items:center;justify-content:flex-end;color:black;" @click="goIndustryDetails(item)"><div class="handsup">查看详情</div></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="width: 100%; height: 2rem; display: flex; margin-top: .3rem"
          v-for="(item,index) in list"
          :key="index"
          v-if="index % 2 == 0"
        >
         
          <div
            class=""
            style="
              width: 80%;
              height: 200PX;
              color: #bcbcbc;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <div style="width: 90%; height: 80%" class="">
              <div
                style="
                  width: 100%;
                  height: 30%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <span class="color_title">{{ item.title }}</span>
                <span>{{ item.createtime | dateFormat }}</span>
              </div>
              <div style="width: 100%; height: 70%; text-indent: 2em;display:flex;flex-direction:column;justify-content:space-between;color:#06161c;">
                {{ item.summary }}
                <div style="width:100%;display:flex;align-items:center;justify-content:flex-start;color:black;" @click="goIndustryDetails(item)"><div class="handsup">查看详情</div> </div>
              </div>
            </div>
          </div>
           <div class="" style="height: 200PX; width: 20%">
            <img :src="item.image" alt="" style="width: 100%; height: 100%" />
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";
import { dynamic } from "../api/api";
export default {
  components: {
    Footer,
    header_top,
  },
  methods:{
     goIndustryDetails(e){
       this.$router.push({name:'industryDetails',params:{id:e.id}})
     }
  },
  created() {
    dynamic().then((res) => {
      console.log(JSON.stringify(res) + "行业动态");
      this.list = res;
    });
  },
  data() {
    return {
      title: "",
      list: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.handsup{
  cursor: pointer;
}
.dis_center {
}
.bor_one {
  border: 1PX solid black;
}
.col_blue {
  color: #0b61ff;
}
.container {
  
  .banner {
    margin-top: 1.65rem;

    width: 100%;
    height: 500PX;
    // background: red;
    background: url(../assets/行业动态/banner.png);
    background-size: 100% 100%;
  }
  .header {
    padding: 20PX 353PX 0;
    height: 52PX;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    width: 100%;
    // border: 1PX solid black;
    height: 1167PX;
    .center_top {
      width: 60%;
      margin: 0 auto;
      height: auto;
      // border: 1PX solid black;
      // background:yellow
    }
    .center_bottom {
      width: 100%;
      height: 50%;
      background: red;
    }
    //   background: yellow;
  }
}
</style>