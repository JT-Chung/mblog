<template>
  <div class="goodmood">
    <Header></Header>
    <layout class="content">
      <Row>
        <Col span="18">
          <Col span="24">
            <div class="whitebg lanmu">
              <img src="../../static/images/xqsb.jpg" />
              <h1>彼岸花开又一村</h1>
              <p>
                花开彼岸本无岸，魂落忘川犹在川。醉里不知烟波浩，梦中依稀灯火寒。
              </p>
            </div>
          </Col>
          <Col span="24" class="bloglist">
            <!--newslist-->
            <div class="layui-col-xs12 whitebg zhuanti">
              <h2 class="htitle">最新博文</h2>
              <ul>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/mz.jpg"
                    /></a>
                  </i>
                  <b>那年，未来遥远得没有形状，我们单纯得没有烦恼。</b>
                  <span>
                    有些人总会来 有些人在我心中在徘徊 我拿了总会还 你拿了就逃开
                    在失去中我慢慢的变呆 是不同步的未来
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/ct.jpg"
                    /></a>
                  </i>
                  <b>我们就是这样苍老的，从时光的一端辗转到时光的另一端。</b>
                  <span>
                    青春像是一个五光十色，充满能量的大魔方，不断诱惑着我们去探寻，因为我们的未来不可限量，我们拥有属于自己的一本青春纪念册。
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/xt1.jpg"
                    /></a>
                  </i>
                  <b>请别说再见，有些故事有些人不需要再见。 </b>
                  <span>
                    一个明媚，一个忧伤，一个华丽，一个冒险，一个倔强，一个柔软，最后那个正在成长。
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/qt.jpg"
                    /></a>
                  </i>
                  <b
                    title="每个班总有几个喜欢整天黏在一起，而且会不顾形象大笑大闹的疯子。"
                  >
                    每个班总有几个喜欢整天黏在一起，每个集体也是这样。
                  </b>
                  <span>
                    我怀念过去的你们，怀念留在雨中的花季。怀念曾经的你们带来的一切，夹带悲欢一去不回的昨天，穿过我仓皇的青春。
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/dt.jpg"
                    /></a>
                  </i>
                  <b>让那段温暖的青春年月，淌在幽幽的岁月之中。</b>
                  <span>
                    我们无需作答，就让那段温暖的青春年月，淌在我们的内心里，淌在幽幽的岁月之中。
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
                <li>
                  <i class="ztpic">
                    <a href="" target="_blank"
                      ><img src="../../static/images/ct.jpg"
                    /></a>
                  </i>
                  <b>那年的我们，那么快乐，那么简单。</b>
                  <span>
                    那年的我们，在青青的草坪横七八歪的谈笑打闹，那么快乐，那么简单，让我怀念!
                  </span>
                  <a href="" target="_blank" class="readmore">文章阅读</a>
                </li>
              </ul>
            </div>
            <PageList></PageList>
          </Col>
        </Col>
        <Col span="6" style="padding-left: 20px">
          <Col span="24">
            <Ranking></Ranking>
            <Recommend></Recommend>
            <TAG></TAG>
            <GuseeLike></GuseeLike>
            <SiteCount></SiteCount>
          </Col>
        </Col>
      </Row>
    </layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Ranking from "@/components/list/Ranking"
import Recommend from "@/components/list/Recommend"
import TAG from "@/components/list/TAG"
import GuseeLike from "@/components/list/GuseeLike"
import SiteCount from "@/components/public/SiteCount"
import PageList from "@/components/public/PageList"

export default {
  name: "GoodMood",
  components: {
    PageList,
    SiteCount,
    GuseeLike,
    TAG,
    Recommend,
    Ranking,
    Footer,
    Header,
  },
  data() {
    return {}
  },
  // components: {
  //     Header: () => import( '@/views/BlogList.vue'),
  //     Footer: () => import('@/views/GoodMood.vue')
  // }
}
</script>

<style scoped></style>
