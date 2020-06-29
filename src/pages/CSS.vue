<template>
  <Layout>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "CSS Snippets"
  }
};
</script>

</page-query>
<page-query>
    query {
  allPost(filter: { type: { eq: "css" }}) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>


<style>

</style>





