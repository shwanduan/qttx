<template>
  <div class="container font_16">
     <router-view></router-view>
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <div
        style="
          width: 60%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
        "
      >
        <span class="icon iconfont">&#xe600;</span>
        <span> 当前位置：项目案例>> </span>
        <span class="col_blue">{{ clicktitle }}</span>
      </div>
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
            {{ item.typename }}
          </div>
        </div>
        <div class="center_right" v-if="clickid == 'type'" v-html="ccc.content">
          {{ ccc.content }}
        </div>
        <div class="center_right" v-else style="display: flex; flex-wrap: wrap">
          <div
            style="
              width: 28%;
              height: 4rem;
              display: flex;
              flex-direction: column;
              border: 1px solid #ececec;
              margin-left:.1rem
            "
            v-for="item in listone"
            :key="item.id"
            @click="goProdetail(item)"
          >
            <div style="width: 100%; flex: 4; overflow: hidden">
              <img :src="item.photo" alt="" style="width: 100%; height: 100%" />
            </div>

            <div style="width: 100%; flex: 2;padding:.1rem">
              <div class="mg_top">
                <span style="color: #aaaaaa">项目名称：</span>
                <span style="color: #333333">{{ item.name }}</span>
              </div>
              <div class="mg_top">
                <span style="color: #aaaaaa">项目简介：</span>
                <span style="color: #333333">{{ item.typename }}</span>
              </div>
              <div class="mg_top">
                <span style="color: #aaaaaa">项目描述：</span>
                <span style="color: #333333">{{ item.describe }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  
</template>
<script>
import Footer from "@/components/Footer";
import header_top from "../components/Header/header_top";
import { typelist, projectlist } from "../api/api";
export default {
  created() {
    console.log('-------');
    typelist().then((res) => {
      console.log(JSON.stringify(res) + "项目案例");
      this.list = res;
      let lists = this.list.map((item) => {
        return item.id;
      });
      let titles = this.list.map((item) => {
        return item.typename;
      });
      this.clicktitle = titles.shift();
      this.clickid = lists.shift();
      if (this.clickid == "type") {
        projectlist({ id: this.clickid }).then((res) => {
          console.log(JSON.stringify(res) + "项目详情");
          this.ccc = res;
        });
      } else {
        projectlist({ id: this.clickid }).then((res) => {
          console.log(JSON.stringify(res) + "项目详情");
          this.listone = res;
        });
      }
    });
  },
  components: {
    Footer,
    header_top,
  },
  data() {
    return {
      ccc: "",
      listone: [],
      clickid: "",
      clicktitle: "",
      list: [],
    };
  },
  methods: {
    goProdetail(e) {
      console.log('xxxx');
      this.$router.push({ name: "projectDetail", params: { id: e.id } });
      // this.$router.push({
      //   path: '/project/prodetail',
      //    params: { id: e.id }
      // })
    },
    changecolor(e) {
      this.clickid = e.id;
      this.clicktitle = e.typename;
      projectlist({ id: e.id}).then((res) => {
        console.log(JSON.stringify(res));
        this.listone = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.mg_top {
  margin-top: .1rem;
}
.width_100 {
  width: 100%;
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.hei_100 {
  height: 100%;
}
.display {
  display: flex;
}
.m_top {
  margin-top: 0.05rem;
}
.height {
  height: 2.6rem;
}
.dis_play {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bor_one {
  border: 1px solid black;
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
    background: url(../assets/项目案例/banner.png);
    background-size: 100% 100%;
  }
  .header {
    height: 0.52rem;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    .center_center {
      display: flex;
      width: 62.5%;
      margin: .1rem auto;
      height: 8.86rem;
      .center_left {
        width: 20%;
        height: 100%;
        .detail {
          width: 100%;
          height: 0.5rem;
          background: #f2f2f2;
          margin-bottom: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .center_right {
        width: 80%;
        height: 100%;
        padding: 0.1rem;
        margin-left: 0.2rem;
      }
    }

    width: 100%;
  }
}
</style>