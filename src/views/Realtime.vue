<template>
  <h2>Real Time test</h2>
  <div v-for="post in posts" :key="post.id"> 
    <div> 
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div><hr>
  </div>
</template>

<script>
import { ref } from 'vue'
import {db} from '../firebase/config'
export default {
    setup(){
        let posts = ref([]);
        db.collection("posts").orderBy("create_at","desc").onSnapshot((snap)=>{
            posts.value = snap.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            })
        })
        return {posts}
    }
}
</script>

<style>

</style>