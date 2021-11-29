<template>
  <div class="about_div">
    <Header></Header>
    <Layout class="content">
      <div class="whitebg about">
        <div class="ab_box">
          <i class="avatar_pic"
            ><a><img src="../../static/images/avatar.jpg"/></a
          ></i>
          <h3>我是神明</h3>
          <p>一个90后的菜菜菜菜鸟！code for web !</p>
          <p>目前在无锡这座城，说实话，我并不喜欢它</p>
        </div>
        <h2 class="gd_title">个人独白</h2>
        <p class="ab_dubai"></p>
        <p>
          喜欢用的昵称：iicy。
          博客名可能会改，但是目前肯定不会。这个博客网站呢主要用来记录生活日记，后续会将其打造成一个可以互动的平台。所以请记住这个域名！不忘初心、心存感激，开心、难过、激动、不甘...都在新的一年继续发酵！
          &nbsp;
        </p>
        <p></p>
        <p></p>
        <h2 class="gd_title">我能做的</h2>
        <ul class="xinlu">
          <li>
            <a
              ><i><img src="../../static/images/qt.jpg"/></i>
              <p>当过服务员</p>
              <span>是的，那是我第一份工作，蛮刺激的哈哈哈！ </span>
            </a>
          </li>
          <li>
            <a
              ><i><img src="../../static/images/dt.jpg"/></i>
              <p>还是服务员</p>
              <span
                >没错，我想我可能有些荒诞，连续干了两年----------------------------的暑假工都是服务员，没有看不起服务员这个职务，只是，我很不喜欢。
              </span>
            </a>
          </li>
          <li>
            <a
              ><i><img src="../../static/images/ad02.jpg"/></i>
              <p>升级啦</p>
              <span
                >2019-2020年间兼职了一些工作，最想炫耀的一份兼职当然不是快递员，而是我的第一份兼职。是一个成人考试的监考官的助手...负责考试的顺利进行，为什么喜欢呢，因为它不累哈哈哈!
              </span>
            </a>
          </li>
          <li>
            <a
              ><i><img src="../../static/images/ad02.jpg"/></i>
              <p>当过志愿者</p>
              <span
                >那当然是我吹的，我怎么会当过志愿者呢，献血都没鲜过...
              </span>
            </a>
          </li>
        </ul>
        <p></p>
        <h2 class="gd_title">我的博客</h2>
        <ul class="myblog">
          <li>
            <b>创建时间</b>
            <p>2021年10月01日</p>
            <p>
              <a href="/" class="buttons">主页</a>
            </p>
          </li>
          <li>
            <b>主题模板</b>
            <p>
              <a>你好生活</a>
            </p>
            <p>
              <a href="" class="buttons">我的心冰冰的</a>
            </p>
          </li>
          <li>
            <b>精神小菜</b>
            <p>王者农药</p>
            <p>
              <a class="buttons">扩展性强 全静态</a>
            </p>
          </li>
          <li>
            <b>服务器商</b>
            <p>腾讯云</p>
            <a href="https://cloud.tencent.com/" rel="nofollow" class="buttons"
              >去看看</a
            >
          </li>
          <li>
            <b>最后改版</b>
            <p>
              <a>2021年10月04号</a>
            </p>
            <a class="buttons">改变才会进步</a>
          </li>
        </ul>
      </div>
    </Layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "about",
  components: {
    Footer,
    Header,
  },
}
</script>

<style scoped></style>
