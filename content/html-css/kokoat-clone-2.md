---
emoji: 🧢
title: "[HTML/CSS] 코코아톡 클론코딩#2"
date: '2022-01-26 02:00:00'
author: 정굥
tags: blog html css
categories: HTMLCSS
---

* [노마드코더 - 코코아톡 클론코딩](https://nomadcoders.co/kokoa-clone/lobby)

# 노트
## 1. 강의 #4.0 ~ #4.6 
### transition
* transition은 state(hover, focus 등)가 없는쪽에 써야한다.
> 예시
```
a {... transition: background-color 10s;}
a:hover {
  ...
}
```
* ease, cubic-bezier [참조](https://matthewlein.com/tools/ceaser)
### transform, keyframe-animation MDN 참조
### media query
* 크롬 개발자도구 -toggle divice toolbar 이용하면 모바일 버전도 확인 가능
```
/*가로 세로 감지*/
media screen and (orientation:landscape[portrait]) 
```
* 더 세부적인건 media query mdn 참조
<br />

## 2. 강의 #5.0 ~ #5.3
### Git 
* 파일을 계속 추적하며 관리해주는 도구
### Git Hub
* Git의 변경내역을 볼 수 있는 사이트
<br/>

## 3. 강의 #6.0 ~ #6.26
### BEM - Block Element Modifier
* CSS 방법론 BEM  따르면서 작성 권유 
* 자세한 내용은 필요 할 때 검색해서 공부!
> 예시(기본구조)
```css
/*Block__Element--Modifier*/
.header__navigation--navi-text  
```
### Css Hack [자세한 내용은 검색]
```
display:flex;
justify-content: space-between;
``` 
문법에 맞게 작성 했으나 콘텐츠의 글자나 이미지때문에 가운데 정렬이 안된다. 

이럴 때 사용 하는것을 CSS Hack이라하는거 같음.
> 예시
```css
.상위박스 {
  display: flex;
  justify-content: center;
}
.내부박스 {
  width: 33%; /* 내부 박스 3개*/
}
.중앙내부박스 {
  display: flex;
  justify-content: center;
}
.오른쪽내부박스 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```
### box-sizing : border-box
* padding, margin이 있어도 박스 사이즈를 설정한 값으로 유지해주는 속성


### 기타. 
* css도 not 속성 있음.
* reset css 추가 -기본 브라우저가 가지고 있는 스타일 reset
* Chrome Extensions Page Ruler Redux 추가 - 이미지 크기 재는 툴
<br/>

- [HTMLCSS](/posts/HTMLCSS)
  
```toc

```
