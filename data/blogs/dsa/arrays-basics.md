---
title: "Arrays Fundamentals"
description: "Understanding arrays and basic operations"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["arrays", "basics", "data-structures"]
difficulty: "beginner"
---

# Arrays Fundamentals

Arrays are one of the most fundamental data structures in computer science. They store elements in contiguous memory locations.

## Key Concepts

- **Fixed Size**: Arrays have a predetermined size
- **Index-based Access**: Elements accessed via indices (0-based)
- **Homogeneous**: All elements are of the same type

## Basic Operations

### 1. Declaration and Initialization
```java
int[] arr = new int[5];
int[] arr2 = {1, 2, 3, 4, 5};
```

### 2. Access Elements
```java
int first = arr[0];
int last = arr[arr.length - 1];
```

### 3. Traversal
```java
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

## Time Complexity
- Access: O(1)
- Search: O(n)
- Insertion: O(n)
- Deletion: O(n)

## Practice Problems
1. Find maximum element in array
2. Reverse an array
3. Two sum problem
