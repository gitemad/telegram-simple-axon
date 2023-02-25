<template>
  <div id="app">
    <Sidebar />
    <div class="chat-bg">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar
  },
}

</script>

<style lang="scss">
html {
  overflow: clip;
}
body {
  margin: 0;
  overflow: clip;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  min-width: 0;
  width: 100vw;
  height: 100vh;
}
.chat-bg {
  position: relative;
  flex: 1;
  min-width: 0;
  &::before {
    background-image: url('@/assets/img/chat-bg-br.png');
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after {
    background-image: url('@/assets/img/chat-bg-pattern-light.png');
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: top right;
    background-size: 510px auto;
    background-repeat: repeat;
    mix-blend-mode: overlay;
  }
  * {
    z-index: 1;
  }
}
.text-truncate {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width:100%;
}
.seperator {
  min-width: 1rem;
}
.seperator-sm {
  min-width: .5rem;
}
</style>
