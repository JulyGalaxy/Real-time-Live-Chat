<template>
  <h1>Post Lists</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:["posts"],
    setup(props){
        onMounted(()=>console.log("component mounted"));
        onUnmounted(()=>console.log("component unmounted"));
        onUpdated(()=>{console.log("data updated")});
    }
}
</script>

<style>

</style>