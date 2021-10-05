<template>
  <div class="home">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from "@/components/Footer";


export default {
  name: 'home',
  components: {
    Footer,
    Header,Content
  }
}
</script>

<style scoped>

</style>
