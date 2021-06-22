<template>
    <div class="gallery">
        <div class="focused-item" :style="`background-image: url('${focusedItem.image}')`">
            <slot>
                <div class="caption">
                    <h3 class="caption__title">{{focusedItem.name}}</h3>
                    <p class="caption__description">{{focusedItem.description}}</p>
                    <div class="caption__links">
                        <a
                            v-if="focusedItem.demo_url"
                            class="caption__demo"
                            :href="focusedItem.demo_url"
                        >Demo</a>
                        <a
                            v-if="focusedItem.source_url"
                            class="caption__code"
                            :href="focusedItem.source_url"
                        >View Code</a>
                    </div>
                </div>
            </slot>
        </div>
        <div class="panel">
            <button
                v-for="(item, index) in items"
                :key="item.id"
                class="panel-item"
                :style="`background-image: url('${item.image}')`"
                @click="selectItem(index)"
            ></button>

            <button
                v-for="(item, index) in items"
                :key="'test=' + item.id"
                class="panel-item"
                :style="`background-image: url('${item.image}')`"
                @click="selectItem(index)"
            ></button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Gallery",
    props: ['items'],
    created () {
        if (this.items.length > 0) {
            this.focusedItem = this.items[this.position]
        }
    },
    data () {
        return {
            position: 0,
            focusedItem: {}
        }
    },
    methods: {
        moveRight () {
            this.position += 1;
            this.focusedItem = this.items[this.position]
        },
        moveLeft () {
            this.position -= 1;
            this.focusedItem = this.items[this.position]
        },
        selectItem (index) {
            this.position = index
            this.focusedItem = this.items[this.position]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/screens.scss";
    @import "../../assets/scss/colors.scss";
    .gallery {
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        .focused-item {
            background-size: cover;
            background-repeat: no-repeat;
            background-color: $gainsboro;
            flex-grow: 1;
            position: relative;

            .caption {
                background: rgba(0,0,0,0.6);
                position: absolute;
                bottom: 0;
                right: 0;
                left: 0;
                padding: 15px;

                &__title {
                    padding: 0;
                    margin: 0;
                    letter-spacing: 5px;
                }
                &__description {
                    padding: 15px 0;
                }
                &__links > a {
                    padding: 10px 25px;
                    border: none;
                    box-shadow: 0 0 4px $charcoal;
                    color: $stone;
                    text-decoration: none;
                    border-radius: 4px;
                }
                &__demo {
                    background: $green;

                    &:hover {
                        background: lighten($green, 15%);
                    }
                }
                &__code {
                    background: $azul;
                    &:hover {
                        background: lighten($azul, 15%);
                    }
                }
            }
        }
        .panel {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            overflow-y: scroll;
            gap: 10px;
            .panel-item {
                background-color: $gainsboro;
                background-size: cover;
                background-repeat: no-repeat;
                flex-grow: 0;
                flex-shrink: 0;
                margin-top: 5px;
                display: inline-block;
                width: 100px;
                height: 100px;
                border: none;
            }
        }

        @include for-tablet-portrait-up {
            flex-direction: row;

            .panel {
                .panel-item {
                    margin-top: 0;
                }
            }
        }
    }
</style>