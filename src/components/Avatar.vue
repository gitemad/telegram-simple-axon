<template>
  <div>
    <img
      v-if="user.avatar"
      :src="user.avatar"
      :width="size"
      :height="size"
      class="avatar"
    />
    <div v-else class="avatar" :style="`width: ${size}px; height: ${size}px`">
      <span class="text">
        {{ this.userNameSplited[0][0] }}{{ this.userNameSplited?.[1]?.[0] }}
      </span>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    size: {
      type: Number,
      default: 45,
    },
  },
  computed: {
    userNameSplited() {
        return this.user.name.split(' ')
    },
  },
};
</script>

<style scoped lang="scss">
    .avatar {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 15px;
        background: $color-user-4;
        .text {
            color: $color-white;
            font-weight: 600;
        }
    }
</style>