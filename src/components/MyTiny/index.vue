<template>
  <div class="tinymce-editor">
    <Editor v-model="myValue"
            :init="init"
            :api-key="apiKey"
            :disabled="disabled" />
    <button @click="onClick()">测试</button>
  </div>
</template>

<script>
// import { fileUpload } from '@/api/cms'
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'

// import 'tinymce/themes/modern/theme'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/image' // 插入上传图片插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/link' // 超链接插件
import 'tinymce/plugins/code' // 代码块插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/contextmenu' // 右键菜单插件
import 'tinymce/plugins/wordcount' // 字数统计插件
import 'tinymce/plugins/colorpicker' // 选择颜色插件
import 'tinymce/plugins/textcolor' // 文本颜色插件
import 'tinymce/plugins/fullscreen' // 全屏
// import 'tinymce/plugins/help' // 帮助
import 'tinymce/plugins/charmap'

import 'tinymce/plugins/print' // 打印
import 'tinymce/plugins/preview' // 预览
import 'tinymce/plugins/hr' // 水平线

import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/noneditable'
// import 'tinymce/plugins/save'
// import 'tinymce/plugins/tabfocus'
// import 'tinymce/plugins/textpattern'
// import 'tinymce/plugins/template'

import 'tinymce/plugins/advlist' // 高级列表
import 'tinymce/plugins/anchor' // 锚点
import 'tinymce/plugins/autolink' // 自动链接
import 'tinymce/plugins/autoresize' // 编辑器高度自适应,注：plugins里引入此插件时，Init里设置的height将失效
import 'tinymce/plugins/autosave' // 自动存稿
// import 'tinymce/plugins/charmap' // 特殊字符
// import 'tinymce/plugins/code' // 编辑源码
import 'tinymce/plugins/codesample' // 代码示例
import 'tinymce/plugins/directionality' // 文字方向
import 'tinymce/plugins/emoticons' // 表情
import 'tinymce/plugins/fullpage' // 文档属性
// import "tinymce/plugins/fullscreen"; //全屏
import 'tinymce/plugins/help' // 帮助
// import 'tinymce/plugins/hr' //水平分割线
import 'tinymce/plugins/importcss' // 引入css
import 'tinymce/plugins/insertdatetime' // 插入日期时间
// import 'tinymce/plugins/link' //超链接
// import 'tinymce/plugins/lists' //列表插件
// import 'tinymce/plugins/media' //插入编辑媒体
// import 'tinymce/plugins/image' // 插入图片
import 'tinymce/plugins/nonbreaking' // 插入不间断空格
import 'tinymce/plugins/pagebreak' // 插入分页符
import 'tinymce/plugins/paste' // 粘贴插件
// import 'tinymce/plugins/preview' //预览
// import 'tinymce/plugins/print' //打印
import 'tinymce/plugins/quickbars' // 快速工具栏
import 'tinymce/plugins/save' // 保存
import 'tinymce/plugins/searchreplace' // 查找替换
// import 'tinymce/plugins/spellchecker'  //拼写检查，未加入汉化，不建议使用
import 'tinymce/plugins/tabfocus' // 切入切出，按tab键切出编辑器，切入页面其他输入框中
// import 'tinymce/plugins/table' //表格
import 'tinymce/plugins/template' // 内容模板
// import 'tinymce/plugins/textcolor' //文字颜色
import 'tinymce/plugins/textpattern' // 快速排版
import 'tinymce/plugins/toc' // 目录生成器
import 'tinymce/plugins/visualblocks' // 显示元素范围
import 'tinymce/plugins/visualchars' // 显示不可见字符
// import 'tinymce/plugins/wordcount' //字数统计

export default {
  name: 'MyTiny',
  components: {
    Editor
  },
  props: {
    // 传入一个value，使组件支持v-model绑定
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default:
        'lists image media table textcolor wordcount contextmenu preview'
    },
    toolbar: {
      type: [String, Array],
      default:
        "undo redo |  formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat table| fontsizeselect | fontselect'"
    }
  },
  data () {
    return {
      apiKey: 'jzlds2e6urz6akm9wxp4f70mnwg83d8fovsialqazxowyity',
      // 配置文件服务器的静态访问路径前缀
      // static_web_preurl: 'http://localhost/files/hxzy_img/',
      // 初始化配置
      init: {
        placeholder: '在这里输入文字',
        language_url: '/tinymce/langs/zh-Hans.js', // 汉化路径
        language: 'zh_CN',
        skin_url: '/tinymce/skins/ui/oxide',
        height: 1200, // 编辑器高度，可以考虑获取窗口高度，以适配不同设备屏幕
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        media_live_embeds: true,
        content_style: 'img {max-width:100%;} html{background-color: #fff;}', // 直接自定义可编辑区域的css样式
        images_upload_url: '/api/attch/upload',
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        // plugins: this.plugins,
        // toolbar: this.toolbar,
        // @ts-nocheckplugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        plugins:
          'advlist anchor autolink autosave code codesample colorpicker  contextmenu directionality toc  fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount',
        // toolbar:'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat | table',
        toolbar: [
          'searchreplace bold italic underline strikethrough fontselect fontsizeselect  alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample',
          'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'
        ],
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt', // 第二步
        font_formats:
          "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
        branding: false,
        elementpath: false, // 隐藏底栏的元素路径
        // inline: true, //开启内联模式
        // icons: 'custom',
        menubar: true,

        file_picker_types: 'media'
      },
      myValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.myValue = newValue
    },
    myValue (newValue) {
      this.$emit('input', newValue)
    }
  },
  mounted () {
    tinymce.init({})
  },
  methods: {
    onClick (e) {
      this.$emit('onClick', e, tinymce)
      console.log(tinymce.editors[0].selection.getBookmark())
      tinymce.editors[0].getContent()
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear () {
      this.myValue = ''
    }
  }
}
</script>
<style scoped>
.tinymce-editor {
  padding: 0 100px;
}
</style>
