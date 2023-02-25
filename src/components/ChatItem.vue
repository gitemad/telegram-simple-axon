<template>
    <router-link
        class="chat-item"
        :to="chatRoute"
    >
        <Avatar :user="chatData.user" />
        <div class="info">
            <div class="info-row">
                <h6 class="user-name text-truncate">
                    {{ this.chatData.user.name }}
                </h6>
                <div class="seperator"></div>
                <p class="last-message-date">
                    {{ this.displayDate(this.chatData.lastMessage.date) }}
                </p>
            </div>
            <div class="last-message text-truncate">
                {{ this.chatData.lastMessage.content }}
            </div>
        </div>
    </router-link>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import { displayDate } from '@/composables/useDate'

export default {
    components: {
        Avatar,
    },
    props: {
        chatData: Object,
    },
    computed: {
        chatRoute() {
            return {
                name: 'chat',
                params: {
                    id: this.chatData.id,
                },
            }
        },
    },
    methods: {
        displayDate,
    },
}
</script>

<style lang="scss" scoped>
.chat-item {
    display: flex;
    padding: 0.75rem;
    border-radius: $border-radius-default;
    text-decoration: none;
    background: $color-white;
    color: $color-black;
    cursor: pointer;

    &:hover {
        background: $color-chat-hover;
    }

    &.router-link-active {
      background: $color-chat-active;
      color: $color-white;

      .info {
        .info-row {
          .last-message-date {
            color: $color-white;
          }
        }
        .last-message {
          color: $color-white;
        }
      }
      
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
	      flex: 1;
        min-width: 0;
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .user-name {
                font-size: 1rem;
                margin: 0;
            }

            .last-message-date {
                color: $color-text-meta;
                font-size: 0.75rem;
                margin: 0;
                white-space: nowrap;
            }
        }
        .last-message {
          color: $color-text-secondary;
        }
    }
}
</style>