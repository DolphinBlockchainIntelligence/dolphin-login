<template>
  <div class="app" id="app">
    <header class="nav-wrapper">
      <ul class="nav">
        <li><a href="/">About Dolphin BI</a></li>
        <li><a href="/#/dashboard">Dashboard</a></li>
        <li><a href="/#/sentiments">Sentiments</a></li>
        <li><a href="/#/ico-faces">ICO faces</a></li>
        <li><a href="/#/sign-in">Sign in</a></li>
      </ul>
    </header>
    <router-view :key="$route.path" />
  </div>
</template>


<script>
import { mapState } from 'vuex'
import routes from './router'
export default {
  name: 'app',
  beforeCreate: function () {
    this.$store.dispatch('LOAD_REGISTER')
  },
  computed: {
    ...mapState([
      'pages',
      'pageTitle',
      'user'
    ])
  },
  methods: {
    goToPage(id, url) {
      routes.push({ name: 'Page', params: { id: id }})
    },
    asideToggle() {
      document.getElementById('layout').classList.toggle('asideOpen')
    }
  }
}
</script>


<style lang="sass">
.nav-wrapper
  height: 74px
.nav
  background: white
  position: fixed
  z-index: 2
  width: 100%
  display: flex
  list-style: none
  justify-content: space-around
  border-bottom: 1px solid #eee
  margin: 0
  li
    flex: 1 0 auto
    text-align: center
    a
      padding: 24px
      display: block
      &:hover, &:focus
        background: #f2f2f2
    &+li
      border-left: 1px solid #eee
.facebook
  border: 1px solid #507CC0 !important
  color: #507CC0 !important
.google
  border: 1px solid #DF4930 !important
  color: #DF4930 !important
section.welcome
  height: calc(100vh - 74px)
  width: 100%
  border-bottom: 1px solid #eee
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  position: relative
  img
    margin-bottom: 30px
  h1, h3
    text-align: center
  .widget-header
    position: absolute
    bottom: 0
    width: 100%
    display: flex
    justify-content: space-between
    padding: 30px
    .button
      margin: 0
section.widgets
  height: calc(100vh - 74px)
  width: 100%
  overflow-x: hidden
  border-bottom: 1px solid #eee
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .widgets
    display: flex
    .widget
      margin: 30px 30px 55px 30px
      height: 400px
      width: 400px
      background: white
      overflow: hidden
      display: flex
      border: 1px solid #eee
      flex-direction: column
      .widget-header
        border-bottom: 1px solid #eee
        height: 30px
        display: flex
        align-items: center
        padding: 0 7px
        justify-content: center
      .iframe-wrapper
        flex: 1 0 auto
        position: relative
        iframe
          width: 100%
          height: 100%
          overflow-y: scroll
          position: absolute
</style>
