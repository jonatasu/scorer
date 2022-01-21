<template>
  <v-row>
    <v-col
      v-for="item in list"
      :key="item.slug"
    >
      <v-card
        outlined
        :color="item.color"
        dark
        tile
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{ item.game.toUpperCase() }}
            </div>
            <v-list-item-title class="text-h6 mb-1">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.round }}ª rodada de {{ item.season }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="50"
          >
            <v-icon
              x-large
            >
              mdi-{{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            :to="{ name: 'Dashboard', params: { id: item.id, }, }"
            tile
          >
            Entrar
          </v-btn>

          <v-spacer></v-spacer>

          <v-menu
            top
            left
            :offset-y="true"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style>

</style>
