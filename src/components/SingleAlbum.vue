<template>
    <div>
        <div>
            <div>
                <div class="card " style="width: 20rem;">
                    <div class="card-body">
                        <img v-if="album.image.startsWith('http')" :src="album.image" alt="" >
                        <div class="card-body" style="height: 12rem;">
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
 
  export default {
      name: 'SingleAlbum',
      props : {
        
        'album': Object
      },
  
  }
</script>
  
  <style lang="scss" scoped>
   

   div.card{
            width: calc((100% / 3) - 1rem);
            height: auto;
            border-radius: 1rem;
            margin-right: 1rem;
            background-color: rgb(189, 197, 211);
            color: black;
            margin-bottom: 2rem;


            img{
                width: 100%;
                object-fit: cover;
            }
   }
  </style>