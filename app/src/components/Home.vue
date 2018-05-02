<template>
  <div class="Home">
    <div class="top">
      <div class="top-left">
      </div>
      <div class="ComeIn">
        <button class="Login">Login</button>
      </div>
    </div>
    <div class="navbar">
      <button class="studentinfo" @click="studentinfodown">学生信息</button>
      <button class="uploadfile" @click="uploadfiledown">上传文件</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  date () {
    return {

    }
  },
  methods: {
    studentinfodown: function () {
      this.$router.replace({path: '/studentinfo'})
    },
    uploadfiledown: function () {
      this.$router.replace({path: '/uploadfile'})
    }
  }
}
</script>

<style scoped>
.Home {
  width: 100%;
  height: 100%;
}
.top{
  top: 0px;
  position: absolute;
  height: 15%;
  width: 100%;
}
.top-left{
  position: absolute;
  width: 80%;
  height: 100%;
  font-size: 30px;
  color: black;
}

.ComeIn {
  width: 100px;
  height: 50px;
  background-color: red;
  float: right;
}

</style>
