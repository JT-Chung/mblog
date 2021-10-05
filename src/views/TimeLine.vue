<template>
  <div class="TimeLine">
    <Header></Header>
    <layout class="content">
      <Row>
        <Col span="24">
          <div class="whitebg timebox">
            <h2 class="htitle">往期文章</h2>
            <ul id="list">
              <li>
                <span>2021-10-3</span
                ><i><a href="">回忆中，总有些瞬间，能温暖整个以前。</a></i>
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >有的人的偶像是猫王，也有的人的偶像是周杰伦，你的呢？《致青春》</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >我们留恋生活中的每一个角落，只因为我们是它的主人，因为不是每一年，都是十七八岁</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i><a href="">人生也许就像写不完的诗，各式各样的都有。</a></i>
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >我们怀念别人时，其实都是在从不一样的人身上怀念自己。</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >回忆本来是十分完美的，只要你能让过去的都过去。《爱在落日余晖时》</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >什么是幸福，之前的我幻想的很美好，可现在所求的仅仅是快乐！</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >这是我们的故事，可我们既未预料到故事的开始，也未预料到故事的结束</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >我们将它怪责为命运，其实所有的悲欢离合，都由我们一笔一画地写出。</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >某些此刻勉强能够回忆起来的事情，开始在苍白寂寥的冬天。这样的日子。眼睛里蒙着的断层是只能看到咫尺的未来</a
                  ></i
                >
              </li>
              <li>
                <span>2021-10-3</span
                ><i
                  ><a href=""
                    >之后我遇见很多人，很多的事，但是却没有一件让我留恋！</a
                  ></i
                >
              </li>
            </ul>
            <!--pagelist-->
            <div class="pagelist">
              <a title="Total record">&nbsp;<b>15</b> </a
              >&nbsp;&nbsp;&nbsp;<b>1</b>&nbsp; <a href="">2</a>&nbsp;
              <a href="">下一页</a>&nbsp;
              <a href="">尾页</a>
            </div>
          </div>
        </Col>
      </Row>
    </layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: "TimeLine",
  data() {
    return {}
  },
  components: {
    Footer,
    Header,
  },
}
</script>

<style scoped></style>
