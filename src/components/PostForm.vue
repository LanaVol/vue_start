<template>
  <form @submit.prevent>
      <h3>Add posts data</h3>
      <input 
        class="input" 
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        type="text" 
        placeholder="Name"
      >
      <input 
        class="input" 
        v-bind:value="post.body"
        @input="post.body = $event.target.value" 
        type="text" 
        placeholder="Description"
      >
      <button class="btn">Add</button>
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
  .btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    border-radius: 4px;
    color: teal;
    background: none;
    border: 2px solid teal;
  }
</style>