<template>
    <div>
        <Header />
        <div class="main">
            <Nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
export default {
    components: { Header, Footer },
};
</script>

<style scoped>
div {
    font-family: "M PLUS Rounded 1c";
}
.main {
    height: 100vh;
}
</style>
