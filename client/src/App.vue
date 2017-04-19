<template>
  <div id="app">
    <nav-tab :statusLogin="statusLogin" :username="username" :idUser="id_user"></nav-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import NavTab from './components/NavTab'

export default {
  data() {
    return {
      statusLogin : false,
      username: localStorage.getItem('username'),
      id_user: localStorage.getItem('id')
    }
  },
  components: {
    NavTab
  },
  methods: {

  },
  mounted() {
    if (window.localStorage.getItem('token')) {
      this.statusLogin = true
    } else {
      this.statusLogin = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
