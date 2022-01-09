<template>
  <div>
    <v-app-bar
      fixed
      elevation="2"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true" />

      <v-toolbar-title>SCORER</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-layout
        justify-space-between
        column
        fill-height
      >
        <div>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                SCORER
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list nav>
            <v-list-item-group
              v-model="group"
              active-class="text--accent-4"
            >
              <v-list-item :to="{ name: 'Home' }">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Início</v-list-item-title>
              </v-list-item>

              <v-list-item :to="{ name: 'Home' }">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Perfil</v-list-item-title>
              </v-list-item>

              <v-list-item :to="{ name: 'Home' }">
                <v-list-item-icon>
                  <v-icon>mdi-shield-key</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Privacidade</v-list-item-title>
              </v-list-item>

              <v-list-item :to="{ name: 'About' }">
                <v-list-item-icon>
                  <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Sobre</v-list-item-title>
              </v-list-item>

              <v-list-item href="mailto:scorer@gmail.com" target="_blank">
                <v-list-item-icon>
                  <v-icon>mdi-email-send</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Contato</v-list-item-title>
              </v-list-item>

              <v-divider />

              <v-list-item dense>
                <v-list-item-subtitle>Version 0.1.0</v-list-item-subtitle>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </div>
        <v-footer>
          <v-list class="d-flex justify-space-between social-media">
            <v-list-item
              v-for="item in socialMedia"
              :key="item.icon"
              class="px-0 mx-0 justify-center"
            >
              <v-btn
                icon
                :href="item.url"
                target="_blank"
              >
                <v-icon size="24px">
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </v-list-item>
          </v-list>
          </v-footer>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    socialMedia: [
      {
        icon: 'mdi-facebook',
        url: 'https://www.facebook.com/Jownas87',
      },
      {
        icon: 'mdi-twitter',
        url: 'https://twitter.com/jownas87',
      },
      {
        icon: 'mdi-youtube',
        url: 'https://www.youtube.com/channel/UCv_aHAKZIJKPfKc9FCqS0Zw',
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/jownas1/',
      },
    ],
  }),
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss" scoped>
.social-media {
  flex: 1;
}
</style>
