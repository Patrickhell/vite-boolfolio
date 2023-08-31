<template>
    <div>
      <h1> Albums</h1>
        <div class="albums">
            <div  v-for="album in albums" :key ="album">
                <div class="card " style="width: 20rem;">
                    <div class="card-body">
                        <div class="card-body">
                            <p> Singer Name's: {{ album.singer_name }}</p>
                            <p>Title : {{ album.title }}</p>
                            <p>Category : {{ album.album_type.name }}</p>
                            <p> Genre : {{ album.genres }}</p>
                            <p v-for="technology in album.technologies" :key="technology"> {{technology.name}}</p>

                        </div>
                           
                    </div>
                </div>   
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      name: 'AppMain',
  
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
  
  <style lang="scss">
   div.albums{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
   }

   div.card{
            width: calc((100% / 3) - 1rem);
            height: 300px;
            border-radius: 1rem;
            margin-right: 1rem;
            background-color: rgb(189, 197, 211);
            color: black;
            margin-bottom: 2rem;

   }
  </style>