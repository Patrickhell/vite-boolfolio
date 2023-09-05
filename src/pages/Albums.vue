<template>
    <div class="album">
        <SingleAlbum  v-for="album in albums" :album="album" :key ="album"
        @click="$router.push({ name: 'albums.show', params: { slug: album.slug} })"  />
    </div>

    <ul class="">
        <li @click="prevPage" v-if="prevPageUrl">
            <i class="fa-solid fa-angle-left"></i>
            <p class="fs-5">Previous</p>
        </li>
        <li @click="nextPage" v-if="nextPageUrl">
            <i class="fa-solid fa-angle-right"></i>
            <p class="fs-5">Next</p>
        </li>
    </ul>
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
              prevPageUrl : '',
              currentPageNo:'',
              nextPageUrl: '',
              apiUrl:'http://127.0.0.1:8000/api/albums',
          }
      },
  
  
      methods: {
          getAlbums(apiUrl = this.apiUrl){
              axios.get(apiUrl)
              .then((response) => {
                  console.log(response.data.results.data)
                 this.albums = response.data.results.data;
                 this.prevPageUrl = response.data.results.prev_page_url;
                 this.nextPageUrl = response.data.results.next_page_url;
              })
              .catch(function (error) {
                  console.log(error);
              })
          },

          prevPage(){
                this.getAlbums(this.prevPageUrl);
            },

            nextPage(){
                this.getAlbums(this.nextPageUrl)
            },

        },

            
  
      created(){
          this.getAlbums(this.apiUrl);
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

   ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 2rem;
            list-style-type: none;

            li{
                margin-right: 2rem;
                a {
                    text-decoration: none;
                    color: black;
                }
            }
        }
  
  </style>