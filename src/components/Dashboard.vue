<template>
  <div class="scroll-container">
    <section class="welcome">
      <h1>Dashboard</h1>
      <h3>
        How to use widgets ...
      </h3>
    </section>
    <section class="dashboard">
      <br>
      <div class="grid-container fluid">
        <div class="grid-x grid-margin-x">
          <div class="small-6 cell" v-for="item in widgets.slice(0, 4)">
            <div class="widget-container">
              <div class="widget">
                <div class="widget-header">
                  <div class="title">{{item.title}}</div>
                  <div class="actions">
                    <a href="#"><i class="material-icons" @click.prevent="showSettings($event)">settings</i></a>
                    <a href="#"><i class="material-icons" @click.prevent="showHelp($event)">help_outline</i></a>
                  </div>
                </div>
                <div class="iframe-mask hide"></div>
                <div class="iframe-wrapper">
                  <iframe v-if="item.id" :src="'/apps/'+item.url+'?id='+item.id" frameborder="0" />
                  <iframe v-else :src="'/apps/'+item.url" frameborder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  name: 'dashboard',
  data: () => ({
    isDraggable: false,
    isResizable: false,
    pageTitle: 'Dashboard'
  }),
  computed: {
    ...mapState([
      'widgets'
    ])
  },
  methods: {
    resizedWidget: () => {
      window.dispatchEvent(new Event('resize'))
    },
    toggleSettings: function(event) {
      this.isDraggable = !this.isDraggable
      this.isResizable = !this.isResizable
      let btnText = event.currentTarget.querySelector('span').textContent
      if (btnText == 'Customize') {
        event.currentTarget.querySelector('span').textContent = 'Save settings'
      } else {
        event.currentTarget.querySelector('span').textContent = 'Customize'
      }
      document.querySelectorAll('.iframe-mask').forEach(function(item, i){
        item.classList.toggle('hide')
      })
    },
    showSettings: function(event) {
      var widget = event.currentTarget.parentElement.parentElement.parentElement.parentElement
      widget.getElementsByTagName('iframe')[0].setAttribute('src', '/settings.html')
    },
    showHelp: function(event) {
      var widget = event.currentTarget.parentElement.parentElement.parentElement.parentElement
      widget.getElementsByTagName('iframe')[0].setAttribute('src', '/help.html')
    }
  }
}
</script>

<style lang="sass">
// .vue-grid-layout
//   margin: 0 -10px 100px
// .vue-grid-item
//   border: 1px solid #ddd
.widget-container
  position: relative
.widget
  // position: absolute
  // top: 0
  // left: 0
  // right: 0
  // bottom: 0
  background: white
  overflow: hidden
  height: 400px
  border: 1px solid #ddd
  margin-bottom: 30px
  .widget-header
    border-bottom: 1px solid #ddd
    height: 30px
    display: flex
    align-items: center
    padding: 0 7px
    justify-content: center
    .title
      flex: 1 0 auto
    .actions
      display: flex
      a
        color: #bebebe
        line-height: 1rem
        margin-left: 4px
        &:hover
          color: #0a0a0a
      .material-icons
        font-size: 1rem
  .iframe-mask
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
  .iframe-wrapper
    overflow: hidden
    width: 100%
    height: 100%
    height: calc(100% - 30px)
    iframe
      width: 100%
      height: 100%
      overflow-y: scroll
      overflow-x: hidden
</style>
