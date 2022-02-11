---
emoji: 🧢
title: "[React] React JS 마스터클래스#1"
date: '2022-01-31 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - React JS 마스터클래스](https://nomadcoders.co/react-masterclass)

## 1. Section 3. Type Script
* 기초는 배웠으므로 필요한거만 기록
### Optional Props
* Props를 선택적으로 주는 방법 및 Default 값 주는 예시를 살펴 본다.
* interface에서 props명 뒤에 ? 붙이면 option props가 된다.
* optional props 값을 Style component에 전달할 경우 필수 값인데 이때는 default 값 지정 한다.
> 예시
```typescript

interface CircleProps {
  ...
  borderColor?: string // a
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
// styled-componetn에  Type을 ContainerProps로 지정
const Container = styled.div<ContainerProps>` 
  ...
  background-color: ${props=>props.bgColor};
  border-color: ${props=>props.borderColor};
`
function Circle({bgColor, borderColor = "white"}: CircleProps) {              // 여기도 default 값 처리해주는 방법
  return <Container bgColor={bgColor} borderColor={borderColor ?? "white"}/>; // borderColor가 undefined라면 default 값 white
}

function App() {
  return (
    <div>
      // borderColor은 Optional props 이다.
      <Circle bgColor={"teal"} borderColor="white"/>  
      <Circle bgColor={"tomato"}/>  
    </div>
  );
}
```
### 받아온 Data Type 지정
* 받아온 데이터안에 object 즉 배열 같은게 있으면 그안에 데이터보고 지정 해줘야 되는게 단점.
1. Object.keys(data).join() 해서 key string으로 만든다.
2. Object.values(data).map(v=> typeof v).join()으로 type string으로 만든다.
3. vs code에서 편집!
  
### react-query
* React 애플리케이션에서 서버 state를 fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리 이다.
* `react query`를 사용하면 캐시에 데이터를 저장 해둔다. 즉 다른 페이지로 갔다 와도 원하는 data가 이미 캐시에 있다는 것을 알고 있어서 API에 접근하지 않는다.

> 캐시데이터 확인
* App.tsx에 아래 코드를 추가하면 캐싱 데이터 확인 쉽게 가능.
```javascript
import { ReactQueryDevtools } from "react-query/devtools";  
<ReactQueryDevtools initialIsOpen={true} />
```

### [ApexChart 이용](https://apexcharts.com/docs/react-charts/)


<br/>

- [React](/posts/React)

```toc

```
