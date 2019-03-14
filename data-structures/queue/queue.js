"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.students = ["Mark", "John", "Michael"];
    }
    /**
     * addStudent - add element/'s to the front
     */
    Queue.prototype.enqueue = function (new_student) {
        this.students.unshift(new_student);
        return this.students;
    };
    /**
     * dequeue - delete the first item
     */
    Queue.prototype.dequeue = function () {
        this.students.shift();
        return this.students;
    };
    /**
     * getLength - returns the length of the students array
     */
    Queue.prototype.getLength = function () {
        return this.students.length;
    };
    /**
     * getFrontValue - return the front(first) value of the queue
     */
    Queue.prototype.getFrontValue = function () {
        return this.students[0];
    };
    return Queue;
}());
var queue = new Queue();
console.log(queue.enqueue("Shaun")); // ['Shaun', 'Mark', 'John', 'Michael']
console.log(queue.dequeue()); // ['Mark', 'John', 'Michael']
console.log(queue.getLength()); // 3
console.log(queue.getFrontValue()); // "Mark"
