<template>
    <div class="travel-map">
        <svg-map
            v-bind="$attrs"
            :map="World"
            :is-location-selected="isLocationSelected"
            v-on="$listeners"
            @click="showDetails"
            @keydown.prevent.space="showDetails"
        >
            <template
                v-for="(_, slotName) of $scopedSlots"
                v-slot:[slotName]="scope"
            >
                <slot
                    v-bind="scope"
                    :name="slotName"
                />
            </template>
        </svg-map>
        <div v-if="showMore" class="travel-map__modal">
            <button @click="hideDetails">close</button>

            <h4>{{ activeLocation.location_name }}</h4>
            <h6>{{ getActiveTripDate() }}</h6>

            <p>{{ activeLocation.description }}</p>
        </div>
    </div>
</template>

<static-query>
  query {
    locations: allLocations {
      edges {
        node {
          id
          location_id
          location_name
          description
          start_date
          end_date
        }
      }
    }
  }
</static-query>

<script>
import { SvgMap } from "vue-svg-map"
import World from "@svg-maps/world"

export default {
    name: "TravelMap",
    created () {
        this.locations = this.$static.locations.edges.map((x) => {
            const { location_id, ...rest } = x.node;
            return {
                [location_id]: rest
            }
        })
        this.locations = Object.assign({}, ...this.locations);
    },
    data () {
        return {
            World,
            locations: [],
            activeLocation: null,
            showMore: false
        }
    },
    methods: {
        isLocationSelected(location) {
            return Object.keys(this.locations).some(selectedLocation => selectedLocation === location.id)
        },
        getActiveTripDate() {
            const start_date = new Date(this.activeLocation.start_date)
            const end_date = new Date(this.activeLocation.end_date)

            return `${start_date} - ${end_date}`
        },
        showDetails(event) {
            const target = event.target && event.target.attributes.name.value
            Object.keys(this.locations).forEach((x) => {
                if (this.locations[x].location_name === target) {
                    this.activeLocation = this.locations[x];
                    this.showMore = true;
                }
            })
        },
        hideDetails(event) {
            this.showMore = false;
            this.activeLocation = null;
        }
    },
    components: {
        SvgMap
    }
}
</script>

<style lang="scss" scoped>
.travel-map {
    &__modal {
        position: fixed;
        top: 60px;
        width: calc(100% - 54px);
        height: calc(100% - 170px);
        padding: 15px;
        border: 1px solid darkgray;
        background-color: white;
    }
}
</style>
