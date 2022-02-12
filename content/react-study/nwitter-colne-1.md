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
* firebase.js 추가 -> fbase.js (절대경로 import로 설정했더니 firebase랑 충돌나서 파일명 변경)
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
* firebase.ts
```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  ...
}
```

## D. Firebase Authentication(v9)
1. Import
* firebase.ts -> fbase.ts 
```javascript
...
import {getAuth} from "firebase/auth";
...
export const authService = getAuth();
...
```
* App.tsx
```javascript
...
import {authService} from "firebase";
...
const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
...
```
* 만약 절대경로로 파일을 import 하고 싶다면 tsconfig.json에 아래 추가 ts는
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```
* 이후는 firebase site에서 프로젝트 authentication 설정. 간략하게 적음
1. 파이어베이스 홈페이지 Get started
2. 프로젝트 생성 및 클릭
3. Authentication 클릭
4. Sign-in-method에서 Sign-in-providers `Email/Password`, `Google`, `Git Hub` 추가
5. Git Hub - Setting > Developer settings > OAuth Apps > App 생성 후 Client관련 정보로 추가

<br/>

- [React](/posts/React)
  
```toc

```