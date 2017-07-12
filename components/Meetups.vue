<template>
  <v-layout class="caja">
    <v-card v-for="(meetup, i) in meetups" :key='i' class="cajita my-4">
        <v-card-media
          :src= "meetup.src"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div> 
            <div class="headline">{{ meetup.name}}</div>
            <span class="grey--text">{{meetup.date}}</span>
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
    props: ['meetups'],
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .caja{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .cajita{
    width: 30%;
  }
</style>