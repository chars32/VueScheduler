<template>
  <div>
    <v-layout>
      <v-flex class="text-xs-center">
        <h3>Create a new meetup</h3>
      </v-flex>
    </v-layout>
    <v-card class="grey lighten-5 elevation-0">
      <v-card-text>
        <v-container fluid>
          
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                name="input-1"
                label="Title"
                id="testing"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex>
              <v-btn class="grey lighten-1">Upload Image</v-btn>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex>
              <v-text-field
                name="input-1"
                label="Description"
                id="testing"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex class="centrito">
              <v-date-picker v-model="picker"></v-date-picker>
            </v-flex>
            <v-flex class="centrito">
              <v-time-picker v-model="e4"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row class="py-5">
            <v-flex class="centrito">
              <v-btn class="yellow lighten-1" normal large>Create Meetup</v-btn>
            </v-flex>
          </v-layout>
          
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        picker: null,
        e4: null
      }
    }
  }
</script>

<style scoped>
  .picker__title{
    background: red !important;
  }
  .centrito{
    display: flex;
    justify-content: center;
  }
</style>