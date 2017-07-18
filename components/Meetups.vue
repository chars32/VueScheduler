<template>
  <v-layout class="caja">
    <v-card v-for="(meetup, i) in meetups" :key='i' class="cajita ma-3">
        <v-card-media
          :src= "meetup.image"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div> 
            <div class="headline">{{ meetup.title}}</div>
            <span class="grey--text">{{meetup.picker}}{{meetup.e4}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn router :to="'/meetup/details/'+meetup.id" :meetup='meetup' icon class="boton-hover">
            <v-icon class="icon-hover">{{ 'forward' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        meetups: [],
        id: ''
      }
    },
    methods: {
      fetchData() {
        this.$http.get('meetups.json')
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              data[key].id = key
              resultArray.push(data[key])
            }
            this.meetups = resultArray;
          })
      }
    },
    created: function() {
      this.fetchData();
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