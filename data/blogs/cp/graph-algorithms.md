---
title: "Graph Algorithms for Competitive Programming"
description: "Essential graph algorithms every competitive programmer should know"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["graphs", "algorithms", "competitive-programming", "dfs", "bfs"]
difficulty: "advanced"
youtube: "https://www.youtube.com/watch?v=tWVWeAqZ0WU"
---

# Graph Algorithms for Competitive Programming

Graphs are fundamental data structures in competitive programming. Master these algorithms to solve complex problems efficiently.

## YouTube Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/tWVWeAqZ0WU" title="Graph Algorithms Tutorial" frameborder="0" allowfullscreen></iframe>

## Graph Representation

### Adjacency List (Recommended)
```cpp
vector<vector<int>> adj(n);
adj[u].push_back(v); // Add edge u -> v
```

### Adjacency Matrix
```cpp
vector<vector<int>> adj(n, vector<int>(n, 0));
adj[u][v] = 1; // Add edge u -> v
```

## Essential Algorithms

### 1. Depth-First Search (DFS)

```cpp
vector<bool> visited(n, false);

void dfs(int v, vector<vector<int>>& adj) {
    visited[v] = true;
    cout << v << " ";
    
    for (int u : adj[v]) {
        if (!visited[u]) {
            dfs(u, adj);
        }
    }
}
```

**Applications:**
- Connected components
- Cycle detection
- Topological sorting
- Bridge and articulation point finding

### 2. Breadth-First Search (BFS)

```cpp
void bfs(int start, vector<vector<int>>& adj) {
    vector<bool> visited(adj.size(), false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int v = q.front();
        q.pop();
        cout << v << " ";
        
        for (int u : adj[v]) {
            if (!visited[u]) {
                visited[u] = true;
                q.push(u);
            }
        }
    }
}
```

**Applications:**
- Shortest path in unweighted graphs
- Level-order traversal
- Bipartite graph checking

### 3. Dijkstra's Algorithm (Shortest Path)

```cpp
vector<int> dijkstra(int start, vector<vector<pair<int, int>>>& adj) {
    int n = adj.size();
    vector<int> dist(n, INT_MAX);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (auto& edge : adj[u]) {
            int v = edge.first;
            int w = edge.second;
            
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}
```

### 4. Floyd-Warshall (All Pairs Shortest Path)

```cpp
void floydWarshall(vector<vector<int>>& dist) {
    int n = dist.size();
    
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][k] != INT_MAX && dist[k][j] != INT_MAX) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
}
```

### 5. Topological Sort

```cpp
vector<int> topologicalSort(vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> indegree(n, 0);
    
    // Calculate indegrees
    for (int u = 0; u < n; u++) {
        for (int v : adj[u]) {
            indegree[v]++;
        }
    }
    
    queue<int> q;
    for (int i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    
    vector<int> result;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result.push_back(u);
        
        for (int v : adj[u]) {
            indegree[v]--;
            if (indegree[v] == 0) {
                q.push(v);
            }
        }
    }
    
    return result;
}
```

### 6. Union-Find (Disjoint Set Union)

```cpp
class UnionFind {
    vector<int> parent, rank;
    
public:
    UnionFind(int n) : parent(n), rank(n, 0) {
        iota(parent.begin(), parent.end(), 0);
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    bool unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        
        if (rank[px] < rank[py]) swap(px, py);
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        
        return true;
    }
};
```

## Advanced Algorithms

### Minimum Spanning Tree (Kruskal's)

```cpp
struct Edge {
    int u, v, weight;
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

int kruskal(vector<Edge>& edges, int n) {
    sort(edges.begin(), edges.end());
    UnionFind uf(n);
    
    int mst_weight = 0;
    for (const Edge& e : edges) {
        if (uf.unite(e.u, e.v)) {
            mst_weight += e.weight;
        }
    }
    return mst_weight;
}
```

## Common Problem Patterns

### 1. Connected Components
- Use DFS/BFS to find all connected components
- Applications: Social networks, island problems

### 2. Shortest Path Problems
- **Single source**: Dijkstra's, Bellman-Ford
- **All pairs**: Floyd-Warshall
- **Unweighted**: BFS

### 3. Cycle Detection
- **Undirected**: DFS with parent tracking
- **Directed**: DFS with color coding (white/gray/black)

### 4. Bipartite Graph Check
```cpp
bool isBipartite(vector<vector<int>>& adj) {
    int n = adj.size();
    vector<int> color(n, -1);
    
    for (int start = 0; start < n; start++) {
        if (color[start] == -1) {
            queue<int> q;
            q.push(start);
            color[start] = 0;
            
            while (!q.empty()) {
                int u = q.front();
                q.pop();
                
                for (int v : adj[u]) {
                    if (color[v] == -1) {
                        color[v] = 1 - color[u];
                        q.push(v);
                    } else if (color[v] == color[u]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
```

## Contest Tips

1. **Choose the right representation**: Adjacency list for sparse graphs, matrix for dense graphs
2. **Time complexity matters**: Know when to use which algorithm
3. **Edge cases**: Handle disconnected graphs, self-loops, multiple edges
4. **Memory optimization**: Use appropriate data types (int vs long long)

## Practice Problems

### Beginner
- **Number of Islands** - LeetCode 200
- **Clone Graph** - LeetCode 133
- **Course Schedule** - LeetCode 207

### Intermediate
- **Network Delay Time** - LeetCode 743
- **Cheapest Flights Within K Stops** - LeetCode 787
- **Critical Connections** - LeetCode 1192

### Advanced
- **Alien Dictionary** - LeetCode 269
- **Minimum Cost to Make at Least One Valid Path** - LeetCode 1368
- **Shortest Path Visiting All Nodes** - LeetCode 847

## Resources

- [CP-Algorithms Graph Section](https://cp-algorithms.com/graph/breadth-first-search.html)
- [Codeforces Graph Problems](https://codeforces.com/problemset?tags=graphs)
- [AtCoder Graph Contest Problems](https://atcoder.jp/contests/abc/tasks?f.Keyword=graph)

Master these algorithms and you'll be well-equipped to tackle most graph problems in competitive programming!
