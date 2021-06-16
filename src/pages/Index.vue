<template>
  <div class="main-container">
    <home-page></home-page>
    <ClientOnly>
      <main-navbar />
    </ClientOnly>
    <experience-page></experience-page>
    <projects-page></projects-page>
    <about-page></about-page>

    <footer-page></footer-page>
  </div>
</template>

<script>
import MainNavbar from '@/components/Navbar.vue'

import HomePage from '@/components/pages/Home.vue'
import ExperiencePage from '@/components/pages/Experience.vue'
import ProjectsPage from '@/components/pages/Projects.vue'
import AboutPage from '@/components/pages/About.vue'
import ContactPage from '@/components/pages/Contact.vue'
import FooterPage from '@/components/pages/Footer.vue'

export default {
  name: 'Landing',
  data () {
    return {
    }
  },
  components: {
    MainNavbar,
    // Pages
    HomePage,
    ExperiencePage,
    ProjectsPage,
    AboutPage,
    ContactPage,
    FooterPage
  }
}
</script>

<style lang="scss" scoped>
  $navbar-height: 56px;
  .main-container {
    section {
      height: calc(100vh - 56px);
      padding: 56px 15px 15px 20px;
      &:nth-of-type(odd) {
        background: #999;
      }
      &:nth-of-type(even) {
        background: #f5f5f5;
      }
      &#home {
        padding-top: 0;
        padding-bottom: 0;
      }
      &.footer {
        height: inherit;
        padding: 25px;
      }
    }
  }
</style>
