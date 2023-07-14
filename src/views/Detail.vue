<template>
  
  <div v-if="post"> 
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div v-else> 
    <Spinner></Spinner>
  </div>
  <button class="delete" @click="deletePost">Delete</button>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
import { useRoute } from 'vue-router';
import {useRouter} from 'vue-router';
import { db } from '../firebase/config';
export default {
  components: { Spinner },
    props:["id"],//this.$route.params.id
    setup(props){
      let route = useRoute();//this.$route
      let router = useRouter();
      // console.log(route.params.id);
      
       let {post,error,load} =  getPost(route.params.id); //{post,error,load}
       load();
       let deletePost = async()=>{
        let id = props.id;
        await db.collection("posts").doc(id).delete();
        router.push("/");
      }
       return {post,error,deletePost}
    }
}
</script>

<style>
  button.delete{
    margin: 30px auto;
    
  }
</style>