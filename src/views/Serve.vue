<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span> 当前位置：服务领域>> </span>
      <span class="col_blue">{{ clicktitle }}</span>
    </div>
    <div class="center">
      <div class="center_center">
        <div class="center_left">
          <div
            :class="[item.id == clickid ? 'active' : '']"
            class="detail"
            v-for="item in list"
            :key="item.id"
            @click="changecolor(item)"
          >
            {{ item.linename }}
          </div>
        </div>
        <div class="center_right" style="display:flex">
          <div
            class="img_text "
            v-for="(one, index) in details"
            :key="index"
            style="display: flex; flex-direction: column;margin-left:.1rem;flex-wrap:wrap;border:1px solid #ececec"
            @click="goServeDetails(one)"
            @mouseenter="getactive(one)"
            :class="[one.id == activeid ? 'activecome':'']"
          >
            <div style="width:100%;flex:5;overflow:hidden" class="">
              <img
                :src="`http://web.zhangjitiao.top${one.photo}`"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
            <div
              style="
                text-indent: 2em;
                color: #bcbcbc;
               flex:2;
                width: 100%;
              "
            >
              {{ one.describe }}
            </div>
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
import { serve,proInfo} from "../api/api";
import { projectList } from "../api/api";
export default {
  components: { Footer, header_top },
  created() {
    console.log(this.$route.params.id + "gogos");
      this.clickid = this.$route.params.id ;
    serve().then((res) => {
      console.log(JSON.stringify(res) + "服务导航");
      this.list = res;
      let lists = this.list.map((item) => {
        return item.id;
      });
      console.log(lists,'sldfjslkdfjlksfjlksfdj')
      let titles = this.list.map((item) => {
        return item.linename;
      });
      this.clickid = lists.shift();
      this.clicktitle = titles.shift();
      console.log(this.clickid + "i wanna see");
      console.log(this.clicktitle+'i wanna see')
      projectList({ id: this.clickid }).then((res) => {
        console.log(JSON.stringify(res) + "服务领域详情");
        this.details = res;
      });
    });
  },
  mounted() {

    console.log(this.clickid + "mounted");
  },
  data() {
    return {
      clickid: "",
      clicktitle: "",
      list: [
      
      ],
      details: [],
      activeid:'',
    };
  },
  methods: {
    getactive(e){
      this.activeid = e.id
    },
    goServeDetails(e){
        this.$router.push({name:'serveDetails',params:{id:e.id}})
        console.log(e.id)
    },
    changecolor(e) {
      this.clickid = e.id;
      this.clicktitle = e.linename;
      projectList({ id: e.id }).then((res) => {
        console.log(JSON.stringify(res) + "服务领域详情");
        this.details = res;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.activecome{
  box-shadow: 0 0 10px gray;
}
.dis_play {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bor_one {
  // border: 1PX solid black;
}
.img_text {
  width: 30%;
  height: 360PX;
}
.col_blue {
  color: #0b61ff;
}
.active {
  background: #0b61ff !important;
  color: white;
}
.container {
  
  .banner {
    margin-top: 1.65rem;
    width: 100%;
    height: 5rem;
    background: red;
    background: url(../assets/服务领域/服务领域.png);
    background-size: 100% 100%;
  }
  .header {
    padding: .2rem 3.53rem 0;
    height: .52rem;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    .center_center {
      display: flex;
      width: 12.15rem;
      height: 8.86rem;
      .center_left {
        width: 20%;
        height: 100%;
        .detail {
          width: 100%;
          height: .5rem;
          background: #f2f2f2;
          margin-bottom: 2PX;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .center_right {
        padding: .2rem;
        width: 80%;
        height: 100%;
      }
    }
    padding: .2rem 3.53rem 0;
    width: 100%;
    height: 11.67rem;
   
  }
}
</style>