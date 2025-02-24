# Reactメモ

[node.js](https://nodejs.org/en/download/)
[参考書](https://amzn.asia/d/5sRolG0)

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

### chapter1

#### CDNでReactを読み込む

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

#### DOM(Document Object Model)

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

オプションではcssの設定などに使うらしい

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

##### javascriptを別ファイルに分ける

[main.js](react_init\main.js)

```javascript
// Reactのバージョン
const version = '19.0.0-rc-14a4699f-20240725';

// moduleをimportする
async function init() {
    // Reactのロード
    const module1 = await import('https://esm.sh/react@${version}');
    // Reactの取得
    // windowとしているのは読み込んでいるwindow自体に適用するため
    window.React = module1.default;
    // ReactDOMClientのロード
    const module2 = await import('https://esm.sh/react-dom@${version}/client');
    // ReactDOMClientの取得
    window.ReactDOMClient = module2.default;
    // メインプログラムの実行
    main();
}

// mainプログラム
function main() {
    const root = document.getElementById('root');
    const rootElement = ReactDOMClient.createRoot(root);
    const h2 = React.createElement('h2', null, 'Sample application');
    const p = React.createElement('p', {}, 'これはReactのサンプルコードです');
    const div = React.createElement('p', {}, [h2, p]);
    rootElement.render(div);
}

// 初期化の実行
init();
```

- モジュールの読み込みは非同期処理のため、init関数も非同期関数としておく

モジュールのロード

```javascript
変数 = await import(スクリプトファイルの指定);
```

Reactの取得 (今回の場合はデフォルト機能を使うため「.default」)

```javascript
変数 = モジュール.default;
```
