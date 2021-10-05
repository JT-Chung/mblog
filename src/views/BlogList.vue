<template>
  <div class="BlogList">
    <Header></Header>
    <layout class="content">
      <Row>
        <Col span="18">
          <Col span="24">
            <div class="whitebg lanmu">
              <img src="../../static/images/bkrj.jpg" />
              <h1>这又是谁的故事</h1>
              <p>
                花开了，我便画花。花谢了，我便画我自己！
              </p>
            </div>
          </Col>
          <Col span="24" class="bloglist">
            <!--newslist-->
            <div class="layui-col-xs12 whitebg">
              <h2 class="htitle">最新博文</h2>
              <ul>
                <li>
                  <h3 class="blogtitle">
                    <b>【顶】</b>
                    <router-link
                      to="/detail"
                      title="那些消失了的岁月，仿佛隔着一块积着灰尘的玻璃，看得到，抓不着。"
                    >
                      那些消失了的岁月，仿佛隔着一块积着灰尘的玻璃，看得到，抓不着。
                    </router-link>
                  </h3>
                  <span class="blogpic imgscale">
                    <i><a href="" target="_blank">怀念青春</a></i>
                    <a href="" title="">
                      <img src="../../static/images/ct.jpg" alt="" />
                    </a>
                  </span>
                  <p class="blogtext">
                    那些消失了的岁月，仿佛隔着一块积着灰尘的玻璃，看得到，抓不着。他一向在怀念着过去的一切。如果他能冲破那块积着灰尘的玻璃，他会走回早已消失的岁月。
                    我怀念的是旧时光的完美。青春是座海市蜃楼，再完美也终是稍纵即逝的，所谓的不朽之说，也许只能如阮莞那般以杯具收场。
                  </p>
                  <p class="bloginfo">
                    <i class="avatar"
                      ><img src="../../static/images/avatar.jpg"/></i
                    ><span>我现在叫神明</span> <span>2021-10-02</span
                    ><span>【<a href="" target="_blank">设计心得</a>】</span>
                  </p>
                  <a href="" class="viewmore">阅读更多</a>
                </li>
                <li>
                  <h3 class="blogtitle">
                    <b>【顶】</b>
                    <a href="" target="_blank">
                      无缘无故的开始了追忆，追忆那段时间的往事，怀念青春期才有的朦胧
                    </a>
                  </h3>
                  <span class="blogpic imgscale">
                    <i><a href="" target="_blank">怀念青春</a></i>
                    <a
                      href=""
                      title="无缘无故的开始了追忆，追忆那段时间的往事，怀念青春期才有的朦胧"
                    >
                      <img
                        src="../../static/images/xt1.jpg"
                        alt="无缘无故的开始了追忆，追忆那段时间的往事，怀念青春期才有的朦胧"
                      />
                    </a>
                  </span>
                  <p class="blogtext">
                    白驹过隙，已不记得怅然若失了几个春秋，流光转世，我已苍白了几转年华。人，一旦开始回忆，便开始苍老，一旦怀念，便开始厌倦当前。而我，也许二者兼备，所以，无缘无故的开始了追忆，追忆那段时间的往事，怀念青春期才有的朦胧。
                  </p>
                  <p class="bloginfo">
                    <i class="avatar"
                      ><img src="../../static/images/avatar.jpg"/></i
                    ><span>我现在叫神明</span> <span>2021-10-02</span
                    ><span>【<a href="" target="_blank">怀念青春</a>】</span>
                  </p>
                  <a href="" class="viewmore">阅读更多</a>
                </li>
                <li>
                  <h3 class="blogtitle">
                    <b>【顶】</b>
                    <a href="" target="_blank">
                      我们总是在开始时毫无所谓，在结束时痛彻心肺。
                    </a>
                  </h3>
                  <span class="blogpic imgscale">
                    <i><a href="" target="_blank">怀念青春</a></i>
                    <a
                      href=""
                      title="我们总是在开始时毫无所谓，在结束时痛彻心肺。"
                    >
                      <img
                        src="../../static/images/qt.jpg"
                        alt="我们总是在开始时毫无所谓，在结束时痛彻心肺。"
                      />
                    </a>
                  </span>
                  <p class="blogtext">
                    年轻时我们总是在开始时毫无所谓，在结束时痛彻心肺。而长大后成熟的我们避免了幼稚的伤害，却也错过了开始。
                    某些此刻勉强能够回忆起来的事情，开始在苍白寂寥的冬天。这样的日子。眼睛里蒙着的断层是只能看到咫尺的未来。——《悲伤逆流成河》
                  </p>
                  <p class="bloginfo">
                    <i class="avatar"
                      ><img src="../../static/images/avatar.jpg"/></i
                    ><span>我现在叫神明</span> <span>2021-10-02</span
                    ><span>【<a href="" target="_blank">怀念青春</a>】</span>
                  </p>
                  <a href="" class="viewmore">阅读更多</a>
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
  name: "BlogList",
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
  created() {
    // alert(this.$route.path +'--'+ this.$route.name)
  },
  methods: {},
}
</script>

<style scoped></style>
