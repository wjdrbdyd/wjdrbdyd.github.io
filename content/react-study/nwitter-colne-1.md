---
emoji: 🧢
title: "[React] Nwitter Clone#1"
date: '2022-02-11 01:00:00'
author: 정굥
tags: blog react
categories: React
---

## [노마드코더 - Twitter Clone](https://nomadcoders.co/nwitter/lobby)

## A. ReactJs Setup
1. CRA 리액트 프로젝트 생성 
* 강의는 Typescript 사용하지 않지만 Typescript 공부를 위해 Typescript로 진행 한다.
```bash
$ npx create-react-app [project-name] --template typescript
$ npm install typescript @types/node @types/react @types/react-dom @types/jest
```
2. 원격 저장소 연결 & Initial commit
* 명령어로 안하고 Github Desktop으로 진행

## B. [Firebase](https://console.firebase.google.com/u/0/?hl=ko) Setup
1. Firebase 프로젝트 만들기
2. app 생성
3. Firebase SDK 추가  
* npm 설치
```bash
$ npm install --save firebase
```
* firebase.js 추가
```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9mH5Mp7zJ41KInsLGLTxwEUfxGXKXCG8",
  authDomain: "nwiter-6c8aa.firebaseapp.com",
  projectId: "nwiter-6c8aa",
  storageBucket: "nwiter-6c8aa.appspot.com",
  messagingSenderId: "1000625179969",
  appId: "1:1000625179969:web:dfb8050326e2ff992ba5c0"
};

const app = initializeApp(firebaseConfig);
export default app
```

## C. .env 파일 생성 및 사용
* 보안을 해결 해주는건 아니고 Github에서 코드만 안보이게 하기 위해 사용.
*  `cra`를 사용한 경우 환경 변수 써야 한다면 변수명은 REACT_APP으로 시작하고 그 뒤로 이름을 붙여줘야 한다.
> 예시
* .env
```
REACT_APP_API_KEY= ...
```
* firebase.js
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  ...
}
```
<br/>

- [React](/posts/React)
  
```toc

```