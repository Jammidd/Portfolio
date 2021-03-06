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
        height: calc(100vh - 150px);
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 10px;
        .focused-item {
            background-size: cover;
            background-repeat: no-repeat;
            background-color: $gainsboro;
            position: relative;
            grid-column: 1 / 13;
            height: 450px;  

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
                &__links {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 10px;
                    & > a {
                        padding: 15px 25px;
                        border: none;
                        box-shadow: 0 0 4px $charcoal;
                        color: $stone;
                        text-decoration: none;
                        border-radius: 4px;
                        text-align: center;
                        text-transform: uppercase;
                        font-size: 14px;
                        &:hover {
                            font-weight: bold;
                        }
                    }
                    .caption__demo {
                        background: $green;
                        grid-column: 1 / 6;
                        &:hover {
                            background: lighten($green, 15%);
                        }
                    }
                    .caption__code {
                        background: $azul;
                        grid-column: 8 / 13;
                        &:hover {
                            background: lighten($azul, 15%);
                        }
                    }
                }

            }
        }
        .panel {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            overflow-y: scroll;
            grid-column: 1 / 13;
            gap: 8px;
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
                cursor: pointer;
            }
        }

        @include for-tablet-portrait-up {
            flex-direction: row;
            .focused-item {
                grid-column: 1 / 10;
                height: 100%;
            }

            .panel {
                grid-column: 10 / 13;
                align-content: baseline;
                .panel-item {
                    margin-top: 0;
                }
            }
        }
    }
</style>