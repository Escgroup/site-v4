<template>
  <div id="cp-bg-img" class="text-dark" :style="bg">
    <slot></slot>
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
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  height: 100%;
}
</style>
