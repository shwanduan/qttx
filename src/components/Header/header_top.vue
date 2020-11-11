<template>
  <div class="container">
    <div class="login">
      <div style="width: 62.5%; height: 100%; margin: 0 auto;display:flex;align-items:center;justify-content:flex-end">
        <span
          v-if="hastoken"
          style="
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin-right: 0.5rem;
          "
        >
          
          <span style="margin-left: 0.1rem;font-size:.16rem;display:flex;align-item:center" class="">用户  {{ name }}</span>
        </span>
        <span v-else style="padding-right: 0.4rem" @click="gologin()"
        class="handsup"
          >登录</span
        >
      </div>
    </div>
    <div style="width:100%;margin:0 auto;background:rgba(242,242,242)" >
       <el-menu
       ref="menu"
      :default-active=defaultActive
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color=" rgba(242, 242, 242, 1)"
      text-color="#333333"
      active-text-color="#0b61ff"
      router
    >
      <div class="left">
        <img
          src="../../assets/u3.png"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about/0" >关于我们</el-menu-item>
      <el-menu-item index="" disabled>产品中心</el-menu-item>
      <el-menu-item index="/technical"> 技术能力 </el-menu-item>
      <el-menu-item index="/serve"> 服务领域 </el-menu-item>
      <el-menu-item index="/project"> 项目案例 </el-menu-item>
      <el-menu-item index="/industry"> 行业动态 </el-menu-item>
      <el-menu-item index="/contact"> 联系我们 </el-menu-item>
      <el-menu-item index="/employee" v-if="hastoken"> 员工手册 </el-menu-item>
       </el-menu>
    </div>
    
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  created() {
    if (window.localStorage.getItem("Token")) {
      console.log(window.localStorage.getItem("Token"));
      console.log(window.localStorage.getItem("UserName"));
      this.hastoken = true;
    } else {
      this.hastoken = false;
    }
  },
  mounted(){
    this.$nextTick(() => {
    console.log('mounted this.refs.menu: ', this.$refs);
    console.log('path----->',this.$route);
    const firstRoutePath = this.$route.meta.activeMenu
    if (firstRoutePath){
      const fullPath = this.$route.fullPath
      // const firstPathIndex = this.menus.findIndex((i) => fullPath.indexOf(i.path) != -1)
      // if (firstPathIndex != -1){
      //   this.defaultActive = `${firstPathIndex}`
      //   return
      // }
      // const isInPath = fullPath.indexOf(firstRoutePath)
      // if(firstRoutePath && isInPath != -1){
      if(firstRoutePath){
        console.log('------------');
        this.defaultActive = firstRoutePath
      }else{
        this.defaultActive = this.$route.path
      }
    }else{
      this.defaultActive = this.$route.path
    }
    })    
  },
  data() {
    return {
      hands:false,
      isshow: false,
      list: [
        { id: 0, title: "公司简介" },
        { id: 1, title: "发展历程" },
        { id: 2, title: "企业文化" },
        { id: 3, title: "分公司" },
        { id: 4, title: "企业活动" },
        { id: 5, title: "招聘信息" },
      ],
      name: window.localStorage.getItem("UserName"),
      hastoken: false,
      activeIndex: "1",
      activeIndex2: "1",
      defaultActive: '/home',
      menus:[
        {
          path:'/home',
          title: '首页',
        },
        {
          path:'/about',
          title: '关于我们',
        },
        {
          path:'/technical',
          title: '技术能力',
        },
        {
          path:'/serve',
          title: '服务领域',
        },
        {
          path:'/project',
          title: '项目案例',
        },
        {
          path:'/industry',
          title: '行业动态',
        },
        {
          path:'/contact',
          title: '联系我们',
        },
        {
          path:'/employee',
          title: '员工手册',
        },
      ]
    };
  },
  methods: {
    deletl() {
      this.isshow = true;
    },
    clear() {
      window.localStorage.PXoveItem("Token");
      window.localStorage.PXoveItem("UserName");
      setTimeout(() => {
        this.$router.push({ name: "Login" });
      }, 2000);
    },
    GoAbout(e) {
      this.$router.push({
        name: "About",
        params: {
          id: e.id,
        },
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style lang="scss" scoped>
.handsup{
  cursor:pointer;
}
.hov {
  width: 1rem;
  height: 2rem;
}
.bor_one {
  border: 1px solid black;
}
.container {
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .login {
    width: 100%;
    height: 0.4rem;
    background: #53525a;
    z-index: 100;
    color: white;
  }
  .el-menu {
    .el-menu-item {
    }
    width: 62.5%;
    margin:0 auto;
    height: 1.2rem;
    display: flex;
    // justify-content: center;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(242, 242, 242, 1);
    font-size: 0.14rem;
    color: #333333;
    .right {
      position: relative;
      left: 0.1rem;
    }
    .left {
      // position: relative;
      // right: 0.8rem;
    }
  }
}
</style>