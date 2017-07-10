<template>
  <v-layout column justify-center>
    <app-meetups :meetups='meetups'></app-meetups>
  </v-layout>
</template>

<script>
  import Meetups from '../components/Meetups.vue'
  import meetups from '../store/bdprueba.js'

  export default {
    data () {
      return {
        meetups: meetups
      }
    },
    components: {
      appMeetups: Meetups
    }
  }
</script>
