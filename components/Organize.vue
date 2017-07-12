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
              <img :src="image" class="foto">
              <v-btn class="grey lighten-1">
                <div class="choose_file">
                  <span>Upload Image</span>
                  <input type="file" @change="onFileChange"/>                  
                </div>
              </v-btn>
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
        e4: null,
        nombre: null,
        image: ''
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

      },
      removeImage: function (e) {
      this.image = '';
      }
    }
  }
</script>

<style scoped>
  .foto{
    width: 200px;
    height: 150px;
  }

  .picker__title{
    background: red !important;
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