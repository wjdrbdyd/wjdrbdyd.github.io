---
emoji: 🧢
title: "[React] React JS 마스터클래스#6"
date: '2022-02-08 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - React JS 마스터클래스](https://nomadcoders.co/react-masterclass)

## 1. [Framer Motion](https://www.framer.com/motion/)
* Animation Section에서 `framer-motion` library 사용은 기록 보다 document를 보는 것이 좋은듯 하다.

>Slider는 혹시 몰라 아래 코드 첨부
```javascript
const boxVar = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: { duration: 0.5 },
  }),
};
function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVar}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}
```

## Section8. NOMFLIX CLONE
* svg태그에서 `fill` 속성은 색상 변경 svg > path 태그에서 `stroke`는 선 색상 `stroke-width`는 선 두께 
* [`리액트쿼리`](/react-study/react-master-2/react-query)
### 리액트 쿼리 이용해 데이터 가져오기
1. 쿼리 클라이언트 생성
```javascript
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
  ...
  </QueryClientProvider>
  document.getElementById("root")
)
```
2. [TMDB](https://www.themoviedb.org/) 회원가입 
> API KEY 발급

3. 이후 내용은 git hub로 
 
<br/>

- [React](/posts/React)

```toc

```
