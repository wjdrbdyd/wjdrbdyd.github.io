---
emoji: 🔮
title: "[백준 알고리즘] '정수삼각형' 알고리즘"
date: '2022-01-11 00:00:00'
author: 정굥
tags: 블로그 github-pages gatsby
categories: 알고리즘 다이나믹프로그래밍
---

## 정수삼각형

### [백준 - 문제 링크](https://www.acmicpc.net/problem/1932)
            7
          3   8
        8   1   0
      2   7   4   4
    4   5   2   6   5

위 그림은 크기가 5인 정수 삼각형의 한 모습이다.

맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.

삼각형의 크기는 1 이상 500 이하이다. 삼각형을 이루고 있는 각 수는 모두 정수이며, 범위는 0 이상 9999 이하이다.

> ## 입력 
첫째 줄에 삼각형의 크기 n(1 ≤ n ≤ 500)이 주어지고, 둘째 줄부터 n+1번째 줄까지 정수 삼각형이 주어진다.

> ## 출력 
아래 페이지에 도달하시면 두 가지 정보를 넣어주셔야 하는데, Your old repository's clone URL에는 사용하고자 하는 gatsby 테마가 있는 repository의 주소를 넣어주시면 됩니다.

> ## 예제입력 1
    5 7
     1 2
     1 3
     1 4
     2 4
     3 4
     3 5
     4 5
     4 5
> ## 예제 출력 1
    30   

<br/>

> ## 접근
1. N범위 100이하 -> 최단거리 플로이드 워셜
2. 플로이드 워셜 점화식
  * Dab = min(Dab, Dak + Dkb)

> ## 오답
플로이드 워셜 접근은 했으나 주어진 문제가 양방향 그래프란점을 간과하고 코드 작성 하였음. 문제를 그림으로 그려보고 풀어보는 습관 가지도록 하자.

<br/>

> ## 풀이 코드 
```python
INF = int(1e9)
n, m = map(int, input().split())
# 데이터 무한으로 초기화
graph = [[INF] * (n + 1) for _ in range(n + 1)]

# 문제에서 요구하는 점화식
# Dxk 
# 자기 자신 비용 0
for a in range(1, n + 1):
  for b in range(1, n + 1):
    if a == b :
      graph[a][b] = 0

# 거리 초기 값 입력
for _ in range(1, m + 1):
  a, b = map(int, input().split())
  graph[a][b] = 1
  graph[b][a] = 1

x, y = map(int, input().split())

for k in range(1, n + 1):
  for a in range(1, n + 1):
    for b in range(1, n + 1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

print(graph)

result = graph[1][k] + graph[k][x]
if result >= INF:
  print(-1)
else:
  print(result)
```

<br/>

> ## 알고리즘 분류
- [다이나믹프로그래밍](/posts/다이나믹프로그래밍)
  


