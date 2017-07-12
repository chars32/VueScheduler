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
                v-model="title"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row class="my-5">
            <v-flex>
              <img :src="image" class="foto" :id="id"> 
              <div v-if="!image">
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
                v-model='description'
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row clas="my-5">
            <v-flex class="centrito">
              <v-date-picker v-model="picker"></v-date-picker>
            </v-flex>
            <v-flex class="centrito">
              <v-time-picker v-model="e4"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row class="my-5">
            <v-flex class="centrito">
              <nuxt-link to="/meetups" ><v-btn class="yellow lighten-1" large @click.native="sendMeetup">Create Meetup</v-btn></nuxt-link>
            </v-flex>
          </v-layout>  
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
  import meetups from '../store/bdprueba.js'

  export default {
    data () {
      return {
        title: '',
        image: '',
        description: '',
        picker: null,
        e4: null,
        id: 'off'
      }
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files;

        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
        this.id = 'on';

      },
      removeImage: function (e) {
        this.image = '';
        this.id = 'off';
      },

      sendMeetup: function() {
        meetups.push({
          id: meetups.length+1,
          name: this.title,
          description: this.description,
          date: this.picker + this.e4,
          src: this.image
        })
      }
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