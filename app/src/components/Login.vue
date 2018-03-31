<template>
  <div class="num1">
    <div class="mun2">欢迎来到班有我（你）</div>
    <form>
      <br />
      账号:<input type="text" style="height: 50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="usename"/>
      <br />
      <br />
      密码:<input type="text" style="height:50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="password"/>
      <br />
      <br />
      学号:<input type="text" style="height:50px;width: 200px;background-color: #FFD700;border-color: black;" v-model="studentnumber" />
      <br/>
      <br/>
    <form>
      <input type="reset" value="芝麻关门" style="height: 50px;width: 100px;background-color:cornflowerblue;;border-radius: 20%;" />
      <input type="submit" value="芝麻开门" onclick="return checkuser()" style="height: 50px; width: 100px;background-color:cornflowerblue;border-radius: 20%;"/>
      <p href="#">如果没有账号，请点击<a href="#">注册</a></p>
    </form>
    </form>
  </div>
</template>

<script>
  export default {
      name: 'Login',
      data () {
          return {
            usename:'',
            password:'',
            studentnumber:''
        }
      },
      methods: {
        Login:function () {

        }
      }
  }
</script>

<style scoped>
  .mun2{
    right: auto;
    font-size: 30px;
  }
</style>
