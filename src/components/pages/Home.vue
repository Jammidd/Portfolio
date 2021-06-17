<template>
    <section id="home">
        <img class="avatar" :src="Avatar" />
        <div class="title">Richard Jamahl Middleton</div>
        <div class="subtitle">Python | VueJS</div>
    </section>
</template>

<script>
import Avatar from "@/assets/images/avatar.png";

export default {
    name: "HomePage",
    data () {
        return {
            Avatar: Avatar
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/colors";
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: LimeLight;
        text-align: center;
        .avatar {
            border-radius: 50%;
            box-shadow: 0 0 3px $lime;
            width: 200px;
            height: 200px;
        }
        .title {
            font-size: 26px;
            line-height: 38px;
            margin: 20px 0;
        }
        .subtitle {
            font-size: 18px;
            color: $lime;
        }
    }
</style>