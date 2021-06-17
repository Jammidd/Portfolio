<template>
    <section id="about" class="about-section">
        <h3 class="title">About</h3>

        <p>
            I am Richard Middleton, a full-stack developer with an emphasis in back-end development with Python.
            I enjoy creating automation tools, APIs, and experimenting with technologies such as Machine Learning,
            Natural Language Processing, Image Processing, and more. I am fascinated by robotics and the potential
            that comes with advances in that field. 
        </p>
        <p>
	        I am learning Spanish, currently I understand much but struggle to speak it. I enjoy water sports such
            as kayaking, boating, and jet-skiing when I can, and when I can’t I stick to games such as D&amp;D or
            video games, specifically open world style games like Skyrim.
        </p>

        <div id="svgMap"></div>
    </section>
</template>

<script>
import svgMap from "svgmap"

export default {
    name: "AboutPage",
    created () {
    }
}
</script>

<style lang="scss" scoped>
    .about-section {
        text-align: center;
        .title {

        }
    }
</style>