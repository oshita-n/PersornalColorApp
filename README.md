# �����Z�b�g�A�b�v

## Next.js

npx create-next-app . 

## �K�v module �̃C���X�g�[��

```
yarn add classcat eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-jsx-a11y prettier
yarn add jest  @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @testing-library/user-event jest-css-modules msw
```

## typescript

```
yarn add -D typescript @types/react @types/react-dom @types/node  
```

## �g���q�ύX

JSX �g���Ă���Ȃ�g���q��"tsx"�ɕύX����  
�g���Ă��Ȃ��ꍇ��"ts"�ɕύX����  


## src�t�H���_�쐬

mkdir src
mv styles ./src
mv pages ./src
cd src
mkdir components
mkdir layouts
cd ..

## �J���T�[�o�N��

```
yarn dev  
```

## �^�̒�`

�G���[�ɂȂ����ӏ��ɑ΂��āA�^���`����

## package.json �� jest �̐ݒ��ǋL

�Ejest���g���ăe�X�g����ۂɁA��������t�@�C���͉�����ݒ肷��
�Ejestcss���W���[�����g���ă��b�L���O����

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

##  package.json�� test script��ǋL

�^�[�~�i������yarn test��jest�����s���邱�Ƃ��ł���

```
"scripts": { 
"test": "jest --env=jsdom --verbose" 
},
```



#Tailwind CSS �̓���
https://tailwindcss.com/docs/guides/nextjs


## �K�vmodule�̃C���X�g�[��

```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
```

## tailwind.config.js, postcss.config.js�̐���

```
npx tailwindcss init -p
```

## tailwind.config.js��purge�ݒ�ǉ�

purge�ɐݒ��ǋL
�w�肵��tsx�t�@�C���̒��g��tailwind����css�ɕϊ�����ݒ������

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

## globals.css�̕ҏW
/styles/global.css������������

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## index.tsx�̕ҏW

index.tsx�����L�̂Ƃ���ɒu��������B
className�ŃX�^�C���𓖂ĂĂ���
���X������Home.module.css�͍폜���Ă���

```
const Home: React.FC = () => {
return (
 <div className="flex justify-center items-center flex-col min-h-screen font-mono">
Hello Nextjs
</div> 
) } 
export default Home
```


## �J���T�[�o�N��

```
yarn dev
```

## �r���h����

```
yarn build
```

