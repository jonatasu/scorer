<template>
  <v-bottom-navigation
    :value="activeItem"
    color="teal"
    grow
    fixed
  >
    <v-btn :to="{ name: 'Dashboard' }">
      <span>Cup</span>
      <v-icon>mdi-trophy</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Season' }">
      <span>Season</span>
      <v-icon>mdi-calendar-range</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Round' }">
      <span>Round</span>
      <v-icon>mdi-scoreboard</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Stats' }">
      <span>Stats</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'Participants' }">
      <span>Participants</span>
      <v-icon>mdi-account-multiple</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ activeItem: 1 }),
};
</script>

<style>

</style>
