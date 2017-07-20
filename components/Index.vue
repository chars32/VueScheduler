<template>
 <div>
   <!--<div id="caja-general-botones">
      <div id="uno" class="caja-botones">
        <v-btn router to="/meetups" class="px-3" >EXPLORE MEETUPS</v-btn> 
      </div>
      <div id="dos" class="caja-botones">
        <v-btn router to="/organize" class="indigo grey--text text--lighten-4 px-3">ORGANIZE A MEETUP</v-btn> 
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
          <v-carousel-item v-for="(meetup,i) in meetups" v-bind:src="meetup.image" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <p class="text-xs-center">Description</p>
      </v-flex>
    </v-layout>-->
    {{ $store.state }}
    <br>
    
    <br>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {

    computed: {
      ...mapState({
        counter: 'counter'
      })
    },

    created() {
      this.$store.commit('increment')
    }
    
    
    // data() {
    //   return {
    //     meetups: [],
    //   }
    // },
    // methods: {
    //   fetchData() {
    //     this.$http.get('meetups.json') 
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(data => {
    //         const resultArray = [];
    //         for (let key in data) {
    //           data[key].id = key
    //           resultArray.push(data[key])
    //         }
    //         this.meetups = resultArray;
    //       })
    //   },
    // },
    // created: function() {
    //   this.fetchData();
    // }
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
