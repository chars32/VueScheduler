<template>
 <div id="example-3">
  <v-container fluid>
    <v-layout>
      <v-flex xs12 md6>
        <p class="text-md-right">
          <v-btn light class="px-5">EXPLORE MEETUPS</v-btn>
        </p>
        </v-flex>

        <v-flex xs12 md6>
          <p class="text-md-left">
            <v-btn class="info px-5">ORGANIZE MEETUPS</v-btn>
        </p>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <h3 class="text-xs-center">Featured Meetups</h3>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 md8 offset-md2>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12 md8 offset-md2>
        <p class="text-xs-center">Events description</p>
      </v-flex>
    </v-layout>

  </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../static/doc-images/carousel/beautifultrees.jpg')
          },
          // {
          //   src: require('../static/doc-images/carousel/AsturiasSpain.jpg')
          // },
          // {
          //   src: require('../static/doc-images/carousel/sunrise.jpg')
          // }
        ]
      }
    }
  }
</script>
