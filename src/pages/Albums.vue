<template>
    <div class="album">
        <SingleAlbum  v-for="album in albums" :album="album" :key ="album" />
    </div>
  </template>
  
  <script>
 import axios from 'axios';
 import SingleAlbum from '../components/SingleAlbum.vue';
 export default {
    name : 'Albums',
    components :{
        SingleAlbum,
    },

    data(){
          return {
              albums : [],
              apiUrl:'http://127.0.0.1:8000/api/albums',
          }
      },
  
  
      methods: {
          getAlbums(){
              axios.get(this.apiUrl, {
                  params: {}
              })
              .then((response) => {
                  console.log(response.data.results.data)
                 this.albums = response.data.results.data;
              })
              .catch(function (error) {
                  console.log(error);
              })
          }
        },
  
      created(){
          this.getAlbums();
      }


 }
 
 
  </script>
  
  
  <style lang="scss" scoped>

div.album{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
   }
  
  </style>