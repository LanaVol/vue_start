<template>
  <div class="post" v-for="post in posts">
    <div><strong>Назва:</strong>{{ post.title }}</div>
    <div><strong>Опис:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "JS", body: "11111111111" },
        { id: 2, title: "JS-2", body: "22222222" },
        { id: 3, title: "JS-3", body: "3333333333333333" },
        { id: 3, title: "JS-4", body: "444444444444" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post {
  padding: 15px;
  border: 1px solid teal;
  margin-bottom: 12px;
}
</style>
