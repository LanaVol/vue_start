<template>
  <input 
    :value="modelValue" 
    @input="updateInput" 
    type="text" 
    class="input"
  >
</template>

<script setup>
//options
defineOptions({
  name: 'base-input'
});

//props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
});

const emit = defineEmits(['update:modelValue'])

//methods
const updateInput = (event) => {
  emit('update:modelValue', event.target.value)
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