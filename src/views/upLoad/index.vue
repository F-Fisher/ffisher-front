<template>
  <div>
    <!-- <div class="head"
         ></div> -->

    <mavon-editor v-model="content"
                  ref="md"
                  @change="change"
                  id="markDown" />
    <el-button id="submit"
               @click="submit">提交</el-button>

  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'upLoad',
  data () {
    return {
      content: '', // 输入的markdown
      html: '' // 及时转的html
    }
  },
  components: {
    mavonEditor
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
    }
  }
}
</script>

<style>
#markDown {
  margin: 0 auto;
  margin-bottom: 20px;
  height: 700px;
  width: 1240px;
}
#submit {
  display: block;
  width: 1240px;
  margin: 0 auto;
}
</style>
