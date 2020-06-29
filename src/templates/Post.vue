<template>
  <Layout>
    <div class="snippet">
      <h2>{{ $page.post.title }}</h2>
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

// Name the Query Post
<page-query>

query Post($path: String!) {
  post: post (path: $path) {
    title
    content
  }
}
</page-query>
<style>
.snippet p {
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif !important;
}
</style>
