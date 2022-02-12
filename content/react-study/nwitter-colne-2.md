---
emoji: 🧢
title: "[React] Nwitter Clone#2"
date: '2022-02-12 01:00:00'
author: 정굥
tags: blog react
categories: React
---

## [노마드코더 - Twitter Clone](https://nomadcoders.co/nwitter/lobby)

* version 9
  
## A. Authentication(Login) 
**Using API**
* [@firebase/auth](https://firebase.google.com/docs/reference/js/auth?authuser=0)
**`getAuth`,`createUserWithEmailAndPassword`, `signInWithEmailAndPassword`,`setPersistence`,`onAuthStateChanged`,`signInWithPopup`,**
<br/>

## B. Firestore Database
* Firestore는 NoSQL Database
**특성**
1. Collection이라고 불리는 것을 갖고 있다.(폴더와 같다고 보면 됨)
2. Document가 있다(문서라고 보면 됨)
3. 하나의 database는 collection들을 갖고 있고, 하나의 collection은 Document들을 가지고 있다.

**사용 API**
* [@firebase/firestore](https://firebase.google.com/docs/reference/js/firestore_?authuser=0)
**`collection`, `addDoc`**
> ### collection & document 생성 예시
```javascript
try {
  const docRef = await addDoc(collection(storeService, "nweets"), {
    nweet,
    createdAt: Date.now(),
  });
  setNweet("");
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
```

<br/>

> ### Data Read 
* 공식문서 참조- [예시](https://firebase.google.com/docs/firestore/quickstart?authuser=0#read_data)   

<br/>

- [React](/posts/React)
  
```toc

```