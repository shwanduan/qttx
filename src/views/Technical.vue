<template>
  <div class="container font_16">
    <header_top>></header_top>
    <div class="banner"></div>
    <div class="header">
      <div style="width: 62.5%; height: 100%; margin: 0 auto;display:flex;align-items:center">
        <span class="icon iconfont">&#xe600;</span>
        <span style="font-size: 0.16rem"> 当前位置：技术能力>> </span>
        <span class="col_blue">{{ title }}</span>
      </div>
    </div>
    <div class="center">
      <div class="center_center">
        <div class="center_left">
          <div
            :class="[item.id == change ? 'active' : '']"
            class="detail"
            v-for="item in list"
            :key="item.id"
            @click="changecolor(item)"
          >
            {{ item.sname }}
          </div>
        </div>
        <div class="center_right" style="">
          <div style="width: 100%; height: 7.26rem" >
            <div
              class="wid_100 bg_white m_top flex"
              v-for="item in arraytwo"
              :key="item.id"
            >
              <div class="" style="flex:2">
                <img :src="item.photo" alt="" class="wh_100" />
              </div>
              <div class="flex_3 dis_column padding_20">
                <span class="font_color"> {{ item.name }} {{ item.job }} </span>

                <span class="mt_10 fot_g">
                  {{ item.skills }}
                </span>
                <span class="mt_10 fot_g">
                  {{ item.postskills }}
                </span>
                <span class="mt_10 fot_g">
                  {{ item.experience }}
                </span>
                <span class="mt_10 fot_g">
                  {{ item.state }}
                </span>
                <span class="mt_10 fot_g">
                  {{ item.pexperience }}
                </span>
                <span class="mt_10 fot_g">
                  {{ item.entrytime | dateFormat }}
                </span>
              </div>
            </div>
            <div class="wid_100 m_top dis_bet">
              <div
                class="wid_14"
                v-for="item in arrayone"
                :key="item.id"
                style="
                  display: flex;
                  flex-direction: column;
                  background-color: rgba(77, 77, 79, 0.1);
                  color: black;
                "
              >
                <div style="width: 100%; flex: 4; overflow: hidden">
                  <img
                    :src="item.photo"
                    alt=""
                    style="width: 100%; height: 100%"
                  />
                </div>
                <div
                  style="
                    width: 100%;
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: .1rem;
                  "
                >
                  <span>{{ item.name }}</span>
                  <span
                    style="color: #959595; font-size: 15px; margin-top: 5px"
                    >{{ item.experience }}</span
                  >
                  <span
                    style="color: #959595; font-size: 15px; margin-top: 5px"
                    >{{ item.skills }}</span
                  >
                  <span
                    style="color: #959595; font-size: 15px; margin-top: 5px"
                    >{{ item.postskills }}</span
                  >
                </div>
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
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";
import { technical } from "../api/api";
import { dynamicInfo } from "../api/api";
export default {
  created() {
    var _this = this;
    technical().then((res) => {
      console.log(JSON.stringify(res) + "111111111");
      this.list = res;
      let items = this.list.map((item) => {
        return item.id;
      });
      let titles = this.list.map((one) => {
        return one.sname;
      });
      _this.title = titles.shift();
      //  console.log(items.shift()+'返回的第一个数字');
      _this.change = items.shift();
      console.log(_this.change + "看看赋值上了没");
      dynamicInfo({ id: _this.change }).then((res) => {
        console.log(JSON.stringify(res) + "first");

        this.array = res;
        this.arraytwo = this.array.filter((item) => {
          if (item.state == 1) {
            return item;
          }
        });
        this.arrayone = this.array.filter((item) => {
          if (item.state == 0) {
            return item;
          }
        });
      });
    });
  },
  mounted() {},
  components: {
    Footer,
    header_top,
  },
  data() {
    return {
      change: "",
      title: "",
      array: [],
      list: [],
      arraytwo: [],
      arrayone: [],
    };
  },
  methods: {
    changecolor(e) {
      this.change = e.id;
      this.title = e.sname;
      dynamicInfo({ id: e.id }).then((res) => {
        console.log(JSON.stringify(res) + "dynamicInfo");
        this.array = res;
        this.arraytwo = this.array.filter((item) => {
          if (item.state == 1) {
            return item;
          }
        });
        console.log(JSON.stringify(this.arraytwo), "type");
        this.arrayone = this.array.filter((item) => {
          if (item.state == 0) {
            return item;
          }
        });
        console.log(this.arraytwo, "arraytwo");
        console.log(this.arrayone, "arrayone");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(../scss/technical.scss);

.bg_img {
  background: url(../assets/技术能力/矩形5拷贝4.png) no-repeat;
  background-size: 100% 100%;
}
.bor_one {
  border: 1px solid black;
}
.text {
  text-indent: 2em;
  // border: 1PX solid black;
  font-size: 15px;
}
.col_blue {
  color: #0b61ff;
}
.active {
  background: #0b61ff !important;
  color: white !important;
}
.container {
  .banner {
    margin-top: 1.65rem;

    width: 100%;
    height: 500px;
    background: red;
    background: url(../assets/技术能力/技术能力.png);
    background-size: 100% 100%;
  }
  .header {
    height: 0.52rem;
    width: 100%;
    background: #eeeeee;
  }
  .center {
    .center_center {
      // border:1PX solid black;
      display: flex;
      width: 1215px;
      height: 886px;
      .center_left {
        width: 20%;
        height: 100%;
        .detail {
          width: 100%;
          height: 50px;
          background: #f2f2f2;
          margin-bottom: 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #666666;
        }
      }
      .center_right {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        color: #5a5a5a;
        padding: 0 20px;
      }
    }
    width: 62.5%;
    margin:.2rem auto;
    //   border:1PX solid black;
    height: 11.67rem;
    font-size: 0.16rem;
    //   background: yellow;
  }
}
</style>