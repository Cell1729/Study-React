# Reactメモ

[node.js](https://nodejs.org/en/download/)

## コマンド

nodeのバージョンを確認する

```sh
node --version
```

npmバージョンを確認する

```sh
npm -v
```

## Start Project

react_appという名前のプロジェクトを作成する

```sh
npx create-react-app react_app
```

プロジェクト操作系のコマンド

| コマンド | 操作 |
| --- | --- |
| yarn start | 開発サーバーを用いてプログラムを実行する |
| yarn build | プロジェクトのビルド。実際にサーバーにデプロイするファイルを生成する |
| yarn test | テストプログラムの実行 |
| yarn eject | プロジェクトの依存関係をプロジェクト内に移動させ、完全に独立させた形で扱えるようにする |

[引用](https://zenn.dev/web_tips/articles/abad1a544f3643)

## React

### CDNでReactを読み込む

[ディレクトリ](react_init)
CDN ... Content Delivery Network

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simple React App No JSC by SDN</title>
        <script type="module">
            import React from "https://esm.sh/react@19.0.0-rc-14a4699f-20240725";
            import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-rc-14a4699f-20240725/client";
        </script>
    </head>
    <body>
        <h1>React</h1>
        <div id="root">wait...</div>
    </body>
</html>
```

importの構文

```javascript
import React from ファイルの指定
import ReactDOM from ファイルの指定
```

### DOM(Document Object Model)

DOM...HTMLの要素をjavascriptから操作出来るようにするもの

DOMでは要素を１つ１つ更新するため速度が担保できない -> ReactDOMで高速化している

ReactDOM ... 更新するベースとなるReactDOMを用意し、エレメントを操作する。それぞれの値を更新し処理が終了したらレンダリングする。

1, webページにあるエレメントからReact DOMのエレメントを作成する
2, ReactDOMのエレメントを使って表示を操作する
3, ReactDOMエレメントをレンダリングしてWebページの表示を更新する。

- ルートエレメントの作成

```javascript
変数 = RectDOMClient.createRoot(エレメント);
```

- エレメントの作成

```javascript
変数 = React.createElement(要素名, オプション, コンテンツ);
```

- レンダリング

```javascript
ルート.render(Reactエレメント);
```

example

```javascript
// div id="root" の取得
const root = document.getElementById("root");
// ルートエレメントの作成
// HTML の div id="root" に対して Reactのルート(ベース)を作成
const rootElement = ReactDOMClient.createRoot(root);
// <p>Hello World</p> の作成
const element = React.createElement('p', {}, "Hello World");
// ルートエレメントにレンダリング
rootElement.render(element);
```
