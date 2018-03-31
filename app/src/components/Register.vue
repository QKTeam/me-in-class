<template>
    <div class="register">
        <h2>注册</h2>
        <h4>用户名：</h4>
        <input type="text" placeholder="请输入姓名" v-model="username">
        <h4>学号：</h4>
        <input type="text" placeholder="请输入学号" v-model="studentnumber">
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
    name:'Register',
    data () {
        return {
            username:'',
            studentnumber:'',
            password:'',
            password2:'',
            tips:''
        }
    },
    methods: {
        register: function () {

        },
        isEqual: function () {
            if (this.password != this.password2) {
                this.tips = 'wrong'
            } else {
                this.tips = ''
            }
        }
    }
}
    // var password1 = document.getElementById('password1');
    // var password2 = document.getElementById('password2');
    // if (password1 != password2) {
    //
    // }
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
