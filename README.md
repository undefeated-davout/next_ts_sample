# README

## 開発環境起動

```bash
yarn dev
```

## デバッグ方法

1. 開発環境起動後、Chromeで `chrome://inspect` にアクセス
2. Remote Target `inspect` をクリック
3. 表示された[DevTools]の画面下部[Start]ボタンをクリック
4. VSCode[実行とデバッグ] `next.js debug` を選択し実行
5. .tsx上にブレークポイントを置くとその行でストップする
