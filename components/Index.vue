<template>
  <div>
    <div id="caja-general-botones">
      <div id="uno" class="caja-botones">
        <nuxt-link to="/meetups" tag="button">
          <!--<v-btn class="px-3" light>EXPLORE MEETUPS</v-btn>-->
          EXPLORE MEETUPS
        </nuxt-link>        
      </div>
      <div id="dos" class="caja-botones">
        <nuxt-link to="/organize" tag="button">
          <!--<v-btn class="indigo grey--text text--lighten-4 px-3">ORGANIZE A MEETUP</v-btn>-->
          ORGANIZE A MEETUP
        </nuxt-link>
      </div>
    </div>

    <v-layout>
      <v-flex xs12>
        <h2 class="text-xs-center"> Featured Meetups</h2>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(meetup,i) in meetups" v-bind:src="meetup.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <p class="text-xs-center">Description</p>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
   export default {
    props: ['meetups']
   } 
</script>

<style scoped>
  #uno {
    display: flex;
    justify-content: flex-end;
  }

  #dos {
    display: flex;
    justify-content: flex-start;
  }

  #caja-general-botones {
    display: flex;    
    justify-content: space-between;
  }

  .caja-botones {
    width: 50%;
  }
</style>
