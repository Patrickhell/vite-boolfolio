<template>
    <nav>
        <ul>
            <li v-for="link in linkList " :key="link">
                <router-link :to="{ name: link.route }">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            linkList : [

                { //qui la route corrisponde al name della route.js e il name Lo scegli tu .
                    route: 'homepage',
                    name: 'Home'
                },
                
                {
                    route: 'Albums.index',
                    name: 'Albums'
                },
            ]
        }
    },
}
</script>
<style lang="scss">
    nav{
        margin-bottom: 4rem;
        width: 100%;
        padding: 1rem 3rem;
        background-color: rgb(232, 232, 232);
        color: black;

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
    }
</style>