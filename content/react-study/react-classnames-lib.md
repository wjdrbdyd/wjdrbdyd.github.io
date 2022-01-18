---
emoji: 🧢
title: "[React] React classnames lib"
date: '2022-01-19 02:00:00'
author: 정굥
tags: blog react
categories: React
---

# classnames
## 서로 다른 효과를 갖고 있는 css를 하나의 컴포넌트에 적용하는데 사용.
## 1. 설치
```bash
$ yarn add classnames
```

<br/>

## 2. 사용법
```javascript
import React, {Component} from 'react';
import classnames  from 'classnames/bind';
import styles from './App.css';

const cx = classnames.bind(styles);

class App... {
  render() {
    const isBlue = true;

    return (
      <div className = {cx('box', {blue : isBlue})}> 
      
    )
  }
}
``` 
* App.css의 스타일을 받아와서 box와 blue 값은 isBlue 값에 따라 보이거나 안보이거나

<br/>

```toc

```
