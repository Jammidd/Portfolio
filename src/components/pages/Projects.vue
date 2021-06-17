<template>
    <section id="projects">
        <h3 class="title">Project Gallery</h3>
        <Gallery :items="projects"/>
    </section>
</template>

<static-query>
  query {
    projects: allProjects {
      edges {
        node {
          id
          name
          description
          demo_url
          source_url
          image
        }
      }
    }
  }
</static-query>

<script>
import Gallery from "../gallery/Gallery.vue"

export default {
    name: "ProjectsPage",
    created () {
        this.projects = this.$static.projects.edges.map((x) => x.node)
    },
    data () {
        return {
            projects: []
        }
    },
    components: {
      Gallery
    }
}
</script>

<style lang="scss" scoped>
  .title {
    text-transform: uppercase;
    text-align: center;
    margin-top: -25px;
  }
</style>