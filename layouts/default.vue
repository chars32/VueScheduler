<template>
  <v-app light>

    <app-navigation></app-navigation>

    <main>
      <div id="container-size">
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <nuxt />
          </v-slide-y-transition>
        </v-container>
      </div>
    </main>
        
  </v-app>
</template>

<script>
  import Navigation from '../components/Navigation.vue'

  export default {
    components: {
      appNavigation: Navigation
    }
  }
</script>

<style>
  #container-size{
    margin: auto;
    width: 80%;
  }
</style>