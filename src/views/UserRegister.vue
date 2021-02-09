<template>
  <main>
      <UserRegisterBox/>
  </main>
</template>

<script>
import UserRegisterBox from '@/components/UserRegisterBox.vue';

export default {
    name: 'register',
    components: {
        UserRegisterBox
    }
}
</script>

<style scoped>
main {
  background-color: #292c33;
}
</style>