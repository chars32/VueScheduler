  <template>
    <div>
      <v-layout class="orange">
        <v-flex>
          <h5 class="no-padd white--text pa-3">{{ meetup.title }}</h5>
        </v-flex>
      </v-layout>

      <v-layout>
        <img :src="meetup.image" alt="">
      </v-layout>

      <v-layout class="indigo pa-3">
        <v-flex xs12>
          <h5 class="white--text">{{ meetup.title }}</h5>
          <p>{{ meetup.picker }} {{meetup.e4}}</p>
        </v-flex>
      </v-layout>

      <v-layout class="indigo lighten-2 px-3 py-1s">
        <v-flex xs12 class="mover-boton">
          <v-btn flat class="white--text" @click.native.stop="dialog = true">Register</v-btn>
        </v-flex>

        <v-dialog v-model="dialog">
          <v-card>
            <v-card-title class="headline">Register for Meetup?</v-card-title>
            <v-card-text>You can always change your decision later on.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="red--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
              <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </template>

  <script>
    export default {
      data(){
        return {
          dialog: '',
          meetup: [],
        }
      },

      methods: {
        fetchData() {
          this.$http.get('meetups.json')
            .then(response => {
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {                
                data[key].id = key
                resultArray.push(data[key])
              }
              for (let arr in resultArray){
                if (String(resultArray[arr].id) === String(this.$route.params.id) ){
                  this.meetup = resultArray[arr]
                }
              }
            })
        },
      },

      created: function() {
        this.fetchData();
      },

      // validate ({ params }) {
      //   console.log(params)
      //   return !isNaN(+params.id)
      // },

        // asyncData ({ params, error }) {
        //   const meet = this.meetups.find((meetup) => String(meetup.id) === params.id)
        //   if (!meet) {
        //     return error({ message: 'User not found', statusCode: 404 })
        //   }
        //   return meet
        // }
    }
  </script>

  <style>
    .ancho{
      width: 100%;
    }

    p{
      color: white;
      margin-bottom: 0;
    }

    img{
      width: 100%;
    }

    .no-padd{
      margin-bottom: 0;
    }

    .mover-boton{
      display: flex;
      justify-content: flex-end;
    }
  </style>