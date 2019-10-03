<template>
    <div class="mt-5 text-dark mx-4">
        <div class="text-center">
            <p class="title h2">インターネット上の脱出口</p>
            <p class="name h1">[Esc]</p>
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
                <b-col sm />
            </b-row>
        </div>

        <div id="bg-hwg" class="mt-5 rounded">
            <div class="p-4 mx-3 clearfix">
                <p class="h2">コミュニティー</p>
                <div class="h4 mt-3">
                    <p>
                        何かから逃げ出したいと思った時あなたのそばにいるコミュニティーです
                    </p>
                    <p>ぜひ参加してみてください</p>
                </div>
                <b-button
                    href="/community"
                    variant="outline-primary"
                    class="mt-5 d-block"
                >
                    コミュニティー一覧
                </b-button>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.title {
    padding-bottom: 0.5em;
    border-bottom: 0.2em solid #79f134;
}
.name {
    font-size: 4em;
    /* text-shadow: 0 0 10px #00d9ff; */
}
#bg-net {
    background-image: url("~assets/img/network.jpg");
    background-size: auto;
    background-color: rgba(255, 255, 255, 0.7);
    background-blend-mode: lighten;
}
#bg-hwg {
    background-color: #64d1ec56;
}
</style>
