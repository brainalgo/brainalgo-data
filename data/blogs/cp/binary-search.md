---
title: "Binary Search Mastery"
description: "Master binary search for competitive programming"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["binary-search", "algorithms", "competitive-programming"]
difficulty: "intermediate"
---

# Binary Search Mastery

Binary search is a fundamental algorithm for competitive programming that reduces search space by half in each iteration.

## Algorithm
```java
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}
```

## Variations
1. **Lower Bound**: First occurrence
2. **Upper Bound**: Last occurrence  
3. **Search in Rotated Array**
4. **Peak Element**

## Common Patterns
- Answer lies in range [L, R]
- Monotonic function f(x)
- If f(mid) is true, search left; else search right

## Contest Tips
- Always check for integer overflow in mid calculation
- Be careful with boundary conditions
- Practice on sorted arrays first, then move to complex scenarios
