<template>
  <div
    class="container"
    :style="{ height: height + 'PX', width: width + 'PX' }"
  >
    <div class="logo">
      <img src="../assets/登录页/logo2.png" alt="" />
    </div>
    <div class="login">
      <el-form
        :label-position="labelPosition"
        label-width="80PX"
        :model="formLabelAlign"
      >
        <div class="wid_100 col_blue">用户名登录</div>
        <el-form-item label="" class="wid_100">
          <el-input
            v-model="array.phone"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="wid_100">
          <el-input
            v-model="array.password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="" class="wid_100" style="display:flex">
          <el-input
          style="width:70%;color:red"
            v-model="array.code"
            placeholder="验证码"
          ></el-input>
          <el-input
           style="width:30%;"
            :placeholder="array.vcode"
            disabled
          ></el-input>
        </el-form-item>
        <el-button
          class="wid_100"
          type="primary"
          style="background: #007fe1"
          @click="gohome"
          :disabled="isdisable ? true : false"
          :loading="isloading ? true : false"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>
<script>
import { qrcode,vCode } from "../api/api.js";
export default {
  created() {
    let _this = this
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    vCode().then((res)=>{
      console.log(JSON.stringify(res))
      _this.array.vcode = res.code
    })
    
  },
  data() {
    return {
     
      token:'',
      name:'',
      isdisable: false,
      isloading: false,
      width: window.innerWidth,
      height: window.innerHeight,
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      array: {
        phone: "",
        password: "",
        code: '',
        vcode: '',
      },
    };
  },
  methods: {
    gohome() {
    qrcode(this.array).then((res)=>{
      this.token = res.token;
      this.name = res.name;
        console.log(JSON.stringify(res)+1111)
          window.localStorage.setItem("Token",this.token);
          window.localStorage.setItem("UserName",this.name);
          this.isdisable = true;
          this.isloading = true;
          setTimeout(() => {
            this.$router.push({ name: "Home" });
          }, 2000);
    })
      // this.$axios
      //   .post("http://web.zhangjitiao.top/api/login/login", this.array)
      //   .then((response) => {
      //     console.log(JSON.stringify(response));
      //   
      //   })
      //   .catch((response) => {
      //     console.log(response);
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
.col_blue {
  color: #009fe1;
}
.wid_100 {
  width: 100%;
}
.bor_one {
  border: 1PX solid black;
}
.container {
  background: url("../assets/登录页/背景.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;

  .logo {
    padding: 20PX 0 0 20PX;
    width: 100%;
    height: 100PX;
    // border: 1PX solid black;
  }
  .login {
    flex: 1;
    // border: 1PX solid black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 200PX;

    .el-form {
      width: 400PX;
      height: 300PX;
      border: 8PX solid #7dbef6;
      background: white;
      padding: 20PX;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      // border-bottom: 1PX solid #7dbef6!important ;
      // box-shadow: 10PX 10PX 1PX #7dbef6;
    }
  }
}
</style>