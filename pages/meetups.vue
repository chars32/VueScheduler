<template>
  <v-layout column justify-center>
    <app-meetups></app-meetups>
  </v-layout>
</template>

<script>
  import Meetups from '../components/Meetups.vue'

  export default {
    components: {
      appMeetups: Meetups
    }
  }
</script>
