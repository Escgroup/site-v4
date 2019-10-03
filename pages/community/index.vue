<template>
    <div>
        <h1 class="mt-3">コミュニティー</h1>
        <b-row class="mt-5 mx-3">
            <b-col v-for="list in lists" :key="list" sm>
                <BgImg class="m-2 p-2 rounded" :img="path">
                    <h4>
                        {{ list.name }}
                        <b-badge v-if="list.cos" pill variant="info">
                            近日公開
                        </b-badge>
                    </h4>
                </BgImg>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import BgImg from "~/components/bg-img.vue";
export default {
    components: {
        BgImg,
    },
    data() {
        return {
            lists: [{ name: "Discord" }, { name: "LINE", cos: true }],
            path: "/img/ai-think.jpg",
        };
    },
};
</script>
