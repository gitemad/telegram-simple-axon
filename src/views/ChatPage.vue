<template>
  <div class="chat-page">
    <template v-if="chatData">
      <ChatPageHeader
        :chat-data="chatData"
      />
      <div class="chat-container" ref="chat-container">
        <Message
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <div class="new-message">
        <textarea
          v-model="newMessage"
        />
        <unicon name="paperclip" class="attachment" fill="#707579"/>
      </div>
    </template>
    <template v-else>
      <div class="loading">
        <unicon name="spinner" width="100" height="100" fill="#2e3939"/>
      </div>
    </template>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import ChatPageHeader from '@/components/ChatPageHeader.vue'
export default {
  components: {
    Message,
    ChatPageHeader,
  },
  data() {
    return {
      newMessage: '',
      messages: [],
      chatData: null,
    }
  },
  created() {
    this.$watch(
      "$route",
      async (to, from) => {
        if (!from || to.params.id != from.params.id) {
            await this.fetchData(to.params.id)
            this.scrollToBottom()
        }
      },
      {
        immediate: true
      },
    )
  },
  methods: {
    async fetchData(id) {
      let res = await this.axios.get(`/${id}`)
      if (res.status == 200) {
        this.messages = res.data.messages
        this.chatData = res.data.chatData
      }
    },
    scrollToBottom() {
      const chatContainer = this.$refs['chat-container']
      chatContainer.scrollTop = chatContainer.scrollHeight
    },
  }
}
</script>

<style lang="scss" scoped>
.chat-page {
  position: relative;
  min-height: 100vh;

  .chat-container {
    overflow-y: auto;
    height: calc(100vh - 160px);
    padding: 2rem 1rem 0 1rem;
  }

  .new-message {
    position: fixed;
    bottom: 10px;
    right: 2rem;
    left: 2rem;

    textarea {
      width: calc(100% - 3rem);
      border-radius: 0.75rem;
      background-color: #ffffff;
      border: none;
      font-size: 1rem;
      height: 2rem;
      line-height: 2rem;
      padding: 0.5rem 2.25rem 0.5rem 0.75rem;
      resize: none;

      &:focus-visible {
        outline: none;
      }
    }
    .attachment {
      position: absolute;
      top: 12px;
      right: 10px;
      cursor: pointer;
    }
  }
  .loading {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);

    .unicon {
      animation: spin 2s infinite linear;
    }

  }
}
@media (min-width: map-get($grid-breakpoints, md)) {
  .chat-page {
    .new-message {
      right: 70px;
      left: 430px;
    }
  }
}

@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>