---
emoji: 🔮
title: "[이것이 코딩 테스트다] '최단경로' 알고리즘"
date: '2022-01-11 01:01:00'
author: 정굥
tags: 블로그 github-pages gatsby
categories: 알고리즘 최단경로
---

## 사례
  * 한 지점에서 다른 특정 지점까지 최단 경로
  * 모든 지점에서 다른 모든 지점까지 최단 경로
<br/>

## 종류 
1. 다익스트라 최단 경로
2. 플로이드 워셜
3. 벨만 포드

## 다익스트라 최단 경로 알고리즘
- 그래프에서 여러 개의 노드가 있을 때, 특정 노드에서 출발하여 다른 노드로 가는  
  각각의 최단 경로를 구해주는 알고리즘
- '음의 간선' 이 없을 때 정상적 동작
- 우선순위 큐 이용

### 1. 동작 원리
1. 출발 노드 설정
2. 최단 거리 테이블 초기화
3. 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블 갱신
5. `3` 과 `4` 번 반복

<br/>

### 2. 코드 
```python
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)  # 무한을 의미하는 값 

# 노드의 개수, 간선의 개수 
n, m = map(int, input().split())
# 시작 노드 번호
start = int(input())
# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트
graph = [[] for _ in range(n + 1)]
# 최단 거리 테이블
distance = [INF] * (n + 1)

for _ in range(m):
  a, b, c = map(int, input().split())
  # a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].append((b, c))

def dijkstra(start):
  q = []
  # 시작 노드로 가기 위한 최단 경로 0으로 설정, 큐에 삽입
  heapq.heappush(q, (0, start))
  distance[start] = 0
  distance[start] = 0
  while q :
    # 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    dist, now = heapq.heappop(q)
    # 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if distance[now] < dist:
      continue
    # 현재 노드와 연결된 다른 인접한 노드들 확인
    for i in graph[now]:
      cost = dist + i[1]
      # 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))
  
# 다익스트라 알고리즘 수행
dijkstra(start)

# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n + 1):
  # 도달할 수 없는 경우, 무한이라고 출력
  if distance[i] == INF :
    print("INFINITY")
  else :
    print(f'노드번호:{distance[i]}')
```
<br/>

## 플로이드 워셜 알고리즘
- 모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구해야 하는 경우 사용
### 1. 점화식
* Dab = min(Dab, Dak + Dkb) 
### 2. 코드
```python
INF = int(1e9)

# 노드의 개수 및 간선의 개수를 입력받기
n = int(input())
m = int(input())
# 2차원 리스트 
graph = [[INF] * (n + 1) for _ in range(n + 1)]
# 자기 자신 비용 0
for a in range(1, n + 1):
  for b in range(1, n + 1):
    if a == b :
      graph[a][b] = 0

# 각 간선에 대한 정보 입력받아, 그 값으로 초기화
for _ in range(m):
  # A -> B 비용 C
  a, b, c = map(int, input().split())
  graph[a][b] = c

# 점화식에 따라 플로이드 워셜 알고리즘 수행
for k in range(1, n + 1):
  for a in range(1, n + 1):
    for b in range(1, n + 1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for a in range(1, n + 1):
  for b in range(1, n + 1):
    # 도달할 수 없는 경우, 무한 이라고 출력
    if graph[a][b] == INF:
      print('INFINITY', end=' ')
    else:
      print(graph[a][b], end=' ')
  print()
```
> ## 알고리즘 분류
- [최단경로](/posts/최단경로)
  
```toc

```

