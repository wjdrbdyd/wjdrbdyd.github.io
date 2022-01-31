---
emoji: 🧢
title: "[React] 리액트 Hooks#1"
date: '2022-01-28 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - 실전형 리액트 Hooks 10개](https://nomadcoders.co/react-hooks-introduction/lobby)
## React Hooks Intro
* functional component에서 state을 가질 수 있게 한다.
* 함수형 프로그래밍 스타일 !

> 기존 리액트 스타일 예시 
```javascript
import React, {Component} from "react";

class App extends Component {
  state = {
    count:0
  };
  modify = n => {
    this.setState(current => {
      return {
        count: n
      };
    });
  };
  inc
  render() {
    const { count } = this.state;
    return <><div>{ count }</div><button onClick={() => this.modify(count + 1)}>Increment</button></>
  }
}
```  
> 리액트 훅 사용 예시
```javascript
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); 
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
```

### 참조-[리액트 훅 Docs](https://reactjs.org/docs/hooks-intro.html)

<br/>

**처음 배울 때 훅 사용하지 않은걸 배웠고 나중에 배운건 훅 사용한거였는데**
**그냥 뭐 더 쉽게 바뀐거지 하고 사용만 했지 왜 이렇게 바뀐지는 생각안해봤는데**
**바뀐 배경을 들으니까 리액트가 더 재밌어지는 중이다.**

# 노트
## #1. useState
### #1.0 useState (위의 상단 내용)
### #1.1 ~ 1.2 useInput
* 기본적인 Input 업데이트
* [React Doc](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes)에 따르면 props 객체를 전달하는 Spread 연산자를 사용하여 props 속성을 확산하여 JSX에서 전달할 수 있다고 나와있다.
```javascript
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;

    let willUpdate  = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  
  };
  return { value, onChange };
};
export default function App() {
  const maxLen = value => value.length <= 10;  // 길이 체크
  // const containStr = value => !value.includes("@");
  const name = useInput("Mr. Jung", maxLen);

  return (
    <div className="App">
      // <input placeholder="name" value={name.value} onChange={name.onChange} />
      <input placeholder="name" {...name} />
    </div>
  );
}
```
### #1.3 useTabs
* 공부한 소스는 깃허브 업로드 예정

## #2. useEffect
### #2.0 useEffect
* `componentWillUnmount`, `componentDidMount`, `componentDidUpdate`의 역할을 한다.
```javascript

// 첫 번째 인자 - function으로 componentDidMount() 와 비슷
// 두 번째 인자 - dependency
// dependency 값이 변할 때 실행 된다. componentDidUpdate() 와 비슷
useEffect(()=>{}, [])
```

<br/>

- [React](/posts/React)
  
```toc

```
