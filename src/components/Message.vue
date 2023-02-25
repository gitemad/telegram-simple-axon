<template>
  <div
    class="message"
    :class="{
      'own-message': isMyOwnMessage(this.message)
    }"
  >
    <div class="text-content" dir="auto">
      {{ this.message.content }}
    </div>
    <div class="date">
      {{ this.getHoursMinutes(this.message.date) }}
    </div>
  </div>
</template>

<script>
import { getHoursMinutes } from '@/composables/useDate'
import { mapGetters } from 'vuex'

export default {
  props: {
    message: Object,
  },
  computed: {
    ...mapGetters( {
        user: 'auth/userInfo',
    }),
  },
  methods: {
    getHoursMinutes,
    isMyOwnMessage(message) {
      return message.sender.id == this.user.id
    }
  },
}
</script>

<style lang="scss" scoped>
.message {
  background: $color-white;
  max-width: calc(100% - 50px);
  padding: 0.75rem;
  border-radius: $border-radius-default;
  margin-bottom: 1rem;
}
.own-message {
  background: $color-light-green;
  margin-left: auto;
}
.date {
  color: $color-text-meta;
  font-size: 0.75rem;
  margin: 0;
  white-space: nowrap;
  text-align: right;
}
@media (min-width: map-get($grid-breakpoints, md)) {
  .message {
    width: fit-content;
    max-width: 50%;
  }
}
</style>