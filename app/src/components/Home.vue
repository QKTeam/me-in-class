<template>
  <div class="Home">
    <div class="head">
      <div class="logo">
        <p>Logo</p>
      </div>
      <button type="button" name="Login" class="Loginbutton" @click="tologin">Login</button>
    </div>
    <div class="guide">
      <button type="button" name="studentinfo" @click="tostudentinfo">学生信息</button>
      <button type="button" name="Uploadfile" @click="touploadfile">文件上传</button>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    tologin: function () {
      this.$router.push('/Login')
    },
    tostudentinfo: function () {
      this.$router.push('/Home/Studentinfo')
    },
    touploadfile: function () {
      this.$router.push('/Home/Uploadfile')
    }
  }
}
</script>

<style scoped>
.Home {
  margin: 0 0;
  height: auto;
}
.head {
  height: 50px;
  margin: 0 auto 30px auto;
  vertical-align: middle;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
}
.Loginbutton {
  float: right;
}
</style>
