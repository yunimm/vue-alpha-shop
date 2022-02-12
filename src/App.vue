<template>
  <div id="alpha-shop">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css');
@import url('https://fonts.googleapis.com');
@import url('https://fonts.gstatic.com');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap');
@import "./assets/scss/All.scss"
</style>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>