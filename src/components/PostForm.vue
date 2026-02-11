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

<script>
	export default {
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
</style>