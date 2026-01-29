<template>
  <form @submit.prevent>
      <h3>Add posts data</h3>
      <input 
        class="input" 
        v-model="post.title"
        type="text" 
        placeholder="Name"
      >
      <input 
        class="input" 
        v-model="post.body"
        type="text" 
        placeholder="Description"
      >
      <Button 
        style="margin-top: 15px; align-self: flex-end;"
        @click="createPost"
      >
        Add
      </Button>
    </form>
</template>

<script>
import Button from '@/components/UI/Button.vue';

	export default {
    components: {
      Button
    },
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      }
    }
	}
</script>

<style scoped>
  form {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .input {
    width: 100%;
    border: 1px solid teal;
    margin-top: 8px;
    padding: 4px;
  }
</style>