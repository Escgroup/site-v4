<template>
    <div id="default" class="text-secondary">
        <Header />
        <div id="main">
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

<style>
#default {
    font-family: "Noto Sans JP", sans-serif;
    line-height: 1.7;
    font-feature-settings: "palt";
}
#main {
    height: 100vh;
}
</style>
