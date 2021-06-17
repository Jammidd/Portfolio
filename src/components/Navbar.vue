<template>
  <nav id="navbar" class="navbar">
    <button class="menu-icon-btn" @click="openMenu">
      <font-awesome-icon id="menu" class="menu-icon" :icon="['fas', 'bars']" size="lg" />
    </button>
    <ul id="nav-menu" class="nav-menu">
      <router-link tag="li" to="#home">Home</router-link>
      <router-link tag="li" to="#experience">Experience</router-link>
      <router-link tag="li" to="#projects">Projects</router-link>
      <router-link tag="li" to="#about">About</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
  created () {
    this.active = this.$route.path.replace(/\//g, '')

    window.onscroll = this.pageScrolled;
  },
  data () {
    return {
      active: 'home',
      menuOpen: false
    }
  },
  methods: {
    pageScrolled () {
      let navbar = document.getElementById("navbar");
      let menu = document.getElementById("menu");
      
      if (window.scrollY >= navbar.offsetTop) {
        navbar.classList.add("scrolled");
        menu.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
        menu.classList.remove("scrolled");
      }
    },
    openMenu () {
      let menu = document.getElementById("nav-menu");
      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        menu.classList.add("menu-open");
      } else {
        menu.classList.remove("menu-open");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/screens.scss";
.navbar {
  display: block;
  border-top: 1px solid #3e3e3e;
  border-bottom: 1px solid #3e3e3e;
  .menu-icon-btn {
    background: none;
    border: none;
    .menu-icon {
      margin: 15px;
      &.scrolled {
        color: #fff;
      }
    }
    @include for-tablet-portrait-up {
      display: none;
    }
  }
  .nav-menu {
    display: none;
    list-style: none;
    flex-direction: row;
    margin: 0;
    padding: 0;
    li {
      padding: 15px;
      cursor: pointer;
      color: #3e3e3e;
      &:hover {
        background: rgba(255,255,255,0.4);
      }
    }
    &.menu-open {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    @include for-tablet-portrait-up {
      display: flex;
    }
  }
  &.scrolled {
    position: sticky;
    top: 0;
    background: #3e3e3e;
    border-top: none;
    border-bottom: none;
    z-index: 100;
    box-shadow: 0 0 3px #000;
    ul {
      li {
        color: #e3e3e3;
      }
    }
  }
}
</style>