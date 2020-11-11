<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="header"></div>
    <div class="title">
      <div style="width:63%;height:100%;margin:0 auto;display:flex;align-items:center;font-size:.16rem">
        <span class="icon iconfont">&#xe600;</span>
        <span class="col_self" style="margin-left: 0.1rem">
          当前位置：关于我们></span
        >
        <span style="color: blue"> {{ clicktitle }}</span>
      </div>
    </div>
    <div class="center">

    <!-- 左边信息 -->
      <div
        style="width: 15%; display: flex; flex-direction: column; height: 3rem"
      >
        <div
          style="width: 100%; height: 0.5rem; margin-top: 0.05rem;font-size:.16rem"
          :class="[
            item.id == clickid ? 'active' : '',
            'self',
            'dis_center',
            'bg_left',
            'handsup'
          ]"
          v-for="item in list"
          :key="item.id"
          @click="changedetail(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <!-- 右边信息 -->

      <!-- 0 -->
      <div
        style="width: 80%; margin-left: 0.6rem; height: 7rem; overflow-y: auto"
        v-if="clickid == 0"
        v-html="bodys.content"
      >
        {{ bodys.content }}
      </div>

      <!-- 1 -->
      <div
        style="
          width: 80%;
          margin-left: 0.6rem;
          height: 9rem;
          overflow-y: auto;
        "
        v-if="clickid == 1"
      >
        <!-- <div >
          {{ two.content }}
        </div> -->
        <div style="height: 80%; margin: auto 0; color:blue;margin-top:.3rem">
          <el-steps direction="vertical" class="stepActive">
            <!-- <el-step title="步骤 1" ></el-step>
            <el-step title="步骤 2"></el-step> -->
            <el-step
              v-for="two in bodys"
              :key="two.id"
              :title="two.title"
              :description="ToText(two.content)"
            ></el-step>
          </el-steps>
        </div>
      </div>

      <!-- 2 -->
      <div
        style="
          width: 80%;
          margin-left: 0.6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 10rem;
        "
        v-if="clickid == 2"
      >
        <div
          v-for="cultureone in bodys"
          :key="cultureone.id"
          style="width: 100%; flex-direction: column"
        >
          <div
            style="
              width: 100%;
              height: 0.4rem;
            
              margin-top: 0.1rem;
            
           
              background: rgba(84,183,255,0.4);
              font-size:.18rem;
           
            "
          >
          <div style="rgba(105,114,231,0.1);width:50%;height:100%;background:rgba(242,220,196,0.9);  display: flex;
              align-items: center;  border-radius: 0 0.4rem 0.4rem 0;    color: white;padding-left:.1rem"> 
                {{ cultureone.title }}
          </div>
           
         
          </div>
          <div
            v-html="cultureone.content"
            style="margin-top: 0.1rem"
          >
            {{ cultureone.content }}
          </div>
        </div>
      </div>


      
      <div
        style="width: 80%; margin-left: 0.6rem; height: 25rem"
        class=""
        v-if="clickid == 3"
      >
         
        <div
          style="
            width: 95%;
            height: 3rem;
            padding: 0.2rem;
            border: 1px solid #d7d6db;
            border-radius: 0.15;
            margin: 0.2rem auto;
          "
          
          @mouseenter="change(item)"
          v-for="item in filiale"
          :key="item.id"
          :class="[item.id == changeid ? 'activeone' : '']"
        >
             
          <div style="border-bottom: 1px solid #d7d6db; margin-bottom: 0.15rem;font-size:.16rem">
                            {{ item.cname }}             
          </div>  
                        
          <div style="width: 100%; height: 2.5rem">
                     
            <li
              style="
                width: 100%;
                display: flex;
                height: 0.2rem;
                align-items: center;
                margin-top: 0.1rem;
                
              "
              class="font_16"
            >
              <div style="width: 15%">地址：</div>
              <div style="width: 85%">{{ item.city }}</div>
            </li>
                          
            <li
              style="
                width: 100%;
                display: flex;
                height: 0.2rem;
                align-items: center;
              "
              class="m_top font_16"
            >
              <div style="width: 15%">业务负责人：</div>
              <div style="width: 85%">{{ item.name }}</div>
            </li>
                          
            <li
              style="
                width: 100%;
                display: flex;
                height: 0.2rem;
                align-items: center;
              "
              class="m_top font_16"
            >
              <div style="width: 15%">业务联系电话：</div>
              <div style="width: 85%">{{ item.phone }}</div>
            </li>
                          
            <li style="width: 100%; height: 1rem;display:flex" class="m_top font_16">
              <div style="width: 12%; display: inline-block;white-space:nowrap">
                主要业务领域：
              </div>
              <div style="width: 88%; " class="txt_int2">
                {{item.business}}
              </div>
            </li>
                        
          </div>
                  
        </div>
              
      </div>
      <div
        style="width: 70%; height: 7rem; margin-left: 0.6rem"
        class="warp warp_cont"
        v-if="clickid == 4"
      >
        <div
          v-for="activityone in bodys"
          :key="activityone.id"
          class="wid_30 mg_left dis_colone mt_20 box_shw bor_dd"
          @click="goactiveDetail(activityone)"
        >
          <div style="height: 70%" class="wid_100">
            <img
              :src="`http://web.zhangjitiao.top${activityone.content}`"
              alt=""
              class="wid_100 height_100"
            />
          </div>
          <div style="height: 20%" class="wid_100 col_black col_b6 font_16 txt_int2">
            {{ activityone.title }}
          </div>
          <div style="height: 10%" class="wid_100 flex_end clo_go size">
            {{ activityone.createtime | dateFormat }}
          </div>
        </div>
      </div>

      <!-- 招聘信息 -->
      <div
        style="
          width: 80%;
          margin-left: 0.6rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 8rem;
          overflow-y: auto;
        "
        class="warp text_over"
        v-if="clickid == 5"
      >
        <div
          v-for="Recruitmentone in Recruitment"
          :key="Recruitmentone.id"
          class="wid_48 over_hidder mt_20 dis_colone bg_ugly"
          @click="gopayforman(Recruitmentone)"
          @mouseenter="getactive(Recruitmentone)"
          :class="[Recruitmentone.id == activeid ? 'activecome':'']"
          style="padding:.1rem"
        >
          <div class="wid_100 flex_one dis_around bor_bot">
            <span> {{ Recruitmentone.jobtitle }} </span>
            <span class="color_red">
              {{ Recruitmentone.min }} - {{ Recruitmentone.max }}</span
            >
          </div>
          <div
            class="wid_100 flex_three size dis_colone try"
          >
            {{ ToText(Recruitmentone.requirements) }}
          </div>
          <div
            class="wid_100"
            style="
              display: flex;
              justify-content: space-around;
              align-items: center;
            "
          >
            <span
              style="
                padding: 0.05rem 0.15rem;
                height: 0.2rem;
                color: #b5b5b5;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: 0.05rem;
              "
            >
              {{ Recruitmentone.area }}</span
            >
            <span
              style="
                padding: 0.05rem 0.15rem;
                height: 0.2rem;
                
               color: #b5b5b5
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: 0.05rem;
              "
            >
              {{ Recruitmentone.education }}</span
            >
            <span
              style="
                padding: 0.05rem 0.15rem;
                height: 0.2rem;
               
               color: #b5b5b5
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-radius: 0.05rem;
              "
            >
              {{ Recruitmentone.experience }}</span
            >
            <span style="color: #b5b5b5; font-size: 0.15rem">更多></span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../../components/Footer";
import header_top from "../../components/Header/header_top";
import ToText from "../../utils/change.js";
import { ababout, abcompany, abrecruitment } from "../../api/api";
export default {
  created() {
    //    console.log(this.$route.params.id)
    this.clickid = this.$route.params.id;
    console.log(this.clickid + "这是传过来的值");
    if (this.clickid == 0) {
      ababout({ state: 1 }).then((res) => {
        console.log(JSON.stringify(res) + "00000000");
        this.bodys = res.data;
        console.log(JSON.stringify(res.titles) + "first");
        this.clicktitle = res.titles;
      });
    }
    if (this.clickid == 1) {
      ababout({ state: 2 }).then((res) => {
        console.log(JSON.stringify(res));
        this.bodys = res.data;
        console.log(JSON.stringify(res.title) + "first");
        this.clicktitle = res.titles;
      });
    }
    if (this.clickid == 2) {
      ababout({ state: 3 }).then((res) => {
        console.log(
          JSON.stringify(res.data),
          "..............................."
        );
        this.bodys = res.data;
        this.clicktitle = res.titles;
      });
    }
    if (this.clickid == 3) {
      abcompany().then((res) => {
        console.log(res);
        delete res.titles;
        console.log("res: ", res);
        this.filiale = Object.values(res);
        this.clicktitle = res.titles;
      });
    }
    if (this.clickid == 4) {
      ababout({ state: 4 }).then((res) => {
        console.log(JSON.stringify(res));
        this.bodys = res.data;
        this.clicktitle = res.titles;
      });
    }
    if (this.clickid == 5) {
      abrecruitment().then((res) => {
        
        this.clicktitle = res.titles;
        delete res.titles
         this.Recruitment = Object.values(res);
      });
    }
  },
  mounted() {
    console.log(this.clickid + "clickid");
  },
  components: {
    Footer,
    header_top,
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log("this.$route.params.id", this.$route.params.id);
        this.clickid = this.$route.params.id;
        console.log(this.clickid + "这是传过来的值");
        if (this.clickid == 0) {
          ababout({ state: 1 }).then((res) => {
            console.log(JSON.stringify(res) + "00000000");
            this.bodys = res.data;
            console.log(JSON.stringify(res.titles) + "first");
            this.clicktitle = res.titles;
          });
        }
        if (this.clickid == 1) {
          ababout({ state: 2 }).then((res) => {
            console.log(JSON.stringify(res));
            this.bodys = res.data;
            console.log(JSON.stringify(res.title) + "first");
            this.clicktitle = res.titles;
          });
        }
        if (this.clickid == 2) {
          ababout({ state: 3 }).then((res) => {
            console.log(
              JSON.stringify(res.data),
              "..............................."
            );
            this.bodys = res.data;
            this.clicktitle = res.titles;
          });
        }
        if (this.clickid == 3) {
          abcompany().then((res) => {
            console.log(res);
            delete res.titles;
            console.log("res: ", res);
            this.filiale = Object.values(res);
            this.clicktitle = res.titles;
          });
        }
        if (this.clickid == 4) {
          ababout({ state: 4 }).then((res) => {
            console.log(JSON.stringify(res));
            this.bodys = res.data;
            this.clicktitle = res.titles;
          });
        }
        if (this.clickid == 5) {
          abrecruitment().then((res) => {
            console.log(JSON.stringify(res), "000000000000000000000000");
            this.Recruitment = res;
            this.clicktitle = res.titles;
          });
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    getactive(e){
        this.activeid = e.id
    },
    change(e) {
      this.changeid = e.id;
    },
    gopayforman(e) {
      this.$router.push({ name: "gopayforman", params: { id: e.id } });
    },
    goactiveDetail(e) {
      this.$router.push({ name: "activeDetails", params: { id: e.id } });
    },
    ToText(HTML) {
      var input = HTML;
      return input
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");
    },
    changShow(e) {
      this.hasSeclected = e.id;
      this.show = false;
    },
    changeback() {
      this.show = true;
      this.hasSeclected = "";
    },
    changedetail(e) {
      this.clickid = e.id;
      this.clicktitle = e.title;
      if (e.id == 0) {
        ababout({ state: 1 }).then((res) => {
          console.log(JSON.stringify(res));
          this.bodys = res.data;
        });
      }
      if (e.id == 1) {
        ababout({ state: 2 }).then((res) => {
          console.log(JSON.stringify(res));
          this.bodys = res.data;
        });
      }
      if (e.id == 2) {
        ababout({ state: 3 }).then((res) => {
          console.log(JSON.stringify(res));
          this.bodys = res.data;
        });
      }
      if (e.id == 3) {
        abcompany().then((res) => {
          console.log(JSON.stringify(res), "11111111111111");

          delete res.titles;
          console.log("res: ", res);
          this.filiale = Object.values(res);
          console.log("this.filiale: ", this.filiale);
          // this.filiale = res;
          console.log(typeof this.filiale);
        });
      }
      if (e.id == 4) {
        ababout({ state: 4 }).then((res) => {
          console.log(JSON.stringify(res));
          this.bodys = res.data;
        });
      }
      if (e.id == 5) {
        abrecruitment().then((res) => {
          console.log(JSON.stringify(res),'招聘信息');
          delete res.titles
         this.Recruitment = Object.values(res)
        });
      }
    },
  },
  data() {
    return {
      activeid:'',
      changeid: "",
      hasSeclected: "",
      show: true,
      Recruitment: [],
      filiale: [],
      activity: [],
      culture: [],
      history: [],
      bodys: {},
      clickid: 0,
      clicktitle: "",

      img: [
        {
          id: 0,
          image1: require("../../static/about/2.png"),
          title: "济南分公司",
        },
        {
          id: 1,
          image1: require("../../static/about/2.png"),
          title: "临沂分公司",
        },
        {
          id: 2,
          image1: require("../../static/about/2.png"),
          title: "上海分公司",
        },
        {
          id: 3,
          image1: require("../../static/about/1.png"),
          title: "青岛分公司",
        },
        {
          id: 4,
          image1: require("../../static/about/1.png"),
          title: "潍坊分公司",
        },
      ],
      list: [
        { id: 0, title: "公司简介" },
        { id: 1, title: "发展历程" },
        { id: 2, title: "企业文化" },
        { id: 3, title: "分公司" },
        { id: 4, title: "企业活动" },
        { id: 5, title: "招聘信息" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.el-step.is-vertical.stepActive{
   .el-step__head.is-finish{
     .el-step__line{
       // 当前步骤数横线样式设置
       .el-step__line-inner{
         width: 50% !important;
         border-width: 1px !important;
       }
     }
     // 当前步骤数圆圈样式设置
     .el-step__icon.is-text{
       background: #409eff;
       color:#fff;
     }
   }
 }

.handsup{
  cursor: pointer;
}
.activecome{
  box-shadow: 0 0 .1rem gray!important;
}
@import url(../../scss/one.scss);

.none {
  display: none;
}
.m_top {
  margin-top: 0.2rem;
}
li::before {
  content: "●";
  color: blue;
}
li {
  list-style: none;
}
.flex_one {
  flex: 1;
}
.flex_three {
  flex: 3;
}
.dis_col {
  display: flex;
  flex-direction: column;
}
.mt_20 {
  margin: 0.2rem 0;
}
.wid_48 {
  width: 43%;
  height: 2rem;
}
// .over_hidder {
//   overflow: hidden;
// }
.warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.wid_40 {
  width: 40%;
  height: 2rem;
}
.col_self {
  color: blue($color: #000000);
}
.self {
  width: 100%;
  height: 0.5rem;
}
.activeone {
  box-shadow: 0 0 0.1rem gray;
}
.active {
  background: blue !important;
  color: white !important;
}

.dis_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin dis_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  .header {
    margin-top: 1.65rem;
    width: 100%;
    height: 5rem;
    background: url(../../assets/about/Aboutus.png);
  }
  .title {
    width: 100%;
    height: 0.5rem;
    background: #eeeeee;
    display: flex;
    align-items: center;
    color: #b3b3b3;
  }
  .center {
    width: 62.5%;
    margin: .2rem auto;
    display: flex;
  }
}
</style>
