/* eslint-disable */
import type { Post, Project, Page } from '../lib/content-types';
import Post_ja_2022_blog_tutorial from '../../data/post/ja/2022/blog-tutorial.mdx';
import Post_ja_2023_itpassport_cert from '../../data/post/ja/2023/itpassport-cert.mdx';
import Post_ja_2024_ddd from '../../data/post/ja/2024/ddd.mdx';
import Post_ja_2026_best_practices from '../../data/post/ja/2026/best-practices.mdx';
import Post_vi_2022_blog_tutorial from '../../data/post/vi/2022/blog-tutorial.mdx';
import Post_vi_2023_books_2023 from '../../data/post/vi/2023/books-2023.mdx';
import Post_vi_2023_cheapest_sim_cards from '../../data/post/vi/2023/cheapest-sim-cards.mdx';
import Post_vi_2023_drive_cert from '../../data/post/vi/2023/drive-cert.mdx';
import Post_vi_2023_fe_cert from '../../data/post/vi/2023/fe-cert.mdx';
import Post_vi_2023_itpassport_cert from '../../data/post/vi/2023/itpassport-cert.mdx';
import Post_vi_2024_aws_saa_c03_cert from '../../data/post/vi/2024/aws-saa-c03-cert.mdx';
import Post_vi_2024_books_in_2024 from '../../data/post/vi/2024/books-in-2024.mdx';
import Post_vi_2024_n1_how_hard_it_is from '../../data/post/vi/2024/n1-how-hard-it-is.mdx';
import Project_vi_2024_e_commerce from '../../data/project/vi/2024/e-commerce.mdx';
import Page_ja_about from '../../data/pages/ja/about.mdx';
import Page_ja_policy from '../../data/pages/ja/policy.mdx';
import Page_ja_roadmap from '../../data/pages/ja/roadmap.mdx';
import Page_ja_term from '../../data/pages/ja/term.mdx';
import Page_vi_about from '../../data/pages/vi/about.mdx';
import Page_vi_policy from '../../data/pages/vi/policy.mdx';
import Page_vi_roadmap from '../../data/pages/vi/roadmap.mdx';
import Page_vi_term from '../../data/pages/vi/term.mdx';

export const allPosts: Post[] = [
{
    ...{
    "body": {
        "raw": "\nこのブログはテンプレート [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) から複製しました。 このソースは最初は問題ありませんでしたが、しばらく使用すると、次のような問題が発生しました。\n\n-   使用するライブラリが多すぎます。 依存関係が多すぎるため、古いコア ライブラリを更新できない\n\n-   mdx から記事を構築するコードが複雑すぎる\n\n-   テーマはライトとダークの 2 つだけです\n\n-   SEO の最適化がうまくいっていない\n\nゼロから作るのは楽しい！\n\n-   解決すべき問題があると嬉しい\n\n-   新しい知識を喜んで学ぶ\n\n-   破壊的な実験をする機会を得てうれしい\n\nぜひ試してみてはいかがでしょうか。 このペットプロジェクトを一緒に計画しましょう:D.\n\n## ブログ サイトには何が必要ですか?\n\nブログに必要な基本機能:\n\n-   投稿\n\n-   タグ（記事を分類）\n\n-   About(著者情報)\n\nただし、彼のブログに関しては。 制限なく自由に作成できるため、次のような興味深い機能をいくつか思いつきました。\n\n-   Spotify のステータス\n\n-   投稿ビュー\n\n-   コードスニペット\n\n-   今日は学びます (毎日学んだことを保存します)\n\n-   インタラクティブな記事。 例: 記事にコードを挿入します\n\n...\n\nそして、私の古いブログが遭遇した問題を解決することが重要です。\n\n## インターフェースはどのようなものであるべきでしょうか?\n\n私はデザイナーについては何も知らないので、インターフェイスを盗むことが最も合理的な解決策のようです:))。 私が選ぶ参考ソースはドリブルとビハンスです。 ただし、非常にミニマリストであるため、主にインターフェイスは古いブログのままにしています。\n\n次に、適切な色を選択します。[Rosé Pine](https://rosepinetheme.com/) パレットは、IT グループ チャットで見つけました。 このカラーパレットはユーザーに心地よい感覚をもたらします。\n\n![ロゼパイン](/static/images/2022/blog-tutorial/rosepine.png)\n\n最後に、フォントを選択します。\n\n-   タイトルは **Barlow**\n-   コンテンツの **Barlow Condensed**\n-   コード内の **Consolas** フォント。 エディターで使用しているフォント\n\n## どのテクノロジーを選択すればよいでしょうか?\n\n欠かすことのできないテクノロジー:\n\n-   [Typescript](https://www.typescriptlang.org/) JavaScript の使用体験は本当に退屈です。 しかし、typescript を使用すると、\n-   [Markdown](https://www.markdownguide.org/) 書くのに最適な言語\n-   [MDX](https://mdxjs.com/) を使用すると、マークダウン ファイルに jsx を記述することができます\n-   [Next.js](https://nextjs.org/) は Web サイトのメインフレームワークです\n-   [Tailwindcss](https://tailwindcss.com/)。 さらに、tailwindcss エコシステムのいくつかのツール (ヘッドレス UI、ヒーローアイコン、ヒーローパターンなど) も使用します。\n-   [Framer motion](https://www.framer.com/motion/) アニメーション作成用ライブラリ\n-   [Render](https://render.com/) 数回クリックするだけで postgresql データベースをセットアップします。 そして ORM[プリズマ](https://www.prisma.io/)\n-   [sentry.io](https://sentry.io/) はウェブサイトの追跡に使用されます\n\n# グローバルレイアウトの構築\n\n## 詳細\n\nWeb のレイアウトは 3 つの部分で構成されます。\n\n-   ヘッダー: Web サイト名、ナビゲーション、テーマスイッチャーが含まれます\n\n-   メイン: ページのコンテンツ\n\n-   フッター: 著者情報、著作権\n\n私たちのほとんどは古い Web デザインを再利用しますが、次のような調整がいくつかあります。\n\n-   [ヒーロー パターン](https://heropatterns.com/) の背景 **回路基板** を使用します\n\n-   古い Web のダーク モードとライト モードの代わりに、異なるテーマを使用します。\n\n設定方法は非常に簡単で、CSS 変数アプリケーションです。\n\n```css\n/* 2 つのテーマを定義します: */\n.theme-first {\n    /*25 23 36 は rgb(25,23,36) を意味します */\n    --カラーベース: 25 23 36;\n    --color-surface: 31 29 46;\n    --カラーテキスト: 38 35 58;\n}\n\n.theme-秒 {\n    --カラーベース: 250 244 237;\n    --color-surface: 255 250 243;\n    --カラーテキスト: 242 233 222;\n}\n\n/* クラスでカラーテーマを使用します: */\n.my-box {\n    幅: 100ピクセル;\n    高さ: 100ピクセル;\n    背景: rgb(var(--color-base));\n}\n```\n\nテーマを使用するには、テーマのクラス名を body タグに追加するだけです。 例えば：\n\n```html\n<body class=\"テーマファースト\">\n    <div class=\"my-box\"></div>\n</body>\n```\n\ntailwindcss を使用しているため、ファイル `tailwind.config.js` でもう 1 つの手順を設定する必要があります。\n\n```js\n // クラス opacity-[value] を使用できるようにするには、この関数が必要です\n関数 withOpacityValue(変数) {\n  return ({ opacityValue }) => {\n    if (opacityValue === 未定義) {\n      `rgb(var(${variable}))`を返します;\n    }\n    return `rgb(var(${variable}) / ${opacityValue})`;\n  };\n}\n\n // テーマ内の変数 CSS の数を定義します。\nテーマカラー = { にします\n  ベース: withOpacityValue('--color-base')、\n  表面: withOpacityValue('--color-surface')、\n  テキスト: withOpacityValue('--color-text'),\n  //...\n};\n\nmodule.exports = {\n  ノイ・ズン: [\n    './pages/**/*.{js,ts,jsx,tsx}',\n    './components/**/*.{js,ts,jsx,tsx}',\n  ]、\n  テーマ： {\n    伸ばす： {\n      色: テーマの色、\n    }、\n  }、\n  プラグイン: []、\n};\n```\n\n使用：\n\n```html\n<button className=\"bg-base text-text p-3\">Hello World</button>\n```\n\n最後に、ライブラリ [next-主題](https://github.com/pacocoursey/next-主題)を使用します。 わずか数行のコードでテーマを簡単に切り替えることができます。\n\n# 結論する\n\nしたがって、基本的なブログページが作成されました。 たくさんのパッケージを使用していますが、それらのおかげでコーディングがよりスムーズかつ簡単になりました。\n\nこの記事が、あなたが私と同じようなブログを作成するのに部分的に役立つことを願っています:d。\n"
    },
    "readingTime": {
        "text": "7 min read",
        "minutes": 6.22,
        "time": 373200,
        "words": 1244
    },
    "title": "ブログ作成方法",
    "date": "2022-06-01",
    "summary": "簡単なブログの作成紹介します",
    "lang": "ja",
    "image": "/static/images/2022/blog-tutorial/newblog.png",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'blog-tutorial',
},
{
    ...{
    "body": {
        "raw": "\n「IT パスポート（IT パスポート）」は、IT 業界への就職を考えている人、またはこれから IT 業界に参入する人の多くが興味を持つ資格試験です。 IT の基礎知識を多く含む試験内容となっておりますので、将来プログラマーを目指して IT を勉強している方だけでなく、IT 企業の営業職や人事職に就いている、またはこれから勤務するサイト会経済界の方も受験可能です。試みることができます。 以下の記事では、IT パスポート試験に関する最も一般的な情報をまとめて、興味のある人がさらに詳しく学べるようにします。\n\n## 目次\n\n1. [IT パスポート認定試験](#introduction)\n2. [IT パスポート証明書のメリット](#advantage-points)\n3. [効果的な試験対策本のご紹介](#effect-books)\n4. [概要](#summary)\n\n---\n\n<span id='introduction'></span>\n\n# IT パスポート認定試験\n\n**IT パスポート証明書とは何ですか?**\n\nIT パスポート（IT）認定試験は、独立行政法人情報処理推進機構（IPA）が主催する、経済産業省認定の IT 技術者向け国家資格の一つであり、日本の産業界でも認められています。 名前が示すように、この試験に合格した受験者は IT 分野に参入するための「パスポート」を手に入れることができ、試験の学習プロセスは学習者にこの業界に関する最も基本的な知識を提供することを意味します。\n\n**試験の時間と場所**: 試験は年に 5 ～ 6 回行われ、時間は会場によって異なり、1 日あたり午前、正午、午後の 3 回行われます。 試験会場は 47 の州に分散されており、試験日の 3 か月前に発表されます。こちらを参照してください。\n\n**受験料**：7,500 円（税込）。 お支払いはクレジットカード、コンビニ、商品券がご利用いただけます...\n\n**試験形式**: CBT (Computer Based Testing) フォームを使用して、試験委員会のコンピュータで試験を受けます。 120 分で 100 個の質問に答えます。\n\n**問題方法**: 正しい答えを選択してください。\n\n**登録方法**：Web からの登録のみとなります。\n\n登録方法の詳細は[こちら](https://www3.jitec.ipa.go.jp/JitesCbt/html/examination/apply.html)をご覧ください。\n\n**試験内容**: などの分野の基本的な IT 知識に重点を置きます。\n\n**難易度**: 日本語 N3 レベルの場合、平均して 30 ～ 50 時間の独習が必要です。IT の基礎知識がない場合は 100 時間かかります。 IT または情報通信を専攻する学生の場合、少なくとも 20 時間の学習が必要です。 試験の難易度は各人のコンピュータの使用能力によって異なります。\n\n**合格率**: 合格率は 600/1000 点です。 過去の試験の合格率は 60％、最近の試験の合格率は 50％です。 簿記検定 3 級と同等の難易度・合格率と評価されています。\n\n<span id='advantage-points'></span>\n\n# IT パスポート証明書のメリット\n\n**認定資格の特徴**: IT パスポート試験では、特定の IT スキルに習熟している必要はありませんが、情報技術分野における多くの包括的な知識が必要となるため、初心者向けの試験と考えてください。 学習者は、証明書にすでに含まれている基礎から、より高いレベルの IT スキルを完全に学ぶことができます。 そのため、IT エンジニアを目指す学生だけでなく、IT 企業の営業や人事など多くの IT 関連の仕事にも応用できる学位です。\n\n**理系学生のメリット**: 情報処理の基礎知識を補う資格として、基礎を固めることができるため、学生にとって非常に役立ちます。特に専門学校で IT を学んでいる方にとっては、自己 PR プロセスに役立ちます IT エンジニアを目指して求人に応募したい方。 IT パスポートは、他の IT 資格と同様、国家資格として認められている重要な IT 資格制度に属しています。\n\n**サイト会経済学生（文系）のメリット**: IT パスポート資格は、IT とはあまり関係がないと思われる他の事務職でも実用的な資格です。 今日、特にオフィスワーカーにとって、コンピュータやネットワーク接続にさらされることがますます一般的かつ必要なものとなっています。 そのため、セキュリティ対策への理解や基本的な情報知識は大きなアドバンテージとなります。 実はこの資格は事務仕事におけるパソコンスキルの証明となるのでとても便利です。 さらに、就職活動のプロセスにおいて、この認定試験に合格することは雇用主にとっても大きなプラスとなり、特にサイト会経済分野の企業にとっては、認定試験に合格した際に自信を持って自己 PR を行うことができます。もしくは IT 企業に勤めている方。\n\n**MOS 認定に対する利点**: MOS は Microsoft Office Specialist の略です。 特にオフィスとは Windows、Excel、Word、PowerPoint などのソフトウェアの通称であり、すべてマイクロソフトの製品です。 これらのオフィスソフトは会サイトで仕事をする上で欠かせないソフトの一つと言えます。 MOS はオフィスソフトの使用スキルを証明できる資格で、多くの専門学校が奨励しています。 IT パスポート試験は MOS 試験とは異なり、多くの知識が求められます。\n\n**IT 関連の認定試験をさらに紹介**:\n\n1/ *情報処理技術者試験*は、基本的な情報処理スキルの証明書であり、学生はさまざまな能力と IT スキルを雇用主に示すことができます。\n\n2/ 「情報セキュリティマネジメント試験」は、多くの企業から評価されている情報セキュリティの資格であり、セキュリティ運用に対する要求が高く、就職に大きな有利となる資格です。\n\n3/ 「基本情報技術者試験」は、「IT パスポート試験」試験の合格時に受け取れる証明書とともに、新入生にとって合格しやすい基礎能力評価証明書の 1 つです。\n\n<span id='effective-books'></span>\n\n# 効果的な試験対策本の紹介\n\n**栢木先生の IT パスポート教室**:\n\n[![itpassport-cert-1st](/static/images/2023/itpassport-cert/1st.jpeg 'itpassport-cert-1st')](https://www.amazon.co.jp/)\n\n本書は、自然分野の学生のみならず、サイト会経済分野や非専門分野の学生からも高い評価を得ている IT パスポート試験の参考書・問題集です。 最新の話題の傾向を分析し、豊富なイラストを用いてわかりやすく、覚えやすく解説することで、資格試験対策にも好評です。 また、授業直後に関連する試験問題を解く形式で、知識をより確実に定着させることができます。 特に 2021 年の新改訂版は 4.1/5.0 カリキュラムに対応し、演習問題が全 293 問収録され、ページ形式もリニューアルされページ数も大幅に増加しました。\n\nこの本は、IT パスポート試験に短期間で合格したい人に最適です。\n\n** 令和 2-3 年度版 IT パスポート試験対策テキスト&過去問題集 (よくわかるマスター)**:\n\n[![itpassport-cert-2nd](/static/images/2023/itpassport-cert/2nd.jpg 'itpassport-cert-2nd')](https://www.amazon.co.jp/)\n\n本書は、試験の練習用問題集に加えて、試験に必要な知識を提供する教科書や参考書をまとめたものに例えられます。 本書は、2018 年 8 月に改定された 4.0 カリキュラムに準拠した内容で完成しており、IoT、ビッグデータ、AI などの新技術の内容にも触れています。 セキュリティなど今後の重要な内容も掲載しております。 また、過去の試験問題を最大 800 問収録した CD-ROM も付属しており、自動採点機能や全問題の丁寧な解説も効果的なサポートとなり、試験本番に向けてより一層の準備を整えることができます。\n\n**(全文 PDF・単語帳&過去問アプリ付)かんたん合格 IT パスポート過去問題集 令和 2 年度秋期 (かんたん合格シリーズ)**:\n\n[![itpassport-cert-3rd](/static/images/2023/itpassport-cert/3rd.jpg 'itpassport-cert-3rd')](https://www.amazon.co.jp/)\n\n次の本は、10 期連続でベストセラーに選ばれた IT パスポート試験の過去問集で、短期間で試験勉強をしたい人向けの一冊です。 単に正解を示すだけでなく、間違った選択肢や誤解しやすい選択肢も丁寧に解説しており、学習した知識を深く理解することができます。\n\n<span id='summary'></span>\n\n# まとめ\n\nさて、今日は日本の IT パスポート認定試験の概要について学びました。 この記事を通じて、学生が証明書の種類と、この試験で確実に勝利するために必要な練習方法について検討できることを願っています。 なぜなら、IT 証明書を保持しているということは、競争が激しく難しい日本の求職プロセスをサポートするための強力なツールをもう 1 つ持っているようなものですよね?\n"
    },
    "readingTime": {
        "text": "13 min read",
        "minutes": 12.34,
        "time": 740400,
        "words": 2468
    },
    "title": "ITパスポート資格を取得するため独学法",
    "date": "2023-06-30",
    "summary": "ITパスポート試験と試験対策法をご紹介いたします",
    "lang": "ja",
    "image": "/static/images/2023/itpassport-cert/itpassport-cert.png",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'itpassport-cert',
},
{
    ...{
    "body": {
        "raw": "\n### はじめに\n\nDDD（ドメイン駆動設計）は、単語を覚えるほど迷子になりやすいです。  \n大事なのは「それが何のために存在するか」と「どうつながっているか」。\n\nここでは、DDDを **“業務をモデルにして、変更に強い形で実装し、チーム間の境界まで設計する”** という流れで整理します。  \n暗記用ではなく、現場で使うためのメモです。\n\n---\n\n## Model-Driven Design：まずは「モデルで作る」\n\nDDDの中心はシンプルで、\n\n> 業務のルールや概念を、ソフトウェアのモデルとして表現し、そのモデルを軸に開発する\n\nということです。\n\nモデルは「クラス図」ではなく、**業務の言葉（概念）と、ルール（制約）と、振る舞い（操作）** を含むもの。  \nこれが弱いと、設計はだんだん「DB中心」「画面中心」になって、変更が入るたびに崩れます。\n\n---\n\n## Tactical Design：モデルをコードに落とす部品たち\n\nここからは“実装の道具”。ポイントは役割分担です。\n\n---\n\n## Entity：IDで同一性を持つもの\n\nEntity は **同一性（Identity）** が主役です。中身が変わっても同じもの。\n\n例：\n- 注文（Order）\n- 契約（Contract）\n- ユーザー（User）\n\nEntityは状態を持つので、更新・整合性・履歴が絡みやすい。  \nだから、雑にあちこちから触れる設計にすると壊れやすいです。\n\n---\n\n## Value Object：値が意味を持つもの\n\nValue Object は **同一性より値** が大事で、基本は不変（immutable）。\n\n例：\n- Money（通貨＋金額）\n- Email（フォーマット保証）\n- Period（開始日＋終了日）\n\nValue Object をちゃんと作ると、if文が散らばるのを抑えられます。  \n「ただのString地獄」から抜ける最短ルートでもあります。\n\n---\n\n## Aggregate：整合性を守る“境界線”\n\nDDDのキモのひとつが Aggregate。\n\n> あるルール（整合性）を守れる範囲を決め、その内側は一貫性を保ち、外側からの操作は入り口を一本化する\n\nこの“入り口”が **Aggregate Root**。  \n外部は基本、Root 経由でしか触れない。これで「勝手に更新される事故」を減らします。\n\n例：\n- Order（Root）\n  - OrderLine（子Entity）\n  - ShippingAddress（Value Object）\n\n---\n\n## Repository：Aggregateを出し入れする口\n\nRepository は **永続化の詳細を隠す** 役目です。\n\n- ドメインはDBを知らない\n- アプリケーションは「取り出して、変更して、保存する」だけ\n\nコツは **RepositoryはAggregate単位** に寄せること。  \nEntity単位でガンガン取得し始めると、境界が溶けていきます。\n\n---\n\n## Factory：生成が複雑になったら受け止める\n\nnew が増えすぎたり、生成時のルールが濃くなったら Factory の出番。\n\n- 初期化が多い\n- 生成時に検証が必要\n- 外部データから組み立てが必要\n\n「コンストラクタが太る問題」の受け皿です。\n\n---\n\n## Domain Service：置き場に困る“ルール”の置き場\n\nEntity/VO に置くと不自然だけど、ドメインのルールではある処理。\n\n例：\n- 複数の集約にまたがる計算\n- 状態遷移の調停\n- 与信などの判定ロジック（ただし外部I/Oは分離したい）\n\n便利なので増えがちです。  \n増えたら一回「本当はEntityの責務では？」を疑うとバランスが取れます。\n\n---\n\n## Domain Event：状態が変わった“事実”を外に渡す\n\nDomain Event は「副作用を疎結合にする」ための道具です。\n\n例：\n- OrderPlaced（注文確定）\n- ContractActivated（契約有効化）\n\nイベントにすると、通知・ポイント付与・分析ログなどが、ドメインから直結しづらくなります。  \n結果として、ドメインが“用事を抱えすぎない”状態を作れます。\n\n---\n\n## Layered Architecture：ドメインを外部事情から守る\n\nここまでの部品を活かすには、ドメインを隔離するのが大事です。\n\n- UI（Controller）\n- Application（UseCase）\n- Domain（モデル）\n- Infrastructure（DB/外部API）\n\nDDDで強いのは、Domain が **中心に立てる** とき。  \nDB都合やフレームワーク都合に引っ張られると、モデルが薄くなります。\n\n---\n\n## Strategic Design：チームと境界を設計する\n\n実装が育つと、次にぶつかるのが「同じ言葉が、別の意味で使われる問題」です。  \nここからは戦略の話。\n\n---\n\n## Ubiquitous Language：言葉を揃える（仕様とコードを揃える）\n\nDDDは、**言葉を揃える活動**でもあります。\n\n- 「申込」と「契約」\n- 「見積」と「請求」\n- 「有効化」と「確定」\n\nこれが混ざると、コードも混ざって、仕様変更で壊れます。  \n用語はドキュメントだけでなく、**クラス名・メソッド名にも入れる**のが効きます。\n\n---\n\n## Bounded Context：言葉が通じる“範囲”を決める\n\nUbiquitous Language が一貫して通じる範囲を、境界として切る。  \nこれが Bounded Context。\n\n同じ「顧客」でも、販売側と請求側で意味が違うなら、無理に一つにしない方が健全です。\n\n---\n\n## Context Map：境界同士の関係を設計する\n\n境界を切ったら、次は“付き合い方”です。代表パターンだけ押さえます。\n\n- **Shared Kernel**：共通部品を共有（調整コストとトレードオフ）\n- **Customer/Supplier**：上流/下流の関係を明確化\n- **Conformist**：下流が上流に合わせる（割り切り）\n- **Open Host Service**：公開APIとして提供し、複数の利用者を支える\n- **Published Language**：公開するデータ形式（契約）を固定して安定させる\n- **Anticorruption Layer（ACL）**：外部モデルの汚染を防ぐ翻訳層（かなり重要）\n- **Separate Ways**：無理に統合しない（現実的な分離）\n- **Big Ball of Mud**：境界が溶けて泥団子（避けたい未来）\n\nこのあたりは、綺麗事より「現場のコスト」で決まります。  \n特にACLは、短期コストは上がるけど長期の破綻を防ぐことが多いです。\n\n---\n\n## Continuous Integration：モデルは“揃え続ける”\n\nモデルは作って終わりじゃなく、**変化に合わせて揃え続ける**ものです。\n\n- 境界をまたぐ変更が入ったときに気づける\n- ルール違反が早期に潰れる\n- “言葉のブレ”が育つ前に止められる\n\nCIはビルドだけじゃなく、チーム運用としても効きます。\n\n---\n\n## まとめ：迷ったらこの順で戻る\n\n1. **言葉**は揃っているか（Ubiquitous Language）\n2. **境界**は切れているか（Bounded Context）\n3. **整合性の境界**はどこか（Aggregate）\n4. **IDか値か**を分けられているか（Entity / Value Object）\n5. **永続化や副作用**がドメインを汚していないか（Repository / Event / ACL）\n\nDDDは“それっぽい構造”を作るためのものではなく、  \n**変更に強いモデルを、チームで保つための方法**だと思っています。"
    },
    "readingTime": {
        "text": "9 min read",
        "minutes": 8.665,
        "time": 519900,
        "words": 1733
    },
    "title": "DDDとは",
    "date": "2023-12-31",
    "summary": "ドメイン駆動設計",
    "lang": "ja",
    "image": "/static/images/2024/ddd/1st.svg",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'ddd',
},
{
    ...{
    "body": {
        "raw": "\n### はじめに\n\nソフトウェア開発には、言語やフレームワークが変わっても効く「原則」がいくつかあります。  \n設計・実装で迷ったときに、ブレないための“コンパス”みたいなやつです。\n\n今回はその中でも、現場でよく出会う定番を **Why（なぜ効く？）** と **How（どう使う？）** でざっと整理します。  \n※ *programming-principles*（Lars Kappert まとめ）にある考え方をベースに、個人メモ的に噛み砕いています。\n\n---\n\n## KISS（Keep It Simple, Stupid）\n\n**「賢く作るより、シンプルに作る」** の合言葉。\n\n### Why（なぜ）\n- コードが少ないほど、書くのが速い・壊れにくい・直しやすい\n- 複雑さは、だいたい後から“利息つき”で返すことになる（＝技術的負債）\n- 完成って「足すものがない」より「削るものがない」に近い\n\n### How（どうやって）\n- まずは一番単純な解で作る → 必要になってから強くする\n- 説明に5分かかる設計は黄色信号（たいてい削れる）\n- 迷ったら「影響範囲が小さい方」「理解コストが低い方」を選ぶ\n\n---\n\n## YAGNI（You Aren't Gonna Need It）\n\n**「その機能、今ほんとに要る？」** を自分に聞くやつ。\n\n### Why（なぜ）\n- “明日のための実装” は、今日の締切を削る\n- 使われないコードは、ただの複雑さ（しかも保守対象）\n- 未来予想は外れがち。外れた瞬間に負債になる\n\n### How（どうやって）\n- 必要になった瞬間に、最小で足す（作り込みはしない）\n- 「いつか」のために拡張ポイントを生やしすぎない\n- 設計は“伸びしろ”を残す程度で止める（先に全部作らない）\n\n---\n\n## DRY（Don't Repeat Yourself）\n\n**「同じ知識は一箇所に」**。コピペは、後で自分を殴ってくる。\n\n> “同じ処理のコピペ” も分かりやすい重複だけど、  \n> 本当に怖いのは “同じ業務ルールが別々に存在する” こと。\n\n### Why（なぜ）\n- 直し漏れ → 挙動の矛盾 → バグ、の黄金ルート\n- 変更が1箇所で済むと、リリースが速くなる\n- 関連するものが同じタイミングで同じ方向に変わる（同期できる）\n\n### How（どうやって）\n- 業務ルール、長い条件、計算式、定義情報は **1箇所** に寄せる\n- 「この知識の一次ソースはどこ？」を決め、そこから派生させる（コード/テスト/ドキュメント）\n- ただし抽象化しすぎ注意：似てるけど違うものを無理にまとめると、別の地獄が始まる\n\n---\n\n## Code For The Maintainer（保守する人のために書く）\n\n**「未来の自分（他人）が読めるコードにする」** という話。\n\n### Why（なぜ）\n- 開発費の多くは “作る” より “直す・変える” に消える\n- 読めないコードは、変更のたびに事故る（怖くて触れない）\n\n### How（どうやって）\n- 「半年後の自分が初見で読む」前提で書く\n- 命名で8割決まる：何のための変数/関数かが分かる名前にする\n- コメントは「何を」より「なぜ」（コードは何をしてるか読める）\n- “一個下の人が引き継いでも詰まらない粒度” に分割する\n\n> よくある言い回し：  \n> 「保守担当は、あなたの住所を知っている怒りっぽい人だと思って書け」\n\n---\n\n## Minimise Coupling（低結合にする）\n\n**結合度（coupling）** は「モジュール同士がどれだけ運命共同体か」。  \n低いほどいい＝AをいじってもBが巻き添えで壊れにくい。\n\n### Why（なぜ）\n- 1箇所の変更が、別の変更を呼ぶ（リップル効果）\n- テスト・再利用が難しくなる（依存を全部連れてこないと動かない）\n- 影響範囲が読めないと、チーム全体が“触りたくない空気”になる\n\n### How（どうやって）\n- 関係を減らす。必要な関係はシンプルにする\n- 実装詳細を隠す（インターフェース越しに使わせる）\n- 「内部のデータ構造を渡す」より「必要な操作だけ提供する」\n- 依存の向きを揃え、循環依存を作らない（戻れない沼を避ける）\n\n---\n\n## まとめ\n\n- **KISS**：まずシンプルに。複雑さは後から利息がつく  \n- **YAGNI**：「今要る？」を徹底。未来実装は負債化しやすい  \n- **DRY**：ルールは一箇所に。重複は矛盾を生む  \n- **Maintainer First**：読めるコードが一番速い（結果的に）  \n- **低結合**：変更の波及を止める。怖くないコードにする  \n\nどれも「美しく書くため」より、**変更に耐えるため**の原則です。  \n設計で迷ったら、まずこの5つで自分の案を殴ってみると、だいたい答えが見えてきます。"
    },
    "readingTime": {
        "text": "7 min read",
        "minutes": 6.285,
        "time": 377100,
        "words": 1257
    },
    "title": "プログラミング原則入門：KISS / YAGNI / DRY / Maintainer First / 低結合",
    "date": "2026-02-09",
    "summary": "普遍的な開発原則を「なぜ」「どうやって」で整理する",
    "lang": "ja",
    "image": "/static/images/2026/best-practices/1st.svg",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'best-practices',
},
{
    ...{
    "body": {
        "raw": "\nMình clone blog này từ template : [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog). Source này ban đầu thì rất ok, nhưng qua một thời gian sử dụng mình gặp một số vấn đề sau:\n\n-   Sử dụng quá nhiều lib. Các lib core bị outdated thì ko update dc vì dependencies quá nhiều\n-   Phần code để build bài viết từ mdx quá phức tạp\n-   Chỉ có 2 theme, light và dark.\n-   Tối ưu SEO chưa tốt\n\nBuild from scratch rất vui!\n\n-   Vui vì có vấn đề cần giải quyết\n-   Vui vì học được kiến thức mới\n-   Vui vì có cơ hội thử nghiệm nghịch phá\n\nVậy nên ngại gì mà không thử. Cùng lên kế hoạch cho petproject này của mình nhé :D.\n\n## Một trang blog thì nên có những gì?\n\nNhững tính năng cơ bản mà bất kì blog nào cũng cần có:\n\n-   Bài viết\n-   Tags (phân loại bài viết)\n-   About (thông tin tác giả)\n\nTuy nhiên, đối với blog của mình. Vì được tự do sáng tạo mà không bị giới hạn nên mình nghĩ ra được vài tính năng khá thú vị như:\n\n-   Trạng thái Spotify\n-   Số lượt xem bài viết\n-   Code snippet\n-   Today I learn (lưu lại những gì mình học hàng ngày)\n-   Bài viết tương tác được. VD: chèn code vào bài viết\n-   ...\n\nVà quan trọng là phải giải quyết được những vấn đề mà cái blog cũ mình gặp phải.\n\n## Giao diện nên trông như thế nào?\n\nMình chả biết gì về designer nên có vẻ đi trộm giao diện là giải pháp hợp lí nhất :)). Nguồn kham khảo mà mình chọn đó là dribble và behance. Nhưng chủ yếu mình giữ lại giao diện ở blog cũ vì nó khá minimalist.\n\nTiếp theo là chọn màu phù hợp, [Rosé Pine](https://rosepinetheme.com/) bảng màu mình nhặt được trong 1 group chat IT. Bảng màu này tạo một cảm giác dễ chịu cho người dùng.\n\n![Rosé Pine](/static/images/2022/blog-tutorial/rosepine.png)\n\nCuối cùng là chọn font:\n\n-   **Barlow** dùng cho tiêu đề\n-   **Barlow Condensed** dùng cho nội dung\n-   **Consolas** font chữ trong các đoạn code. Font mình xài trong editor\n\n## Chọn công nghệ gì?\n\nCác công nghệ không thể không có:\n\n-   [Typescript](https://www.typescriptlang.org/) trải nghiệm với javascript thật sự rất chán. Nhưng với typescript thì 🎆🎆\n-   [Markdown](https://www.markdownguide.org/) ngôn ngữ tuyệt vời để viết\n-   [MDX](https://mdxjs.com/) cho phép ta viết jsx trong file markdown\n-   [Next.js](https://nextjs.org/) là bộ khung chủ đạo của website\n-   [Tailwindcss](https://tailwindcss.com/). Ngoài ra mình cũng sử dụng vài tool nằm trong hệ sinh thái của tailwindcss như: headless ui, heroicons, heropatterns...\n-   [Framer motion](https://www.framer.com/motion/) thư viện để tạo ra các animation\n-   [Render](https://render.com/) setup postgresql database chỉ bằng vài click. Và ORM [prisma](https://www.prisma.io/)\n-   [sentry.io](https://sentry.io/) dùng để tracking website\n\n# Build Global Layout\n\n## Chi tiết\n\nLayout của web có 3 phần:\n\n-   Header: chứa tên website, navigation, theme switcher\n\n-   Main: nội dung của page\n\n-   Footer: Info tác giả, copyright\n\nĐa số mình tái sử dụng lại design của web cũ, tuy nhiên có điều chỉnh một vài chổ như:\n\n-   Sử dụng background **Circuit Board** từ [Hero Patterns](https://heropatterns.com/)\n\n-   Sử dụng nhiều theme khác nhau thay vì dark mode và light mode ở web cũ.\n    Cách mình setup khá đơn giản, đó là ứng dụng CSS Variables:\n\n    ```css\n    /* Định nghĩa 2 theme: */\n    .theme-first {\n        /*25 23 36 nghĩa là rgb(25,23,36) */\n        --color-base: 25 23 36;\n        --color-surface: 31 29 46;\n        --color-text: 38 35 58;\n    }\n\n    .theme-second {\n        --color-base: 250 244 237;\n        --color-surface: 255 250 243;\n        --color-text: 242 233 222;\n    }\n\n    /* Sử dụng color theme trong class: */\n    .my-box {\n        width: 100px;\n        height: 100px;\n        background: rgb(var(--color-base));\n    }\n    ```\n\n    Để sử dụng theme, đơn giản ta chỉ cần gắn tên class của theme đó vào thẻ body. Ví dụ:\n\n    ```html\n    <body class=\"theme-first\">\n        <div class=\"my-box\"></div>\n    </body>\n    ```\n\n    Vì mình sử dụng tailwindcss nên cần setup thêm một bước nữa, trong file `tailwind.config.js`:\n\n    ```js\n    // Cần hàm này để có thể sử dụng class opacity-[value]\n    function withOpacityValue(variable) {\n        return ({ opacityValue }) => {\n            if (opacityValue === undefined) {\n                return `rgb(var(${variable}))`;\n            }\n            return `rgb(var(${variable}) / ${opacityValue})`;\n        };\n    }\n\n    // Có bao nhiêu css varible trong theme thì ta định nghĩa bấy nhiêu đó:\n    let themeColors = {\n        base: withOpacityValue('--color-base'),\n        surface: withOpacityValue('--color-surface'),\n        text: withOpacityValue('--color-text'),\n        //...\n    };\n\n    module.exports = {\n        content: [\n            './pages/**/*.{js,ts,jsx,tsx}',\n            './components/**/*.{js,ts,jsx,tsx}',\n        ],\n        theme: {\n            extend: {\n                colors: themeColors,\n            },\n        },\n        plugins: [],\n    };\n    ```\n\n    Sử dụng:\n\n    ```html\n    <button className=\"bg-base text-text p-3\">    Hello World</button>\n    ```\n\n    Cuối cùng, sử dụng thư viện [next-themes](https://github.com/pacocoursey/next-themes). Giúp việc chuyển đổi theme dễ dàng hơn, chỉ qua vài dòng code:\n\n    ```jsx\n    import { useTheme } from 'next-themes';\n\n    const ThemeChanger = () => {\n        const { theme, setTheme } = useTheme();\n\n        return (\n            <div>\n                The current theme is: {theme}\n                <button onClick={() => setTheme('theme-first')}>\n                    First Theme\n                </button>\n                <button onClick={() => setTheme('theme-second')}>\n                    Second Theme\n                </button>\n            </div>\n        );\n    };\n    ```\n\n## Kết quả:\n\n![Rosé Pine](/static/images/2022/blog-tutorial/blogexample.png)\n\nKhá cool đúng không :3\n\n> Chi tiết các page các bạn có thể xem bằng cách dạo quanh blog này.\n\n# Setup Contentlayer\n\n[Contentlayer](https://www.contentlayer.dev/) package giúp mình parse file mdx sang next.js một cách đơn giản. Các bạn có thể xem [document](https://www.contentlayer.dev/docs) để biết thêm chi tiết.\n\nMình để tất cả data của website vào một folder data, có cấu trúc như sau:\n\n```\ndata:\n  - post:\n    - 2022:\n      - post_a.mdx\n      - post_b.mdx\n    - 2021\n    - 2020\n  - snippet:\n    - snippet_a.mdx\n    - snippet_b.mdx\n  - pages:\n    - about.mdx\n    - uses.mdx\n```\n\nTrong đó:\n\n-   Folder post chứa các bài viết, có thể nested folder.\n-   Folder snippet chứa các snippet code. Các đoạn code ngắn hữu ích.\n-   Folder pages chứa các page.\n\nContentlayer sẽ tự động parse file mdx vào next.js. Sau đó ta có thể sử dụng một cách đơn giản, ví dụ file `blog.tsx`:\n\n```tsx\nimport { allPosts, Post } from 'contentlayer/generated';\nimport { pick } from 'contentlayer/utils';\nimport ListLayout from 'src/layouts/ListLayout';\n\nexport default function BlogPage({ posts }: { posts: Post[] }) {\n    return <ListLayout posts={posts} name='Blog' />;\n}\n\nexport async function getStaticProps() {\n    // dùng hàm pick để loại bỏ các field không mong muốn, cải thiện thời gian load\n    const posts = allPosts\n        .filter((post) => post.draft !== true)\n        .map((blog) => pick(blog, ['slug', 'title', 'summary', 'date', 'tags']))\n        .sort((a, b) => moment(b.date).diff(moment(a.date)));\n\n    return { props: { posts } };\n}\n```\n\nContentlayer cũng hỗ trợ 1 hook để chuyển từ mdx sang html là `useMDXComponent`. Ta cũng có thể custom các tag nữa. VD file `/blog/[slug].tsx`:\n\n```tsx\nimport { allPosts, Post } from 'contentlayer/generated';\nimport { useMDXComponent } from 'next-contentlayer/hooks';\nimport PostLayout from 'src/layouts/PostLayout';\nimport components from '../../components/MDXComponents';\n\nexport default function BlogDetailPage({ post }: { post: Post }) {\n    const Component = useMDXComponent(post.body.code);\n    return (\n        <PostLayout post={post}>\n            <Component\n                components={{\n                    ...components,\n                }}\n            />\n        </PostLayout>\n    );\n}\n\nexport async function getStaticPaths() {\n    return {\n        paths: allPosts.map((p) => ({ params: { slug: p.slug } })),\n        fallback: false,\n    };\n}\n\nexport async function getStaticProps({ params }: { params: { slug: string } }) {\n    const post = allPosts.find((post) => post.slug === params.slug);\n    return { props: { post } };\n}\n```\n\nFile `components/MDXComponents.tsx`:\n\n```tsx\nimport Link from 'next/link';\n\nconst CustomLink = (props: any) => {\n    const href = props.href;\n    const isInternalLink =\n        href && (href.startsWith('/') || href.startsWith('#'));\n\n    if (isInternalLink) {\n        return (\n            <Link href={href}>\n                <a {...props}>{props.children}</a>\n            </Link>\n        );\n    }\n\n    return <a target='_blank' rel='noopener noreferrer' {...props} />;\n};\n\nconst MDXComponents = {\n    a: CustomLink,\n};\n\nexport default MDXComponents;\n```\n\n# Setup prisma, và planetscale để đếm số lượng view\n\n> Bổ sung\n\n-   B1: Cài đặt pscale và client-sql thông qua brew (Terminal)\n-   B2: Access vào pscale shell với các câu lệnh sau\n\n    -   pscale login\n\n    -   pscale shell &lt;tên database&gt;\n\n    -   sau đó câu lệnh tạo table đếm view\n\n    ```\n    CREATE TABLE views (\n    slug VARCHAR(128) PRIMARY KEY,\n    count BIGINT DEFAULT 1\n    );\n    ```\n\n### Cách tạo database và connect prisma đến planetscale\n\nSau khi setup prisma vào project theo hướng dẫn [ở đây](https://www.prisma.io/nextjs). Và lấy `DATABASE_URL` dùng để connect tới database từ [planetscale](https://planetscale.com/) .Ta edit file `prisma/schema.prisma` lại như sau:\n\n```\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"referentialIntegrity\"]\n}\n\ndatasource db {\n  provider             = \"mysql\"\n  url                  = env(\"DATABASE_URL\")\n  referentialIntegrity = \"prisma\"\n}\n\nmodel views {\n  slug  String @id @db.VarChar(128)\n  count BigInt @default(1)\n}\n```\n\nTạo api để lấy và update số lượng view. Ví dụ file `api/views/[slug].ts`:\n\n```ts\nimport type { NextApiRequest, NextApiResponse } from 'next';\nimport prisma from '../../../lib/prisma';\n\nexport default async function handler(\n    req: NextApiRequest,\n    res: NextApiResponse,\n) {\n    try {\n        const slug = req.query.slug.toString();\n\n        if (req.method === 'POST') {\n            const newOrUpdatedViews = await prisma.views.upsert({\n                where: { slug },\n                create: {\n                    slug,\n                },\n                update: {\n                    count: {\n                        increment: 1,\n                    },\n                },\n            });\n\n            return res.status(200).json({\n                total: newOrUpdatedViews.count.toString(),\n            });\n        }\n\n        if (req.method === 'GET') {\n            const views = await prisma.views.findUnique({\n                where: {\n                    slug,\n                },\n            });\n\n            return res.status(200).json({ total: views?.count.toString() });\n        }\n    } catch (e: any) {\n        return res.status(500).json({ message: e.message });\n    }\n}\n```\n\nSau đó gọi API từ client bằng axios hoặc fetch. Để tiết kiệm thời gian, mình viết một component sử dụng [swr](https://swr.vercel.app/), `ViewCounter.tsx`:\n\n```tsx\nimport { useEffect } from 'react';\nimport fetcher from 'src/lib/fetcher';\nimport { Views } from 'src/lib/types';\nimport useSWR from 'swr';\n\nexport default function ViewCounter({\n    slug,\n    update = false,\n}: {\n    slug: string;\n    update?: boolean;\n}) {\n    const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);\n    const views = new Number(data?.total);\n\n    useEffect(() => {\n        // nếu update = true thì update lại số lượng view\n        if (update)\n            fetch(`/api/views/${slug}`, {\n                method: 'POST',\n            });\n    }, [slug, update]);\n\n    return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;\n}\n```\n\n# Kết luận\n\nNhư vậy, ta đã tạo được 1 trang blog cơ bản. Tuy có sử dụng hơi nhiều package, nhưng nhờ chúng mà việc code trở nên trơn tru và dễ dàng hơn rất nhiều.\n\nHy vọng là bài viết này đã 1 phần nào đó giúp bạn có thể tạo ra 1 trang blog tương tự như mình :d.\n"
    },
    "readingTime": {
        "text": "9 min read",
        "minutes": 8.315,
        "time": 498900,
        "words": 1663
    },
    "title": "Dựng blog đơn giản với Nextjs",
    "date": "2022-06-01",
    "summary": "dựng blog với vài đoạn code đơn giản",
    "lang": "vi",
    "image": "/static/images/2022/blog-tutorial/newblog.png",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'blog-tutorial',
},
{
    ...{
    "body": {
        "raw": "\nCách đây vài năm, mình bắt đầu đọc sách vì.. thấy ai giỏi, ai giàu cũng bảo \"tôi đọc sách rất nhiều\", tự nhìn lại bản thân, chưa giỏi cũng chẳng giàu nhưng lại có rất nhiều thời gian rảnh.\nThế là quyết tâm mua vài cuốn sách kinh điển lúc đó như Cha Giàu Cha Nghèo, Nhà Giả Kim,.. rồi đọc ngấu nghiến.\nNgặt nỗi, sáng mai ăn gì, kỳ tới tiền đâu đóng học phí còn chưa tính xong, đọc mấy cuốn sách cũng không khiến mình thành triệu phú khu ổ chuột trong một đêm được. Thế là mình lại bỏ ngang một thời gian khá dài.\n\nTừ lúc sang Nhật, thời gian ở một mình, tự nghiên cứu tìm tòi học hỏi tăng lên, thì thói quen đọc sách cũng dần quay trở lại. Để có được một công việc với mức thu nhập tốt thì yêu cầu lúc bấy giờ là tiếng Nhật, thế là mình lại đầu tư vào mấy quyển luyện thi N2, N1.\n\nCó những cuốn chỉ đọc được một nửa rồi xếp vào kệ tủ trang trí cho đẹp vì.. hàn lâm quá càng học càng buồn ngủ, lại có những cuốn luyện đề rất thực chiến, học tới đâu thấm tới đó thì mình lại lật đi lật lại đến sờn rách mới cho lên tủ ngắm.\nCũng nhờ đọc nhiều sách **HỌC** tiếng Nhật (chứ không phải sách tiếng Nhật) mà phần ngữ pháp và đọc hiểu trong bài thi JLPT có phần nhỉnh hơn so với các phần khác.\n\nSau khi học qua tiếng Việt, tiếng Anh và tiếng Nhật, mình nhận thấy.. đúng là ngoài ngoại ngữ ra, mình chả biết gì :D.\n\nThế là mình lại tìm hiểu người ta hay đọc gì, những Kols, idol trong và ngoài nước đọc gì, xem gì để bắt chước theo. Nào là kinh tế, kinh doanh, chính trị, ngôn ngữ .. Vì mình ở Nhật nên đa số đầu sách tiếng Nhật mình đọc khá nhiều, tiếng Anh cũng dần mai một đi..\nĐó là câu chuyện từ 3 năm trước.\n\nHiện tại, mình vẫn giữ thói quen \"xấu\", **đọc sách như chạy chỉ tiêu**, các chủ đề tả pí lù. Những cuốn mình rất muốn đọc chỉ vì _thấy ai giỏi cũng từng đọc qua_ thì lại không thể đọc hết.\nCó những cuốn lại chả thấy ai đọc, nhưng mình mở ra thấy hay quá, thú vị quá, thế là dứt trong một buổi mấy trăm trang. Mình biết là đọc nhanh thì sẽ quên nhanh, nhưng mãi không sửa được, nên thôi thay vì sửa tật xấu, mình nâng cấp nó thành **đọc nhanh nhưng vẫn hiểu nội dung** là được ha.\n\n---\n\nCác đầu sách đã đọc qua từng giai đoạn, và cảm nhận cá nhân của mình\n\n(PDF free: Nếu link chết, để lại comment cho mình biết nhé, mình sẽ update link mới)\n\n## FE (基本情報技術者試験)\n\nKiến thức chung\nhttps://www.amazon.co.jp/dp/4297124513/\n\nGiải đề (format mới)\nhttps://www.amazon.co.jp/dp/4798182524/\n\nVà vài cuốn linh tinh mình đọc ké free trên mạng. Mấy cuốn này nếu ai đang học FE thì mình recommend dễ học dễ thi, chứ bình thường chắc cũng không đọc làm gì.\nNội dung thì ngoài việc để thi đỗ kỳ thi, cũng giúp mình bổ sung kha khá kiến thức cơ bản trong ngành công nghệ thông tin đối với một đứa non-IT, không có background kỹ thuật như mình. Nhân tiện, mình đang làm web developer ở Tokyo, ai có job inb mình nhé nếu mình đủ sức thì ae hợp tác hê hê.\n\n## Các sách về kinh tế, kinh doanh\n\n1. Một đời thương thuyết - Phan Văn Trường\n\n[PDF Free](https://drive.google.com/file/d/1ubagWez4HegzcEwohWPPidyqJce8oTPa/view)\n\nCuốn này khá thú vị đối với mình, là một developer, mình thường tham gia dự án ở giai đoạn thiết kế tài liệu, triển khai dự án. Mặc dù công việc khá tốt và có nhiều điều để học hỏi, mình vẫn muốn hiểu rõ vòng đời của dự án từ zero to hero như thế nào (khi code mình cũng rất quan tâm đến vòng đời instance vậy =))).\nDù sách không liên quan đến lĩnh vực IT, tác giả đề cập đến những kinh nghiệm xương máu khi đi thương thảo hợp đồng với khách hàng trong và ngoài nước. Là kinh nghiệm đúc kết từ thực tế nên rất thực tiễn và nhiều điểm thú vị.\n\n## Sách tiếng Anh\n\n1. Chicken Soup\n\nMình mua 1 vài cuốn Chicken Soup ở nhà sách Fahasa lúc về Việt Nam chơi, sau đó mang sang Nhật đọc cho rẻ mà lại là sách giấy. Mấy cuốn này nội dung na ná nhau, chủ yếu để mình ôn lại tiếng Anh kẻo quên hết lúc nào không hay.\n\nMột vài đầu truyện free của Chicken Soup có thể tìm thấy [ở dây](https://www.chickensoup.com/stories)\n\n2. Rich Habits - Thomas Corley\n\nCuốn này mình đọc để luyện tiếng Anh, chạy chỉ tiêu tháng (mỗi tháng ít nhất 1 quyển) nên nội dung đọng lại trong mình sau khi đọc cũng chỉ xoay quanh cách xây dựng các habits tốt..\n\n3. the Art of PEOPLE - Dave Kerpen\n\nCuốn này mình mua vì bìa sách, chất giấy.. quá đẹp. Nội dung thì không có gì nổi bật, đợt đó bị đồng nghiệp pressing \"skill mềm\" chưa cứng nên thấy nôn nao quá, phải làm ngay một cuốn nghệ thuật giữa người với người ngay. Sau khi đọc xong cuốn này thì rất may, không phải làm chung dự án với bạn đó nữa :D, không lại tốn tiền mua thêm sách để bổ sung các kỹ năng còn thiếu khác..\n\n4. **Brief answer to the big questions - Stephen Hawking** (RECOMMEND)\n\nBạn nào đam mê triết học/ khoa học có thể tìm hiểu cuốn này. Lúc đầu mình mua cũng chỉ để học tiếng Anh, nhưng thực sự nội dung quá hay. Và sau khi đọc xong, ngoài những kiến thức căn bản về vạn vật được giải thích một cách dễ hiểu, cuốn sách còn đọng lại trong đầu mình nhiều thứ \"ta là ai giữa vũ trụ này?\"\n\n## Sách tiếng Nhật\n\nCác sách tiếng Nhật đa số mình đọc lấy chỉ tiêu, tranh thủ luyện thêm tiếng Nhật nên nội dung đối với mình chưa phải là đặc sắc. Mình biết một vài cuốn rất hay như Khuyến Học - Fukuzawa Yukichi, Lối sống tối giản của người Nhật - Sasaki Fumio, đã được mình clear theo chỉ tiêu trong năm 2022 nên mình không list ra đây vậy :d.\n\n1. とりあえず、5年の生き方 - Morotomi Yoshihiko\n\n2. 接客のルールとマナーらくらくマスタ BOOK - Tanaka Youko\n\n3. マネジメント - Endou Isao\n\n---\n\n## Tổng kết\n\n2024, mục tiêu của mình là đọc thêm nhiều đầu sách kỹ thuật vừa tiết kiệm chi phí (sách về programming/ solution architect có rất nhiều bản PDF Free) vừa nâng cao hiểu biết chuyên môn.\n\nMột vài đầu sách PDF Free mình chuẩn bị sẵn để ăn tết (_có thể tìm trong repository theo tên đầu sách hoặc inb mình gửi link nha_)\n\n[Cracking the Coding Interview](https://github.com/Avinash987/)\n\n[Clean Code A Handbook of Agile Software Craftsmanship](https://github.com/jnguyen095/)\n"
    },
    "readingTime": {
        "text": "7 min read",
        "minutes": 6.125,
        "time": 367500,
        "words": 1225
    },
    "title": "Mình đọc gì trong năm 2023",
    "date": "2023-12-31",
    "summary": "Các đầu sách mình đọc năm 2023",
    "lang": "vi",
    "image": "/static/images/2023/books-2023/1st.jpg",
    "draft": false,
    "tags": [
        "Sách"
    ]
},
    slug: 'books-2023',
},
{
    ...{
    "body": {
        "raw": "\nVới nhu cầu ngày càng tăng, `sim giá rẻ ở Nhật` đang ngày càng được nhiều công ty cung cấp, với chất lượng và dịch vụ khác nhau như rakuten mobile, linemo, mineo, ymobile,.. Vậy nên dùng sim của nhà cung cấp nào mà giá rẻ như đúng với tên gọi mà chất lượng lại tốt nhỉ? xD\n\nDưới đây là một số gợi ý của mình dành cho bạn nào có ý định đăng ký sử dụng sim giá rẻ tại Nhật thì tham khảo nhé.\n\n## Mục lục\n\n1. [Sim giá rẻ linemo của nhà mạng softbank](#linemo)\n2. [Sim giá rẻ rakuten Un-limit](#rakuten-unlimit)\n3. [Sim giá rẻ mineo](#mineo)\n4. [Sim giá rẻ ymobile](#ymobile)\n5. [Tổng kết](#summary)\n\n<span id='linemo'></span>\n\n# Sim giá rẻ linemo của nhà mạng softbank\n\nNếu bạn nào visa còn dưới 1 năm, không có thẻ tín dụng credit card (クレジットカー) mà muốn đăng ký sim giá rẻ ở Nhật thì, đây sẽ là một lựa chọn tốt cho bạn. Sim giá rẻ linemo xét duyệt rất dễ, có hỗ trợ trả cước qua thẻ ngân hàng hoặc yucho nên rất thuận tiện cho bạn nào không có thẻ credit card hoặc visa còn ngắn.\n\n**Ưu điểm sim giá rẻ linemo**:\n\n-   Có thể thanh toán qua thẻ ngân hàng, yucho,..\n-   Tốc độ cao.\n-   Không có thẻ credit vẫn đăng ký được.\n-   Visa ngắn vẫn đăng ký được.\n-   Nhiều khuyến mại.\n\n**Nhược điểm sim giá rẻ linemo**:\n\n-   Không thể đăng ký kèm máy.\n-   Sim này chỉ dùng được trên máy quốc tế hoặc máy lock đã lên quốc tế.\n-   Chỉ có 2 gói cước là 3GB/tháng và 20GB/tháng.\n\n**Giá cước sim giá rẻ linemo**:\n| Gói data tốc độ cao | 3GB | 20GB |\n| --------------------| ---------------| ----------------|\n| Giá cước | 900 yên/ tháng | 2480 yên/ tháng |\n| Tốc độ sau khi hết data | 300kbps | 1Mbps |\n\n![cheapest-sim-cards-1st](/static/images/2023/cheapest-sim-cards/cheapest-sim-cards-1st.png)\n\n## Khuyến mại sim giá rẻ linemo:\n\n**Đăng ký hợp đồng mới**:\n\n-   Nhận 5000 yên bằng paypay point nếu đăng ký sim thứ 2 trở lên.\n-   Miễn phí 6 tháng gói 通話準定額 (gọi 5 phút không mất phí) (550yên/tháng).\n-   Dùng ứng dụng line không mất dung lượng data.\n-   Miễn phí 6 tháng LINE MUSIC.\n-   Nhận 3000yên tiền khuyến mại bằng thẻ nạp paypay khi đăng ký gói 20GB.\n\n-   Nhận tiền thưởng 990yên/tháng trong 6 tháng bằng paypay point nếu đăng ký mới gói 3GB hoặc chuyển từ mạng khác qua linemo đăng ký gói 3GB (tương đương với việc được miễn phí 6 tháng tiền cước cơ bản cho gói 3GB). Không áp dụng cho trường hợp chuyển từ Uq mobile, line mobile hoặc softbank mobile qua linemo.\n-   Nhận lại thêm 20% (tối đa 2000yên) paypay point khi nạp tiền vào tài khoản paypay (tương đương với 2 tháng tiền cước gói 3GB). Tổng kết lại 2 khuyến mại tương đương với 8 tháng tiền cước gói 3GB.\n-   Nhận thêm 3GB data tốc độ cao trong 3 tháng.\n\n**Chuyển từ mạng khác qua LINEMO**:\n\n![cheapest-sim-cards-3rd](/static/images/2023/cheapest-sim-cards/cheapest-sim-cards-3rd.png)\n\n-   Nhận 5000 yên bằng paypay point nếu đăng ký sim thứ 2 trở lên.\n-   Nhận 10000yên tiền thưởng bằng thẻ nạp paypay. (Chỉ áp dụng cho gói スマホプラン 20GB. Yêu cầu chuyển từ mạng khác qua linemo. Không áp dụng cho trường hợp chuyển từ Uq mobile, line mobile hoặc softbank mobile qua linemo).\n-   Miễn phí 1 năm cho gói 3GB dành cho những ai chuyển mạng từ LINE MOBILE qua LINEMO.\n-   Giảm giá cước gói 20GB chỉ còn 1,738 円/tháng trong vòng 1 năm cho những ai chuyển mạng từ LINE MOBILE qua LINEMO.\n-   Nhận tiền thưởng 990yên/tháng trong 6 tháng bằng paypay point nếu đăng ký mới gói 3GB hoặc chuyển từ mạng khác qua linemo đăng ký gói 3GB (tương đương với việc được miễn phí 6 tháng tiền cước cơ bản cho gói 3GB). Không áp dụng cho trường hợp chuyển từ Uq mobile, line mobile hoặc softbank mobile qua linemo.\n-   Nhận lại thêm 20% (tối đa 2000yên) paypay point khi nạp tiền vào tài khoản paypay.\n-   Nhận thêm 3GB data tốc độ cao trong 3 tháng.\n\n### [Link Đăng Ký](https://www.linemo.jp/)\n\n<span id='rakuten-unlimit'></span>\n\n# Sim giá rẻ rakuten Un-limit\n\nTừ ngày 1/6/2023, rakuten mobile đã nâng cấp gói rakuten unlimit plan lên thành gói rakuten saikyo plan. Điểm khác biệt ở gói rakuten saikyo plan là, không còn sử dụng sóng của nhà mạng AU ở những nơi chưa phủ sóng rakuten. Hiện tại sóng rakuten đã được phủ 99,9% toàn nước Nhật. Các bạn có thể sử dụng Full dung lượng data mà, không bị giới hạn 5GB/tháng ở những nơi không có sóng rakuten như trước đây.\n\nNếu bạn nào visa còn trên 1 năm, nằm trong vùng phủ sóng của rakuten thì, đây sẽ là lựa chọn tốt nhất cho bạn nào muốn đăng ký sim giá rẻ ở Nhật.\n\n![cheapest-sim-cards-4th](/static/images/2023/cheapest-sim-cards/cheapest-sim-cards-4th.jpeg)\n\n**Ưu điểm sim giá rẻ rakuten unlimit**:\n\n-   Có thể thanh toán bằng tài khoản ngân hàng, yucho.\n-   Sử dụng không giới hạn dung lượng tốc độ cao 4G nếu dùng đường truyền của Rakuten.\n-   Với đường truyền của nhà mạng khác bạn sẽ có 5GB tốc độ cao 4G. Sau khi hết 5GB tốc độ cao tốc độ đường truyền bị giảm xuống 1Mbps nhưng vẫn thoải mái xem video.\n-   Có thể đăng ký sử dụng kèm rakuten hikari (mạng cáp quang rakuten) miễn phí 12 tháng.\n-   Bạn nào đang có ý định đăng ký thì nhanh tay đăng ký nha. Nếu dùng mạng khác thì nên chuyển qua rakuten, nhận hết khuyến mại rồi thấy mạng khác có khuyến mại thì lại chuyển đi.\n\n**Nhược điểm sim giá rẻ rakuten unlimit**:\n\n-   Đường truyền của rakuten chưa được phủ sóng toàn quốc, hiện tại mới chỉ được phủ sóng ở những thành phố lớn. Ở những nơi chưa có sóng của rakuten sẽ tự chuyển thành sóng của đối tác rakuten mobile.\n-   Sim của rakuten rất kén máy nhiều máy đời cũ không sử dụng được.\n-   Không có nhiều dịch vụ mở rộng.\n\n**Giá cước sim giá rẻ rakuten unlimit**:\n\n| Thông tin       | Rakuten mobile                                                                                 |\n| --------------- | ---------------------------------------------------------------------------------------------- |\n| Gói đata        | _3GB_ <br></br> _20GB_ <br></br> _FullData_                                                    |\n| Cước hàng tháng | Dưới 3GB 980 yên/ tháng <br></br> Dưới 20GB 1960 yên/ tháng <br></br> FullData 2980 yên/ tháng |\n| Phí đăng ký     | Miễn phí                                                                                       |\n| Phí huỷ         | Miễn phí                                                                                       |\n| Phí lấy mã MNP  | Miễn phí                                                                                       |\n| Đăng ký kèm máy | OK                                                                                             |\n\n## Khuyến mại sim giá rẻ rakuten:\n\n-   Nhận 8000point nếu đăng ký chỉ sim lần đầu.\n-   Nhận tối đa 19000point nếu chuyển từ mạng khác qua rakuten mobile và đăng ký kèm điện thoại android.\n-   Nhận tối đa 24000point nếu chuyển từ mạng khác qua rakuten mobile và đăng ký kèm điện thoại iphone.\n-   Nhận tối đa 19000point nếu đăng ký hợp đồng mới kèm điện thoại android.\n-   Nhận tối đa 24000point nếu đăng ký hợp đồng mới kèm điện thoại iphone.\n-   Không mất phí đăng ký.\n-   Khuyến mại một năm tiền cước mạng wifi cố định rakuten hikari.\n-   Mua cục phát wifi poket với giá 0 yên.\n-   Nhận điện thoại Rakuten Hand với giá 1 yên.\n-   Bạn nào đang có ý định đăng ký thì nhanh tay đăng ký nha. Nếu dùng mạng khác thì nên chuyển qua rakuten, nhận hết khuyến mại rồi thấy mạng khác có khuyến mại thì lại chuyển đi.\n-   Miễn phí 3 tháng gói gọi hodai 15 phút/lượt.\n\n### [Link Đăng Ký](https://network.mobile.rakuten.co.jp/)\n\n<span id='mineo'></span>\n\n# Sim giá rẻ mineo\n\nNếu bạn nào có thẻ crebit card (クレジットカー) thì đây là sim giá rẻ mình khuyên các bạn nên đăng ký nhất. Đây là sim giá rẻ có tốc độ cao nhất (1,5mbps) sau khi hết data tốc độ cao. Thông thường các sim giá rẻ khác sau khi hết data tốc độ cao, tốc độ sẽ bị bóp xuống thành 128Kbps ~ 1mbps.\n\n![cheapest-sim-cards-5th](/static/images/2023/cheapest-sim-cards/cheapest-sim-cards-5th.png)\n\n**Ưu điểm sim giá rẻ mineo**:\n\n-   Giá cước rẻ.\n-   Sử dụng được 5G miễn phí.\n-   Dùng được trên máy lock.\n-   Được sử dụng internet ở tốc độ 1,5mbps sau khi hết data tốc độ cao. Là sim có tốc độ cao nhất trong tất cả các loại sim sau khi hết data tốc độ cao. Với tốc độ 1,5mbps có thể xem video, youtube, tiktok.. thoải mái.\n-   Có thể tùy chọn sử dụng data tốc độ cao hoặc dùng ở tốc 1,5mbps bất cứ lúc nào giúp tiết kiệm data tốc độ cao. (chỉ cần tải app mineo về là tùy chọn sử dụng được).\n\n**Nhược điểm sim giá rẻ mineo**:\n\n-   Chỉ có thể thanh toán bằng thẻ tín dụng (クレジットカード).\n\n**Giá cước sim giá rẻ mineo**:\n\n| Gói data                    | Sim nghe gọi + SMS + Data | Sim Data   |\n| --------------------------- | ------------------------- | ---------- |\n| 1 GB                        | 1,180 円                  | 800 円     |\n| 5 GB                        | 1,380 円                  | 1,150 円   |\n| 10 GB                       | 1,780 円                  | 1,550 円   |\n| 20 GB                       | 1,980 円                  | 1,750 円   |\n| スタンダード (最大 1.5Mbps) | 990 円                    | 990 円     |\n| プレミアム (最大 3Mbps)     | 2,200 円                  | 2,200 円   |\n| 24 時間データ使い放題       | 330 円/lần                | 330 円/lần |\n\n-   マイそく(スタンダード): Sử dụng mạng ở tốc độ 1.5Mbps.\n-   マイそく(プレミアム): Sử dụng mạng ở tốc độ 3Mbps.\n-   24 時間データ使い放題: Sử dụng dụng mạng hodai full data trong 24h.\n\n**Lưu ý khi đăng ký gói マイソク**:\n\n-   Từ thứ 2 đến thứ 6 trong khoảng thời gian từ 12h ~ 13h tốc độ sẽ bị giảm xuống còn 32kbps.\n-   Nếu dùng quá 10GB trong 3 ngày (100GB/tháng), tốc độ sẽ bị giảm xuống còn 32kbps. Sau 3 ngày tốc độ lại trở lại bình thường.\n\n## Khuyến mại sim giá rẻ mineo:\n\n-   Miễn phí dùng đường truyền 5G.\n-   Miễn phí 2 tháng gói パケット放題 khi đăng ký gói 1GB, 5GB (tăng tốc độ vào mạng lên 1.5Mbps sau khi hết data tốc độ cao hàng tháng). Nếu không đăng ký gói này chỉ có thể vào mạng ở tốc độ 200Kbps.\n-   Miễn phí gói パケット放題 khi đăng ký gói 10GB, 20GB (tăng tốc độ vào mạng lên 1.5Mbps sau khi hết data tốc độ cao hàng tháng).\n-   Giảm giá tối đa 80% tiền máy khi chuyển từ nhà mạng khác qua mineo tùy thời điểm khuyến mại.\n-   Giảm giá tối đa 6000yên khi nâng cấp máy tùy thời điểm khuyến mại.\n\n### [Link Đăng Ký](https://mineo.jp/)\n\n<span id='ymobile'></span>\n\n# Sim giá rẻ ymobile\n\n**Ưu điểm sim giá rẻ ymobile**:\n\n-   Không mất phí đăng ký.\n-   Có thể đăng ký kèm máy.\n-   Giá máy rẻ.\n-   Miễn phí 1 năm gói tăng dung lượng data 5GB/tháng.\n-   Có thể hủy bất cứ lúc nào mà không bị mất phí hủy.\n\n**Nhược điểm sim giá rẻ ymobile**:\n\n-   Giá cước cao hơn chút so với sim khác.\n-   Chỉ có thể dùng thẻ クレジットカード để thanh toán\n\n**Giá cước sim giá rẻ ymobile**:\n\n| シンプル S (Simple S) | シンプル M (Simple M) | シンプル L (Simple L) |\n| --------------------- | --------------------- | --------------------- |\n| 3 GB                  | 15 GB                 | 25 GB                 |\n| 2178 yên              | 3278 yên              | 4158 yên              |\n\n> Nếu đăng ký kèm điện gia đình hoặc đăng ký từ 2 sim trở lên sẽ được giảm giá -1,188yên/tháng.\n\n![cheapest-sim-cards-6th](/static/images/2023/cheapest-sim-cards/cheapest-sim-cards-6th.png)\n\n## Khuyến mại sim giá rẻ ymobile:\n\n-   Miễn phí đăng ký.\n-   Nhận tối đa 23000yên bằng thẻ nạp paypay khi chuyển từ mạng khác qua ymobile.\n-   Nhận tối đa 9000yên bằng thẻ nạp paypay khi đăng ký hợp đồng mới.\n\n#### `Lưu ý`\n\n-   Cần phải đăng ký từ đại lý yahoo từ trang mình giới thiệu mới được khuyến mại này vì đây là khuyến mại riêng của đại lý yahoo.\n-   Cần phải đăng ký để nhận khuyến mại. Để đăng ký nhận khuyến mại các bạn nhấn vào link bên dưới sau đó nhấn vào ログインしてエントリー để đăng ký nhận khuyến mại.\n\n### [Link Đăng Ký](https://www.ymobile.jp/)\n\n<span id='summary'></span>\n\n# Tổng kết\n\nVậy là mình đã giới thiệu cho bạn nhanh các loại sim giá rẻ tại Nhật đang thịnh hành và được sử dụng nhiều ở Nhật hiện tại cũng như phù hợp với nhu cầu của người Việt ở Nhật nhất rồi.\n\nTóm lại, nếu gặp khó khăn trong việc lựa chọn sim nào cho phù hợp thì bạn cứ đăng ký thử sim giá rẻ ở vị trí #1 mà mình khuyên dùng nhất sẽ không hối hận đâu.\n\nHi vọng bài viết này sẽ giúp bạn lựa chọn được sim giá rẻ phù hợp nhất với nhu cầu của bản thân.\n\nNếu thấy bài viết hay hãy chia sẻ cho bạn bè cùng biết nhé.\n"
    },
    "readingTime": {
        "text": "12 min read",
        "minutes": 11.05,
        "time": 663000,
        "words": 2210
    },
    "title": "Sim giá rẻ ở Nhật",
    "date": "2023-08-13",
    "summary": "Sim giá rẻ tốt nhất ở Nhật năm 2023",
    "lang": "vi",
    "image": "/static/images/2023/cheapest-sim-cards/cheapest-sim-cards.png",
    "draft": false,
    "tags": [
        "cuộc sống"
    ]
},
    slug: 'cheapest-sim-cards',
},
{
    ...{
    "body": {
        "raw": "\nRất nhiều công việc ở Nhật hiện nay cần đến bằng lái xe như: công việc quản lý tu nghiệp sinh, nhân viên phát triển thị trường,…Vì vậy, việc trang bị cho mình bằng lái xe cũng là một cách tốt giúp các bạn tiếp cận nhiều hơn với các cơ hội công việc trong tương lai.\n\nTrong bài này, mình sẽ tổng hợp một những thông tin chi tiết liên quan tới việc học bằng lái xe ôtô ở Nhật để các bạn tiện tham khảo nhé. Ngoài cách học từ đầu ra, các bạn còn có thể tham khảo cách thi đổi từ bằng lái xe của Việt Nam sang bằng Nhật trong một bài viết khác, mình sẽ để link [ở đây](https://tomonivj.jp/huong-dan-chi-tiet-cach-doi-bang-lai-xe/).\n\n## Mục lục\n\n1. [Chi phí cần thiết cho việc học lái xe ở Nhật](#tuition)\n2. [Các hình thức học bằng lái xe phổ biến ở Nhật](#courses)\n3. [Quy trình cho đến khi nhận được bằng lái chính thức](#process)\n4. [Tổng kết](#summary)\n\n---\n\n![drive-cert-1st](/static/images/2023/drive-cert/1st.jpeg)\n\n<span id='tuition'></span>\n\n# Chi phí cần thiết cho việc học lái xe tại Nhật\n\nCon số này rất khác nhau tùy thuộc vào loại bằng lái mà bạn muốn lấy, bạn là sinh viên hay người đi làm, và thời gian bạn có thể bố trí để học.\n\nVới bằng lái xe ô tô phổ thông, phí dao động trong khoảng từ 17~35 man, bao gồm nhiều loại chi phí khác nhau (phí nhập học, phí tài liệu, phí thực hành, phí cấp bằng v.v..).\n\nVí dụ nếu bạn đang là sinh viên và có thể bố trí học tập trung trong 2-3 tuần liên tục (ăn ở tại trường lái luôn) thì phí sẽ rất rẻ, chỉ khoảng 17-21 man tùy trường. Tuy nhiên, nếu bạn đã đi làm và chỉ có thể tranh thủ thời gian buổi tối hoặc các ngày cuối tuần để đi học tại các trường lái gần nhà, thì mức phí này sẽ đội lên khá lớn, lên tới 30-35 man tùy trường. Các bạn sinh viên nhưng do baito bận rộn không đi học tập trung được, nếu lựa chọn hình thức học trường lái thì sẽ được giảm đi đôi chút so với mức phí của người đi làm vì được hưởng 学割…\n\nBằng lái xe phổ thông có 2 loại: bằng lái xe số tự động (AT) và xe số sàn (MT). Hiện nay đa số các xe ô tô là xe số tự động, phần lớn người Nhật cũng chỉ thi lấy bằng AT, số người thi lấy bằng MT cũng giảm đi nhiều. Thi lấy bằng AT, chi phí giảm khoảng 2 man, số giờ thực hành cũng giảm khoảng 3 giờ so với bằng MT. Sau này, bạn cũng có thể chuyển sang bằng lái MT nếu muốn. Do vậy, nếu bạn thi lấy bằng để đi lại hàng ngày, hoặc du lịch chẳng hạn, thì bạn nên chọn thi lấy bằng AT.\n\n![drive-cert-2nd](/static/images/2023/drive-cert/2nd.jpeg)\n\n<span id='courses'></span>\n\n# Các hình thức học lái xe phổ biến ở Nhật\n\nĐể thi lấy được bằng lái xe ô tô tại Nhật Bản, có 2 hình thức học phổ biến, đó là: Học tại các driving school (教習所) và học tập trung tại trường huấn luyện (合宿)\n\n## Học tại driving school – các cơ sở đào tạo lái xe chỉ định (教習所)\n\nĐây là hình thức đi học, tham dự các giờ học tại cơ sở đào tạo lái xe theo lịch sắp xếp phù hợp với lịch làm việc và học tập của bản thân, rồi dự thi lấy bằng lái sau khi đủ điều kiện tốt nghiệp khóa học tại trường.\n\nSau khi đăng ký học, bạn sẽ được phát lịch các tiết học lý thuyết của trường (quay vòng) để chọn đi học giờ phù hợp. Còn giờ học thực hành thì bạn có thể trao đổi với bộ phận lễ tân của trường để book lịch học với thầy phù hợp nhất với lịch của bản thân. Tuỳ từng plan, bạn có thể book trước lịch thực hành của cả khoá, hoặc nửa khoá, hoặc chỉ được trước vài tiết. Nếu phải học lại 1 tiết thực hành nào đó, thì bạn lại trao đổi để book lịch bổ sung.\n\nTuy vậy, theo quy định, số tiết thực hành tối đa trong 1 ngày ở giai đoạn 1 là 2 tiết, và giai đoạn 2 là 3 tiết (nhưng ko được là 3 tiết liền nhau). Vì vậy, việc book lịch thực hành thường sẽ khó khăn nếu bạn học đúng giai đoạn trường quá đông (ví dụ: kì nghỉ lễ, nghỉ hè, thứ 7 CN,..)\n\n**_Hình thức này phù hợp với những bạn:_**\n\n-   Muốn ưu tiên công việc của bản thân, hưng vẫn có thể học và thi lấy bằng. Bạn có thể sắp xếp thời gian phù hợp để đến cơ sở đào tạo lái xe tham gia giờ học, thực hành.\n\n-   Không cần bằng lái gấp. Có thể học từ từ, nhưng tối đa là trong thời gian 9 tháng (kể từ ngày bắt đầu đi học đến ngày tốt nghiệp).\n\n-   Muốn đi học lái xe ở những cơ sở gần nhà, gần trường học, gần nơi làm việc để tiện đi lại, sắp xếp công việc, học hành,..\n\n-   Khó sắp xếp được kỳ nghỉ dài để tham gia học tập trung.\n\n> Hình thức này có nhược điểm là chi phí khá đắt, thường ở mức từ 30-35 man,\n> khá cao so với khả năng của các bạn du học sinh. Ngoài ra, nếu không bố trí\n> được thời gian thực hành liên tục do quá bận bịu, thì cảm giác với xe sẽ\n> không tốt (đặc biệt là phái nữ), nên thường gặp khó khăn khi thi thực hành\n> hơn so với học tập trung\n\n![drive-cert-3rd](/static/images/2023/drive-cert/3rd.jpeg)\n\n## Học tập trung tại trường huấn luyện lái xe (合宿)\n\nĐây là hình thức học tập trung trong 1 thời gian ngắn để thi lấy bằng lái xe. Các học viên sẽ tập trung, ăn ở tại 1 cơ sở đào tạo lái xe, học lý thuyết, thực hành trong vòng hơn 2 tuần theo lịch định sẵn của nhà trường.\n\n-   Do hình thức học tập trung thường tại các trường huấn luyện thường được đặt ở các địa phương (ví dụ: Shizuoka, Niigata,…) , nên chi phí sẽ rẻ hơn so với tự đi học tại các cơ sở đào tạo gần nhà. Dao động trong khoảng 17 ~25man.\n\n-   Phù hợp với bạn muốn lấy bằng lái trong thời gian ngắn. Do học tập trung liên tục trong vòng 2 tuần nên khả năng thực hành cũng tốt hơn.\n\n-   Phù hợp với bạn sinh viên sắp xếp được thời gian nghỉ để tập trung học trong 2 tuần.\n\n-   1 lý do nữa là, học tập trung tại các địa phương nên có thể kết hợp thành 1 chuyến đi chơi xa nếu bạn thích du lịch.\n\n> Link tìm kiếm cơ sở học tập trung [https://www.gasyukumenkyo.com/](https://www.gasyukumenkyo.com/)\n\n![drive-cert-4th](/static/images/2023/drive-cert/4th.jpeg)\n\n<span id='process'></span>\n\n# Quy trình cho đến khi nhận bằng lái chính thức\n\nTrước hết, bạn cần lựa chọn loại bằng lái sẽ học, hình thức học và cơ sở đào tạo lái xe phù hợp với bản thân theo những tiêu chí mà mình vừa đề cập tới ở trên. Ở cả hai hình thức học tại trường lái và học tập trung, việc học lái xe đều chia làm 2 giai đoạn, bao gồm cả lý thuyết và thực hành như sau.\n\n## Giai đoạn đào tạo thứ nhất (1 tiết = 50 phút)\n\n|     | AT (số tự động) |                   |     | MT (số sàn) |                   |\n| --- | --------------- | ----------------- | --- | ----------- | ----------------- |\n|     | Lý thyết        | 9 tiết            |     | Lý thuyết   | 9 tiết            |\n|     | Thực hành       | Tối thiểu 12 tiết |     | Thực hành   | Tối thiểu 15 tiết |\n\n-   Giai đoạn này bạn sẽ học thực hành các thao tác cơ bản khi lái xe, và các cách xử lý tình huống trong sa hình của trường. Mỗi buổi học thực hành sẽ có 1 giáo viên ngồi cùng trên ghế phụ và hướng dẫn chi tiết cho bạn.\n\n-   Cuối mỗi buổi học thực hành, thầy sẽ quyết định bạn có qua được buổi thực hành đó hay không?\n\n    Nếu không qua, bạn sẽ được yêu cầu học lại lần nữa cho tới khi đạt. Ở các trường lái, mỗi buổi học thực hành sẽ mất phí khoảng từ 5000-7000y. Vì vậy, nếu không tự tin về khả năng thực hành của mình lắm, bạn nên chọn gói học 安心パック (hoặc các tên tương tự tùy trường), thường mất thêm khoảng 1-2 man chi phí nhưng cho phép bạn học lại bao nhiêu lần cũng được. Gói này thường chỉ chọn được khi mới đăng ký học, nên các bạn nên cân nhắc khả năng của mình để tránh mất thêm nhiều tiền vì…học lại nhé.\n\n-   Học lý thuyết về cơ bản là bằng tiếng Nhật, nhưng hiện nay do nhu cầu học của người nước ngoài tăng cao, nên cũng rất nhiều trường có cả khóa học bằng tiếng Anh. Các bạn nếu ko tự tin tiếng Nhật có thể tìm hiểu các trường có khóa tiếng Anh để học nhé.\n\n1. Kết thúc giai đoạn 1 sẽ có bài thi (gồm 50 câu lý thuyết và 1 bài thực hành trong sa hình, đỗ lý thuyết mới được thi tiếp thực hành). Nếu đỗ, bạn sẽ được cấp giấy phép lái xe tạm thời (仮免許). Nếu trượt, bạn sẽ phải học lại ít nhất 1 tiết rồi mới được thi lại và sẽ tốn phí cho bài thi lại này.\n2. Sau khi đỗ kỳ thi lấy bằng lái tạm thời, bạn mới tiếp tục được học lên giai đoạn thứ 2:\n3. Với bằng lái xe tạm thời này, bạn có thể lái xe ra đường nếu có thầy giáo hướng dẫn, hoặc người có kinh nghiệm lái xe 3 năm trở lên ngồi ở ghế phụ. Tuy nhiên, để đảm bảo an toàn, một số trường không cho phép học viên mang bằng lái này về nhà.\n\n## Giai đoạn đào tạo thứ hai (1 tiết = 50 phút)\n\n|     | AT (số tự động) |                   |     | MT (số sàn) |                   |\n| --- | --------------- | ----------------- | --- | ----------- | ----------------- |\n|     | Lý thyết        | 16 tiết           |     | Lý thuyết   | 16 tiết           |\n|     | Thực hành       | Tối thiểu 19 tiết |     | Thực hành   | Tối thiểu 19 tiết |\n\n**Giai đoạn này sẽ được lái xe ra đường với người hướng dẫn (thầy giáo).**\n\n1. Sau giai đoạn đào tạo thứ 2, các bạn sẽ trải qua một bài thi sát hạch (lý thuyết + thực hành) để kiểm tra xem mình có đủ điều kiện thi tốt nghiệp không. Nếu qua thì sẽ được thi kỳ thi tốt nghiệp chính thức. Còn nếu không qua, thì bạn sẽ phải học lại cho tới khi thầy cảm thấy bạn đủ khả năng để thi.\n2. Bài thi tốt nghiệp chính thức chỉ có phần thực hành. Bạn sẽ được cấp bằng tốt nghiệp sau khi thi đỗ phần thi thực hành này.\n3. Mang giấy chứng nhận tốt nghiệp tới trung tâm cấp bằng nơi mình cư trú, dự thi tiếp 1 kỳ thi lý thuyết cuối cùng (gồm 100 câu trắc nghiệm) và đạt trên 90 điểm, bạn sẽ được cấp bằng chính thức.\n\n**Lưu ý**:\n\n-   Bằng lái xe tạm thời có thời hạn sử dụng 6 tháng. Nếu quá thời gian này bạn không tốt nghiệp được thì sẽ phải thi lại bằng này lần nữa trước khi thi tốt nghiệp.\n-   Giấy chứng nhận tốt nghiệp có kỳ hạn 1 năm. Nếu không dự thi bài thi cuối cùng để lấy bằng chính thức trước thời hạn này, thì toàn bộ công sức học của bạn sẽ coi như đổ sông đổ biển.\n\n<span id='summary'></span>\n\n# Tổng kết\n\nNhư vậy, toàn bộ bí kíp chia sẻ kinh nghiệm thi bằng lái xe ô tô tại Nhật đã được gói gọn trong bài viết này. Mặc dù lấy bằng lái tại Nhật không dễ dàng nhưng hãy nhớ rằng “trăm hay không bằng tay quen”, chỉ cần bạn tập luyện nhiều thì sẽ lấy được bằng lái xe trót lọt thôi. Chúc bạn sớm cầm bằng lái chính thức trên tay nhé!\n"
    },
    "readingTime": {
        "text": "11 min read",
        "minutes": 10.655,
        "time": 639300,
        "words": 2131
    },
    "title": "Học bằng lái xe oto ở Nhật",
    "date": "2023-05-30",
    "summary": "Học bằng lái xe đơn giản dễ đậu",
    "lang": "vi",
    "image": "/static/images/2023/drive-cert/drive-cert.png",
    "draft": false,
    "tags": [
        "cuộc sống"
    ]
},
    slug: 'drive-cert',
},
{
    ...{
    "body": {
        "raw": "\nSau khi tự học 6 tháng và thi đỗ FE với số điểm suýt soát ở lần thứ hai (lần đầu thiếu 40 điểm 泣 ), mình lại ngoi lên để chia sẻ về quá trình học, luyện đề và kinh nghiệm đi thi.\n\n## Mục lục\n\n1. [FE là gì, tại sao lại thi FE?](#introduce)\n2. [Kế hoạch học tập và luyện đề](#plan)\n3. [Kinh nghiệm đi thi và các mẹo làm bài](#tips)\n4. [Tổng kết](#summary)\n\n---\n\n<span id='introduce'></span>\n\n# FE là gì, tại sao lại thi FE?\n\n## Giới thiệu\n\nKỳ thi kỹ sư Công nghệ thông tin cơ bản (tên tiếng Nhật: 基本情報技術者試験), là một kỳ thi chứng chỉ quốc gia của Nhật và sẽ mở ra cho bạn rất nhiều cơ hội việc làm. Kỳ thi được tổ chức nhằm mục đích phát triển nguồn nhân lực IT tại các quốc gia châu Á và tăng cường sự liên kết giữa các quốc gia, hiện được tổ chức ở 6 quốc gia: Philippines, Thái Lan, Việt Nam, Myanmar, Mông Cổ, Bangladesh.\n\nTừ tháng 12/2020, IPA chuyển SG và FE sang hình thức thi online trên máy tính (thay vì thi tập trung offline như những năm trước đó)\n\n|     | Thông tin         | Chi tiết                                                   |\n| --- | ----------------- | ---------------------------------------------------------- |\n|     | Đăng ký           | https://cbt-s.com/examinee/examination/fe                  |\n|     | Lệ phí thi        | 7500 yên                                                   |\n|     | Độ khó            | Level 2 (tương đối thấp)                                   |\n|     | Hình thức thi     | Thi **trắc nghiệm** trên máy tính                          |\n|     | Tổng số câu       | phần A: 60 câu/1000 điểm, phần B: 20 câu/1000 điểm         |\n|     | Điểm đỗ           | phần A: 600 điểm, phần B: 600 điểm                         |\n|     | Giờ học cần thiết | 70-200 giờ                                                 |\n|     | Thời gian thi     | Quanh năm (lần thi sau cách lần thi trước ít nhất 1 tháng) |\n|     | Kết quả           | Thông báo vào ngày 15 của tháng tiếp theo sau khi thi      |\n\n## Thi FE được gì\n\n-   Chuyển việc trái ngành sang IT ở Nhật, gia hạn visa với tư cách kỹ sư Công nghệ thông tin (技術・人文知識・国際業務)\n\n-   Khi xin visa nhân lực chất lượng cao sẽ được cộng thêm 5 điểm theo thang tính điểm hồ sơ. Cách tính điểm chi tiết bạn tham khảo thêm [tại đây](https://www.visajapan.jp/koudo_point1)\n\n-   Nắm bắt được các kiến thức căn bản nhưng rất quan trọng trong ngành IT, giúp bạn tiến xa hơn trong công việc, sự nghiệp sau này.\n\n## Độ khó\n\nTừ tháng 4/2023 format đề thi FE và thời gian tổ chức sẽ thay đổi theo hướng phổ thông và dễ tiếp cận hơn.\n\n|     | Năm     | Tỷ lệ đỗ |\n| --- | ------- | -------- |\n|     | 07/2023 | 49%      |\n|     | 06/2023 | 52%      |\n|     | 05/2023 | 54%      |\n|     | 04/2023 | 56%      |\n|     | 10/2022 | 35%      |\n|     | 04/2022 | 39%      |\n|     | 10/2021 | 40%      |\n|     | 04/2021 | 41%      |\n|     | 10/2020 | 48%      |\n|     | 04/2020 | 28%      |\n\nDựa vào dữ liệu thống kê trên, có thể thấy tỷ lệ đỗ các kỳ thi FE đã tăng cao đáng kể trong những năm gần đây. Điều này cho thấy sự cải thiện trong việc chuẩn bị trước kỳ thi và độ khó giảm dần của chính kỳ thi này. Đối với những ai đang hướng tới việc sở hữu chứng chỉ FE, thời điểm hiện tại là cơ hội lý tưởng để bắt đầu hoặc tăng cường việc ôn luyện và tham gia kỳ thi này.\n\n<span id='plan'></span>\n\n# Kế hoạch học tập và luyện đề\n\nỞ phần này, mình sẽ đi vào chi tiết từng phần trong kỳ thi và cách ôn luyện cho từng mục cụ thể.\n\n## Phần A - 科目A試験\n\n|           | Trước 4/2023 | Sau 4/2023 |\n| --------- | ------------ | ---------- |\n| Số câu    | 80 câu       | 60 câu     |\n| Số điểm   | 1000 điểm    | 1000 điểm  |\n| Thời gian | 150 phút     | 90 phút    |\n| Độ khó    | Trung bình   | Trung bình |\n\nPhần này gồm có 3 mục chính gồm:\n\n-   Technology テクノロジ系 (41 câu)\n\n    ・Lý thuyết cơ bản 基礎理論\n\n    ・Hệ thống máy tính コンピュータシステム\n\n    ・Các yếu tố kỹ thuật 技術要素\n\n    ・Công nghệ phát triển (phần mềm) 開発技術\n\n-   Management マネジメント系 (7 câu)\n\n    ・Quản lý dự án プロジェクトマネジメント\n\n    ・Quản lý dịch vụ サービスマネジメント\n\n-   Strategy ストラテジ系 (12 câu)\n\n    ・Chiến lược hệ thống システム戦略\n\n    ・Chiến lược kinh doanh 経営戦略\n\n    ・Doanh nghiệp và pháp lý 企業と法務\n\nTrước và sau kỳ thi, vì độ khó không thay đổi nên tỷ lệ các câu hỏi xuất hiện trong đề thi cũ khá nhiều. Việc của chúng ta chỉ là học lý thuyết sau đó tập trung giải các đề cũ thật nhiều thôi.\n\nBạn có thể tìm theo keyword \"基本情報技術者試験\" trên Amazon và mua một cuốn được đánh giá cao bất kỳ. Mình đã đọc qua [cuốn này](https://www.amazon.co.jp/dp/4297124513) trong 1 tháng và thực sự không recoomend cho lắm.\n\nNếu bạn không có điều kiện mua sách thì có thể tham khảo bản pdf free dưới đây: (_Comment hoặc inb cho mình để thêm vào whitelist gmail xem chung nhé !_)\n\nLink PDF free: [chi tiết](https://drive.google.com/file/d/1HNPH-V0c9BpYRh5ZqL6PDNd4wzL2h5ns/view?usp=sharing)\n\nTiếp theo, mình sẽ luyện đề cũ phần A (**lưu ý: chỉ luyện phần A**) qua trang ôn luyện _huyền thoại_: https://www.fe-siken.com/\n\nMình đã luyện hơn 10 đề (5 năm trở lại đây) bằng trang này và đỗ suýt soát môn A với số điểm 680. Nếu bạn có thời gian, giải thật nhiều đề cũ và hoàn toàn có thể đạt được số điểm tốt hơn vì tỷ lệ xuất hiện câu hỏi trong đề cũ rất cao.\n\n## Phần B - 科目B試験\n\n|           | Trước 4/2023 | Sau 4/2023 |\n| --------- | ------------ | ---------- |\n| Số câu    | 5 câu        | 20 câu     |\n| Số điểm   | 1000 điểm    | 1000 điểm  |\n| Thời gian | 150 phút     | 100 phút   |\n| Độ khó    | Trung bình   | Dễ         |\n\nTheo thông tin từ trang web chính thức, phần B sẽ tập trung vào giải thuật và bảo mật. Cá nhân mình thấy 'dễ thở' hơn, phù hợp hơn với các bạn non-IT (như mình) và có background tiếng Nhật tốt.\n\nCấu trúc phần thi gồm:\n\n-   Lập trình, cấu trúc dữ liệu và giải thuật プログラミング ・データ構造及びアルゴリズム (16 câu)\n\n_Phần giải thuật chủ yếu là mã giả (pseudo), cần chú ý một vài điểm như **index của mảng bắt đầu bằng 1 (mã giả) chứ không phải bằng 0 (lập trình)**. Hay các ký tự và ý nghĩa của chúng trong mã giả.._\n\n-   Bảo mật 情報セキュリティ (4 câu)\n\nĐộ khó giảm, thay đổi format đề thi khiến việc lấy điểm môn B trở nên dễ hơn rất nhiều, cũng là lý do tỉ lệ đỗ tăng cao trong thời gian gần đây (đối với người Nhật có kinh nghiệm trong ngành IT thì chỉ cần tìm hiểu format và có trường hợp đã thi đỗ chỉ sau vài ngày ôn luyện @.@)\n\nKinh nghiệm xương máu của mình là đã dành thời gian quá nhiều cho việc giải đề cũ phần B trên trang https://www.fe-siken.com/ . Mặc dù việc này giúp mình tăng cao khả năng tư duy giải thuật và khả năng đọc hiểu một vấn đề kỹ thuật khá chuyên môn T_T nhưng chả giúp ích gì cho việc nâng điểm trong lần thi đầu tiên.\n\nSau đó mình có đọc qua các blog của các bạn người Nhật và cực kỳ recommend việc ôn luyện thông qua\n\n### Sách (format mới)\n\nhttps://www.amazon.co.jp/dp/4798182524\n\n[![fe-cert-2nd](/static/images/2023/fe-cert/fe-cert-2nd.jpg)](https://www.amazon.co.jp/dp/4798182524)\n\n### Kênh youtube chuyên giải đề FE (format mới)\n\nhttps://www.youtube.com/@itgakko\n\n[![fe-cert-3rd](/static/images/2023/fe-cert/fe-cert-3rd.png)](https://www.youtube.com/@itgakko)\n\n<span id='tips'></span>\n\n# Kinh nghiệm đi thi và các mẹo làm bài\n\n-   Mang theo giấy tờ cá nhân (passport, thẻ ngoại kiều hoặc bằng lái xe Nhật) vào ngày dự thi.\n\n-   Bài thi có thể bắt đầu ngay khi bạn đến trung tâm kiểm tra. Mình đăng ký thi 10h sáng thì đến lúc 9h30 tưởng được ôn bài chút thì người ta hướng dẫn vào phòng thi luôn.\n\n-   Kết thúc phần thi A → Nghỉ 30 phút có thể ra khỏi phòng thi (đi vệ sinh, uống nước, checkin điện thoại relax phát :v) → tiếp tục phần thi B. Bạn cũng có thể bắt đầu phần thi B ngay lập tức nếu muốn.\n\n-   Tắt nguồn điện thoại, smart watch và bỏ vào tủ đồ theo hướng dẫn của giám thị phòng thi. Đồng hồ cũng không được phép mang theo, thông tin về thời gian sẽ được hiển thị trên màn hình.\n\n-   Giấy nháp và bút sẽ được cung cấp bởi trung tâm kiểm tra. Để nhận thêm, bạn cần phải bấm chuông báo giám thị.\n\n-   Có một phần giới thiệu về hình thức CBT (Computer-Based Testing) ở đầu bài thi. Cách đánh dấu câu hỏi, cách review các câu trả lời,...\n\n-   Điểm số được hiển thị ngay khi bạn hoàn thành bài thi.\n\n-   Nếu bạn đạt 600 điểm cho mỗi phần (A và B), chúc mừng bạn đã đỗ kỳ thi, việc còn lại là về nhà đợi giấy báo đỗ và đi 飲み会 thôi :v\n\n<span id='summary'></span>\n\n# Tổng kết\n\nMong rằng qua bài viết này bạn có thể hiểu thêm về kỳ thi FE, cũng như cách ôn luyện cần thiết để nắm chắc phần thắng trong kỳ thi này. Chúc bạn ôn luyện chăm chỉ và có kết quả tốt trong kỳ thi.\n"
    },
    "readingTime": {
        "text": "9 min read",
        "minutes": 8.395,
        "time": 503700,
        "words": 1679
    },
    "title": "Tự học FE",
    "date": "2023-12-30",
    "summary": "Chia sẻ về kỳ thi FE (Fundamentals of Engineering Certification 基本情報技術者試験) và cách học hiệu quả",
    "lang": "vi",
    "image": "/static/images/2023/fe-cert/fe-cert.png",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'fe-cert',
},
{
    ...{
    "body": {
        "raw": "\n`IT Passport (IT パスポート)` là kỳ thi chứng chỉ được khá nhiều bạn có dự định hoặc mới bước chân vào ngành IT quan tâm. Nội dung thi bao gồm nhiều kiến thức cơ bản về IT nên không chỉ các bạn đang học ngành IT và muốn trở thành lập trình viên tương lai, mà kể cả các bạn thuộc khối ngành kinh tế – xã hội đang hoặc sắp vào làm sales hoặc HR tại các công ty IT đều có thể thử sức. Trong bài viết dưới đây, mình sẽ tổng hợp những thông tin khái quát nhất về kỳ thi IT Passport để các bạn quan tâm có thể tìm hiểu thêm nhé.\n\n## Mục lục\n\n1. [Kỳ thi chứng chỉ IT Passport](#introduction)\n2. [Lợi thế của chứng chỉ IT Passport](#advantage-points)\n3. [Giới thiệu các sách ôn thi hiệu quả](#effective-books)\n4. [Tổng kết](#summary)\n\n---\n\n<span id='introduction'></span>\n\n# Kỳ thi chứng chỉ IT Passport\n\n**Chứng chỉ IT Passport là gì?**\n\nKỳ thi chứng chỉ IT Passport (IT パスポート) được tổ chức bởi Tổ chức Xúc tiến Công nghệ thông tin IPA, là một trong các chứng chỉ cấp quốc gia của các kỹ sư Công nghệ thông tin được Bộ Kinh tế, Thương mại và Công nghiệp Nhật Bản công nhận. Đúng như tên gọi, có thể nói người thi đỗ kỳ thi này sẽ nắm được “giấy thông hành” để bước chân vào lĩnh vực IT, nghĩa là quá trình học cho kỳ thi sẽ cung cấp cho người học những kiến thức cơ bản nhất về ngành này.\n\n**Thời gian, địa điểm thi**: Kỳ thi diễn ra 5~6 lần/ năm, thời gian tùy địa điểm tổ chức, được tổ chức vào 3 buổi sáng – trưa – chiều/ ngày. Địa điểm thi phân bố trên khắp 47 tỉnh thành, được công bố trước 3 tháng trước ngày thi, tham khảo tại đây.\n\n**Lệ phí thi**: 7,500 yen (Đã bao gồm thuế). Có thể trả qua thẻ credit, combini, voucher…\n\n**Hình thức thi**: Sử dụng hình thức CBT (Computer Based Testing) thi trên máy tính tại các hội đồng thi. Trả lời 100 câu hỏi trong thời gian 120 phút.\n\n**Cách thức ra đề**: chọn đáp án đúng.\n\n**Cách đăng ký**: Chỉ đăng ký được trên web.\n\nTham khảo thêm về cách thức đăng ký [tại đây](https://www3.jitec.ipa.go.jp/JitesCbt/html/examination/apply.html).\n\n**Nội dung thi**: tập trung vào những kiến thức IT cơ bản thuộc các lĩnh vực như\n\n**Độ khó**: Tiếng Nhật tầm N3, trung bình cần 30~50 giờ tự học, đối với người không có kiến thức cơ bản về IT cần 100 giờ học. Đối với các bạn sinh viên thuộc khối ngành IT hay ngành Thông tin truyền thông cần ít nhất 20 giờ học. Độ khó của kỳ thi tùy thuộc vào khả năng sử dụng máy tính của từng người.\n\n**Tỉ lệ đỗ**: Mức điểm đỗ 600/1000 điểm. Tỉ lệ đỗ chiếm 60% cho các kỳ thi trước đây và những kỳ thi gần đây tỉ lệ đậu ở mức 50%. Được đánh giá là độ khó và tỉ lệ đỗ ngang bằng với kỳ thi Boki cấp 3 (簿記検定 3 級).\n\n<span id='advantage-points'></span>\n\n# Lợi thế của chứng chỉ IT Passport\n\n**Đặc trưng của chứng chỉ**: Kỳ thi IT Passport không yêu cầu bạn phải thành thạo một kỹ năng IT cụ thể, mà yêu cầu nhiều kiến ​​thức toàn diện trong lĩnh vực Công nghệ thông tin nên được xem như là một kỳ thi dành cho những người mới bắt đầu. Từ nền tảng đã có ở chứng chỉ, người học hoàn toàn có thể học các kỹ năng IT ở các mức độ cao hơn.\nVì vậy, đây là bằng cấp không chỉ phù hợp cho những sinh viên muốn trở thành kỹ sư IT mà còn có thể ứng dụng vào rất nhiều công việc có liên quan tới IT như các bạn làm sales hay HR trong các công ty IT.\n\n**Lợi thế đối với các bạn học khối tự nhiên (rikei)**: Là chứng chỉ bổ sung kiến thức về xử lý thông tin cơ bản nên việc học chứng chỉ giúp hình thành nên nền tảng vững chắc, rất có ích cho quá trình PR bản thân đặc biệt đối với các bạn đang học ngành IT tại các trường senmon có ý muốn xin việc để trở thành kỹ sư IT.\nCùng với các chứng chỉ IT khác, IT Passport cùng thuộc hệ thống chứng chỉ IT quan trọng được công nhận là chứng chỉ quốc gia.\n\n**Lợi thế đối với các bạn học khối kinh tế – xã hội (bunkei)**: Chứng chỉ IT Passport cũng là bằng cấp thiết thực cho các công việc văn phòng khác có vẻ ít liên quan đến công nghệ thông tin. Ngày nay, việc tiếp xúc với máy tính và kết nối mạng ngày càng phổ biến và cần thiết nhất là đối với nhân viên văn phòng.\nVì thế, việc hiểu biết về các biện pháp bảo mật và kiến ​​thức thông tin cơ bản sẽ trở thành một lợi thế lớn. Trên thực tế chứng chỉ này rất hữu ích vì nó đóng vai trò như là bằng chứng về các kỹ năng máy tính trong công việc văn phòng. Hơn nữa trong quá trình xin việc, việc thi đỗ chứng chỉ này cũng là một điểm cộng lớn trong mắt nhà tuyển dụng, đặc biệt đối với các bạn khối ngành kinh tế – xã hội khi thi đỗ chứng chỉ có thể tự tin PR bản thân khi ứng tuyển vào ngành IT hoặc làm việc tại các công ty IT.\n\n**Ưu thế so với chứng chỉ MOS**: MOS là tên viết tắt của Microsoft Office Specialist. Trong đó, office là tên chung cho các phần mềm như Windows, Excel, Word, PowerPoint và đều là các sản phẩm của Microsoft. Các phần mềm văn phòng này có thể nói là một trong những phần mềm không thể thiếu khi làm việc trong công ty.\nMOS là một bằng cấp có thể chứng minh kỹ năng sử dụng phần mềm văn phòng và được khá nhiều trường senmon khuyến khích sinh viên thi. Khác với kỳ thi MOS, kiến thức của kỳ thi IT Passport yêu cầu hiểu biết nhiều kiến ​​thức chung về công nghệ thông tin hơn, bao quát tổng thể cả các kỹ năng văn phòng và có thể ứng dụng vào hầu hết các công việc trong công ty. Chính vì thế, IT Passport là được đánh giá là có thể sử dụng kiến thức linh hoạt hơn trong những phạm vi công việc rộng hơn.\n\n**Giới thiệu thêm các kỳ thi chứng chỉ liên quan đến IT khác**:\n\n1/ `基本情報技術者試験` là chứng chỉ về kỹ năng xử lí thông tin cơ bản, các bạn sinh viên có thể có thể thể hiện trình độ năng lực và kỹ năng IT đa dạng với nhà tuyển dụng.\n\n2/ `情報セキュリティマネジメント試験` là chứng chỉ về bảo mật thông tin, được rất nhiều doanh nghiệp xem trọng, với sự đòi hỏi cao về nghiệp vụ bảo mật, đây là chứng chỉ tạo lợi thế lớn khi xin việc.\n\n<span id='effective-books'></span>\n\n# Giới thiệu các sách ôn thi hiệu quả\n\n**栢木先生の IT パスポート教室**:\n\n[![itpassport-cert-1st](/static/images/2023/itpassport-cert/1st.jpeg 'itpassport-cert-1st')](https://www.amazon.co.jp/)\n\nĐây là cuốn sách tham khảo và tuyển tập đề thi của kì thi IT Passport được đánh giá cao bởi không chỉ các sinh viên khối ngành tự nhiên mà còn cả các bạn khối kinh tế- xã hội và những người làm việc không thuộc lĩnh vực IT. Bằng cách phân tích xu hướng ra đề mới nhất và giải thích một cách dễ hiểu, dễ nhớ bằng cách sử dụng hình ảnh minh họa phong phú, sách được đánh giá cao trong việc ôn thi chứng chỉ.\n\nHơn nữa, với hình thức giải các đề thi liên quan ngay sau bài học, sách sẽ giúp kiến ​​thức được củng cố vững chắc hơn. Đặc biệt, phiên bản mới được cải biên năm 2021 tương thích với giáo trình 4.1 / 5.0, có tổng cộng 293 câu hỏi để luyện tập, được đổi mới hình thức trang và số lượng trang cũng tăng lên đáng kể.\n\nCuốn này rất phù hợp với các bạn mong muốn thi đỗ IT Passport trong thời gian ngắn.\n\n**令和 2-3 年度版 IT パスポート試験 対策テキスト&過去問題集 (よくわかるマスター)**:\n\n[![itpassport-cert-2nd](/static/images/2023/itpassport-cert/2nd.jpg 'itpassport-cert-2nd')](https://www.amazon.co.jp/)\n\nĐây là cuốn sách được ví như là tập hợp giáo trình và sách tham khảo cung cấp kiến thức cần thiết cho kỳ thi, ngoài ra còn có tập hợp đề thi để luyện tập. Sách được hoàn chỉnh nội dung theo giáo trình 4.0 sửa đổi tháng 8/2018, đề cập đến nội dung của các công nghệ mới liên quan đến IoT, big data và AI…. và cả các nội dung quan trọng trong tương lai như lĩnh vực an ninh cũng được đăng tải.\n\nNgoài ra sách còn được đính kèm một đĩa CD-ROM tuyển tập đến 800 câu hỏi trong đề thi trước đây, chức năng chấm điểm tự động và giải thích chi tiết tất cả các câu hỏi cũng là một sự hỗ trợ đắc lực để người học có thể chuẩn bị tốt hơn cho kỳ thi thực tế.\n\n**(全文 PDF・単語帳&過去問アプリ付)かんたん合格 IT パスポート過去問題集 令和 2 年度秋期 (かんたん合格シリーズ)**:\n\n[![itpassport-cert-3rd](/static/images/2023/itpassport-cert/3rd.jpg 'itpassport-cert-3rd')](https://www.amazon.co.jp/)\n\nCuốn sách tiếp theo là tuyển tập đề thi trước đây của kỳ thi IT Passport, được đánh giá là một trong những cuốn bán chạy nhất trong suốt 10 kỳ liên tiếp, là cuốn sách dành cho bất kỳ ai cần ôn thi trong thời gian ngắn.\n\nKhông chỉ nêu ra các câu trả lời đúng, sách còn giải thích cẩn thận các lựa chọn sai và dễ hiểu nhầm, vì thế giúp người học có thể hiểu sâu và hiểu kỹ kiến thức đã học.\n\n<span id='summary'></span>\n\n# Tổng kết\n\nVậy là hôm nay các bạn đã cùng mình tìm hiểu tổng quan về kỳ thi chứng chỉ IT Passport tại Nhật. Mong rằng qua bài viết này các bạn có thể cân nhắc giữa các loại chứng chỉ, cũng như cách ôn luyện cần thiết để nắm chắc phần thắng trong kỳ thi này.\nBởi vì việc nắm trong tay một chứng chỉ IT cũng giống như việc có thêm một công cụ hỗ trợ đắc lực cho quá trình xin việc đầy tính cạnh tranh và thử thách tại Nhật phải không nào?\n"
    },
    "readingTime": {
        "text": "10 min read",
        "minutes": 9.1,
        "time": 546000,
        "words": 1820
    },
    "title": "Tự học IT Passport",
    "date": "2023-06-30",
    "summary": "Giới thiệu về kỳ thi IT Passport",
    "lang": "vi",
    "image": "/static/images/2023/itpassport-cert/itpassport-cert.png",
    "draft": false,
    "tags": [
        "IT"
    ]
},
    slug: 'itpassport-cert',
},
{
    ...{
    "body": {
        "raw": ""
    },
    "readingTime": {
        "text": "0 min read",
        "minutes": 0,
        "time": 0,
        "words": 0
    },
    "title": "Tự học AWS SAA-C03",
    "date": "2024-03-01",
    "summary": "Chia sẻ về kỳ thi AWS SAA-C03 (AWS Certified Solutions Architect - Associate) và cách học hiệu quả",
    "lang": "vi",
    "image": "/static/images/2024/aws-saa-c03-cert/1st.png",
    "draft": true,
    "tags": [
        "IT"
    ]
},
    slug: 'aws-saa-c03-cert',
},
{
    ...{
    "body": {
        "raw": ""
    },
    "readingTime": {
        "text": "0 min read",
        "minutes": 0,
        "time": 0,
        "words": 0
    },
    "title": "Mình đọc gì trong năm 2024",
    "date": "2024-01-03",
    "summary": "Các đầu sách mình đọc năm 2024",
    "lang": "vi",
    "image": "/static/images/2024/books-in-2024/1st.jpg",
    "draft": true,
    "tags": [
        "Sách"
    ]
},
    slug: 'books-in-2024',
},
{
    ...{
    "body": {
        "raw": ""
    },
    "readingTime": {
        "text": "0 min read",
        "minutes": 0,
        "time": 0,
        "words": 0
    },
    "title": "N1 là gì, có ăn được không",
    "date": "2024-03-01",
    "summary": "học thi N1 và đừng ngủ quên trên chiến thắng",
    "lang": "vi",
    "image": "/static/images/2024/n1-how-hard-it-is/1st.png",
    "draft": true,
    "tags": [
        "tiếng Nhật"
    ]
},
    slug: 'n1-how-hard-it-is',
}
];

export const postComponents: Record<string, any> = {
    'ja/blog-tutorial': Post_ja_2022_blog_tutorial,
    'ja/itpassport-cert': Post_ja_2023_itpassport_cert,
    'ja/ddd': Post_ja_2024_ddd,
    'ja/best-practices': Post_ja_2026_best_practices,
    'vi/blog-tutorial': Post_vi_2022_blog_tutorial,
    'vi/books-2023': Post_vi_2023_books_2023,
    'vi/cheapest-sim-cards': Post_vi_2023_cheapest_sim_cards,
    'vi/drive-cert': Post_vi_2023_drive_cert,
    'vi/fe-cert': Post_vi_2023_fe_cert,
    'vi/itpassport-cert': Post_vi_2023_itpassport_cert,
    'vi/aws-saa-c03-cert': Post_vi_2024_aws_saa_c03_cert,
    'vi/books-in-2024': Post_vi_2024_books_in_2024,
    'vi/n1-how-hard-it-is': Post_vi_2024_n1_how_hard_it_is
};

export const allProjects: Project[] = [
{
    ...{
    "body": {
        "raw": "\nThis tutorial shows a collection of apps that use Spring Data REST and its powerful backend functionality, combined with React’s sophisticated features to build an easy-to-understand UI.\n\n-   Spring Data REST provides a fast way to build hypermedia-powered repositories.\n-   React is Facebook’s solution to efficient, fast, and easy-to-use views in JavaScript.\n\n## Part 1 — Basic Features\n\nWelcome, Spring community.\n\nThis section shows how to get a bare-bones Spring Data REST application up and running quickly. Then it shows how to build a simple UI on top of it by using Facebook’s React.js toolset.\n\n## Part 2 - Hypermedia Controls\n\nIn the previous section, you found out how to create a backend payroll service to store employee data by using Spring Data REST. A key feature it lacked was using the hypermedia controls and navigation by links. Instead, it hard-coded the path to find data.\n\nFeel free to grab the code from this repository and follow along. This section is based on the previous section’s application, with extra things added.\n\n## Part 3 - Conditional Operations\n\nIn the previous section, you found out how to turn on Spring Data REST’s hypermedia controls, have the UI navigate by paging, and dynamically resize based on changing the page size. You added the ability to create and delete employees and have the pages adjust. But no solution is complete without taking into consideration updates made by other users on the same bit of data you are currently editing.\n\nFeel free to grab the code from this repository and follow along. This section is based on the previous section but with extra features added.\n\n## Part 4 - Events\n\nIn the previous section, you introduced conditional updates to avoid collisions with other users when editing the same data. You also learned how to version data on the backend with optimistic locking. You got a notification if someone edited the same record so you could refresh the page and get the update.\n\nThat is good. But do you know what is even better? Having the UI dynamically respond when other people update the resources.\n\nIn this section, you will learn how to use Spring Data REST’s built in event system to detect changes in the backend and publish updates to ALL users through Spring’s WebSocket support. Then you will be able to dynamically adjust clients as the data updates.\n\nFeel free to grab the code from this repository and follow along. This section is based on the previous section’s application, with extra things added.\n\n## Part 5 - Securing the UI and the API\n\nIn the previous section, you made the app dynamically response to updates from other users with Spring Data REST’s built-in event handlers and the Spring Framework’s WebSocket support. However, no application is complete without securing the whole thing so that only proper users have access to the UI and the resources behind it.\n\nFeel free to grab the code from this repository and follow along. This section is based on the previous section’s app with extra things added.\n\n# Review\n\nIn this section, you:\n\n-   Defined the model of manager and linked it to an employee through a 1-to-many relationship.\n\n-   Created a repository for managers and told Spring Data REST to not export.\n\n-   Wrote a set of access rules for the employee repository and also write a security policy.\n\n-   Wrote another Spring Data REST event handler to trap creation events before they happen so that the current user could be assigned as the employee’s manager.\n\n-   Updated the UI to show an employee’s manager and also display error pop-ups when unauthorized actions are taken.\n"
    },
    "readingTime": {
        "text": "4 min read",
        "minutes": 3.025,
        "time": 181500,
        "words": 605
    },
    "title": "[Pet Project] Dự án trang thương mại điện tử",
    "icon": "IconArrowBigRightLine",
    "date": "2023-12-31",
    "summary": "Spring Reactjs xây dựng trang thương mại điện tử",
    "lang": "vi",
    "image": "/static/images/2023/ecommerce/ecommmerce.png",
    "draft": false,
    "tags": [
        "project"
    ]
},
    slug: 'e-commerce',
}
];

export const projectComponents: Record<string, any> = {
    'vi/e-commerce': Project_vi_2024_e_commerce
};

export const allPages: Page[] = [
{
    ...{
    "body": {
        "raw": "\nバオです。埼玉に住んでいます。  \nふだんはエンジニア、休日は散歩・旅行・カフェ巡りが多めです。\n\n---\n\n## このサイトについて\n\n- 日本での暮らし：手続き・子育て・買い物・便利だったこと\n- ものづくり：小さいWebアプリ、開発メモ、気づき\n- 雑談：旅行、日々の発見、たまに愚痴\n\n読んでくれた人の「へぇ」とか「助かった」が1つでも増えたら嬉しいです。\n\n---\n\n## 近況\n\n平日はWeb開発してます。技術の話もたまに書きます。  \nちゃんとしたプロフィールは LinkedIn に置いてます。\n\n- LinkedIn: https://www.linkedin.com/in/backlueinjp/\n\n---\n\n## 連絡\n\n- メール: tranquocbao031094@gmail.com\n- サイト: https://onwardish.com"
    },
    "readingTime": {
        "text": "1 min read",
        "minutes": 0.87,
        "time": 52200,
        "words": 174
    },
    "title": "About",
    "description": "エンジニアの雑記ブログ。たまに開発、たまに日本生活。",
    "lang": "ja"
},
    slug: 'about',
},
{
    ...{
    "body": {
        "raw": "\nサイト: https://onwardish.com\n\n`最終更新日: 2026-02-09`\n\nonwardish（以下「当サイト」）は、当サイトの運営にあたり取得する情報を適切に取り扱い、プライバシー保護に努めます。  \n当サイトは **日常の記録 / 学習メモ / 技術ブログ / ポートフォリオ / 個人開発（ペットプロジェクト）** の公開を目的とした個人サイトです。\n\n---\n\n### 取得する情報\n\n当サイトでは、以下の情報を取得・送信することがあります。\n\n- アクセスログ（IPアドレス、ユーザーエージェント、参照元URL、閲覧日時、閲覧URL、ステータスコード等）\n- アクセス解析（GoatCounter）：ページ閲覧状況等の統計情報（例：閲覧ページ、参照元、ブラウザ/OS、言語、画面幅、位置情報（国/地域レベル）等 ※設定により変動）\n- コメント機能（giscus / GitHub Discussions）：コメント投稿時に必要となる情報（GitHubアカウント情報、コメント内容等）は、GitHub側で処理・保存されます\n\n---\n\n### 利用目的\n\n取得した情報は、以下の目的で利用します。\n\n- 不正アクセス・スパム等の防止、セキュリティ確保\n- サイト改善（アクセス状況の把握を含む）\n- コメント機能の提供・運用（giscus / GitHub Discussions）\n\n---\n\n### 第三者への提供\n\n当サイトは、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。  \nただし、サイト運営に必要な範囲で、ホスティング事業者等の業務委託先や、下記の外部サービスに取り扱いを委託・送信する場合があります。\n\n---\n\n### アクセス解析・Cookie・外部送信\n\n当サイトでは、以下の外部サービスを利用しています。\n\n- **GoatCounter（アクセス解析）**\n  - 送信される情報: 閲覧ページ、参照元、ブラウザ/OS、言語、画面幅、位置情報（国/地域レベル）等（設定により変動）\n  - 送信先: GoatCounter（当サイトが利用する解析エンドポイント）\n  - 利用目的: アクセス解析、サイト改善、運用状況の把握\n  - オプトアウト等: コンテンツブロッカー（広告/トラッキングブロッカー等）で解析スクリプト/エンドポイントをブロックすることで送信を停止できます\n\n- **giscus（コメント機能: GitHub Discussions）**\n  - 送信される情報: コメント機能の表示/投稿に必要な情報（GitHubアカウント情報、コメント内容等）\n  - 送信先: giscus / GitHub（GitHub Discussions）\n  - 利用目的: コメント機能の提供・運用、モデレーション\n  - 補足: コメント投稿には GitHub へのログインおよび giscus アプリへの認可が必要です。コメントは GitHub Discussions に保存されます\n  - オプトアウト等: コメント機能を利用しない、またはコンテンツブロッカーでコメント領域の読み込みをブロックしてください\n\n※外部サービス側で Cookie / localStorage 等が利用される場合があります。詳細は各サービスのポリシーをご確認ください。\n\n---\n\n### 安全管理措置\n\n取得した情報は、アクセス制御、通信の暗号化（TLS）等の適切な安全管理措置を講じて管理します。\n\n---\n\n### 開示・訂正・削除等の請求\n\n保有個人データに関する開示、訂正、削除等の請求は、下記の連絡先より受け付けます。  \n本人確認のため追加情報の提示をお願いする場合があります。  \nなお、GitHub上に保存されるコメント等は、GitHubの仕組みに従って管理されます。\n\n---\n\n### お問い合わせ窓口\n\n連絡先: tranquocbao031094@gmail.com\n\n---\n\n### 改定\n\n本ポリシーは、法令改正や運用変更に応じて予告なく改定される場合があります。"
    },
    "readingTime": {
        "text": "5 min read",
        "minutes": 4.195,
        "time": 251700,
        "words": 839
    },
    "title": "プライバシーポリシー",
    "description": "",
    "lang": "ja"
},
    slug: 'policy',
},
{
    ...{
    "body": {
        "raw": "\n**更新中..**\n"
    },
    "readingTime": {
        "text": "1 min read",
        "minutes": 0.02,
        "time": 1200,
        "words": 4
    },
    "title": "目標設定の重要性や目標達成させる行動計画",
    "description": "",
    "lang": "ja"
},
    slug: 'roadmap',
},
{
    ...{
    "body": {
        "raw": "\nサイト: https://onwardish.com\n\n`最終更新日: 2026-02-09`\n\nonwardish（以下「当サイト」）は、運営者の **日常の記録 / 学習メモ / 技術ブログ / ポートフォリオ / 個人開発（ペットプロジェクト）** の公開を目的とした個人サイトです。  \n当サイトの閲覧・利用を継続された場合、本規約に同意したものとみなします。\n\n---\n\n### 1. コンテンツの位置づけ\n\n- 当サイトの内容は運営者の個人的な見解・経験に基づくもので、正確性・完全性・最新性を保証しません。\n- 技術情報（コード例、設定、手順等）は環境差分により動作しない場合があります。利用はご自身の判断と責任で行ってください。\n\n---\n\n### 2. 禁止事項\n\n当サイトの利用にあたり、以下の行為を禁止します。\n\n- 法令または公序良俗に反する行為\n- 当サイトまたは第三者の権利（著作権、商標権、プライバシー等）を侵害する行為\n- 当サイトの運営を妨げる行為（過度なアクセス、脆弱性探索、DoS、スクレイピングの濫用 等）\n- スパム、なりすまし、嫌がらせ等の行為\n- その他、運営者が不適切と判断する行為\n\n---\n\n### 3. 著作権・引用・リンク\n\n- 当サイトに掲載される文章・画像・コード等の著作権は、運営者または正当な権利者に帰属します。\n- 引用は、**引用部分の明示**と**出典（URL等）の明記**のうえ、適切な範囲で行ってください。\n- 当サイトへのリンクは原則自由です（違法・誹謗中傷・信用毀損を目的とするものは除く）。\n\n---\n\n### 4. 外部サービス・外部リンク\n\n当サイトでは、運用上の都合により外部サービス（例：アクセス解析、コメント機能）を利用する場合があります。  \nまた、当サイトには外部サイトへのリンクが含まれる場合があります。リンク先の内容・利用について当サイトは責任を負いません。\n\n※個人情報やCookie等の取り扱いは「プライバシーポリシー」に従います。\n\n---\n\n### 5. 免責事項\n\n当サイトの利用または利用不能により生じた損害（直接・間接を問わない）について、当サイトは一切の責任を負いません。\n\n---\n\n### 6. 変更・停止\n\n当サイトは、掲載内容の変更、ページの削除、機能の追加/停止、公開停止等を予告なく行う場合があります。\n\n---\n\n### 7. 規約の変更\n\n本規約は、必要に応じて予告なく改定される場合があります。改定後に当サイトの利用を継続された場合、改定後の内容に同意したものとみなします。\n\n---\n\n### 8. 準拠法・管轄\n\n本規約は日本法に準拠し解釈されます。  \n当サイトに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。\n\n---\n\n### 9. お問い合わせ\n\n連絡先: tranquocbao031094@gmail.com"
    },
    "readingTime": {
        "text": "4 min read",
        "minutes": 3.92,
        "time": 235200,
        "words": 784
    },
    "title": "Term and Service",
    "description": "",
    "lang": "ja"
},
    slug: 'term',
},
{
    ...{
    "body": {
        "raw": "\nHi, mình là Bảo. 18 tuổi lần thứ 12 và hiện tại đang là web developer làm việc ở Tokyo, Nhật Bản.\n\nBắt theo trào lưu sang Nhật 10-15 năm trước, mình cũng khăn gói đi học tiếng Nhật nhưng vì ham chơi nên mãi 2020 mình mới đến được Nhật.\n\nVới tiêu chí \"The most fulfilling job is the one you do for yourself\" (tạm dịch: Nhảy việc ngay khi có tín hiệu vũ trụ =))), trong khoảng thời gian ngắn ngủi ở Nhật này, mình có cơ hội và trải qua nhiều ngành nghề khác nhau.\n\nThông qua blog này, hi vọng sẽ mang đến nhiều thông tin hữu ích cho bạn, cũng như một nơi có thể chia sẻ, trao đổi, kết nối giữa mọi người hơn.\n\n# Site này có gì\n\nĐây là nơi mình trải nghiệm sở thích viết lách của bản thân và chia sẻ về\n\n-   Cách tự học tiếng Nhật, lập trình, thi các chứng chỉ và bằng cấp ..\n-   Đầu tư.\n-   Đọc sách.\n-   Cuộc sống Nhật Bản.\n\n# Liên hệ\n\nConnect với mình nếu bạn có ý tưởng hay ho và muốn hợp tác cùng mình nhé\n\n-   Email: tranquocbao031094@gmail.com\n-   LinkedIn: [https://www.linkedin.com/in/backlueinjp/](https://www.linkedin.com/in/backlueinjp/)"
    },
    "readingTime": {
        "text": "2 min read",
        "minutes": 1.025,
        "time": 61500,
        "words": 205
    },
    "title": "About",
    "description": "",
    "lang": "vi"
},
    slug: 'about',
},
{
    ...{
    "body": {
        "raw": "\nWebsite: https://onwardish.com\n\n`Cập nhật lần cuối: 2026-02-09`\n\nChính sách bảo mật này áp dụng cho website https://onwardish.com (sau đây gọi là “Blog”).  \nBlog là website cá nhân, phục vụ mục đích **ghi chép đời sống / học tập / bài viết kỹ thuật / portfolio / pet project**.\n\n---\n\n### 1) Thông tin Blog có thể thu thập\n\nBlog có thể thu thập các thông tin sau trong quá trình bạn truy cập:\n\n- **Access logs** (từ máy chủ/hạ tầng): địa chỉ IP, user agent (trình duyệt/thiết bị), referrer, thời điểm truy cập, URL đã truy cập, mã trạng thái…\n- **Thống kê truy cập (GoatCounter)**: dữ liệu thống kê truy cập ở dạng tổng hợp (ví dụ: trang được xem, referrer, loại trình duyệt/hệ điều hành, ngôn ngữ, kích thước màn hình, vị trí ở mức quốc gia/khu vực… tùy cấu hình).\n- **Bình luận (giscus / GitHub Discussions)**: nếu bạn sử dụng tính năng bình luận, thông tin bình luận và thông tin tài khoản GitHub liên quan sẽ được xử lý/lưu trữ bởi GitHub.\n\n---\n\n### 2) Mục đích sử dụng\n\nThông tin thu thập được sử dụng cho các mục đích:\n\n- **Bảo mật**: phát hiện/phòng chống truy cập bất thường, spam, tấn công, và xử lý sự cố.\n- **Cải thiện website**: nắm tình trạng vận hành và cải thiện trải nghiệm (thông qua thống kê truy cập).\n- **Bình luận**: hiển thị và quản trị bình luận thông qua GitHub Discussions (nếu bạn sử dụng).\n\n---\n\n### 3) Cookies / công nghệ tương tự & “ngoại gửi dữ liệu”\n\nBlog có sử dụng các dịch vụ bên thứ ba sau:\n\n- **GoatCounter (thống kê truy cập)**\n  - Blog gửi một số thông tin kỹ thuật (ví dụ: trang được xem, referrer, loại trình duyệt/hệ điều hành, ngôn ngữ, kích thước màn hình, vị trí ở mức quốc gia/khu vực… tùy cấu hình) đến GoatCounter để thống kê truy cập.\n  - GoatCounter hướng đến thống kê tổng hợp và không dùng cookie theo thiết kếAX (tùy cấu hình).\n  - **Cách hạn chế**: bạn có thể dùng trình chặn nội dung (content blocker/adblock) hoặc chặn script/endpoint của GoatCounter trong trình duyệt.\n\n- **giscus (bình luận, dựa trên GitHub Discussions)**\n  - Khi khu vực bình luận được tải, trình duyệt có thể kết nối đến dịch vụ của giscus và GitHub.\n  - Để bình luận, bạn cần đăng nhập GitHub và cấp quyền (OAuth) cho giscus app; bình luận được lưu trên GitHub Discussions.\n  - GitHub có thể sử dụng cookie/local storage cho mục đích đăng nhập, bảo mật, và vận hành dịch vụ.\n  - **Cách hạn chế**: bạn có thể không sử dụng tính năng bình luận, hoặc chặn tải phần bình luận bằng content blocker.\n\n---\n\n### 4) Chia sẻ dữ liệu với bên thứ ba\n\nBlog không bán/trao đổi dữ liệu cá nhân.  \nDữ liệu có thể được xử lý bởi **đơn vị cung cấp hạ tầng** (hosting/CDN) và các **dịch vụ tích hợp** (GoatCounter, GitHub/giscus) trong phạm vi cần thiết để vận hành tính năng.  \nBlog chỉ cung cấp dữ liệu theo yêu cầu khi **pháp luật yêu cầu** hoặc để bảo vệ quyền lợi hợp pháp của Blog.\n\n---\n\n### 5) Bảo mật thông tin\n\nBlog áp dụng các biện pháp phù hợp, ví dụ:\n\n- **Mã hóa đường truyền (TLS/HTTPS)**\n- **Kiểm soát truy cập** đối với hệ thống quản trị/hạ tầng\n\nKhông có hệ thống nào an toàn tuyệt đối; Blog cố gắng giảm thiểu rủi ro trong phạm vi hợp lý.\n\n---\n\n### 6) Quyền của bạn\n\nNếu bạn có câu hỏi hoặc muốn yêu cầu liên quan đến dữ liệu (trong phạm vi Blog kiểm soát), vui lòng liên hệ theo mục “Liên hệ”.  \nVới dữ liệu bình luận trên GitHub Discussions, bạn có thể quản lý theo cơ chế của GitHub.\n\n---\n\n### 7) Liên hệ\n\nEmail: tranquocbao031094@gmail.com\n\n---\n\n### 8) Thay đổi chính sách\n\nChính sách này có thể được cập nhật khi có thay đổi về cách vận hành hoặc yêu cầu pháp lý. Phiên bản mới nhất sẽ được đăng tại trang này."
    },
    "readingTime": {
        "text": "4 min read",
        "minutes": 3.445,
        "time": 206700,
        "words": 689
    },
    "title": "Chính sách bảo mật",
    "description": "",
    "lang": "vi"
},
    slug: 'policy',
},
{
    ...{
    "body": {
        "raw": "\n1. đặt mục tiêu\n2. lập kế hoạch để hoàn thành mục tiêu\n3. theo đuổi kế hoạch\n4. không từ bỏ\n\nđã thay đổi cuộc đời mình như thế nào trước năm 30 tuổi.\n\n---\n\nMình thấy đa số các anh chị đi trước, đều viết blog sau khi có một số thành tựu nhất định. Có thể là thành tựu trong học vấn, trong sự nghiệp, tích luỹ tài sản hoặc danh,..\n\nNhưng mình tin là ai cũng đi lên từ con số 0 (hoặc 0 + xnxx :v), nên mình tập viết blog này. Thử xem sau vài năm nỗ lực, mình sẽ đi xa được đến đâu, vũ trụ sẽ dẫn lối cho mình như thế nào.\n\n> And when you want something, all the universe conspires in helping you to achieve it.\n\n## Mình là ai\n\nBackground của mình khá tốt cho đến khi mình bỏ học đại học vào năm 3, sau khi vững tin rằng đam mê tuổi trẻ sẽ nuôi sống bản thân, bằng cách này hay cách khác. Nhưng ngay sau khi bỏ học và ra xã hội làm ăn bươn chải thì, sự thật phũ phàng vả cho về lại với thực tế.\n\nThế là mình lại cắp xách đi học lấy một trường tư gần nha, vừa tiện đi học và đi làm mà vẫn kịp ra có tấm bằng Học Đại sau 5-7 năm tốt nghiệp THPT. (giờ nghĩ lại đúng thật trước giờ mình chỉ biết chạy theo chỉ tiêu)\n\nCuộc đời mình thay đổi sau khi mình quyết định học tiếng Nhật vào năm 2017.\n\n## Đặt mục tiêu\n\n_Đang viết dở thì tủ lạnh hết điện.._\n\n## Lập kế hoạch\n\n## Theo đuổi kế hoạch\n\n## Không từ bỏ\n\n## Tổng kết\n"
    },
    "readingTime": {
        "text": "2 min read",
        "minutes": 1.485,
        "time": 89100,
        "words": 297
    },
    "title": "Tầm quan trọng của việc đặt mục tiêu và xây dựng kế hoạch",
    "description": "",
    "lang": "vi"
},
    slug: 'roadmap',
},
{
    ...{
    "body": {
        "raw": "\nWebsite: https://onwardish.com\n\n`Cập nhật lần cuối: 2026-02-09`\n\nonwardish (sau đây gọi là “Blog”) là website cá nhân phục vụ mục đích **ghi chép đời sống / học tập / bài viết kỹ thuật / portfolio / pet project**.  \nKhi bạn tiếp tục truy cập hoặc sử dụng Blog, bạn được xem là đã đọc, hiểu và đồng ý với các điều khoản dưới đây.\n\n---\n\n### 1) Tính chất nội dung\n\n- Nội dung trên Blog phản ánh quan điểm/kinh nghiệm cá nhân tại thời điểm đăng tải và **không** đảm bảo tính chính xác, đầy đủ hoặc luôn cập nhật.\n- Thông tin kỹ thuật (ví dụ: code, cấu hình, hướng dẫn) có thể khác nhau theo môi trường. Bạn tự chịu trách nhiệm khi áp dụng.\n\n---\n\n### 2) Hành vi bị cấm\n\nBạn không được:\n\n- Vi phạm pháp luật hoặc trái đạo đức xã hội\n- Xâm phạm quyền của Blog hoặc bên thứ ba (bản quyền, nhãn hiệu, quyền riêng tư, danh dự…)\n- Cản trở vận hành Blog (tấn công, dò quét lỗ hổng, lạm dụng scraping, gây quá tải/DoS…)\n- Thu thập thông tin trái phép, spam, giả mạo, quấy rối\n- Các hành vi khác mà Blog đánh giá là không phù hợp\n\n---\n\n### 3) Bản quyền, trích dẫn và liên kết\n\n- Bản quyền đối với nội dung do Blog tạo (bài viết, hình ảnh, mã nguồn…) thuộc về tác giả hoặc chủ sở hữu hợp pháp.\n- Bạn có thể **trích dẫn** với điều kiện: nêu rõ phần trích dẫn, ghi nguồn (URL), và trong phạm vi hợp lý.\n- Bạn có thể **đặt liên kết** đến Blog mà không cần xin phép trước, trừ trường hợp liên kết nhằm mục đích vi phạm pháp luật, bôi nhọ, gây nhầm lẫn, hoặc làm ảnh hưởng uy tín Blog.\n\n---\n\n### 4) Dịch vụ bên thứ ba & liên kết ngoài\n\nBlog có thể tích hợp dịch vụ bên thứ ba (ví dụ: thống kê truy cập, hệ thống bình luận) và có thể chứa liên kết đến các website khác.  \nBlog không chịu trách nhiệm đối với nội dung, sản phẩm, dịch vụ hoặc chính sách của các bên thứ ba.\n\n> Chi tiết về dữ liệu cá nhân, cookies và cách xử lý thông tin được mô tả tại trang **Chính sách bảo mật** của Blog.\n\n---\n\n### 5) Miễn trừ trách nhiệm\n\n- Blog không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp/gián tiếp phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Blog.\n- Bạn tự chịu trách nhiệm về quyết định và hành động dựa trên nội dung Blog.\n\n---\n\n### 6) Thay đổi, tạm ngừng hoặc chấm dứt\n\nBlog có thể thay đổi nội dung, xóa bài viết, thêm/bỏ tính năng, hoặc tạm ngừng/không tiếp tục cung cấp một phần hoặc toàn bộ Blog mà không cần thông báo trước.\n\n---\n\n### 7) Thay đổi điều khoản\n\nĐiều khoản này có thể được cập nhật khi cần. Việc bạn tiếp tục sử dụng Blog sau khi điều khoản được cập nhật được xem là đồng ý với phiên bản mới.\n\n---\n\n### 8) Luật áp dụng và cơ quan giải quyết tranh chấp\n\nĐiều khoản này được điều chỉnh theo **pháp luật Nhật Bản**.  \nNếu phát sinh tranh chấp, tòa án có thẩm quyền tại nơi cư trú của người vận hành Blog sẽ là cơ quan giải quyết sơ thẩm.\n\n---\n\n### 9) Liên hệ\n\nEmail: tranquocbao031094@gmail.com"
    },
    "readingTime": {
        "text": "3 min read",
        "minutes": 2.945,
        "time": 176700,
        "words": 589
    },
    "title": "Điều Khoản và Dịch Vụ",
    "description": "",
    "lang": "vi"
},
    slug: 'term',
}
];

export const pageComponents: Record<string, any> = {
    'ja/about': Page_ja_about,
    'ja/policy': Page_ja_policy,
    'ja/roadmap': Page_ja_roadmap,
    'ja/term': Page_ja_term,
    'vi/about': Page_vi_about,
    'vi/policy': Page_vi_policy,
    'vi/roadmap': Page_vi_roadmap,
    'vi/term': Page_vi_term
};
