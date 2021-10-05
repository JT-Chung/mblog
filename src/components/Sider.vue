<template>
    <Row>
        <Col span="24">
            <MyCard></MyCard>
        </Col>
        <Col span="24">
            <!--notice-->
            <div class="whitebg notice">
                <h2 class="htitle">最近更新</h2>
                <ul>
                    <li>
                        <a href="" title="渐渐习惯了，没有你的生活">
                            渐渐习惯了，没有你的生活，
                        </a>
                    </li>
                    <li>
                        <a href="" title="习惯了，不在留意你的一点一滴">
                            习惯了，不在留意你的一点一滴
                        </a>
                    </li>
                    <li>
                        <a href="" title="习惯了在回忆里挣扎，最后越陷越深">
                            习惯了在回忆里挣扎，最后越陷越深
                        </a>
                    </li>
                    <li>
                        <a href="" title="习惯了完美而不切实际的幻想，最后逐渐沉沦——廖恒《花叶，繁星》">
                            习惯了完美而不切实际的幻想，最后逐渐沉沦——廖恒《花叶，繁星》
                        </a>
                    </li>
                </ul>
            </div>
            <!--notice end-->
        </Col>
        <Col span="24">
            <!--paihang-->
            <div class="whitebg paihang">
                <h2 class="htitle">点击排行</h2>
                <section class="topnews imgscale">
                    <a href="">
                        <img src="../../static/images/b02.jpg">
                        <span>当你回忆从前时你笑了，说明你长大了；</span>
                    </a>
                </section>
                <ul>
                    <li>
                        <i></i>
                        <a href="" title="当你回忆从前时你哭了，说明你成熟了；" target="_blank">
                            当你回忆从前时你哭了，说明你成熟了；
                        </a>
                    </li>
                    <li>
                        <i></i>
                        <a href="" title="当你回忆从前时你漠然了，说明你世故了；" target="_blank">
                            当你回忆从前时你漠然了，说明你世故了；
                        </a>
                    </li>
                    <li>
                        <i></i>
                        <a href="" title="当你回忆从前时你感慨了，说明你无奈了；" target="_blank">
                            当你回忆从前时你感慨了，说明你无奈了；
                        </a>
                    </li>
                    <li>
                        <i></i>
                        <a href="" title="当你回忆从前时你淡定了，说明你开始老了" target="_blank">
                            当你回忆从前时你淡定了，说明你开始老了
                        </a>
                    </li>
                    <li>
                        <i></i>
                        <a href="" title="一路走来丢过很多的东西，唯有那段回忆不曾丢掉。" target="_blank">
                            一路走来丢过很多的东西，唯有那段回忆不曾丢掉。
                        </a>
                    </li>
                </ul>
            </div>
            <!--paihang end-->
        </Col>
        <Col span="24">
            <!--tuijian-->
            <div class="whitebg tuijian">
                <h2 class="htitle">站长推荐</h2>
                <section class="topnews imgscale">
                    <a href=""><img src="../../static/images/b02.jpg">
                        <span>
                                在生命中，总有些人，安然而来，静静守候，不离不弃;
                            </span>
                    </a>
                </section>
                <ul>
                    <li>
                        <a href="" title="也有些人，浓烈如酒，疯狂似醉，却是醒来无处觅，来去都如风，梦过无痕。" target="_blank">
                            <i><img src="../../static/images/b02.jpg" ></i>
                            <p>也有些人，浓烈如酒，疯狂似醉，却是醒来无处觅，来去都如风，梦过无痕。</p>
                        </a>
                    </li>
                    <li>
                        <a href="" title="无数的相遇，无数的别离，伤感良多，或许不舍，或许期待，或许无奈，" target="_blank">
                            <i><img src="../../static/images/b02.jpg" ></i>
                            <p>无数的相遇，无数的别离，伤感良多，或许不舍，或许期待，或许无奈，</p>
                        </a>
                    </li>
                    <li>
                        <a href="" title="回忆是座桥，却是通往寂寞的牢。《爱情睡醒了》" target="_blank">
                            <i><img src="../../static/images/b02.jpg" ></i>
                            <p>回忆是座桥，却是通往寂寞的牢。《爱情睡醒了》</p>
                        </a>
                    </li>
                    <li>
                        <a href="" title="人生就像一场旅行，不在乎目的地，在乎的就应是沿途的风景以及看风景的情绪。" target="_blank">
                            <i><img src="../../static/images/b02.jpg" ></i>
                            <p>人生就像一场旅行，不在乎目的地，在乎的就应是沿途的风景以及看风景的情绪。</p>
                        </a>
                    </li>
                    <li>
                        <a href="" title="有时候见到的,听到的,最后做出来的,结果却不是想要的!" target="_blank">
                            <i><img src="../../static/images/b02.jpg" ></i>
                            <p>有时候见到的,听到的,最后做出来的,结果却不是想要的!</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!--tuijian end-->
        </Col>
        <Col span="24">
            <!--imgscale-->
            <Ad></Ad>
        </Col>
        <Col span="24">
            <GuseeLike></GuseeLike>
        </Col>
        <Col span="24">
            <!--imgscale-->
            <Ad></Ad>
        </Col>
        <Col span="24">
            <SiteCount></SiteCount>
            <!--tongji end-->
        </Col>
    </Row>
</template>

<script>
    import MyCard from './public/MyCard'
    import SiteCount from "@/components/public/SiteCount";
    import Ad from "@/components/public/Ad";
    import GuseeLike from "@/components/list/GuseeLike";
    export default {
        name: "Sider",
        data () {
            return {
            }
        },
        components: {
            GuseeLike,
            Ad,
            SiteCount,
            MyCard
        }
    }
</script>

<style scoped>

</style>
