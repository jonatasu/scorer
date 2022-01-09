<template>
  <v-app id="app">
    <app-bar />
    <router-view />
    <bottom-navigation v-if="inChampionship" />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import BottomNavigation from './components/BottomNavigation.vue';

export default {
  components: {
    AppBar,
    BottomNavigation,
  },
  computed: {
    inChampionship() {
      return this.$route.path.includes('Championship');
    },
  },
};
</script>

<style lang="scss" scoped>
body, #app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
