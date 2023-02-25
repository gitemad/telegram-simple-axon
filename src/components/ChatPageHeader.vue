<template>
    <div class="chat-page-header">
        <router-link
            :to="homeRoute"
            class="back-button"
        >
            <unicon
                name="arrow-left"
                height="32"
                width="32"
                fill="#2e3939"
            />
        </router-link>
        <Avatar :user="chatData.user" />
        <div class="info">
            <div class="info-row">
                <h6 class="user-name text-truncate">
                    {{ this.chatData.user.name }}
                </h6>
            </div>
            <div class="last-seen text-truncate">
                {{ this.chatData.user.lastSeen }}
            </div>
        </div>
    </div>
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
        homeRoute() {
            return {
                path: '/',
            }
        },
    },
    methods: {
        displayDate,
    },
}
</script>

<style lang="scss" scoped>
.chat-page-header {
    display: flex;
    padding: 0.75rem;
    background: $color-white;
    box-shadow: 0 2px 2px $color-light-shadow;
    position: sticky;
    top: 0;
    cursor: pointer;

    .back-button {
        display: flex;
        align-items: center;
        margin-right: 10px;
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

        }
        .last-seen {
            color: $color-text-secondary;
            font-size: 0.9rem;
            margin: 0;
            white-space: nowrap;
        }
    }
}
@media (min-width: map-get($grid-breakpoints, md)) {
    .chat-page-header {
        .back-button {
            display: none;
        }
    }
}
</style>