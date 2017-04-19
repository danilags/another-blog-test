<template lang="html">
  <div class="beranda">
    <h2>Welcome</h2>
    <div class="list-article">
      <el-row>
        <el-col :span="10">
          <ul v-for="article in articles">
            <li><h3>{{ article.title }}</h3></li>
            <li>{{ article.content }}</li>
            <li>By : <b>{{ article.author.username }}</b></li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles() {
      let self = this
      axios.get('http://localhost:3000/articles')
           .then(function(res) {
             res.data.forEach(function(data) {
               console.log("---- ",data);
               self.articles.push(data)
             })
           }).catch(function(err) {
             console.log(err);
           })
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style lang="css">
.list-article ul {
    list-style: none;
    text-align: left;
}
</style>
