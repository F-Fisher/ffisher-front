<template>
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
      <div class="massage"
           :key="item"
           v-for="item in 7">
      </div>
    </div>
    <!-- 右边 -->
    <div class="details">details</div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex'
}
</script>

<style>
.main::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0, 2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.main::-webkit-scrollbar-thumb {
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.main::-webkit-scrollbar {
  width: 6px;
}
.main {
  height: 900px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.main .massage {
  background-color: #fff;
  margin-top: 6px;
  border-radius: 6px;
  height: 300px;
  width: 732px;
}
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
  margin: 6px;
  display: block;
  /* height: 1500px; */
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
