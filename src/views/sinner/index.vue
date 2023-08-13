<template>
  <!-- 陈会玩罪行 -->
  <div>
    <h1>陈会玩忏悔屋</h1>
    <div class="room">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in list"
                          :key="index">
          <div class="info">
            <span><img :src="item.img"
                   alt=""></span>
            <h2>{{item.msg}}</h2>
          </div>

        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import { Carousel } from 'element-ui'
Vue.use(Carousel)
export default {
  name: 'sinnerIndex',
  data () {
    return {
      list: [{
        img: 'https://img1.imgtp.com/2023/08/12/MWhEXWF5.PNG',
        msg: '小卖铺龙娘骚扰者'
      },
      {
        img: 'https://img1.imgtp.com/2023/08/12/DGzK8NgB.jpg',
        msg: '小卖铺龙娘骚扰者'
      }, {
        img: 'https://img1.imgtp.com/2023/08/12/TPYwo6MK.jpg',
        msg: '小卖铺龙娘骚扰者'
      }]
    }
  }
}
</script>

<style scoped>
.info img {
  width: 200px;
  height: 200px;
  margin: 20px;
  object-fit: scale-down;
}
.info {
  display: flex;
}
h1 {
  text-align: center;
}
.room {
  margin: 0 auto;
  width: 700px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
