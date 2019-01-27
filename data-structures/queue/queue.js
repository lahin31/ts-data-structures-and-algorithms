/**
 * Queue - Data Structure
 * Main concept is First in First Out
 * We have a students array where we add student into the front
 * and delete student from the front
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.students = ["Mark", "John", "Michael"];
    }
    /**
     * addStudent - add element/'s to the front
     */
    Queue.prototype.enqueue = function (new_student) {
        if (this.students.length === 0) { // checking if the students array is null we directly push the value into the array
            this.students.unshift(new_student);
            return this.students;
        }
        else {
            var added = false;
            for (var i = 0; i < this.students.length; i++) {
                if (new_student < this.students[i]) {
                    this.students.splice(i, 0, new_student);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.students.push(new_student);
            }
            return this.students;
        }
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
console.log(queue.enqueue("Shaun")); // ['Shaun', 'Mark', 'John', 'Michael']
console.log(queue.dequeue()); // ['Mark', 'John', 'Michael']
console.log(queue.getLength()); // 3
