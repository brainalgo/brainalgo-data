---
title: "Binary Trees Complete Guide"
description: "Master binary trees with theory, implementation, and practice problems"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["binary-trees", "data-structures", "algorithms"]
difficulty: "intermediate"
youtube: "https://www.youtube.com/watch?v=H5JubkIy_p8"
---

# Binary Trees Complete Guide

Binary trees are hierarchical data structures that form the foundation for many advanced algorithms and data structures.

## What is a Binary Tree?

A binary tree is a tree data structure where each node has at most two children, referred to as left and right child.

## YouTube Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/H5JubkIy_p8" title="Binary Trees Tutorial" frameborder="0" allowfullscreen></iframe>

## Key Properties

- **Maximum nodes at level i**: 2^i
- **Maximum nodes in tree of height h**: 2^(h+1) - 1
- **Minimum height**: log₂(n+1) - 1

## Types of Binary Trees

### 1. Full Binary Tree
Every node has either 0 or 2 children.

### 2. Complete Binary Tree
All levels are filled except possibly the last level, which is filled from left to right.

### 3. Perfect Binary Tree
All internal nodes have two children and all leaves are at the same level.

## Implementation

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    TreeNode root;
    
    // Inorder traversal: Left -> Root -> Right
    public void inorder(TreeNode node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.val + " ");
            inorder(node.right);
        }
    }
    
    // Preorder traversal: Root -> Left -> Right
    public void preorder(TreeNode node) {
        if (node != null) {
            System.out.print(node.val + " ");
            preorder(node.left);
            preorder(node.right);
        }
    }
    
    // Postorder traversal: Left -> Right -> Root
    public void postorder(TreeNode node) {
        if (node != null) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.val + " ");
        }
    }
}
```

## Common Operations

### Height of Binary Tree
```java
public int height(TreeNode root) {
    if (root == null) return -1;
    return 1 + Math.max(height(root.left), height(root.right));
}
```

### Level Order Traversal (BFS)
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}
```

## Practice Problems

### Beginner
1. **Maximum Depth of Binary Tree** - LeetCode 104
2. **Same Tree** - LeetCode 100
3. **Invert Binary Tree** - LeetCode 226

### Intermediate
1. **Validate Binary Search Tree** - LeetCode 98
2. **Lowest Common Ancestor** - LeetCode 236
3. **Binary Tree Right Side View** - LeetCode 199

### Advanced
1. **Serialize and Deserialize Binary Tree** - LeetCode 297
2. **Binary Tree Maximum Path Sum** - LeetCode 124
3. **Recover Binary Search Tree** - LeetCode 99

## Time Complexities

| Operation | Average | Worst Case |
|-----------|---------|------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |
| Traversal | O(n) | O(n) |

## Resources for Further Learning

- [VisuAlgo Binary Tree](https://visualgo.net/en/bst)
- [GeeksforGeeks Binary Trees](https://www.geeksforgeeks.org/binary-tree-data-structure/)
- [LeetCode Tree Problems](https://leetcode.com/tag/tree/)

## Next Steps

1. Practice basic traversal algorithms
2. Solve tree problems on LeetCode
3. Learn about Binary Search Trees (BST)
4. Study advanced tree structures (AVL, Red-Black trees)
