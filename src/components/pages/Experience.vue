<template>
    <section id="experience">
        <h3>Experience</h3>

    </section>
</template>

<static-query>
  query {
    work_history: allWorkHistory (sortBy: "start_date", order: DESC) {
      edges {
        node {
          id
          title
          company
          location
          description
          skills
          start_date
          end_date
        }
      }
    }

    education: allEducation {
      edges {
        node {
          id
          school
          field
          graduated
          last_attended
        }
      }
    }

    skills: allSkills (sortBy: "sort_order", order: ASC) {
      edges {
        node {
          name
          level
          years
          category
        }
      }
    }
  }
</static-query>

<script>
import VueMarkdown from 'vue-markdown'
import Timeline from 'timeline-vuejs'

export default {
    name: "ExperiencePage",
    created () {
      const history = this.$static.work_history.edges.map((x) => x.node)
      const education = this.$static.education.edges.map((x) => x.node)

      const historyItems = history.map((x) => {
        return {
          from: new Date(x.start_date),
          title: x.title,
          description: x.company
        }
      })

      const educationItems = education.map((x) => {
        return {
          from: new Date(x.last_attended),
          title: x.school,
          description: x.field
        }
      })

      const allItems = [...historyItems, ...educationItems]

      allItems.forEach((x) => {
        if (x.from.getFullYear() in this.timelineItems) {
          this.timelineItems[x.from.getFullYear()].push(x)
        } else {
          this.timelineItems[x.from.getFullYear()] = [x]
        }
      })
    },
    data () {
        return {
            timelineItems: {},
        }
    },
    components: {
        VueMarkdown,
        Timeline
    }
}
</script>
