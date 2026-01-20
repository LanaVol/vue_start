<template>
	<div class="post" v-for="post in posts">
      <div><strong>Назва:</strong>{{ post.title }}</div>
      <div><strong>Опис:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
	export default {
    props: {
      posts: {
        type: Array,
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
  }
</style>