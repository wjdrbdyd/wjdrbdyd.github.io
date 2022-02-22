---
emoji: 🧢
title: "[Onboarding] DOM #1"
date: '2022-02-22 01:00:00'
author: 정굥
tags: blog Onboarding
categories: Onboarding
---

## DOM(Document Object Model)
* DOM은 특정 프로그래밍 언어가 아니라 HTML 요소를 Object처럼 조작할 수 있는 Model
* DOM이 없다면 Javscript로 웹 정보를 얻을 수 없다. DOM이 존재하기에 가능
  
### innerHTML vs textContent vs innerText
* innerHTML은 HTML을 반환한다.
* textContent는 `<script>`나 `<style>` 태그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 가져온다.
* innterText는 사람이 읽을 수 있는 요소만 가져온다.
<br/>

> 예시

html
```html
<div id="testDiv">이것은 <span>    프리온보딩  </span> 블로깅!
```
js
```javascript
// innerHTML
let text = document.getElementById("testDiv").innerHTML
console.log(text) 
// textContent
text = document.getElementById("testDiv").textContent
console.log(text) // 이것은    프리온보딩  블로깅!
// innerText
text = document.getElementById("testDiv").innerText
console.log(text) // 이것은 프리온보딩 블로깅!
```

### CRUD
html
```html
<div class="parent" >
  <div class="child">child</div>
  <div class="child">child</div>
  <div class="child">child</div>
</div>
```
> CREATE
```javascript
const tweetDiv = document.createElement("div");
```
> READ
* querySelector, querySelectorAll
* querySelector는 첫 번째 child요소만 가져온다.
* querySelectorAll로 child class를 가진 모든 element를 가져온다. 유사배열(배열형 객체)을 반환
* tip. 유사배열을 배열로 바꾸는 법 - `Array.from(param)` 사용
```javascript
const parent = document.querySelector(".child");
const child = document.querySelectorAll(".child"); 
```
> UPDATE
* 부모 요소 READ
* 생성된 요소에 class가 child이면서 `add child` content를 넣어준다.
* 생성된 요소를 부모 요소 자식으로 추가
```javascript
const parent = document.querySelector(".parent"); // 부모요소 READ
const tweetDiv = document.createElement("div"); // CREATE
tweetDiv.classList.add("child");
tweetDiv.textContent = "add child"; 
parent.append(tweetDiv)
```
> DELETE
* 위에서 추가했던 요소를 remove로 삭제 한다.
* parent의 모든 자식들 Delete
```javascript
...
tweetDiv.remove(); 
// 여러개의 자식 Delete
// 방법 1. 
document.querySelector(".parent").innerHTML = "";
// 방법 2.
// parent아래의 클래스명이 child인 자식 제거
document.querySelector(".parent").querySelectorAll(".child").forEach((child) => {
   child.remove();
});

```

## 회원가입시 간단한 유효성 검사
* `<fieldset>` tag는 form요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용

> form 구조
    form
      fieldset
        label
        input
        div
        div
      fieldset
        button  
* form 구조는 메시지 부분을 공통 함수로 만들려고 위와같이 통일 하였다.
<br/>  

* html  
```html

<fieldset>
  <label for="">아이디</label>
  <input id="userId" type="text" />
  <div class="failure-message hide">
    아이디는 네 글자 이상이어야 합니다.
  </div>
  <div class="success-message hide">사용할 수 있는 아이디입니다.</div>
</fieldset>
... 비밀번호
... 비밀번호 확인

<fieldset>
  <button>회원가입</button>
</fieldset>
<script src="script.js"></script>
```
* javascript
```javascript
const elInputUserId = document.querySelector("#userId");
const elInputUserPwd = document.querySelector("#userPwd");
const elInputUserPwd = document.querySelector("#userPwdCfm");
/*
  각각의 type에 따른 Validation 체크
*/
function onValidationCheck(value, type) {
  if (type === "userId") {
    return value.length >= 4 && value.length > 0;
  } else if (type === "userPwd") {
    return value.length >= 6;
  } else if (type === "userPwdCfm") {
    return value === elInputUserPwd.value;
  }
}
/*
  value: event.target.value 
  current: event가 발생한 HTML Element
  type: Id인지 Passwrod인지 type구분 
*/
function handleMessage(value, current, type) {
  // 현재 이벤트 발생 부모 아래의 success, failure요소 가져오기
  const elSuccessMessage = current.parentNode.querySelector(".success-message");
  const elFailureMessage = current.parentNode.querySelector(".failure-message");
  if (onValidationCheck(value, type)) {
    elSuccessMessage.classList.remove("hide");
    elFailureMessage.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    elFailureMessage.classList.remove("hide");
  }
}

function handleIdInput(event) {
  const userIdValue = event.target.value;
  handleMessage(userIdValue, elInputUserId, "userId");
}
function handlePwdInput(event) {
  const userPwdValue = event.target.value;
  handleMessage(userPwdValue, elInputUserPwd, "userPwd");
}
function handlePwdCfmInput(event) {
  const userPwdCfmValue = event.target.value;
  handleMessage(userPwdCfmValue, elInputUserPwdCfm, "userPwdCfm");
}
elInputUserId.addEventListener("keyup", handleIdInput);
elInputUserPwd.addEventListener("blur", handlePwdInput);
elInputUserPwdCfm.addEventListener("blur", handlePwdCfmInput);

```


- [Onboarding](/posts/Onboarding)
  
```toc

```