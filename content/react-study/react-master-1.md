---
emoji: 🧢
title: "[React] React JS 마스터클래스#1"
date: '2022-01-30 02:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - React JS 마스터클래스](https://nomadcoders.co/react-masterclass)

## 1. 강의 시작 
**React JS 기초 강의를 듣고 Twitter Clone Coding 하려다가 어쩌다가 HTML/CSS/JS 기초 강의 다 듣고**
**오느라 몇일 걸려서 이제 본격 React JS 마스터클래스를 시작하게 됐다.**  
**이 강의는 Section별로 각기 다른 요소를 집중적으로 배우며 섹션을 진행할 때마다 복습 및 새로운것을 배운다**
**그리고 마지막에는 배운것을 총 동원한 작은 프로젝트를 만들게 된다.**

## 2. Section 2. Styled Components 
### #2-1 ~ 2.2 Adapting & Extending
> styled components 설치
```bash
npm install styled-components
(yarn add styled-components)
```

* styled components를 import해서 사용 기본적으로 태그명 뒤에 `\`\`` 기호를 사용하여
* 그 사이에 기본 css문법과 똑같이 사용한다.
* 컴포넌트로서 Props로 색상 같은걸 동적으로 전달 가능
* 확장 가능
> 예시
```javascript
import styled from "styled-components";

const Box = styled.div`
/* props를 받아 사용 */
  background-color: ${(props) => props.bgColor}; 
  width: 100px;
  height: 100px;
`
const Circle = styled(Box)` // Box 스타일컴포넌트를 확장
  border-radius: 50%;
`
function App() {
  return (
    <Box bgColor="blue"/> //  bgColor란 이름으로 props 전달 값은 blue
    <Circle bgColor="red"/> //bgColor란 이름으로 props 전달 값은 red
  );
}
```  
### #2-3 'as' and Attrs
* 같은 스타일을 가진 다른 태그를 만들 수 있다.
* 태그의 속성값을 지정 해줄 수 있다. 예를 들어 input tag가 모두 readonly 속성을 가질 때 각각 써주지 않고 `styled components`를 이용하여 스타일로 한번에 지정 
> 예시
```javascript
const Btn = styled.button`
  ...
`;
const Input = styled.input.attr({required: true})` /* input 태그 속성 required 지정*/
  ...
`
function App() {
  return (
    ...
    <Btn>Hello</Btn>  // 기존 선언 되있던대로 button tag
    <Btn as="a" href="#">Hello</Btn>  // button 태그와 동일한 css를 가진 a태그
    /* 아래 input tag는 모두 required 속성을 가진다*/
    <Input />
    <Input />
    <Input />
  );
}  
```
### #2.4 Animations & Pseudo Selectors
* `styled-components`를 이용해 animation과 pseudo selectors를 간편하게 작성 가능
* Component안의 element 쉽게 선택할 수 있다.
> 예시
``` javascript

...

const rotateAnimation = keyframes`
  ...
`;
const Box = styled.div`
  ...
  animation: ${rotateAnimation} 1s linear infinite;
  ...
  span {  /* Box Component inside span*/
    font-size: 36px;
    transition: font-size 1s;
    &:hover { /* pseudo selector */
      font-size: 50px;
    }
  }
`;
function App() {
  return (
    ...
    <Box>
      <span>😍</span>
    </Box>
  );
}
```
### #2.5 Pseudo Selectors part Two
* 이전 강의에서 Component안의 element의 pseudo selector를 배웠다.
* 여기선 Component안의 Component의 pseudo selector를 작성 해본다.
* 이렇게 작성하면 Box안의 태그를 span에서 p로 바꾸고자 할 때 as를 사용하여 p로 쉽게 변경이 가능하다.
> 예시
```javascript
const Emoji = styled.span`
  font-size: 36px;
`; 
const Box = styled.div`
  ...
  ${Emoji}:hover {
    font-size: 50px;
  }
`; 
function App() {
  ...
  <Box>
    <Emoji>😍</Emoji> // 얘는 hover 됨
  </Box>
  <Emoji as="p">😍</Emoji> // 얘는 Box Component안의 Emoji 아니라서 hover없음
}
```
### theme 
* light/dark모드 할 때 사용
* ThemeProvider를 이용하여 안에 둘러싸인 모든 Component는 ThemeProvider에 접근할 수 있다.
* light/dark 를 사용할 때, property들의 이름이 같아야 한다.
  

### Section 2. 정리
* `styled-components`를 사용하면 중복을 많이 줄일 수 있다.
* `extend` 가능하다. - 컴포넌트의 모든 요소를 유지하면서 새로운 스타일 주는 것.
* props로 `as`를 전달하면 컴포넌트는 그대로이며 html tag만 변경 가능 
* `styled component`는 Component 안에 있는 element를 선택 가능하게 해준다. 또한 Component안의 Component도 선택 가능.
* 이를 통해 같은 Component여도 어디서 사용되느냐에 따라 다른 selector가 가능

<br/>

- [React](/posts/React)

```toc

```
