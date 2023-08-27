<template >
  <div class="home"> <!-- head -->
    <div class="head">head</div>
    <div class="box">

      <!-- 左侧 -->
      <!-- 用户信息 -->
      <div class="user">
        <div class="userInfo">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span id="username">username</span>
          <span id="lever">lv6</span>
        </div>
        <!-- 用户msg -->
        <span id="userMsg">这里是用户签名地区11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</span>
        <!-- 文章列表 -->
        <ul>
          <li class="title">文章列表</li>
          <li class="preview">1111111111</li>
          <li class="preview">1111111111</li>
          <li class="preview">1111111111</li>
        </ul>
      </div>
      <!-- 中间 -->
      <div class="main">
        <div v-for="( item , index ) in mainMassage"
             :key="item.id">
          <!-- 中间单条信息 -->
          <div class="contentMsg">
            <img src="
http://web-ffisher.oss-cn-hangzhou.aliyuncs.com/1.jpg"
                 alt="">
            <div class="msg">
              <h2>{{index}}.{{item.main}}</h2>
            </div>
          </div>
        </div>
        <div v-html="html"></div>
      </div>
      <!-- 右边 -->
      <div class="details">
        <el-button type="success"
                   id="write"
                   @click="writeClick">WRITE</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'homeIndex',
  components: {
  },
  data () {
    return {
      content: '', // 输入的markdown
      html: '' // 及时转的html
    }
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      console.log(this.content)
      console.log(this.html)
    },
    // 跳转upload界面
    writeClick () {
      this.$router.push('/upload')
    }
  },
  mounted () {
  },
  computed: {
    mainMassage: function () {
      return this.$store.state.main.mainMassage
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* write按钮 */
#write {
  width: 240px;
  height: 80px;
  color: green;
}
/* 中间条信息 */
.contentMsg {
  display: flex;
  margin-bottom: 6px;
  height: 245px;
  border-radius: 6px;
  background-color: rgb(202, 140, 140);
  overflow: hidden;
}
.contentMsg img {
  width: 40%;
  object-fit: cover;
}
.contentMsg .msg {
  background-color: rgb(173, 132, 132);
  height: 100%;
  width: 60%;
}

.head {
  margin: 0 auto;
  margin-bottom: 6px;
  width: 1240px;
  height: 40px;
  background-color: pink;
}
/* 文章列表 */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
}
ul .title {
  display: block;
  margin-top: 6px;
  background-color: antiquewhite;
  height: 30px;
  width: 240px;
  list-style-type: none;
  border-radius: 6px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  color: black;
}
ul .preview {
  display: block;
  margin-top: 6px;
  background-color: antiquewhite;
  height: 60px;
  width: 240px;
  list-style-type: none;
  border-radius: 6px;
  /* text-align: center; */
}
#username {
  white-space: nowrap; /*强制单行显示*/
  text-overflow: ellipsis; /*超出部分省略号表示*/
  overflow: hidden; /*超出部分隐藏*/
  width: 80px; /*设置显示的最大宽度*/
}
#lever {
  font-weight: 900;
  color: red;
}
#userMsg {
  display: inline-block;
  padding: 12px;
  width: 216px;
  height: 150px;
  word-break: break-all;
  white-space: normal;
  background-color: pink;
  border-radius: 6px;
  margin-top: 6px;
  text-overflow: ellipsis; /*超出部分省略号表示*/
}
.box {
  display: flex;
  margin: 0 auto;
  width: 1240px;
  background-color: rgb(150, 217, 255);
  justify-content: space-between;
  border-radius: 5px;
}
.user {
  position: sticky;
  top: 2px;
  left: 2px;
  float: left;
  margin: 6px;
  display: block;
  height: 1000px;
  width: 240px;
  background-color: #d3c3c3;
  border-radius: 5px;
}
.user .userInfo {
  display: flex;
  width: 240px;
  border-radius: 6px;
  background-color: antiquewhite;
}
.user .userInfo span {
  margin-left: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 40px;
}
.details {
  float: right;
  margin: 6px;
  display: block;
  width: 240px;
  background-color: #d3c3c3;
  border-radius: 5px;
}
.main {
  margin: 6px;
  display: block;
  width: 760px;
  background-color: #d3c3c3;
  border-radius: 5px;
}
</style>
