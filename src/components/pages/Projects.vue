<template>
    <section id="projects">
        <h3>Projects</h3>
        <div v-for="project of projects" :key="project.id">
            {{ project.name }}
        </div>
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
export default {
    name: "ProjectsPage",
    created () {
        this.projects = this.$static.projects.edges.map((x) => x.node)
    },
    data () {
        return {
            projects: []
        }
    }
}
</script>