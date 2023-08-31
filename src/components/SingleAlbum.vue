<template>
    <div class="card album-card" style="width: 20rem;">
        <div class="card-body">
            <img v-if="album.image.startsWith('http')" :src="album.image" alt="" >
            <img v-else :src="'http://127.0.0.1:8000/storage/' + album.image" alt="">
            <div class="card-body" style="height: 12rem;" >
                <p> Singer Name's: <span class="font-size ">{{ album.singer_name }}</span></p>
                <p>Title : <span class="font-size ">  {{ album.title }}</span></p> 
                <p>Category : <span class="font-size ">{{ album.album_type.name }} </span></p>
                <p> Genre : <span class="font-size "> {{ album.genres }}</span></p>
                <p v-for="technology in album.technologies" :key="technology"> {{technology.name}}</p>
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

   div.album-card{
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

   .font-size{
    font-size: 12px;
   }
  </style>