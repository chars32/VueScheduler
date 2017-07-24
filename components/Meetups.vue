<template>
  <v-layout class="caja">
    <v-card v-for="(count, i) in counter" :key='i' class="cajita ma-3">
        <v-card-media
          :src= "count.image"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div> 
            <div class="headline">{{ count.title}}</div>
            <span class="grey--text">{{count.picker}}{{count.e4}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn router :to="'/meetup/details/'+count.id" :count='count' icon class="boton-hover">
            <v-icon class="icon-hover">{{ 'forward' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        counter: 'counter'
      })
    }
  }
</script>

<style scoped>
  .caja{
    display: flex;
    flex-wrap: wrap;
     
  }
  .cajita{
    width: 30%;
  }
</style>