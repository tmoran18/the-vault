<template>
  <Layout>
    <section class="posts">
      <div class="content__title">
        <g-image src="../../assets/img/html_logo.png" width="100" />
        <h1>HTML</h1>
      </div>
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
  },
  metaInfo: {
    title: "HTML"
  }
};
</script>

</page-query>
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


<style>

</style>