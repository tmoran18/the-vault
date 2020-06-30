<template>
  <div class="post-list">
    <h3 class="title" v-html="post.title" />
    <p class="description" v-html="post.content" />
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style>
.shiki {
  padding: 10px;
  border-radius: 5px;
  max-width: 720px;
  font-size: 16px;
}
h3 {
  font-size: 18px;
}
</style>
