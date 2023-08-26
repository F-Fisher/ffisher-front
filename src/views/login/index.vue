<template>
  <div>
    <section>
      <!-- 底部背景 -->
      <img src="http://web-ffisher.oss-cn-hangzhou.aliyuncs.com/login.jpg"
           class="bg">
      <!-- 登录表单 -->
      <div class="login">
        <h2>Sign In</h2>
        <div class="inputBox">
          <input type="text"
                 placeholder="Username"
                 v-model="username">
        </div>
        <div class="inputBox"
             id="pass">
          <input type="password"
                 placeholder="PassWord"
                 v-model="password">
        </div>
        <div class="inputBox">
          <input type="submit"
                 value="Login"
                 id="btn"
                 @click="login">
        </div>
        <div class="group">
          <router-link to="/signup"> Sign up </router-link>
          <a href="#">Forget PassWord</a>
        </div>
      </div>
      <!-- 动态效果 -->
      <div class="flower"></div>
    </section>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 登录栏
      username: '',
      password: ''
    }
  },
  methods: {
    async login () {
      // this.$router.push('/test') // 点击即登录
      const res = await login(this.username, this.password)
      console.log(res)// 登录请求token打印 后期删除
      if (res.code === 1) {
        this.$store.commit('user/setUserInfo', res.data)
        this.$router.push('/test')
      } else {
        alert(res.msg)
      }
    }
  }

}
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
/* 背景铺满 */
section .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 登录容器基本架子 */
.login {
  position: relative;
  width: 500px;
  min-height: 300px;
  padding: 60px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0, 25);
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}
/* 登录表单 */
/* 大标题样式 */
.login h2 {
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  color: #8f2c24;
  margin-bottom: 10px;
}
/* 输入框样式 */
.login .inputBox {
  position: relative;
}
.login .inputBox input {
  position: relative;
  width: 100%;
  padding: 15px 20px;
  outline: none;
  font-size: 1.25em;
  color: #8f2c24;
  border-radius: 5px;
  background: #fff;
  border: none;
  margin-bottom: 30px;
}
/* 提示词按钮样式 */
.login .inputBox ::placeholder {
  color: #8f2c24;
}
.login .inputBox #btn {
  position: relative;
  border: none;
  outline: none;
  background: #8f2c24;
  color: #fff;
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 500;
}
/* 忘记密码 */
.login .group {
  display: flex;
  justify-content: space-between;
}
.login .group a {
  font-size: 1.25em;
  color: #8f2c24;
  font-weight: 500;
  text-decoration: none;
}
</style>
