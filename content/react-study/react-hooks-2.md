---
emoji: 🧢
title: "[React] 리액트 Hooks#2"
date: '2022-01-30 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - 실전형 리액트 Hooks 10개](https://nomadcoders.co/react-hooks-introduction/lobby)

## 노트
### #2.1 useTitle 
* 홈페이지의 title을 update해주는 hook  
### #2.2 useClick
* element를 클릭 하는 기능을 넣을 때 사용하는 hook
   reference - component의 어떤 부분을 선택할 수 있는 방법
   `useRef` document.getElementById 같은 기능
   > 사용 예시
```javascript
const inputRef = useRef() 
console.log(inputRef) // 값 확인
return (
  ...
  <input ref={inputRef} placeholder="blabla"/>
)
```
* useEffect를 return 받은 함수는 componentWillUnmount 때 호출 
```javascript
useEffect(() => {
  ...
  return () => {
    // componentWillUnmount 때 호출 
    if (elementRef.current) {
      elementRef.current.removeEventListener("click", onClick);
    }
  };
  ...
}, []);
```

### #2.3 useConfirm & usePreventLeave 
>useConfirm
* `useConfirm` 사용자가 무언가를 하기 전에 확인해야 할 때 사용하는 Hook
>usePreventLeave
* 웹 사이트 같은데서 작업이 완료되지 않았는데 window창을 닫으려 할 때 호출되는 Hook
* `beforeunload` event는 window가 닫히기 전에 function이 실행되게 해준다.

### #2.4 useBeforeLeave
* 기본적으로 탭을 닫으려고 페이지를 벗어나려 할 때 실행되는 Hook
* 
### #2.5 useFadeIn & useNetwork
>useFadeIn
* 자동으로 서서히 나타게 하는 함수 Hooks & Animation
* `useFadeIn` 함수는 공부하기 좋은 듯? 
>useNetwork
* useNetwork는 navigator가 online또는 offline 전환시 사용 할 Hook

### #2.6 useScroll & useFullscreen
> useScroll
* 스크롤 할 때 사용하는 Hook
> useFullscreen
* 어떤 element를 얻어 fullscreen으로 만들어주는 Hook
<br/>

### #2.7 useNotification
* 알림 기능 Function, Notification API 사용
* user가 거부하면 다시 요청할 방법이 없다. 최초에 한번만 요청?
* option같은건 MDN 참조

### #2.8 useAxios
* `axios` - node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트

## Publishing to NPM
- 우선순위 공부 후에 다시 해볼 예정.
  

- [React](/posts/React)

```toc

```
