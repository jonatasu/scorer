<template>
  <v-container fluid>
    <h1 class="text-center">Score some points!</h1>
    <speed-dial-actions/>
  </v-container>
</template>

<script>
import SpeedDialActions from '@/components/SpeedDialActions.vue';

export default {
  name: 'Home',
  components: { SpeedDialActions },
};
</script>

<style lang="scss">
  .container {
    min-height: 100%;
  }
</style>
