<template>
  <div>
    <button v-on:click="increaseCount">Increase count</button>
    <button v-on:click="decreaseCount">Decrease count</button>
    <div>
      Amount of counts: <strong>{{ counts }}</strong>
    </div>
    <div>
      Amount of numbers: <strong>{{ numbers }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts: 5,
      numbers: 10,
    };
  },
  methods: {
    increaseCount() {
      this.counts += 1;
    },
    decreaseCount() {
      this.counts -= 1;
    },
  },
};
</script>

<style></style>
