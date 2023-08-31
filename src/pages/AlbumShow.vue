<template>
    <SingleAlbum class="album-card w-50 m-auto" v-if="album " :album="album" />
</template>
  
<script>
import axios from 'axios';
import SingleAlbum from '../components/SingleAlbum.vue';

 
  export default {
    name: 'AlbumShow',
    components: { 
         SingleAlbum
     },

     data() {
        return {
            apiUrl : 'http://127.0.0.1:8000',
            album: false
        }
    },
    methods: {
        getSingleAlbum(){
            console.log(this.$route.params.slug);
            axios.get(`${this.apiUrl}/api/albums/${this.$route.params.slug}`).then((response) => {
                console.log(response);
                this.album = response.data.results;
            }).catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },

    created() {
        this.getSingleAlbum();
    },
}
</script>
  
  <style lang="scss" scoped>

 
  
  </style>