# Stack - Data Structure
Stack is a linear data structure, which performs an operation in perticular order, the order is called FILO(First In Last Out).

## Example
Given an storage object. We need to do stack operation(push and pop) on this object.

### Steps
1. We have an empty object called storage = {} and a variable key_index = 0.
 2. Make a push function and add a value to this object with the key_index as key. Every time you can add more value to this object in a sequential order.
 3. Make a pop function and delete the last key_index of storage object. It will delete from the last.

 ## Pseudocode
 ```
function push(val) {
    storage[key_index] = val;
    key_index++;
    return storage;
}

function pop() { 
    key_index-=1;
    delete storage[key_index]
    return storage;
}
 ```