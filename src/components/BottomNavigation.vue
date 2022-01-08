<template>
  <v-bottom-navigation
    :value="activeItem"
    color="teal"
    grow
    fixed
  >
    <v-btn to="/championship">
      <span>Cup</span>
      <v-icon>mdi-trophy</v-icon>
    </v-btn>

    <v-btn to="/season">
      <span>Season</span>
      <v-icon>mdi-calendar-range</v-icon>
    </v-btn>

    <v-btn to="/round">
      <span>Round</span>
      <v-icon>mdi-scoreboard</v-icon>
    </v-btn>

    <v-btn to="/stats">
      <span>Stats</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn to="/participants">
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
