<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'base-button'
  }
</script>

<style scoped>
  .btn {
    padding: 10px 15px;
    border-radius: 4px;
    color: teal;
    background: none;
    border: 2px solid teal;
  }
  .btn.delete {
    background-color: teal;
    color: white;
    outline: none;
    border: none;
  }
</style>