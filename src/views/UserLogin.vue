<template>
  <main>
      <UserLoginBox/>
  </main>
</template>

<script>
import UserLoginBox from '@/components/UserLoginBox.vue';

export default {
    name: 'login',
    components: {
        UserLoginBox
    }
}
</script>

<style scoped>
main {
  background-color: #292c33;
}
</style>