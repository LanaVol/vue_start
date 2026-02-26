<template>
	<div v-if="posts.length > 0">
    <h3>Posts List</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red;">Posts list is empty</h2>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue';

//props
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

//events
const emit = defineEmits(['remove']);
</script>

<style scoped>

</style>