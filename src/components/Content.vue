<template>
  <layout class="content">
    <Row>
      <Col span="18">
        <Row style="background: white">
          <Col span="15">
            <Carousel
              :value="lunbo.value"
              :autoplay="lunbo.autoplay"
              :autoplay-speed="lunbo.autoplay_speed"
              :dots="lunbo.dots"
              :radius-dot="lunbo.radius_dot"
              :trigger="lunbo.trigger"
              :arrow="lunbo.arrow"
              class="lunbo"
            >
              <CarouselItem>
                <div class="demo-carousel">
                  <a><img src="../../static/images/wz.jpg"/></a>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="../../static/images/xt.jpg" />
                </div>
              </CarouselItem>
              <!--<CarouselItem>
                                <div class="demo-carousel">
                                    <img src="../../static/images/xt.jpg">
                                </div>
                            </CarouselItem>-->
            </Carousel>
          </Col>
          <Col span="9" style="min-height: 260px;">
            <ul class="lunbor">
              <li>
                <a title=""
                  ><img src="../../static/images/qt.jpg" alt="怀念青春" />
                  <span>回忆中，总有些瞬间，能温暖整个以前。</span>
                </a>
              </li>
              <li>
                <a title=""
                  ><img src="../../static/images/dt.jpg" alt="" />
                  <span
                    >曾经桌上的一支笔，一张纸，一块橡皮，都会成为你毕生的念想。</span
                  >
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Col span="24">
          <Tabs value="name1" class="tab_box whitebg">
            <TabPane label="想念你" name="name1">
              <!--选项卡1内容-->
              <div class="newsitem">
                <div class="newspic">
                  <ul>
                    <li>
                      <a
                        ><img src="../../static/images/ct.jpg" />
                        <span
                          >有那么一个班，有那么一群人，有那么一场考试，然后都散了。</span
                        >
                      </a>
                    </li>
                    <li>
                      <a
                        ><img src="../../static/images/xt1.jpg" />
                        <span>青春，总需要一些伤疤证明我们曾经年少过。</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul class="newslist">
                  <li>
                    <i></i>
                    <router-link
                      to="/detail"
                      title="那些年，陪在我身边的那个star"
                    >
                      那些年，陪在我身边的那个star
                    </router-link>
                    <p>他叫akon，来自非洲，做过牢狱，蛮吊蛮吊。当然还有周董</p>
                  </li>
                  <li>
                    <i></i>
                    <router-link to="/detail" title="遇见一个未知的你">
                      遇见一个未知的你，然后一辈子忘不了。
                    </router-link>
                    <p>肆无忌惮方得始终。</p>
                  </li>
                  <li>
                    <i></i>
                    <a href="" title="遇见">
                      那时的我们拥有 没有污染过的清晨，青春人生最美好的年纪。
                    </a>
                    <p>
                      青春时，有付出，有汗水，有泪水，有掌声，有鲜花。当然也有叛逆，有挣扎，有迷惘，有遗憾，有失败。
                    </p>
                  </li>
                  <li>
                    <i></i>
                    <a href="" title="赌上青春，赔上的是一去不返的时光。">
                      赌上青春，赔上的是一去不返的时光。
                    </a>
                    <p>
                      一路走来，经历了一次次地蜕变，生生地长大成人！青春之际，我们有对过往的依恋，对未来的憧憬。
                    </p>
                  </li>
                  <li>
                    <i></i>
                    <a
                      href=""
                      title="岁的故事，总是在晴朗的天气里，用最欢乐的口气开头"
                      >岁的故事，总是在晴朗的天气里，用最欢乐的口气开头</a
                    >
                    <p>
                      你我的故事，总是在晴朗的天气里，用最欢乐的口气开头，就好像讲故事的人，真的不知道，结局会有多忧伤似的。
                    </p>
                  </li>
                </ul>
              </div>
            </TabPane>
            <TabPane label="等风来" name="name2">等风来</TabPane>
            <TabPane label="遇见" name="name3">遇见</TabPane>
            <TabPane label="记" name="name4">记</TabPane>
          </Tabs>
        </Col>
        <Col span="24">
          <div class="zhuanti whitebg">
            <h2 class="htitle">
              特别推荐
              <span class=" hnav">
                <Breadcrumb>
                  <BreadcrumbItem to="/">个人博客</BreadcrumbItem>
                  <BreadcrumbItem>记</BreadcrumbItem>
                  <BreadcrumbItem>旅行</BreadcrumbItem>
                  <BreadcrumbItem>冒险</BreadcrumbItem>
                </Breadcrumb>
              </span>
            </h2>
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
                  每个班总有几个喜欢整天黏在一起，而且会不顾形象大笑大闹的疯子。
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
        </Col>
        <Col span="24">
          <!--ad-->
          <div class="layui-col-xs12 whitebg">
            <a href="" target="_blank"
              ><img src="../../static/images/longad.jpg"
            /></a>
          </div>
        </Col>
        <Col span="24">
          <!--newslist-->
          <div class="layui-col-xs12 whitebg bloglist">
            <h2 class="htitle">最新博文</h2>
            <ul>
              <li>
                <h3 class="blogtitle">
                  <b>【顶】</b>
                  <a href="" target="_blank">
                    那些消失了的岁月，仿佛隔着一块积着灰尘的玻璃，看得到，抓不着。
                  </a>
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
                  ><span>神明</span> <span>2021-11-05</span
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
                  ><span>神明</span> <span>2021-10-05</span
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
                  ><span>神明</span> <span>2021-10-05</span
                  ><span>【<a href="" target="_blank">怀念青春</a>】</span>
                </p>
                <a href="" class="viewmore">阅读更多</a>
              </li>
            </ul>
          </div>
        </Col>
      </Col>
      <Col span="6" style="padding-left:20px;">
        <Sider></Sider>
      </Col>
    </Row>
  </layout>
</template>

<script>
import Sider from "@/components/Sider"
export default {
  name: "Content",
  data() {
    return {
      // 轮播参数配置
      lunbo: {
        value: 0,
        autoplay: true,
        autoplay_speed: 4000,
        dots: "inside",
        radius_dot: false,
        trigger: "click",
        arrow: "hover",
      },
    }
  },
  components: {
    Sider,
  },
}
</script>

<style scoped>
/*轮播*/
.lunbo {
  min-height: 260px;
  overflow: hidden;
}
.lunbo img {
  width: 100%;
}
/* 轮播右*/
.lunbor li {
  /*width: 100%;*/
  background: #000;
  overflow: hidden;
  max-height: 154px;
  margin-bottom: 10px;
  border-radius: 3px;
  position: relative;
}

.lunbor li a {
  display: block;
  overflow: hidden;
  height: 100%;
}

.lunbor li img {
  width: 100%;
  height: 100%;
  -moz-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  transition: all 0.5s;
  opacity: 0.7;
}

.lunbor li:hover img {
  transform: scale(1.1);
  opacity: 1;
}

.lunbor li span {
  bottom: 0;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  padding: 0 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-height: 24px;
  height: 48px;
}
/* 轮播右 end*/
</style>
