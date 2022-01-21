---
emoji: 🧢
title: "[JS] Javascript"
date: '2022-01-22 01:00:00'
author: 정굥
tags: blog JavaScript
categories: JS
---

# 자바스크립트 몰랐던 속성 정리 .. 
[HTMLElement - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)  
## 2022-01-21

### 1. Element.classList 
* 공백으로 구분된 className 요소의 리스트에 접근하는 쉬운 방법. 
* DOMTokenList를 반환, add(), remove(), toggle() 등을 이용해 수정 가능
> 예시 : 속성 바꾸기 
```javascript
const div = document.querySelector("div");

const classActive ="active";
if(div.classList.contains(classActive)){
  div.classList.remove(classActive) // active 클래스 제거
} else {
  div.classList.add(classActive);  // active 클래스 추가 
}
// 위 코드를 한줄로 표현
div.classList.toggle("active") // 해당 클래스가 있으면 remove 없으면 add
```
### 2. padStart, padEnd
    String.prototype.padStart(targetLength [, padString])
* padStart는 결과 문자열을 'targetLenth' 만큼 시작 부분부터 'padString' 문자로 채운다.  
  padString의 Default 값은 공백문자 
* padEnd는 끝 부분부터 'padString' 문자로 채운다.
> 예시: 마스크 넘버 
```javascript
const str1 = "5";
console.log(str1.padStart(2, 0));

// 마스크 넘버 처리 마지막4자리만 보임.
const phoneNumber = "01012345678";
const last4Digits = phoneNumber.slice(-4);
const maskedNumber = last4Digits.padStart(phoneNumber.length, *);
```

### 3. 지리, 날씨 정보 얻기
    navigator.geolocation.getCurrentPosition(success, error, [options])
* 이 메소드는 단말의 현재 위치를 얻는데 사용 된다.

> 예시
```javascript
function onGeoOk(position) { // 정보 얻는데 성공시 호출
  console.log(position);
}
function onGeoError() { // 정보 얻는데 실패시 호출
  alert("Can't find you. No weathre for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
<br/>

### 4. 지리정보, 날씨정보 API 사이트
- ### [OpenWeatherMap](https://openweathermap.org/api)

<br />

- [JS](/posts/JS)
  
```toc

```
