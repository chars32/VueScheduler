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
          
          <v-layout row class="my-5">
            <v-flex xs12>
              <v-text-field
                name="input-1"
                label="Title"
                id="testing"
                v-model="meetup.title"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row class="my-5">
            <v-flex>
              <img :src="meetup.image" class="foto" :id="id"> 
              <div v-if="!meetup.image">
                <v-btn class="grey lighten-1 choose_file">                  
                  <span>Upload Image</span>
                  <input type="file" @change="onFileChange"/>
                </v-btn>
              </div>
              <div v-else>
                <v-btn class="grey lighten-1" @click.native="removeImage">
                  Delete Image
                </v-btn>
              </div>
            </v-flex>
          </v-layout>

          <v-layout row class="my-5">
            <v-flex>
              <v-text-field
                name="input-1"
                label="Description"
                id="testing"
                v-model='meetup.description'
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row clas="my-5">
            <v-flex class="centrito">
              <v-date-picker v-model="meetup.picker"></v-date-picker>
            </v-flex>
            <v-flex class="centrito">
              <v-time-picker v-model="meetup.e4"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row class="my-5">
            <v-flex class="centrito">
              <v-btn class="yellow lighten-1" large @click.native="submit">Create Meetup</v-btn>
              <v-btn class="yellow lighten-1" large @click.native="fetchData">Get Meetups</v-btn>
            </v-flex>
          </v-layout>  
        </v-container>
      </v-card-text>
      <div>
        <ul>
         <li v-for="m in meetups">{{ m.title }} {{ m.description }}</li>
        </ul>
      </div>
    </v-card>
  </div>
</template>


<script>

  export default {
    data () {
      return {
        meetup:{
          title: '',
          image: '',
          description: '',
          picker: null,
          e4: null,
        },
         id: 'off',
         meetups: []
      }
    },
    methods: {
      submit() {
        this.$http.post('meetups.json', this.meetup)
          .then(response => {
            console.log(response)
          }, error => {
            console.log(error)
          })
      },
      fetchData() {
        this.$http.get('meetups.json')
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.meetups = resultArray;
          })
      },

      //funciones para obtener imagenes desde un input=file
      onFileChange(e) {
        var files = e.target.files;

        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.meetup.image = e.target.result;
        };
        reader.readAsDataURL(file);
        this.id = 'on';

      },
      removeImage: function (e) {
        this.meetup.image = '';
        this.id = 'off';
      },
      //Aqui terminan las funciones del input
    }
  }
</script>

<style scoped>
  #on {
    display: block
  }

  #off {
    display: none;
  }

  .foto{
    width: 200px;
    height: 150px;
  }

  .centrito{
    display: flex;
    justify-content: center;
  }

 
.choose_file input[type="file"]{
    position:absolute;
    top:0; left:0;
    opacity:0; 
}
</style>