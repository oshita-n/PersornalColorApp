# 初期セットアップ

## Next.js

npx create-next-app . 

## 必要 module のインストール

```
yarn add classcat eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-jsx-a11y prettier
yarn add jest  @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @testing-library/user-event jest-css-modules msw
```

## typescript

```
yarn add -D typescript @types/react @types/react-dom @types/node  
```

## 拡張子変更

JSX 使っているなら拡張子を"tsx"に変更する  
使っていない場合は"ts"に変更する  


## srcフォルダ作成

mkdir src
mv styles ./src
mv pages ./src
cd src
mkdir components
mkdir layouts
cd ..

## 開発サーバ起動

```
yarn dev  
```

## 型の定義

エラーになった箇所に対して、型を定義する

## package.json に jest の設定を追記

・jestを使ってテストする際に、無視するファイルは何かを設定する
・jestcssモジュールを使ってモッキングする

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

##  package.jsonに test scriptを追記

ターミナルからyarn testでjestを実行することができる

```
"scripts": { 
"test": "jest --env=jsdom --verbose" 
},
```



#Tailwind CSS の導入
https://tailwindcss.com/docs/guides/nextjs


## 必要moduleのインストール

```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

## tailwind.config.js, postcss.config.jsの生成

```
npx tailwindcss init -p
```

## tailwind.config.jsのpurge設定追加

purgeに設定を追記
指定したtsxファイルの中身をtailwindからcssに変換する設定を入れる

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

## globals.cssの編集
/styles/global.cssを書き換える

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## index.tsxの編集

index.tsxを下記のとおりに置き換える。
classNameでスタイルを当てていく
元々あったHome.module.cssは削除しておく

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

