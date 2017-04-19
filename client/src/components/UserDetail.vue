<template lang="html">
  <div class="userprofile">
    <p>Username : {{ users.username }}</p>
    <p>Password : {{ users.email }}</p>
    <p>Artile yang telah Anda Buat : </p>
    <div class="article-user" v-for="article in users.article">
      <h3>{{ article.title }}</h3>
      <p>{{ article.content }}</p>
      <el-button type="text" @click="dialogVisible = true">Edit</el-button>

      <el-dialog title="Tips" v-model="dialogVisible" size="small">
        <span>Edit Article</span>
        <el-form ref="ruleForm2" label-width="80px" class="demo-ruleForm">

          <el-form-item label="Title" prop="age">
            <el-input type="text" v-model="article.title"></el-input>
          </el-form-item>

          <el-form-item label="Description" prop="age">
            <el-input type="textarea" v-model="article.content"></el-input>
          </el-form-item>

        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>

    </div><!-- batas perulangan -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dialogVisible: false,
      profile_id: this.$route.params.id,
      users: ''
    }
  },
  methods: {
    getUser() {
      let self = this
      axios.get(`http://localhost:3000/users/user/${this.profile_id}`)
        .then(function(res) {
          // console.log(res.data);
          self.users = res.data.data
          console.log("------- +++ jhdjhsdh",self.users);
        }).catch(function(err) {
          console.log(err);
        })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style lang="css">
.userprofile {
    text-align: left;
    padding-left: 15px;
}
.article-user {
    width: 540px;
}
</style>
