<template>
  <div class="app">
    <PostForm
      @create="createPost"
    />
    <PostList 
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';

  //state
  const posts = ref([
    { id: 1, title: "JS", body: "11111111111" },
    { id: 2, title: "JS-2", body: "22222222" },
    { id: 3, title: "JS-3", body: "3333333333333333" },
    { id: 4, title: "JS-4", body: "444444444444" },
  ])

  //methods
  const createPost = (post) => {
    posts.value.push(post);
  }

  const removePost = (post) => {
    posts.value = posts.value.filter(p => p.id !== post.id)
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
