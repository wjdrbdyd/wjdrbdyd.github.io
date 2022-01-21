---
emoji: 🧢
title: "[JS] Javascript"
date: '2022-01-21 02:00:00'
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
### 2.

<br/>

- [JS](/posts/JS)
  
```toc

```
