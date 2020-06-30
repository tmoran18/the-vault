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
  max-width: 800px;
  font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
}
h3 {
  font-size: 18px;
}

.description {
  margin-bottom: 40px;
}
</style>
