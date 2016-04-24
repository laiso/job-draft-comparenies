const sleep = require('sleep');
const Xray = require('x-ray');
const x = Xray();

/* https://job-draft.jp/companies on the browser
 var links = Array.from(document.querySelectorAll('.v-a-baseline a'))
 .filter((a) => { return a.href.indexOf('companies') > -1 })
 .reduce((text, a) => { return `${text}\n"${a}",` }, "");
 */
const links = [
    "https://job-draft.jp/companies/4",
    "https://job-draft.jp/companies/6",
    "https://job-draft.jp/companies/8",
    "https://job-draft.jp/companies/10",
    "https://job-draft.jp/companies/12",
    "https://job-draft.jp/companies/14",
    "https://job-draft.jp/companies/16",
    "https://job-draft.jp/companies/18",
    "https://job-draft.jp/companies/20",
    "https://job-draft.jp/companies/22",
    "https://job-draft.jp/companies/24",
    "https://job-draft.jp/companies/26",
    "https://job-draft.jp/companies/28",
    "https://job-draft.jp/companies/30",
    "https://job-draft.jp/companies/32",
    "https://job-draft.jp/companies/34",
    "https://job-draft.jp/companies/36"
];

/*
 スクレイピングしてnew Setして適当に作った
 */
var headers = [
    '情報発信に前向き',
    '社内勉強会が盛ん',
    '勉強会参加推奨',
    'サテライトオフィスあり',
    'シェアトップクラス',
    'スタートアップ',
    '海外展開',
    '希望したら異動OK',
    '住宅手当',
    '上場企業',
    '副業OK',
    'キーボードを選べる',
    'ディスプレイ何個でも',
    'フロアが静か',
    'マッサージが受けられる',
    'リモートワークOK',
    '音楽聞いてOK',
    '快適な机とイス',
    '開発マシンを選べる',
    '子育てに理解',
    '申請など雑務が楽チン',
    '精神と時の部屋的な場所がある',
    '服装自由',
    'CIによる自動テスト',
    'GitHub利用',
    'アジャイル開発',
    'ウォーターフォールじゃない',
    'ガントチャート使わない',
    'クラウドインフラ',
    'プルリクエストでコードレビュー',
    'リファクタリング推奨',
    '技術的負債返済に理解',
    '検証機が充実',
    '自社開発',
    '新規事業に挑戦的',
    'フリードリンク',
    '社食やお弁当制度がある',
    'フレックスタイム',
    '裁量労働制',
    '平日休み可能',
    'emacsユーザ多数',
    'vimユーザ多数',
    'zshユーザ多数',
    '男女比が偏っていない',
    '紙の履歴書不要',
    '面接時スーツ不要',
    '技術書購入支援',
    '時々ピザが配られる',
    '社長がエンジニア',
    '残業30h以内',
    '著名OSSコミッター在籍',
    '自動車・自転車通勤OK',
    '休みの多さが自慢'
    ];

const S = "|";
links.map((link) => {
    x(link, 'body', [{
        name: 'h1',
        tags: ['table li']
    }])(function (err, obj) {
        const name = obj[0].name;
        const tags = obj[0].tags;
        const checks = headers.reduce((text, t) => {
            const check = (tags.indexOf(t) > -1) ? ':white_check_mark:': '';
            return `${text}${check}${S}`;
        }, '');

        //console.log(`${name}${S}${link}${S}${checks}`); // CSV
        console.log(`${S}${name}${S}${link}${S}${checks}${S}`); // MKD
        sleep.sleep(1);
    });
});


