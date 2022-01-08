<template>
  <v-container fluid>
    <h1 class="text-center">Score some points!</h1>
    <new-championship/>
  </v-container>
</template>

<script>
import NewChampionship from '../components/NewChampionship.vue';

export default {
  name: 'Home',
  components: { NewChampionship },
};
</script>

<style lang="scss">
  .container {
    min-height: 100%;
  }
</style>
