---
title: "Arrays Fundamentals"
description: "Understanding arrays and basic operations"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["arrays", "basics", "data-structures"]
difficulty: "beginner"
duration: "15 min"
youtubeId: "dQw4w9WgXcQ"
---

# Arrays Fundamentals

Arrays are one of the most fundamental data structures in computer science. They store elements in contiguous memory locations, making them efficient for accessing elements by index.

## Key Concepts

- **Fixed Size**: Arrays have a predetermined size
- **Index-based Access**: Elements accessed via indices (0-based)
- **Homogeneous**: All elements are of the same type
- **Contiguous Memory**: Elements stored in adjacent memory locations

## Basic Operations

### 1. Declaration and Initialization

```java
// Array declaration and initialization
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[10];

// Accessing elements
int firstNumber = numbers[0];  // Gets 1
int lastNumber = numbers[4];   // Gets 5
```

### 2. Array Traversal

Traversal means visiting each element in the array sequentially.

```java
public void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
    }
}

// Enhanced for loop (recommended when index not needed)
public void printArrayEnhanced(int[] arr) {
    for (int element : arr) {
        System.out.print(element + " ");
    }
}
```

### 3. Searching in Arrays

```java
// Linear Search - O(n) time complexity
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;  // Return index
        }
    }
    return -1;  // Not found
}

// Binary Search - O(log n) time complexity (for sorted arrays)
public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;  // Not found
}
```

## Time Complexity Analysis

Understanding the time complexity of array operations is crucial:

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Access by index | O(1) | Direct memory access |
| Linear Search | O(n) | Must check each element |
| Binary Search | O(log n) | Only for sorted arrays |
| Insertion at end | O(1) | If space available |
| Insertion at middle | O(n) | Must shift elements |
| Deletion | O(n) | Must shift elements |

## Common Array Problems

### Problem 1: Find Maximum Element

```java
public int findMax(int[] arr) {
    if (arr.length == 0) {
        throw new IllegalArgumentException("Array is empty");
    }
    
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

### Problem 2: Reverse Array

```java
public void reverseArray(int[] arr) {
    int left = 0;
    int right = arr.length - 1;
    
    while (left < right) {
        // Swap elements
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        
        left++;
        right--;
    }
}
```

### Problem 3: Two Sum Problem

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        
        map.put(nums[i], i);
    }
    
    return new int[]{}; // No solution found
}
```

## Best Practices

1. **Always validate input**: Check for null arrays and valid indices
2. **Use enhanced for loops**: When you don't need the index
3. **Consider ArrayList**: For dynamic sizing requirements
4. **Initialize with appropriate size**: To avoid frequent resizing
5. **Use meaningful variable names**: For better code readability

```java
// Good practices example
public double calculateAverage(int[] grades) {
    if (grades == null || grades.length == 0) {
        throw new IllegalArgumentException("Grades array cannot be null or empty");
    }
    
    int sum = 0;
    for (int grade : grades) {
        sum += grade;
    }
    
    return (double) sum / grades.length;
}
```

## Conclusion

Arrays are fundamental to programming and form the basis for more complex data structures. Understanding array operations, their time complexities, and common algorithms is essential for any programmer.

**Next Steps:**
- Practice array problems on coding platforms
- Learn about dynamic arrays (ArrayList in Java)
- Explore multi-dimensional arrays
- Study sorting algorithms that work with arrays
