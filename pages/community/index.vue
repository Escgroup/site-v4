<template>
    <div>
        <h1 class="mt-3">コミュニティー</h1>
        <b-row class="mt-5">
            <b-col
                v-for="list in lists"
                :key="list"
                style="position: relative;"
                md="6"
            >
                <BgImg class="p-2 rounded" :img="path">
                    <div>
                        <h4>
                            {{ list.name }}
                            <b-badge v-if="list.cos" pill variant="info">
                                近日公開
                            </b-badge>
                        </h4>
                        <p>{{ list.text }}</p>
                        <div style="height:2em;"></div>
                        <div style="position: absolute; bottom: 0.5em;">
                            <b-button :disabled="list.cos">
                                参加する
                            </b-button>
                            <b-button :disabled="list.cos">
                                詳しく見る
                            </b-button>
                        </div>
                    </div>
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
            lists: [
                {
                    name: "Discord",
                    cos: false,
                    text:
                        "Discord上のコミュニティです。ゲーム、プログラムを中心に色々な活動をしています。基本的に毎日VCしています。",
                },
                {
                    name: "LINE",
                    cos: true,
                    text:
                        "作成、用意中です。公開出来たらDiscordのコミュニティの方で告知させていただきます。",
                },
            ],
            path: "/img/ai-think.jpg",
        };
    },
};
</script>
