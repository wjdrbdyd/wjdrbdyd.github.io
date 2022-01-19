---
emoji: 🧢
title: "[TS] Type Script Setting"
date: '2022-01-13 03:00:00'
author: 정굥
tags: blog TypeScript
categories: TS
---

## 타입스크립트 시작 

>## TS Setting
### 1. 명령어 실행 -> package.json 생성
```bash
$ yarn init
$ yarn global add typescript
```
### 2. tsconfig.json 파일 생성
- TypeScript에게 어떻게 JavaScript로 변환하는지 옵션 설정
```json
{
  "compilerOptions": {
    "module":"CommonJS",  
    "target":"ES2015", // 어떤 버전의 Js로 컴파일 될지 설정
    "sourceMap": true  // sourcemap 처리를 하고싶은지 설정  
  }
}
```

### 3. package.json 수정
```json
{
// 이부분 추가 (yarn start 할때 실행)
"scripts": {
  "start": "node index.js",
  "prestart": "tsc"          // start되기전 ts -> js로 변환 
}
```
### 4. 유용한 패키지 설치 및 사용
* 이 패키지는 타입스크립트 파일이 수정되면 컴파일해줌
```bash
$ yarn add tsc-watch --dev
```
#### package.json 및 tsconfig.json 수정
```json
//package.json
{
  "scripts": {
    // "start":"node index.js",
    // "prestart":"tsc"
    "start": "tsc-watch --onSuccess \"node dist/index.js\""  // 컴파일 성공시 index.js 실행
  }
}

// tsconfig.json
{
  "compilerOptions": {
    ...
    "outDir": "dist"  // 컴파일된 파일 디렉토리
  },
  "include": ["src/**/*"],
}
```
<br/>

>## 타입스크립트 쓰는 이유?
- 자바스크립트 소스 

``` javascript
const name = 'yong',
      age = 33,
      gender = 'man';

const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}
sayHi(name, age);

export {};
```
**sayHi() 함수를 호출할 때 gender란 값이 필수 이거나 age는 숫자만 와야하는데 문자를** **넣는 등의 실수를 했을때 자바스크립트에서는 에러가 나지 않지만**   
**타입 스크립트는 이와 같은 실수를 엄격하게 방지해줄수 있다.**

- 타입스크립트 소스
```typescript
interface Human {
  name: string;
  age: number;
  gender: string;
}
const pserson = {
  name:'yong',
  age: 33,
  gender:'man'
}
const sayHi = (person:Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
console.log(sayHi(pserson));
```

<br/>

- [TS](/posts/TS)
  
```toc

```
