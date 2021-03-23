# 初期セットアップ

## Next.js

```
npx create-next-app .
```

## 必要 module のインストール

```
yarn add classcat eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-jsx-a11y prettier
yarn add jest  @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @testing-library/user-event jest-css-modules msw
```

windows の場合は、

```
powershell -ExecutionPolicy RemoteSigned yarn xxx
```

と yarn の前に記述する

## typescript

```
yarn add -D typescript @types/react @types/react-dom @types/node
```

## 拡張子変更

JSX 使っているなら拡張子を"tsx"に変更する  
使っていない場合は"ts"に変更する

## src フォルダ作成

```
mkdir src
mv styles ./src
mv pages ./src
cd src
mkdir components
mkdir layouts
cd ..
```

## 開発サーバ起動

```
yarn dev
```

## 型の定義

エラーになった箇所に対して、型を定義する

## package.json に jest の設定を追記

・jest を使ってテストする際に、無視するファイルは何かを設定する
・jestcss モジュールを使ってモッキングする

```
"jest": {
"testPathIgnorePatterns": [
 "<rootDir>/.next/",
 "<rootDir>/node_modules/" ],
"moduleNameMapper": {
 "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
 }
}
```

## package.json に test script を追記

ターミナルから yarn test で jest を実行することができる

```
"scripts": {
"test": "jest --env=jsdom --verbose"
},
```

## Tailwind CSS の導入

https://tailwindcss.com/docs/guides/nextjs

## 必要 module のインストール

```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/line-clamp
```

## tailwind.config.js, postcss.config.js の生成

```
npx tailwindcss init -p
```

## tailwind.config.js の purge 設定追加

purge に設定を追記
指定した tsx ファイルの中身を tailwind から css に変換する設定を入れる

```
module.exports = {
purge: ["./src/**/**/*.{ts,tsx}"],

darkMode: false,
theme: {
  extend: {},
 },
 variants: {
   extend: {},
},
plugins: [],
}
```

## globals.css の編集

/styles/global.css を書き換える

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## index.tsx の編集

index.tsx を下記のとおりに置き換える。
className でスタイルを当てていく
元々あった Home.module.css は削除しておく

```
const Home: React.FC = () => {
return (
 <div className="flex justify-center items-center flex-col min-h-screen font-mono">
Hello Nextjs
</div>
) }
export default Home
```

## 開発サーバ起動

```
yarn dev
```

## ビルドする

```
yarn build
```
