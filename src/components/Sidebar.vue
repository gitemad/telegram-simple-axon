<template>
  <div
    class="sidebar"
    :class="{
      'chat-route-sidebar': isChatRoute,
    }"
  >
    <div class="top">
      <Menu />
      <div class="seperator"></div>
      <SearchInput v-model="searchTerm" />
    </div>
    <ChatList :search-term="searchTerm"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import SearchInput from '@/components/SearchInput.vue'
import ChatList from '@/components/ChatList.vue'

export default {
  components: {
    Menu,
    SearchInput,
    ChatList,
  },
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    isChatRoute() {
      return this.$route.name == 'chat'
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-route-sidebar {
  display: none;
}
.sidebar {
  min-width: 100%;
  .top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem 1rem;
    height: 46px;
    box-shadow: 0 2px 2px $color-light-shadow;
  }
}


@media (min-width: map-get($grid-breakpoints, md)) {
  .chat-route-sidebar {
    display: unset;
  }
  .sidebar {
    min-width: unset;
    width: 380px;
  }
}
</style>