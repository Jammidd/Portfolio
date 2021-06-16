<template>
    <section class="footer">
        <div class="copy">{{ year }} &copy; Richard Middleton</div>
        <ul class="social-links">
            <li v-for="link of links" :key="link.id">
                <a :href="link.url" target="_blank">
                    <font-awesome-icon
                        :icon="[(link.name === 'Envelope') ? 'far' : 'fab', link.name.toLowerCase()]"
                        size="lg"
                    />
                </a>
            </li>
        </ul>
    </section> 
</template>

<static-query>
  query {
    links: allLinks {
      edges {
        node {
          id
          name
          handle
          url
        }
      }
    }
  }
</static-query>

<script>
export default {
    name: "FooterPage",
    created () {
        this.links = this.$static.links.edges.map((x) => x.node)
    },
    data () {
        return {
            icons: {},
            links: [],
            year: new Date().getFullYear(),
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/screens.scss";
    section.footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        & > * {
            margin: 20px 0;
        }
        ul {
            display: block;
            list-style: none;
            margin: 0;
            padding: 0;
            li {
                display: inline-block;
                padding: 0;
                margin: 0 5px;
                a {
                    color: inherit;
                }
            }
        }

        @include for-tablet-portrait-up {
            flex-direction: row;

            & > * {
                margin: 0;
            }
        }
    }
</style>
