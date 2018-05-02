<template>
  <div class="num1">
    <div class="mun2">欢迎来到班有我（你）</div>
    <form>
      <br />
      用户名:<input type="text" style="height: 50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="usename"/>
      <br />
      <br />
      密码:<input type="text" style="height:50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="password"/>
      <br />
      <br />
      学号:<input type="text" style="height:50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="studentnumber" />
      <br/>
      <br/>
    </form>
    <div>
      <button class="login" @click="Login($event)">登录</button>
      <p>如果没有账号，请先<button class="toregister" @click="toregister">注册</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      usename: '',
      password: '',
      studentnumber: ''
    }
  },
  methods: {
    Login: function (event) {

    },
    toregister: function () {
      this.$router.replace({path: '/Register'})
    }
  }
}
</script>

<style scoped>
.mun2 {
  right: auto;
  font-size: 30px;
}
</style>
