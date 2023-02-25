<template>
  <div class="chat-list">
    <ChatItem
      v-for="chatData in shownChatList"
      :key="chatData.id"
      :chat-data="chatData"
    />
  </div>
</template>

<script>
import ChatItem from '@/components/ChatItem.vue'

export default {
  components: {
    ChatItem
  },
  props: {
    searchTerm: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      chatListData: [],
    }
  },
  computed: {
    shownChatList() {
      if (this.searchTerm) {
        return this.chatListData.filter((chat) => { 
          return chat.user.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
        })
      }
      return this.chatListData
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let res = await this.axios.get('/4e69549b-c7fd-4d52-a6d8-c16432b67eb5')
      if (res.status == 200) {
        this.chatListData = res.data
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-list {
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 80px);
  padding: 10px 0 0;
}
</style>