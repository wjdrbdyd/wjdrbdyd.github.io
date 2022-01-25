---
emoji: 🧢
title: "[React] 리액트 Hooks#1"
date: '2022-01-30 02:00:00'
author: 정굥
tags: blog react
categories: React
---

# 보류 상태
## 1.
<!-- # [노마드코더 - 실전형 리액트 Hooks 10개](https://nomadcoders.co/react-hooks-introduction/lobby)

## What is Firebase? 
  
## 노트
### 1. useEffect 이용한 create, destroy 
* Component가 생성될 때 코드 실행(create) 및 파괴될 때 코드 실행(destroy) 
```javascript
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroy :(");
  });
```

```javascript
  function destroyFn() {
    console.log("destroy :(");
  }
  function createFn() {
    console.log("created :)");
    return destroyFn;
  }
  useEffect(createFn, []);

```

<br/>

### 2. API 사용법 
* ajax & coin API 사용 
>문제점
**`fetch("https://api.coinpaprika.com/v1/tickers")`로 가져온 데이터가 6000 몇개 쯤? 되는데**
**데이터를 천개 정도까지 잘라서 입력했을 때 USD-> 선택된 Coin 수량 변경시 잘되는데 2천개정도부터**
**버벅이는 현상이 나타남. 정확한 원인은 아직 모르겠으나 숫자를 입력했을 때 onchange 이벤트가 계속 발생하여** 
**그 속도가 6천개의 데이터를 그려주는 속도보다 빨라서 버벅이는걸로 예상이됨.**
[소스참조](https://github.com/wjdrbdyd/movie-web/coin-exam)
> 예상 해결 방안 
- 1. 페이징을 사용하여 데이터를 나눠서 렌더링 하는 방법.
- 2. 스크롤위치에 따라 데이터를 나눠서 렌더링 하는 방법.
- 3. input 입력시 onChange발생하여 setMoney를 실행할 때 setTimeout을 줘서 렌더링 시간에 격차를 두는방법.

<br/>

### 3. fetch & async-await 
> fetch
```javascript
fetch(
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year"
)
.then((response) => response.json())
.then((json) => {
  setMovies(json.data.movies);
  setLoading(false);
});
```
> async-await 
```javascript
const getMovies = async() => {
  const response = await fetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year"
  );
  const json = await response.json();
  setMovies(json.data.movies);
  setLoading(false);
}
```
### 4. Movie Component props 전달시 에러
* `Uncaught TypeError: Cannot read properties of undefined` 에러 발생
* 발생지점 `genre` 부분 map 함수 undefined
**제공하는 API의 `genre`의 속성이 없는 데이터 존재** 

* 컴포넌트안에서 `genre` 유무를 체크하니 props 전달시 propTypes 설정해놔서 Script Error발생 함 
**그래서 부모컴포넌트에서 genres가 없을 경우 빈 Array 전달하도록 변경**
> 해결
```javascript
 Movie.propTypes = {
  ...
  genres: PropTypes.arrayOf(PropTypes.string).isRequired // genres의 Type 설정 부분
};
 // 문제의 부분
 <Movie key={movie.id}coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} 
 `genres={movie.genres}` /> 
 
 // 문제 부분 수정
 <Movie key={movie.id}coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} 
 `genres={movie.genres ? movie.genres: []}` /> 
```
[소스참조](https://github.com/wjdrbdyd/movie-web)

### 5.깃페이지 배포시 빈화면 문제
**작년 11월경 혼자 리액트를 공부해서 간단한 프로젝트를 배포했을 때 사이트를 들어가면 빈 화면으로 출력되는 문제를 겪었었다.**
**아무리 찾아봐도 당시에는 커뮤니티 활동도 안하고 구글링 열심히 검색해서 혼자의 힘으로 해결하려 했었으나 실패.. 그때 아마 리액트**
**개인 프로젝트를 만들다가 잠깐 Stop했던 기억이.. 운좋게 이번에 이 노마드 강의를 들으며 강의의 댓글로 인해 원인은 알게 되었다.**
> 문제가 됬던 부분 `React-Router-Dom v6.` 사용
```jsx
// v6 이전
<Router>
  <Switch>
    <Route path="/movie/:id"><Detail/></Route>
    <Route path="/"><Home/></Route>
  </Switch>
</Router>
// 라우터 v6
<Router>
  <Routes>
    <Route path="/movie/:id" element={<Detail />}></Route>
    <Route path="/" element={<Home />}></Route>
  </Routes>
</Router>
```
**위 소스코드에서 `<Router>`  부분에 `basename={process.env.PUBLIC_URL}` 을 추가하면 빈 화면 증상을 해결할 수 있다.**
**무슨의미인지는 아직 찾아보지 않았음. `process.env.PULBIC_URL` 을 콘솔로 출력해보면 프로젝트 루트 폴더명이 나오는데**
**v6 버전부터 저부분을 추가해야 루트 경로를 잡을 수 있는 듯한??.. 추후 내용을 찾아보고 해당 글에 추가할 예정!**
<br/> -->

- [React](/posts/React)
  
```toc

```
