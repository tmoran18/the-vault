<template>
  <Layout>
    <section class="posts">
      <div class="content__title">
        <g-image src="../../assets/img/javascript_logo.jpg" width="150" />
        <h1>JavaScript</h1>
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
    title: "JavaScript"
  }
};
</script>

</page-query>
<page-query>
    query {
  allPost(filter: { type: { eq: "js" }}) {
    edges {
      node {
        title
        content
      }
    }
  }
}
</page-query>


<style scoped>

</style>