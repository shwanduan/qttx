<template>
  <div class="container font_16">
    <header_top></header_top>
    <div class="banner"></div>
    <div class="header">
      <span class="icon iconfont">&#xe600;</span>
      <span style="margin-left:10PX">当前位置：员工手册</span>
      
    </div>

    <div class="center">
      <div class="center_header">
        <div
          class="onedetail"
          v-for="item in list"
          :key="item.id"
          @click="choase(item)"
          :class="[item.id == bigclickid ? 'big_active' : '']"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        v-if="bigclickid == 0"
        style="width: 100%; height: 1225PX; display: flex"
      >
        <div
          style="
            width: 65%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          "
        >
          <div class="left" style="width: 10%; height: 500PX">
            <div
              :class="[one.id == changeone ? 'active_one' : '']"
              class="leftone dis_play"
              @click="changeoneone(one)"
              style="
                width: 100%;
                height: 50PX;
                margin-top: 2PX;
                background: #f2f2f2;
              "
              v-for="one in listone"
              :key="one.id"
            >
              {{ one.systemname }}
            </div>
          </div>
          <div class="right">
            <div style="width: 100%; height: auto">
              <!-- <span>    {{ companyDetail.department }}</span> -->
              <span v-html="companyDetail.content">
                {{ companyDetail.content }}</span
              >
              <!-- <span>  {{ companyDetail.systemname }}</span>
              <span> {{ companyDetail.name }}</span>
              <span> {{ companyDetail.createtime }}</span> -->
            </div>

            <!-- 为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。
            为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。
            为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。 -->
          </div>
        </div>
      </div>

      <div
        v-if="bigclickid == 1"
        style="width: 100%; height: 1225PX; display: flex"
      >
        <div
          style="
            width: 65%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          "
        >
          <div class="left" style="width: 10%; height: 500PX">
            <div
              :class="[one.id == changetwo ? 'active_one' : '']"
              class="leftone dis_play"
              @click="changeoneTwo(one)"
              style="
                width: 100%;
                height: 50PX;
                margin-top: 2PX;
                background: #f2f2f2;
                font-size: 15PX;
              "
              v-for="one in listtow"
              :key="one.id"
            >
              {{ one.name }}
            </div>
          </div>
          <div class="right">
            <div class="" style="width: 100%; height: 100%; display: flex">
              <div
                v-for="boardone in board"
                :key="boardone.id"
                class=""
                style="
                  width: 18%;
                  height: 200PX;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                "
              >
                <a :href="`http://web.zhangjitiao.top${boardone.content}`">
                  <img src="../static/about/muban.png" alt="" />
                  <div
                    style="
                      width: 100%;
                      display: flex;
                      justify-content: center;
                      color: black;
                    "
                  >
                    {{ boardone.filename }}
                  </div>
                </a>
              </div>

              <!-- {{ boardone.id }}
              {{ boardone.modifytime }}
              {{ boardone.filename }}
              {{ boardone.name }}
              {{ boardone.writename }} -->
            </div>

            <!-- 为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。
            为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。
            为加强公司的规范化管理，完善各项工作制度，促进公司发展壮大，提高经济效益，根据国家有关法律、法规及公司章程的规定，特制订本公司管理制度大纲。
            一、公司全体员工必须遵守公司章程，遵守公司的各项规章制度和决定。
            二、公司倡导树立“一盘棋”思想，禁止任何部门、个人做有损公司利益、形象、声誉或破坏公司发展的事情。
            三、公司通过发挥全体员工的积极性、创造性和提高全体员工的技术、管理、经营水平，不断完善公司的经营、管理体系，实行多种形式的责任制，不断壮大公司实力和提高经济效益。
            四、公司提倡全体员工刻苦学习科学技术和文化知识，为员工提供学习、深造的条件和机会，努力提高员工的整体素质和水平，造就一支思想新、作风硬、业务强、技术精的员工队伍。
            五、公司鼓励员工积极参与公司的决策和管理，鼓励员工发挥才智，提出合理化建议。
            六、公司实行“岗薪制”的分配制度，为员工提供收入和福利保证，并随着经济效益的提高逐步提高员工各方面待遇；公司为员工提供平等的竞争环境和晋升机会；公司推行岗位责任制，实行考勤、考核制度，评先树优，对做出贡献者予以表彰、奖励。
            七、公司提倡求真务实的工作作风，提高工作效率；提倡厉行节约，反对铺张浪费；倡导员工团结互助，同舟共济，发扬集体合作和集体创造精神，增强团体的凝聚力和向心力。
            八、员工必须维护公司纪律，对任何违反公司章程和各项规章制度的行为，都要予以追究。 -->
          </div>
        </div>
      </div>
      <div
        v-if="bigclickid == 2"
        style="width: 100%; height: 1225PX; display: flex"
      >
        <div
          style="
            width: 65%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          "
        >
          <div class="left" style="width: 10%; height: 500PX">
            <div
              :class="[one.id == changethird ? 'active_one' : '']"
              class="leftone dis_play"
              @click="changeoneThree(one)"
              style="
                width: 100%;
                height: 50PX;
                margin-top: 2PX;
                background: #f2f2f2;
                font-size: 15PX;
              "
              v-for="one in listthird"
              :key="one.id"
            >
              {{ one.name }}
            </div>
          </div>
          <div class="right" style="display: flex; flex-wrap: wrap">
            <div
              class=""
              style="
                width: 200PX;
                height: 200PX;
                display: flex;
                margin-left: 20PX;
                border-radius: 5PX;
                overflow: hidden;
              "
              v-for="item in study"
              :key="item.id"
            >
              <video
                :src="item.annex"
                width="200PX"
                height="200PX"
                v-on:click="playClick()"
                id="myvideo"
                autoplay
                controls
                style="background: rgba(58, 58, 56, 0.5)"
              ></video>
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
import {
  learn,
  system,
  modelnorm,
  learninfo,
  mansystem,
  manmodelnormInfo,
} from "../api/api";

export default {
  created() {
    system().then((res) => {
      console.log(JSON.stringify(res) + "这是公司制度");
      this.listone = res;
      let changeones = this.listone.map((item) => {
        return item.id;
      });
      this.changeone = changeones.shift();
      mansystem({ id: this.changeone }).then((res) => {
        console.log(JSON.stringify(res) + "这是created中的公司制度");
        this.companyDetail = res;
      });
    });
  },
  components: {
    Footer,
    header_top,
  },
  data() {
    return {
      _dom: "",
      listthird: [],
      listone: [],
      changeone: 0,
      bigclickid: "0",
      bigclicktitle: "",

      listtow: [],
      list: [
        { id: 0, title: "公司规范" },
        { id: 1, title: "模板规范" },
        { id: 2, title: "培训学习" },
      ],
      learnDetail: [],
      companyDetail: "",
      study: "",
      board: [],
      changeone: "",
      changetwo: "",
      changethird: "",
    };
  },
  methods: {
    playClick() {
      this._dom = document.getElementById("myvideo");
      this.isPlay = !this.isPlay;
      this._dom.play();
    },
    choase(e) {
      this.bigclickid = e.id;
      console.log(e.id);
      this.bigclicktitle = e.title;
      if (e.id == 0) {
        system().then((res) => {
          console.log(JSON.stringify(res) + "这是公司制度");
          this.listone = res;
        });
      } else if (e.id == 1) {
        modelnorm().then((res) => {
          console.log(JSON.stringify(res) + "这是模板规范");
          this.listtow = res;
          let listtows = this.listtow.map((item) => {
            return item.id;
          });
          this.changetwo = listtows.shift();
          manmodelnormInfo({ type: this.changetwo }).then((res) => {
            console.log(JSON.stringify(res));
            this.board = res;
          });
        });
      } else if (e.id == 2) {
        learn().then((res) => {
          console.log(JSON.stringify(res) + "这是培训学习");
          this.listthird = res;
          let listthirds = this.listthird.map((item) => {
            return item.id;
          });
          this.changethird = listthirds.shift();
          learninfo({ stype: this.changethird }).then((res) => {
            console.log(JSON.stringify(res) + "这是培训学习");
            this.study = res;
          });
        });
      }
    },
    changeoneone(e) {
      this.changeone = e.id;
      mansystem({ id: e.id }).then((res) => {
        console.log(JSON.stringify(res));
        this.companyDetail = res;
      });
      // learninfo({ id: e.id }).then((res) => {
      //   console.log(JSON.stringify(res));
      //   this.learnDetail = res;
      // });
    },
    changeoneTwo(e) {
      this.changetwo = e.id;
      manmodelnormInfo({ type: this.changetwo }).then((res) => {
        console.log(JSON.stringify(res));
        this.board = res;
      });
    },
    changeoneThree(e) {
      this.changethird = e.id;
      learninfo({ stype: this.changethird }).then((res) => {
        console.log(JSON.stringify(res) + "这是培训学习");
        this.study = res;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.bor_one {
  border: 1PX solid black;
}
.right {
  width: 86%;
  height: 100%;
  background: #f8f8f8;
  padding: 10PX;
  text-indent: 2em;
  line-height: 30PX;
}
.active_one {
  background: #0b61ff !important;
  color: white !important;
}
.dis_play {
  display: flex;
  justify-content: center;
  align-items: center;
}
.big_active {
  background: #ffaf15 !important;
  color: white !important;
}
@mixin dis_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  .banner {
    width: 100%;
    height: 500PX;
    background: url(../assets/员工手册/banner.png);
    margin-top: 170PX;
  }
  .header {
    width: 100%;
    height: 50PX;
    padding: 0 360PX;
    background: #eeeeee;
    display: flex;
    align-items: center;
  }
  .center {
    width: 100%;
    height: 1430PX;
    // background: yellow;
    .center_header {
      display: flex;
      justify-content: center;
      align-items: center;
      .onedetail {
        width: 200PX;
        height: 50PX;
        background: #f2f2f2;
        @include dis_center;
        margin-left: 2PX;
        color: #666666;
      }
      width: 100%;
      height: 78PX;
      // background: blueviolet !important;
    }
  }
}
</style>