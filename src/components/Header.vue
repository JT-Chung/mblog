<template>
  <Layout>
    <nav class="head_nav">
      <Menu
        mode="horizontal"
        :theme="theme1"
        :active-name="MenuNum"
        @on-select="clickmenu"
        style="margin: 0 auto;"
      >
        <MenuItem name="0" to="/">
          <Icon type="md-paper-plane" style="font-size: 16px" />
          我叫神明，以前叫Xavier(推荐PC端打开)
        </MenuItem>

        <MenuItem name="2" to="/">
          <Icon type="md-home" />
          网站首页
        </MenuItem>

        <MenuItem name="1" to="bloglist"
          ><!--@click="routerTo"-->
          <Icon type="ios-leaf" />
          博客日记
        </MenuItem>

        <MenuItem name="16" to="/goodmood">
          <Icon type="ios-cafe" />
          心情随笔
        </MenuItem>

        <Submenu name="3">
          <template slot="title">
            <Icon type="logo-javascript" />
            学无止境
          </template>
          <MenuGroup title="JavaScript">
            <MenuItem name="13">人类是怎样产生的</MenuItem>
            <MenuItem name="14">你是唯心主义还是唯物主义</MenuItem>
          </MenuGroup>
          <MenuGroup title="其他">
            <MenuItem name="15">你喜欢皮特还是汤姆</MenuItem>
            <MenuItem name="17">或者杰瑞？</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4" to="/timeline">
          <Icon type="md-time" />
          时光轴
        </MenuItem>
        <MenuItem name="5" to="/about">
          <Icon type="md-person" />
          关于我
        </MenuItem>
        <!--<MenuItem name="7">
                  <Icon type="ios-musical-notes" />
                  爱音乐
                </MenuItem>-->
        <!--<li class="ivu-menu-item">
                  <Input icon="ios-search" placeholder="Enter something..." style="width: 200px;" />
                </li>-->
      </Menu>
    </nav>
  </Layout>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      theme1: "dark",
      MenuNum: "0",
    }
  },
  created() {
    if (sessionStorage.getItem("MenuNum")) {
      this.MenuNum = sessionStorage.getItem("MenuNum")
    }
  },
  methods: {
    clickmenu(name) {
      name < 1 ? (name = "2") : name
      this.MenuNum = name
      sessionStorage.setItem("MenuNum", name)
      // console.log(name)
    },
  },
}
</script>

<style scoped>
.ivu-layout::before {
  background: #000
    linear-gradient(
      to left,
      #4cd964,
      #5ac8fa,
      #007aff,
      #34aadc,
      #5856d6,
      #ff2d55
    );
  content: "";
  height: 5px;
  position: absolute;
  top: 0;
  width: 100%;
}
.head_nav {
  width: 100%;
  background: #05031a;
}
.ivu-menu-dark {
  background: none !important;
}
.head_nav ul {
  width: 80%;
  margin: 0 auto;
}
.ivu-menu-item a {
  color: rgba(255, 255, 255, 0.7);
}
.ivu-menu-item a:hover {
  color: #fff;
}
</style>
