<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span> 当前位置：<span class="col_blue">联系我们</span> </span>
      <!-- <span class="col_blue">{{ title }}</span> -->
    </div>
    <div class="center">
      <div class="center_center ">
        <div style="height: 5.09rem; width: 100%; display: flex" class="bg">
          <div class="six">
            <img
              src="../assets/联系我们/合作.png"
              alt=""
              style="width: 100%; height: 100%"
            />
          </div>
          <div class="four" style="box-shadow: 0 0 10px gray; padding:0.05rem 0.1rem">
            <div class="flow_two">
              <div class="flow_two_header">
                <img
                  src="../assets/首页/卡片圆圈.png"
                  alt=""
                  style="padding-left: 10px"
                />
                <span class="color_title">提交您的需求,我们会尽快联系您</span>
                <img
                  src="../assets/首页/卡片圆圈.png"
                  alt=""
                  style="padding-right: 10px"
                />
              </div>
              <div class="wid_100 color_title_small" style="flex: 1">
                您的需求
              </div>
              <div
                class="wid_100"
                style="
                  flex: 1;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <span>项目类型</span>
                <el-select
                  v-model="form.type"
                  placeholder="请输入项目类型"
                  style="width: 80%"
                >
                  <el-option
                    v-for="item in map"
                    :key="item.id"
                    :value="item.typename"
                  >
                  </el-option>
                </el-select>
              </div>
              <div class="flow_two_four wid_100 dis_sp_between" style="flex: 1">
                <span>项目预算</span>
                <div style="width:80%;display:flex;justify-content:space-between;align-items:center">
                      <span
                  class="dis_play"
                  style="
                    height: 30px;
                    width: 80px;
                    background: #759cff;
                    font-size: 0.14rem;
                  "
                  v-for="item in money"
                  :key="item.id"
                  :class="[item.id == isActive ? 'active' : '']"
                  @click="getActive(item)"
                  >{{ item.title }}</span
                >
                </div>
               
              </div>
              <div
                class="wid_100"
                style="
                height:1rem;
                  display:flex
                "
              >
                <div style="width:20%;height:100%" class="">
                  <span>项目描述</span>
                </div>
                <div  style="width: 80%; height: 100%" class="display_column">
                  <textarea
                    :autosize="{ minRows: 2, maxRows: 4}"
                    v-model="form.need"
                    name=""
                    id=""
                    class=""
                    style="width: 99%;height:45%;"
                  >
                  </textarea>
                  <div style="width: 100%; height: 45%;" class="column_center">
                    <el-upload
                      :show-file-list="false"
                      action="string"
                      class="upload-demo"
                      multiple
                      :http-request="uploadMt"
                    >
                      <el-button size="small" type="primary"
                        >点击上传</el-button
                      >
                     
                    </el-upload>
                  </div>
                </div>
              </div>
              <div
                class="wid_100 color_title_small"
                style="flex: 1; display: flex; align-items: center"
              >
                您的联系方式
              </div>
              <div
                class="wid_100"
                style="
                  flex: 1;
                  justify-content: space-between;
                  display: flex;
                  align-items: center;
                "
              >
                <span>公司名称</span>
                <el-input
                  v-model="form.company"
                  placeholder="请输入内容"
                  style="width: 80%"
                ></el-input>
              </div>
              <div
                class="flow_two_eight wid_100 dis_play"
                style="
                  flex: 1;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <span>联系人</span>
                <el-input
                  v-model="form.username"
                  placeholder="请留下您的姓名,以方便我们来联系您"
                  style="width: 80%"
                ></el-input>
              </div>
              <div
                class="wid_100"
                style="
                  flex: 1;
                  justify-content: space-between;
                  align-items: center;
                  display: flex;
                "
              >
                <span>联系电话</span>
                <el-input
                  v-model="form.phone"
                  placeholder="请留下您的常用手机号"
                  style="width: 80%"
                ></el-input>
              </div>

              <div
                style="display: flex; justify-content: center; height: 30px"
                class="wid_100 mtp_10"
              >
                <button
                 
                  style="width: 80%; height: 100%;background:#ff933b;border:none;color:white"
                  @click="commit"
                  class="handsup"
                >
                  提交
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <el-amap
            vid="amapDemo"
            :center="center"
            :zoom="zoom"
            class="amap-demo"
            :events="events"
            pitch-enable="false"
          >
            <el-amap-marker
              v-for="(marker, index) in markers"
              :key="index"
              :events="marker.events"
              :position="marker.position"
            />
            <el-amap-info-window
              v-if="window"
              :position="window.position"
              :visible="window.visible"
              :content="window.content"
              :offset="window.offset"
              :close-when-click-map="true"
              :is-custom="true"
              
            >
              <div id="info-window" style="padding: 10px">
               
                <p style="font-size: 20px; border-bottom: 1px solid white;display:flex;height:.5rem">
                  <span style="background: white; color: #5e84ff;flex:2;display:flex;justify-content:center;align-items:center" >QTTX</span>
                  <span style="flex:7;font-size:.17rem;margin-left:0.05rem;display:flex;align-items:center"> 桥通天下网络科技网络公司</span>
                  <!-- <span style="flex:1;display:flex;justify-content:flex-end;align-items:flex-start" >x</span> -->
                </p>
                <p style="width: 100%; font-size: 10px">
                  <span class="icon iconfont">&#xe612;</span
                  >{{ window.address }}
                </p>
                <p style="width: 100%; font-size: 10px">
                  <span class="icon iconfont">&#xe647;</span
                  ><span style="margin-left: 20px">{{ window.phone }} </span>
                  <span class="icon iconfont">&#xe620;</span
                  ><span style="margin-left: 20px">{{ window.email }}</span>
                </p>
                <!-- <div class="detail" @click="checkDetail">查看详情</div> -->
              </div>
            </el-amap-info-window>
          </el-amap>
        </div>
        <div class="bottom">
          <div
            class="bottom_one"
            style="border: 1px solid #ececec"
            v-for="item in list"
            :key="item.id"
          >
            <div
              :style="{
                height: '30%',
                width: '100%',
                background: 'url(' + item.bg + ')',
              }"
              class="bottom_one_top"
            >
              {{ item.title }}
            </div>
            <div
              style="
                height: 70%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
              "
            >
              <span>{{ item.textone }}</span>
              <span>{{ item.texttwo }}</span>
              <span v-if="item.id == 1">930238398 开始回话</span>
              <span style="padding: 0 20px">{{ item.fin }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
 <script>
import { AMapManager } from "vue-amap";
import Footer from "../components/Footer";
import header_top from "../components/Header/header_top";
import { protypelist, abaddNeed, upload } from "../api/api";
import { Notification, Message } from "element-ui";
import { isPoneAvailable } from "../utils/check";
// import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
export default {
  components: {
    Footer,
    header_top,
  },
  mounted() {
    this.point();
  },
  data() {
    const self = this;
    return {
      data: [
        {
          position: "119.5, 36.7",
          address: "山东省潍坊市高新区呼叫中心b座3楼桥通天下科技有限公司",
          phone: "0539-54446524",
          email: "930238398@qq.com",
        },
        {
          position: "120.38, 36.07",
          address: "山东省青岛市市南区四川路23号2栋3-3号桥通天下科技有限公司",
          phone: "0539-54446524",
          email: "930238398@qq.com",
        },
        {
          position: "121.48, 31.22",
          address: "上海分公司",
          phone: "0539-54446524",
          email: "930238398@qq.com",
        },
        {
          position: "116.98, 36.67",
          address:
            "山东省济南市市中区经五纬一猪八戒产业园三号楼006桥通天下科技有限公司",
          phone: "0539-54446524",
          email: "930238398@qq.com",
        },
        {
          position: "118.35, 35.05",
          address:
            "山东省临沂市兰山区柳青街道环球中心a座26楼桥通天下科技有限公司",
          phone: "0539-54446524",
          email: "930238398@qq.com",
        },
      ],
      zoom: 3,
      center: [121.59996, 31.197646],
      markers: [],
      windows: [],
      window: "",
      events: {
        click(e) {
          const { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
        },
      },
      lng: 0,
      lat: 0,
      map: [],
      isActive: "",
      money: [
        { id: 1, title: "2万以下" },
        { id: 2, title: "2万-10万" },
        { id: 3, title: "10万-20万" },
        { id: 4, title: "20万以上" },
      ],
      form: {
        budget: "",
        type: "",
        need: "",
        annex: "",
        company: "",
        username: "",
        phone: "",
      },

      currentWindow: {
        position: [0, 0],
        content: "111111111111111",
        events: {},
        visible: false,
      },
      center: [116.98, 36.67],
      zoom: 12,
      markers: [],
      windows: [],
      window: "",

      list: [
        {
          id: 0,
          title: "人力资源部",
          textone: "0536-2293201(潍坊)",
          texttwo: "0535-2293201(临沂)",
          fin: "如需加入我们的大家庭,可投递简历,并点击此处",
          bg: require("../assets/联系我们/rl.png"),
        },
        {
          id: 1,
          title: "在线客服",
          textone: "0536-2293201(潍坊)",
          texttwo: "0535-2293201(临沂)",
          fin: "为您提供各种在线专业询问，高峰期需要耐心等待",
          bg: require("../assets/联系我们/客服.png"),
        },
        {
          id: 2,
          title: "销售资源热线",
          textone: "0536-2293201(潍坊)",
          texttwo: "0535-2293201(临沂)",
          fin: "专业的人工服务热线，高峰期需要您耐心等待",
          bg: require("../assets/联系我们/售后.png"),
        },
        {
          id: 3,
          title: "售后服务",
          textone: "0536-2293201(潍坊)",
          texttwo: "0535-2293201(临沂)",
          fin: "提供桥通天下软件产品，活动等各类问题咨询",
          bg: require("../assets/联系我们/销售.png"),
        },
        {
          id: 4,
          title: "投诉建议",
          textone: "0536-2293201(潍坊)",
          texttwo: "0535-2293201(临沂)",
          fin: "如有任何投诉建议可发到邮箱，我们会及时回馈并解决",
          bg: require("../assets/联系我们/投诉.png"),
        },
      ],
      options: [],
    };
  },

  methods: {
    point() {
      const markers = [];
      const windows = [];
      const that = this;
      this.data.forEach((item, index) => {
        markers.push({
          position: item.position.split(","),
          // icon:item.url, //不设置默认蓝色水滴
          events: {
            mouseover() {
              // 方法：鼠标移动到点标记上，显示相应窗体
              that.windows.forEach((window) => {
                window.visible = false; // 关闭窗体
              });
              that.window = that.windows[index];
              that.$nextTick(() => {
                that.window.visible = true;
              });
            },
          },
        });
        windows.push({
          position: item.position.split(","),
          isCustom: true,
          offset: [115, 55], // 窗体偏移
          showShadow: false,
          visible: false, // 初始是否显示
          address: item.address,
          phone: item.phone,
          email: item.email,
        });
      });
      //  加点
      this.markers = markers;
      // 加弹窗
      this.windows = windows;
    },
    checkDetail() {
      alert("点击了查看详情");
    },
    uploadMt(files) {
      var _this = this;
      console.log(files);
      let formdata = new FormData();
      formdata.append("file", files.file);
      upload(formdata).then((res) => {
        console.log(JSON.stringify(res), "upload");
        _this.form.annex = res;
        Message({
          message: "上传成功",
          type: "success",
          duration: 5 * 1000,
        });
      });
    },
    commit() {
      if (
        this.form.budget == "" ||
        this.form.type == "" ||
        this.form.need == "" ||
        this.form.annex == "" ||
        this.form.company == "" ||
        this.form.username == "" ||
        this.form.phone == ""
      ) {
        Message({
          message: "请检查,信息不能为空",
          type: "error",
          duration: 5 * 1000,
        });
        return false;
      }
      // else if (isPoneAvailable(this.form.budget) == true) {
      //   console.log(11111111111);
      // } else {
      //   return false;
      // }
      abaddNeed(this.form).then((res) => {
        console.log(JSON.stringify(res.code) + "提交返回的数据");
        Message({
          message: "提交成功",
          type: "success",
          duration: 5 * 1000,
        });
      });
      this.form.budget = "";
    },
    getActive(e) {
      this.form.budget = e.title;
      this.isActive = e.id;
    },
    getMap() {
      // amap vue component
      console.log(amapManager._componentMap);
      //gaode map instance
      console.log(amapManager._map);
    },
  },
  created() {
    protypelist().then((res) => {
      this.options = res;

      this.map = this.options.filter((item) => {
        if (item.id !== "type") {
          //  console.log(JSON.stringify(item),',,,,,,,,,')
          return item;
        }
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.handsup{
  cursor: pointer;
}
.amap-demo {
  height: 450px;
}
.amap-page-container {
  position: relative;
}
#info-window {
  color: white;
  width: 300px;
  height: 160px;
  margin-left: 30px;
  background: rgba(117, 156, 255, 0.9);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  .detail {
    width: 100%;
    height: 24px;
    color: #fff;
    background-color: #1a73e8;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
  }
}
.active {
  background: #ffd893 !important;
  color: white !important;
}
.mtp_10 {
  margin-top: 10px;
}
.wid_100 {
  width: 100%;
}
.dis_sp_between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dis_play {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg_col_y {
  background: #ffe2a5;
  border: none;
}
.flow_two {
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .flow_two_header {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@mixin dis_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.six {
  width: 60%;
  height: 100%;
}
.four {
  width: 50%;
  height: 100%;
  margin-left: 20px;
}
.col_blue {
  color: #0b61ff;
}
.container {
  .center {
    width: 100%;
    height: 14.3rem;
    padding: .5rem 3.6rem;

    .center_center {
      width: 1200px;
      height: 1272px;
      // border: 1PX solid black;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .map {
        width: 100%;
        height: 402px;
        overflow: hidden;
      }
      .bottom {
        width: 100%;
        height: 280px;
        // background: chartreuse;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bottom_one {
          width: 18%;
          height: 100%;
          .bottom_one_top {
            // background: url(../assets/联系我们/rl.png);
            background-size: 100% 100%;
            @include dis_center;
          }
        }
      }
    }
  }
  .banner {
    margin-top: 1.65rem;
    width: 100%;
    height: 500px;
    background: red;
    background: url(../assets/联系我们/banner.png);
    background-size: 100% 100%;
  }
  .header {
    padding: 20px 353px 0;
    height: 52px;
    width: 100%;
    background: #eeeeee;
  }
}
</style>