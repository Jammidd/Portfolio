<template>
    <div class="travel-map">
        <h4>My Travels</h4>
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
            <button @click="hideDetails" class="close-btn">close</button>
            <h4>{{ activeLocation.location_name }}</h4>
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
@import "../assets/scss/colors.scss";
.travel-map {
    max-width: 650px;
    margin: 50px auto;
    position: relative;
    &__modal {
        position: absolute;
        top: 60px;
        padding: 15px;
        border: 1px solid darkgray;
        background-color: white;

        .close-btn {
            position: absolute;
            top: 0;
            right: 0;
            background: transparent;
            border: none;
            padding: 10px;
            color: $azul;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        h4 {
            color: $dim-gray;
            font-weight: 500;
            font-size: 20px;
            margin: 15px;
            padding: 0;
        }
        p {
            line-height: 30px;
        }
    }
}
</style>
