---
emoji: 🧢
title: "[React] 영화크롬앱#1"
date: '2022-01-23 01:00:00'
author: 정굥
tags: blog react
categories: React
---

# [노마드코더 - ReactJS 영화웹 만들기](https://nomadcoders.co/react-for-beginners/lectures/3258)
## 0. 기초강의를 다시 듣는 이유? 
 기초 강의를 들었음에도 다시듣는 이유는 개발을 잘하는사람은 어떻게 개발하나 보기위해 ?? 
 그냥 화면만 나오게하고 기능만 구현했던 나는 원티드 프리온보딩 코스를 지원하고 떨어졌을 때
 왜 떨어졌을지 생각 해봤다. 과제는 리액트를 사용하여 원티드 상단과 똑같이 만들라 한것.
 만들 당시만해도 잘만들었다 생각했는데.. 떨어지고 다른 사람들의 소스코드를 보니 
 난 리액트환경안에서 리액트보다 순수 자바스크립트 html 코딩을 하고 있었던것...
 그리하여 프론트엔드의 강자 노마드코더 강의로 기초를 다지고자 했는데 
 강의 30분정도만에 나의 선택을 칭찬한다. 
## 바닐라Js vs ReactJs 차이
* 바닐라Js는 HTML생성 후 Javascript로 가져와서 HTML을 수정
* React JS에서는 Javascript로 시작하여 수정의 필요가있는 HTML을 업데이트
  
## 1. 노마드코더 리액트 강의 첫소감
<!-- **React 첫 공부 때 블로그 및 다른인강들을 보고 시작 했을 때 대부분 자료가 `CRA` 사용 했기에**  
**그래서 따로 리액트는 원래 이런거구나 하고 공부했었다.**  
**하지만 노마드 코더 강의 첫 도입부는 `CRA`로 리액트 프로젝트 시작할 때 와 다르게 직접 리액트를 가져와서 기초적인 리액트 사용법을 보여 주고 그 후에 바벨을 붙여서 JSX 사용법을 보여주고 이것만으로도 `CRA` 만든 리액트 프로젝트의 구조를 좀 더 명확히 알게 되었다.
기초적인 이론 설명 끝에 CRA로 본격적인 강의 시작!
* **리액트에대한 원리 및 동작에 대한 공부는 개발하면서 같이 공부 할 것이다.** -->
현재 state를 바탕으로 다음 state를 계산 할 때
예시 state = 0
setState(state + 1)  다른 곳에서 예상치 못한 업데이트가 일어났을때 현재 원하는 값 보장 x 
setState((state)=>state + 1) 예상치 못한 업데이트가 일어났다고 해도 혼동 주는걸 방지.
JSX

Component에는 html태그처럼 eventlistener와 같은 명칭으로 보낸다해도 그건 이벤트가아니라프롭스다. 

## 2. Babel
* **JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 변환해주는 도구
> 코드
index.html
```html

단위변환 

<body>
  <div id="root"></div>
</body>
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
<script>
  const div = document.getElementById("root");
  const span = React.createElement("span", null, "Hello I'm a span");
  const btn = React.createElement(
  "button",
    {
      onClick: () => console.log("im clicked"),
    },
    "Click Me"
  );
  const container = React.createElement("div", null, [span, btn]);
  ReactDOM.render(container, root);
</script>

```
```javascript
const root = document.getElementById("root");
function App() {
  const [count, setCount] = React.useState(0);

  const onClick = () => {
    //setCount(count + 1);
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {count}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App />, root);
```

<br/>

- [React](/posts/React)
  
```toc

```
