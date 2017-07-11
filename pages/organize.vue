<template>
  <v-layout column justify-center>
    <app-organize></app-organize>
  </v-layout>
</template>

<script>
  import Organize from '../components/Organize.vue'

  export default {
    components: {
      appOrganize: Organize
    }
  }
</script>