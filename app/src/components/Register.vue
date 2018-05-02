<template>
    <div class="register">
        <h2>注册</h2>
        <h4>用户名：</h4>
        <input type="text" placeholder="请输入姓名" v-model="name">
        <h4>学号：</h4>
        <input type="text" placeholder="请输入学号" v-model="student_number">
        <h4>请输入密码：</h4>
        <input type="text" placeholder="请输入密码" v-model="password">
        <h4>请再次输入密码：</h4>
        <input type="text" placeholder="请确认密码" v-model="password2" @input="isEqual">
        <p>{{tips}}</p>
        <br/><br/>
        <button type="button" class="button" @click="register">注册</button>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      student_number: '',
      password: '',
      password2: '',
      tips: '',
      student_id: ''
    }
  },
  methods: {
    register: function () {
      event.preventDefault()
      let formData = new FormData()
      formData.append('name', this.name)
      formData.append('student_number', this.student_number)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$http.post('/register', formData, config)
        .then((response) => {
          this.student_id = response.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    isEqual: function () {
      if (this.password !== this.password2) {
        this.tips = 'wrong'
      } else {
        this.tips = ''
      }
    }
  }
}
</script>

<style scoped>
    .register {
        border-style: solid;
        border-width: 5px;
    }
    .button {
        height: 20px;
        width: 50px;
    }
</style>
