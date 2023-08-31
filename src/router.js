import { createRouter, createWebHistory } from "vue-router";

//IMPORTIAMO I COMONNENTI
import HomePage from './pages/HomePage.vue';
import Albums from './pages/Albums.vue';
import AlbumShow from './pages/AlbumShow.vue';




const router = createRouter({
    history: createWebHistory(),
    routes : [
         {
            path :'/',
            name : 'homepage',
            component : HomePage,

         },
        
        {
            path :'/albums',
            name : 'Albums.index',
            component : Albums,

        },

        {
            path :'/albums/:slug',
            name : 'albums.show',
            component : AlbumShow,

        },
    ]
})

export { router};