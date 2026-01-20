<template>
  <div class="app">
    <PostForm/>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
  import PostForm from '@/components/PostForm.vue';
  import PostList from '@/components/PostList.vue';

  export default {
    components: {
      PostForm, PostList
    },
    data() {
      return {
        posts: [
          { id: 1, title: "JS", body: "11111111111" },
          { id: 2, title: "JS-2", body: "22222222" },
          { id: 3, title: "JS-3", body: "3333333333333333" },
          { id: 3, title: "JS-4", body: "444444444444" },
        ],
        title: '',
        body: ''
      };
    },
    methods: {
      createPost() {
        const newPost = {
          id: Date().now,
          title: this.title,
          body: this.body
        }
        this.posts.push(newPost);
        this.title = '';
        this.body = '';
      },
    },
  };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
