---
emoji: 🧢
title: "[React] Nwitter Clone#3"
date: '2022-02-13 01:00:00'
author: 정굥
tags: blog react
categories: React
---

## [노마드코더 - Twitter Clone](https://nomadcoders.co/nwitter/lobby)

* version 9

### 이전 Post 이어서 작성 [Firestore Database](../nwitter-colne-2/#b-firestore-database)
## B. Firestore Database
**사용 API(추가)**
**`getFirestore`,`collection`,`addDoc`,`getDocs`,`onSnapshot`,`query`,`orderBy`,`doc`,`deleteDoc`,`updateDoc`,**
### Real time
* onSnapshot은 데이터베이스에 변동이 생기면 알림을 받아서 Realtime에 사용
* 공식문서 참조= [예시](https://firebase.google.com/docs/firestore/manage-data/delete-data#delete_documents)
### Delete
* 공식문서 참조- [예시](https://firebase.google.com/docs/firestore/quickstart?authuser=0#read_data)   
### Uodate
공식문서 참조- [예시](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection)   

## C. Firebase Storage
**사용 API**
**`getStorage`,`ref`,`uploadString`,`getDownloadURL`,`deleteObject`**

### API [FileReader](https://developer.mozilla.org/ko/docs/Web/API/FileReader)
> 예시
```javascript
 const {
    currentTarget: { files },
  } = event;
  const theFile = files && files[0];
  const reader = new FileReader();
  reader.onloadend = (finishedEvent: any) => {
    const {
      currentTarget: { result },
    } = finishedEvent;
    setAttachment(result);
  };
  if (theFile !== null) {
    reader.readAsDataURL(theFile);
  }
```
> typescript로 작성시 Error
 - onloadend - EventTarget | null' 형식에 'result' 속성이 없습니다. 
 - Error 처리 - 여러가지 방법이 있었으나 간단하게 any형으로 처리하였다.

### [Storage Upload](https://firebase.google.com/docs/storage/web/upload-files?authuser=0#upload_from_a_string)
* `uuidv4` - 랜덤으로 uid 생성
> 예시
```javascript
const attachmentRef = ref(storageService, `${userObj?.uid}/${uuidv4()}`);
const response = await uploadString(
  attachmentRef,
  attachment,
  "data_url"
);
attachmentUrl = await getDownloadURL(response.ref);
```
### [Delete File](https://firebase.google.com/docs/storage/web/delete-files?authuser=0#delete_a_file)
> 예시
```javascript
// Create a reference to the file to delete
const desertRef = ref(storageService, nweetObj.attachmentUrl);
// Delete the file
await deleteObject(desertRef);
```

<br/>

- [React](/posts/React)
  
```toc

```