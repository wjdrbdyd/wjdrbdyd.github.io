---
emoji: 🧢
title: "[React] React JS 마스터클래스#4"
date: '2022-02-02 01:00:00'
author: 정굥
tags: blog react
categories: React
---


# [노마드코더 - React JS 마스터클래스](https://nomadcoders.co/react-masterclass)

## 1. Recoil selector
* `selector`는 state자체를 바꾸지 않고 원하는 방식으로 atom의 output을 변형시키는 도구
> 예시
- 하나의 atom으로 selector를 이용하여 category별로 데이터를 보여주는 예시
* atom.ts
```typescript
export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
// selector
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
```
* ToDoList.tsx
```typescript
const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  ...
  //toDo
  {toDo.map((toDo) => (
    <ToDo key={toDo.id} {...toDo} />
  ))}
}
```
#### selector get, set 
* 위에서 get은 다뤘으나 set은 다루지 않아 추가적인 예시 이다. 이 예시는 `minutes` atom으로 selector의 get을 이용해 `hours`를 표현하고 set을 이용해 `hours`를 `minutes`로 나타내는 예시이다.
```typescript
export const minutesState = atom({
  key: "minutes",
  default: 0,
});

export const hoursSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = 60 * Number(newValue);
    set(minutesState, minutes);
  },
});

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hoursSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <>
      <input value={minutes} onChange={onMinutesChange} placeholder="Minutes" />
      <input value={hours} onChange={onHoursChange} placeholder="Hours" />
    </>
  );
}
```
<br/>

- [React](/posts/React)

```toc

```
