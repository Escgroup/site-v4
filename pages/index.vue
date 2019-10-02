<template>
    <div class="mt-5 pt-5 text-dark mx-4">
        <div class="text-center">
            <p class="h2">インターネット上の脱出口</p>
            <p class="h1">[Esc]</p>
        </div>

        <div id="bg-net" class="mt-5 rounded">
            <b-row class="mx-3 p-4">
                <b-col class="text-left" sm>
                    <p class="h2">[Esc] とは</p>
                    <p class="h4 mt-3 justify">
                        Escape（エスケープ）の略です。
                        Escapeは日本語で「逃げる」を表します。
                        このグループは何かから逃げ出したいなと思ったときの脱出口、憩いの場のような場所を目指しています。
                    </p>
                </b-col>
                <b-col class="pb-5" sm />
            </b-row>
        </div>

        <div id="bg-hwg" class="mt-5 rounded">
            <div class="p-4 mx-3 clearfix">
                <p class="h2">コミュニティ</p>
                <div class="h4 mt-3">
                    <p>
                        何かから逃げ出したいと思った時あなたのそばにいるコミュニティです
                    </p>
                    <p>ぜひ参加してみてください</p>
                </div>
                <b-button
                    href="/community"
                    variant="outline-primary"
                    class="mt-5 d-block"
                >
                    コミュニティ一覧
                </b-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#bg-net {
    background-image: url("~assets/img/network.jpg");
    background-size: auto;
    background-color: rgba(255, 255, 255, 0.7);
    background-blend-mode: lighten;
}
#bg-hwg {
    background-color: #e9ecef;
}
</style>
