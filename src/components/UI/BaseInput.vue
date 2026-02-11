<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<script>
  export default {
    name: 'base-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style scoped>
  .input {
    width: 100%;
    border: 1px solid teal;
    margin-top: 8px;
    padding: 4px;
  }
</style>