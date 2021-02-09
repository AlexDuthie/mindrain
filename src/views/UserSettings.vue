<template>
    <main>
        <div id="panels">
            <settings-left-panel></settings-left-panel>
            <settings-right-panel></settings-right-panel>
        </div>
    </main>
</template>

<script>
import SettingsLeftPanel from '@/components/SettingsLeftPanel.vue';
import SettingsRightPanel from '@/components/SettingsRightPanel.vue';

    export default {
        name: 'settings',
        components: {
            SettingsLeftPanel,
            SettingsRightPanel
        }
    }
</script>

<style scoped>
main {
  background-color: #292c33;
  height: 93vh;
}

#panels {
    display: flex;
}
</style>