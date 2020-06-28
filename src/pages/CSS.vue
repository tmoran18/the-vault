<template>
  <Layout>
    <h1>CSS</h1>
    <ul>
      <div v-for="post in $page.allPost.edges" v-bind:key="post.node.title">
        {{ post.node.title }} <br />
      </div>
      <div class="post-content">
        <p v-html="$page.allPost.content" />
      </div>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "CSS",
  },
};
</script>

<page-query>
    query {
  allPost(filter: { type: { eq: "html" }}) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>
