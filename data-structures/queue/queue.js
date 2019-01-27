/**
 * Queue - Data Structure
 * Main concept is First in First Out
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.students = ["Mark", "John", "Michael"];
    }
    /**
     * addStudent - add element/'s to the front
     */
    Queue.prototype.addStudents = function (new_student) {
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
    return Queue;
}());
var queue = new Queue();
console.log(queue.addStudents("Shaun")); // ['Shaun', 'Mark', 'John', 'Michael']
console.log(queue.dequeue()); // ['Mark', 'John', 'Michael']
console.log(queue.getLength()); // 3
