/**
 * Linked List - Data Structure
 * An alternative of Array Data Structure
 * Every element stored in node, the next element of each node(or element) is represented by an address
 */

/**
 * Example Explanation
 * We have public variable which can be any type(but initial null, as from the starting point the list should be null)
 * Then we add item to our list and our list grow like this, ex - { data: 5, next: (points the associated node for data 5)}
 */

class LinkedList {
    public head: any = null;

    /**
     * size - returns the size of the list
     */
    public size() {
        let count: number = 0;
        let _head = this.head; // making a reference of the list(this.head)
        while(_head !== null) { // loop the list untill the list is become null
            count++;
            _head = _head.next; // updating the head with the next(as next can be our nested list)
        }
        return count;
    }

    /**
     * appendNode - add node in the last, of the list
     */
    public appendNode(data: number) {
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

    /**
     * add - add element in the head, of the list
     */
    public prepend(element: number) {
       let newNode = {
           data: element,
           next: this.head
       }
       this.head = newNode;
       return this.head;
    }

    /**
     * isEmpty - checks the list is empty or not
     */
    public isEmpty() {
        return this.head === null; // returns true if the list is empty or returns false if it's not empty
    }

    /**
     * remove - removes the item from the list
     */
    public remove(val: number) {
        let currentNode = this.head;
        let previousNode;
        if(currentNode.data === val) {
            currentNode = currentNode.next;
            return currentNode;
        } else {
            while(currentNode.data !== val) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next // when we find the data, the previousNode will update it's next with the currentNode
            return this.head;
        }
    }

    /**
     * contains - checks if the value contains in the list or not
     */
    public contains(val: number) {
        let _head = this.head;
        while(_head !== null) {
            if(_head.data === val) {
                return true;
            }
            _head = _head.next
        }
        return false;
    }
}

let linkedList = new LinkedList()
console.log(linkedList.prepend(10)) // { data: 10, next: null }
console.log(linkedList.prepend(5)) // { data: 5, next: { data: 10, next: null } }
console.log(linkedList.size()) // 2
console.log(linkedList.isEmpty()) // false
console.log(linkedList.appendNode(6)) // { data: 5, next: { data: 10, next: { data: 6, next: null } } }
console.log(linkedList.remove(6)) // { data: 5, next: { data: 10, next: null } }
console.log(linkedList.contains(10)) // true