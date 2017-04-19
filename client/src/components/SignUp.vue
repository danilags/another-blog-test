<template lang="html">
  <div class="animated fadeIn">
    <h1>Sign up / Register</h1>
    <el-row>
      <div class="form">
        <el-form label-width="120px" class="demo-ruleForm">

          <el-form-item label="Username" prop="username">
            <el-input type="text" auto-complete="off" v-model="dataUser.username"></el-input>
          </el-form-item>

          <el-form-item label="Email" prop="email">
            <el-input type="text" auto-complete="off" v-model="dataUser.email"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off" v-model="dataUser.password"></el-input>
          </el-form-item>

          <el-button class="btn-login" type="success" @click="signUp()">Sign up</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataUser: {
        username: '',
        email: '',
        password: ''
      },
      statusError: false
    }
  },
  methods: {
    signUp() {
      let self = this
      if (self.dataUser.username == '' || self.dataUser.password == '') {
        self.showError("Username or Password can not empty !")
      } else {
        axios.post('http://localhost:3000/users', self.dataUser)
             .then(function(res) {
               if (res.data.success) {
                 window.localStorage.setItem('token', res.data.token)
                 window.localStorage.setItem('id', res.data.id)
                 window.localStorage.setItem('username', res.data.username)
                 window.location.reload()
                 window.location.href = 'http://localhost:8080/';
               } else {
                 self.showError("Username has already taken! Choose another username..")
               }
             }).catch(function(err) {
               console.log(err);
             })
      }
    },
    showError(message) {
      this.$message({
        showClose: true,
        message: message,
        type: 'error'
      })
    }
  },
  mounted() {
    this.signUp()
  }

}
</script>

<style lang="css">
h1 {
    text-align: center;
}
.btn-login {
  float: right;
}
.form{
  width: 40%;
  margin: 0 auto;
}
</style>
