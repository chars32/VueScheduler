<template>
  <v-toolbar fixed class="indigo indigo--text text--lighten-5">
    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout v-for="item in items" :key="item.id">
      <v-btn class="indigo--text text--lighten-5" flat>
      <v-icon class="mx-1 indigo--text text--lighten-5">{{item.icon}}</v-icon>
      <span class="mx-1">{{item.name}}{{item.id}}</span>
    </v-btn>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        title: 'VueScheduler',
        fixed: false,
        items: [
          {name: 'VIEW MEETUPS', icon:'date_range'},
          {name: 'ORGANIZE MEETUP', icon:'room'},
          {name: 'PROFILE', icon:'perm_identity'},
          {name: 'LOGOUT', icon:'exit_to_app'}
        ]
      }
    }
  }
</script>