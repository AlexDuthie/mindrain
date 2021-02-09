<template>
  <main>
    <div>
      <SiteNavBar/>
      <RouterView/>
    </div>
    <div id="footer">
      <SiteFooterBar/>
    </div>
  </main>
</template>

<script>
import SiteNavBar from '@/components/SiteNavBar.vue';
import SiteFooterBar from '@/components/SiteFooterBar.vue';

export default {
  name: 'App',
  components: {
    SiteNavBar,
    SiteFooterBar,
    }  
}
</script>

<style>
main {
  color: #eee;
  background-color: #292c33;
  height: 100%;
}
</style>
