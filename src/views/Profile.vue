<template>
    <main>
        <Template/>
    </main>
</template>

<script>
import Template from '@/components/userProfiles/¬Template.vue';

    export default {
        name: 'Profile',
        components: {
            Template,
        },
        data() {
            return {
                natalie: false,
                meraki: false,
                alex: false,
                jason: false,
                marcin: false,
                andy: false
            }
        }
    }
</script>

<style scoped>
main {
  background-color: #292c33;
}
</style>