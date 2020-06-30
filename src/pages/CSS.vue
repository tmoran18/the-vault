<template>
  <Layout>
    <section class="posts">
      <div class="content__title">
        <g-image src="../../assets/img/css_logo.png" width="100" />
        <h1>CSS</h1>
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
    title: "CSS"
  }
};
</script>

</page-query>
<page-query>
    query {
  allPost(sortBy: "title", order: ASC, filter: {type: { eq: "css" }}) {
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





