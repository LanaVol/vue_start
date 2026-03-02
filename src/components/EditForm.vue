<template>
  <div class="form-bg">
    <form @submit.prevent class="form--edit" @click.stop>
      <h3>Edit post</h3>
      
      <base-input
      v-model="editedPost.title"
      type="text"
      placeholder="Name"
      />
      
      <base-input
      v-model="editedPost.body"
      type="text"
      placeholder="Description"
      />
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

//props
const props = defineProps({
  post: {
    type: Object,
    default: null
  }
})

//state
let editedPost = ref({
  id: null,
  title: '',
  body: ''
})

watch(
  () => props.post,
  (newPost) => {
    if (newPost) {
      editedPost.value = {
        id: newPost.id,
        title: newPost.title ?? '',
        body: newPost.body ?? '',
      };
    } else {
      editedPost.value = { id: null, title: '', body: '' };
    }
  },
  { immediate: true }
);


</script>

<style scoped>
body {
  position: relative;
}
.form-bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(38, 104, 104, 0.308);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form--edit {
  width: 300px;
  height: 180px;
  padding: 16px;
  border-radius: 12px;
  background-color: white;
}
</style>