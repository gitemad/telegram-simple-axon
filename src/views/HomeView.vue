<template>
  <div>
    <Avatar  :user="user"/>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
  components: {
    Avatar
  },
  data() {
    return {
      user: {
        name: 'Emad',
      },
    }
  },
}

</script>
