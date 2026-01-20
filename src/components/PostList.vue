<template>
	<div>
    <h3>Posts List</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
    />
  </div>
</template>

<script>
  import PostItem from '@/components/PostItem.vue';

	export default {
    components: {
      PostItem
    },
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