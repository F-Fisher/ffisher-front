<template>
  <div class="box">
    <div class="user">
      <div class="userInfo">

        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span>username</span>
      </div>
    </div>
    <div class="main">name</div>
    <div class="details">details</div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex'
}
</script>

<style>
.box {
  display: flex;
  margin: 0 auto;
  width: 1240px;
  background-color: rgb(216, 209, 210);
  justify-content: space-between;
  border-radius: 5px;
}
.user {
  margin: 6px;
  display: block;
  height: 1500px;
  width: 240px;
  background-color: #d3c3c3;
  border-radius: 5px;
}
.user .userInfo {
  display: flex;
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
