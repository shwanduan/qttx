<template>
  <div class="come font_16">
    <header_top></header_top>

    <el-carousel style="width: 100%; height: 6rem">
      <el-carousel-item
        style="width: 100%; height: 6rem"
        v-for="item in imglist"
        :key="item.id"
      >
        <h3 class="small wid_100" style="height: 100%">
          <img :src="item.img" alt="" style="width: 100%; height: 100%" />
        </h3>
      </el-carousel-item>
    </el-carousel>

    <div style="width: 62.5%; margin: 0 auto; height: 50px; display: flex">
      <div
        style="
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
        "
      >
        <span> 行业经验</span>

        <span class="bor_yellow"></span>
      </div>
      <div
        style="
          width: 5%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: gray;
          font-size: 0.14rem;
        "
        @click="goex()"
      >
        更多>
      </div>
    </div>
    <div class="experience">
      <div class="middle">
        <div
          class="midde_one"
          @mouseover="enter(item)"
          @mouseleave="leaver(item)"
          style="position: relative"
          v-for="item in titlelist"
          :key="item.id"
          :style="{
            'background-image':
              'url(' + `http://web.zhangjitiao.top${item.picture}` + ')',
          }"
        >
          <div
            class="wid_100 bg_op"
            v-if="isShow === item.id"
            style="
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            "
          >
            <span
              class="wid_100 dis_play col_white"
              style="font-size: 0.25rem; height: 0.4rem; border: none"
              >{{ item.linename }}</span
            >
            <button
              @click="expersiceDetail(item)"
              class="col_white bor_one"
              style="
                background: rgb(0, 0, 0, 0.5);
                border: 0.01rem solid white;
                width: 50%;
                height: 0.4rem;
                justify-self: flex-end;
              "
            >
              了解详情
            </button>
          </div>

          <div
            class="dis_play wid_100"
            v-else
            style="
              height: 0.6rem;
              position: absolute;
              bottom: 0;
              left: 0;
              color: white;
              background: rgb(0, 0, 0, 0.5);
            "
          >
            {{ item.linename }}
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        width: 62.5%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        margin-top: 0.2rem;
      "
    >
      <div
        style="
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
        "
      >
        <span> 技术能力</span>

        <span class="bor_yellow"></span>
      </div>
      <div
        style="
          width: 5%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 0.14rem;
          color: gray;
        "
        @click="gote()"
      >
        更多>
      </div>
    </div>
    <div
      class="power"
      style="overflow-x: scroll; display: flex; align-items: center"
    >
      <div style="width: 62.5%; height: 90%; margin: 0 auto">
        <swiper
          ref="mySwiper"
          :options="swiperOption"
          style="width: 100%; height: 100%"
        >
          <swiper-slide v-for="item in common" :key="item.id" style="background:white!important;box-shadow:0 0 .1rem gray" class="font_16">
           
               <img :src="item.photo" alt="" style="width: 90%; height: 50%;display:block;" />
               <span  style="height:5%;width:90%;display:block;">从业经验：  {{ item.pexperience }}</span>
               <span    style="height:5%;width:90%;display:block;">任职： {{ item.job }}</span>
               <span  style="height:5%;width:90%;display:block;">精通： {{ item.postskills }}</span>
               <span   style="height:5%;width:90%;display:block;">具备技能：   {{ item.skills }}</span>
               <span    style="height:5%;width:90%;display:block;">项目经验：  {{ item.pexperience }}</span>
               <span    style="height:5%;width:90%;display:block;">加入时间： {{ item.entrytime | dateFormat }}</span>
         
           
          </swiper-slide>
        </swiper>
      </div>
      <!-- <div
        v-for="item in common"
        :key="item.id"
        style="
          width: 20%;
          height: 80%;
          display: inline-block;
          margin: 0.4rem 0.2rem;
          background: white;
          border-radius:20px;
          overflow:hidden
        "
      >
        <div style="width: 100%; height: 50%">
          <img :src="item.photo" alt="" style="width: 100%; height: 100%" />
        </div>
        <div style="width: 100%; height: 50%; backgrouond: white">
          <div
            style="
              width: 100%;
              height: 50%;
              display: flex;
              flex-direction: column;
            "
          >
            <div>
              <span class="font_wei font_15">从业经验：</span>
              <span class="font_13">
                {{ item.pexperience }}
              </span>
            </div>
              <div>
              <span class="font_wei font_15">任职：</span>
              <span class="font_13">
                {{ item.job }}
              </span>
            </div>
              <div>
              <span class="font_wei font_15">精通：</span>
              <span class="font_13">
                {{ item.postskills }}
              </span>
            </div>
              <div>
              <span class="font_wei font_15">具备技能：</span>
              <span class="font_13">
                {{ item.skills }}
              </span>
            </div>
            <div>
              <span class="font_wei font_15">项目经验：</span>
              <span class="font_13">
                {{ item.pexperience }}
              </span>
            </div>
               <div>
              <span class="font_wei font_15">加入时间：</span>
              <span class="font_13">
                {{ item.entrytime | dateFormat }}
              </span>
            </div>
         

          
      
          </div>
        </div>
      </div> -->
    </div>

    <div
      style="
        width: 62.5%;
        margin: 0 auto;
        height: 0.5rem;
        display: flex;
        margin-top: 0.2rem;
      "
    >
      <div
        style="
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
        "
      >
        <span> 公司产品</span>

        <span class="bor_yellow"></span>
      </div>
      <div
        style="
          width: 5%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 0.14rem;
          color: gray;
        "
        @click="gocompany()"
      >
        更多>
      </div>
    </div>

    <div class="company">
      <div class="chanpin wid_100"></div>
    </div>

    <div
      style="
        width: 100%;
        height: 0.5rem;
        background: #f4f4f4;
        margin-top: 0.4rem;
      "
    >
      <div style="width: 62.5%; margin: 0 auto; height: 0.5rem; display: flex">
        <div
          style="
            width: 95%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
          "
        >
          <span> 项目案例</span>

          <span class="bor_yellow"></span>
        </div>
        <div
          style="
            width: 5%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-size: 0.14rem;
            color: gray;
          "
          @click="goitem()"
        >
          更多>
        </div>
      </div>
    </div>

    <div class="anli">
      <div class="compony_middle" style="width: 62.5%">
        <div
          class="compony_one"
          @mouseenter="mousein(item)"
          @mouseleave="mousele()"
          v-for="item in twolist"
          @click="gotoitem()"
          :key="item.id"
          :style="{
            'background-image': 'url(' + item.image1 + ')',
            'background-size': '100% 100%',
            position: 'relative',
          }"
        >
          <div
            style="
              height: 30%;
              width: 100%;
              position: absolute;
              bottom: 0rem;
              left: 0rem;
              background: rgb(0, 0, 0, 0.5);
            "
            class="dis_play"
            v-if="taco !== item.id"
          >
            {{ item.title }}
          </div>
          <div
            v-else
            style="
              width: 100%;
              height: 100%;
              background: rgb(0, 0, 0, 0.5);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            "
          >
            <div
              class="wid_100 dis_play"
              style="font-size: 0.25rem; height: 0.3rem"
            >
              {{ item.title }}
            </div>
            <button
              style="
                width: 50%;
                border: 1px solid white;
                background: rgb(194, 186, 186, 0.5);
                height: 0.3rem;
                color: white;
                margin-top: 0.1rem;
              "
            >
              查看详情
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      style="
        width: 62.5%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        margin-top: 0.2rem;
      "
    >
      <div
        style="
          width: 95%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
        "
      >
        <span> 服务流程</span>

        <span class="bor_yellow"></span>
      </div>
      <div
        style="
          width: 5%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 0.14rem;
          color: gray;
        "
        @click="goserve()"
      >
        更多>
      </div>
    </div>

    <div class="serve">
      <div></div>
      <div class="flow"></div>
      <div class="flow_center"></div>
      <div class="flow_two" style="padding: 0.1rem">
        <div class="flow_two_header" style="flex: 1">
          <img
            src="../../assets/首页/卡片圆圈.png"
            alt=""
            style="padding-left: 0.1rem"
          />
          <span style="font-weight: bold; font-size: 0.19rem"
            >提交您的需求,我们会尽快联系您</span
          >
          <img
            src="../../assets/首页/卡片圆圈.png"
            alt=""
            style="padding-right: 0.1rem"
          />
        </div>
        <div class="wid_100" style="flex: 1; font-size: 0.17rem">您的需求</div>
        <div
          class="wid_100"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
          "
        >
          <span class="col_style">项目类型</span>
          <el-select
            v-model="demand.type"
            placeholder="请输入项目类型"
            style="width: 85%"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.typename"
              :value="item.typename"
              split-button="true"
              click="command"
            >
            </el-option>
          </el-select>
        </div>
        <div class="wid_100 dis_sp_between" style="height: 0.5rem; flex: 1">
          <span class="col_style" style="margin: 0.1rem 0">项目预算</span>
          <div
            style="
              width: 85%;
              height: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span
              class="bg_col_y dis_play"
              style="height: 0.3rem; width: 0.8rem; margin: 0.1rem 0"
              v-for="two in money"
              :key="two.id"
              @click="gettitle(two)"
              :class="[demand.budget == two.title ? 'active' : '']"
              >{{ two.title }}</span
            >
          </div>
        </div>
        <div
          class="wid_100"
          style="
            display: flex;
            align-items: center;

            flex: 3;
            justify-content: space-around;
          "
        >
          <span style="align-self: flex-start" class="col_style">项目描述</span>
          <div style="width: 85%">
            <textarea
              name=""
              id=""
              class=""
              style="height: 0.5rem; width: 100%"
              v-model="demand.need"
            >
            </textarea>
            <el-form>
              <el-upload
                class="upload-demo"
                ref="upload"
                accept=".xls,.xlsx"
                action="1111"
                :http-request="getdetail"
                :file-list="fileList"
                name="file"
                :show-file-list="false"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >上传附件</el-button
                >

                <!-- <el-button
                  style="margin-left: 0.1rem"
                  size="small"
                  type="success"
                  @click="submitUpload"
                  >确定上传</el-button
                > -->
              </el-upload>
            </el-form>
          </div>
        </div>
        <div
          class="wid_100"
          style="
            display: flex;
            align-items: center;
            flex: 1;
            margin-top: 0.1rem;
          "
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
          <span class="col_style">公司名称</span>
          <el-input
            v-model="demand.company"
            placeholder="请输入内容"
            style="width: 85%"
          ></el-input>
        </div>
        <div
          class="wid_100"
          style="
            margin-top: 0.1rem;
            flex: 1;
            justify-content: space-between;
            display: flex;
            align-items: center;
          "
        >
          <span class="col_style">联系人</span>
          <el-input
            v-model="demand.username"
            placeholder="请留下您的姓名,以方便我们来联系您"
            style="width: 85%"
          ></el-input>
        </div>
        <div
          class="wid_100"
          style="
            margin-top: 0.1rem;
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <span class="col_style">联系电话</span>
          <el-input
            v-model="demand.phone"
            placeholder="请留下您的常用手机号"
            style="width: 85%"
          ></el-input>
        </div>

        <div
          style="
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            width: 80%;
            background: #ff933b;
          "
          class="mg_top handsup"
          @click="commit"

        >
          提交
        </div>
      </div>
    </div>

    <div class="last_second" style="margin-top: 0.05rem">
      <div class="left">
        <div class="boom">
          <router-link tag="div" to="/about/0">
            <h4 class="w_100 handsup">关于我们</h4></router-link
          >
          <ul class="font_14">
            <li>公司简介</li>
            <li>发展历程</li>
            <li>企业文化</li>
            <li>分公司</li>
            <li>招聘信息</li>
          </ul>
        </div>
        <div class="boom">
          <router-link tag="div" to="/technical">
            <h4 class="w_100 handsup">开发能力</h4></router-link
          >
          <ul class="font_14">
            <li>JAVA</li>
            <li>GOO</li>
            <li>C</li>
            <li>H5</li>
            <li>PHP</li>
            <li>VUE</li>
            <li>REACT</li>
            <li>SPring boot</li>
            <li>spring boot</li>
            <li>flutter</li>
          </ul>
        </div>
        <div class="boom">
          <router-link tag="div" to="/serve">
            <h4 class="w_100 handsup">服务领域</h4></router-link
          >

          <ul class="font_14">
            <li>JAVA</li>
            <li>GOO</li>
            <li>C</li>
            <li>H5</li>
            <li>PHP</li>
            <li>VUE</li>
            <li>REACT</li>
            <li>SPring boot</li>
            <li>spring boot</li>
            <li>flutter</li>
          </ul>
        </div>
        <div class="boom">
          <router-link tag="div" to="/project">
            <h4 class="w_100 handsup">项目案例</h4></router-link
          >

          <ul class="font_14">
            <li>JAVA</li>
            <li>GOO</li>
            <li>C</li>
            <li>H5</li>
            <li>PHP</li>
            <li>VUE</li>
            <li>REACT</li>
            <li>SPring boot</li>
            <li>spring boot</li>
            <li>flutter</li>
          </ul>
        </div>
        <div class="boom">
          <router-link tag="div" to="/contact">
            <h4 class="w_100 handsup">联系我们</h4></router-link
          >
          <ul class="font_14 w_100">
            <li class="w_100">
              <dl class="w_100">
                <dt class="w_100">潍坊分公司</dt>
                <dd class="w_100">13698621358</dd>
              </dl>
            </li>
            <li class="w_100">
              <dl class="w_100">
                <dt class="w_100">潍坊分公司</dt>
                <dd class="w_100">13698621358</dd>
              </dl>
            </li>
            <li class="w_100">
              <dl class="w_100">
                <dt class="w_100">潍坊分公司</dt>
                <dd class="w_100">13698621358</dd>
              </dl>
            </li>
            <li class="w_100">
              <dl class="w_100">
                <dt class="w_100">潍坊分公司</dt>
                <dd class="w_100">13698621358</dd>
              </dl>
            </li>
            <li class="w_100">
              <dl class="w_100">
                <dt class="w_100">潍坊分公司</dt>
                <dd class="w_100">13698621358</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="right"
        style="
          display: flex;
          align-items: center;

          justify-content: flex-start;
        "
      >
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-bottom: 1.5;
          "
        >
          <img
            src="../../assets/u109.png"
            alt=""
            style="width: 1.5rem; height: 1.5rem"
          />
          <span style="display: flex">扫码关注桥通天下微信公众号</span>
        </div>
      </div>
    </div>
    <div class="footer">
      山东桥通天下网络科技有限公司2016 All Right
      Reserved.鲁ICP6023850号-1《中华人民共和国电信业务经营许可证鲁B2-5354323》
    </div>
  </div>
</template>

<script>
import header_top from "../../components/Header/header_top";
import { Message } from "element-ui";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import {
  upload,
  tecdynamicInfo,
  protypelist,
  abaddNeed,
  serve,
} from "../../api/api";
export default {
  created() {
    serve().then((res) => {
      console.log(JSON.stringify(res), ".........................");
      this.titlelist = res;
    });
    tecdynamicInfo().then((res) => {
      console.log(JSON.stringify(res));
      this.common = res;
    });
    protypelist().then((res) => {
      console.log(JSON.stringify(res));
      this.options = res;
    });
  },
  name: "Home",
  components: {
    header_top,
    swiper,
    swiperSlide,
  },
  methods: {
    gotoitem() {
      this.$router.push({ name: "Project" });
    },
    goserve() {
      this.$router.push({ name: "Serve" });
    },
    goitem() {
      this.$router.push({ name: "Project" });
    },
    gocompany() {},
    gote() {
      this.$router.push({ name: "Technical" });
    },
    submitUpload() {
      this.$refs.upload.submit();
    },

    getdetail(file) {
      var _this = this;
      console.log("uploadFile", file);
      const formData = new FormData();
      formData.append("file", file.file);
      console.log(formData + "formData");
      upload(formData).then((res) => {
        _this.demand.annex = res;
        Message({
          message: "提交成功",
          type: "success",
          duration: 3 * 1000,
        });
        console.log(_this.demand.annex + "");
      });
    },

    commit() {
      abaddNeed(this.demand).then((res) => {
        console.log(JSON.stringify(res));
        Message({
          message: "上传成功",
          type: "success",
          duration: 3 * 1000,
        });
      });
    },
    gettitle(e) {
      this.demand.budget = e.title;
      console.log(e);
    },
    mousele() {
      this.taco = "";
    },
    mousein(e) {
      this.taco = e.id;
    },
    goex() {
      this.$router.push({ name: "Serve" });
    },
    expersiceDetail(e) {
      this.$router.push({ name: "Serve", params: { id: e.id } });
    },
    enter(e) {
      this.isShow = e.id;
    },
    leaver() {
      this.isShow = "";
    },
    godetail(e) {
      console.log(e.id);
      this.$router.push({ name: "Swiperdetail", params: { id: e.id } });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper;
  },
  data() {
    return {
      demand: {
        budget: "",
        type: "",
        need: "",
        annex: "",
        company: "",
        username: "",
        phone: "",
      },
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true, //允许分页点击跳转
        // },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      money: [
        { id: 0, title: "2万以下" },
        { id: 1, title: "2万-10万" },
        { id: 2, title: "10万-20万" },
        { id: 3, title: "20万以上" },
      ],
      common: [],
      fileList: [],
      input: "",
      options: [],

      value: "",
      isShow: "",
      taco: "",
      twolist: [
        {
          id: 0,
          title: "分销商城",
          image1: require("../../assets/首页/1.png"),
        },
        {
          id: 1,
          title: "原生app",
          image1: require("../../assets/首页/2.png"),
        },
        {
          id: 2,
          title: "微信小程序",
          image1: require("../../assets/首页/3.png"),
        },
        {
          id: 3,
          title: "微信公众号",
          image1: require("../../assets/首页/4.png"),
        },
        {
          id: 4,
          title: "企业官网",
          image1: require("../../assets/首页/5.png"),
        },
        {
          id: 5,
          title: "大数据平台",
          image1: require("../../assets/首页/6.png"),
        },
        {
          id: 6,
          title: "sass框架",
          image1: require("../../assets/首页/7.png"),
        },
        {
          id: 7,
          title: "工业物联网",
          image1: require("../../assets/首页/8.png"),
        },
        {
          id: 8,
          title: "客户端软件",
          image1: require("../../assets/首页/9.png"),
        },
        {
          id: 9,
          title: "嵌入式系统",
          image1: require("../../assets/首页/10.png"),
        },
      ],
      titlelist: [],
      imglist: [
        { id: 1, img: require("../../assets/banner图/banner.png") },
        { id: 2, img: require("../../assets/banner图/banner2.png") },
        { id: 3, img: require("../../assets/banner图/banner3拷贝.png") },
        { id: 4, img: require("../../assets/banner图/banner4.png") },
        { id: 5, img: require("../../assets/banner图/banner5.png") },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.handsup {
  cursor: pointer;
}
.mg_right {
  margin-right: 0.1rem;
}
.col_style {
  color: #666666;
}
.active {
  background: cornflowerblue !important;
  color: white !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 0.14rem;
  opacity: 0.75;
  line-height: 2rem;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
.login {
  width: 100%;
  height: 0.1rem;
  background: #2e2e2e;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
}
.mtp_10 {
  margin-top: 0.1rem;
}
.bg_col_y {
  background: #ffe2a5;
  border: none;
}
.bg_op {
  background: rgba(61, 59, 59, 0.5);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.col_white {
  color: white;
}
.small {
  width: 100%;
  height: 3rem;
}
@mixin w_100 {
  width: 100%;
}
.dis_play {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dis_sp_between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wid_100 {
  width: 100%;
}
@mixin dis_col {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
@mixin dis_col_center {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.font_14 {
  font-size: 0.14rem;
}
@mixin dis_play {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
}
ul {
  width: 100%;
}

li {
  height: 0.4rem;
}
.font_18 {
  font-size: 0.18rem;
}
.bor_yellow {
  width: 1.5rem;
  height: 0.1px;
  border: 1px solid #45a6fd;
  background: #45a6fd;
  border-radius: 50%;
  margin-top: -0.1rem;
  overflow: hidden;
}
.bor_yellow_another {
  width: 3rem;
  height: 1px;
  border: 1px solid rgba(223, 215, 139, 1);
  background: rgba(223, 215, 139, 1);
  border-radius: 50%;
  margin-top: -0.74rem;
}

.come {
  width: 100%;

  margin-top: 1.65rem;
}
.swiper-container {
  .swiper-pagination {
  }

  img {
    width: 100%;
    height: 100%;
  }
  width: 100%;
  height: 6rem;
  background: rgba(215, 215, 215, 1);
}
.last_second {
  width: 100%;
  height: 6rem;
  display: flex;
  background: #2e2e2e;
  color: white;
  .left {
    padding-right: 0.3rem;
    width: 70%;
    height: 100%;
    // background: red;
    @include dis_play;
    .boom {
      width: 13%;
      height: 80%;
      @include dis_col;
    }
  }
  .right {
    width: 30%;
    height: 100%;
    //  background:yellow;
  }
}
.footer {
  border-top: 1px solid white;
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  color: white;
}
.serve {
  font-size: 0.16rem;
  margin-top: 0.2rem;
  width: 100%;
  height: 5rem;
  background: rgba(215, 215, 215, 1);
  background: url(../../assets/首页/hands.png) no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .flow {
    width: 6.8rem;
    height: 4.8rem;
    background: url(../../assets/首页/组11.png) no-repeat;
    background-size: 100% 100%;
  }
  .flow_center {
    width: 0.2rem;
    height: 100%;
  }
  .flow_two {
    background: white;
    width: 5.5rem;
    height: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 0.1rem gray;
    .flow_two_header {
      overflow: hidden;
      width: 100%;
      height: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.anli {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: #f4f4f4;
  .compony_middle {
    width: 70%;
    margin: 0 auto;
    height: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .compony_one {
      color: white;
      background: rgba(242, 242, 242, 1);
      width: 18%;
      height: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.company {
  margin-top: 0.2rem;
  .chanpin {
    height: 5rem;
    background: url(../../assets/首页/banner11.png) no-repeat center;
    background-size: 100% 100%;
  }
  width: 100%;
  height: 5.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background: white;
  .compony_middle {
    width: 62.5%;
    margin: 0 auto;
    height: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    .compony_one {
      color: white;
      background: rgba(242, 242, 242, 1);
      width: 18%;
      height: 48%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.power {
  margin-top: 0.2rem;
  background: url(../../assets/首页/矩形4拷贝4.png) no-repeat center;
  background-size: 100% 100%;
  width: auto;
  height: 6rem;
  // border: 1PX solid black;
  .power_one {
    padding: 0.1rem;
    width: 2.86rem;
    height: 5.2rem;
    background: white;
    display: flex;
    flex-direction: column;
    span {
      font-size: smaller;
    }
  }
}
.experience {
  width: 62.5%;
  margin: 0 auto;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .middle {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
    background: white;

    .midde_one {
      width: 22%;
      height: 49%;
      background: rgba(242, 242, 242, 1) url(../../assets/oip.jpg) no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
  }
}
</style>
