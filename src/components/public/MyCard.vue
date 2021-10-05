<template>
  <div class="mycard">
    <h2>我的名片</h2>
    <p>网名：S M | SHENMING</p>
    <p>职业：YINGGUO QIGAI</p>
    <p>现居：江苏省-无锡市</p>
    <p>Email：2983254768@qq.com</p>
    <ul class="linkmore">
      <li>
        <a><Icon type="md-home" title="博客首页"/></a>
      </li>
      <li>
        <a><Icon type="md-mail" title="我的邮箱"/></a>
      </li>
      <li>
        <a><Icon type="ios-musical-notes" title="听音乐"/></a>
      </li>
      <li id="weixin">
        <a><Icon type="ios-chatbubbles-outline" title="关注我的微信"/></a>
        <i class="lasti"><img src="../../../static/images/wx.jpg"/></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyCard",
}
</script>

<style scoped></style>
