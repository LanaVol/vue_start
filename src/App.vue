<template>
  <div class="app">
    <PostForm
      @create="createPost"
    />
    <PostList 
      :posts="posts"
      @remove="removePost"
      @edit="editPost"
    />
    <EditForm 
      v-if="isModalOpen"
      @click="isModalOpen = false"
      :post="editingPost ?? {}"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';
  import EditForm from './components/EditForm.vue';

  //state
  const posts = ref([
    { id: 1, title: "JS", body: "11111111111" },
    { id: 2, title: "JS-2", body: "22222222" },
    { id: 3, title: "JS-3", body: "3333333333333333" },
    { id: 4, title: "JS-4", body: "444444444444" },
  ])

  const isModalOpen = ref(false);
  let editingPost = ref(null);
  const errors = ref([]);

  const isPostValidation = (post) => {
    if (post.title == '') {
      errors.value.push('The title is empty');
    }
    if (post.body == '') {
      errors.value.push('The body is empty');
    }

    return errors.value.length > 0;
  }

  //methods
  const createPost = (post) => {
    if (isPostValidation(post)) return;

    posts.value.push(post);
  }

  const removePost = (post) => {
    posts.value = posts.value.filter(p => p.id !== post.id)
  }

  const editPost = (post) => {
    isModalOpen.value = true;

    editingPost.value = post;

    console.log(post);
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
  max-width: 1100px;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
