<template>
	<div class="post">
    <div>
      <div><strong>Name:</strong>{{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <base-button class="delete" @click="$emit('remove', post)">Delete</base-button>
    </div>
	</div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 1px solid teal;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>