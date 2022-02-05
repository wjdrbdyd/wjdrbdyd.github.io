---
emoji: 🧢
title: "[React] React JS 마스터클래스#5"
date: '2022-02-05 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - React JS 마스터클래스](https://nomadcoders.co/react-masterclass)

## 1. [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd/tree/master/docs/api)
* DRAG & DROP 구현 쉽게 해주는 lib
* Draggable에서 key와 draggableId는 같은 값이어야 한다.
* Droppable, Board, DragDropContext등 부모 State가 바뀌면 자식들은 모두 다시 렌더링 된다. React의 기본 특성 이로 인해 Draggable할 때 하나의 요소만 움직여도 다른 자식들도 모두 렌더링 된다.
이를 방지하기 위해 memo를 사용
`react memo`는 prop이 바뀌지 않는다면 컴포넌트 렌더링을 막아준다.
>예시 
```typescript
const DraggableCard = ({ toDo, idx }: IDraggableCardProps) => {
  ...
}
// prop이 바뀌지 않았다면 DraggableCard는 다시 렌더링 되지 않는다.
export default React.memo(DraggableCard);
```

<br/ >

> styled-component props 받는 예시(typescript)
```typescript
const Area = styled.div<{ isToggle: boolean}>`
  background-color:${props=>props.isToggle ? "white" :"black"}
`
```
<br/>

## 2. Reference
* React코드를 이용해 HTML 요소를 지정하고, 가져올 수 있는 방법
리액트 실전형 Hooks 10개 공부 중 useClick Hook 배울 때 배웠다.
[`링크`](/react-study/react-hooks-2/#22-useclick)

<br/>

- [React](/posts/React)

```toc

```
