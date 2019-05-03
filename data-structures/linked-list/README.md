# Linked List - Data Structure

A linked list is a data structure which represents a series of nodes where each node points to the next node in the list.

## Difference between Array and Linked List

The difference between Array and Linked List is Linked List can't provide an index, so in order to get the fourth element we need to iterate the first second and third element(node).

## Benefits

Benefit is we can add or remove element from beginning and end of the list in constant time.

## Example

There are 6 methods we are going to do.
i) isEmpty - checks the list is empty or not

```
isEmpty() {
  return this.head === null; // returns true if the list is empty or returns false if it's not empty
}
```

We are checking our list in empty or not.

ii) size - returns the size of the list

```
size() {
  let count: number = 0;
  let _head = this.head; // making a reference of the list(this.head)
  while(_head !== null) { // iterate the list untill it becomes null
    count++;
    _head = _head.next; // updating the head with the next(as next can be nested list)
  }
  return count;
}
```

iii) appendNode - add node in the last, of the list

```
appendNode(data: number) {
  let newNode = { // making a newNode object
    data,
    next: null
  };
  let _head = this.head; // making a reference of the list(this.head)
  while(_head.next !== null) {
    _head = _head.next;
  }
  _head.next = newNode;
  return this.head;
}
```

As you can see we are iterating the \_head, so we will get the last property stored in the \_head, then we assign our new node element.

iv) prepend - add element in the head, of the list

```
public prepend(element: number) {
  let newNode = {
    data: element,
    next: this.head
  };
  this.head = newNode;
  return this.head;
}
```

You can see we are making a new node, in that node object we are storing this.head in the next property so as a result of that the whole node will append in the child of the new node. Then we are updating the head with new node.

v) remove - removes the item from the list

```
remove(val: number) {
  let currentNode = this.head;
  let previousNode;
  if (currentNode.data === val) {
    currentNode = currentNode.next;
    return currentNode;
  } else {
    while (currentNode.data !== val) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next; //when we find the data, the previousNode will update it's next with the currentNode
    return this.head;
  }
}
```

We are taking val as a perameter, making a reference of this.head. Then we are checking if the val is equal to data property, if yes then take the next property and return it, else traverse currentNode.data untill it equals to val in each iteration take the currentNode and assign it to previousNode (tracking each current node) and currentNode is updating with it's next node. After the finishing of the loop just return the list. Which contains elements except the val.

vi) contains - checks if the value contains in the list or not

```
contains(val: number) {
  let _head = this.head;
  while (_head !== null) {
    if (_head.data === val) {
      return true;
    }
    _head = _head.next;
  }
  return false;
}
```

Traverse the \_head untill it equals to null(which is the ending). If it equals to the val return true. Return false when the iteration is complete.
