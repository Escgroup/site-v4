<template>
    <div id="default" class="text-secondary">
        <Header />
        <main class="mx-5">
            <Nuxt />
        </main>
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

<style lang="postcss" scoped>
#default {
    font-family: "Noto Sans JP", sans-serif;
    line-height: 1.7;
    font-feature-settings: "palt";
}
main {
    min-height: 80vh;
}
</style>
