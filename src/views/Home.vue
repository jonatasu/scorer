<template>
  <v-container fluid class="py-16">
    <championship-list :list="championshipList" />
    <new-championship />
  </v-container>
</template>

<script>
import ChampionshipList from '../components/ChampionshipList.vue';
import NewChampionship from '../components/NewChampionship.vue';

export default {
  components: { NewChampionship, ChampionshipList },
  data() {
    return {
      championshipList: [
        {
          id: 123321,
          icon: 'cards-playing',
          color: 'red',
          title: 'UNO em Bombinhas-SC',
          slug: 'uno-em-bombinhas-sc',
          game: 'uno',
          season: 2021,
          round: 2,
        },
        {
          id: 321123,
          icon: 'cards-playing-club-multiple',
          color: 'blue',
          title: 'Truco com os primos',
          slug: 'truco-com-os-primos',
          game: 'truco',
          season: 2022,
          round: 4,
        },
        {
          id: 888888,
          icon: 'train',
          color: 'green',
          title: 'Dominó Mexicano com a família',
          slug: 'domino-mexicano-com-a-familia',
          game: 'domino',
          season: 2021,
          round: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .container {
    min-height: 100%;
  }
</style>
