<template lang="html">
  <div class="navigasi">
    <el-menu theme="light" class="el-menu-demo" mode="horizontal">
    <router-link to="/"><el-menu-item index="1">Home</el-menu-item></router-link>
    <router-link to="/questions"><el-menu-item index="2">Question</el-menu-item></router-link>
    <router-link to="/jobs"><el-menu-item index="2">Jobs</el-menu-item></router-link>
    <router-link to="/jobs"><el-menu-item index="2">Documentation</el-menu-item></router-link>
    <router-link :to="'/user/'+ idUser"><el-menu-item style="float: right;" index="3">{{ username }}</el-menu-item></router-link>
    <router-link to="/signup"><el-menu-item class="button" style="float: right;" index="4" v-if="statusLogin == false">Sign up</el-menu-item></router-link>
    <router-link to="/login"><el-menu-item  style="float: right;" index="3" v-if="statusLogin == false">Login</el-menu-item></router-link>
    <el-menu-item @click="logout()"  style="float: right;" index="3" v-if="statusLogin == true">Logout</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  props: ['statusLogin', 'username', 'idUser'],
  methods: {
    logout() {
      localStorage.clear()
      window.location.reload()
      window.location.href = 'http://localhost:8080/'
    }
  }

}
</script>

<style lang="css" scopped>
img.logo-stack {
    width: 75px;
    height: auto;
    margin-top: -9px;
}
</style>
