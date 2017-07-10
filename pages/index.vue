<template>
  <app-index :meetups='meetups'></app-index>
</template>

<script>
  import Index from '../components/Index.vue'
  import meetups from '../store/bdprueba.js'

  export default {
    data () {
      return {
        meetups: meetups
      }
    },
    components: {
      appIndex: Index
    }
  }
</script>

