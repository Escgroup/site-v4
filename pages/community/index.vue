<template>
  <div>
    <h1 class="mt-3">コミュニティー</h1>
    <b-row class="mt-5" align-content="center">
      <b-col
        v-for="list in lists"
        :key="list"
        style="position: relative;"
        class="mt-2"
        md="6"
      >
        <BgImg class="p-2 rounded" :img="path">
          <div>
            <h4>
              {{ list.name }}
            </h4>
            <p>{{ list.description }}</p>
            <div class="p-3"></div>
            <div style="position: absolute; bottom: 0.5em;">
              <b-button :href="list.inviteUrl">
                参加する
              </b-button>
              <nuxt-link :to="list.name" append>
                <b-button :disabled="list.name === 'LINE'">
                  詳しく見る
                </b-button>
              </nuxt-link>
            </div>
          </div>
        </BgImg>
      </b-col>
      <b-col class="mt-5 text-center">
        <nuxt-link to="/community/rule">
          コミュニティーのルール
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BgImg from "~/components/bg-img.vue";
const list = require.context("../../assets/content/community/", false, /json$/);
export default {
  components: {
    BgImg,
  },
  data() {
    return {
      lists: list.keys().map(cm => list(cm)),
      path: "/img/ai-think.jpg",
    };
  },
};
</script>
