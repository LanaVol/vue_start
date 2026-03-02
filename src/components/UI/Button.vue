<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup>
defineOptions({
  name: 'base-button'
})
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
    background-color: rgb(179, 36, 36);
    color: white;
    outline: none;
    border: none;
  }
  
  .btn.edit {
    background-color: teal;
    color: white;
    outline: none;
    border: none;
    margin-right: 4px;
  }
</style>