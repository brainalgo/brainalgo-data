---
title: "Linked Lists Implementation"
description: "Understanding linked list data structure, insertion, deletion, and traversal"
date: "2024-08-17"
author: "BrainAlgo Team"
tags: ["linked-lists", "data-structures", "pointers"]
difficulty: "intermediate"
duration: "25 min"
youtubeId: "dQw4w9WgXcQ"
---

# Linked Lists Implementation

A linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists don't store elements in contiguous memory locations.

## Why Linked Lists?

- **Dynamic Size**: Can grow or shrink during runtime
- **Efficient Insertion/Deletion**: O(1) at the beginning
- **Memory Efficient**: Only allocates memory as needed
- **No Memory Waste**: Unlike arrays with fixed size

## Node Structure

```java
class ListNode {
    int data;
    ListNode next;
    
    // Constructor
    public ListNode(int data) {
        this.data = data;
        this.next = null;
    }
}
```

## LinkedList Class Implementation

```java
class LinkedList {
    private ListNode head;
    
    public LinkedList() {
        this.head = null;
    }
    
    // Check if list is empty
    public boolean isEmpty() {
        return head == null;
    }
    
    // Get size of list
    public int size() {
        int count = 0;
        ListNode current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}
```

## Insertion Operations

### Insert at Beginning - O(1)

```java
public void insertAtBeginning(int data) {
    ListNode newNode = new ListNode(data);
    newNode.next = head;
    head = newNode;
}
```

### Insert at End - O(n)

```java
public void insertAtEnd(int data) {
    ListNode newNode = new ListNode(data);
    
    if (head == null) {
        head = newNode;
        return;
    }
    
    ListNode current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
}
```

### Insert at Position - O(n)

```java
public void insertAtPosition(int data, int position) {
    if (position < 0) {
        throw new IllegalArgumentException("Position cannot be negative");
    }
    
    if (position == 0) {
        insertAtBeginning(data);
        return;
    }
    
    ListNode newNode = new ListNode(data);
    ListNode current = head;
    
    // Traverse to position - 1
    for (int i = 0; i < position - 1 && current != null; i++) {
        current = current.next;
    }
    
    if (current == null) {
        throw new IndexOutOfBoundsException("Position out of bounds");
    }
    
    newNode.next = current.next;
    current.next = newNode;
}
```

## Deletion Operations

### Delete from Beginning - O(1)

```java
public void deleteFromBeginning() {
    if (head == null) {
        throw new RuntimeException("List is empty");
    }
    head = head.next;
}
```

### Delete by Value - O(n)

```java
public boolean deleteByValue(int value) {
    if (head == null) {
        return false;
    }
    
    if (head.data == value) {
        head = head.next;
        return true;
    }
    
    ListNode current = head;
    while (current.next != null && current.next.data != value) {
        current = current.next;
    }
    
    if (current.next == null) {
        return false; // Value not found
    }
    
    current.next = current.next.next;
    return true;
}
```

## Traversal and Search

### Display All Elements

```java
public void display() {
    if (head == null) {
        System.out.println("List is empty");
        return;
    }
    
    ListNode current = head;
    System.out.print("List: ");
    while (current != null) {
        System.out.print(current.data + " -> ");
        current = current.next;
    }
    System.out.println("null");
}
```

### Search for Value

```java
public boolean search(int value) {
    ListNode current = head;
    while (current != null) {
        if (current.data == value) {
            return true;
        }
        current = current.next;
    }
    return false;
}
```

## Advanced Operations

### Reverse Linked List

```java
public ListNode reverse() {
    ListNode prev = null;
    ListNode current = head;
    ListNode next = null;
    
    while (current != null) {
        next = current.next;  // Store next
        current.next = prev;  // Reverse link
        prev = current;       // Move prev forward
        current = next;       // Move current forward
    }
    
    head = prev;  // Update head
    return head;
}
```

### Find Middle Element (Floyd's Algorithm)

```java
public ListNode findMiddle() {
    if (head == null) return null;
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
```

### Detect Cycle

```java
public boolean hasCycle() {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;  // Cycle detected
        }
    }
    
    return false;  // No cycle
}
```

## Time Complexity Comparison

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | O(1) | O(n) |
| Search | O(n) | O(n) |
| Insert at beginning | O(n) | O(1) |
| Insert at end | O(1) | O(n) |
| Delete from beginning | O(n) | O(1) |
| Delete from end | O(1) | O(n) |

## Common Interview Problems

### Problem 1: Remove Duplicates

```java
public void removeDuplicates() {
    if (head == null) return;
    
    ListNode current = head;
    while (current.next != null) {
        if (current.data == current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
}
```

### Problem 2: Merge Two Sorted Lists

```java
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.data <= l2.data) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Append remaining nodes
    current.next = (l1 != null) ? l1 : l2;
    
    return dummy.next;
}
```

## Best Practices

1. **Always check for null**: Before accessing node properties
2. **Use dummy nodes**: For easier insertion/deletion operations
3. **Two-pointer technique**: For finding middle, detecting cycles
4. **Draw diagrams**: Visualize pointer movements
5. **Handle edge cases**: Empty list, single node, etc.

## Conclusion

Linked lists are fundamental data structures that offer dynamic memory allocation and efficient insertion/deletion operations. While they have some drawbacks compared to arrays (like no random access), they're essential for understanding more complex data structures like stacks, queues, and graphs.

**Next Steps:**
- Practice linked list problems on coding platforms
- Learn about doubly linked lists
- Explore circular linked lists
- Study stack and queue implementations using linked lists
