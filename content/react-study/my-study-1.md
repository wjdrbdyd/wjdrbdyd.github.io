---
emoji: 🧢
title: "[JS] 구조분해할당시 변수 이름 변경"
date: '2022-02-09 01:00:00'
author: 정굥
tags: blog react
categories: React
---

## [by MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

# 구조 분해 할당
* 구조 분해 할당 구문은 배열이나 객체의 속성을 해제하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식 
  
## 새로운 변수 이름으로 할당하기
* 같은 구조를 가진 다른 데이터 가져올 때 변수명이 겹쳐서 새로운 변수명 할당이 필요 했다. 
> 예시
```javascript
  const { data: movieData, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const { data: tvData, isLoading } = useQuery<IGetPopTvResult>(
    ["tv", "popular"],
    getPopTv
  );
```

<br/>
- [React](/posts/React)

```toc

```
