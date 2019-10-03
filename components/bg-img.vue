<template>
    <div id="cp-bg-img" :style="bg">
        <slot class="text-dark"></slot>
    </div>
</template>

<script>
export default {
    props: { img: { type: String, default: null } },
    data() {
        return {
            bg: `background-image: url('${this.img}');`,
        };
    },
};
</script>

<style lang="postcss" scoped>
#cp-bg-img {
    background-size: auto;
    background-color: rgba(255, 255, 255, 0.8);
    background-blend-mode: lighten;
}
</style>
