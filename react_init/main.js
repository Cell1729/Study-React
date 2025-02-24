// Reactのバージョン
const version = '19.0.0-rc-14a4699f-20240725';

// moduleをimportする
async function init() {
    const module1 = await import('https://esm.sh/react@${version}');
    window.React = module1.default;
    const module2 = await import('https://esm.sh/react-dom@${version}/client');
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