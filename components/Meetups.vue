<template>
  <v-layout class="cajas-cards">
    <v-card v-for="(meetup, i) in meetups" :key='i' class="cards">
      <v-card-media
        :src= "meetup.src"
        height="200px"
      >
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">Top western road trips</div>
          <span class="grey--text">July 31, 2017, 5:30pm</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn router :to="'/meetup/details/'+meetup.id" icon class="boton-hover">
          <v-icon class="icon-hover">{{ 'forward' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
  import datos from '../store/bdprueba.js'

  export default {
    props: ['meetups']
  }
</script>

<style>
  .cajas-cards{
    justify-content: space-between;
  }

  .cards{
    width: 30%;
  }
</style>