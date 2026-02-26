<template>
  <form @submit.prevent>
      <h3>Add posts data</h3>
      <base-input 
        v-model="post.title"
        type="text" 
        placeholder="Name"
      />
      <base-input
        v-model="post.body"
        type="text" 
        placeholder="Description"
      />
      <base-button 
        style="margin-top: 15px; align-self: flex-end;"
        @click="createPost"
      >
        Add
      </base-button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

  //state
  const post = ref({
    title: '',
    body: ''
  });

  //events
  const emit = defineEmits(['create']);

  //methods
  const createPost = () => {
    post.value.id = Date.now();
    emit('create', post.value);
    post.value = {
      title: '',
      body: ''
    }
  }
</script>

<style scoped>
  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
</style>