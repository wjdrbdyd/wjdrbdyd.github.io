---
emoji: 🧢
title: "[Git] gh page publishing"
date: '2022-02-10 01:00:00'
author: 정굥
tags: blog GitStudy
categories: Git
---

## React Project Publishing 
publishing 처음하는 것도 아닌데 매번 까먹어서 정리 해놓자 !! 
## 1. gh-pages 설치
```bash
$ npm i gh-pages
```
## 2. package.json 수정
```json
  "scripts": {
    ...
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  ...
  "homepage": "https://{user_name}.github.io/{repository_name}"
```
* `predeploy`- build폴더 생성, `deploy` - publishing
  
## 3. Router dom v6만 해당
* basename 부분 추가 
```javascript
<Router basename={`${process.env.PUBLIC_URL}`}>
// <Router>
</Router>

```

```toc

```