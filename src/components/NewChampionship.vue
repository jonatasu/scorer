<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    transition="dialog-top-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="blue"
        dark
        fab
        fixed
        right
        bottom
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        New tournament
      </v-card-title>

      <v-card-text>
        <h2 class="pt-6">Type the title of your new championship?</h2>
        <v-text-field :rules="newChampionshipRules"></v-text-field>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          color="default"
          text
          @click="dialog = false"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    dialog: false,
    newChampionshipRules: [
      (value) => !!value || 'Required.',
      (value) => (value || '').length <= 180 || 'Max 180 characters',
    ],
  }),

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
  },
};
</script>

<style>

</style>
