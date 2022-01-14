---
emoji: 🧢
title: "[React] React에서 SVG 사용"
date: '2022-01-13 02:00:00'
author: 정굥
tags: blog react
categories: React
---

## 👋 SVG
- Scalable Vector Graphics - 벡터와 같은 방식의 2차원 그래픽용 XML 형식
- 이미지가 코드로 표현 된것

<br/>

## 리액트에서 svg 사용법 
- [위코드 X 원티드] 프론트앤드 프리온보딩 선발 과제 진행하며 svg 활용 방법 찾다가.. 
1. svg 파일 준비(경로 : /assets/icon/search-icon.svg)
``` xml
<svg xmlns="https://www.w3.org/2000/svg" 
  xmlns:xlink="https://www.w3.org/1999/xlink" 
  width="18"  
  height="18" 
  viewBox="0 0 18 18">
  <defs>
    <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3" xlink:href="#qt2dnsql4a"></use>
  </g>
</svg>
  <path fill="#fff" fill-rule="evenodd" d="...." />
</svg>
``` 

2. svg 컴포넌트화
```javascript
import { ReactComponent as SearchIcon } from '/assets/icon/search-icon.svg'

<SearchIcon />
```

<br/>

## svg 색, 크기 변경
1. svg에서 속성 값 width, height, fill등의 바꾸고자 하는 요소 current로 변경
```javascript
<svg xmlns="https://www.w3.org/2000/svg" 
  xmlns:xlink="https://www.w3.org/1999/xlink" 
  width="current"   // 변경 
  height="current"  // 변경
  viewBox="0 0 18 18">
  <defs>
    <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
  </defs>
  <g fill="current" fill-rule="evenodd">
    <use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3" xlink:href="#qt2dnsql4a"></use>
  </g>
</svg>
```
2. 컴포넌트 props로 current부분의 값 전달
```javascript
import { ReactComponent as SearchIcon } from '/assets/icon/search-icon.svg'
<SearchIcon width="18" height="18" fill="none"/>
```
```toc

```
