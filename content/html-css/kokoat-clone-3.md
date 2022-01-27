---
emoji: 🧢
title: "[HTML/CSS] 코코아톡 클론코딩#3"
date: '2022-01-27 01:00:00'
author: 정굥
tags: blog html css
categories: HTMLCSS
---

* [노마드코더 - 코코아톡 클론코딩](https://nomadcoders.co/kokoa-clone/lobby)

# 노트
## 1. 강의 #6.27 ~ #6.40 
* tip. `position`이 `fixed`인 경우 layer가 다르기 때문에 navbar 같은거 만들때 fixed로 인해 그 이후 요소랑 겹침 현상 일어 날 수 있다.
> 해결 방안
* body쪽에 `padding-top` 주는게 제일 무난한 방법이라 생각.

### animation - forwards
* 애니메이션에 forwards 속성을 넣으면 애니메이션이 끝나도 변한 값 유지
* `visibility:hidden`은 임시방편, 정석은 자바스크립트로 처리해야 한다. 
> 예시
```css
@keyframes hideSplashScreen {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.splash-screen {
...
/* 동작 후에 opicity가 1로 돌아온다. */
animation: hideSplashScreen 0.5s ease-in-out;
/* 동작 후에 opicity가 0으로 유지되고 visibility hidden */
animation: hideSplashScreen 0.5s ease-in-out forwards;
}
```
### will-change
* 브라우저에게 어떤 속성이 변할지 알려줄 때 사용
* 알려줌으로 그래픽카드를 이용해 애니메이션을 가속화 한다.

### state selector > focus-within
* 선택요소의 element가 focus되어 있다면 이라는 뜻
> 예시
```css
/* reply안의 어떤 element가 focus되면 동작하는 state */
.reply:focus-within {
...  
}
```

## 2. 강의 #7.0 ~ #7.3
### Git - branch 관리 [Git Hub Desktop 사용]
* (명령어는 따로 공부하기로 .. )
  
* 배포할 브랜치 이름 - `gh-pages`

### 코드 수정 & 배포
1. 코드를 수정 하고자 하면 main branch로 이동.
2. 수정
3. commit & push
4. gh-pages 이동 후 Branch 메뉴에서 Update from main
5. publish (push)

## 후기
**강의 끝! 기초 강의로 다 알고 있다고 생각했었는데 모르는 부분**
**도 꽤 있어서 이틀만 완강 하려 했는데 3일만에 완강.. 지루한 부분도 많았지만 후회 없는 시간이었다. 이제 본격적으로 개발을 시작해보자..**    

<br/>

- [HTMLCSS](/posts/HTMLCSS)
  
```toc

```
