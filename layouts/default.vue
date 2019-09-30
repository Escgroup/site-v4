<template>
    <div>
        <Header />
        <Nuxt />
    </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
    components: { Header },
};
</script>

<style scoped>
div {
    font-family: "M PLUS Rounded 1c";
}
</style>
