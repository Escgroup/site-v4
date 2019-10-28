<template>
    <div>
        <h1>[Esc] Group コミュニティー ルール</h1>

        <p class="mt-5">
            [Esc] Groupの目的は、
            何かから逃げ出したいなと思ったときの脱出口、憩いの場を提供する事です。
            すべての利用者が自由に、安心して楽しめるようにこの様なルールを用意しています。
        </p>

        <b-row class="pt-5">
            <b-col md>
                <b-list-group class="text-center mb-3">
                    <b-list-group-item href="#prohibited">
                        禁止事項
                    </b-list-group-item>
                    <b-list-group-item href="#execution">
                        ルールの執行
                    </b-list-group-item>
                    <b-list-group-item href="#apply">
                        ルールの適用
                    </b-list-group-item>
                    <b-list-group-item href="#objection">
                        異議申し立て
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col cols="8">
                <div id="prohibited">
                    <h2>禁止事項</h2>
                    <ul class="mt-3">
                        <li v-for="item in prohibited" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div id="execution">
                    <h2>ルールの執行</h2>

                    <p>
                        ルールに違反した場合運営から警告、もしくは一時又は永久的な利用禁止を行います。
                    </p>
                    <p>
                        また、利用させていただいているサービスの規約等に引っかかる内容の場合
                        そちらのサービスの運営に報告させていただきます。
                    </p>
                </div>
                <div id="apply">
                    <h2>ルールの適用</h2>
                    <p>
                        コミュニティーに参加した時点でこの内容を理解し、受け入れているとみなされます。
                    </p>
                    <p>
                        この内容を受け入れられない場合は速やかにコミュニティーから退出する事を義務付けます。
                    </p>
                </div>
                <div id="objection">
                    <h2>異議申し立て</h2>
                    <p>
                        ルールに違反していないのに利用禁止等の判決を受けた場合
                        <a href="https://forms.gle/ibXUaWXThQYowuZF8">こちら</a>
                        から異議申し立てを行ってください。
                        通常１週間程度で返信します
                    </p>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            prohibited: [
                "挑発的な発言、行為",
                "誹謗中傷など個人又は複数のユーザーを批判する行為",
                "人種、国籍、宗教、性別、貧富等による差別・侮辱",
                "わいせつな内容、性的表現、下ネタ",
                "自虐的発言",
                "自傷行為",
                "不快な印象を与える発言等",
                "許可のない宣伝や勧誘",
                "無意味な重複発言",
                "個人情報等ユーザーを特定する行為",
                "なりすまし",
                "反社会的な内容の発言",
                "利用しているサービスの規約等の違反行為",
                "運営に対する過度な要求",
                "運営上の妨げになる行為",
                "運営が判断した不適切な内容",
            ],
        };
    },
};
</script>
